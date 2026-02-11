# 周三汇报演示指南

## 🎯 汇报目标

展示 SalesTouch Global (LongArena) Landing Page 的当前进展，重点演示 User Journey 和 Interactive Experience。

---

## 📊 汇报时长分配（建议 15-20 分钟）

| 环节 | 时长 | 内容 |
|------|------|------|
| 开场与项目概述 | 2分钟 | 背景、定位、目标用户 |
| 当前进度展示 | 3分钟 | 已完成成果、技术架构 |
| User Journey 演示 | 5分钟 | 核心转化路径设计 |
| Interactive Experience Demo | 6分钟 | 双轨交互体验演示 |
| 下一步计划 | 2分钟 | 短期和中期目标 |
| Q&A | 2分钟 | 回答问题、讨论 |

---

## 🎬 演示步骤详解

### 第 1 部分：开场与项目概述（2分钟）

**演示内容**：
1. 打开 `WEDNESDAY_PRESENTATION.md` 文档
2. 展示项目概述部分：
   - 核心定位：AI 赋能销售专家平台
   - 目标用户画像：专家型销售教练
   - 核心痛点：无法规模化、内容碎片化、交付效率低

**话术要点**：
> "我们的目标用户是行业专家和销售培训师，他们有深厚的实战经验，但苦于无法规模化。SalesTouch 通过 AI 技术，将他们的个人经验转化为可复制的工具。"

---

### 第 2 部分：当前进度展示（3分钟）

**演示内容**：
1. 展示整体进度概览（进度条）
2. 强调 Phase 2 的 60% 完成度
3. 展示已完成成果列表：
   - ✅ 多语言基座
   - ✅ 品牌去中国化
   - ✅ Premium AI Coach 视觉资产
   - ✅ 产品模块矩阵

**技术演示**（可选）：
```bash
cd /Users/kepingwu/Desktop/salestouchglobal
git log --oneline -5
```

**话术要点**：
> "我们在过去两周完成了基础架构和多语言支持，新增代码超过 12000 行。前端采用 Vue 3 + TypeScript，后端使用 Node.js，支持 5 种语言本地化。"

---

### 第 3 部分：User Journey 演示（5分钟）

**演示内容**：
1. 打开 `WEDNESDAY_PRESENTATION.md` → 第 4 部分 User Journey
2. 展示用户旅程路径图（ASCII 流程图）
3. 讲解 5 个阶段的转化逻辑：
   - 发现 → 兴趣 → 体验 → 行动 → 转化

**关键转化点讲解**：
1. **发现 → 兴趣**: Premium AI Coach 专家形象
2. **兴趣 → 体验**: 30秒快速交互演示
3. **体验 → 行动**: "Capture Your Brilliance" 话术
4. **行动 → 转化**: 14天免费试用

**话术要点**：
> "用户旅程的核心设计理念是：极简互动体验 → 专家逻辑认同 → 引导注册。我们不做硬推销，而是通过专家反馈让用户自发产生认同。"

---

### 第 4 部分：Interactive Experience Demo（6分钟）⭐ 核心

**启动演示**：
```bash
cd /Users/kepingwu/Desktop/salestouchglobal/frontend
npm run dev
```

#### 演示 A: Desktop View - Mentor Simulator

1. **打开浏览器** → `http://localhost:5173`
2. **滚动到 Interactive Experience 区域**
3. **展示桌面视图布局**：
   - Tab 切换（Mentor Simulator / Expert Engine）
   - 聊天窗口界面
   - 预设选项按钮

4. **执行交互演示**：
   - 点击预设选项："I sell AI software to SMBs"
   - 等待 AI 反馈（2秒动画）
   - 展示专家反馈内容
   - 触发注册引导遮罩

5. **话术要点**：
   > "我们设计了 3 个预设场景，降低用户认知负担。反馈内容模仿专家顾问的语气，强调'逻辑而非情感'、'关注不作为的成本'等专家建议，让用户感受到 AI 的专业价值。"

#### 演示 B: Desktop View - Expert Engine (SalesNail)

1. **切换 Tab** → "Expert Engine"
2. **展示左右分栏布局**：
   - 左侧：文本输入区
   - 右侧：结果展示区

3. **执行交互演示**：
   - 粘贴示例文本（准备好的案例）
   - 点击"Synthesize Success Page"
   - 展示扫描动画效果
   - 展示权威评分卡片（92分）
   - 触发注册引导遮罩

