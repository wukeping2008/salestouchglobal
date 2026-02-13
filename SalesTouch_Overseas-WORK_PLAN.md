# SalesTouch Overseas (LongArena) 国际版交付计划

## 1. 项目愿景与目标

基于核心 AI 能力，打造 **SalesTouch.io** 全新国际化 Landing Page。

* **核心定位**: AI 驱动的完整 B2B 销售赋能平台（25+ 模块）。
* **用户旅程 (User Journey)**: 痛点共鸣 → 平台能力展示 → MAX 深度体验 → 工作流认同 → 转化注册。
* **品牌调性**: 国际化、专业感、深色科技风，展示完整平台而非单一功能。

---

## 2. 核心交付 Checklist

### **Phase 1: 基础构建与去本化 —— [已完成]**

- [x] **架构同步**: `SalesTouch_Overseas` 专属空间初始化。
- [x] **多语言基座**: 支持 英/中/法/德/西 5 种语言。
- [x] **品牌清洗**:
  - [x] 移除带有强中国元素的 Legacy Logo。
  - [x] 切换至 `SalesTouch.io` 品牌视觉。

### **Phase 2: Max 聚焦版 —— [已完成，已被 Phase 3 替代]**

- [x] **Max 聚焦策略**: 3 组件结构（HeroMax / MaxInAction / WhyMax）。
- [x] **5 语言文案**: 每语言 ~50 keys。
- [x] **响应式设计**: 桌面/移动端适配。

### **Phase 3: 全平台展示版重构 —— [已完成 2026-02-13]**

#### 3.1 技术债务清理
- [x] 删除 ~37 个废弃文件（旧组件/编译产物/重复 locale/临时文件）
- [x] 重命名 i18n 文件（`*-max.ts` → `*.ts`）
- [x] 更新 `.gitignore` 规则
- [x] 构建验证通过

#### 3.2 新架构设计与实现
- [x] 设计 9 Section 信息架构和叙事流
- [x] 创建 en.ts 基准文件（274 个 key）
- [x] 开发 9 个 Section 组件 + 2 个 Shared 组件
- [x] 修复所有 i18n key 不一致问题
- [x] 重构 App.vue（CSS 设计令牌 + AnimatedSection 集成）

#### 3.3 全语言翻译
- [x] 创建 zh/fr/de/es 四语言文件（274 行/语言，专业 B2B 营销语感）

#### 3.4 样式与动画
- [x] CSS 自定义属性设计令牌系统
- [x] AnimatedSection.vue（Intersection Observer 滚动动画）
- [x] `prefers-reduced-motion` 无障碍支持

#### 3.5 QA 验证
- [x] 前端构建通过（66 模块，0 错误）
- [x] 后端 TypeScript 通过（0 错误）
- [x] i18n 完整性通过（5 × 274 = 1370 行）
- [x] Git 提交: `13ed60b` (45 files, +4,394 / -10,467)

#### 3.6 视觉升级：Emoji → SVG + 真人图片 —— [已完成 2026-02-13]

**目标**: 将所有 emoji 字符替换为专业内联 SVG 图标，添加真实人物图片，提升欧美市场专业感。

**SVG 图标替换**:
- [x] i18n 文件 15 个 icon 字段（problem×4 / platform×6 / workflow×5）全部替换为内联 SVG
- [x] 5 个 locale 文件同步（en/zh/fr/de/es，SVG 无需翻译）
- [x] 组件内联 emoji 替换：
  - HeroSection.vue: ✓ → SVG checkmark（trust badges）
  - MaxShowcase.vue: 👤🤖💡📊🎯✓ → SVG 图标
  - UseCases.vue: 💼📊🎓⚕️✓ → SVG 图标（tabs + feature bullets）
  - FooterSection.vue: ✦ → SVG gradient sparkle
- [x] SVG 尺寸修复：i18n SVG 无 width/height → CSS `:deep(svg)` 统一约束
  - ProblemStatement.vue: `.pain-icon :deep(svg)` 40px（mobile 32px）
  - PlatformOverview.vue: `.capability-icon :deep(svg)` 40px（mobile 32px）
  - WorkflowJourney.vue: `.step-icon :deep(svg)` 36px（mobile 28px）
- [x] 保留语言切换器国旗 emoji（🇬🇧🇨🇳🇫🇷🇩🇪🇪🇸）— 标准 UI 实践

