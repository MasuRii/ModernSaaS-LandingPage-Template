import React from 'react';
import site from '../../config/site';
import { getCanonicalUrl } from '../../config/paths';

export interface MetaTagsProps {
  /** Page-specific title override */
  title?: string;
  /** Page-specific description override */
  description?: string;
  /** Page-specific canonical URL override */
  canonical?: string;
  /** Robots directive override (default: 'index, follow') */
  robots?: string;
  /** Current page pathname for auto-canonical generation */
  pathname?: string;
}

/**
 * MetaTags Component
 *
 * Renders standard SEO meta tags including title, description,
 * canonical URL, and robots directives.
 * Uses centralized configuration and path resolution.
 */
export const MetaTags: React.FC<MetaTagsProps> = ({
  title,
  description,
  canonical,
  robots,
  pathname = '',
}) => {
  const { seo: defaultSeo, getPageTitle } = site;

  // Use utility from site config for consistent title formatting
  const finalTitle = getPageTitle(title);

  // Description fallback
  const finalDescription = description || defaultSeo.defaultDescription;

  // Canonical URL resolution using centralized paths
  const finalCanonical = canonical || getCanonicalUrl(pathname);

  // Robots directive
  const finalRobots = robots || 'index, follow';

  return (
    <>
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <link rel="canonical" href={finalCanonical} />
      <meta name="robots" content={finalRobots} />

      {/* Standard Meta Tags */}
      <meta name="author" content={defaultSeo.author} />
      <meta name="theme-color" content={defaultSeo.themeColor} />

      {defaultSeo.defaultKeywords.length > 0 && (
        <meta name="keywords" content={defaultSeo.defaultKeywords.join(', ')} />
      )}
    </>
  );
};
