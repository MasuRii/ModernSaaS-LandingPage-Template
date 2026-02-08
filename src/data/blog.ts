/**
 * Blog data types and placeholder data
 * Used for Blog listing page and individual blog posts
 */

/** Blog post category */
export type BlogCategory =
  | 'product'
  | 'engineering'
  | 'company'
  | 'tutorials'
  | 'industry'
  | 'announcements';

/** Blog post author */
export interface BlogAuthor {
  id: string;
  name: string;
  role: string;
  avatar: string;
  bio: string;
  social?: {
    twitter?: string;
    linkedin?: string;
  };
}

/** Individual blog post */
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content?: string;
  category: BlogCategory;
  author: BlogAuthor;
  publishedAt: string;
  updatedAt?: string;
  readingTime: number;
  featured: boolean;
  coverImage: string;
  tags: string[];
  relatedPosts?: string[];
}

/** Blog category metadata */
export interface BlogCategoryMeta {
  id: BlogCategory;
  label: string;
  description: string;
  color: string;
}

// ============================================
// Placeholder Data
// ============================================

/** Blog categories */
export const blogCategories: BlogCategoryMeta[] = [
  {
    id: 'product',
    label: 'Product',
    description: 'Product updates, features, and tips',
    color: 'blue',
  },
  {
    id: 'engineering',
    label: 'Engineering',
    description: 'Technical deep dives and engineering stories',
    color: 'purple',
  },
  {
    id: 'company',
    label: 'Company',
    description: 'News, culture, and behind the scenes',
    color: 'green',
  },
  {
    id: 'tutorials',
    label: 'Tutorials',
    description: 'Step-by-step guides and how-tos',
    color: 'orange',
  },
  {
    id: 'industry',
    label: 'Industry',
    description: 'Industry trends and insights',
    color: 'red',
  },
  {
    id: 'announcements',
    label: 'Announcements',
    description: 'Major updates and announcements',
    color: 'pink',
  },
];

/** Blog authors */
export const blogAuthors: BlogAuthor[] = [
  {
    id: 'alex-chen',
    name: 'Alexandra Chen',
    role: 'CEO & Co-Founder',
    avatar: '/images/team-01.jpg',
    bio: 'Alexandra is the CEO and co-founder of ModernSaaS. She writes about product strategy, leadership, and the future of work.',
    social: {
      twitter: 'https://twitter.com/alexchen',
      linkedin: 'https://linkedin.com/in/alexchen',
    },
  },
  {
    id: 'marcus-johnson',
    name: 'Marcus Johnson',
    role: 'CTO & Co-Founder',
    avatar: '/images/team-02.jpg',
    bio: "Marcus leads engineering at ModernSaaS. He's passionate about distributed systems, scalability, and developer experience.",
    social: {
      twitter: 'https://twitter.com/marcusj',
      linkedin: 'https://linkedin.com/in/marcusj',
    },
  },
  {
    id: 'sarah-mitchell',
    name: 'Sarah Mitchell',
    role: 'Lead Engineer',
    avatar: '/images/team-03.jpg',
    bio: 'Sarah is a lead engineer focused on frontend architecture and performance. She contributes to open source and writes about modern web development.',
    social: {
      twitter: 'https://twitter.com/sarahcodes',
      linkedin: 'https://linkedin.com/in/sarahmitchell',
    },
  },
  {
    id: 'emily-rodriguez',
    name: 'Emily Rodriguez',
    role: 'Head of Marketing',
    avatar: '/images/team-01.jpg',
    bio: 'Emily leads growth and marketing at ModernSaaS. She writes about SaaS marketing, growth strategies, and customer success.',
    social: {
      twitter: 'https://twitter.com/emilyr',
      linkedin: 'https://linkedin.com/in/emilyr',
    },
  },
];

