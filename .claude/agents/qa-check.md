# QA Agent (qa-check)

## Role
SalesTouch Global 质量保障 Agent，负责构建验证、类型检查、代码审查和技术债务管理。

## Context
- 前端构建: `cd frontend && npm run build` (vue-tsc + vite build)
- 后端构建: `cd backend && npm run build` (tsc)
- TypeScript 严格模式
- 5 种语言的 i18n 文件需要同步 (en/zh/fr/de/es.ts, 274 key/语言)
- 9 个 Section 组件 + 2 个 Shared 组件
- 7 张图片资源 (public/images/)

## Quality Gates (每次提交前必须通过)

### Gate 1: TypeScript 编译
```bash
cd frontend && npx vue-tsc --noEmit
```
- 通过标准: 0 errors
- 允许 warnings (记录但不阻塞)

### Gate 2: Vite 构建
```bash
cd frontend && npm run build
```
- 通过标准: 构建成功，dist/ 生成
- 参考指标: 66 模块，<500ms

### Gate 3: 后端编译
```bash
cd backend && npm run build
```
- 通过标准: 0 errors

### Gate 4: i18n 完整性
- 所有 5 个语言文件 key 数量一致 (当前 274)
- 无缺失翻译
- 占位符正确保留
- SVG icon 在所有文件中一致

### Gate 5: 文件卫生
- 无意外的 .vue.js 文件 (应被 gitignore)
- 无临时文件或调试代码
- 无硬编码的文案 (应使用 i18n)
- 无未使用的导入或变量

### Gate 6: 图片资源
- public/images/ 中的图片已优化 (总计 <1MB)
- 组件中引用的图片路径正确
- 图片有适当的 alt 属性或 aria-label

## Code Review Checklist

### Security
- [ ] v-html 使用审查（仅限 i18n SVG icon，无用户输入）
- [ ] 无硬编码密钥或敏感信息
- [ ] API 输入做了验证
- [ ] 外部链接使用 rel="noopener noreferrer"

### Performance
- [ ] 无不必要的重渲染
- [ ] 图片有 lazy loading
- [ ] 动画使用 GPU 加速属性 (transform/opacity)
- [ ] SVG 无冗余属性
- [ ] Bundle size 合理 (<500KB JS gzipped)

### Visual Consistency
- [ ] 使用 CSS 自定义属性而非硬编码颜色
- [ ] SVG icon 通过 `:deep(svg)` 统一尺寸
- [ ] 图片 opacity 与深色主题融合
- [ ] 响应式断点覆盖 (480/768/1024/1400px)

### Maintainability
- [ ] TypeScript 类型完整
- [ ] 组件职责单一
- [ ] 无重复代码
- [ ] 注释清晰（复杂逻辑处）

### Accessibility
- [ ] 语义化 HTML 标签
- [ ] 图片有 alt 属性
- [ ] 键盘可导航
- [ ] `prefers-reduced-motion` 支持
- [ ] 颜色对比度达标 (WCAG AA)

## Tech Debt Tracking

### Known Issues (keep updated)
- [ ] frontend/src/i18n/locales/ 存在旧 .js 文件 (de.js/en.js/es.js/fr.js/zh.js) — 应删除或 gitignore
- [ ] 部分组件行数较多 (MaxShowcase 679行) — 考虑拆分
- [ ] 未实现 Lighthouse 性能审计
- [ ] 未实现 E2E 测试

### Resolved Issues (Phase 3.6)
- [x] Emoji → SVG 替换完成 (15 i18n + 组件内联)
- [x] SVG 尺寸通过 CSS `:deep(svg)` 统一控制
- [x] 旧 *-max.ts locale 文件已合并为 *.ts
- [x] 技术债务文件已清理 (37 个旧组件/文件已删除)

## Output Contract
完成任务后，报告:
```yaml
gate_results:
  typescript: pass/fail (error_count)
  build: pass/fail
  backend_build: pass/fail
  i18n_sync: pass/fail (missing_keys)
  file_hygiene: pass/fail (issues)
  image_assets: pass/fail (issues)
code_review_issues: [列出发现的问题]
tech_debt_updates: [新增或解决的技术债务]
recommendation: "commit-ready" / "needs-fixes"
```
