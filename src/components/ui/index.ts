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

// Future UI components will be exported here
// export { default as Card } from './Card';
// etc.
