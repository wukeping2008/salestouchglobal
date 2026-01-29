<script setup lang="ts">
import { ref, computed } from 'vue'

// Input values
const teamSize = ref(5)
const avgDealSize = ref(10000)
const currentCloseRate = ref(20)
const targetCloseRate = ref(35)
const monthlySalesCalls = ref(200)
const aiCoachingHours = ref(10)
const currentYear = new Date().getFullYear()

// Computed values
const currentMonthlyRevenue = computed(() => {
  return (monthlySalesCalls.value * (currentCloseRate.value / 100) * avgDealSize.value)
})

const targetMonthlyRevenue = computed(() => {
  return (monthlySalesCalls.value * (targetCloseRate.value / 100) * avgDealSize.value)
})

const monthlyRevenueIncrease = computed(() => {
  return targetMonthlyRevenue.value - currentMonthlyRevenue.value
})

const annualRevenueIncrease = computed(() => {
  return monthlyRevenueIncrease.value * 12
})

const coachingCost = computed(() => {
  const basePrice = 99
  const teamDiscount = teamSize.value > 10 ? 0.85 : 1 // 15% discount for teams > 10
  return basePrice * teamSize.value * teamDiscount
})

const monthlyROI = computed(() => {
  if (coachingCost.value === 0) return 0
  return ((monthlyRevenueIncrease.value - coachingCost.value) / coachingCost.value) * 100
})

const annualROI = computed(() => {
  if (coachingCost.value === 0) return 0
  return ((annualRevenueIncrease.value - (coachingCost.value * 12)) / (coachingCost.value * 12)) * 100
})

const paybackPeriod = computed(() => {
  if (monthlyRevenueIncrease.value === 0) return 'N/A'
  const months = coachingCost.value / monthlyRevenueIncrease.value
  if (months < 1) return '< 1 month'
  return `${months.toFixed(1)} months`
})

const confidenceScore = computed(() => {
  // Calculate confidence based on realistic parameters
  let score = 0
  if (currentCloseRate.value >= 10 && currentCloseRate.value <= 50) score += 25
  if (targetCloseRate.value > currentCloseRate.value && targetCloseRate.value <= 75) score += 25
  if (monthlySalesCalls.value >= 50 && monthlySalesCalls.value <= 500) score += 25
  if (aiCoachingHours.value >= 5 && aiCoachingHours.value <= 20) score += 25
  return score
})

const confidenceLevel = computed(() => {
  const score = confidenceScore.value
  if (score >= 75) return { level: 'High', color: 'text-green-600', bg: 'bg-green-100' }
  if (score >= 50) return { level: 'Medium', color: 'text-yellow-600', bg: 'bg-yellow-100' }
  return { level: 'Conservative', color: 'text-orange-600', bg: 'bg-orange-100' }
})

// Format currency
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value)
}

// Format percentage
const formatPercent = (value: number) => {
  return `${value.toFixed(1)}%`
}

// Reset to defaults
const resetToDefaults = () => {
  teamSize.value = 5
  avgDealSize.value = 10000
  currentCloseRate.value = 20
  targetCloseRate.value = 35
  monthlySalesCalls.value = 200
  aiCoachingHours.value = 10
}

// Copy results
const copyResults = async () => {
  const text = `
ROI Calculator Results - SalesTouch
================================

Team Size: ${teamSize.value} salespeople
Average Deal Size: ${formatCurrency(avgDealSize.value)}
Monthly Sales Calls: ${monthlySalesCalls.value}
AI Coaching Hours: ${aiCoachingHours.value}h/month

Current Performance:
- Close Rate: ${currentCloseRate.value}%
- Monthly Revenue: ${formatCurrency(currentMonthlyRevenue.value)}

Target Performance:
- Close Rate: ${targetCloseRate.value}%
- Monthly Revenue: ${formatCurrency(targetMonthlyRevenue.value)}

Results:
- Monthly Revenue Increase: ${formatCurrency(monthlyRevenueIncrease.value)}
- Annual Revenue Increase: ${formatCurrency(annualRevenueIncrease.value)}
- Monthly Cost: ${formatCurrency(coachingCost.value)}
- Annual Cost: ${formatCurrency(coachingCost.value * 12)}
- Monthly ROI: ${formatPercent(monthlyROI.value)}
- Annual ROI: ${formatPercent(annualROI.value)}
- Payback Period: ${paybackPeriod.value}
- Confidence Level: ${confidenceLevel.value.level}

Get started: https://salestouch.northamerica/start
  `.trim()

  try {
    await navigator.clipboard.writeText(text)
    alert('ROI results copied to clipboard!')
  } catch (err) {
    console.error('Failed to copy:', err)
    alert('Failed to copy. Please select and copy manually.')
  }
}
</script>

