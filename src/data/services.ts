export interface Service {
  slug: string;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  process: {
    title: string;
    description: string;
  }[];
  pricing: {
    basic: {
      price: string;
      features: string[];
    };
    premium: {
      price: string;
      features: string[];
    };
  };
  timeline: string;
  category: string;
}

export const services: Service[] = [
  {
    slug: 'p2p-trading',
    title: 'P2P Crypto Trading',
    description: 'Expert peer-to-peer cryptocurrency trading services across major exchanges with guaranteed security and optimal returns.',
    features: [
      'Multi-Platform Trading',
      'Real-time Price Analysis',
      'Risk Management',
      'Secure Transactions',
      '24/7 Market Monitoring',
      'Automated Trading Bots',
      'Portfolio Optimization',
      'Instant Settlement'
    ],
    technologies: ['Binance API', 'KuCoin API', 'OKX API', 'TradingView', 'Python', 'Advanced Analytics'],
    process: [
      {
        title: 'Account Setup & Verification',
        description: 'Secure account setup across major exchanges with comprehensive KYC verification and security protocols.'
      },
      {
        title: 'Risk Assessment & Strategy',
        description: 'Analyzing your risk tolerance and developing personalized trading strategies for optimal returns.'
      },
      {
        title: 'Active Trading & Management',
        description: 'Executing trades across multiple platforms with real-time monitoring and risk management.'
      },
      {
        title: 'Performance Monitoring',
        description: 'Continuous tracking of trading performance with detailed analytics and reporting.'
      },
      {
        title: 'Profit Optimization',
        description: 'Regular strategy adjustments and optimizations to maximize returns while minimizing risks.'
      }
    ],
    pricing: {
      basic: {
        price: '2% Commission',
        features: [
          'Single platform trading',
          'Basic risk management',
          'Weekly reports',
          'Email support',
          'Up to $50K volume'
        ]
      },
      premium: {
        price: '1.5% Commission',
        features: [
          'Multi-platform trading',
          'Advanced risk management',
          'Daily reports & analytics',
          '24/7 phone support',
          'Unlimited volume'
        ]
      }
    },
    timeline: '24-48 hours setup',
    category: 'Trading'
  },
  {
    slug: 'blockchain-security',
    title: 'Blockchain Security',
    description: 'Advanced security protocols and risk assessment services for safe cryptocurrency transactions and wallet protection.',
    features: [
      'Transaction Security',
      'Wallet Protection',
      'Smart Contract Audits',
      'Fraud Prevention',
      'Multi-signature Setups',
      'Cold Storage Solutions',
      'Security Monitoring',
      'Incident Response'
    ],
    technologies: ['Multi-sig Wallets', 'Hardware Security', 'Blockchain Analytics', 'Encryption', 'Audit Tools'],
    process: [
      {
        title: 'Security Assessment',
        description: 'Comprehensive analysis of your current security setup and identification of vulnerabilities.'
      },
      {
        title: 'Protection Implementation',
        description: 'Setting up multi-layered security protocols including cold storage and multi-sig wallets.'
      },
      {
        title: 'Monitoring Setup',
        description: 'Implementing real-time security monitoring and alert systems for suspicious activities.'
      },
      {
        title: 'Incident Response',
        description: '24/7 incident response team ready to handle any security breaches or threats.'
      },
      {
        title: 'Regular Audits',
        description: 'Periodic security audits and updates to maintain the highest level of protection.'
      }
    ],
    pricing: {
      basic: {
        price: 'Starting at $5,000',
        features: [
          'Basic security audit',
          'Wallet setup & protection',
          'Security recommendations',
          'Email support',
          '6 months monitoring'
        ]
      },
      premium: {
        price: 'Starting at $15,000',
        features: [
          'Complete security overhaul',
          'Multi-sig implementation',
          '24/7 monitoring',
          'Incident response',
          '12 months support'
        ]
      }
    },
    timeline: '1-2 weeks setup',
    category: 'Security'
  },
  {
    slug: 'market-analysis',
    title: 'Crypto Market Analysis',
    description: 'Professional market analysis and trading strategies for optimal cryptocurrency investments and portfolio growth.',
    features: [
      'Technical Analysis',
      'Market Trends',
      'Price Predictions',
      'Investment Strategies',
      'Risk Assessment',
      'Market Intelligence',
      'Trading Signals',
      'Performance Reports'
    ],
    technologies: ['TradingView', 'CoinGecko API', 'Advanced Charting', 'ML Algorithms', 'Market Data Feeds'],
    process: [
      {
        title: 'Market Research',
        description: 'Comprehensive analysis of market trends, historical data, and emerging opportunities.'
      },
      {
        title: 'Technical Analysis',
        description: 'Advanced chart analysis using multiple indicators and trading patterns for predictions.'
      },
      {
        title: 'Strategy Development',
        description: 'Creating customized investment strategies based on your risk profile and goals.'
      },
      {
        title: 'Signal Generation',
        description: 'Providing real-time trading signals and market alerts for optimal entry/exit points.'
      },
      {
        title: 'Performance Tracking',
        description: 'Regular analysis of strategy performance with detailed reports and adjustments.'
      }
    ],
    pricing: {
      basic: {
        price: 'Starting at $500/month',
        features: [
          'Weekly market reports',
          'Basic technical analysis',
          'Email alerts',
          'General market insights',
          'Basic support'
        ]
      },
      premium: {
        price: 'Starting at $2,000/month',
        features: [
          'Daily market analysis',
          'Custom trading strategies',
          'Real-time signals',
          'Personal consultation',
          'Priority support'
        ]
      }
    },
    timeline: 'Immediate start',
    category: 'Analysis'
  },
  {
    slug: 'portfolio-management',
    title: 'Portfolio Management',
    description: 'Comprehensive cryptocurrency portfolio management and optimization services for maximum returns and risk mitigation.',
    features: [
      'Asset Diversification',
      'Risk Assessment',
      'Performance Tracking',
      'Profit Optimization',
      'Rebalancing Strategies',
      'Tax Optimization',
      'Performance Reports',
      'Strategic Consulting'
    ],
    technologies: ['Portfolio Analytics', 'Rebalancing Algorithms', 'Tax Software', 'Performance Tracking'],
    process: [
      {
        title: 'Portfolio Assessment',
        description: 'Comprehensive analysis of your current portfolio allocation and performance metrics.'
      },
      {
        title: 'Strategy Development',
        description: 'Creating customized portfolio strategies based on your risk tolerance and investment goals.'
      },
      {
        title: 'Asset Allocation',
        description: 'Optimizing asset allocation across different cryptocurrencies and investment vehicles.'
      },
      {
        title: 'Active Management',
        description: 'Continuous monitoring and rebalancing to maintain optimal portfolio performance.'
      },
      {
        title: 'Performance Review',
        description: 'Regular performance reviews with detailed reports and strategy adjustments.'
      }
    ],
    pricing: {
      basic: {
        price: '1% AUM annually',
        features: [
          'Basic portfolio analysis',
          'Quarterly rebalancing',
          'Performance reports',
          'Email support',
          'Up to $100K AUM'
        ]
      },
      premium: {
        price: '0.75% AUM annually',
        features: [
          'Advanced portfolio management',
          'Monthly rebalancing',
          'Tax optimization',
          'Personal consultation',
          'Unlimited AUM'
        ]
      }
    },
    timeline: '1 week setup',
    category: 'Management'
  },
  {
    slug: 'trading-consultation',
    title: 'Trading Consultation',
    description: 'Expert consultation services for individuals and businesses entering crypto trading with comprehensive education and support.',
    features: [
      'Strategy Development',
      'Platform Selection',
      'Training & Education',
      'Ongoing Support',
      'Risk Management Training',
      'Trading Psychology',
      'Technical Analysis Education',
      'Regulatory Compliance'
    ],
    technologies: ['Trading Platforms', 'Educational Tools', 'Simulation Software', 'Analytics Dashboards'],
    process: [
      {
        title: 'Needs Assessment',
        description: 'Understanding your trading goals, experience level, and risk tolerance for personalized guidance.'
      },
      {
        title: 'Education & Training',
        description: 'Comprehensive training on trading fundamentals, technical analysis, and risk management.'
      },
      {
        title: 'Platform Setup',
        description: 'Guidance on selecting and setting up the best trading platforms for your needs.'
      },
      {
        title: 'Strategy Implementation',
        description: 'Hands-on support in implementing your personalized trading strategy.'
      },
      {
        title: 'Ongoing Mentorship',
        description: 'Continuous support and guidance as you develop your trading skills and experience.'
      }
    ],
    pricing: {
      basic: {
        price: 'Starting at $500/session',
        features: [
          'Initial consultation',
          'Basic trading education',
          'Platform recommendations',
          'Email support',
          '3 follow-up sessions'
        ]
      },
      premium: {
        price: 'Starting at $5,000/month',
        features: [
          'Comprehensive training program',
          'Weekly mentorship calls',
          'Custom strategy development',
          'Priority support',
          'Unlimited consultations'
        ]
      }
    },
    timeline: '1-2 weeks + ongoing',
    category: 'Consulting'
  }
];