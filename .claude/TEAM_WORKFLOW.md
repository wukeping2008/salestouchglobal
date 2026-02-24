# SalesTouch Multi-Agent Team Workflow

## Overview

本项目采用 **7+1 Agent 协作模式**，由 Team Lead 协调 7 个专业 Agent 并行工作。

```
                    ┌──────────────┐
                    │  Team Lead   │
                    │  (你/Claude)  │
                    └──────┬───────┘
                           │ 协调 & 分发任务
    ┌──────┬───────┬───────┼───────┬──────┬──────┐
    ▼      ▼       ▼       ▼       ▼      ▼      ▼
 ┌──────┐┌──────┐┌──────┐┌──────┐┌─────┐┌───────┐┌──────┐
 │ fe   ││ be   ││ i18n ││  QA  ││ ops ││content││ seo  │
 │ dev  ││ dev  ││ sync ││check ││     ││creator││growth│
 └──────┘└──────┘└──────┘└──────┘└─────┘└───────┘└──────┘
```

## Agent 分类

### 开发 Agents (代码变更)
| Agent | 文件 | 职责 | 触发场景 |
|-------|------|------|---------|
| **fe-dev** | `agents/fe-dev.md` | Vue 组件、UI/UX、CSS、SVG、图片、动画 | 新增/修改组件、样式调整、视觉升级 |
| **be-dev** | `agents/be-dev.md` | Express API、数据服务、服务端逻辑 | 新增 API、数据模型变更 |
| **i18n-sync** | `agents/i18n-sync.md` | 5 语言翻译、key 管理、SVG icon | 涉及用户可见文案的任何变更 |
| **qa-check** | `agents/qa-check.md` | 构建验证、类型检查、代码审查、技术债务 | **每次代码变更后必须执行** |
| **ops** | `agents/ops.md` | Git 工作流、构建部署、环境管理 | 部署、分支操作、依赖升级 |

### 营销 Agents (内容生产)
| Agent | 文件 | 职责 | 触发场景 |
|-------|------|------|---------|
| **content-creator** | `agents/content-creator.md` | 社交媒体、EDM、KOL 文案 | 内容创作、营销活动、文案更新 |
| **seo-growth** | `agents/seo-growth.md` | SEO、Meta、Analytics、增长 | SEO 优化、埋点实施、性能监控 |

---

## 强制规范 (MANDATORY)

### 规范 1: Agent 路由 — 所有任务必须通过 Agent 执行

```
❌ 禁止: 直接修改代码而不指定 Agent
✅ 正确: 先确定 Agent → 按 Agent 规范执行 → 输出 Agent Report
```

### 规范 2: Quality Gate — 代码变更必须通过 qa-check

```
❌ 禁止: 修改代码后直接 commit
✅ 正确: 修改 → qa-check 验证 (6 Gates) → 通过后 commit
```

### 规范 3: i18n 同步 — 涉及文案必须同步 5 语言

```
❌ 禁止: 只改 en.ts 不改其他语言
✅ 正确: en.ts (source of truth) → zh/fr/de/es 同步 → qa-check 验证
```

### 规范 4: Output Contract — Agent 完成后必须输出报告

```
每个 Agent 完成任务后，必须按其 Output Contract 格式报告:
- 修改了哪些文件
- 新增了什么
- 是否通过验证
- 其他说明
```

### 规范 5: Content 品牌一致性

```
❌ 禁止: 使用未经 content-creator 审查的营销文案
✅ 正确: content-creator 创作 → 品牌语调审查 → 发布
```

---

## 标准工作流

### Flow 1: 功能开发 (Feature Development)

适用于新增功能、组件、页面。

```
Step 1: Team Lead 分析需求，拆解任务
         ↓
Step 2: 并行启动 (parallel)
         ├─ fe-dev: 开发组件框架 (用 $t() placeholder)
         ├─ be-dev: 开发 API (如需要)
         └─ i18n-sync: 准备翻译 key 结构
         ↓
Step 3: 串行整合
         ├─ fe-dev: 集成 API + i18n keys
         └─ i18n-sync: 填充所有语言翻译
         ↓
Step 4: qa-check 验证 (MANDATORY)
         ├─ TypeScript 编译
         ├─ 构建验证
         ├─ i18n 完整性
         └─ 代码审查
         ↓
Step 5: ops (如需提交/部署)
         └─ Git commit + push + deploy
```

### Flow 2: Bug 修复 (Bug Fix)

```
Step 1: Team Lead 定位问题范围
         ↓
Step 2: 对应 Agent 修复
         ├─ fe-dev (UI 问题)
         ├─ be-dev (API 问题)
         └─ i18n-sync (翻译问题)
         ↓
Step 3: qa-check 回归验证 (MANDATORY)
         ↓
Step 4: ops 提交
```

### Flow 3: 视觉升级 (Visual Upgrade)

适用于图片、图标、动画、背景等视觉变更。

```
Step 1: Team Lead 确认视觉方向
         ↓
Step 2: fe-dev 实施
         ├─ SVG 图标更新 (→ 5 语言 i18n 文件)
         ├─ 图片资源 (→ public/images/)
         ├─ CSS 动画/效果
         └─ 响应式适配
         ↓
Step 3: i18n-sync 同步 (如涉及 SVG icon 变更)
         ↓
Step 4: qa-check 验证 (MANDATORY)
         ↓
Step 5: ops 提交
```

### Flow 4: 内容营销 (Content Marketing)

适用于社交媒体、EDM、KOL 内容创作。

