<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { format } from 'date-fns'

// Dashboard state
const selectedTimeRange = ref('7d')
const selectedMetric = ref('revenue')
const isLoading = ref(false)
const autoRefresh = ref(true)

// Mock data - in production, this would come from API
const dashboardData = ref({
  revenue: {
    current: 125000,
    previous: 98000,
    growth: 27.6
  },
  deals: {
    total: 45,
    won: 18,
    lost: 12,
    inProgress: 15,
    winRate: 40
  },
  calls: {
    total: 234,
    connected: 187,
    conversion: 8.0
  },
  team: {
    active: 8,
    topPerformer: 'Sarah Johnson',
    avgActivity: 87
  }
})

// Chart data
const chartData = ref({
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      name: 'Revenue',
      values: [18500, 22000, 19800, 24500, 21000, 15200, 4700],
      color: '#0ea5e9'
    },
    {
      name: 'Calls',
      values: [42, 45, 38, 52, 40, 17, 0],
      color: '#22c55e'
    }
  ]
})

// Recent activities
const recentActivities = ref([
  {
    id: 1,
    type: 'deal',
    title: 'New deal closed',
    description: 'Sarah closed $25K deal with Acme Corp',
    time: '2 hours ago',
    icon: '🎉',
    color: 'green'
  },
  {
    id: 2,
    type: 'call',
    title: 'AI Coach completed',
    description: '15 calls analyzed and feedback generated',
    time: '4 hours ago',
    icon: '🤖',
    color: 'blue'
  },
  {
    id: 3,
    type: 'alert',
    title: 'Close rate improvement',
    description: 'Team close rate up 5% this week',
    time: '6 hours ago',
    icon: '📈',
    color: 'green'
  },
  {
    id: 4,
    type: 'deal',
    title: 'Deal stage advanced',
    description: 'Mike moved $42K deal to Proposal stage',
    time: '8 hours ago',
    icon: '💼',
    color: 'blue'
  },
  {
    id: 5,
    type: 'alert',
    title: 'Activity threshold warning',
    title: 'AI Coach session completed',
    description: 'Jennifer completed 20 calls coaching session',
    time: '1 day ago',
    icon: '🎯',
    color: 'blue'
  }
])

// Team performance
const teamPerformance = ref([
  {
    name: 'Sarah Johnson',
    deals: 8,
    revenue: 68000,
    closeRate: 45,
    calls: 52,
    avatar: 'SJ'
  },
  {
    name: 'Mike Chen',
    deals: 6,
    revenue: 54000,
    closeRate: 40,
    calls: 48,
    avatar: 'MC'
  },
  {
    name: 'Jennifer Williams',
    deals: 4,
    revenue: 38000,
    closeRate: 38,
    calls: 42,
    avatar: 'JW'
  }
])

// Computed values
const timeRanges = computed(() => [
  { value: '24h', label: '24 Hours' },
  { value: '7d', label: '7 Days' },
  { value: '30d', label: '30 Days' },
  { value: '90d', label: '90 Days' }
])

const metrics = computed(() => [
  {
    id: 'revenue',
    label: 'Revenue',
    value: dashboardData.value.revenue.current,
    change: dashboardData.value.revenue.growth,
    trend: 'up',
    icon: '💰',
    format: 'currency'
  },
  {
    id: 'deals',
    label: 'Deals Won',
    value: dashboardData.value.deals.won,
    change: 12.5,
    trend: 'up',
    icon: '🎯',
    format: 'number'
  },
  {
    id: 'calls',
    label: 'Calls Made',
    value: dashboardData.value.calls.total,
    change: 8.3,
    trend: 'up',
    icon: '📞',
    format: 'number'
  },
  {
    id: 'conversion',
    label: 'Conversion Rate',
    value: dashboardData.value.calls.conversion,
    change: 2.1,
    trend: 'up',
    icon: '📊',
    format: 'percent'
  }
])

