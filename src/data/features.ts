/**
 * Feature data types and placeholder data
 * Used for Features page and Features Overview section
 */

/** Icon names from Lucide icon library */
export type IconName =
  | 'Zap'
  | 'Shield'
  | 'BarChart'
  | 'Globe'
  | 'Layers'
  | 'Lock'
  | 'Sparkles'
  | 'Workflow'
  | 'Code'
  | 'Database'
  | 'Cloud'
  | 'Smartphone'
  | 'Users'
  | 'Plug'
  | 'Clock'
  | 'LineChart'
  | 'Settings'
  | 'Rocket';

/** Single feature item */
export interface Feature {
  id: string;
  icon: IconName;
  title: string;
  description: string;
  href?: string;
}

/** Detailed feature for Features page with image */
export interface FeatureDetail extends Feature {
  image?: string;
  imageAlt?: string;
  subFeatures?: string[];
}

/** Use case persona */
export interface UseCase {
  id: string;
  persona: string;
  title: string;
  description: string;
  benefits: string[];
}

/** Comparison feature for comparison tables */
export interface ComparisonFeature {
  category: string;
  features: {
    name: string;
    description?: string;
    productValue: boolean | string;
    competitorValue: boolean | string;
  }[];
}

// ============================================
// Placeholder Data
// ============================================

/** Homepage features overview */
export const featuresOverview: Feature[] = [
  {
    id: '1',
    icon: 'Zap',
    title: 'Lightning Fast',
    description:
      'Optimized for speed with sub-second response times and edge caching for global performance.',
    href: '/features#performance',
  },
  {
    id: '2',
    icon: 'Shield',
    title: 'Enterprise Security',
    description:
      'SOC 2 Type II certified with end-to-end encryption, SSO support, and advanced audit logs.',
    href: '/features#security',
  },
  {
    id: '3',
    icon: 'BarChart',
    title: 'Advanced Analytics',
    description:
      'Real-time insights with customizable dashboards, automated reports, and predictive analytics.',
    href: '/features#analytics',
  },
  {
    id: '4',
    icon: 'Globe',
    title: 'Global Scale',
    description:
      'Deploy across 35+ regions worldwide with automatic scaling and 99.99% uptime SLA.',
    href: '/features#infrastructure',
  },
  {
    id: '5',
    icon: 'Layers',
    title: 'Seamless Integration',
    description:
      'Connect with 100+ tools including Slack, GitHub, Jira, and custom API integrations.',
    href: '/features#integrations',
  },
  {
    id: '6',
    icon: 'Sparkles',
    title: 'AI-Powered',
    description:
      'Leverage machine learning for automated workflows, smart recommendations, and natural language processing.',
    href: '/features#ai',
  },
];

/** Detailed features for Features page */
export const featureDetails: FeatureDetail[] = [
  {
    id: 'performance',
    icon: 'Zap',
    title: 'Blazing Fast Performance',
    description:
      'Experience unprecedented speed with our globally distributed edge network. Every request is automatically routed to the nearest data center, ensuring minimal latency for users anywhere in the world.',
    image: '/images/tech-01.jpg',
    imageAlt: 'Performance dashboard showing global latency metrics',
    subFeatures: [
      'Sub-100ms response times globally',
      'Automatic edge caching and CDN',
      'Smart request routing and load balancing',
      'Real-time performance monitoring',
    ],
  },
  {
    id: 'security',
    icon: 'Lock',
    title: 'Bank-Grade Security',
    description:
      "Protect your data with enterprise-grade security that meets the strictest compliance requirements. From encryption at rest to advanced threat detection, we've got you covered.",
    image: '/images/abstract-01.jpg',
    imageAlt: 'Security architecture diagram',
    subFeatures: [
      'SOC 2 Type II and GDPR compliant',
      'End-to-end AES-256 encryption',
      'Advanced SSO and MFA support',
      '24/7 security monitoring and threat detection',
    ],
  },
  {
    id: 'analytics',
    icon: 'LineChart',
    title: 'Intelligent Analytics',
    description:
      'Transform raw data into actionable insights with our powerful analytics platform. Create custom dashboards, generate automated reports, and leverage AI for predictive analytics.',
    image: '/images/tech-02.jpg',
    imageAlt: 'Analytics dashboard with charts and metrics',
    subFeatures: [
      'Real-time data visualization',
      'Custom report builder',
      'AI-powered predictive insights',
      'Scheduled automated reports',
    ],
  },
  {
    id: 'integrations',
    icon: 'Plug',
    title: 'Seamless Integrations',
    description:
      'Connect your entire tech stack with our extensive integration ecosystem. From popular SaaS tools to custom APIs, integration has never been easier.',
    image: '/images/devices-01.jpg',
    imageAlt: 'Integration ecosystem illustration',
    subFeatures: [
      '100+ pre-built integrations',
      'Custom API and webhook support',
      'No-code automation builder',
      'Two-way data synchronization',
    ],
  },
];