**Hero 背景重设计**:
- [x] 移除旋转渐变动画（180° 旋转效果不协调）
- [x] 新增 Ken Burns 背景图动画（`/images/hero-team.jpg`, opacity 0.35, 30s 缓慢缩放平移）
- [x] 新增两个浮动渐变光球（700/600px, radial-gradient, drift 动画）
- [x] 新增渐变叠加层（radial-gradient 暗角 + 线性渐变，营造影院深度感）
- [x] 经过 3 轮迭代优化背景清晰度（opacity 0.15 → 0.28 → 0.35）
- [x] `prefers-reduced-motion` 无障碍支持

**真人图片（7 张，Unsplash 免费商用）**:
- [x] `hero-team.jpg` (299KB) — Hero + CTA 背景
- [x] `testimonial-1.jpg` (12KB) — SocialProof 证言头像（专业女性）
- [x] `testimonial-2.jpg` (8KB) — SocialProof 证言头像（专业男性）
- [x] `usecase-sales.jpg` (84KB) — 销售场景
- [x] `usecase-managers.jpg` (51KB) — 管理场景
- [x] `usecase-trainers.jpg` (72KB) — 培训场景
- [x] `usecase-medical.jpg` (43KB) — 医疗场景

**组件布局增强**:
- [x] SocialProof.vue: 证言头像放大 56→72px，增加边框 + 阴影
- [x] UseCases.vue: 改为双栏 grid 布局（文本 + 场景配图），mobile 单栏图片置顶
- [x] CTASection.vue: 新增低透明度背景团队图（opacity 0.12）

**构建验证**: 前端 `npm run build` 通过，0 错误。

### **Phase 4: 测试与部署 —— [进行中]**

- [ ] 跨浏览器测试（Chrome/Safari/Firefox）
- [ ] 移动端真机测试（iOS/Android）
- [ ] 性能测试（Lighthouse，目标 >90）
- [ ] 5 种语言完整切换测试
- [ ] Analytics 埋点（GA4）
- [ ] SEO 优化（meta tags、Schema.org）
- [ ] 构建并部署生产版本

### **Phase 5: 数据追踪与优化 —— [待启动]**

- [ ] 埋点数据收集（7 天）
- [ ] 用户行为分析（各 Section 可见率、CTA 点击率）
- [ ] 转化漏斗优化
- [ ] A/B 测试（标题文案、CTA、Section 顺序）
- [ ] 文案微调

---

## 3. 当前架构概览

### Landing Page 叙事流（9 Section）

```
HeroSection       → "AI 驱动的完整销售平台" + 双 CTA + 信任标签
ProblemStatement  → 4 个传统销售痛点（量化数据）
PlatformOverview  → 6 大核心能力（CRM / AI 内容 / 训练 / MAX / 分析 / 医疗）
MaxShowcase       → MAX AI 3 步交互 Demo（读取 → 推荐 → 执行）
WorkflowJourney   → 5 步 B2B 销售旅程时间轴
UseCases          → 4 类用户场景 Tab 切换
SocialProof       → 平台数据指标 + 用户证言
CTASection        → 最终转化 "Start Free Trial"
FooterSection     → 4 列专业页脚
```

### 组件结构

```
components/
├── sections/ (9 个)    → 页面区块，各自 <style scoped>
└── shared/ (2 个)      → FeatureCard + AnimatedSection
```

### 图片资源 (`public/images/`)

```
images/
├── hero-team.jpg           (299KB) → Hero + CTA 背景
├── testimonial-1.jpg        (12KB) → SocialProof 证言头像
├── testimonial-2.jpg         (8KB) → SocialProof 证言头像
├── usecase-sales.jpg        (84KB) → UseCases 销售场景
├── usecase-managers.jpg     (51KB) → UseCases 管理场景
├── usecase-trainers.jpg     (72KB) → UseCases 培训场景
└── usecase-medical.jpg      (43KB) → UseCases 医疗场景
```

### 设计系统

- 深色主题: `#0f0f1e` / `#1a1a2e`
- 品牌渐变: `#667eea` → `#764ba2`
- 玻璃拟态: `backdrop-filter: blur()` + 半透明边框
- 图标系统: 内联 SVG（`v-html` 渲染 + CSS `:deep(svg)` 尺寸控制）
- 背景效果: Ken Burns 动画 + 浮动渐变光球 + 暗角叠加
- 滚动动画: Intersection Observer fadeInUp
- 响应式断点: 480px / 768px / 1024px / 1400px

### 构建产物

```
JS:  195 KB (gzip: 67 KB)
CSS:  35 KB (gzip:  6 KB)
```

---

## 4. 关键命令

```bash
cd frontend
npm run dev       # 开发服务器
npm run build     # 生产构建 (vue-tsc + vite)
npm run preview   # 预览生产版本
```

---
*最后更新时间: 2026-02-13 (Phase 3.6 视觉升级)*