const formatMetricValue = (value: number, format: string) => {
  switch (format) {
    case 'currency':
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }).format(value)
    case 'percent':
      return `${value.toFixed(1)}%`
    default:
      return new Intl.NumberFormat('en-US').format(value)
  }
}

const generateReport = async () => {
  isLoading.value = true

  // Simulate report generation
  await new Promise(resolve => setTimeout(resolve, 2000))

  const reportData = {
    date: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
    timeRange: selectedTimeRange.value,
    metrics: dashboardData.value,
    topPerformer: teamPerformance.value[0]
  }

  const reportText = `
SALES PERFORMANCE REPORT
=====================
Generated: ${reportData.date}
Time Range: ${reportData.timeRange}

REVENUE METRICS
---------------
Current: ${formatMetricValue(reportData.metrics.revenue.current, 'currency')}
Previous: ${formatMetricValue(reportData.metrics.revenue.previous, 'currency')}
Growth: ${reportData.metrics.revenue.growth}%

DEAL METRICS
------------
Total Deals: ${reportData.metrics.deals.total}
Won: ${reportData.metrics.deals.won}
Lost: ${reportData.metrics.deals.lost}
In Progress: ${reportData.metrics.deals.inProgress}
Win Rate: ${reportData.metrics.deals.winRate}%

CALL METRICS
-----------
Total Calls: ${reportData.metrics.calls.total}
Connected: ${reportData.metrics.calls.connected}
Conversion Rate: ${reportData.metrics.calls.conversion}%

TEAM METRICS
------------
Active Members: ${reportData.metrics.team.active}
Top Performer: ${reportData.topPerformer.name}
Average Activity Score: ${reportData.metrics.team.avgActivity}%

TOP PERFORMER DETAILS
--------------------
Name: ${reportData.topPerformer.name}
Deals Won: ${reportData.topPerformer.deals}
Revenue: ${formatMetricValue(reportData.topPerformer.revenue, 'currency')}
Close Rate: ${reportData.topPerformer.closeRate}%
Calls Made: ${reportData.topPerformer.calls}

---
Generated by SalesTouch AI Platform
https://salestouch.northamerica
  `.trim()

  try {
    await navigator.clipboard.writeText(reportText)
    alert('Sales performance report copied to clipboard!')
  } catch (err) {
    console.error('Failed to copy report:', err)
    alert('Failed to generate report. Please try again.')
  }

  isLoading.value = false
}

const refreshData = async () => {
  isLoading.value = true

  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1000))

  // Update with new random data
  dashboardData.value.revenue.current = Math.floor(100000 + Math.random() * 50000)
  dashboardData.value.deals.won = Math.floor(15 + Math.random() * 10)
  dashboardData.value.calls.total = Math.floor(200 + Math.random() * 50)

  isLoading.value = false
}

let refreshInterval: any = null

onMounted(() => {
  if (autoRefresh.value) {
    refreshInterval = setInterval(refreshData, 60000) // Refresh every minute
  }
})

onUnmounted(() => {
  if (refreshInterval) {
    clearInterval(refreshInterval)
  }
})
</script>

