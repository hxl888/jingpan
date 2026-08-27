#!/usr/bin/env python3
"""Thin proxy: POST /api/chart-ai-reading → Cloudflare Workers AI (OpenAI-compatible)."""
from __future__ import annotations

import json
import os
import re
import sys
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib import error, request

ROOT = Path(__file__).resolve().parent
ENV_FILE = ROOT / '.env'

# 仅拦「行动性」断语。勿含「大吉/大凶/吉凶」——模型常在解读提示写「不作大吉大凶」，会误杀并触发二次请求。
FORBIDDEN = re.compile(r'開運方法|改命|招財術|破財免|宜嫁娶|宜出行|命運好壞|必主大富|必主橫財')

DISCLAIMER_SPAN = re.compile(
    r'[^。！？\n]{0,30}(不[作做编編致提供]|禁止|勿|無|没有|並非|并非|僅供|仅供)[^。！？\n]{0,48}'
    r'(大吉|大凶|吉凶|開運|改命|宜忌|禍福|祸福|断语|斷語)[^。！？\n]{0,24}[。！？]?'
)

# 输出侧：仍像旧稿（引古文 / 逐宫）则判失败
STYLE_BAD = re.compile(
    r'古[诀訣][云雲说说說]|古人[说说說以]|古[书書][说说說形]|據《|据《|'
    r'##\s*分[宫宮]|##\s*材料串讲|##\s*材料串講|##\s*命盘概述|##\s*命盤概述|##\s*研习提示|##\s*研習提示|##\s*解读提示|##\s*解讀提示|'
    r'\*\*[^*]{0,12}[宫宮]\*\*'
)

STYLE_NEED_OVERVIEW = re.compile(r'##\s*人物总览|##\s*人物總覽')
STYLE_NEED_STAGES = re.compile(r'##\s*人生阶段|##\s*人生階段')
STYLE_NEED_MARRIAGE = re.compile(r'##\s*婚姻感情')
STYLE_NEED_CAREER = re.compile(r'##\s*工作事业|##\s*工作事業')
STYLE_NEED_HEALTH = re.compile(r'##\s*健康与家人|##\s*健康與家人')
STYLE_NEED_WEALTH = re.compile(r'##\s*财运与资源|##\s*財運與資源')
STYLE_NEED_NEAR = re.compile(r'##\s*近前后五年|##\s*近前後五年')
STYLE_NEED_ENDING = re.compile(r'##\s*结尾说明|##\s*結尾說明')

STAGE_HEADING = re.compile(r'^###\s*(\d+-\d+)岁\s*$', re.MULTILINE)
STAGES_SECTION = re.compile(r'(##\s*人生阶段.*?)(##\s*婚姻感情)', re.DOTALL)

QUALITY_DEGEN = re.compile(
    r'（注：|需重新组织|已作废|请根据JSON|redacted|指令：|再次出现重复|上一段生成中断|'
    r'需彻底重写|/chat_template|enable_thinking'
)
QUALITY_AFTER_STAGES = re.compile(
    r'不代表只能活|不能理解为.*活到|更之后.*无法|无法据此断定|并非.*寿元'
)

# 模型复读高频句
REPEAT_PHRASE_LIMITS: tuple[tuple[str, int], ...] = (
    ('这十年里', 5),
    ('这五年里', 4),
    ('可能会遇到一个让他觉得比较「稳」的人', 2),
    ('或者开始尝试建立自己的小家庭', 2),
    ('他可能会遇到一个', 4),
)

# 大限宫名 → 生活主题（避免模型按宫罗列）
THEME_MAP = {
    '命宫': '自身与性格',
    '命宮': '自身与性格',
    '兄弟': '同辈与协作',
    '夫妻': '亲密关系',
    '子女': '晚辈与创造',
    '财帛': '钱财与资源',
    '財帛': '钱财与资源',
    '疾厄': '身心压力',
    '迁移': '外出与变动',
    '遷移': '外出与变动',
    '交友': '人际助力',
    '仆役': '人际助力',
    '僕役': '人际助力',
    '事业': '事业与职责',
    '事業': '事业与职责',
    '官禄': '事业与职责',
    '官祿': '事业与职责',
    '田宅': '家庭与资产',
    '福德': '内心满足与享乐',
    '父母': '长辈与出身背景',
}

