#!/usr/bin/env python3
"""Call holographic API with a fixture, score with local guards, print issues."""
from __future__ import annotations

import json
import sys
import urllib.error
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / 'server'))
import chart_ai_proxy as cap  # noqa: E402

FIXTURE = ROOT / 'server' / 'fixtures' / 'holo-sample-1996.json'
OUT = ROOT / 'server' / 'fixtures' / 'holo-last-response.json'
API = 'http://127.0.0.1:8787/api/chart-ai-holographic'


def score(content: str, compact: dict, allowed_flow: set[str]) -> list[str]:
    issues: list[str] = []
    checks = [
        ('style', lambda: cap.violates_holographic_style(content)),
        ('evidence', lambda: cap.holographic_evidence_thin(content)),
        ('invented_flow', lambda: cap.holographic_invented_flow(content, allowed_flow)),
        ('json_leak', lambda: cap.holographic_json_leak(content)),
        ('clinical', lambda: cap.holographic_clinical_terms(content)),
        ('child_romance', lambda: cap.holographic_child_romance_tone(content, compact)),
        ('ming_contradiction', lambda: cap.holographic_ming_contradiction(content, compact)),
        ('star_palace', lambda: cap.holographic_star_palace_mismatch(content, compact)),
        ('decade_jump', lambda: cap.holographic_decade_jump(content, compact)),
        ('decade_horizon', lambda: cap.holographic_near_horizon_overflow(content, compact)),
        ('adult_grown_up', lambda: cap.holographic_adult_grown_up_tone(content, compact)),
        ('decade_spam', lambda: cap.holographic_decade_year_spam(content)),
    ]
    for name, fn in checks:
        try:
            if fn():
                issues.append(name)
        except Exception as exc:  # noqa: BLE001
            issues.append(f'{name}:ERR:{exc}')
    # soft quality heuristics (not hard reject)
    if '长大后' in content and (compact.get('meta') or {}).get('lifeStage') == 'adult':
        if 'adult_grown_up' not in issues:
            issues.append('adult_grown_up_soft')
    if '事业宫紫微天府' in content or '官禄宫紫微天府' in content:
        issues.append('wrong_tianfu_in_career')
    if '府相朝垣' in content and '武曲天府' in content:
        issues.append('wrong_fuxiang_pattern')
    if '文星朝命' in content and '文昌' not in str(
        next(
            (
                p.get('stars')
                for p in (compact.get('palaces') or [])
                if isinstance(p, dict) and (p.get('isMing') or p.get('palace') in ('命宫', '命宮'))
            ),
            [],
        )
    ):
        # rough: if pattern claimed but we can check ming stars from compact better
        ming_names = []
        for p in compact.get('palaces') or []:
            if isinstance(p, dict) and (p.get('isMing') or p.get('palace') in ('命宫', '命宮')):
                ming_names = [str(s.get('name') or '') for s in (p.get('stars') or []) if isinstance(s, dict)]
                break
        if '文昌' not in ming_names:
            issues.append('wrong_wenxing_pattern')
    if '投资需谨慎' in content or '忌投机' in content:
        issues.append('invest_advice_soft')
    if '虚岁' not in content.split('## 时空战略', 1)[-1][:200]:
        issues.append('temporal_age_anchor_soft')
    return issues


def main() -> int:
    if not FIXTURE.is_file():
        print('MISSING_FIXTURE', FIXTURE)
        return 2
    payload = json.loads(FIXTURE.read_text(encoding='utf-8'))
    compact = cap.compact_holographic_payload(payload)
    allowed = cap.collect_allowed_flow_stars(compact)
    body = json.dumps(payload, ensure_ascii=False).encode('utf-8')
    req = urllib.request.Request(
        API,
        data=body,
        headers={'Content-Type': 'application/json'},
        method='POST',
    )
    try:
        with urllib.request.urlopen(req, timeout=300) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            status = resp.status
    except urllib.error.HTTPError as exc:
        detail = exc.read().decode('utf-8', errors='replace')
        try:
            data = json.loads(detail)
        except json.JSONDecodeError:
            data = {'error': detail}
        status = exc.code
        OUT.write_text(json.dumps({'status': status, **data}, ensure_ascii=False, indent=2), encoding='utf-8')
        print(f'STATUS={status}')
        print('ERROR=', data.get('error', data))
        return 1

    content = str(data.get('content') or '')
    OUT.write_text(
        json.dumps({'status': status, 'content': content, 'ageGuide': compact.get('ageGuide')}, ensure_ascii=False, indent=2),
        encoding='utf-8',
    )
    issues = score(content, compact, allowed)
    print(f'STATUS={status}')
    print(f'LEN={len(content)}')
    print(f'AGE_GUIDE={json.dumps(compact.get("ageGuide"), ensure_ascii=False)}')
    print(f'ISSUES={issues or ["none"]}')
    # print first/last headings for quick glance
    for line in content.splitlines():
        if line.startswith('##') or line.startswith('**🔴') or line.startswith('**🟡') or line.startswith('**🟢'):
            print('H:', line[:120])
    return 0 if not issues else 3


if __name__ == '__main__':
    raise SystemExit(main())