<template>
  <section class="sales-dashboard-section">
    <div class="container">
      <!-- Dashboard Header -->
      <div class="dashboard-header">
        <div class="header-content">
          <h2 class="dashboard-title">
            <span class="title-icon">📊</span>
            Sales Performance Dashboard
          </h2>
          <p class="dashboard-subtitle">
            Real-time insights and analytics for your sales team
          </p>
        </div>
        <div class="header-actions">
          <button
            @click="refreshData"
            :disabled="isLoading"
            class="action-button"
          >
            🔄 Refresh
          </button>
          <button
            @click="generateReport"
            :disabled="isLoading"
            class="action-button primary"
          >
            📄 Generate Report
          </button>
        </div>
      </div>

      <!-- Time Range Selector -->
      <div class="time-range-selector">
        <button
          v-for="range in timeRanges"
          :key="range.value"
          @click="selectedTimeRange = range.value"
          :class="['range-button', { active: selectedTimeRange === range.value }]"
        >
          {{ range.label }}
        </button>
      </div>

      <!-- Metrics Grid -->
      <div class="metrics-grid">
        <div
          v-for="metric in metrics"
          :key="metric.id"
          @click="selectedMetric = metric.id"
          :class="['metric-card', { active: selectedMetric === metric.id }]"
        >
          <div class="metric-icon">{{ metric.icon }}</div>
          <div class="metric-content">
            <h3 class="metric-label">{{ metric.label }}</h3>
            <p class="metric-value">{{ formatMetricValue(metric.value, metric.format) }}</p>
            <div class="metric-change">
              <span :class="['change-indicator', metric.trend]">
                {{ metric.trend === 'up' ? '↑' : '↓' }}
              </span>
              <span class="change-value">{{ Math.abs(metric.change).toFixed(1) }}%</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Charts and Activities Grid -->
      <div class="charts-grid">
        <!-- Chart Section -->
        <div class="chart-section">
          <h3 class="section-title">
            <span class="title-icon">📈</span>
            Performance Trend
          </h3>
          <div class="chart-container">
            <!-- Simple bar chart visualization -->
            <div class="bar-chart">
              <div class="chart-legend">
                <div class="legend-item">
                  <span class="legend-color" style="background: #0ea5e9;"></span>
                  <span>Revenue</span>
                </div>
                <div class="legend-item">
                  <span class="legend-color" style="background: #22c55e;"></span>
                  <span>Calls</span>
                </div>
              </div>
              <div class="chart-bars">
                <div
                  v-for="(label, index) in chartData.labels"
                  :key="label"
                  class="chart-bar-group"
                >
                  <div class="bar-label">{{ label }}</div>
                  <div class="bars-container">
                    <div
                      class="bar"
                      :style="{
                        height: `${(chartData.datasets[0].values[index] / Math.max(...chartData.datasets[0].values)) * 100}%`,
                        background: chartData.datasets[0].color
                      }"
                    ></div>
                    <div
                      class="bar"
                      :style="{
                        height: `${(chartData.datasets[1].values[index] / Math.max(...chartData.datasets[1].values)) * 100}%`,
                        background: chartData.datasets[1].color
                      }"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Recent Activities -->
        <div class="activities-section">
          <h3 class="section-title">
            <span class="title-icon">🔔</span>
            Recent Activities
          </h3>
          <div class="activities-list">
            <div
              v-for="activity in recentActivities"
              :key="activity.id"
              class="activity-item"
            >
              <div class="activity-icon" :class="activity.color">
                {{ activity.icon }}
              </div>
              <div class="activity-content">
                <h4 class="activity-title">{{ activity.title }}</h4>
                <p class="activity-description">{{ activity.description }}</p>
                <span class="activity-time">{{ activity.time }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Team Performance -->
      <div class="team-section">
        <h3 class="section-title">
          <span class="title-icon">👥</span>
          Team Performance
        </h3>
        <div class="team-grid">
          <div
            v-for="member in teamPerformance"
            :key="member.name"
            class="team-card"
          >
            <div class="member-avatar">{{ member.avatar }}</div>
            <div class="member-info">
              <h4 class="member-name">{{ member.name }}</h4>
              <div class="member-stats">
                <div class="stat">
                  <span class="stat-label">Deals</span>
                  <span class="stat-value">{{ member.deals }}</span>
                </div>
                <div class="stat">
                  <span class="stat-label">Revenue</span>
                  <span class="stat-value">{{ formatMetricValue(member.revenue, 'currency') }}</span>
                </div>
                <div class="stat">
                  <span class="stat-label">Close Rate</span>
                  <span class="stat-value">{{ member.closeRate }}%</span>
                </div>
                <div class="stat">
                  <span class="stat-label">Calls</span>
                  <span class="stat-value">{{ member.calls }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- AI Insights -->
      <div class="insights-section">
        <h3 class="section-title">
          <span class="title-icon">🤖</span>
          AI-Powered Insights
        </h3>
        <div class="insights-grid">
          <div class="insight-card">
            <div class="insight-icon">💡</div>
            <h4 class="insight-title">Opportunity Alert</h4>
            <p class="insight-description">
              3 deals in the "Proposal" stage have been inactive for more than 7 days.
              Consider scheduling a follow-up call to move them forward.
            </p>
          </div>
          <div class="insight-card">
            <div class="insight-icon">📈</div>
            <h4 class="insight-title">Performance Improvement</h4>
            <p class="insight-description">
              Team close rate increased by 15% after implementing AI coaching recommendations.
              Continue weekly coaching sessions to maintain momentum.
            </p>
          </div>
          <div class="insight-card">
            <div class="insight-icon">🎯</div>
            <h4 class="insight-title">Focus Areas</h4>
            <p class="insight-description">
              Best time to call is between 9-11 AM EST.
              Conversion rate is 23% higher during this time window.
            </p>
          </div>
        </div>
      </div>

      <!-- Loading Overlay -->
      <div v-if="isLoading" class="loading-overlay">
        <div class="loading-spinner"></div>
        <p class="loading-text">Loading dashboard data...</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sales-dashboard-section {
  padding: 60px 20px;
  background: #f8f9fa;
  min-height: 100vh;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

/* Dashboard Header */
.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 40px;
  flex-wrap: wrap;
  gap: 20px;
}

.header-content {
  flex: 1;
  min-width: 300px;
}

.dashboard-title {
  font-size: 36px;
  font-weight: 700;
  color: #1a365d;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.title-icon {
  font-size: 36px;
}

.dashboard-subtitle {
  font-size: 16px;
  color: #64748b;
  line-height: 1.5;
}

.header-actions {
  display: flex;
  gap: 12px;
}

.action-button {
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  border: 2px solid #e2e8f0;
  background: white;
  color: #334155;
  display: flex;
  align-items: center;
  gap: 8px;
}

.action-button:hover {
  background: #f1f5f9;
}

.action-button.primary {
  background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
  color: white;
  border-color: #0ea5e9;
}

.action-button.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(14, 165, 233, 0.3);
}

.action-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Time Range Selector */
.time-range-selector {
  display: flex;
  gap: 8px;
  margin-bottom: 32px;
  flex-wrap: wrap;
}

.range-button {
  padding: 10px 20px;
  border: 2px solid #e2e8f0;
  border-radius: 8px;
  background: white;
  color: #64748b;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
}

.range-button:hover {
  border-color: #0ea5e9;
  color: #0ea5e9;
}

.range-button.active {
  background: #0ea5e9;
  color: white;
  border-color: #0ea5e9;
}

/* Metrics Grid */
.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 24px;
  margin-bottom: 40px;
}