/** Use cases for Features page */
export const useCases: UseCase[] = [
  {
    id: 'startups',
    persona: 'Startups',
    title: 'Scale Without Limits',
    description:
      'From MVP to enterprise, our platform grows with you. Focus on building your product while we handle the infrastructure.',
    benefits: [
      'Free tier for early-stage startups',
      'Automatic scaling as you grow',
      'Startup-friendly pricing',
      'Dedicated success manager',
    ],
  },
  {
    id: 'enterprise',
    persona: 'Enterprise',
    title: 'Enterprise-Ready Solutions',
    description:
      'Meet the demands of large organizations with advanced security, compliance, and dedicated support.',
    benefits: [
      'Custom SLAs and contracts',
      'Advanced security controls',
      'Dedicated infrastructure options',
      'Priority support and onboarding',
    ],
  },
  {
    id: 'developers',
    persona: 'Developers',
    title: 'Built for Developers',
    description:
      'Powerful APIs, comprehensive documentation, and developer-friendly tools to build faster.',
    benefits: [
      'REST and GraphQL APIs',
      'SDKs for popular languages',
      'Comprehensive documentation',
      'Active developer community',
    ],
  },
  {
    id: 'agencies',
    persona: 'Agencies',
    title: 'Deliver Excellence',
    description:
      'Manage multiple client projects efficiently with multi-tenant architecture and white-label options.',
    benefits: [
      'Multi-client management',
      'White-label capabilities',
      'Client billing and reporting',
      'Team collaboration tools',
    ],
  },
];

/** Feature comparison data */
export const featureComparison: ComparisonFeature[] = [
  {
    category: 'Core Features',
    features: [
      { name: 'Unlimited Projects', productValue: true, competitorValue: 'Limited' },
      { name: 'Real-time Collaboration', productValue: true, competitorValue: true },
      { name: 'Advanced Analytics', productValue: true, competitorValue: false },
      { name: 'Custom Integrations', productValue: true, competitorValue: 'Enterprise only' },
      { name: 'Mobile Apps', productValue: true, competitorValue: true },
    ],
  },
  {
    category: 'Security & Compliance',
    features: [
      { name: 'SOC 2 Type II', productValue: true, competitorValue: true },
      { name: 'GDPR Compliant', productValue: true, competitorValue: true },
      { name: 'End-to-End Encryption', productValue: true, competitorValue: false },
      { name: 'Advanced SSO', productValue: 'All plans', competitorValue: 'Enterprise only' },
      { name: 'Audit Logs', productValue: true, competitorValue: '90 days only' },
    ],
  },
  {
    category: 'Support',
    features: [
      { name: 'Email Support', productValue: true, competitorValue: true },
      { name: 'Live Chat', productValue: 'All plans', competitorValue: 'Paid plans only' },
      { name: 'Phone Support', productValue: 'Pro+', competitorValue: 'Enterprise only' },
      {
        name: 'Dedicated Account Manager',
        productValue: 'Enterprise',
        competitorValue: 'Enterprise only',
      },
      { name: 'SLA Guarantee', productValue: '99.99%', competitorValue: '99.9%' },
    ],
  },
];

/** Feature statistics for stats section */
export const featureStats = [
  { value: 99.99, suffix: '%', label: 'Uptime SLA', prefix: '' },
  { value: 150, suffix: '+', label: 'Integrations', prefix: '' },
  { value: 50, suffix: 'ms', label: 'Avg Response Time', prefix: '<' },
  { value: 10, suffix: 'B+', label: 'Requests Processed', prefix: '' },
] as const;
