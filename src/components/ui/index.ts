/**
 * UI Components Export
 *
 * Centralized exports for all UI components.
 *
 * @module components/ui
 */

// Image optimization
export { default as OptimizedImage } from './OptimizedImage.astro';

// Theme
export { ThemeToggle } from './ThemeToggle';
export { default as ThemeToggleDefault } from './ThemeToggle';
export {
  GradientBackground,
  StaticGradientBackground,
  SubtleGradientBackground,
  HeroGradientBackground,
} from './GradientBackground';
export { default as GradientBackgroundDefault } from './GradientBackground';

// Layout
export { Container, NarrowContainer, WideContainer, FullContainer } from './Container';
export { default as ContainerDefault } from './Container';
export { Section, HeroSection, FeatureSection, CTASection, ContentSection } from './Section';
export { default as SectionDefault } from './Section';

// Navigation
export { MobileNavigation, MobileMenuButton } from './MobileNavigation';
export { default as MobileNavigationDefault } from './MobileNavigation';

// Demo Links
export { DemoLinkModal, useDemoLinkModal } from './DemoLinkModal';
export { default as DemoLinkModalDefault } from './DemoLinkModal';
export { DemoLink, DemoLinkButton, useIsDemoLink } from './DemoLink';
export { default as DemoLinkDefault } from './DemoLink';

// Buttons
export { Button, IconButton, ButtonGroup } from './Button';
export { default as ButtonDefault } from './Button';

// Badges
export { Badge, StatusBadge, CounterBadge } from './Badge';
export { default as BadgeDefault } from './Badge';

// Links
export { Link, ExternalLinkComponent as ExternalLink, NavLink, ArrowLink, SkipLink } from './Link';
export { default as LinkDefault } from './Link';

// Cards
export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardImage,
  HoverableCard,
} from './Card';
export { GlassmorphicCard } from './GlassmorphicCard';
export type { GlassmorphicCardProps } from './GlassmorphicCard';
export { FeatureCard } from './FeatureCard';
export type { FeatureCardProps } from './FeatureCard';
export { PricingCard } from './PricingCard';
export type { PricingCardProps, PricingFeature } from './PricingCard';
export { TestimonialCard } from './TestimonialCard';
export type { TestimonialCardProps } from './TestimonialCard';
export { BentoGrid, BentoGridItem } from './BentoGrid';
export type { BentoGridProps, BentoGridItemProps } from './BentoGrid';
export { IntegrationLogo } from './IntegrationLogo';
export type { IntegrationLogoProps } from './IntegrationLogo';
export { LogoCloud } from './LogoCloud';
export type { LogoCloudProps } from './LogoCloud';
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './Accordion';
export type {
  AccordionProps,
  AccordionItemProps,
  AccordionTriggerProps,
  AccordionContentProps,
} from './Accordion';
export { AnimatedCounter } from './AnimatedCounter';
export type { AnimatedCounterProps } from './AnimatedCounter';
export { default as CardDefault } from './Card';

// Future UI components will be exported here
// etc.
