import React, { useCallback, useEffect, useState } from 'react';
import { Zap } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { MobileMenuButton, MobileNavigation } from '../ui/MobileNavigation';
import { company, siteNavigation } from '../../config/site';
import { ROUTES } from '../../config/paths';

/**
 * Props for the Header component
 */
export interface HeaderProps {
  /** Additional CSS classes */
  className?: string;
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
 * Header Component
 *
 * Provides the main site navigation with:
 * - Sticky header with scroll-based background transition
 * - Logo with link to homepage
 * - Navigation links from site configuration
 * - Theme toggle button
 * - Primary CTA button
 * - Mobile hamburger menu with slide-out drawer
 * - Full accessibility support
 *
 * The header transitions from transparent to solid background on scroll
 * for a modern, immersive experience while maintaining readability.
 *
 * @example
 * ```tsx
 * <Header />
 * ```
 *
 * @example
 * ```tsx
 * <Header
 *   showCta={true}
 *   ctaText="Get Started"
 *   onCtaClick={() => console.log('CTA clicked')}
 * />
 * ```
 */
export function Header({
  className = '',
  showCta = true,
  ctaText = 'Get Started',
  ctaHref = ROUTES.SIGNUP,
  onCtaClick,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect for background transition
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 10);
  }, []);

  useEffect(() => {
    // Check initial scroll position
    handleScroll();

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  // Handle CTA click
  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onCtaClick) {
      e.preventDefault();
      onCtaClick();
    }
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Close mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Header background styles based on scroll state
  const headerBackground = isScrolled
    ? 'bg-bg-primary/95 backdrop-blur-md shadow-sm border-b border-border-default'
    : 'bg-transparent';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-out ${headerBackground} ${className}`}
        role="banner"
        aria-label="Site header"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a
              href={ROUTES.HOME}
              className="flex items-center gap-2 text-text-primary hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 rounded-lg"
              aria-label={`${company.name} - Home`}
            >
              <div className="w-8 h-8 lg:w-9 lg:h-9 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
                <Zap className="w-5 h-5 lg:w-6 lg:h-6 text-white" aria-hidden="true" />
              </div>
              <span className="text-lg lg:text-xl font-bold tracking-tight">{company.name}</span>
            </a>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex items-center gap-1"
              role="navigation"
              aria-label="Main navigation"
            >
              {siteNavigation.main.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-text-secondary hover:text-text-primary rounded-lg hover:bg-bg-secondary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center gap-2 lg:gap-4">
              {/* Theme Toggle - Desktop */}
              <ThemeToggle aria-label="Toggle theme" className="hidden sm:flex" />

              {/* CTA Button - Desktop */}
              {showCta && (
                <a
                  href={ctaHref}
                  onClick={handleCtaClick}
                  className="hidden md:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2"
                >
                  {ctaText}
                </a>
              )}

              {/* Mobile Menu Button */}
              <MobileMenuButton
                isOpen={isMobileMenuOpen}
                onClick={toggleMobileMenu}
                className="md:hidden"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <MobileNavigation
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
        showCta={showCta}
        ctaText={ctaText}
        ctaHref={ctaHref}
        {...(onCtaClick ? { onCtaClick } : {})}
      />
    </>
  );
}

/**
 * Props for the MinimalHeader variant
 */
export interface MinimalHeaderProps {
  /** Additional CSS classes */
  className?: string;
  /** Logo href */
  logoHref?: string;
}

/**
 * MinimalHeader Component
 *
 * A simplified header variant for auth pages, 404 pages, and other
 * secondary pages that don't need full navigation.
 *
 * @example
 * ```tsx
 * <MinimalHeader />
 * ```
 */
export function MinimalHeader({ className = '', logoHref = ROUTES.HOME }: MinimalHeaderProps) {
  return (
    <header
      className={`w-full py-4 px-4 sm:px-6 lg:px-8 ${className}`}
      role="banner"
      aria-label="Site header"
    >
      <div className="max-w-7xl mx-auto">
        <a
          href={logoHref}
          className="inline-flex items-center gap-2 text-text-primary hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600 focus-visible:ring-offset-2 rounded-lg"
          aria-label={`${company.name} - Home`}
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" aria-hidden="true" />
          </div>
          <span className="text-lg font-bold tracking-tight">{company.name}</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
