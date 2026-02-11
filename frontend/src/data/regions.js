/**
 * Region Data Management
 * 存储所有区域的信息、文案、案例、货币、语言
 */
// 完整的区域数据
export const regions = [
    {
        id: 'global',
        name: 'Global',
        icon: 'GL',
        description: 'Best experience for global teams across Europe, Americas, and Asia-Pacific',
        highlights: ['Worldwide Coverage', 'Global Support', 'Multi-language'],
        currency: 'USD',
        currencySymbol: '$',
        headquarters: 'San Francisco, USA',
        teamLanguages: ['English', 'Spanish', 'French', 'German', 'Portuguese', 'Chinese', 'Japanese'],
        successStories: {
            title: 'Global Enterprise Success Stories',
            description: 'See how companies in Europe, North America, Asia, and beyond transformed their sales',
            companies: ['TechCorp (Germany)', 'MedEquip Inc. (France)', 'FinCo (USA)', 'RetailMax (Canada)', 'CloudScale Inc. (Singapore)']
        },
        productFocus: ['Enterprise', 'Mid-market', 'Small Business'],
        hero: {
            title: 'SalesTouch - Enterprise Sales Acceleration Platform',
            subtitle: 'Trusted by 500+ enterprise clients across 50+ countries',
            cta: 'Start Free Trial'
        },
        features: {
            title: 'Why Global Enterprise Teams Choose SalesTouch',
            subtitle: 'Comprehensive sales coaching platform for businesses of all sizes',
            items: [
                {
                    title: 'AI-Powered Sales Coaching',
                    description: 'Real-time feedback, objection handling, personalized coaching for your global team'
                },
                {
                    title: 'Enterprise-Grade Analytics',
                    description: 'Advanced dashboards, team performance metrics, predictive insights for better decisions'
                },
                {
                    title: 'Global Support Network',
                    description: '24/7 support in multiple time zones, localized expertise in 50+ countries'
                },
                {
                    title: 'Multi-Currency & Multi-Language',
                    description: 'Support for USD, EUR, GBP, JPY, CNY, and multiple languages'
                },
                {
                    title: 'Enterprise Compliance',
                    description: 'GDPR, CCPA, SOC 2 Type II compliant, industry-specific certifications'
                },
                {
                    title: 'Scalable Solution',
                    description: 'From 10 to 10,000+ users, custom solutions for global enterprises'
                }
            ]
        },
        caseStudies: {
            title: 'Global Success Stories',
            subtitle: 'How leading companies across 6 continents achieved breakthrough results',
            cases: [
                {
                    id: 'techcorp-global',
                    company: 'TechCorp',
                    industry: 'Technology',
                    size: 'Large',
                    location: 'Berlin, Germany',
                    challenge: {
                        problem: 'Inconsistent sales performance across 50-person team across multiple locations',
                        impact: 'Revenue stagnation and high turnover of top performers'
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
                    }
                },
                {
                    id: 'medequip-global',
                    company: 'MedEquip Inc.',
                    industry: 'Healthcare',
                    size: 'Medium',
                    location: 'Paris, France',
                    challenge: {
                        problem: 'Time-consuming proposal generation and low response rates from outbound calls',
                        impact: 'Sales team spending 60% of time on paperwork instead of selling'
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
                    }
                },
                {
                    id: 'finco-global',
                    company: 'FinCo Financial Services',
                    industry: 'Finance',
                    size: 'Large',
                    location: 'New York, NY, USA',
                    challenge: {
                        problem: 'Commoditized services and fierce competition made differentiation extremely difficult',
                        impact: 'Struggling to maintain margins and win new clients in a saturated market'
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
                    }
                },
                {
                    id: 'cloudscale-global',
                    company: 'CloudScale Inc.',
                    industry: 'SaaS',
                    size: 'Startup',
                    location: 'Singapore',
                    challenge: {
                        problem: 'Young sales team lacked experience and struggled with objection handling',
                        impact: 'Low win rates and extended sales cycles hurting cash flow'
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
                    }
                }
            ]
        },
        pricing: {
            title: 'Enterprise Pricing',
            subtitle: 'Flexible plans for global teams',
            plans: [
                {
                    id: 'individual',
                    name: 'Individual',
                    monthly: '$99/month',
                    annual: '$948/year',
                    currency: 'USD',
                    features: [
                        'AI Sales Coach',
                        'Real-time feedback',
                        'Unlimited calls',
                        'Analytics dashboard',
                        'Email support'
                    ]
                },
                {
                    id: 'team',
                    name: 'Team',
                    monthly: '$89/user/month',
                    annual: '$853/user/year',
                    currency: 'USD',
                    features: [
                        'All Individual features',
                        'Team analytics',
                        'Manager dashboard',
                        'Priority support',
                        'Team coaching sessions',
                        'CRM integration'
                    ]
                },
                {
                    id: 'enterprise',
                    name: 'Enterprise',
                    monthly: 'Custom pricing',
                    annual: 'Custom pricing',
                    currency: 'USD',
                    features: [
                        'All Team features',
                        'Custom AI training',
                        'Dedicated account manager',
                        'SLA guarantee',
                        'On-premise deployment option',
                        'Advanced integrations',
                        'Custom branding'
                    ]
                }
            ]
        },
        languages: {
            default: 'en',
            available: ['en', 'de', 'fr', 'es', 'pt', 'zh', 'ja']
        }
    },
    {
        id: 'europe',
        name: 'Europe',
        icon: 'EU',
        description: 'Tailored for European markets with local support and compliance',
        highlights: ['GDPR Compliant', 'European Time Zones', 'Euro/Pound Support', 'EU Regulations'],
        currency: 'EUR',
        currencySymbol: '€',
        headquarters: 'London, UK',
        teamLanguages: ['English', 'German', 'French', 'Spanish', 'Italian', 'Portuguese', 'Dutch', 'Polish'],
        successStories: {
            title: 'European Success Stories',
            description: 'Leading European companies transform sales with AI coaching',
            companies: ['TechCorp (Germany)', 'MedEquip Inc. (France)', 'FinCo (Netherlands)']
        },
        productFocus: ['Enterprise', 'Mid-market'],
        hero: {
            title: 'SalesTouch - Your European Sales Acceleration Platform',
            subtitle: 'GDPR compliant, Euro support, dedicated European expertise',
            cta: 'Start 14-Day Free Trial'
        },
        features: {
            title: 'Why European Companies Choose SalesTouch',
            subtitle: 'Compliance and localization built-in for European markets',
            items: [
                {
                    title: 'GDPR Compliant',
                    description: 'Full compliance with European data protection laws, CCPA-california equivalent for US companies'
                },
                {
                    title: 'Euro/Pound Currency Support',
                    description: 'Automatic currency conversion, localized pricing in EUR, GBP, CHF'
                },
                {
                    title: 'European Time Zone Support',
                    description: '24/7 support in CET, CEST, EEST time zones, European working hours'
                },
                {
                    title: 'EU Regulatory Expertise',
                    description: 'Deep understanding of European business practices, compliance requirements, and cultural nuances'
                },
                {
                    title: 'Local Language Support',
                    description: 'Native support in German, French, Spanish, Italian, and other European languages'
                },
                {
                    title: 'Data Privacy by Design',
                    description: 'Data stored in European data centers, GDPR-compliant data handling, right to be forgotten'
                }
            ]
        },
        caseStudies: {
            title: 'European Success Stories',
            subtitle: 'How leading European companies achieved breakthrough results',
            cases: [
                {
                    id: 'techcorp-europe',
                    company: 'TechCorp (Germany)',
                    industry: 'Technology',
                    size: 'Large',
                    location: 'Munich, Germany',
                    challenge: {
                        problem: 'Highly competitive German market with strong local players and price sensitivity',
                        impact: 'Difficult to differentiate and win against established German competitors'
                    },
                    solution: {
                        tools: ['AI Sales Coach', 'Custom Training', 'Analytics Dashboard'],
                        implementationTime: '4 weeks'
                    },
                    results: {
                        revenueIncrease: '180%',
                        closeRateImprovement: '40%',
                        timeToClose: 'Down 45%',
                        roi: '480%'
                    },
                    testimonial: {
                        author: 'Hans Mueller',
                        role: 'Sales Director DACH',
                        quote: 'In the German market, you need every advantage. SalesTouch gave us the competitive edge with AI-powered coaching and local expertise.'
                    }
                },
                {
                    id: 'medequip-europe',
                    company: 'MedEquip Inc. (France)',
                    industry: 'Healthcare',
                    size: 'Medium',
                    location: 'Lyon, France',
                    challenge: {
                        problem: 'Complex French regulations and strong competition from established French competitors',
                        impact: 'Difficult to penetrate the market and build trust with conservative French decision-makers'
                    },
                    solution: {
                        tools: ['Smart Page Generator 2.0', 'Email Templates', 'GDPR Compliance Tools'],
                        implementationTime: '3 weeks'
                    },
                    results: {
                        revenueIncrease: '120%',
                        closeRateImprovement: '45%',
                        timeToClose: 'Down 50%',
                        roi: '520%'
                    },
                    testimonial: {
                        author: 'Marie Dubois',
                        role: 'Commercial Director',
                        quote: 'SalesTouch helped us navigate the complex French market with localized support and GDPR compliance. Our sales cycles shortened dramatically.'
                    }
                }
            ]
        },
        pricing: {
            title: 'European Pricing',
            subtitle: 'EUR pricing with VAT options',
            plans: [
                {
                    id: 'individual-eur',
                    name: 'Individual',
                    monthly: '€99/month',
                    annual: '€948/year',
                    currency: 'EUR',
                    features: [
                        'AI Sales Coach',
                        'Real-time feedback',
                        'Unlimited calls',
                        'Analytics dashboard',
                        'GDPR compliant',
                        'Email support'
                    ]
                },
                {
                    id: 'team-eur',
                    name: 'Team',
                    monthly: '€89/user/month',
                    annual: '€853/user/year',
                    currency: 'EUR',
                    features: [
                        'All Individual features',
                        'Team analytics',
                        'Manager dashboard',
                        'Priority support',
                        'Team coaching sessions',
                        'CRM integration'
                    ]
                },
                {
                    id: 'enterprise-eur',
                    name: 'Enterprise',
                    monthly: 'Custom pricing',
                    annual: 'Custom pricing',
                    currency: 'EUR',
                    features: [
                        'All Team features',
                        'Custom AI training',
                        'Dedicated account manager',
                        'SLA guarantee',
                        'On-premise deployment',
                        'Advanced integrations',
                        'Custom branding'
                    ]
                }
            ]
        },
        languages: {
            default: 'en',
            available: ['en', 'de', 'fr', 'es', 'it', 'pt', 'nl']
        }
    },
    {
        id: 'north-america',
        name: 'North America',
        icon: 'NA',
        description: 'Optimized for North American markets with dedicated support',
        highlights: ['CCPA Compliant', 'North American Time Zones', 'US Dollar Support', 'NAFTA Ready'],
        currency: 'USD',
        currencySymbol: '$',
        headquarters: 'San Francisco, USA',
        teamLanguages: ['English', 'Spanish', 'French'],
        successStories: {
            title: 'North American Success Stories',
            description: 'Top US and Canadian companies achieve breakthrough results',
            companies: ['FinCo (USA)', 'RetailMax (Canada)']
        },
        productFocus: ['Enterprise', 'Mid-market'],
        hero: {
            title: 'SalesTouch - Your North American Sales Acceleration Platform',
            subtitle: 'CCPA compliant, dedicated North American support and expertise',
            cta: 'Start 14-Day Free Trial'
        },
        features: {
            title: 'Why North American Teams Choose SalesTouch',
            subtitle: 'Built-in compliance and expertise for US and Canadian markets',
            items: [
                {
                    title: 'CCPA Compliant',
                    description: 'California Consumer Privacy Act compliant, data privacy by design, opt-out mechanisms'
                },
                {
                    title: 'North American Time Zone Support',
                    description: '24/7 support in EST, CST, MST, PST time zones, North American working hours'
                },
                {
                    title: 'US Dollar Pricing',
                    description: 'Pricing in USD, automatic tax calculation, invoicing for US and Canadian businesses'
                },
                {
                    title: 'NAFTA/USMCA Ready',
                    description: 'Trade agreement compliant, duty-free trade support, cross-border documentation'
                },
                {
                    title: 'US/Canada Regulatory Expertise',
                    description: 'Deep understanding of North American business practices, compliance requirements, and market dynamics'
                },
                {
                    title: 'Local Language Support',
                    description: 'Native support in English, Spanish, French, with Canadian English variants'
                }
            ]
        },
        caseStudies: {
            title: 'North American Success Stories',
            subtitle: 'How leading US and Canadian companies achieved breakthrough results',
            cases: [
                {
                    id: 'finco-usa',
                    company: 'FinCo Financial Services',
                    industry: 'Finance',
                    size: 'Large',
                    location: 'New York, NY, USA',
                    challenge: {
                        problem: 'Commoditized financial services market with strong competition from established players',
                        impact: 'Struggling to maintain margins and win new clients in a saturated market'
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
                    }
                },
                {
                    id: 'retailmax-canada',
                    company: 'RetailMax (Canada)',
                    industry: 'Retail',
                    size: 'Large',
                    location: 'Toronto, Canada',
                    challenge: {
                        problem: 'Large distributed retail network with inconsistent sales performance across 30 stores',
                        impact: 'Variable performance and difficulty identifying best practices to scale'
                    },
                    solution: {
                        tools: ['AI Sales Coach', 'Analytics Dashboard', 'Team Coaching Sessions'],
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
                        role: 'VP of Retail Sales',
                        quote: 'Our field sales team finally has consistent, data-driven coaching. The mobile app lets them review feedback on the go, and performance has skyrocketed.'
                    }
                }
            ]
        },
        pricing: {
            title: 'North American Pricing',
            subtitle: 'USD pricing with US and Canadian options',
            plans: [
                {
                    id: 'individual-na',
                    name: 'Individual',
                    monthly: '$99/month',
                    annual: '$948/year',
                    currency: 'USD',
                    features: [
                        'AI Sales Coach',
                        'Real-time feedback',
                        'Unlimited calls',
                        'Analytics dashboard',
                        'CCPA compliant',
                        'Email support'
                    ]
                },
                {
                    id: 'team-na',
                    name: 'Team',
                    monthly: '$89/user/month',
                    annual: '$853/user/year',
                    currency: 'USD',
                    features: [
                        'All Individual features',
                        'Team analytics',
                        'Manager dashboard',
                        'Priority support',
                        'Team coaching sessions',
                        'CRM integration'
                    ]
                },
                {
                    id: 'enterprise-na',
                    name: 'Enterprise',
                    monthly: 'Custom pricing',
                    annual: 'Custom pricing',
                    currency: 'USD',
                    features: [
                        'All Team features',
                        'Custom AI training',
                        'Dedicated account manager',
                        'SLA guarantee',
                        'On-premise deployment',
                        'Advanced integrations',
                        'Custom branding'
                    ]
                }
            ]
        },
        languages: {
            default: 'en',
            available: ['en', 'es', 'fr', 'en-CA']
        }
    },
    {
        id: 'asia-pacific',
        name: 'Asia-Pacific',
        icon: 'AP',
        description: 'Customized for Asia-Pacific markets with local partnerships',
        highlights: ['APAC Compliant', 'Asia Time Zones', 'Multi-currency Support', 'APAC Ready'],
        currency: 'USD',
        currencySymbol: '$',
        headquarters: 'Singapore',
        teamLanguages: ['English', 'Chinese', 'Japanese', 'Korean', 'Malay', 'Thai', 'Vietnamese', 'Bahasa', 'Hindi'],
        successStories: {
            title: 'Asia-Pacific Success Stories',
            description: 'Leading Asian companies scale operations with AI coaching',
            companies: ['CloudScale Inc. (Singapore)', 'RetailMax (Hong Kong)']
        },
        productFocus: ['Enterprise', 'Small Business'],
        hero: {
            title: 'SalesTouch - Your Asia-Pacific Sales Acceleration Platform',
            subtitle: 'APAC compliant, local partnerships, multi-currency support',
            cta: 'Start 14-Day Free Trial'
        },
        features: {
            title: 'Why Asia-Pacific Teams Choose SalesTouch',
            subtitle: 'Customized for diverse Asia-Pacific markets and cultures',
            items: [
                {
                    title: 'APAC Compliant',
                    description: 'GDPR-equivalent compliant for APAC countries, local data protection regulations, secure cross-border data flows'
                },
                {
                    title: 'Asia Time Zone Support',
                    description: '24/7 support in Singapore Time (SGT), Japan Standard Time (JST), China Standard Time (CST), Australian Eastern Standard Time (AEST)'
                },
                {
                    title: 'Multi-Currency Support',
                    description: 'Support for USD, SGD, JPY, CNY, HKD, KRW, AUD, and other APAC currencies'
                },
                {
                    title: 'APAC Trade Agreements',
                    description: 'RCEP, CPTPP, ASEAN Free Trade Area compliant, duty-free trade support, cross-border facilitation'
                },
                {
                    title: 'Cultural Sensitivity',
                    description: 'Cultural adaptation for Asian markets, relationship-based selling, hierarchical business practices'
                },
                {
                    title: 'Local Language Support',
                    description: 'Native support in Chinese, Japanese, Korean, Thai, Vietnamese, Malay, Bahasa, Hindi, and other APAC languages'
                }
            ]
        },
        caseStudies: {
            title: 'Asia-Pacific Success Stories',
            subtitle: 'How leading Asian companies scale operations with AI coaching',
            cases: [
                {
                    id: 'cloudscale-singapore',
                    company: 'CloudScale Inc.',
                    industry: 'SaaS',
                    size: 'Startup',
                    location: 'Singapore',
                    challenge: {
                        problem: 'Young sales team lacked experience and struggled with objection handling',
                        impact: 'Low win rates and extended sales cycles hurting cash flow'
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
                    }
                },
                {
                    id: 'retailmax-hk',
                    company: 'RetailMax (Hong Kong)',
                    industry: 'Retail',
                    size: 'Large',
                    location: 'Hong Kong',
                    challenge: {
                        problem: 'Highly competitive Asian retail market with strong local players and price sensitivity',
                        impact: 'Difficult to differentiate and maintain margins in crowded markets'
                    },
                    solution: {
                        tools: ['AI Sales Coach', 'Custom Training', 'Analytics Dashboard'],
                        implementationTime: '4 weeks'
                    },
                    results: {
                        revenueIncrease: '190%',
                        closeRateImprovement: '38%',
                        timeToClose: 'Down 48%',
                        roi: '560%'
                    },
                    testimonial: {
                        author: 'Wong Wei',
                        role: 'Regional Director',
                        quote: 'In the Asian retail market, you need every competitive advantage. SalesTouch provided our team with AI-powered insights that helped us outperform competitors.'
                    }
                }
            ]
        },
        pricing: {
            title: 'Asia-Pacific Pricing',
            subtitle: 'Multi-currency pricing for APAC markets',
            plans: [
                {
                    id: 'individual-apac',
                    name: 'Individual',
                    monthly: '$99/month',
                    annual: '$948/year',
                    currency: 'USD',
                    features: [
                        'AI Sales Coach',
                        'Real-time feedback',
                        'Unlimited calls',
                        'Analytics dashboard',
                        'Multi-currency support',
                        'Email support'
                    ]
                },
                {
                    id: 'team-apac',
                    name: 'Team',
                    monthly: '$89/user/month',
                    annual: '$853/user/year',
                    currency: 'USD',
                    features: [
                        'All Individual features',
                        'Team analytics',
                        'Manager dashboard',
                        'Priority support',
                        'Team coaching sessions',
                        'CRM integration'
                    ]
                },
                {
                    id: 'enterprise-apac',
                    name: 'Enterprise',
                    monthly: 'Custom pricing',
                    annual: 'Custom pricing',
                    currency: 'USD',
                    features: [
                        'All Team features',
                        'Custom AI training',
                        'Dedicated account manager',
                        'SLA guarantee',
                        'On-premise deployment',
                        'Advanced integrations',
                        'Custom branding'
                    ]
                }
            ]
        },
        languages: {
            default: 'en',
            available: ['en', 'zh', 'ja', 'ko', 'th', 'vi', 'id', 'my', 'hi']
        }
    }
];
// 根据ID获取区域数据
export const getRegionById = (regionId) => {
    return regions.find(r => r.id === regionId);
};
// 获取所有区域ID
export const getRegionIds = () => {
    return regions.map(r => r.id);
};
// 获取区域特定内容
export const getRegionContent = (regionId, section) => {
    const region = getRegionById(regionId);
    return region?.[section];
};
export default regions;