4. **话术要点**：
   > "SalesNail 的核心价值是 30 秒出稿。用户只需要粘贴笔记或会议记录，AI 就能生成专家级营销剧本，并给出权威评分。模糊预览区域激发好奇心，引导用户注册查看完整内容。"

#### 演示 C: Mobile Simulator

1. **切换视图** → 点击"Mobile Simulator"按钮
2. **展示手机框架界面**：
   - 手机外观设计
   - 垂直流对话界面
   - 模拟直播/社交媒体风格

3. **执行交互演示**：
   - 点击预设选项
   - 展示移动端对话体验
   - 展示注册引导

4. **话术要点**：
   > "考虑到移动端流量占比，我们设计了手机模拟器。界面采用垂直流设计，模仿直播或社交媒体的互动感，更符合移动用户的使用习惯。"

---

### 第 5 部分：下一步计划（2分钟）

**演示内容**：
1. 打开 `WEDNESDAY_PRESENTATION.md` → 第 6 部分
2. 展示短期目标表格（本周 - 2月7日前）
3. 强调 P0 优先级任务：
   - 文案精修
   - User Journey 文档定稿
   - Interactive Experience Demo 优化

4. 简要说明中长期目标

**话术要点**：
> "本周的优先任务是完成文案精修和 Demo 优化。下周我们将对接后端真实 API，实现 SalesNail 的真实营销剧本生成和 SalesTouch 的自然对话体验。"

---

### 第 6 部分：Q&A（2分钟）

**准备回答的问题**：
1. **简化程度问题**:
   - Q: Landing Page 是否应该完全独立？
   - A: 当前计划剥离 Master Site 逻辑，但这需要进一步讨论。

2. **注册流程问题**:
   - Q: 注册引导应该直接跳转主站吗？
   - A: 我们倾向在当前页面完成注册，降低跳转流失。

3. **AI 真实度问题**:
   - Q: Mentor Simulator 是否需要真实 AI 后端？
   - A: 当前用 Scripted 交互，未来会接入真实 AI 模型。

4. **后端对接问题**:
   - Q: 什么时候可以对接真实 API？
   - A: 预计下周开始，需要 API 规范文档。

---

## 🛠️ 演示环境准备

### 启动前端开发服务器

```bash
# 进入前端目录
cd /Users/kepingwu/Desktop/salestouchglobal/frontend

# 安装依赖（如需要）
npm install

# 启动开发服务器
npm run dev
```

### 访问地址

- **开发服务器**: http://localhost:5173
- **演示重点页面**: Interactive Experience 区域（滚动到底部）

### 备用方案

**如果开发服务器无法启动**：
- 使用已构建的静态文件：`frontend/dist/index.html`
- 通过本地 HTTP 服务器访问：
  ```bash
  cd /Users/kepingwu/Desktop/salestouchglobal/frontend/dist
  python3 -m http.server 8000
  ```
  访问：http://localhost:8000

---

## 📝 演示检查清单

### 演示前准备（10分钟）

- [ ] 确认前端开发服务器正常运行
- [ ] 测试 Interactive Experience 交互流程
- [ ] 准备示例文本（SalesNail 演示用）
- [ ] 打开 `WEDNESDAY_PRESENTATION.md` 文档
- [ ] 测试手机模拟器切换功能
- [ ] 确认演示时间安排

### 演示中注意事项

- [ ] 保持演示流畅，避免频繁切换窗口
- [ ] 重点突出 User Journey 和 Interactive Experience
- [ ] 控制每个环节的时间
- [ ] 准备好回答可能的问题

### 演示后跟进

- [ ] 收集反馈意见
- [ ] 记录需要讨论的问题
- [ ] 更新 `WEDNESDAY_PRESENTATION.md`
- [ ] 制定下一步行动计划

---

## 🎯 成功标准

**演示成功的标志**：
1. ✅ 清晰传达项目定位和目标用户
2. ✅ 展示 Interactive Experience 的核心价值
3. ✅ 演示 User Journey 的转化逻辑
4. ✅ 获得团队对当前方向的认同
5. ✅ 明确下一步行动计划

**需要避免的问题**：
1. ❌ 技术细节过多，偏离业务价值
2. ❌ 演示卡顿或失败，影响专业形象
3. ❌ 没有清晰的用户故事，难以产生共鸣
4. ❌ 缺少明确的目标和时间规划

---

**演示指南准备完成，祝周三汇报顺利！** 🎉

*生成时间: 2026-02-05*
