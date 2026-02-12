import * as React from 'react';

/**
 * Props for brand icon components.
 * Mirrors the lucide-react LucideProps interface for drop-in compatibility.
 */
export interface BrandIconProps extends React.SVGAttributes<SVGSVGElement> {
  /** Icon size (width and height). Accepts number (px) or string. */
  size?: string | number;
}

/**
 * Creates a brand icon component with the given SVG path data.
 * All brand icons use a 24x24 viewBox with filled paths.
 */
function createBrandIcon(displayName: string, path: string) {
  const Icon = React.forwardRef<SVGSVGElement, BrandIconProps>(
    ({ size = 24, className, ...props }, ref) => (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        {...props}
      >
        <path d={path} />
      </svg>
    ),
  );
  Icon.displayName = displayName;
  return Icon;
}

/**
 * GitHub brand icon (octocat silhouette).
 * Replaces deprecated `Github` from lucide-react.
 * @see https://simpleicons.org/?q=github
 */
export const GithubIcon = createBrandIcon(
  'GithubIcon',
  'M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z',
);

/**
 * LinkedIn brand icon.
 * Replaces deprecated `Linkedin` from lucide-react.
 * @see https://simpleicons.org/?q=linkedin
 */
export const LinkedinIcon = createBrandIcon(
  'LinkedinIcon',
  'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
);

/**
 * Twitter brand icon (classic bird).
 * Replaces deprecated `Twitter` from lucide-react.
 * @see https://simpleicons.org/?q=twitter
 */
export const TwitterIcon = createBrandIcon(
  'TwitterIcon',
  'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z',
);

/**
 * Facebook brand icon.
 * Replaces deprecated `Facebook` from lucide-react.
 * @see https://simpleicons.org/?q=facebook
 */
export const FacebookIcon = createBrandIcon(
  'FacebookIcon',
  'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
);

/**
 * YouTube brand icon.
 * Replaces deprecated `Youtube` from lucide-react.
 * @see https://simpleicons.org/?q=youtube
 */
export const YoutubeIcon = createBrandIcon(
  'YoutubeIcon',
  'M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
);

/**
 * Chrome/Chromium brand icon.
 * Replaces deprecated `Chrome` / `Chromium` from lucide-react.
 * @see https://simpleicons.org/?q=googlechrome
 */
export const ChromeIcon = createBrandIcon(
  'ChromeIcon',
  'M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0112 6.545h10.691A12 12 0 0012 0zM1.931 5.47A11.943 11.943 0 000 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 01-6.865-2.29zm13.342 2.166a5.446 5.446 0 011.45 7.09l.002.001h-.002l-3.952 6.848c.404.037.812.06 1.229.06 6.627 0 12-5.373 12-12 0-1.19-.176-2.337-.495-3.426zM12 8.009a3.991 3.991 0 100 7.982 3.991 3.991 0 000-7.982z',
);
