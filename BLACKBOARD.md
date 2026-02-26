# 黑板 (Blackboard)

## 项目状态
- 当前阶段：Phase 4（测试与部署）
- 最后更新：2026-02-26
- 最后操作者：蚁群（overseas-content-sync team）

## 项目概况
- **项目名称**: SalesTouch.io — AI 驱动的 B2B 销售赋能平台（25+ 模块）
- **当前分支**: `feature/north-america-landing-20260129`
- **技术栈**: Vue 3 (Composition API) + TypeScript + Vite 7 (前端) / Express + TypeScript (后端)
- **核心产品**: SalesTouch (AI Sales Coach) + SalesNail (Smart Page) + MAX AI Agent
- **Landing Page**: 9-section 叙事漏斗架构，5 语言 × 282 i18n lines，5 use case tabs

## 当前未提交变更
- 内容同步更新（待 commit）

## 内容同步记录（2026-02-26）

主站新功能同步到 Landing Page，涉及文件：
- `frontend/src/i18n/locales/{en,zh,fr,de,es}.ts` — 5 语言全量更新
- `frontend/src/components/sections/UseCases.vue` — 新增 Solo tab

### 同步内容
1. **Solo 模式**: Hero 副标题 + trustBadge3 + UseCases 新增 "Individual Professionals" tab + CTA subtext
2. **游戏化系统**: MAX 描述更新为 12 技能类别 + XP/等级 + 信心环
3. **对话式方案生成**: AI Content Engine 和 MaxShowcase Step 2/3 更新，突出 30 秒 Chat-to-Proposal
4. **12 技能体系**: PlatformOverview MAX 卡片 + SocialProof 统计数据更新
5. **构建验证**: 67 模块，0 TS 错误，5×282 行 i18n 完全一致

## 完成进度（来自 WORK_PLAN）

### Phase 1–3 — ✅ 全部已完成

### Phase 4: 测试与部署 — 🔄 进行中
- [x] SEO 优化（meta tags、Open Graph、Twitter Card、Schema.org JSON-LD）— `a426e70`
- [x] Analytics 埋点（GA4）— `fd4932b`
  - CTA 点击追踪（hero×2 + navbar + CTA section×2）
  - 语言切换追踪（from/to）
  - 7 个 section 滚动可见度追踪
  - 环境变量配置（`VITE_GA_MEASUREMENT_ID`）
- [x] 5 种语言完整性验证 — 5×282 行，完全一致（含内容同步新增 keys）
- [x] 性能优化 — 移除遗留 ai-coach.png（663KB）+ hero 图片 preload
- [ ] 跨浏览器测试（Chrome/Safari/Firefox）— 需人工
- [ ] 移动端真机测试（iOS/Android）— 需人工
- [ ] Lighthouse 性能审计（目标 >90）— 需部署后测试
- [ ] 构建并部署生产版本

### Phase 5: 数据追踪与优化 — ⏳ 待启动

## 构建状态
- 前端: 67 模块，0 TS 错误，1.11s
- 后端: 0 TS 错误
- 产物: JS 232KB (gzip 72KB) / CSS 39KB (gzip 6.6KB) / HTML 3.9KB

## 已知的坑 [HOLE]
- 根目录 `CLAUDE.md` 与 `.claude/CLAUDE.md` 同时存在（根目录为心跳内核入口，.claude/ 为项目规则）
- `vite.svg` 仍作为 favicon，生产环境应替换为品牌 logo

## 关键决策摘要
- GA4 采用动态 gtag.js 注入（无 npm 包依赖），通过 Vite 环境变量控制开关
- SEO 采用 Schema.org SoftwareApplication 类型
- 遗留 `ai-coach.png`（663KB）确认无引用，已删除

## 下一步建议
- 提交内容同步变更到 git
- 转化闭环：注册页/Trial 入口 + CTA 跳转逻辑
- 内容营销启动：LinkedIn/X/EDM 首批内容产出
- 部署上线（待人类确认方案）
- 配置实际 GA4 Measurement ID（`.env` 文件）
- 跨浏览器 / 移动端人工测试
- Lighthouse 审计