<template>
  <section class="roi-calculator-section" id="roi-calculator">
    <div class="container">
      <!-- Header -->
      <div class="calculator-header">
        <h2 class="calculator-title">
          <span class="title-icon">📊</span>
          ROI Calculator
        </h2>
        <p class="calculator-subtitle">
          See how much revenue you can increase with AI-powered sales coaching
        </p>
      </div>

      <div class="calculator-grid">
        <!-- Input Column -->
        <div class="input-column">
          <h3 class="section-title">Your Sales Team</h3>

          <div class="input-group">
            <label class="input-label">
              Team Size (Salespeople)
              <span class="input-value">{{ teamSize }}</span>
            </label>
            <input
              type="range"
              v-model.number="teamSize"
              min="1"
              max="50"
              step="1"
              class="slider-input"
            />
            <div class="range-labels">
              <span>1</span>
              <span>50</span>
            </div>
          </div>

          <div class="input-group">
            <label class="input-label">
              Average Deal Size (USD)
              <span class="input-value">{{ formatCurrency(avgDealSize) }}</span>
            </label>
            <input
              type="range"
              v-model.number="avgDealSize"
              min="1000"
              max="100000"
              step="1000"
              class="slider-input"
            />
            <div class="range-labels">
              <span>$1K</span>
              <span>$100K</span>
            </div>
          </div>

          <div class="input-group">
            <label class="input-label">
              Current Close Rate (%)
              <span class="input-value">{{ currentCloseRate }}%</span>
            </label>
            <input
              type="range"
              v-model.number="currentCloseRate"
              min="5"
              max="75"
              step="1"
              class="slider-input"
            />
            <div class="range-labels">
              <span>5%</span>
              <span>75%</span>
            </div>
          </div>

          <div class="input-group">
            <label class="input-label">
              Target Close Rate (%)
              <span class="input-value">{{ targetCloseRate }}%</span>
            </label>
            <input
              type="range"
              v-model.number="targetCloseRate"
              min="10"
              max="90"
              step="1"
              class="slider-input"
            />
            <div class="range-labels">
              <span>10%</span>
              <span>90%</span>
            </div>
          </div>

          <div class="input-group">
            <label class="input-label">
              Monthly Sales Calls (per person)
              <span class="input-value">{{ monthlySalesCalls }}</span>
            </label>
            <input
              type="range"
              v-model.number="monthlySalesCalls"
              min="50"
              max="500"
              step="10"
              class="slider-input"
            />
            <div class="range-labels">
              <span>50</span>
              <span>500</span>
            </div>
          </div>

          <div class="input-group">
            <label class="input-label">
              AI Coaching Hours (per person/month)
              <span class="input-value">{{ aiCoachingHours }}h</span>
            </label>
            <input
              type="range"
              v-model.number="aiCoachingHours"
              min="5"
              max="40"
              step="1"
              class="slider-input"
            />
            <div class="range-labels">
              <span>5h</span>
              <span>40h</span>
            </div>
          </div>

          <button @click="resetToDefaults" class="reset-button">
            🔄 Reset to Defaults
          </button>
        </div>

        <!-- Results Column -->
        <div class="results-column">
          <h3 class="section-title">Results</h3>

          <!-- Revenue Comparison -->
          <div class="result-card revenue-card">
            <h4 class="card-title">Revenue Comparison</h4>
            <div class="comparison-row">
              <div class="comparison-item current">
                <span class="comparison-label">Current Monthly</span>
                <span class="comparison-value">{{ formatCurrency(currentMonthlyRevenue) }}</span>
              </div>
              <div class="comparison-arrow">→</div>
              <div class="comparison-item target">
                <span class="comparison-label">Target Monthly</span>
                <span class="comparison-value highlight">{{ formatCurrency(targetMonthlyRevenue) }}</span>
              </div>
            </div>
            <div class="revenue-increase">
              <span class="increase-label">Monthly Increase</span>
              <span class="increase-value">{{ formatCurrency(monthlyRevenueIncrease) }}</span>
            </div>
          </div>

          <!-- ROI Metrics -->
          <div class="result-card roi-card">
            <h4 class="card-title">Return on Investment</h4>
            <div class="metric-row">
              <div class="metric-item">
                <span class="metric-label">Monthly Cost</span>
                <span class="metric-value">{{ formatCurrency(coachingCost) }}</span>
              </div>
              <div class="metric-item">
                <span class="metric-label">Annual Cost</span>
                <span class="metric-value">{{ formatCurrency(coachingCost * 12) }}</span>
              </div>
            </div>
            <div class="metric-row highlight">
              <div class="metric-item">
                <span class="metric-label">Monthly ROI</span>
                <span class="metric-value large">{{ formatPercent(monthlyROI) }}</span>
              </div>
              <div class="metric-item">
                <span class="metric-label">Annual ROI</span>
                <span class="metric-value large">{{ formatPercent(annualROI) }}</span>
              </div>
            </div>
            <div class="payback-period">
              <span class="payback-label">Payback Period</span>
              <span class="payback-value">{{ paybackPeriod }}</span>
            </div>
          </div>

          <!-- Confidence Score -->
          <div class="result-card confidence-card">
            <h4 class="card-title">Confidence Level</h4>
            <div class="confidence-indicator">
              <div
                class="confidence-badge"
                :class="[confidenceLevel.color, confidenceLevel.bg]"
              >
                {{ confidenceLevel.level }}
              </div>
              <span class="confidence-description">
                Based on realistic industry benchmarks
              </span>
            </div>
            <div class="confidence-score">
              <span class="score-label">Score</span>
              <div class="score-bar">
                <div
                  class="score-fill"
                  :style="{ width: `${confidenceScore}%` }"
                ></div>
              </div>
              <span class="score-value">{{ confidenceScore }}/100</span>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="action-buttons">
            <button @click="copyResults" class="action-button primary">
              📋 Copy Results
            </button>
            <button class="action-button secondary">
              🚀 Start Free Trial
            </button>
          </div>
        </div>
      </div>

      <!-- Disclaimer -->
      <div class="disclaimer">
        <p class="disclaimer-text">
          <strong>Disclaimer:</strong> This calculator provides estimates based on industry averages and user input.
          Actual results may vary. Individual performance, market conditions, and implementation quality affect outcomes.
          Start with our 14-day free trial to see real results for your team.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.roi-calculator-section {
  padding: 80px 20px;
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.calculator-header {
  text-align: center;
  margin-bottom: 60px;
}

.calculator-title {
  font-size: 48px;
  font-weight: 700;
  color: #1a365d;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}

.title-icon {
  font-size: 48px;
}

.calculator-subtitle {
  font-size: 20px;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.calculator-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin-bottom: 60px;
}

.section-title {
  font-size: 28px;
  font-weight: 600;
  color: #1a365d;
  margin-bottom: 32px;
}

/* Input Column */
.input-column {
  background: white;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.input-group {
  margin-bottom: 32px;
}

.input-label {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  color: #334155;
  margin-bottom: 12px;
}

.input-value {
  font-size: 18px;
  font-weight: 700;
  color: #0ea5e9;
}

.slider-input {
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background: #e2e8f0;
  outline: none;
  -webkit-appearance: none;
  appearance: none;
}

.slider-input::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #0ea5e9;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(14, 165, 233, 0.3);
}

.slider-input::-moz-range-thumb {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #0ea5e9;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(14, 165, 233, 0.3);
  border: none;
}

.range-labels {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #94a3b8;
  margin-top: 8px;
}

.reset-button {
  width: 100%;
  padding: 14px 24px;
  background: #f1f5f9;
  color: #64748b;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.reset-button:hover {
  background: #e2e8f0;
  border-color: #cbd5e1;
}

/* Results Column */
.results-column {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.result-card {
  background: white;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.card-title {
  font-size: 20px;
  font-weight: 600;
  color: #1a365d;
  margin-bottom: 24px;
}

/* Revenue Card */
.revenue-card {
  border-left: 4px solid #0ea5e9;
}

.comparison-row {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;
}

.comparison-item {
  flex: 1;
  text-align: center;
}

.comparison-label {
  display: block;
  font-size: 14px;
  color: #64748b;
  margin-bottom: 8px;
}

.comparison-value {
  font-size: 24px;
  font-weight: 700;
  color: #334155;
}

.comparison-item.target .comparison-value {
  color: #0ea5e9;
}

.comparison-arrow {
  font-size: 24px;
  color: #94a3b8;
}

.revenue-increase {
  text-align: center;
  padding: 16px;
  background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
  border-radius: 8px;
}

.increase-label {
  display: block;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 8px;
}

.increase-value {
  font-size: 28px;
  font-weight: 700;
  color: white;
}

/* ROI Card */
.roi-card {
  border-left: 4px solid #22c55e;
}

.metric-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.metric-item {
  text-align: center;
}

.metric-label {
  display: block;
  font-size: 14px;
  color: #64748b;
  margin-bottom: 8px;
}

.metric-value {
  font-size: 20px;
  font-weight: 700;
  color: #334155;
}

.metric-value.large {
  font-size: 28px;
}

.metric-row.highlight .metric-value {
  color: #22c55e;
}

.payback-period {
  text-align: center;
  padding: 16px;
  background: #dcfce7;
  border-radius: 8px;
  margin-top: 16px;
}

.payback-label {
  display: block;
  font-size: 14px;
  color: #166534;
  margin-bottom: 8px;
}

.payback-value {
  font-size: 24px;
  font-weight: 700;
  color: #15803d;
}

/* Confidence Card */
.confidence-card {
  border-left: 4px solid #f59e0b;
}

.confidence-indicator {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.confidence-badge {
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 700;
}

.confidence-description {
  font-size: 14px;
  color: #64748b;
}

.confidence-score {
  display: flex;
  align-items: center;
  gap: 16px;
}

.score-label {
  font-size: 14px;
  color: #64748b;
  white-space: nowrap;
}

.score-bar {
  flex: 1;
  height: 8px;
  background: #e2e8f0;
  border-radius: 4px;
  overflow: hidden;
}

.score-fill {
  height: 100%;
  background: linear-gradient(90deg, #f59e0b 0%, #d97706 100%);
  transition: width 0.3s ease;
}

.score-value {
  font-size: 18px;
  font-weight: 700;
  color: #d97706;
}

/* Action Buttons */
.action-buttons {
  display: flex;
  gap: 16px;
  margin-top: 24px;
}

.action-button {
  flex: 1;
  padding: 16px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.action-button.primary {
  background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
  color: white;
  box-shadow: 0 4px 12px rgba(14, 165, 233, 0.3);
}

.action-button.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(14, 165, 233, 0.4);
}

.action-button.secondary {
  background: #22c55e;
  color: white;
  box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);
}

.action-button.secondary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(34, 197, 94, 0.4);
}

/* Disclaimer */
.disclaimer {
  max-width: 900px;
  margin: 0 auto;
  padding: 32px;
  background: #fffbeb;
  border-left: 4px solid #f59e0b;
  border-radius: 8px;
}

.disclaimer-text {
  font-size: 14px;
  color: #92400e;
  line-height: 1.6;
}

.disclaimer-text strong {
  font-weight: 700;
}

/* Responsive */
@media (max-width: 768px) {
  .calculator-grid {
    grid-template-columns: 1fr;
  }

  .calculator-title {
    font-size: 36px;
  }

  .title-icon {
    font-size: 36px;
  }

  .comparison-row {
    flex-direction: column;
    gap: 12px;
  }

  .comparison-arrow {
    transform: rotate(90deg);
  }

  .metric-row {
    grid-template-columns: 1fr;
  }

  .action-buttons {
    flex-direction: column;
  }
}
</style>