```
Step 1: Team Lead 确认内容主题和平台
         ↓
Step 2: content-creator 创作
         ├─ 选择内容支柱 (趋势/产品/客户/技巧)
         ├─ 选择目标受众 (VP/Manager/Trainer/Rep/KOL)
         ├─ 按平台规范创作 (LinkedIn/X/TikTok/YouTube/EDM)
         └─ 包含 CTA 和 UTM 参数
         ↓
Step 3: seo-growth 协同 (UTM tracking + SEO alignment)
         ↓
Step 4: 品牌审查
         └─ 品牌语调、数据准确性、CTA 链接
```

### Flow 5: SEO 与增长 (SEO & Growth)

适用于 SEO 优化、Analytics 埋点、性能监控。

```
Step 1: seo-growth 规划
         ├─ 关键词研究
         ├─ Meta 标签设计
         ├─ Schema.org 结构化数据
         └─ Analytics 事件定义
         ↓
Step 2: 跨 Agent 实施
         ├─ fe-dev: 前端代码实施 (meta tags, event tracking)
         ├─ i18n-sync: 多语言 meta description
         └─ be-dev: 服务端 SSR/meta (如需要)
         ↓
Step 3: qa-check 验证 (MANDATORY)
         ↓
Step 4: seo-growth 验证
         └─ Lighthouse 审计、搜索可见性、事件触发
```

### Flow 6: Landing Page 改版 (Landing Redesign)

适用于 Landing Page 大幅调整。

```
Step 1: Team Lead 确认设计方向和内容
         ↓
Step 2: 并行准备
         ├─ content-creator: 营销文案策略
         ├─ i18n-sync: 翻译 key 结构 + 5 语言文案
         └─ seo-growth: SEO 要求和关键词
         ↓
Step 3: fe-dev 开发
         ├─ 组件开发 (引用 i18n key)
         ├─ 视觉实现 (SVG + 图片 + 动画)
         └─ 响应式布局
         ↓
Step 4: qa-check 验证 (MANDATORY)
Step 5: ops 部署
```

---

## 调用方式

### 方式一: TeamCreate 完整团队 (大型任务)

适用于跨模块的大型开发任务。

```
用户: "实现新的定价页面，带 5 种语言和 API"

→ TeamCreate: salestouchglobal-pricing
→ 创建 Agent: fe-dev, be-dev, i18n-sync, qa-check, ops
→ TaskCreate: 分配具体任务给每个 Agent
→ 协调完成
```

### 方式二: 并行 Task Agent (中型任务)

适用于明确的多文件变更。

```
用户: "给 Hero 添加视频背景和新的 CTA 文案"

→ 并行启动:
   Task(fe-dev): 修改 HeroSection.vue
   Task(i18n-sync): 更新 5 种语言 CTA 文案
→ 串行:
   Task(qa-check): 构建验证
```

### 方式三: 单 Agent 快速任务 (小型任务)

适用于单一领域的小改动。

```
用户: "写 5 条 LinkedIn 帖子"
→ Task(content-creator): 按 CONTENT_MARKETING_PLAN.md 规范创作

用户: "修复德语翻译错误"
→ Task(i18n-sync): 修复 de.ts
```

---

## Agent 间通信协议

### 任务依赖声明
```yaml
# fe-dev 产出
output:
  modified_files: ["HeroSection.vue"]
  new_i18n_keys: ["hero.newCta"]         # → i18n-sync 需要翻译
  new_images: ["hero-video-bg.jpg"]       # → qa-check 需要验证
  new_api_deps: ["/api/pricing"]          # → be-dev 需要实现

# content-creator 产出
output:
  platform: "LinkedIn"
  pieces_created: 5
  utm_params: ["utm_source=linkedin&utm_campaign=feb2026"]  # → seo-growth 追踪

# seo-growth 产出
output:
  meta_tags_updated: true
  analytics_events: ["hero_cta_click", "section_view"]  # → fe-dev 需要实施
```

### 信息传递
- Frontend → i18n: 新增的 `$t()` key 列表
- i18n → Frontend: 确认所有 key 已就绪
- Backend → Frontend: API 接口契约
- QA → All: 问题清单和修复建议
- DevOps → All: 构建结果和部署状态
- Content → SEO: UTM 参数和发布平台
- SEO → Frontend: Analytics 事件和 meta tag 需求

---

## 质量门禁 (每次提交前必须通过)

| 检查项 | Agent | 命令 | 通过标准 |
|--------|-------|------|----------|
| TypeScript 编译 | qa-check | `cd frontend && npx vue-tsc --noEmit` | 0 errors |
| Vite 构建 | qa-check | `cd frontend && npm run build` | 构建成功 |
| i18n 完整性 | i18n-sync | 对比 5 语言文件 key | 0 missing keys |
| 无冗余文件 | qa-check | 检查 .vue.js 文件 | 无意外文件 |
| 后端编译 | qa-check | `cd backend && npm run build` | 0 errors |
| 图片资源 | qa-check | 检查路径和尺寸 | 路径正确，<1MB total |

---

## 关联项目

| 项目 | 路径 | 用途 |
|------|------|------|
| **SalesTouch Platform** | `~/Desktop/test/SalesTouch/` | 主产品平台 (25+ 模块) |
| **SalesTouch Global** | `~/Desktop/salestouchglobal/` | 国际市场 Landing Page |

## 关联文档

| 文档 | 路径 | Agent |
|------|------|-------|
| 内容营销计划 | `CONTENT_MARKETING_PLAN.md` | content-creator |
| 项目工作计划 | `SalesTouch_Overseas-WORK_PLAN.md` | all |
| 项目状态 | `~/Desktop/test/SalesTouch/PROJECT_STATUS_MAX_LANDING.md` | all |