CLASSIC_IN_VERNA = re.compile(
    r'古[书書][说说說形稱称为為]|古人[说说說以]|古[诀訣][云雲说说說]|'
    r'据《[^》]+》|據《[^》]+》|《[^》]{1,16}》'
)

SYSTEM_PROMPT = """你是「经盘」的细读助手：像一位熟识这盘材料的人，对着「这一位」把人生讲细、讲具体。只根据 JSON，写成现代白话。

绝对禁止（出现即失败）：
- 文言原句、古诀、半文半白、「古书说/古人说/古诀云」、书名号引文
- 按宫名逐条清单（禁止「命宫：」「夫妻宫：」「## 分宫要点」「## 材料串讲」「## 命盘概述」）
- 祸福断语、开运改命、宜忌、命运好坏总评；禁止「必嫁/必生/一定几岁」等硬断
- 医疗诊断、就医指令、投资理财指令、法律行动建议
- 套话与千篇一律：禁止「整体呈现出」「从命盘结构来看」「这意味着他」「这表明他」这类公文腔；禁止只罗列星名而不落到生活场景

写作目标（本盘必须「像只写给这一位」，换盘要明显不同）：
1. 只用 JSON；不编造未给出的星曜、年龄、年份。材料不足处写「从本盘不易具体推到」，勿硬编。
2. 抓住本盘独特组合：meta（性别、五行局、命主/身主）、sanFangMing、topics 里各主题星曜的 brightness（庙旺陷等）与 mutagen（禄权科忌）、patternNames、notes。不同星组→不同相处方式、压力点、转机，禁止写成通用性格模板。
3. 少堆星名：星名最多点一两次当线索，重点写「落到生活里会怎样」——容易怎么选择、怎么卡住、跟谁容易起摩擦、哪类事会反复出现。像细说一个人，不像写说明书。
4. 性格与处世：结合四面星曜写具体习惯与反差（对外怎样、对内怎样、压力下怎样），避免空泛「追求荣誉/辅助他人」式标签。
5. 人生阶段：严格按 JSON decades，每个年龄段只用「### {range}岁」标题写一次，禁止重复同一年龄段、禁止写两遍。每段 3～5 句，用 lifeTheme 作主题，不写宫名标题；禁止段内反复用「这十年里」「这五年里」凑字数。星曜有 brightness/mutagen 时用来区分力度。全部 decade 写完后，必须紧接着写一段「之后说明」（不要用 ###）：明确写「以上仅据本盘大限材料写至约 lastDecadeEnd 岁；更之后的年龄与境遇无法据此断定，不代表只能活到这个年纪」——lastDecadeEnd 取自 JSON。
6. 四个专题写细（生活主题，禁止宫名清单）：
   - 婚姻感情：相处模式、吸引/冲突点、婚后容易卡在哪；并做软语气倾向推估（较容易／约／前后／偏向）——成家年龄区间、生育年龄区间、子女数量与男女倾向（看 topics.marriage / topics.children / decades 中亲密关系主题段与 notes）。不足则明说不易推到。
   - 工作事业：适合什么节奏与场景、升迁/变动压力、与人协作的具体卡点（topics.career）。
   - 健康与家人：身心容易累在哪、与长辈/家人互动倾向（topics.health）；只写关注与压力，不作诊断。
   - 财运与资源：钱怎么来、怎么散、守财习惯与家庭资产压力（topics.wealth）；不作投资建议。
7. 近前后五年：依 nearTerm 分「过去五年左右 / 眼下 / 未来五年左右」；结合 age、lifeTheme、stars，写这几年婚姻/工作/健康家人/财运里「具体会碰到什么」，勿空泛复读大限主题。
8. notes、bookQuotes（卷一全量今译摘句，优先于旧摘句库）、patterns 消化进叙事，不要提出处、不要照抄格局原文；优先依据 bookQuotes 与 notes 写细。
9. 篇幅与完整性：一次写完整，禁止中断、自我纠错、括号注释「（注：…）」、禁止重复粘贴同一段。近前后五年只写三节（过去/眼下/未来），勿与人生阶段重复同年龄叙事。

固定 Markdown 结构（标题一字不差）：
## 人物总览
## 性格与处世
## 人生阶段
### {range}岁
（每个 decade 仅一节；最后一节后接「之后说明」小段，再进入下一章）
## 婚姻感情
## 工作事业
## 健康与家人
## 财运与资源
## 近前后五年
## 结尾说明
（本站只作材料研习参考，不提供吉凶预测或改运建议）"""