.metric-card {
  background: white;
  padding: 28px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  display: flex;
  gap: 20px;
  cursor: pointer;
  transition: all 0.2s;
  border: 2px solid transparent;
}

.metric-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.metric-card.active {
  border-color: #0ea5e9;
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
}

.metric-icon {
  font-size: 48px;
  line-height: 1;
}

.metric-content {
  flex: 1;
}

.metric-label {
  font-size: 14px;
  font-weight: 600;
  color: #64748b;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.metric-value {
  font-size: 32px;
  font-weight: 700;
  color: #1a365d;
  margin-bottom: 12px;
}

.metric-change {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 600;
}

.change-indicator {
  font-size: 16px;
}

.change-indicator.up {
  color: #22c55e;
}

.change-indicator.down {
  color: #ef4444;
}

.change-value {
  color: #64748b;
}

/* Charts Grid */
.charts-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  margin-bottom: 40px;
}

.section-title {
  font-size: 24px;
  font-weight: 600;
  color: #1a365d;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 12px;
}

/* Chart Section */
.chart-section {
  background: white;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.chart-container {
  height: 350px;
}

.bar-chart {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.chart-legend {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-bottom: 24px;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  color: #64748b;
}

.legend-color {
  width: 16px;
  height: 16px;
  border-radius: 4px;
}

.chart-bars {
  flex: 1;
  display: flex;
  align-items: flex-end;
  gap: 16px;
}

.chart-bar-group {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  height: 100%;
}

.bar-label {
  font-size: 12px;
  font-weight: 600;
  color: #94a3b8;
}

.bars-container {
  flex: 1;
  display: flex;
  gap: 4px;
  width: 100%;
  align-items: flex-end;
}

.bar {
  flex: 1;
  border-radius: 4px 4px 0 0;
  min-height: 4px;
  transition: height 0.3s ease;
}

/* Activities Section */
.activities-section {
  background: white;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

.activities-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-height: 350px;
  overflow-y: auto;
}

.activity-item {
  display: flex;
  gap: 16px;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 12px;
  border-left: 4px solid #e2e8f0;
}

.activity-item .activity-icon.green {
  border-left-color: #22c55e;
}

.activity-item .activity-icon.blue {
  border-left-color: #0ea5e9;
}

.activity-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.activity-content {
  flex: 1;
}

.activity-title {
  font-size: 16px;
  font-weight: 700;
  color: #1a365d;
  margin-bottom: 4px;
}

.activity-description {
  font-size: 14px;
  color: #64748b;
  margin-bottom: 8px;
  line-height: 1.5;
}

.activity-time {
  font-size: 12px;
  color: #94a3b8;
  font-weight: 600;
}

/* Team Section */
.team-section {
  background: white;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  margin-bottom: 40px;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.team-card {
  display: flex;
  gap: 16px;
  padding: 24px;
  background: #f8f9fa;
  border-radius: 12px;
  border: 2px solid #e2e8f0;
  transition: all 0.2s;
}

.team-card:hover {
  border-color: #0ea5e9;
  transform: translateY(-2px);
}

.member-avatar {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 700;
  color: white;
  background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
  border-radius: 50%;
}

.member-info {
  flex: 1;
}

.member-name {
  font-size: 18px;
  font-weight: 700;
  color: #1a365d;
  margin-bottom: 16px;
}

.member-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.stat {
  display: flex;
  flex-direction: column;
}

.stat-label {
  font-size: 12px;
  font-weight: 600;
  color: #94a3b8;
  margin-bottom: 4px;
  text-transform: uppercase;
}

.stat-value {
  font-size: 16px;
  font-weight: 700;
  color: #1a365d;
}

/* Insights Section */
.insights-section {
  background: white;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  margin-bottom: 40px;
}

.insights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.insight-card {
  padding: 24px;
  background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
  border-radius: 12px;
  border: 2px solid #f59e0b;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.insight-icon {
  font-size: 32px;
  line-height: 1;
}

.insight-title {
  font-size: 18px;
  font-weight: 700;
  color: #92400e;
  margin-bottom: 8px;
}

.insight-description {
  font-size: 14px;
  color: #78350f;
  line-height: 1.6;
}

/* Loading Overlay */
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  z-index: 1000;
}

.loading-spinner {
  width: 48px;
  height: 48px;
  border: 4px solid #e2e8f0;
  border-top-color: #0ea5e9;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.loading-text {
  font-size: 16px;
  font-weight: 600;
  color: #64748b;
}

/* Responsive */
@media (max-width: 1024px) {
  .charts-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .dashboard-header {
    flex-direction: column;
  }

  .header-actions {
    width: 100%;
    flex-direction: column;
  }

  .action-button {
    width: 100%;
  }

  .metrics-grid {
    grid-template-columns: 1fr;
  }

  .team-grid {
    grid-template-columns: 1fr;
  }

  .insights-grid {
    grid-template-columns: 1fr;
  }

  .member-stats {
    grid-template-columns: 1fr;
  }
}
</style>
