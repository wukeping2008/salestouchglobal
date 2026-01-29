# 💳 Payment System Integration Guide

**Project**: SalesTouch NorthAmerica Landing Page
**Target Market**: North America (USA, Canada, Mexico)
**Payment Providers**: Stripe, PayPal, ACH (for enterprises)

---

## 🎯 Payment Strategy

### Primary Provider: Stripe
- **Why Stripe?** Most popular in North America, excellent developer experience, broad payment method support
- **Support**: Credit/Debit cards, Apple Pay, Google Pay
- **Fee**: 2.9% + 30¢ per transaction (standard plan)

### Secondary Provider: PayPal
- **Why PayPal?** Widely trusted, excellent mobile experience
- **Support**: PayPal balance, credit/debit cards
- **Fee**: 2.89% + 49¢ per transaction

### Enterprise: ACH (Bank Transfer)
- **Why ACH?** Preferred by enterprises for large payments
- **Fee**: $0.60 per transaction (lower for large amounts)
- **Settlement**: 2-3 business days

---

## 📋 Pricing Plans

### Individual Plan
- **Monthly**: $99/month
- **Annual**: $948/year (Save 20%)
- **Trial**: 14 days free
- **Features**:
  - AI Sales Coach
  - Real-time feedback
  - Unlimited calls
  - Analytics dashboard
  - Email support

### Team Plan (5-10 users)
- **Monthly**: $89/user/month
- **Annual**: $853/user/year (Save 20%)
- **Team Discount**: 15% off for 11+ users
- **Additional Features**:
  - Team analytics
  - Manager dashboard
  - Priority support
  - Team coaching sessions
  - CRM integration

### Enterprise Plan (50+ users)
- **Pricing**: Custom (contact sales)
- **Volume Discount**: Up to 25% off
- **Additional Features**:
  - All Team features
  - Custom AI training
  - Dedicated account manager
  - SLA guarantee
  - On-premise deployment option
  - Advanced integrations
  - Custom branding

---

## 🔧 Stripe Integration

### Step 1: Create Stripe Account

1. Go to: https://dashboard.stripe.com/register
2. Select: Business (North America)
3. Enter business information:
   - Business name: "SalesTouch Inc." or your company
   - Business type: Corporation/LLC
   - Country: United States (or Canada)
   - Industry: Technology / Software

### Step 2: Get API Keys

1. Go to: https://dashboard.stripe.com/apikeys
2. Create two sets of keys:
   - **Test Mode** (for development):
     - Publishable key: `pk_test_xxxxx`
     - Secret key: `sk_test_xxxxx`
   - **Live Mode** (for production):
     - Publishable key: `pk_live_xxxxx`
     - Secret key: `sk_live_xxxxx`

⚠️ **Important**: Never share secret keys!

### Step 3: Configure Environment Variables

```bash
# Copy example file
cp .env.example .env

# Edit .env file
STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
STRIPE_SECRET_KEY=sk_test_your_secret_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here

# Pricing
STRIPE_INDIVIDUAL_PRICE_ID=price_individual_monthly
STRIPE_TEAM_PRICE_ID=price_team_monthly
STRIPE_ANNUAL_DISCOUNT=0.20

# Currency
CURRENCY=USD
```

### Step 4: Create Products & Prices

```bash
# Use Stripe CLI to create products
stripe products create \
  --name="Individual Plan" \
  --description="AI Sales Coaching for individuals" \
  --default-price-data='{
    "currency": "usd",
    "unit_amount": 9900,
    "recurring": {
      "interval": "month",
      "trial_period_days": 14
    }
  }'

stripe products create \
  --name="Team Plan (per user)" \
  --description="AI Sales Coaching for teams" \
  --default-price-data='{
    "currency": "usd",
    "unit_amount": 8900,
    "recurring": {
      "interval": "month",
      "trial_period_days": 14
    },
    "tiers_mode": "volume"
  }'
```

### Step 5: Create Webhook Endpoint

```typescript
// backend/src/webhooks/stripe.ts
import Stripe from 'stripe';
import express from 'express';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
const router = express.Router();

/**
 * Stripe webhook handler
 */
router.post('/stripe', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'] as string;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      webhookSecret
    );
  } catch (err) {
    console.log(`Webhook signature verification failed:`, err.message);
    return res.status(400).send('Invalid signature');
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object as Stripe.Checkout.Session;
      console.log(`Payment successful: ${session.payment_intent}`);
      // TODO: Update user subscription in database
      // TODO: Send confirmation email
      // TODO: Grant access to AI Sales Coach
      break;

    case 'invoice.paid':
      const invoice = event.data.object as Stripe.Invoice;
      console.log(`Recurring payment: ${invoice.amount_paid / 100}`);
      // TODO: Extend subscription period
      break;

    case 'customer.subscription.deleted':
      console.log('Subscription cancelled');
      // TODO: Revoke access to AI Sales Coach
      break;

    case 'payment_intent.payment_failed':
      console.log('Payment failed');
      // TODO: Notify user of failed payment
      // TODO: Send retry link
      break;

    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  res.status(200).json({ received: true });
});

export default router;
```