RETRY_HINT = (
    '上一稿不合格。请重写：全文现代白话；禁止古书/古人/古诀/引文与公文套话；'
    '禁止分宫清单与只罗列星名；必须含「## 人物总览」「## 人生阶段」与四个专题；'
    '每盘写细、写具体生活场景，突出本盘星曜组合的独特性；'
    '人生阶段每个年龄段标题只出现一次，禁止重复；'
    '最后一档大限后必须写「之后说明」：更之后不确定、不代表只能活到该年龄；'
    '禁止「这十年里」反复堆砌；婚姻须含软语气成家／生育／子女倾向推估。'
)

REPETITION_RETRY_HINT = (
    '上一稿有重复年龄段、句子复读或内容中断。请整篇重写：'
    '每个 ### 年龄标题只写一次；勿复制粘贴同句；'
    '近前后五年勿重复人生阶段已写过的内容；必须写完整到「## 结尾说明」。'
)

DIVINATION_FORBIDDEN = re.compile(
    r'開運方法|改命|招財術|破財免|必主大富|必主橫財|必成無疑|必死|保證獲利|一定發財'
)

DIVINATION_NEED_OVERVIEW = re.compile(r'##\s*总览|##\s*總覽')

LIUREN_SYSTEM_PROMPT = """你是「经盘」六壬课解读助手。根据 JSON 用现代白话写一段简短解读。

规则：
1. 只用 JSON（kind、question、cast）里的信息，不编造未给出的落宫。
2. 全文白话。可写倾向（顺/滞、宜缓/宜动），禁止开运改命、绝对断语（必成/必死）、医疗法律投资指令。
3. 有 question：必须对着所问事项回答；无 question：写整体倾向，并说明用户未填写具体问题。
4. cast.luck / summary 是课式自带标签与摘要，可吸收进叙事，但不要夸大成铁口直断。

固定 Markdown 结构（标题一字不差）：
## 总览
## 对所问事项
（无问题时本节写整体倾向，首句说明未提问）
## 注意点
## 说明
（仅供参考，不作唯一决策依据）"""

YAOGUA_SYSTEM_PROMPT = """你是「经盘」三钱摇卦解读助手。根据 JSON 用现代白话写一段简短解读。

规则：
1. 只用 JSON（kind、question、cast）里的信息；不编造未给出的卦名或动爻。
2. 全文白话。可结合本卦/之卦 overview 与动爻写倾向，禁止开运改命、绝对断语、医疗法律投资指令。
3. 有 question：必须对着所问事项回答；无 question：写整体倾向，并说明用户未填写具体问题。
4. overview 是站内易经节选白话，消化进叙事，不要大段照抄。

固定 Markdown 结构（标题一字不差）：
## 总览
## 对所问事项
（无问题时本节写整体倾向，首句说明未提问）
## 注意点
## 说明
（仅供参考，不作唯一决策依据）"""


def load_env() -> None:
    if not ENV_FILE.is_file():
        return
    for line in ENV_FILE.read_text(encoding='utf-8').splitlines():
        line = line.strip()
        if not line or line.startswith('#') or '=' not in line:
            continue
        key, val = line.split('=', 1)
        key = key.strip()
        val = val.strip()
        if (val.startswith('"') and val.endswith('"')) or (val.startswith("'") and val.endswith("'")):
            val = val[1:-1]
        os.environ.setdefault(key, val)


def resolve_origin(req_origin: str) -> str:
    allowed = os.environ.get('ALLOWED_ORIGIN', '*')
    if allowed == '*':
        return '*'
    items = [s.strip() for s in allowed.split(',') if s.strip()]
    if req_origin and req_origin in items:
        return req_origin
    return items[0] if items else '*'


def trim_text(text: str, limit: int) -> str:
    text = (text or '').strip()
    if len(text) <= limit:
        return text
    return text[:limit] + '…'


def clean_vernacular(text: str) -> str:
    text = CLASSIC_IN_VERNA.sub('', text or '')
    return re.sub(r'\s{2,}', ' ', text).strip(' ，,。;；')


