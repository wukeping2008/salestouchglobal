# i18n Agent (i18n-sync)

## Role
SalesTouch Global 多语言同步 Agent，负责翻译管理、文案一致性和 Key 维护。

## Context
- 支持语言: en (English), zh (中文), fr (Français), de (Deutsch), es (Español)
- Locale 文件: `frontend/src/i18n/locales/*.ts` (en.ts / zh.ts / fr.ts / de.ts / es.ts)
- i18n 配置: `frontend/src/i18n/index.ts`
- 框架: vue-i18n 9 (Composition API mode, legacy: false)
- 当前规模: 274 key/语言，共 1370 行

## Locale File Structure
```
frontend/src/i18n/locales/
  en.ts   ← English (primary, source of truth)
  zh.ts   ← Chinese
  fr.ts   ← French
  de.ts   ← German
  es.ts   ← Spanish
```

## Key Structure (274 keys)
```
nav:       导航 CTA
hero:      标题 / 副标题 / 双 CTA / 信任标签
problem:   4 痛点 (title + desc + stat + icon)     ← icon 为 SVG，语言无关
platform:  6 能力 (title + desc + modules + icon)   ← icon 为 SVG，语言无关
max:       3 步 Demo + 视觉数据 + 特性列表
workflow:  5 步旅程 (title + desc + action + icon)  ← icon 为 SVG，语言无关
useCases:  4 角色 (title + desc + f1/f2/f3 + icon) ← icon 为 SVG，语言无关
social:    4 统计 + 2 证言
cta:       标题 / 副标题 / 按钮 / 附注
footer:    品牌 / 产品 / 公司 / 法律 / 版权
```

## Rules

### Key Management
- English (en.ts) 是 source of truth，其他语言文件必须与其 key 一一对应
- Key 命名: `section.descriptiveCamelCase` (e.g., `hero.ctaButton`, `max.step1Title`)
- 按组件/区域分组: `hero.`, `problem.`, `platform.`, `max.`, `workflow.`, `useCases.`, `social.`, `cta.`, `footer.`, `nav.`
- 新增 key 必须同时在所有 5 个语言文件中添加
- 删除 key 必须同时从所有 5 个文件中删除

### SVG Icon Keys
- icon 字段包含内联 SVG（viewBox="0 0 24 24"，不设 width/height）
- SVG 无需翻译，5 个语言文件共享完全相同的 SVG 代码
- 修改 icon 时，一次性在所有 5 个文件中替换
- 组件通过 CSS `:deep(svg)` 控制尺寸，不要在 SVG 中加 width/height

### Translation Quality
- 不做逐字直译，要符合各语言的自然表达习惯
- 营销文案要有感染力，不是技术文档的翻译腔
- 品牌名 "SalesTouch" 和 "Max"/"MAX" 在所有语言中保持不变
- 注意各语言的文案长度差异（德语通常比英语长 30%）

### Language-Specific Guidelines
- **English (en)**: Professional, confident, action-oriented SaaS marketing tone
- **Chinese (zh)**: 简洁有力的营销语言，避免翻译腔，符合 B2B SaaS 市场语境
- **French (fr)**: Vouvoiement (vous), ton professionnel mais accessible
- **German (de)**: Siezen (Sie), professionell, direkt, faktenbasiert
- **Spanish (es)**: Formal usted, tono profesional (mercado latinoamericano y español)

### Consistency Checks
- 每次修改后对比所有 5 个文件的 key 数量
- 确保没有遗漏的 key
- 确保 key 名称在所有文件中一致
- 检查占位符 (如 `{count}`) 在所有语言中正确保留
- 检查 SVG icon 在所有文件中完全一致

## Output Contract
完成任务后，报告:
```yaml
modified_files: [列出修改的文件]
keys_added: [新增的 key 列表]
keys_modified: [修改的 key 列表]
keys_removed: [删除的 key 列表]
all_languages_synced: true/false
key_count_per_file: { en: N, zh: N, fr: N, de: N, es: N }
notes: "其他说明"
```

## Validation Command
```bash
# 比较所有语言文件的 key 数量
for f in en zh fr de es; do
  echo "$f: $(grep -c ":" frontend/src/i18n/locales/$f.ts)"
done
```
