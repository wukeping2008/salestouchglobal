/**
 * North American Sales Platform Type Definitions
 */

/**
 * ROI Calculation Request
 */
export interface ROIRequest {
  teamSize: number
  avgDealSize: number
  currentCloseRate: number
  targetCloseRate: number
  monthlySalesCalls: number
  aiCoachingHours: number
}

/**
 * ROI Calculation Result
 */
export interface ROICalculation {
  currentMonthlyRevenue: number
  targetMonthlyRevenue: number
  monthlyRevenueIncrease: number
  annualRevenueIncrease: number
  monthlyCost: number
  annualCost: number
  monthlyROI: number
  annualROI: number
  paybackPeriod: string
  confidenceScore: number
  confidenceLevel: 'High' | 'Medium' | 'Conservative'
}

/**
 * Dashboard Data
 */
export interface DashboardData {
  revenue: {
    current: number
    previous: number
    growth: number
  }
  deals: {
    total: number
    won: number
    lost: number
    inProgress: number
    winRate: number
  }
  calls: {
    total: number
    connected: number
    conversion: number
  }
  team: {
    active: number
    topPerformer: string
    avgActivity: number
  }
  chartData: {
    labels: string[]
    datasets: {
      name: string
      values: number[]
      color: string
    }[]
  }
  recentActivities: {
    id: number
    type: string
    title: string
    description: string
    time: string
    icon: string
    color: string
  }[]
  teamPerformance: {
    name: string
    deals: number
    revenue: number
    closeRate: number
    calls: number
    avatar: string
  }[]
  aiInsights: {
    id: number
    type: string
    title: string
    description: string
    priority: 'high' | 'medium' | 'low'
  }[]
}

/**
 * Case Study
 */
export interface CaseStudy {
  id: string
  title: string
  company: string
  industry: string
  size: string
  location: string
  challenge: {
    problem: string
    impact: string
  }
  solution: {
    tools: string[]
    implementationTime: string
  }
  results: {
    revenueIncrease: string
    closeRateImprovement: string
    timeToClose: string
    roi: string
  }
  testimonial: {
    author: string
    role: string
    quote: string
    avatar?: string
  }
  metrics: {
    beforeCloseRate: number
    afterCloseRate: number
    dealsWon: number
    revenueGenerated: number
  }
  publishedDate: string
  tags: string[]
}

/**
 * Case Studies Result
 */
export interface CaseStudiesResult {
  caseStudies: CaseStudy[]
  total: number
  hasMore: boolean
}

/**
 * North American User
 */
export interface NorthAmericanUser {
  id: string
  email: string
  firstName: string
  lastName: string
  company?: string
  industry?: string
  role: 'salesperson' | 'manager' | 'executive'
  timezone: string
  region: string
  country: string
  subscription: {
    planId: string
    status: 'active' | 'trial' | 'expired' | 'cancelled'
    startDate: string
    nextBillingDate?: string
    annualBilling: boolean
  }
  preferences: {
    language: string
    currency: string
    dateFormat: string
    timeFormat: '12h' | '24h'
    notifications: {
      email: boolean
      push: boolean
      weeklyReport: boolean
    }
  }
  createdAt: string
  updatedAt: string
}

/**
 * North American Case Study Model
 */
export interface NorthAmericanCaseStudy {
  _id?: string
  id: string
  title: string
  company: string
  industry: string
  companySize: 'startup' | 'small' | 'medium' | 'large' | 'enterprise'
  country: 'US' | 'CA' | 'MX'
  state?: string
  challenge: {
    problem: string
    impact: string
    metricsBefore: {
      closeRate: number
      avgDealSize: number
      monthlyRevenue: number
    }
  }
  solution: {
    tools: string[]
    implementationTime: string
    trainingProvided: boolean
  }
  results: {
    revenueIncrease: number
    closeRateImprovement: number
    timeToCloseReduction: number
    dealsWonIncrease: number
    roi: number
    paybackPeriod: string
  }
  testimonial: {
    name: string
    title: string
    quote: string
    avatar?: string
  }
  tags: string[]
  publishedDate: Date
  lastUpdated: Date
  featured: boolean
  authorId: string
}

/**
 * North American Metric
 */
export interface NorthAmericanMetric {
  _id?: string
  userId: string
  date: Date
  metrics: {
    calls: number
    connections: number
    meetings: number
    proposals: number
    dealsWon: number
    revenue: number
    closeRate: number
    avgDealSize: number
    timeToClose: number
  }
  activities: {
    coachingSessions: number
    callsAnalyzed: number
    feedbackProvided: number
  }
  aiInsights: {
    improvementAreas: string[]
    strengths: string[]
    recommendations: string[]
  }
  region: string
  timezone: string
  createdAt: Date
}

/**
 * Time Range
 */
export type TimeRange = '24h' | '7d' | '30d' | '90d'

/**
 * Metric Type
 */
export type MetricType = 'revenue' | 'deals' | 'calls' | 'conversion' | 'timeToClose'

/**
 * Chart Data Point
 */
export interface ChartDataPoint {
  date: string
  value: number
  metric: MetricType
}

/**
 * API Response
 */
export interface ApiResponse<T> {
  status: 'success' | 'error'
  data?: T
  message?: string
  error?: string
}

/**
 * Error Response
 */
export interface ErrorResponse {
  status: 'error'
  message: string
  error?: string
  statusCode?: number
}

/**
 * Contact Form
 */
export interface ContactForm {
  name: string
  email: string
  company?: string
  industry?: string
  message: string
  interestedIn?: 'trial' | 'demo' | 'pricing' | 'partnership' | 'support'
  referenceId?: string
  createdAt?: Date
}

/**
 * Pricing Plan
 */
export interface PricingPlan {
  id: string
  name: string
  description: string
  monthlyPrice: number | 'custom'
  annualPrice: number | 'custom'
  annualSavings: number
  perUser?: boolean
  features: string[]
  popular?: boolean
}

/**
 * Pricing Information
 */
export interface PricingInfo {
  plans: PricingPlan[]
  discounts: {
    annual: number
    volume: {
      teamSize10: number
      teamSize25: number
      teamSize50: number
    }
  }
  currency: {
    code: string
    symbol: string
    locale: string
  }
  billing: {
    cycle: string
    trialDays: number
    moneyBackGuarantee: number
  }
  region: string
  countries: string[]
}