def life_theme(palace_name: str) -> str:
    name = (palace_name or '').strip()
    if name in THEME_MAP:
        return THEME_MAP[name]
    for key, val in THEME_MAP.items():
        if key in name:
            return val
    return '人生议题'


def normalize_stars(raw: object, limit: int = 14) -> list:
    """接受 string[] 或 {name,brightness,mutagen}[]，统一成紧凑对象列表。"""
    if not isinstance(raw, list):
        return []
    out: list = []
    for item in raw[:limit]:
        if isinstance(item, dict) and item.get('name'):
            row: dict = {'name': str(item['name'])}
            b = str(item.get('brightness') or '').strip()
            m = str(item.get('mutagen') or '').strip()
            if b:
                row['brightness'] = b
            if m:
                row['mutagen'] = m
            out.append(row)
        elif item:
            out.append({'name': str(item)})
    return out


def compact_payload(body: dict) -> dict:
    """送给模型：星曜结构（含庙旺四化）+ 白话要点；不传古文原文。"""
    meta_in = body.get('meta') if isinstance(body.get('meta'), dict) else {}
    meta = {
        k: meta_in[k]
        for k in ('solarDate', 'gender', 'lunarDate', 'fiveElementsClass', 'soul', 'body')
        if meta_in.get(k)
    }
    if not meta.get('fiveElementsClass') and body.get('fiveElementsClass'):
        meta['fiveElementsClass'] = body['fiveElementsClass']

    decades = []
    for item in (body.get('decades') or [])[:12]:
        if not isinstance(item, dict):
            continue
        # 控制超时：默认写到约 85 岁
        start = item.get('start')
        if isinstance(start, int) and start > 85:
            continue
        if len(decades) >= 8:
            break
        theme_palace = str(item.get('themePalace') or '')
        decades.append(
            {
                'range': item.get('range', ''),
                'start': item.get('start'),
                'end': item.get('end'),
                'lifeTheme': life_theme(theme_palace),
                'stars': normalize_stars(item.get('stars'), 12),
            }
        )

    def corner(raw: object) -> dict:
        if not isinstance(raw, dict):
            return {'theme': '', 'stars': []}
        return {
            'theme': life_theme(str(raw.get('palace') or '')),
            'stars': normalize_stars(raw.get('stars'), 12),
        }

    def palace_corner_by_names(names: tuple[str, ...]) -> dict | None:
        """从 body.palaces 按宫名/别名取星曜（含庙旺四化）。"""
        for item in body.get('palaces') or []:
            if not isinstance(item, dict):
                continue
            label = str(item.get('aliasName') or item.get('name') or '').strip()
            raw_name = str(item.get('name') or '').strip()
            if not any(n in label or n in raw_name for n in names):
                continue
            return {
                'theme': life_theme(label or raw_name),
                'branch': str(item.get('earthlyBranch') or ''),
                'stars': normalize_stars(item.get('stars'), 14),
            }
        return None

    san_raw = body.get('sanFangMing')
    san_fang = None
    if isinstance(san_raw, dict):
        san_fang = {
            'self': corner(san_raw.get('self')),
            'opposite': corner(san_raw.get('opposite')),
            'triA': corner(san_raw.get('triA')),
            'triB': corner(san_raw.get('triB')),
        }

    topics: dict = {}
    marriage = palace_corner_by_names(('夫妻',))
    if marriage:
        topics['marriage'] = marriage
    children = palace_corner_by_names(('子女',))
    if children:
        topics['children'] = children
    career = palace_corner_by_names(('事业', '事業', '官禄', '官祿'))
    if career:
        topics['career'] = career
    friends = palace_corner_by_names(('交友', '仆役', '僕役'))
    if friends:
        topics['friends'] = friends
    health_self = palace_corner_by_names(('疾厄',))
    health_family = palace_corner_by_names(('父母',))
    if health_self or health_family:
        health: dict = {}
        if health_self:
            health['self'] = health_self
        if health_family:
            health['family'] = health_family
        topics['health'] = health
    wealth_money = palace_corner_by_names(('财帛', '財帛'))
    wealth_assets = palace_corner_by_names(('田宅',))
    if wealth_money or wealth_assets:
        wealth: dict = {}
        if wealth_money:
            wealth['money'] = wealth_money
        if wealth_assets:
            wealth['assets'] = wealth_assets
        topics['wealth'] = wealth

    last_decade_end = None
    if decades:
        ends = [d.get('end') for d in decades if isinstance(d.get('end'), int)]
        if ends:
            last_decade_end = max(ends)

    notes: list[dict] = []
    for item in (body.get('palaceReadings') or [])[:28]:
        if not isinstance(item, dict):
            continue
        v = clean_vernacular(str(item.get('vernacular') or ''))
        if len(v) < 8:
            continue
        notes.append(
            {
                'palace': str(item.get('palace') or ''),
                'text': trim_text(v, 140),
            }
        )

    book_quotes: list[dict] = []
    for item in (body.get('bookQuotes') or [])[:48]:
        if not isinstance(item, dict):
            continue
        classic = clean_vernacular(str(item.get('classic') or ''))
        vern = clean_vernacular(str(item.get('vernacular') or ''))
        if len(classic) < 4 or len(vern) < 6:
            continue
        book_quotes.append(
            {
                'source': str(item.get('source') or ''),
                'palace': str(item.get('palace') or ''),
                'classic': trim_text(classic, 72),
                'vernacular': trim_text(vern, 120),
            }
        )

    patterns_out: list[dict] = []
    for item in (body.get('patterns') or [])[:8]:
        if not isinstance(item, dict) or not item.get('name'):
            continue
        patterns_out.append(
            {
                'name': str(item.get('name')),
                'condition': trim_text(str(item.get('condition') or ''), 80),
            }
        )

    near_raw = body.get('nearTerm') if isinstance(body.get('nearTerm'), dict) else None
    near_term = None
    if near_raw:
        years_out = []
        for item in (near_raw.get('years') or [])[:11]:
            if not isinstance(item, dict):
                continue
            years_out.append(
                {
                    'year': item.get('year'),
                    'age': item.get('age'),
                    'isCurrent': bool(item.get('isCurrent')),
                    'decadeRange': item.get('decadeRange', ''),
                    'lifeTheme': life_theme(str(item.get('themePalace') or '')),
                    'stars': normalize_stars(item.get('stars'), 10),
                }
            )
        near_term = {
            'fromYear': near_raw.get('fromYear'),
            'toYear': near_raw.get('toYear'),
            'currentYear': near_raw.get('currentYear'),
            'years': years_out,
        }

    return {
        'meta': meta,
        'sanFangMing': san_fang,
        'topics': topics or None,
        'decades': decades,
        'lastDecadeEnd': last_decade_end,
        'nearTerm': near_term,
        'patterns': patterns_out,
        'notes': notes,
        'bookQuotes': book_quotes,
    }


