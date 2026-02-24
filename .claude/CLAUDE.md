# SalesTouch Global - Project Intelligence

## Project Overview

**SalesTouch** is a next-generation AI-driven sales enablement platform with an intelligent AI assistant called **MAX**. This repository (`salestouchglobal`) is the **global landing page** for international markets (primarily North America + Europe).

The **main product platform** lives at `~/Desktop/test/SalesTouch/` - a full-stack application with 25+ functional modules including CRM, sales tools, training, and the MAX AI co-pilot.

## Architecture

### Landing Page (this repo)
- **Frontend**: Vue 3.5 + TypeScript + Vite 7 + vue-i18n
- **Backend**: Express 5 + TypeScript (ROI calculator, dashboard APIs)
- **Languages**: en, zh, fr, de, es (274 keys/language)
- **Visual**: Dark theme + SVG icons + real photos + Ken Burns backgrounds
- **Current Phase**: Phase 4 (Testing & Deployment) + Content Marketing

### Main Platform (~/Desktop/test/SalesTouch/)
- **Frontend**: Vue 3 + TypeScript + Element Plus + Pinia + ECharts
- **Backend**: Node.js + Express 5 + MySQL + Socket.io
- **AI**: Coze API integration, 15+ AI app modules
- **Auth**: JWT + SSO + multi-organization RBAC

## Agent System (7 Agents)

### MANDATORY: All development MUST use Agent mode

Every task must be routed through the appropriate agent(s). No ad-hoc edits without agent assignment.

```
                    ┌──────────────┐
                    │  Team Lead   │
                    │  (协调中心)   │
                    └──────┬───────┘
                           │
    ┌──────┬───────┬───────┼───────┬──────┬──────┐
    ▼      ▼       ▼       ▼       ▼      ▼      ▼
 fe-dev  be-dev  i18n   qa-check  ops  content  seo
                 sync                  creator  growth
```

| Agent | File | Scope |
|-------|------|-------|
| **fe-dev** | `agents/fe-dev.md` | Vue 组件、UI/UX、CSS、SVG 图标、图片、动画 |
| **be-dev** | `agents/be-dev.md` | Express API、数据服务、服务端逻辑 |
| **i18n-sync** | `agents/i18n-sync.md` | 5 语言翻译、key 管理、SVG icon 同步 |
| **qa-check** | `agents/qa-check.md` | 构建验证、类型检查、代码审查、技术债务 |
| **ops** | `agents/ops.md` | Git 工作流、构建部署、环境管理 |
| **content-creator** | `agents/content-creator.md` | 社交媒体内容、EDM、KOL 合作文案 |
| **seo-growth** | `agents/seo-growth.md` | SEO、Meta 标签、Analytics、增长策略 |

### Agent Routing Rules

```
代码变更类:
  前端组件/样式/图片  → fe-dev (+ i18n-sync if text changes)
  后端 API/服务       → be-dev
  多语言文案          → i18n-sync
  构建/质量验证       → qa-check (MANDATORY after every code change)
  Git/部署            → ops

内容营销类:
  社交媒体文案        → content-creator
  EDM 邮件            → content-creator
  KOL 合作提案        → content-creator
  SEO/Meta 优化       → seo-growth
  Analytics 埋点      → seo-growth (+ fe-dev for implementation)

跨 Agent 协作:
  新功能开发          → fe-dev + i18n-sync + qa-check + ops
  Landing 改版        → fe-dev + i18n-sync + content-creator + qa-check
  性能优化            → fe-dev + seo-growth + qa-check
  内容发布            → content-creator + seo-growth (UTM tracking)
```

### Quality Gate (MANDATORY)

**Every code change must pass qa-check before commit:**
1. TypeScript 编译: 0 errors
2. Vite 构建: success
3. i18n 完整性: 5 languages synced
4. 文件卫生: no artifacts
5. 图片资源: paths correct

## Development Conventions

### Code Style
- Vue 3 Composition API with `<script setup lang="ts">`
- TypeScript strict mode
- Scoped styles in Vue SFC
- i18n keys follow `section.keyName` pattern (e.g., `hero.titlePart1`)
- SVG icons: viewBox only (no width/height), sized by CSS `:deep(svg)`

### Branch Strategy
- `main` - production-ready code
- `feature/*` - feature development branches

### Build Commands
- Frontend: `cd frontend && npm run dev` (dev) / `npm run build` (prod)
- Backend: `cd backend && npm run dev` (dev) / `npm run build` (prod)

## Multi-Agent Collaboration

See `.claude/TEAM_WORKFLOW.md` for the full team-based development workflow.
See `.claude/SESSION_STARTUP.md` for the session startup checklist.

## Key Directories

```
frontend/src/
  App.vue                    # Main app (navbar + CSS design tokens)
  components/sections/       # 9 page sections
  components/shared/         # AnimatedSection + FeatureCard
  i18n/locales/              # 5 language files (*.ts, 274 keys each)

frontend/public/
  images/                    # 7 Unsplash photos (hero, testimonials, use cases)

backend/src/
  index.ts                   # Express server (port 3100)
  routes/                    # API routes
  services/                  # Business logic

Root:
  CONTENT_MARKETING_PLAN.md  # Social media + EDM content plan
  SalesTouch_Overseas-WORK_PLAN.md  # Development work plan
```

## Known Issues & Tech Debt
- `frontend/src/i18n/locales/*.js` files are duplicates of .ts files, should be deleted
- MaxShowcase.vue is 679 lines, consider splitting
- No Lighthouse audit yet
- No E2E tests yet
- SEO meta tags not yet implemented
- Analytics (GA4) not yet integrated
