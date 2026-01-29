/**
 * North American Service
 * Handles ROI calculation, dashboard data, and case studies for North American market
 */

import { ROIRequest, ROICalculation, DashboardData, CaseStudiesResult, CaseStudy } from '../types/na'

/**
 * Calculate ROI based on sales team parameters
 */
export async function calculateROI(request: ROIRequest): Promise<ROICalculation> {
  const {
    teamSize,
    avgDealSize,
    currentCloseRate,
    targetCloseRate,
    monthlySalesCalls,
    aiCoachingHours
  } = request

  // Calculate current monthly revenue
  const currentMonthlyRevenue =
    monthlySalesCalls * (currentCloseRate / 100) * avgDealSize

  // Calculate target monthly revenue
  const targetMonthlyRevenue =
    monthlySalesCalls * (targetCloseRate / 100) * avgDealSize

  // Calculate monthly revenue increase
  const monthlyRevenueIncrease = targetMonthlyRevenue - currentMonthlyRevenue

  // Calculate annual revenue increase
  const annualRevenueIncrease = monthlyRevenueIncrease * 12

  // Calculate coaching cost
  const basePrice = 99
  const teamDiscount = teamSize > 10 ? 0.85 : 1 // 15% discount for teams > 10
  const monthlyCost = basePrice * teamSize * teamDiscount
  const annualCost = monthlyCost * 12

  // Calculate ROI
  const monthlyROI = monthlyCost > 0
    ? ((monthlyRevenueIncrease - monthlyCost) / monthlyCost) * 100
    : 0

  const annualROI = annualCost > 0
    ? ((annualRevenueIncrease - annualCost) / annualCost) * 100
    : 0

  // Calculate payback period
  let paybackPeriod = 'N/A'
  if (monthlyRevenueIncrease > 0) {
    const months = monthlyCost / monthlyRevenueIncrease
    if (months < 1) {
      paybackPeriod = '< 1 month'
    } else {
      paybackPeriod = `${months.toFixed(1)} months`
    }
  }

  // Calculate confidence score
  let confidenceScore = 0
  if (currentCloseRate >= 10 && currentCloseRate <= 50) confidenceScore += 25
  if (targetCloseRate > currentCloseRate && targetCloseRate <= 75) confidenceScore += 25
  if (monthlySalesCalls >= 50 && monthlySalesCalls <= 500) confidenceScore += 25
  if (aiCoachingHours >= 5 && aiCoachingHours <= 20) confidenceScore += 25

  // Determine confidence level
  let confidenceLevel: 'High' | 'Medium' | 'Conservative' = 'Conservative'
  if (confidenceScore >= 75) {
    confidenceLevel = 'High'
  } else if (confidenceScore >= 50) {
    confidenceLevel = 'Medium'
  }

  return {
    currentMonthlyRevenue,
    targetMonthlyRevenue,
    monthlyRevenueIncrease,
    annualRevenueIncrease,
    monthlyCost,
    annualCost,
    monthlyROI,
    annualROI,
    paybackPeriod,
    confidenceScore,
    confidenceLevel
  }
}

/**
 * Get dashboard data for North American users
 */
export async function getDashboardData(
  timeRange: string = '7d',
  userId?: string
): Promise<DashboardData> {
  // In production, this would query the database
  // For now, return realistic mock data

  const multipliers = {
    '24h': 0.2,
    '7d': 1.0,
    '30d': 4.0,
    '90d': 12.0
  }

  const multiplier = multipliers[timeRange as keyof typeof multipliers] || 1.0

  const dashboardData: DashboardData = {
    revenue: {
      current: Math.floor(125000 * multiplier),
      previous: Math.floor(98000 * multiplier),
      growth: 27.6
    },
    deals: {
      total: Math.floor(45 * multiplier),
      won: Math.floor(18 * multiplier),
      lost: Math.floor(12 * multiplier),
      inProgress: Math.floor(15 * multiplier),
      winRate: 40
    },
    calls: {
      total: Math.floor(234 * multiplier),
      connected: Math.floor(187 * multiplier),
      conversion: 8.0
    },
    team: {
      active: 8,
      topPerformer: 'Sarah Johnson',
      avgActivity: 87
    },
    chartData: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          name: 'Revenue',
          values: [
            Math.floor(18500 * multiplier),
            Math.floor(22000 * multiplier),
            Math.floor(19800 * multiplier),
            Math.floor(24500 * multiplier),
            Math.floor(21000 * multiplier),
            Math.floor(15200 * multiplier),
            Math.floor(4700 * multiplier)
          ],
          color: '#0ea5e9'
        },
        {
          name: 'Calls',
          values: [
            Math.floor(42 * multiplier),
            Math.floor(45 * multiplier),
            Math.floor(38 * multiplier),
            Math.floor(52 * multiplier),
            Math.floor(40 * multiplier),
            Math.floor(17 * multiplier),
            Math.floor(0 * multiplier)
          ],
          color: '#22c55e'
        }
      ]
    },
    recentActivities: [
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
        type: 'call',
        title: 'AI Coach session completed',
        description: 'Jennifer completed 20 calls coaching session',
        time: '1 day ago',
        icon: '🎯',
        color: 'blue'
      }
    ],
    teamPerformance: [
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
    ],
    aiInsights: [
      {
        id: 1,
        type: 'opportunity',
        title: 'Opportunity Alert',
        description: '3 deals in "Proposal" stage have been inactive for more than 7 days. Consider scheduling a follow-up call to move them forward.',
        priority: 'high'
      },
      {
        id: 2,
        type: 'improvement',
        title: 'Performance Improvement',
        description: 'Team close rate increased by 15% after implementing AI coaching recommendations. Continue weekly coaching sessions to maintain momentum.',
        priority: 'medium'
      },
      {
        id: 3,
        type: 'focus',
        title: 'Focus Areas',
        description: 'Best time to call is between 9-11 AM EST. Conversion rate is 23% higher during this time window.',
        priority: 'low'
      }
    ]
  }

  return dashboardData
}