def has_material(body: dict) -> bool:
    def count(key: str) -> int:
        val = body.get(key)
        return len(val) if isinstance(val, list) else 0

    return count('excerpts') + count('patterns') + count('palaceReadings') + count('bookQuotes') > 0


def violates_rules(text: str) -> bool:
    cleaned = DISCLAIMER_SPAN.sub('', text or '')
    return bool(FORBIDDEN.search(cleaned))


def violates_style(text: str) -> bool:
    raw = text or ''
    if STYLE_BAD.search(raw):
        return True
    if not STYLE_NEED_OVERVIEW.search(raw):
        return True
    if not STYLE_NEED_STAGES.search(raw):
        return True
    if not STYLE_NEED_MARRIAGE.search(raw):
        return True
    if not STYLE_NEED_CAREER.search(raw):
        return True
    if not STYLE_NEED_HEALTH.search(raw):
        return True
    if not STYLE_NEED_WEALTH.search(raw):
        return True
    if not STYLE_NEED_NEAR.search(raw):
        return True
    if not STYLE_NEED_ENDING.search(raw):
        return True
    return False


def duplicate_stage_headings(text: str) -> bool:
    seen: dict[str, int] = {}
    for match in STAGE_HEADING.finditer(text or ''):
        key = match.group(1)
        seen[key] = seen.get(key, 0) + 1
        if seen[key] > 1:
            return True
    return False


def excessive_repetition(text: str) -> bool:
    body = text or ''
    for phrase, limit in REPEAT_PHRASE_LIMITS:
        if body.count(phrase) > limit:
            return True
    return False


