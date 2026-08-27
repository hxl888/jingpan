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
STYLE_NEED_FORTUNE = re.compile(r'##\s*吉凶总览|##\s*吉凶總覽')
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
META_INSTRUCTION = re.compile(
    r'请根据.{0,24}JSON|注意事项[:：]|固定\s*Markdown|写作目标|人物细读.{0,8}文本|'
    r'合规的.{0,12}文本|Attention\s*Point|直接输出解读|复述格式|'
    r'绝对禁止（出现即失败）|每个\s*decade\s*仅一节'
)
QUALITY_AFTER_STAGES = re.compile(
    r'不代表只能活|不能理解为.*活到|更之后.*无法|无法据此断定|并非.*寿元'
)

# 模型复读高频句（阈值按大限段数放宽）
REPEAT_PHRASE_LIMITS: tuple[tuple[str, int], ...] = (
    ('可能会遇到一个让他觉得比较「稳」的人', 2),
    ('或者开始尝试建立自己的小家庭', 2),
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

BRANCH_CHARS = '子丑寅卯辰巳午未申酉戌亥'
BRIGHTNESS_SUFFIX = r'(?:庙|旺|陷|得|利|平|不|落陷|落庙)?'
STAR_BASES: tuple[str, ...] = (
    '紫微', '天机', '太阳', '太陽', '太阴', '太陰', '武曲', '天同', '廉贞', '廉貞', '天府',
    '贪狼', '貪狼', '巨门', '巨門', '天相', '天梁', '天梁', '七杀', '七殺', '破军', '破軍',
    '文昌', '文曲', '左辅', '左輔', '右弼', '天魁', '天钺', '天鉞', '禄存', '祿存', '擎羊',
    '陀罗', '陀羅', '火星', '铃星', '鈴星', '地劫', '地空', '天空', '天马', '天馬', '台辅', '台輔',
    '封诰', '封誥', '天刑', '天姚', '解神', '天巫', '天月', '阴煞', '陰煞', '三台', '八座',
    '恩光', '天贵', '天貴', '天寿', '天壽', '天厨', '天廚', '天虚', '天虛', '天哭', '龙池',
    '龍池', '凤阁', '鳳閣', '红鸾', '紅鸞', '天喜', '孤辰', '寡宿', '蜚廉', '破碎', '华盖',
    '華蓋', '咸池', '天德', '月德', '天才', '天伤', '天傷', '天使', '截空', '旬空', '大耗',
    '小耗', '劫煞', '灾煞', '災煞', '天煞', '年解', '流马', '流馬', '运马', '運馬', '运魁',
    '運魁', '运喜', '運喜', '流魁', '流喜', '流昌', '流曲', '流羊', '流陀', '年马', '年馬',
    '月马', '月馬', '博士', '力士', '青龙', '青龍', '小耗', '将军', '將軍', '奏书', '奏書',
    '飞廉', '飛廉', '喜神', '病符', '大耗', '伏兵', '官府', '岁建', '歲建', '晦气', '晦氣',
    '丧门', '喪門', '贯索', '貫索', '官符', '龙德', '龍德', '白虎', '天德', '吊客', '天医',
    '天醫', '天福', '天官', '天伤', '天刑', '天姚', '天巫', '天月', '阴煞', '三台', '八座',
)
STAR_TOKEN = re.compile(
    rf'(?:流|运|運|年|月|大|小)?(?:{"|".join(re.escape(s) for s in STAR_BASES)}){BRIGHTNESS_SUFFIX}'
)
STAR_LIST = re.compile(rf'(?:{STAR_TOKEN.pattern}[、，,\s]?)+{STAR_TOKEN.pattern}')
PALACE_BRANCH_CLAUSE = re.compile(
    rf'[^。！？\n]*?[宫宮](?:在|落|于|於)[{BRANCH_CHARS}][，,：:][^。！？\n]*?[。！？]'
)
JARGON_BRIDGE = re.compile(
    r'这?组星曜(?:组合|配置|格局)?[，,：:]?|'
    r'(?:从|按|据|依)(?:星曜|本盘星|命盘|盘面)[^，,。！？]{0,16}[，,：:]?|'
    r'星曜(?:显示|表明|说明|意味着)[，,：:]?'
)
NARRATIVE_ANCHOR = re.compile(
    r'(?:说明|意味着|表明|显示|代表|可见|看来|也暗示|也说明|也表示)[他她您]?|'
    r'[他她您](?:容易|倾向|往往|可能|较|会|要|在|这|那)|'
    r'这段时间|这几年|这一阶段|婚后|工作中'
)

SYSTEM_PROMPT = """你是「经盘」的细读助手：像一位熟识这盘材料的人，对着「这一位」把人生讲细、讲具体。只根据 JSON，写成现代白话。

绝对禁止（出现即失败）：
- 复述本提示、输出「注意事项」「固定 Markdown 结构」「写作目标」等元说明；必须直接从「## 人物总览」正文开始
- 文言原句、古诀、半文半白、「古书说/古人说/古诀云」、书名号引文
- 按宫名逐条清单（禁止「命宫：」「夫妻宫：」「## 分宫要点」「## 材料串讲」「## 命盘概述」）
- 开运改命、招財破財术、择日宜忌（宜嫁娶/宜出行等）；禁止「必成/必死/一定几岁/铁口直断」等绝对断言
- 医疗诊断、就医指令、投资理财指令、法律行动建议
- 套话与千篇一律：禁止「整体呈现出」「从命盘结构来看」「这意味着他」「这表明他」这类公文腔
- 正文零术语（最重要）：禁止写任何星曜名、宫名、地支、庙旺陷、禄权科忌、五行局、命主身主、「星曜组合」「X宫在Y」「这组星…」等排盘用语；禁止顿号罗列星名。JSON 里的 stars 只供你理解，读者看不到盘，正文必须从「他/她……」的生活白描直接写起

写作目标（本盘必须「像只写给这一位」，换盘要明显不同）：
1. 只用 JSON 理解本盘；不编造未给出的年龄、年份。材料不足处写「从本盘不易具体推到」，勿硬编。正文不得出现 JSON 字段名或星曜专名。
2. 抓住本盘独特组合（性别、主题、亮度力度、四化、格局、notes/bookQuotes），内化后写生活差异：相处方式、压力点、转机；禁止写成通用性格模板。
3. 全文像给熟人讲故事：写他怎么做选择、怎么卡住、跟谁摩擦、哪类事反复出现；不要像星曜说明书，不要先列星再解释。
4. 性格与处世：写具体习惯与反差（对外/对内/压力下），避免空泛标签。
5. **吉凶总览（必写）**：独立一节写本盘吉凶倾向，3～6 句——
   - 整体基调（偏吉/偏凶/吉凶参半/先苦后甜等）；
   - 分块各 1 句：婚姻、事业、财运、健康与家人 的吉凶顺逆（用「较顺/较阻滞/多波折/宜守/宜进/有贵人/易破财/感情易起摩擦」等白话，禁止星名宫名）；
   - 可写当前阶段与未来几年的吉凶要点。
6. 人生阶段：严格按 JSON decades，每个年龄段只用「### {range}岁」标题写一次，禁止重复。每段 **7～9 句**，必须分块写清（可自然连贯，不可缺项）：
   - **工作**：这十年工作/事业会怎样（岗位变动、升迁压力、创业打工、与人协作、宜进宜守）；
   - **健康**：身体与精力要注意什么（易累部位、作息、压力、宜休息/忌过劳，只写关注不作诊断）；
   - **家人**：与父母、配偶、子女或家庭关系怎样（亲近/摩擦/照拂/分离等）；
   - **财运**：钱怎么来、怎么花、守得住否、有无破财或进财机会；
   - **末句**点明这十年吉凶倾向（较顺/多波折/宜守/宜进等）。
   用 lifeTheme 作生活主题，禁止写宫名、星名；禁止段内反复用「这十年里」「这五年里」凑字数。全部 decade 写完后，必须紧接着写一段「之后说明」（不要用 ###）：明确写「以上仅据本盘大限材料写至约 lastDecadeEnd 岁；更之后的年龄与境遇无法据此断定，不代表只能活到这个年纪」——lastDecadeEnd 取自 JSON。
7. 四个专题写细（生活主题，禁止宫名清单；每节不可一笔带过；**各节须含吉凶倾向**）：
   - **婚姻感情（必写，不可省略）**：分 3 块写——
     ① **成家/结婚**：必须用软语气给出**具体年龄区间**（如「较容易在 28～32 岁前后成家」「约 30 岁前后步入婚姻」），并写受什么生活因素影响；
     ② **子女**：必须写**生育年龄倾向**、**子女数量倾向**（如「偏向 1～2 个」）、**男孩女孩倾向**（如「男孩略多/女孩略多/难明显区分」）；结合 topics.children 与亲密关系主题段；材料不足则写明「从本盘不易推到」；
     ③ **相处**：吸引点、冲突点、婚后容易卡在哪、如何磨合。
   - **工作事业（必写细，至少 8 句）**：分 3 块写——
     ① **适合做什么**：具体行业/岗位类型（如管理、技术、销售、教育、公职、自由职业、手艺、服务等），工作节奏、长处与短板，用生活化描述；
     ② **地域与变动**：必须写**更适合在外地发展还是留在家乡/本地**；是否常出差、换城市、异地就职；结合 topics.career / topics.mobility 与 decades 中「外出与变动」主题段；可写「早年宜外出、中年后宜守成」等阶段差异；
     ③ **发展路径**：升迁/转岗压力、与人协作卡点、创业或打工倾向、中年后的方向变化。
   - 健康与家人：身心容易累在哪、与长辈/家人互动倾向；写吉凶关注点，不作诊断。
   - 财运与资源：钱怎么来、怎么散、守财习惯与家庭资产压力；写财运吉凶倾向，不作投资建议。
8. 近前后五年：依 nearTerm 分「过去五年左右 / 眼下 / 未来五年左右」；每节写具体事件 **并点明吉凶顺逆**，勿空泛复读大限主题，勿写星名宫名。
9. notes、bookQuotes（卷一全量今译摘句，优先于旧摘句库）、patterns 消化进叙事，不要提出处、不要照抄格局原文；优先依据 bookQuotes 与 notes 写细。
10. 篇幅与完整性：一次写完整，禁止中断、自我纠错、括号注释「（注：…）」、禁止重复粘贴同一段。近前后五年只写三节（过去/眼下/未来），勿与人生阶段重复同年龄叙事。

固定 Markdown 结构（标题一字不差）：
## 人物总览
## 性格与处世
## 吉凶总览
## 人生阶段
### {range}岁
（每个 decade 仅一节；最后一节后接「之后说明」小段，再进入下一章）
## 婚姻感情
## 工作事业
## 健康与家人
## 财运与资源
## 近前后五年
## 结尾说明
（以上内容依据本盘材料推估吉凶倾向，仅供参考，不作唯一决策依据）"""

RETRY_HINT = (
    '上一稿不合格。请重写：全文现代白话；禁止古书/古人/古诀/引文与公文套话；'
    '禁止任何星曜名、宫名、地支、庙旺四化与「星曜组合」句式；'
    '禁止分宫清单；必须含「## 人物总览」「## 吉凶总览」「## 人生阶段」与四个专题；'
    '吉凶总览与各节须写吉凶顺逆倾向；人生阶段每段 7～9 句，须写工作/健康注意/家人/财运，末句点吉凶；'
    '工作事业必须写适合行业、本地还是外地发展；最后一档大限后必须写「之后说明」。'
)

DETAIL_RETRY_HINT = (
    '上一稿内容偏薄。请重写并写细：'
    '① 必须有「## 吉凶总览」，写整体及婚姻/事业/财运/健康吉凶；'
    '② 婚姻必须含结婚年龄、子女数量、男孩女孩倾向；'
    '③ 工作事业必须含适合做什么、本地还是外地；'
    '④ 每个人生阶段 7～9 句，必须写工作、健康要注意、家人、财运四块，末句点吉凶。仍禁止星名宫名。'
)

REPETITION_RETRY_HINT = (
    '上一稿不合格（重复、中断、复述格式或出现星曜专名）。'
    '请直接写完整解读正文：第一行必须是「## 人物总览」，禁止写注意事项、Markdown 结构说明、星名宫名。'
)

PLAIN_VERNACULAR_RETRY_HINT = (
    '上一稿仍含排盘术语（星名/宫名/地支/庙旺/星曜组合等）。'
    '请彻底重写：读者不懂紫微，正文只能是他/她的生活白描，从「他……」「她……」直接写起，零术语。'
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
    mobility = palace_corner_by_names(('迁移', '遷移'))
    if mobility:
        topics['mobility'] = mobility
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
        'coverageHints': {
            'fortune': ['整体吉凶基调', '婚姻/事业/财运/健康吉凶各一句'],
            'marriage': ['成家/结婚年龄区间', '子女数量倾向', '男孩女孩倾向', '相处模式', '婚姻吉凶'],
            'career': ['适合行业岗位', '本地或外地发展', '事业吉凶', '升迁协作'],
            'stageDepth': '每大限7-9句：工作+健康注意+家人+财运+末句吉凶',
        },
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
    if not STYLE_NEED_FORTUNE.search(raw):
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
    if QUALITY_DEGEN.search(raw):
        return True
    structure_ok = (
        STYLE_NEED_OVERVIEW.search(raw)
        and STYLE_NEED_STAGES.search(raw)
        and STYLE_NEED_MARRIAGE.search(raw)
        and STYLE_NEED_ENDING.search(raw)
    )
    if structure_ok and len(raw) >= 480:
        return False
    if len(raw) < 280:
        return True
    if not STYLE_NEED_ENDING.search(raw):
        return True
    if not re.search(r'[。！？…]"?$', raw):
        return True
    return False


def missing_after_stages_note(text: str) -> bool:
    match = STAGES_SECTION.search(text or '')
    if not match:
        return True
    return not QUALITY_AFTER_STAGES.search(match.group(1))


def is_meta_instruction(text: str) -> bool:
    raw = text or ''
    if META_INSTRUCTION.search(raw):
        return True
    # 有格式说明却无正文标题 → 元说明
    if STYLE_NEED_OVERVIEW.search(raw):
        return False
    return bool(re.search(r'注意事项|固定\s*Markdown|JSON\s*数据', raw))


def extract_reading_body(text: str) -> str:
    raw = (text or '').strip()
    if not raw:
        return raw
    raw = re.sub(
        r'</?redacted_thinking>.*?(?:</think>|$)',
        '',
        raw,
        flags=re.DOTALL | re.IGNORECASE,
    )
    m = re.search(r'^##\s*人物总览', raw, re.MULTILINE)
    if m and m.start() > 0:
        raw = raw[m.start():]
    return raw.strip()


def needs_generation_retry(text: str) -> bool:
    """首轮生成后、清洗前：仅对元说明/乱码/过短重试；重复年龄段由 dedupe 后处理。"""
    raw = text or ''
    if is_meta_instruction(raw):
        return True
    if QUALITY_DEGEN.search(raw):
        return True
    if len(raw.strip()) < 280:
        return True
    return False


def chart_ai_max_tokens() -> int:
    try:
        return max(3200, min(5200, int(os.environ.get('CF_CHART_AI_MAX_TOKENS', '5200'))))
    except ValueError:
        return 5200


ENDING_DISCLAIMER = '以上内容依据本盘材料推估吉凶倾向，仅供参考，不作唯一决策依据。'


def quality_failure_reason(text: str) -> str | None:
    if is_meta_instruction(text):
        return 'meta'
    if excessive_repetition(text):
        return 'repetition'
    if truncated_output(text):
        return 'truncated'
    return None


def violates_quality(text: str) -> bool:
    """清洗与补注后的终检。"""
    return quality_failure_reason(text) is not None


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
        '更之后的年龄与境遇无法据此断定，不代表只能活到这个年纪。'
    )
    return re.sub(
        r'(\n##\s*婚姻感情)',
        f'\n\n{note}\n\\1',
        text,
        count=1,
    )


def append_ending_if_missing(text: str) -> str:
    raw = (text or '').strip()
    if not STYLE_NEED_ENDING.search(raw):
        return raw + f'\n\n## 结尾说明\n{ENDING_DISCLAIMER}'
    if not re.search(r'仅供参考|不作唯一决策', raw):
        return re.sub(
            r'##\s*结尾说明[^\n]*\n?',
            f'## 结尾说明\n{ENDING_DISCLAIMER}\n',
            raw,
            count=1,
        )
    return raw


def ensure_terminal_punctuation(text: str) -> str:
    raw = (text or '').strip()
    if raw and not re.search(r'[。！？…]"?$', raw):
        return raw + '。'
    return raw


def _clean_prose_sentence(sentence: str) -> str:
    sent = (sentence or '').strip()
    if not sent:
        return ''
    anchor = NARRATIVE_ANCHOR.search(sent)
    if anchor and anchor.start() > 0 and (STAR_TOKEN.search(sent[: anchor.start()]) or '宫' in sent[: anchor.start()]):
        sent = sent[anchor.start():]
    sent = PALACE_BRANCH_CLAUSE.sub('', sent)
    sent = STAR_LIST.sub('', sent)
    sent = JARGON_BRIDGE.sub('', sent)
    sent = STAR_TOKEN.sub('', sent)
    sent = re.sub(rf'[宫宮](?:在|落|于|於)[{BRANCH_CHARS}]', '', sent)
    sent = re.sub(r'[、，,\s]{2,}', '，', sent)
    sent = re.sub(r'^[，,、：:\s]+', '', sent)
    sent = re.sub(r'[，,、]+([。！？])', r'\1', sent)
    sent = re.sub(r'^[，,、]+', '', sent)
    core = re.sub(r'[\W_]+', '', sent)
    if len(core) < 4:
        return ''
    return sent.strip()


def _clean_prose_line(line: str) -> str:
    if not line.strip() or line.strip().startswith('#'):
        return line
    parts = re.split(r'([。！？])', line)
    rebuilt: list[str] = []
    i = 0
    while i < len(parts):
        chunk = parts[i]
        punct = parts[i + 1] if i + 1 < len(parts) else ''
        cleaned = _clean_prose_sentence(chunk + punct)
        if cleaned and len(re.sub(r'\s+', '', cleaned)) >= 4:
            rebuilt.append(cleaned)
        i += 2 if i + 1 < len(parts) else 1
    return ''.join(rebuilt)


def strip_technical_jargon(text: str) -> str:
    lines = [_clean_prose_line(line) for line in (text or '').split('\n')]
    raw = '\n'.join(lines)
    raw = re.sub(r'\n{3,}', '\n\n', raw)
    return raw.strip()


def contains_technical_jargon(text: str) -> bool:
    body = '\n'.join(
        line for line in (text or '').split('\n') if not line.strip().startswith('#')
    )
    if STAR_TOKEN.search(body):
        return True
    if re.search(rf'[宫宮](?:在|落|于|於)[{BRANCH_CHARS}]', body):
        return True
    if re.search(r'星曜(?:组合|配置|格局)?', body):
        return True
    if re.search(r'[庙旺陷][、，]', body):
        return True
    return False


def _section_body(text: str, start_pat: str, end_pat: str) -> str:
    match = re.search(rf'{start_pat}(.*?)(?={end_pat})', text or '', re.DOTALL)
    return match.group(1) if match else ''


def marriage_detail_missing(text: str) -> bool:
    body = _section_body(text, r'##\s*婚姻感情', r'##\s*工作事业')
    if len(body.strip()) < 80:
        return True
    has_age = bool(re.search(r'(\d+\s*[～~\-—至到]\s*\d+\s*岁|约\s*\d+\s*岁|岁前后|岁上下|成家|结婚|步入婚姻|成婚)', body))
    has_count = bool(re.search(r'([12一二两三四五]|一孩|二孩|子女|孩子).{0,12}(?:1|2|一|二|少|多|个)', body))
    has_gender = bool(re.search(r'(男孩|女孩|儿子|女儿|男.*多|女.*多|偏向.*(?:男|女))', body))
    return not (has_age and has_count and has_gender)


def career_detail_missing(text: str) -> bool:
    body = _section_body(text, r'##\s*工作事业', r'##\s*健康与家人')
    if len(body.strip()) < 120:
        return True
    has_job = bool(re.search(r'(适合|擅长|行业|岗位|职业|工作|从事|方向|管理|技术|销售|服务|公职|创业|手艺)', body))
    has_place = bool(re.search(r'(外地|本地|家乡|留在家|留在本地|异地|出差|换城市|外出发展|守成|离乡|返乡)', body))
    return not (has_job and has_place)


def stage_chunk_aspects_missing(chunk: str) -> bool:
    aspects = (
        r'(工作|事业|职务|岗位|上班|创业|升迁|转岗|单位|同事|打工)',
        r'(健康|身体|精力|睡眠|累|休息|注意|养生|压力|病|伤|体检)',
        r'(家人|父母|长辈|配偶|孩子|子女|家庭|亲戚|婆媳|翁婿)',
        r'(财|钱|收入|开销|存|花|破财|守财|经济|进账|支出)',
    )
    hit = sum(1 for pattern in aspects if re.search(pattern, chunk))
    return hit < 3


def stages_too_thin(text: str) -> bool:
    match = STAGES_SECTION.search(text or '')
    if not match:
        return True
    stages = match.group(1)
    headings = list(STAGE_HEADING.finditer(stages))
    if not headings:
        return True
    thin = 0
    aspect_thin = 0
    for i, heading in enumerate(headings):
        start = heading.end()
        end = headings[i + 1].start() if i + 1 < len(headings) else len(stages)
        chunk = stages[start:end].strip()
        if len(re.findall(r'[。！？]', chunk)) < 6:
            thin += 1
        if stage_chunk_aspects_missing(chunk):
            aspect_thin += 1
    threshold = max(2, len(headings) // 2)
    return thin >= threshold or aspect_thin >= threshold


def fortune_detail_missing(text: str) -> bool:
    body = _section_body(text, r'##\s*吉凶总览', r'##\s*人生阶段')
    if len(body.strip()) < 60:
        return True
    has_overall = bool(
        re.search(r'(偏吉|偏凶|吉凶|较顺|较阻滞|多波折|宜守|宜进|先苦后甜|先甜后苦|平稳|有利|不利|贵人|破财)', body)
    )
    has_aspects = len(
        re.findall(r'(婚姻|事业|工作|财运|健康|家人).{0,24}(吉|凶|顺|阻滞|波折|利|不利|宜|忌)', body)
    ) >= 2
    return not (has_overall and has_aspects)


def content_detail_missing(text: str) -> bool:
    return (
        fortune_detail_missing(text)
        or marriage_detail_missing(text)
        or career_detail_missing(text)
        or stages_too_thin(text)
    )


def sanitize_chart_content(text: str, last_decade_end: object = None) -> str:
    raw = extract_reading_body(text)
    raw = re.sub(r'（注：[^）]*）', '', raw)
    raw = re.sub(r'\n{3,}', '\n\n', raw)
    raw = dedupe_stage_sections(raw)
    raw = inject_after_stages_note(raw, last_decade_end)
    raw = append_ending_if_missing(raw)
    raw = strip_technical_jargon(raw)
    raw = ensure_terminal_punctuation(raw)
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
    retry: bool = False,
    retry_hint: str = REPETITION_RETRY_HINT,
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

    user_json = json.dumps(payload, ensure_ascii=False, separators=(',', ':'))
    messages: list[dict[str, str]] = [
        {'role': 'system', 'content': system_prompt},
        {'role': 'user', 'content': user_json},
    ]
    if retry:
        messages.extend(
            [
                {'role': 'assistant', 'content': '好的。'},
                {'role': 'user', 'content': retry_hint},
            ]
        )

    req_body = json.dumps(
        {
            'model': model,
            'messages': messages,
            'temperature': 0.25 if retry else 0.3,
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
                    'prompt': 'vernacular-detail-bookquotes-v18-stage-detail',
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
            max_tok = chart_ai_max_tokens()
            content = extract_reading_body(call_model(compact, max_tokens=max_tok))
            if needs_generation_retry(content):
                sys.stderr.write('chart-ai: bad first draft, retry once\n')
                content = extract_reading_body(call_model(compact, max_tokens=max_tok, retry=True))
            content = sanitize_chart_content(content, last_end)
            if contains_technical_jargon(content):
                sys.stderr.write('chart-ai: jargon after sanitize, retry plain\n')
                content = sanitize_chart_content(
                    extract_reading_body(
                        call_model(
                            compact,
                            max_tokens=max_tok,
                            retry=True,
                            retry_hint=PLAIN_VERNACULAR_RETRY_HINT,
                        )
                    ),
                    last_end,
                )
            if content_detail_missing(content):
                sys.stderr.write('chart-ai: content too thin, retry detail\n')
                content = sanitize_chart_content(
                    extract_reading_body(
                        call_model(
                            compact,
                            max_tokens=max_tok,
                            retry=True,
                            retry_hint=DETAIL_RETRY_HINT,
                        )
                    ),
                    last_end,
                )
            if violates_quality(content):
                reason = quality_failure_reason(content) or 'unknown'
                if reason == 'truncated':
                    sys.stderr.write('chart-ai: truncated after sanitize, retry with extra tokens\n')
                    extra = min(5200, max_tok + 800)
                    content = sanitize_chart_content(
                        extract_reading_body(call_model(compact, max_tokens=extra, retry=True)),
                        last_end,
                    )
            if violates_rules(content):
                sys.stderr.write('chart-ai: forbidden hit, reject\n')
                self._send_json(502, {'error': 'AI 輸出含不宜表述，已拒絕返回，請稍後重試。'})
                return
            if violates_style(content):
                sys.stderr.write('chart-ai: style bad, reject\n')
                self._send_json(502, {'error': 'AI 輸出格式不符（需白話總覽、四專題與年齡段），請稍後重試。'})
                return
            if violates_quality(content):
                reason = quality_failure_reason(content) or 'unknown'
                sys.stderr.write(f'chart-ai: quality still bad ({reason}), reject\n')
                self._send_json(502, {'error': 'AI 输出格式异常或未完成，请稍后重试。'})
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