/**
 * Get North American case studies
 */
export async function getNorthAmericanCaseStudies(
  industry?: string,
  limit: number = 10,
  offset: number = 0
): Promise<CaseStudiesResult> {
  // North American case studies database (in production, this would be in a database)
  const allCaseStudies: CaseStudy[] = [
    {
      id: 'na-case-001',
      title: 'TechCorp Scales Sales Operations with AI Coaching',
      company: 'TechCorp',
      industry: 'Technology',
      size: 'Medium',
      location: 'San Francisco, CA',
      challenge: {
        problem: 'Low close rates and inconsistent sales performance across a distributed team of 50 salespeople.',
        impact: 'Revenue stagnation and high turnover of top performers.'
      },
      solution: {
        tools: ['AI Sales Coach', 'Analytics Dashboard', 'Team Coaching Sessions'],
        implementationTime: '3 weeks'
      },
      results: {
        revenueIncrease: '156%',
        closeRateImprovement: '27%',
        timeToClose: 'Down 40%',
        roi: '340%'
      },
      testimonial: {
        author: 'James Rodriguez',
        role: 'VP of Sales',
        quote: 'Our sales team transformed in just 3 months. The AI coaching provided consistent, actionable feedback that our salespeople actually used and improved their performance immediately.'
      },
      metrics: {
        beforeCloseRate: 22,
        afterCloseRate: 34,
        dealsWon: 87,
        revenueGenerated: 2500000
      },
      publishedDate: '2025-09-15T00:00:00Z',
      tags: ['technology', 'enterprise', 'ai-coaching', 'roi-300%']
    },
    {
      id: 'na-case-002',
      title: 'MedEquip Inc. Achieves Record Growth with Smart Page',
      company: 'MedEquip Inc.',
      industry: 'Healthcare',
      size: 'Small',
      location: 'Boston, MA',
      challenge: {
        problem: 'Time-consuming proposal generation and low response rates from outbound calls.',
        impact: 'Sales team spending 60% of time on paperwork instead of selling.'
      },
      solution: {
        tools: ['SalesNail Smart Page', 'Email Templates', 'CRM Integration'],
        implementationTime: '2 weeks'
      },
      results: {
        revenueIncrease: '89%',
        closeRateImprovement: '34%',
        timeToClose: 'Down 55%',
        roi: '510%'
      },
      testimonial: {
        author: 'Sarah Chen',
        role: 'Sales Director',
        quote: 'SalesNail changed everything. Our team now generates professional proposals in seconds instead of hours. Response rates improved dramatically.'
      },
      metrics: {
        beforeCloseRate: 18,
        afterCloseRate: 29,
        dealsWon: 45,
        revenueGenerated: 890000
      },
      publishedDate: '2025-10-20T00:00:00Z',
      tags: ['healthcare', 'small-business', 'smart-page', 'roi-500%']
    },
    {
      id: 'na-case-003',
      title: 'FinCo Doubles Revenue with Full AI Platform',
      company: 'FinCo Financial Services',
      industry: 'Finance',
      size: 'Large',
      location: 'New York, NY',
      challenge: {
        problem: 'Commoditized services and fierce competition made differentiation extremely difficult.',
        impact: 'Struggling to maintain margins and win new clients in a saturated market.'
      },
      solution: {
        tools: ['AI Sales Coach', 'Smart Page', 'Analytics Dashboard', 'Custom Training'],
        implementationTime: '5 weeks'
      },
      results: {
        revenueIncrease: '210%',
        closeRateImprovement: '42%',
        timeToClose: 'Down 50%',
        roi: '680%'
      },
      testimonial: {
        author: 'Michael Thompson',
        role: 'Chief Revenue Officer',
        quote: 'The ROI was unprecedented. We achieved payback in less than 2 months and have seen sustained growth for 6 consecutive quarters.'
      },
      metrics: {
        beforeCloseRate: 20,
        afterCloseRate: 35,
        dealsWon: 234,
        revenueGenerated: 12400000
      },
      publishedDate: '2025-11-05T00:00:00Z',
      tags: ['finance', 'enterprise', 'full-platform', 'roi-600%']
    },
    {
      id: 'na-case-004',
      title: 'RetailMax Transforms Field Sales Performance',
      company: 'RetailMax',
      industry: 'Retail',
      size: 'Medium',
      location: 'Chicago, IL',
      challenge: {
        problem: 'Field sales team had inconsistent coaching and low accountability across 30 reps.',
        impact: 'Variable performance and difficulty identifying best practices to scale.',
      },
      solution: {
        tools: ['AI Sales Coach', 'Mobile App', 'Team Analytics'],
        implementationTime: '4 weeks'
      },
      results: {
        revenueIncrease: '134%',
        closeRateImprovement: '31%',
        timeToClose: 'Down 45%',
        roi: '420%'
      },
      testimonial: {
        author: 'Lisa Martinez',
        role: 'VP of Field Sales',
        quote: 'Our field sales team finally has consistent, data-driven coaching. The mobile app lets them review feedback on the go, and performance has skyrocketed.'
      },
      metrics: {
        beforeCloseRate: 21,
        afterCloseRate: 33,
        dealsWon: 67,
        revenueGenerated: 1560000
      },
      publishedDate: '2025-12-01T00:00:00Z',
      tags: ['retail', 'field-sales', 'mobile', 'roi-400%']
    },
    {
      id: 'na-case-005',
      title: 'SaaS Startup Accelerates Revenue Growth',
      company: 'CloudScale Inc.',
      industry: 'SaaS',
      size: 'Startup',
      location: 'Austin, TX',
      challenge: {
        problem: 'Young sales team lacked experience and struggled with objection handling.',
        impact: 'Low win rates and extended sales cycles hurting cash flow.'
      },
      solution: {
        tools: ['AI Sales Coach', 'Objection Handling Library', 'CRM Integration'],
        implementationTime: '3 weeks'
      },
      results: {
        revenueIncrease: '245%',
        closeRateImprovement: '56%',
        timeToClose: 'Down 60%',
        roi: '720%'
      },
      testimonial: {
        author: 'David Kim',
        role: 'Founder & CEO',
        quote: 'As a startup, every sale counts. The AI coach helped our inexperienced team close deals they would have lost before. Our revenue growth accelerated from month one.'
      },
      metrics: {
        beforeCloseRate: 15,
        afterCloseRate: 32,
        dealsWon: 28,
        revenueGenerated: 450000
      },
      publishedDate: '2025-12-15T00:00:00Z',
      tags: ['saas', 'startup', 'acceleration', 'roi-700%']
    }
  ]

  // Filter by industry if provided
  let filteredCaseStudies = allCaseStudies
  if (industry) {
    filteredCaseStudies = filteredCaseStudies.filter(cs =>
      cs.industry.toLowerCase() === industry.toLowerCase()
    )
  }

  // Apply pagination
  const total = filteredCaseStudies.length
  const caseStudies = filteredCaseStudies.slice(offset, offset + limit)
  const hasMore = offset + limit < total

  return {
    caseStudies,
    total,
    hasMore
  }
}

/**
 * Format currency for North American users (USD)
 */
export function formatUSD(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount)
}

/**
 * Format percentage
 */
export function formatPercent(value: number): string {
  return `${value.toFixed(1)}%`
}

/**
 * Get current North American time zone
 */
export function getNorthAmericanTimezone(): string {
  // In production, this would come from user profile or geolocation
  const commonTimezones = [
    'America/New_York',
    'America/Los_Angeles',
    'America/Chicago',
    'America/Denver',
    'America/Toronto',
    'America/Vancouver'
  ]

  return commonTimezones[0] // Default to EST
}