def truncated_output(text: str) -> bool:
    raw = (text or '').strip()
    if len(raw) < 400:
        return True
    if QUALITY_DEGEN.search(raw):
        return True
    if not STYLE_NEED_ENDING.search(raw):
        return True
    tail = raw[-120:]
    if re.search(r'[，,、：:「『$]', tail):
        return True
    return False


def missing_after_stages_note(text: str) -> bool:
    match = STAGES_SECTION.search(text or '')
    if not match:
        return True
    return not QUALITY_AFTER_STAGES.search(match.group(1))


def violates_quality(text: str) -> bool:
    return (
        duplicate_stage_headings(text)
        or excessive_repetition(text)
        or truncated_output(text)
        or missing_after_stages_note(text)
    )


def dedupe_stage_sections(text: str) -> str:
    match = STAGES_SECTION.search(text or '')
    if not match:
        return text
    prefix = text[: match.start()]
    stages_block = match.group(1)
    suffix = text[match.start(2) :]

    chunks = re.split(r'(?=^###\s*\d+-\d+岁\s*$)', stages_block, flags=re.MULTILINE)
    seen: set[str] = set()
    kept: list[str] = []
    for chunk in chunks:
        if not chunk.strip():
            continue
        heading = STAGE_HEADING.search(chunk)
        if heading:
            key = heading.group(1)
            if key in seen:
                continue
            seen.add(key)
        kept.append(chunk.rstrip())
    return prefix + '\n\n'.join(kept) + '\n\n' + suffix.lstrip('\n')


def inject_after_stages_note(text: str, last_decade_end: object) -> str:
    if not missing_after_stages_note(text):
        return text
    end_label = str(last_decade_end) if last_decade_end not in (None, '') else '…'
    note = (
        f'以上各段仅据本盘大限材料写至约{end_label}岁；'
        '更之后的年龄与境遇无法据此断定，**不代表只能活到这个年纪**。'
    )
    return re.sub(
        r'(\n##\s*婚姻感情)',
        f'\n\n{note}\n\\1',
        text,
        count=1,
    )


def sanitize_chart_content(text: str, last_decade_end: object = None) -> str:
    raw = (text or '').strip()
    raw = re.sub(r'</?redacted_thinking>.*', '', raw, flags=re.DOTALL | re.IGNORECASE)
    raw = re.sub(r'（注：[^）]*）', '', raw)
    raw = re.sub(r'\n{3,}', '\n\n', raw)
    raw = dedupe_stage_sections(raw)
    raw = inject_after_stages_note(raw, last_decade_end)
    return raw.strip()


def compact_divination_payload(body: dict) -> dict:
    kind = str(body.get('kind') or '').strip()
    question = trim_text(str(body.get('question') or '').strip(), 120)
    cast_in = body.get('cast') if isinstance(body.get('cast'), dict) else {}

    if kind == 'liuren':
        return {
            'kind': 'liuren',
            'question': question or None,
            'cast': {
                'month': cast_in.get('month'),
                'day': cast_in.get('day'),
                'hour': cast_in.get('hour'),
                'palaceName': cast_in.get('palaceName', ''),
                'luck': cast_in.get('luck', ''),
                'summary': trim_text(str(cast_in.get('summary') or ''), 120),
            },
        }

    if kind == 'yaogua':
        def gua(raw: object) -> dict | None:
            if not isinstance(raw, dict):
                return None
            return {
                'index': raw.get('index'),
                'name': raw.get('name', ''),
                'overview': trim_text(str(raw.get('overview') or ''), 220) or None,
            }

        lines_out = []
        for item in (cast_in.get('lines') or [])[:6]:
            if not isinstance(item, dict):
                continue
            lines_out.append(
                {
                    'position': item.get('position'),
                    'label': item.get('label', ''),
                    'changing': bool(item.get('changing')),
                }
            )
        changing = cast_in.get('changingPositions') or []
        if not isinstance(changing, list):
            changing = []
        changing_out = []
        for x in changing[:6]:
            try:
                changing_out.append(int(x))
            except (TypeError, ValueError):
                continue
        return {
            'kind': 'yaogua',
            'question': question or None,
            'cast': {
                'primary': gua(cast_in.get('primary')),
                'relating': gua(cast_in.get('relating')),
                'changingPositions': changing_out,
                'lines': lines_out,
            },
        }

    raise ValueError('kind 须为 liuren 或 yaogua')


