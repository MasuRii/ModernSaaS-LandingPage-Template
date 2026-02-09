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
export type {
  SkeletonProps,
  SkeletonTextProps,
  SkeletonAvatarProps,
  SkeletonCardProps,
} from './Skeleton';
export { CodeBlock } from './CodeBlock';
export type { CodeBlockProps } from './CodeBlock';
export { default as CardDefault } from './Card';

// Future UI components will be exported here
// etc.
