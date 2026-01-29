import express from 'express'
import { ROIRequest, ROICalculation, DashboardData, CaseStudy } from '../types'
import { calculateROI, getDashboardData, getNorthAmericanCaseStudies } from '../services/northAmericanService'

const router = express.Router()

/**
 * @route   GET /api/na/health
 * @desc    Health check for North American endpoints
 * @access  Public
 */
router.get('/health', (req, res) => {
  res.json({
    status: 'success',
    timestamp: new Date().toISOString(),
    region: 'North America',
    version: '1.0.0',
    services: {
      roi: 'online',
      dashboard: 'online',
      caseStudies: 'online'
    }
  })
})

/**
 * @route   POST /api/na/roi
 * @desc    Calculate ROI based on sales team parameters
 * @access  Public
 * @body    { teamSize, avgDealSize, currentCloseRate, targetCloseRate, monthlySalesCalls, aiCoachingHours }
 * @return   { currentMonthlyRevenue, targetMonthlyRevenue, monthlyRevenueIncrease, annualRevenueIncrease, monthlyCost, annualCost, monthlyROI, annualROI, paybackPeriod, confidenceScore }
 */
router.post('/roi', async (req, res) => {
  try {
    const roiRequest: ROIRequest = req.body

    // Validate required fields
    if (!roiRequest.teamSize || !roiRequest.avgDealSize ||
        !roiRequest.currentCloseRate || !roiRequest.targetCloseRate ||
        !roiRequest.monthlySalesCalls || !roiRequest.aiCoachingHours) {
      return res.status(400).json({
        status: 'error',
        message: 'Missing required fields'
      })
    }

    // Validate ranges
    if (roiRequest.teamSize < 1 || roiRequest.teamSize > 100) {
      return res.status(400).json({
        status: 'error',
        message: 'Team size must be between 1 and 100'
      })
    }

    if (roiRequest.currentCloseRate < 0 || roiRequest.currentCloseRate > 100 ||
        roiRequest.targetCloseRate < 0 || roiRequest.targetCloseRate > 100) {
      return res.status(400).json({
        status: 'error',
        message: 'Close rates must be between 0 and 100%'
      })
    }

    if (roiRequest.targetCloseRate <= roiRequest.currentCloseRate) {
      return res.status(400).json({
        status: 'error',
        message: 'Target close rate must be greater than current close rate'
      })
    }

    // Calculate ROI
    const roiResult: ROICalculation = await calculateROI(roiRequest)

    res.json({
      status: 'success',
      data: roiResult
    })
  } catch (error) {
    console.error('ROI calculation error:', error)
    res.status(500).json({
      status: 'error',
      message: 'Failed to calculate ROI',
      error: error instanceof Error ? error.message : 'Unknown error'
    })
  }
})

/**
 * @route   GET /api/na/dashboard
 * @desc    Get dashboard data for North American users
 * @access  Private (requires authentication)
 * @query   { timeRange, userId }
 * @return   { revenue, deals, calls, team, chartData, recentActivities, teamPerformance, aiInsights }
 */
router.get('/dashboard', async (req, res) => {
  try {
    const timeRange = req.query.timeRange as string || '7d'
    const userId = req.query.userId as string

    // Validate time range
    const validTimeRanges = ['24h', '7d', '30d', '90d']
    if (!validTimeRanges.includes(timeRange)) {
      return res.status(400).json({
        status: 'error',
        message: 'Invalid time range. Must be one of: 24h, 7d, 30d, 90d'
      })
    }

    // Get dashboard data
    const dashboardData: DashboardData = await getDashboardData(timeRange, userId)

    res.json({
      status: 'success',
      data: dashboardData
    })
  } catch (error) {
    console.error('Dashboard data error:', error)
    res.status(500).json({
      status: 'error',
      message: 'Failed to retrieve dashboard data',
      error: error instanceof Error ? error.message : 'Unknown error'
    })
  }
})

/**
 * @route   GET /api/na/case-studies
 * @desc    Get North American case studies
 * @access  Public
 * @query   { industry, limit, offset }
 * @return   { caseStudies, total, hasMore }
 */
router.get('/case-studies', async (req, res) => {
  try {
    const industry = req.query.industry as string
    const limit = parseInt(req.query.limit as string) || 10
    const offset = parseInt(req.query.offset as string) || 0

    // Get case studies
    const result = await getNorthAmericanCaseStudies(industry, limit, offset)

    res.json({
      status: 'success',
      data: result
    })
  } catch (error) {
    console.error('Case studies error:', error)
    res.status(500).json({
      status: 'error',
      message: 'Failed to retrieve case studies',
      error: error instanceof Error ? error.message : 'Unknown error'
    })
  }
})