def has_divination_material(body: dict) -> bool:
    kind = str(body.get('kind') or '').strip()
    cast = body.get('cast') if isinstance(body.get('cast'), dict) else {}
    if kind == 'liuren':
        return bool(cast.get('palaceName') and cast.get('summary'))
    if kind == 'yaogua':
        primary = cast.get('primary') if isinstance(cast.get('primary'), dict) else {}
        return bool(primary.get('name') or primary.get('index'))
    return False


def violates_divination_rules(text: str) -> bool:
    cleaned = DISCLAIMER_SPAN.sub('', text or '')
    return bool(DIVINATION_FORBIDDEN.search(cleaned))


def violates_divination_style(text: str) -> bool:
    return not DIVINATION_NEED_OVERVIEW.search(text or '')


def call_model(
    payload: dict,
    *,
    system_prompt: str = SYSTEM_PROMPT,
    max_tokens: int = 3600,
    extra_user: str = '',
) -> str:
    account_id = os.environ.get('CF_ACCOUNT_ID', '')
    token = os.environ.get('CF_API_TOKEN', '')
    model = os.environ.get('CF_AI_MODEL', '@cf/zai-org/glm-4.7-flash')
    base = os.environ.get(
        'CF_AI_BASE_URL',
        f'https://api.cloudflare.com/client/v4/accounts/{account_id}/ai/v1' if account_id else '',
    )
    if not account_id or not token or not base:
        raise RuntimeError('Server missing CF_ACCOUNT_ID / CF_API_TOKEN configuration')

    user_content = json.dumps(payload, ensure_ascii=False, separators=(',', ':'))
    if extra_user:
        user_content = extra_user + '\n\n' + user_content

    req_body = json.dumps(
        {
            'model': model,
            'messages': [
                {'role': 'system', 'content': system_prompt},
                {'role': 'user', 'content': user_content},
            ],
            'temperature': 0.3,
            'max_tokens': max_tokens,
            'reasoning_effort': 'low',
            'chat_template_kwargs': {'enable_thinking': False},
        },
        ensure_ascii=False,
        separators=(',', ':'),
    ).encode('utf-8')

    req = request.Request(
        f'{base.rstrip("/")}/chat/completions',
        data=req_body,
        headers={
            'Authorization': f'Bearer {token}',
            'Content-Type': 'application/json',
        },
        method='POST',
    )

    try:
        upstream_timeout = int(os.environ.get('CF_AI_TIMEOUT', '180'))
        with request.urlopen(req, timeout=max(60, upstream_timeout)) as resp:
            data = json.loads(resp.read().decode('utf-8'))
    except error.HTTPError as exc:
        detail = exc.read().decode('utf-8', errors='replace')
        try:
            parsed = json.loads(detail)
            msg = parsed.get('errors', [{}])[0].get('message') or parsed.get('error', {}).get('message')
        except json.JSONDecodeError:
            msg = detail or exc.reason
        raise RuntimeError(f'Cloudflare AI error: {msg}') from exc
    except error.URLError as exc:
        reason = str(getattr(exc, 'reason', exc))
        if 'timed out' in reason.lower() or 'timeout' in reason.lower():
            raise RuntimeError('模型回應逾時，請稍後重試。') from exc
        raise RuntimeError(f'Upstream error: {reason}') from exc

    message = ((data.get('choices') or [{}])[0].get('message') or {})
    content = message.get('content')
    if content is None:
        content = ''
    content = str(content).strip()
    if not content:
        raise RuntimeError('Empty model response (content is null; try again)')
    return content


