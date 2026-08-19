# 经盘

古籍对照的术数研习站：斗数排盘、《紫微斗数全书》卷一至卷三、罗盘与老黄历。命盘摘句与格局仍只取卷一；所有命理文字均取自底本，不生成白话吉凶断语。

## 本地运行

```bash
npm install
npm run dev
```

浏览器打开终端提示的本地地址（默认 `http://localhost:5173`）。

生产构建：

```bash
npm run build
npm run preview
```

重新生成古籍 JSON（含卷二、卷三切章）：

```bash
npm run build:data
```

## 页面

| 路由 | 说明 |
|------|------|
| `/` | 首页 |
| `/#/chart` | 排盘（点击星曜弹出《诸星问答论》原文） |
| `/#/book` | 卷一／卷二／卷三全文，侧边目录锚点 |
| `/#/star-dict` | 诸星问答论词典（卷一） |
| `/#/pattern-dict` | 格局歌诀词典（卷一） |
| `/#/about` | 来源与免责声明 |

## 数据

| 文件 | 说明 |
|------|------|
| `scripts/raw/ms261794.html` | 卷一底本（国学典籍网） |
| `scripts/raw/ms261795.html` | 卷二底本（国学典籍网） |
| `scripts/raw/ms261796.txt` | 卷三底本（国学典籍网） |
| `src/data/bookJuan1.json` 等 | 切章后繁体章节 |
| `src/data/bookSources.json` | 三卷底本链接 |
| `scripts/ingest-juan23.mjs` | 三卷切章 + 简转繁（不校改） |
| `scripts/build-data.mjs` | 星曜／格局词典切条，并合并三卷 TOC |

底本链接：

- 卷一：http://ab.newdu.com/book/ms261794.html
- 卷二：http://ab.newdu.com/book/ms261795.html
- 卷三：http://ab.newdu.com/book/ms261796.html

## 约束

命盘只展示古籍原文与格局原始歌诀；庙旺落陷、四化、大限流年由公开安星算法计算。卷二、卷三仅供站内阅读，不参与排盘摘句匹配。
