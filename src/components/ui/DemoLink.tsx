/**
 * Demo Link Component
 *
 * A wrapper component that automatically triggers the demo link modal
 * when a link matching demo patterns is clicked. For non-demo links,
 * it behaves like a normal anchor tag.
 *
 * @module components/ui
 */

import React, { useCallback, useState } from 'react';
import { DemoLinkModal } from './DemoLinkModal';
import { type DemoLinkCategory, isDemoLink } from '../../config/demoLinks';
import { featureFlags } from '../../config/site';

/**
 * Props for the DemoLink component
 */
export interface DemoLinkProps {
  /** The href URL for the link */
  href: string;
  /** Link content (text or elements) */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string | undefined;
  /** Link title attribute */
  title?: string | undefined;
  /** Whether to force demo mode regardless of feature flag */
  forceDemo?: boolean | undefined;
  /** Custom category override for the modal content (for future use) */
  _category?: DemoLinkCategory | undefined;
  /** Custom modal title override */
  modalTitle?: string | undefined;
  /** Custom modal message override */
  modalMessage?: string | undefined;
  /** Custom modal description override */
  modalDescription?: string | undefined;
  /** Callback when the modal is opened */
  onModalOpen?: ((url: string) => void) | undefined;
  /** Callback when the modal is closed */
  onModalClose?: (() => void) | undefined;
  /** Callback when URL is copied from modal */
  onCopy?: ((url: string) => void) | undefined;
  /** Additional props to pass to the anchor element */
  [key: string]: unknown;
}

/**
 * DemoLink Component
 *
 * Wraps an anchor tag and automatically intercepts clicks on demo/placeholder
 * links to show the DemoLinkModal. For regular links, it behaves normally.
 *
 * Features:
 * - Automatic demo link detection
 * - Modal trigger for placeholder links
 * - Normal navigation for non-demo links
 * - Configurable via featureFlags.demoMode
 * - Customizable modal content
 * - Full accessibility support
 *
 * @example
 * ```tsx
 * // This will show the demo modal
 * <DemoLink href="/dashboard">
 *   Go to Dashboard
 * </DemoLink>
 * ```
 *
 * @example
 * ```tsx
 * // This will navigate normally (not a demo link)
 * <DemoLink href="/features">
 *   View Features
 * </DemoLink>
 * ```
 *
 * @example
 * ```tsx
 * // Force demo mode for a specific link
 * <DemoLink href="/custom" forceDemo>
 *   Custom Feature
 * </DemoLink>
 * ```
 *
 * @example
 * ```tsx
 * // With custom modal content
 * <DemoLink
 *   href="/special"
 *   modalTitle="Coming Soon"
 *   modalMessage="This feature is under development."
 * >
 *   Special Feature
 * </DemoLink>
 * ```
 */
export function DemoLink({
  href,
  children,
  className = '',
  title,
  forceDemo = false,
  _category,
  modalTitle,
  modalMessage,
  modalDescription,
  onModalOpen,
  onModalClose,
  onCopy,
  ...anchorProps
}: DemoLinkProps): React.ReactElement {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Check if this link should trigger the demo modal
  const shouldTriggerDemo = forceDemo || (featureFlags.demoMode && isDemoLink(href));

  // Handle click event
  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>): void => {
      if (shouldTriggerDemo) {
        event.preventDefault();
        setIsModalOpen(true);
        onModalOpen?.(href);
      }
      // Otherwise, let the default navigation happen
    },
    [shouldTriggerDemo, href, onModalOpen],
  );

  // Handle modal close
  const handleClose = useCallback((): void => {
    setIsModalOpen(false);
    onModalClose?.();
  }, [onModalClose]);

  return (
    <>
      <a
        href={href}
        onClick={handleClick}
        className={className}
        title={title}
        {...(shouldTriggerDemo
          ? {
              role: 'button',
              'aria-haspopup': 'dialog',
              'aria-expanded': isModalOpen,
            }
          : {})}
        {...anchorProps}
      >
        {children}
      </a>

      {/* Demo Link Modal */}
      {shouldTriggerDemo && (
        <DemoLinkModal
          isOpen={isModalOpen}
          onClose={handleClose}
          url={href}
          title={modalTitle}
          message={modalMessage}
          description={modalDescription}
          onCopy={onCopy}
        />
      )}
    </>
  );
}

/**
 * Props for the DemoLinkButton component
 */
export interface DemoLinkButtonProps {
  /** The href URL for the link */
  href: string;
  /** Link content (text or elements) */
  children: React.ReactNode;
  /** Link title attribute */
  title?: string | undefined;
  /** Whether to force demo mode regardless of feature flag */
  forceDemo?: boolean;
  /** Custom category override for the modal content */
  category?: DemoLinkCategory;
  /** Custom modal title override */
  modalTitle?: string | undefined;
  /** Custom modal message override */
  modalMessage?: string | undefined;
  /** Custom modal description override */
  modalDescription?: string | undefined;
  /** Callback when the modal is opened */
  onModalOpen?: (url: string) => void;
  /** Callback when the modal is closed */
  onModalClose?: () => void;
  /** Callback when URL is copied from modal */
  onCopy?: (url: string) => void;
  /** Button variant style */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  /** Button size */
  size?: 'sm' | 'md' | 'lg';
  /** Full width button */
  fullWidth?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Additional props to pass to the anchor element */
  [key: string]: unknown;
}

/**
 * DemoLinkButton Component
 *
 * A button-styled version of DemoLink that looks like a button but functions
 * as a link (or demo modal trigger).
 *
 * @example
 * ```tsx
 * <DemoLinkButton href="/dashboard" variant="primary">
 *   Go to Dashboard
 * </DemoLinkButton>
 * ```
 */
export function DemoLinkButton({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...demoLinkProps
}: DemoLinkButtonProps): React.ReactElement {
  // Base button styles
  const baseStyles =
    'inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2';

  // Variant styles
  const variantStyles = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700',
    secondary: 'bg-secondary-600 text-white hover:bg-secondary-700',
    outline:
      'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-950/30',
    ghost: 'text-text-secondary hover:text-text-primary hover:bg-bg-secondary',
  };

  // Size styles
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  // Full width style
  const widthStyle = fullWidth ? 'w-full' : '';

  // Combine all styles
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`;

  return <DemoLink {...demoLinkProps} className={combinedClassName} />;
}

/**
 * Hook to check if a URL is a demo link
 * @param url - The URL to check
 * @returns True if the URL would trigger the demo modal
 *
 * @example
 * ```tsx
 * const isDemo = useIsDemoLink('/dashboard'); // true
 * const isNotDemo = useIsDemoLink('/features'); // false
 * ```
 */
export function useIsDemoLink(url: string): boolean {
  return featureFlags.demoMode && isDemoLink(url);
}

/**
 * Utility to conditionally render content based on demo link status
 * @param url - The URL to check
 * @param demoContent - Content to render if it's a demo link
 * @param normalContent - Content to render if it's a normal link
 * @returns The appropriate content
 *
 * @example
 * ```tsx
 * {renderDemoLinkContent(
 *   '/dashboard',
 *   <span>Dashboard (Demo)</span>,
 *   <span>Dashboard</span>
 * )}
 * ```
 */
export function renderDemoLinkContent(
  url: string,
  demoContent: React.ReactNode,
  normalContent: React.ReactNode,
): React.ReactNode {
  return useIsDemoLink(url) ? demoContent : normalContent;
}

export default DemoLink;