/** Blog posts */
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'introducing-modern-saas-2-0',
    title: 'Introducing ModernSaaS 2.0: The Future of Team Collaboration',
    excerpt:
      "We're excited to announce the biggest update in our history. ModernSaaS 2.0 brings AI-powered features, real-time collaboration, and a completely redesigned interface.",
    category: 'announcements',
    author: blogAuthors[0]!,
    publishedAt: '2026-02-01',
    readingTime: 5,
    featured: true,
    coverImage: '/images/tech-01.jpg',
    tags: ['product', 'announcement', 'AI', 'collaboration'],
    relatedPosts: ['2', '3'],
  },
  {
    id: '2',
    slug: 'building-scalable-apis',
    title: 'Building Scalable APIs: Lessons from 10 Billion Requests',
    excerpt:
      'How we designed and built our API infrastructure to handle massive scale while maintaining sub-100ms response times globally.',
    category: 'engineering',
    author: blogAuthors[1]!,
    publishedAt: '2026-01-25',
    readingTime: 12,
    featured: false,
    coverImage: '/images/tech-02.jpg',
    tags: ['engineering', 'api', 'scalability', 'performance'],
    relatedPosts: ['1', '4'],
  },
  {
    id: '3',
    slug: 'state-of-saas-2026',
    title: 'State of SaaS 2026: Trends Shaping the Industry',
    excerpt:
      'An in-depth analysis of the trends defining the SaaS landscape in 2026, from AI integration to vertical SaaS and everything in between.',
    category: 'industry',
    author: blogAuthors[0]!,
    publishedAt: '2026-01-18',
    readingTime: 8,
    featured: true,
    coverImage: '/images/abstract-01.jpg',
    tags: ['industry', 'trends', 'SaaS', 'AI'],
    relatedPosts: ['1', '5'],
  },
  {
    id: '4',
    slug: 'modern-css-architecture',
    title: 'Modern CSS Architecture: From Chaos to Clarity',
    excerpt:
      'A deep dive into how we restructured our CSS using modern methodologies like CUBE CSS and Tailwind for maintainable, scalable styles.',
    category: 'engineering',
    author: blogAuthors[2]!,
    publishedAt: '2026-01-12',
    readingTime: 10,
    featured: false,
    coverImage: '/images/abstract-02.jpg',
    tags: ['engineering', 'css', 'frontend', 'architecture'],
    relatedPosts: ['2', '6'],
  },
  {
    id: '5',
    slug: 'customer-success-framework',
    title: 'The Customer Success Framework That Scaled to 10K Customers',
    excerpt:
      'How we built a customer success operation that maintains a 95% satisfaction score while scaling from 100 to 10,000 customers.',
    category: 'company',
    author: blogAuthors[3]!,
    publishedAt: '2026-01-08',
    readingTime: 7,
    featured: false,
    coverImage: '/images/office-01.jpg',
    tags: ['company', 'customer-success', 'scaling', 'growth'],
    relatedPosts: ['3', '6'],
  },
  {
    id: '6',
    slug: 'getting-started-guide',
    title: 'Getting Started with ModernSaaS: A Complete Guide',
    excerpt:
      'New to ModernSaaS? This comprehensive guide will walk you through everything you need to know to get up and running in under 30 minutes.',
    category: 'tutorials',
    author: blogAuthors[2]!,
    publishedAt: '2026-01-05',
    readingTime: 15,
    featured: false,
    coverImage: '/images/devices-01.jpg',
    tags: ['tutorial', 'getting-started', 'onboarding', 'guide'],
    relatedPosts: ['4', '5'],
  },
  {
    id: '7',
    slug: 'new-dashboard-features',
    title: 'New Dashboard Features: Custom Widgets and Advanced Filters',
    excerpt:
      "We've completely revamped the dashboard experience. Learn about custom widgets, advanced filtering, and the new drag-and-drop interface.",
    category: 'product',
    author: blogAuthors[0]!,
    publishedAt: '2025-12-20',
    readingTime: 6,
    featured: false,
    coverImage: '/images/tech-03.jpg',
    tags: ['product', 'features', 'dashboard', 'ui'],
    relatedPosts: ['1', '8'],
  },
  {
    id: '8',
    slug: 'security-best-practices',
    title: 'Security Best Practices for Modern SaaS Applications',
    excerpt:
      'A technical guide to implementing security best practices in your SaaS application, from authentication to data encryption.',
    category: 'engineering',
    author: blogAuthors[1]!,
    publishedAt: '2025-12-15',
    readingTime: 11,
    featured: false,
    coverImage: '/images/abstract-03.jpg',
    tags: ['engineering', 'security', 'best-practices', 'tutorial'],
    relatedPosts: ['2', '7'],
  },
];

/** Featured blog post (hero section) */
export const featuredBlogPost = blogPosts[0];

/** Blog page metadata */
export const blogMetadata = {
  title: 'Blog | ModernSaaS',
  description: 'Insights, tutorials, and updates from the ModernSaaS team.',
  keywords: ['blog', 'SaaS', 'productivity', 'engineering', 'tutorials'],
} as const;

/** Newsletter CTA for blog */
export const blogNewsletter = {
  title: 'Stay Updated',
  description: 'Get the latest articles, tutorials, and product updates delivered to your inbox.',
  placeholder: 'Enter your email',
  buttonText: 'Subscribe',
  successMessage: 'Thanks for subscribing! Check your inbox for a confirmation email.',
} as const;

/** Popular tags for blog filtering */
export const popularTags = [
  'product',
  'engineering',
  'AI',
  'tutorial',
  'scalability',
  'growth',
  'security',
  'design',
] as const;
