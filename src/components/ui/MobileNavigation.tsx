import React, { useCallback, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { siteNavigation } from '../../config/site';
import { ROUTES } from '../../config/paths';

/**
 * Props for the MobileNavigation component
 */
export interface MobileNavigationProps {
  /** Whether the mobile menu is open */
  isOpen: boolean;
  /** Callback when the menu should be closed */
  onClose: () => void;
  /** Whether to show the CTA button */
  showCta?: boolean;
  /** CTA button text */
  ctaText?: string;
  /** CTA button href */
  ctaHref?: string;
  /** Callback when CTA is clicked */
  onCtaClick?: () => void;
}

/**
 * Get all focusable elements within a container
 */
function getFocusableElements(container: HTMLElement): HTMLElement[] {
  const focusableSelectors = [
    'a[href]',
    'button:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    'textarea:not([disabled])',
    '[tabindex]:not([tabindex="-1"])',
  ].join(', ');

  return Array.from(container.querySelectorAll(focusableSelectors)).filter(
    (el): el is HTMLElement => {
      // Filter out hidden elements
      const style = window.getComputedStyle(el);
      return style.display !== 'none' && style.visibility !== 'hidden';
    },
  );
}

/**
 * Custom hook to trap focus within the mobile navigation when open
 */
function useFocusTrap(
  containerRef: React.RefObject<HTMLElement | null>,
  isActive: boolean,
  onEscape: () => void,
): void {
  const previouslyFocusedElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isActive) {
      // Restore focus when menu closes
      if (previouslyFocusedElement.current) {
        previouslyFocusedElement.current.focus();
      }
      return;
    }

    // Store the currently focused element
    previouslyFocusedElement.current = document.activeElement as HTMLElement;

    // Focus the first focusable element in the container
    const container = containerRef.current;
    if (container) {
      const focusableElements = getFocusableElements(container);
      const firstElement = focusableElements[0];
      if (firstElement) {
        firstElement.focus();
      }
    }

    // Handle Tab key navigation
    const handleTabKey = (event: KeyboardEvent): void => {
      if (event.key !== 'Tab' || !containerRef.current) return;

      const focusableElements = getFocusableElements(containerRef.current);
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      // If Shift+Tab on first element, wrap to last
      if (event.shiftKey && firstElement && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement?.focus();
      }
      // If Tab on last element, wrap to first
      else if (!event.shiftKey && lastElement && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement?.focus();
      }
    };

    // Handle Escape key
    const handleEscapeKey = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        onEscape();
      }
    };

    document.addEventListener('keydown', handleTabKey);
    document.addEventListener('keydown', handleEscapeKey);

    return (): void => {
      document.removeEventListener('keydown', handleTabKey);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isActive, containerRef, onEscape]);
}

/**
 * MobileNavigation Component
 *
 * A full-featured mobile navigation drawer with:
 * - Focus trap when open (accessibility requirement)
 * - Smooth open/close animations
 * - Navigation links from site config
 * - Theme toggle
 * - Primary CTA button
 * - Backdrop overlay with click-to-close
 * - Escape key handling
 * - Reduced motion support
 *
 * @example
 * ```tsx
 * <MobileNavigation
 *   isOpen={isMobileMenuOpen}
 *   onClose={closeMobileMenu}
 * />
 * ```
 *
 * @example
 * ```tsx
 * <MobileNavigation
 *   isOpen={isMobileMenuOpen}
 *   onClose={closeMobileMenu}
 *   showCta={true}
 *   ctaText="Start Free Trial"
 *   onCtaClick={() => console.log('CTA clicked')}
 * />
 * ```
 */
export function MobileNavigation({
  isOpen,
  onClose,
  showCta = true,
  ctaText = 'Get Started',
  ctaHref = ROUTES.SIGNUP,
  onCtaClick,
}: MobileNavigationProps): React.ReactElement | null {
  const containerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Apply focus trap
  useFocusTrap(containerRef as React.RefObject<HTMLElement | null>, isOpen, onClose);

  // Handle body scroll lock
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return (): void => {
        document.body.style.overflow = originalOverflow;
      };
    }
    return undefined;
  }, [isOpen]);

  // Handle CTA click
  const handleCtaClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>): void => {
      onClose();
      if (onCtaClick) {
        e.preventDefault();
        onCtaClick();
      }
    },
    [onClose, onCtaClick],
  );

  // Handle navigation link click
  const handleNavClick = useCallback((): void => {
    onClose();
  }, [onClose]);

  // Reduced motion check
  const prefersReducedMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const animationDuration = prefersReducedMotion ? '0ms' : '300ms';

  if (!isOpen) {
    return null;
  }

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
        onClick={onClose}
        aria-hidden="true"
        style={{
          animation: `fadeIn ${animationDuration} ease-out`,
        }}
      />

      {/* Mobile navigation drawer */}
      <div
        ref={containerRef}
        id="mobile-navigation"
        className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-bg-primary border-l border-border-default shadow-2xl z-50 md:hidden flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        style={{
          animation: `slideIn ${animationDuration} ease-out`,
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-border-default">
          <span className="text-lg font-semibold text-text-primary">Menu</span>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="p-2 text-text-secondary hover:text-text-primary hover:bg-bg-secondary rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" aria-hidden="true" />
          </button>
        </div>

        {/* Navigation links */}
        <nav
          className="flex-1 overflow-y-auto py-4 px-4"
          role="navigation"
          aria-label="Mobile navigation"
        >
          <ul className="space-y-1">
            {siteNavigation.main.map((item, index) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={handleNavClick}
                  className="block px-4 py-3 text-base font-medium text-text-secondary hover:text-text-primary hover:bg-bg-secondary rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                  style={{
                    animation: prefersReducedMotion
                      ? undefined
                      : `fadeInUp ${300 + index * 50}ms ease-out`,
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer with theme toggle and CTA */}
        <div className="border-t border-border-default p-4 space-y-4">
          {/* Theme toggle */}
          <div className="flex items-center justify-between px-4 py-2">
            <span className="text-sm font-medium text-text-secondary">Theme</span>
            <ThemeToggle aria-label="Toggle theme" />
          </div>

          {/* CTA Button */}
          {showCta && (
            <a
              href={ctaHref}
              onClick={handleCtaClick}
              className="block w-full px-4 py-3 text-center text-base font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
            >
              {ctaText}
            </a>
          )}
        </div>
      </div>

      {/* CSS animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}

/**
 * Props for the MobileMenuButton component
 */
export interface MobileMenuButtonProps {
  /** Whether the menu is currently open */
  isOpen: boolean;
  /** Callback when the button is clicked */
  onClick: () => void;
  /** Additional CSS classes */
  className?: string;
}

/**
 * MobileMenuButton Component
 *
 * The hamburger menu button that triggers the mobile navigation.
 * Changes icon between hamburger and close based on open state.
 *
 * @example
 * ```tsx
 * <MobileMenuButton
 *   isOpen={isMobileMenuOpen}
 *   onClick={toggleMobileMenu}
 * />
 * ```
 */
export function MobileMenuButton({
  isOpen,
  onClick,
  className = '',
}: MobileMenuButtonProps): React.ReactElement {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`p-2 text-text-secondary hover:text-text-primary hover:bg-bg-secondary rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 ${className}`}
      aria-expanded={isOpen}
      aria-controls="mobile-navigation"
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      {isOpen ? (
        <X className="w-6 h-6" aria-hidden="true" />
      ) : (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      )}
    </button>
  );
}

export default MobileNavigation;
