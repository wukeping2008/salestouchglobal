# 黑板 (Blackboard)

## 项目状态
- 当前阶段：Phase 4（测试与部署）
- 最后更新：2026-02-24
- 最后操作者：🪖 兵蚁（Soldier）

## 项目概况
- **项目名称**: SalesTouch.io — AI 驱动的 B2B 销售赋能平台（25+ 模块）
- **当前分支**: `feature/north-america-landing-20260129`（已同步远程）
- **技术栈**: Vue 3 (Composition API) + TypeScript + Vite 7 (前端) / Express + TypeScript (后端)
- **核心产品**: SalesTouch (AI Sales Coach) + SalesNail (Smart Page) + MAX AI Agent
- **Landing Page**: 9-section 叙事漏斗架构，5 语言 × 274 i18n keys

## 当前未提交变更
- 无（工作区干净）

## 完成进度（来自 WORK_PLAN）

### Phase 1: 基础构建与去本化 — ✅ 已完成
### Phase 2: Max 聚焦版 — ✅ 已完成（被 Phase 3 替代）
### Phase 3: 全平台展示版重构 — ✅ 已完成（2026-02-13）
- 3.1 技术债务清理（删除 ~37 废弃文件）
- 3.2 新架构（9 Section + 2 Shared 组件，274 i18n keys）
- 3.3 全语言翻译（en/zh/fr/de/es）
- 3.4 样式与动画（CSS 设计令牌、滚动动画、无障碍支持）
- 3.5 QA 验证（前后端构建通过，0 错误）
- 3.6 视觉升级（Emoji→SVG、7 张真人图片、Ken Burns 背景）

### Phase 4: 测试与部署 — 🔄 进行中
- [ ] 跨浏览器测试（Chrome/Safari/Firefox）
- [ ] 移动端真机测试（iOS/Android）
- [ ] 性能测试（Lighthouse，目标 >90）
- [ ] 5 种语言完整切换测试
- [ ] Analytics 埋点（GA4）
- [ ] SEO 优化（meta tags、Schema.org）
- [ ] 构建并部署生产版本

### Phase 5: 数据追踪与优化 — ⏳ 待启动

## 已知的坑 [HOLE]
- ~~分支落后远程 5 个 commit~~ → 已同步（2026-02-24）
- ~~4 个文件有未提交的本地修改~~ → 远程已包含相同修复
- 根目录 `CLAUDE.md` 与 `.claude/CLAUDE.md` 同时存在（根目录为心跳内核入口，.claude/ 为项目规则）

## 关键决策摘要
- 项目从"Max 聚焦"策略转为"全平台展示"策略（Phase 2 → Phase 3）
- Landing Page 采用 9-section 叙事漏斗，面向 B2B SaaS 转化
- 设计系统：深色主题 + 紫色渐变 + 玻璃拟态 + Ken Burns 背景

## 下一步建议
- 启动 Phase 4 测试：先做前端构建验证 + Lighthouse 性能审计
- 跨浏览器 / 移动端测试
- SEO 优化（meta tags、Schema.org 结构化数据）
- Analytics 埋点（GA4）