### Step 6: Create Checkout Sessions

```typescript
// backend/src/api/payments.ts
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

/**
 * Create Stripe checkout session
 */
router.post('/checkout', async (req, res) => {
  const { priceId, userId, successUrl, cancelUrl } = req.body;

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card', 'us_bank_account'],
      line_items: [{
        price: priceId,
        quantity: 1,
      }],
      mode: 'subscription',
      success_url: successUrl || 'https://salestouch.northamerica/success',
      cancel_url: cancelUrl || 'https://salestouch.northamerica/cancel',
      customer_email: req.user?.email, // If user is logged in
      metadata: {
        userId,
        plan: priceId.includes('individual') ? 'individual' : 'team',
        region: 'North America'
      },
      allow_promotion_codes: true,
      billing_address_collection: 'auto',
      client_reference_id: userId
    });

    res.json({
      status: 'success',
      sessionId: session.id,
      checkoutUrl: session.url
    });
  } catch (error) {
    console.error('Checkout session creation error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to create checkout session',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});
```

---

## 💼 PayPal Integration

### Step 1: Create PayPal Developer Account

1. Go to: https://developer.paypal.com/dashboard/
2. Create application:
   - App name: "SalesTouch NA"
   - Sandbox mode: Yes (for testing)
3. Get credentials:
   - Client ID
   - Client Secret
   - Webhook URL: https://your-domain.com/api/paypal/webhook

### Step 2: Configure Environment

```bash
# Add to .env
PAYPAL_CLIENT_ID=your_paypal_client_id
PAYPAL_CLIENT_SECRET=your_paypal_client_secret
PAYPAL_MODE=sandbox # Change to 'live' for production
```

### Step 3: Create PayPal Webhook Handler

```typescript
// backend/src/webhooks/paypal.ts
import paypal from '@paypal/checkout-server-sdk';

const router = express.Router();

/**
 * PayPal webhook handler
 */
router.post('/paypal', async (req, res) => {
  const webhookId = req.headers['paypal-transmission-id'];
  const payload = JSON.stringify(req.body);

  // Verify webhook (simplified version)
  // In production, use PayPal SDK verification
  console.log(`PayPal webhook: ${webhookId}`);

  const eventType = req.headers['paypal-event-type'];

  switch (eventType) {
    case 'PAYMENT.CAPTURE.COMPLETED':
      console.log('PayPal payment successful');
      // TODO: Update user subscription
      // TODO: Send confirmation email
      break;

    case 'BILLING.SUBSCRIPTION.CANCELLED':
      console.log('PayPal subscription cancelled');
      // TODO: Revoke access
      break;

    default:
      console.log(`Unhandled PayPal event: ${eventType}`);
  }

  res.status(200).send('OK');
});

export default router;
```

---

## 🏢 Enterprise ACH Integration

### Setup for Enterprise Customers

1. **ACH Processing**:
   - Use Stripe ACH (preferred)
   - Or integrate directly with bank APIs (Bank of America, Chase, etc.)

2. **Invoicing**:
   - Generate monthly invoices
   - Send via email with payment link
   - Net 30 terms (standard in B2B)

3. **PO Processing**:
   - Accept Purchase Orders
   - Manual review and approval
   - Custom billing cycle (quarterly, annual)

---

## 📧 Email Notifications

### Payment Confirmation Email Template

