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

// Future UI components will be exported here
// export { default as Button } from './Button';
// export { default as Card } from './Card';
// etc.
