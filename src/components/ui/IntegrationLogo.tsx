/**
 * Integration Logo Component
 *
 * Displays a partner/integration logo with hover effects and demo modal integration.
 * Supports grayscale-to-color transition and scaling on hover.
 *
 * @module components/ui
 */

import React from 'react';
import { getAssetPath, resolveHref } from '../../config/paths';
import { DemoLink } from './DemoLink';

/**
 * Props for the IntegrationLogo component
 */
export interface IntegrationLogoProps {
  /** The name of the integration/partner */
  name: string;
  /** Path to the logo image file */
  logo: string;
  /** Optional URL for the integration (defaults to # which triggers demo modal if configured) */
  href?: string | undefined;
  /** Size variant of the logo */
  size?: 'sm' | 'md' | 'lg' | undefined;
  /** Whether to apply grayscale effect by default (toggles on hover) */
  grayscale?: boolean | undefined;
  /** Whether to show a background on hover */
  showHoverBg?: boolean | undefined;
  /** Additional CSS classes for the container */
  className?: string | undefined;
  /** Whether to resolve the href using path configuration */
  resolvePath?: boolean | undefined;
}

/**
 * IntegrationLogo Component
 *
 * A specialized component for displaying third-party logos (integrations, customers, partners).
 *
 * Features:
 * - Theme-aware grayscale-to-color hover transition
 * - Scale-up animation on hover
 * - Responsive sizing variants
 * - Automatic path resolution via centralized path config
 * - Seamless integration with DemoLinkModal
 * - Lazy loading for performance
 */
export const IntegrationLogo: React.FC<IntegrationLogoProps> = ({
  name,
  logo,
  href = '#',
  size = 'md',
  grayscale = true,
  showHoverBg = true,
  className = '',
  resolvePath = true,
}) => {
  // Resolve the href
  const resolvedHref = React.useMemo(() => {
    return resolvePath ? resolveHref(href) : href;
  }, [href, resolvePath]);

  // Size-specific height classes
  const sizeClasses = {
    sm: 'h-6 md:h-8',
    md: 'h-8 md:h-12',
    lg: 'h-10 md:h-16',
  };

  // Container styles with hover effects
  const containerClasses = `
    group relative flex items-center justify-center 
    px-4 py-3 rounded-xl transition-all duration-300
    ${showHoverBg ? 'hover:bg-bg-secondary/50 dark:hover:bg-bg-secondary/20' : ''}
    ${className}
  `;

  // Image styles with grayscale and scale transitions
  const imageClasses = `
    ${sizeClasses[size]} w-auto max-w-full
    transition-all duration-500 ease-out
    group-hover:scale-110
    ${
      grayscale
        ? 'grayscale opacity-50 contrast-[0.8] group-hover:grayscale-0 group-hover:opacity-100 group-hover:contrast-100'
        : 'opacity-100'
    }
    dark:invert-[0.2] dark:group-hover:invert-0
  `;

  return (
    <DemoLink href={resolvedHref} className={containerClasses} title={name}>
      <img src={getAssetPath(logo)} alt={`${name} logo`} className={imageClasses} loading="lazy" />
    </DemoLink>
  );
};

export default IntegrationLogo;