```html
<!-- templates/emails/payment-confirmation.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Payment Confirmation - SalesTouch</title>
</head>
<body style="font-family: 'Inter', sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%); padding: 40px; border-radius: 12px; color: white;">
            <h1 style="margin: 0 0 20px 0; font-size: 28px;">🎉 Welcome to SalesTouch!</h1>
            <p style="font-size: 18px; margin: 0 0 20px 0;">
                Thank you for your payment. Your subscription is now active!
            </p>

            <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 8px; margin: 20px 0;">
                <h2 style="margin: 0 0 15px 0;">Subscription Details</h2>
                <ul style="list-style: none; padding: 0; margin: 15px 0;">
                    <li style="margin-bottom: 10px;">
                        <strong>Plan:</strong> {{PLAN_NAME}}
                    </li>
                    <li style="margin-bottom: 10px;">
                        <strong>Amount:</strong> ${{AMOUNT}}/{{BILLING_CYCLE}}
                    </li>
                    <li style="margin-bottom: 10px;">
                        <strong>Next Billing:</strong> {{NEXT_BILLING_DATE}}
                    </li>
                    <li>
                        <strong>Trial:</strong> 14 days free, then {{TRIAL_DAYS}} days at {{DISCOUNTED_RATE}}
                    </li>
                </ul>
            </div>

            <div style="margin: 30px 0;">
                <a href="{{DASHBOARD_URL}}" style="display: inline-block; padding: 15px 30px; background: #22c55e; color: white; text-decoration: none; border-radius: 8px; font-weight: 600;">
                    Go to Dashboard →
                </a>
            </div>
        </div>

        <div style="text-align: center; margin-top: 40px; color: #64748b; font-size: 14px;">
            <p>Questions? Contact us at <a href="mailto:support@salestouch.northamerica" style="color: #0ea5e9;">support@salestouch.northamerica</a></p>
            <p style="margin-top: 10px;">© 2026 SalesTouch. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
```

---

## 🔒 Security & Compliance

### PCI DSS Compliance
- **Level 1**: Compliant through Stripe & PayPal (no card data on your servers)
- **Data Storage**: Never store full credit card numbers
- **Encryption**: TLS 1.3 for all transactions

### CCPA Compliance (California)
- **Policy**: Documented in privacy policy
- **Rights**: Right to know, right to delete, right to opt-out
- **Process**: Opt-out form within 30 days of request

### GDPR Compliance (Europe)
- **Data Protection**: GDPR-compliant data handling
- **Consent**: Clear opt-in for marketing emails
- **Right to be Forgotten**: Automated account/data deletion

---

## ✅ Testing Checklist

### Before Going Live
- [ ] Create test accounts in Stripe Sandbox
- [ ] Test individual plan checkout
- [ ] Test team plan checkout
- [ ] Test annual billing
- [ ] Test free trial activation
- [ ] Test webhook handling (payment success/failure)
- [ ] Test subscription cancellation
- [ ] Test upgrade/downgrade
- [ ] Test refund process
- [ ] Verify email notifications
- [ ] Test in multiple browsers (Chrome, Safari, Firefox)
- [ ] Test on mobile devices
- [ ] Load test checkout page
- [ ] Verify all pricing displays correctly
- [ ] Check currency formatting (USD, CAD, MXN)

---

## 📊 Transaction Fee Analysis

### Stripe Fees (Monthly)
| Plan | Monthly | Annual | Stripe Fee | Net Revenue |
|-------|---------|---------|-------------|--------------|
| Individual | $99 | $948 | $2.87 + $0.30 | $96.17 / $945.83 |
| Team (10 users) | $890 | $8,530 | $25.81 + $3.00 | $864.19 / $8,527.00 |
| Team (50 users) | $4,450 | $42,500 | $129.05 + $15.00 | $4,320.95 / $42,485.00 |

### PayPal Fees (Monthly)
| Plan | Monthly | Annual | PayPal Fee | Net Revenue |
|-------|---------|---------|-------------|--------------|
| Individual | $99 | $948 | $2.86 + $0.49 | $95.65 / $944.65 |
| Team (10 users) | $890 | $8,530 | $25.72 + $4.90 | $859.38 / $8,525.10 |

---

## 🚀 Deployment Steps

### Step 1: Production Setup
1. Create live Stripe account (not test mode)
2. Add live API keys to production environment
3. Set up production webhook endpoints
4. Configure domain and SSL certificates
5. Set up monitoring and alerting

### Step 2: Monitoring
- Monitor: Payment success rate, webhook delivery, errors
- Alert: On payment failures, webhook failures, subscription issues
- Logs: All transactions, webhook events, API errors

### Step 3: Support
- Set up: Support email (support@salestouch.northamerica)
- Create: Help center documentation
- Prepare: FAQ for common payment issues
- Configure: Escalation process for enterprise customers

---

## 📞 Support & Contact

### Technical Support
- **Email**: payments@salestouch.northamerica
- **Response Time**: < 24 hours for payment issues
- **Priority**: Enterprise customers get priority support

### Emergency Contacts
- **Stripe Support**: https://support.stripe.com/
- **PayPal Support**: https://developer.paypal.com/support/
- **Documentation**: https://docs.salestouch.northamerica/payments

---

**Payment system integration complete!** 💳✨

**Next Steps:**
1. Set up Stripe and PayPal accounts
2. Configure API keys in .env
3. Test in sandbox mode
4. Deploy to production
5. Monitor and optimize

**Need help implementing specific payment providers? Let me know!** 🛠️