/**
 * @route   GET /api/na/case-studies/:id
 * @desc    Get a specific North American case study
 * @access  Public
 * @param   id - Case study ID
 * @return   { caseStudy }
 */
router.get('/case-studies/:id', async (req, res) => {
  try {
    const caseStudyId = req.params.id

    // Validate ID
    if (!caseStudyId || caseStudyId.trim() === '') {
      return res.status(400).json({
        status: 'error',
        message: 'Case study ID is required'
      })
    }

    // Get all case studies and find the specific one
    const result = await getNorthAmericanCaseStudies(null, 1000, 0)
    const caseStudy = result.caseStudies.find(cs => cs.id === caseStudyId)

    if (!caseStudy) {
      return res.status(404).json({
        status: 'error',
        message: 'Case study not found'
      })
    }

    res.json({
      status: 'success',
      data: { caseStudy }
    })
  } catch (error) {
    console.error('Case study error:', error)
    res.status(500).json({
      status: 'error',
      message: 'Failed to retrieve case study',
      error: error instanceof Error ? error.message : 'Unknown error'
    })
  }
})

/**
 * @route   POST /api/na/contact
 * @desc    Submit contact form for North American inquiries
 * @access  Public
 * @body    { name, email, company, industry, message, interestedIn }
 * @return   { message, referenceId }
 */
router.post('/contact', async (req, res) => {
  try {
    const { name, email, company, industry, message, interestedIn } = req.body

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        status: 'error',
        message: 'Name, email, and message are required'
      })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        status: 'error',
        message: 'Invalid email format'
      })
    }

    // Generate reference ID
    const referenceId = `NA-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`

    // In production, this would:
    // 1. Save to database
    // 2. Send email notification
    // 3. Create support ticket
    // 4. Trigger CRM integration

    // For now, just return success
    res.json({
      status: 'success',
      message: 'Your inquiry has been received. Our team will contact you within 24 hours.',
      referenceId
    })
  } catch (error) {
    console.error('Contact submission error:', error)
    res.status(500).json({
      status: 'error',
      message: 'Failed to submit inquiry',
      error: error instanceof Error ? error.message : 'Unknown error'
    })
  }
})

/**
 * @route   GET /api/na/pricing
 * @desc    Get North American pricing information
 * @access  Public
 * @return   { plans, discounts, currency, billing }
 */
router.get('/pricing', (req, res) => {
  try {
    const pricing = {
      plans: [
        {
          id: 'individual',
          name: 'Individual',
          description: 'Perfect for solo sales professionals',
          monthlyPrice: 99,
          annualPrice: 948,
          annualSavings: 20,
          features: [
            'AI Sales Coach',
            'Real-time feedback',
            'Unlimited calls',
            'Analytics dashboard',
            'Email support'
          ],
          popular: true
        },
        {
          id: 'team',
          name: 'Team (5-10 users)',
          description: 'Ideal for small sales teams',
          monthlyPrice: 89,
          annualPrice: 853,
          annualSavings: 20,
          perUser: true,
          features: [
            'All Individual features',
            'Team analytics',
            'Manager dashboard',
            'Priority support',
            'Team coaching sessions',
            'CRM integration'
          ],
          popular: false
        },
        {
          id: 'enterprise',
          name: 'Enterprise (50+ users)',
          description: 'For large organizations',
          monthlyPrice: 'custom',
          annualPrice: 'custom',
          annualSavings: 25,
          features: [
            'All Team features',
            'Custom AI training',
            'Dedicated account manager',
            'SLA guarantee',
            'On-premise deployment',
            'Advanced integrations',
            'Custom branding'
          ],
          popular: false
        }
      ],
      discounts: {
        annual: 20,
        volume: {
          teamSize10: 15,
          teamSize25: 20,
          teamSize50: 25
        }
      },
      currency: {
        code: 'USD',
        symbol: '$',
        locale: 'en-US'
      },
      billing: {
        cycle: 'monthly',
        trialDays: 14,
        moneyBackGuarantee: 30
      },
      region: 'North America',
      countries: ['US', 'CA', 'MX']
    }

    res.json({
      status: 'success',
      data: pricing
    })
  } catch (error) {
    console.error('Pricing error:', error)
    res.status(500).json({
      status: 'error',
      message: 'Failed to retrieve pricing',
      error: error instanceof Error ? error.message : 'Unknown error'
    })
  }
})

export default router