class Handler(BaseHTTPRequestHandler):
    def log_message(self, fmt: str, *args) -> None:
        sys.stderr.write('%s - %s\n' % (self.address_string(), fmt % args))

    def _cors_origin(self) -> str:
        return resolve_origin(self.headers.get('Origin', ''))

    def _send_json(self, status: int, body: dict) -> None:
        payload = json.dumps(body, ensure_ascii=False).encode('utf-8')
        origin = self._cors_origin()
        self.send_response(status)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Access-Control-Allow-Origin', origin)
        self.send_header('Access-Control-Allow-Methods', 'POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()
        self.wfile.write(payload)

    def _api_path(self) -> str:
        return self.path.split('?', 1)[0]

    def do_OPTIONS(self) -> None:  # noqa: N802
        if self._api_path() not in ('/api/chart-ai-reading', '/api/divination-ai'):
            self.send_error(404)
            return
        self._send_json(204, {})

    def do_GET(self) -> None:  # noqa: N802
        if self._api_path() == '/health':
            self._send_json(
                200,
                {
                    'ok': True,
                    'prompt': 'vernacular-detail-bookquotes-v9',
                    'divination': 'divination-ai-v1',
                },
            )
            return
        self.send_error(404)

    def _handle_chart_ai(self, payload: dict) -> None:
        if not has_material(payload):
            self._send_json(400, {'error': '本盤材料不足，無法生成 AI 研習說明。'})
            return
        try:
            compact = compact_payload(payload)
            last_end = compact.get('lastDecadeEnd')
            content = call_model(compact, max_tokens=5200)
            if violates_quality(content):
                sys.stderr.write('chart-ai: quality bad, retry once\n')
                content = call_model(
                    compact,
                    max_tokens=5200,
                    extra_user=REPETITION_RETRY_HINT,
                )
            content = sanitize_chart_content(content, last_end)
            if violates_rules(content):
                sys.stderr.write('chart-ai: forbidden hit, reject\n')
                self._send_json(502, {'error': 'AI 輸出含不宜表述，已拒絕返回，請稍後重試。'})
                return
            if violates_style(content):
                sys.stderr.write('chart-ai: style bad, reject\n')
                self._send_json(502, {'error': 'AI 輸出格式不符（需白話總覽、四專題與年齡段），請稍後重試。'})
                return
            if violates_quality(content):
                sys.stderr.write('chart-ai: quality still bad, reject\n')
                self._send_json(502, {'error': 'AI 輸出重复或未完成，请稍后重试。'})
                return
            self._send_json(200, {'content': content})
        except Exception as exc:  # noqa: BLE001
            msg = str(exc)
            if 'timed out' in msg.lower() or 'timeout' in msg.lower():
                msg = '模型回應逾時，請稍後重試。'
            self._send_json(502, {'error': msg})

    def _handle_divination_ai(self, payload: dict) -> None:
        if not has_divination_material(payload):
            self._send_json(400, {'error': '課式／卦象材料不足，無法生成 AI 解讀。'})
            return
        try:
            compact = compact_divination_payload(payload)
            kind = compact.get('kind')
            prompt = LIUREN_SYSTEM_PROMPT if kind == 'liuren' else YAOGUA_SYSTEM_PROMPT
            content = call_model(compact, system_prompt=prompt, max_tokens=1600)
            if violates_divination_rules(content):
                sys.stderr.write('divination-ai: forbidden hit, reject\n')
                self._send_json(502, {'error': 'AI 輸出含不宜表述，已拒絕返回，請稍後重試。'})
                return
            if violates_divination_style(content):
                sys.stderr.write('divination-ai: style bad, reject\n')
                self._send_json(502, {'error': 'AI 輸出格式不符（需含總覽），請稍後重試。'})
                return
            self._send_json(200, {'content': content})
        except ValueError as exc:
            self._send_json(400, {'error': str(exc)})
        except Exception as exc:  # noqa: BLE001
            msg = str(exc)
            if 'timed out' in msg.lower() or 'timeout' in msg.lower():
                msg = '模型回應逾時，請稍後重試。'
            self._send_json(502, {'error': msg})

    def do_POST(self) -> None:  # noqa: N802
        path = self._api_path()
        if path not in ('/api/chart-ai-reading', '/api/divination-ai'):
            self.send_error(404)
            return

        length = int(self.headers.get('Content-Length', '0') or 0)
        raw = self.rfile.read(length).decode('utf-8') if length else '{}'
        try:
            payload = json.loads(raw or '{}')
        except json.JSONDecodeError:
            self._send_json(400, {'error': 'Invalid JSON body'})
            return

        if path == '/api/divination-ai':
            self._handle_divination_ai(payload)
            return
        self._handle_chart_ai(payload)


def main() -> None:
    load_env()
    host = os.environ.get('LISTEN_HOST', '127.0.0.1')
    port = int(os.environ.get('PORT', '8787'))
    server = ThreadingHTTPServer((host, port), Handler)
    print(f'chart-ai-proxy listening on {host}:{port}', flush=True)
    server.serve_forever()


if __name__ == '__main__':
    main()
