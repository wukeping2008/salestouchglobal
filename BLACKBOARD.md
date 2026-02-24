# 黑板 (Blackboard)

## 项目状态
- 当前阶段：开发中
- 最后更新：2026-02-24
- 最后操作者：🔍 探路蚁（Scout）

## 项目概况
- **项目名称**: SalesTouch Overseas (LongArena) — AI 销售教练国际化平台
- **当前分支**: `feature/north-america-landing-20260129`（落后远程 5 个 commit）
- **技术栈**: Vue.js (前端) + Node.js/TypeScript (后端)
- **核心产品**: SalesTouch (AI Sales Coach) + SalesNail (Smart Page)

## 当前未提交变更
- `backend/src/index.ts` — 北美路由挂载（小改动）
- `backend/src/routes/naRoutes.ts` — 北美 API 路由（ROI、Dashboard、Case Studies、Pricing、Contact）
- `backend/src/services/northAmericanService.ts` — 北美业务服务层
- `frontend/package-lock.json` — 前端依赖更新

## 进行中的任务（来自 WORK_PLAN）
### Phase 1: 基础构建与去本化 — 大部分完成
- [x] 架构同步
- [x] 多语言基座
- [x] 品牌清洗
- [ ] 用户画像定义文档

### Phase 2: Landing Page 极简重构 — 部分完成
- [x] 专家形象构建
- [x] 去区域化
- [x] 主站信息对齐
- [x] 产品模块矩阵
- [ ] 结构简化（剥离 Master Site 逻辑，互动式试用流）
- [ ] 移动端优化

### Phase 3: 产品联动互动演示 — 未开始
- [ ] SalesNail 剧本定制体验
- [ ] SalesTouch 人机对话练习
- [ ] 跳转闭环

### Phase 4: 校验与发布 — 未开始
- [ ] 周三汇报版
- [ ] 主站对接

## 已知的坑 [HOLE]
- 分支落后远程 5 个 commit，需 `git pull` 同步
- 4 个文件有未提交的本地修改，可能与远程冲突
- 互动演示（Phase 3）的具体技术方案尚不明确

## 下一步建议
- 先 `git pull` 同步远程，解决可能的合并冲突
- 提交当前有效变更
- 确定下一个优先开发任务（结构简化 / 移动端优化 / 互动演示）
