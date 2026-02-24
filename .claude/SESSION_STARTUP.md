# Session Startup Protocol

每次开始新的开发会话时，按照以下流程启动。

---

## Phase 1: 状态感知 (Context Loading)

**目标**: 快速了解项目当前状态。

### 自动执行
```bash
# 1. 当前分支和状态
git status
git log --oneline -5

# 2. 是否有未完成的工作
git diff --stat
git stash list

# 3. 依赖是否完整
cd frontend && npm ls --depth=0 2>&1 | tail -5
cd backend && npm ls --depth=0 2>&1 | tail -5
```

### 输出摘要
```
分支: feature/xxx
状态: clean / N files modified
最近提交: xxx
待处理: [列出]
```

---

## Phase 2: 健康检查 (Health Check)

**目标**: 确认项目可正常构建。

### 快速检查 (推荐，每次执行)
```bash
# 前端 TypeScript 检查
cd frontend && npx vue-tsc --noEmit 2>&1 | tail -20

# 后端编译检查
cd backend && npx tsc --noEmit 2>&1 | tail -20
```

### 完整构建 (如需确认)
```bash
cd frontend && npm run build
cd backend && npm run build
```

---

## Phase 3: 任务路由 (Agent Routing)

**目标**: 根据用户需求，确定 Agent 分配。

### 决策树

```
用户需求
  │
  ├─ 代码变更类 ─────────────────────────────────────
  │   ├─ 新功能开发 → Flow 1 (Feature Development)
  │   │   ├─ 前端组件?  → fe-dev
  │   │   ├─ 后端 API?  → be-dev
  │   │   ├─ 涉及文案?  → i18n-sync
  │   │   ├─ 验证       → qa-check (MANDATORY)
  │   │   └─ 提交       → ops
  │   │
  │   ├─ Bug 修复 → Flow 2 (Bug Fix)
  │   │   ├─ 定位域    → fe-dev / be-dev / i18n-sync
  │   │   ├─ 回归验证  → qa-check (MANDATORY)
  │   │   └─ 提交      → ops
  │   │
  │   ├─ 视觉升级 → Flow 3 (Visual Upgrade)
  │   │   ├─ SVG/图片/动画 → fe-dev
  │   │   ├─ SVG icon 同步 → i18n-sync
  │   │   ├─ 验证          → qa-check (MANDATORY)
  │   │   └─ 提交          → ops
  │   │
  │   ├─ Landing 改版 → Flow 6 (Landing Redesign)
  │   │   ├─ 文案策略  → content-creator
  │   │   ├─ 翻译准备  → i18n-sync
  │   │   ├─ 组件开发  → fe-dev
  │   │   ├─ SEO 要求  → seo-growth
  │   │   ├─ 验证      → qa-check (MANDATORY)
  │   │   └─ 部署      → ops
  │   │
  │   └─ SEO/Analytics → Flow 5 (SEO & Growth)
  │       ├─ 规划      → seo-growth
  │       ├─ 前端实施  → fe-dev
  │       ├─ 多语言 meta → i18n-sync
  │       └─ 验证      → qa-check (MANDATORY)
  │
  ├─ 内容营销类 ─────────────────────────────────────
  │   ├─ 社交媒体内容 → Flow 4 (Content Marketing)
  │   │   ├─ 创作     → content-creator
  │   │   └─ UTM 追踪 → seo-growth
  │   │
  │   ├─ EDM 邮件 → content-creator
  │   │
  │   ├─ KOL 合作 → content-creator
  │   │
  │   └─ 品牌文案 → content-creator (+ i18n-sync if multilingual)
  │
  ├─ 运维类 ─────────────────────────────────────────
  │   ├─ 部署/发布 → ops
  │   ├─ 依赖升级  → ops (+ qa-check)
  │   └─ 环境配置  → ops
  │
  └─ 文档类 ─────────────────────────────────────────
      ├─ 项目文档更新 → Team Lead 直接执行
      ├─ Agent 规范更新 → Team Lead 直接执行
      └─ 技术文档      → 对应领域 Agent
```

### Agent 启动模板

#### 大型任务 (TeamCreate)
```
TeamCreate: salestouchglobal-{task-name}
  → Task(fe-dev): {前端任务描述}
  → Task(be-dev): {后端任务描述}
  → Task(i18n-sync): {翻译任务描述}
  → Task(content-creator): {内容任务描述}
  → Task(seo-growth): {SEO 任务描述}
  → Task(qa-check): 所有变更完成后执行质量门禁
  → Task(ops): 通过质量门禁后执行 git 操作
```

#### 中型任务 (并行 Task)
```
并行:
  Task(agent-1): {任务 1}
  Task(agent-2): {任务 2}
串行:
  Task(qa-check): 验证
```

#### 小型任务 (单 Agent)
```
Task({agent}): {任务描述}
```

---

## Phase 4: 执行 & 追踪 (Execution & Tracking)

### TodoWrite 规范
- 拆解任务为 3-10 个 todo item
- 每个 item 对应一个可验证的输出
- 完成一个立即标记 completed
- 同一时间只有 1 个 in_progress

### Agent Output 规范
每个 Agent 完成任务后，**必须**按其 Output Contract 输出报告:
```yaml
# 通用格式
agent: "{agent-name}"
task: "{任务描述}"
modified_files: [...]
status: "completed" / "needs-review" / "blocked"
notes: "..."
```

### 进度汇报
每完成一个 agent 的任务后，汇报:
```
[Agent] 完成: {任务描述}
  修改: {文件列表}
  下一步: {后续任务}
```

---

## Phase 5: 收尾 (Wrap-up)

### 提交前检查 (MANDATORY)
1. qa-check 执行完整 Quality Gates (6 Gates)
2. 确认所有 todo 已完成或明确记录未完成原因
3. 确认没有遗留的 debug 代码或临时文件
4. 如涉及文案变更，确认 5 语言已同步

### 会话总结
```
本次会话完成:
  - [x] {完成的任务 1} [agent: fe-dev]
  - [x] {完成的任务 2} [agent: i18n-sync]
  - [ ] {未完成的任务} [原因]

下次会话建议:
  - {建议的后续工作} [建议 agent]
```

---

## Quick Reference: Agent Spawn Commands

| 场景 | Agent | subagent_type |
|------|-------|---------------|
| Vue 组件开发 | fe-dev | general-purpose |
| API 开发 | be-dev | general-purpose |
| 多语言翻译 | i18n-sync | general-purpose |
| 构建验证 | qa-check | general-purpose |
| Git/部署 | ops | Bash |
| 社交媒体内容 | content-creator | general-purpose |
| SEO/Analytics | seo-growth | general-purpose |
| 代码探索 | - | Explore |
| 架构规划 | - | Plan |
| Bug 分析 | - | bug-analyzer |
| 代码审查 | - | code-reviewer |

## Quick Reference: 内容营销参考

| 平台 | 频率 | 主要 Agent |
|------|------|-----------|
| LinkedIn | 5x/周 | content-creator |
| X (Twitter) | 7-10x/周 | content-creator |
| TikTok | 4-5x/周 | content-creator |
| YouTube | 2x/周 | content-creator |
| Facebook | 3x/周 | content-creator |
| EDM | 2-3x/月 | content-creator |
| SEO 优化 | 持续 | seo-growth + fe-dev |
