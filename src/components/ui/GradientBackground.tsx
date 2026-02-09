import * as React from 'react';
import { useEffect, useRef } from 'react';
import { useReducedMotion } from '@/utils/reducedMotion';

/**
 * Props for the GradientBackground component
 */
export interface GradientBackgroundProps {
  /**
   * Additional CSS classes to apply
   */
  className?: string;
  /**
   * Variant of gradient mesh pattern
   * @default 'default'
   */
  variant?: 'default' | 'subtle' | 'vibrant';
  /**
   * Enable subtle ambient animation
   * @default true
   */
  animated?: boolean;
  /**
   * Intensity of the gradient effect (0-1)
   * @default 0.5
   */
  intensity?: number;
  /**
   * Whether to apply a blur overlay for depth
   * @default true
   */
  blurOverlay?: boolean;
  /**
   * Custom aria-label for accessibility
   */
  'aria-label'?: string;
  /**
   * Optional ID for deterministic animation keys (useful for snapshots)
   */
  id?: string;
}

/**
 * GradientBackground Component
 *
 * A theme-aware gradient mesh background component that creates beautiful,
 * modern gradient effects for both light and dark modes.
 *
 * Features:
 * - Gradient mesh patterns optimized for light and dark themes
 * - Subtle ambient animation with reduced motion support
 * - Configurable intensity and variant options
 * - Blur overlay option for depth and readability
 * - Fully accessible with proper ARIA labels
 * - GPU-accelerated animations for smooth performance
 *
 * @example
 * ```tsx
 * // Default usage
 * <GradientBackground />
 *
 * // Subtle variant for content sections
 * <GradientBackground variant="subtle" intensity={0.3} />
 *
 * // Vibrant variant for hero sections
 * <GradientBackground variant="vibrant" intensity={0.7} />
 *
 * // Static background (no animation)
 * <GradientBackground animated={false} />
 * ```
 */
export function GradientBackground({
  className = '',
  variant = 'default',
  animated = true,
  intensity = 0.5,
  blurOverlay = true,
  'aria-label': ariaLabel = 'Decorative gradient background',
  id,
}: GradientBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { prefersReducedMotion } = useReducedMotion();

  // Calculate opacity based on intensity (0.2 - 0.8 range)
  const baseOpacity = Math.max(0.2, Math.min(0.8, intensity));

  // Gradient blob configurations for each variant
  const getBlobStyles = () => {
    const variants = {
      default: {
        blob1:
          'bg-gradient-to-br from-[var(--primitive-color-primary-400)] to-[var(--primitive-color-secondary-500)]',
        blob2:
          'bg-gradient-to-tr from-[var(--primitive-color-secondary-400)] to-[var(--primitive-color-accent-400)]',
        blob3:
          'bg-gradient-to-bl from-[var(--primitive-color-accent-300)] to-[var(--primitive-color-primary-300)]',
      },
      subtle: {
        blob1:
          'bg-gradient-to-br from-[var(--primitive-color-primary-300)] to-[var(--primitive-color-secondary-300)]',
        blob2:
          'bg-gradient-to-tr from-[var(--primitive-color-gray-200)] to-[var(--primitive-color-primary-200)]',
        blob3:
          'bg-gradient-to-bl from-[var(--primitive-color-secondary-200)] to-[var(--primitive-color-gray-100)]',
      },
      vibrant: {
        blob1:
          'bg-gradient-to-br from-[var(--primitive-color-primary-500)] to-[var(--primitive-color-secondary-600)]',
        blob2:
          'bg-gradient-to-tr from-[var(--primitive-color-secondary-500)] to-[var(--primitive-color-accent-500)]',
        blob3:
          'bg-gradient-to-bl from-[var(--primitive-color-accent-400)] to-[var(--primitive-color-primary-400)]',
      },
    };
    return variants[variant];
  };

  const blobStyles = getBlobStyles();
  const shouldAnimate = animated && !prefersReducedMotion;

  // Generate unique animation IDs for this instance
  const instanceId = useRef(id || Math.random().toString(36).substr(2, 9)).current;

  useEffect(() => {
    // Inject animation keyframes if animation is enabled
    if (!shouldAnimate) return;

    const styleId = `gradient-animations-${instanceId}`;
    if (document.getElementById(styleId)) return;

    const styleSheet = document.createElement('style');
    styleSheet.id = styleId;
    styleSheet.textContent = `
      @keyframes gradientFloat1-${instanceId} {
        0%, 100% { transform: translate(-20px, -15px); }
        50% { transform: translate(20px, 15px); }
      }
      @keyframes gradientFloat2-${instanceId} {
        0%, 100% { transform: translate(15px, 20px); }
        50% { transform: translate(-15px, -20px); }
      }
      @keyframes gradientFloat3-${instanceId} {
        0%, 100% { transform: translate(-10px, -20px); }
        50% { transform: translate(25px, 10px); }
      }
    `;
    document.head.appendChild(styleSheet);

    return () => {
      const existing = document.getElementById(styleId);
      if (existing) {
        document.head.removeChild(existing);
      }
    };
  }, [shouldAnimate, instanceId]);

  const getAnimationStyle = (blobIndex: number): React.CSSProperties => {
    if (!shouldAnimate) return {};

    const durations = [20, 25, 22];
    const delays = [0, 2, 4];

    return {
      animation: `gradientFloat${blobIndex}-${instanceId} ${durations[blobIndex - 1]}s ease-in-out infinite`,
      animationDelay: `${delays[blobIndex - 1]}s`,
    };
  };

  return (
    <div
      ref={containerRef}
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-label={ariaLabel}
      role="img"
    >
      {/* Gradient Mesh Container */}
      <div className="absolute inset-0">
        {/* Light Mode Gradient Mesh */}
        <div className="absolute inset-0 opacity-100 transition-opacity duration-500 dark:opacity-0">
          {/* Base gradient background */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 80% 50% at 50% -20%, var(--primitive-color-primary-100), transparent),
                radial-gradient(ellipse 60% 40% at 80% 80%, var(--primitive-color-secondary-100), transparent),
                radial-gradient(ellipse 50% 30% at 20% 100%, var(--primitive-color-accent-100), transparent)
              `,
            }}
          />

          {/* Animated gradient blobs */}
          <div
            className={`absolute -left-[10%] -top-[10%] h-[60%] w-[50%] rounded-full ${blobStyles.blob1} opacity-[calc(var(--intensity)*0.4)] blur-[100px]`}
            style={
              {
                '--intensity': baseOpacity,
                ...getAnimationStyle(1),
              } as React.CSSProperties
            }
          />
          <div
            className={`absolute -bottom-[10%] right-[5%] h-[50%] w-[40%] rounded-full ${blobStyles.blob2} opacity-[calc(var(--intensity)*0.35)] blur-[80px]`}
            style={
              {
                '--intensity': baseOpacity,
                ...getAnimationStyle(2),
              } as React.CSSProperties
            }
          />
          <div
            className={`absolute bottom-[20%] left-[10%] h-[40%] w-[35%] rounded-full ${blobStyles.blob3} opacity-[calc(var(--intensity)*0.3)] blur-[60px]`}
            style={
              {
                '--intensity': baseOpacity,
                ...getAnimationStyle(3),
              } as React.CSSProperties
            }
          />
        </div>

        {/* Dark Mode Gradient Mesh */}
        <div className="absolute inset-0 opacity-0 transition-opacity duration-500 dark:opacity-100">
          {/* Base gradient background */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(ellipse 80% 50% at 50% -20%, var(--primitive-color-primary-900), transparent),
                radial-gradient(ellipse 60% 40% at 80% 80%, var(--primitive-color-secondary-900), transparent),
                radial-gradient(ellipse 50% 30% at 20% 100%, var(--primitive-color-accent-900), transparent)
              `,
            }}
          />

          {/* Animated gradient blobs - Dark */}
          <div
            className={`absolute -left-[10%] -top-[10%] h-[60%] w-[50%] rounded-full ${blobStyles.blob1} opacity-[calc(var(--intensity)*0.25)] blur-[100px]`}
            style={
              {
                '--intensity': baseOpacity,
                ...getAnimationStyle(1),
              } as React.CSSProperties
            }
          />
          <div
            className={`absolute -bottom-[10%] right-[5%] h-[50%] w-[40%] rounded-full ${blobStyles.blob2} opacity-[calc(var(--intensity)*0.2)] blur-[80px]`}
            style={
              {
                '--intensity': baseOpacity,
                ...getAnimationStyle(2),
              } as React.CSSProperties
            }
          />
          <div
            className={`absolute bottom-[20%] left-[10%] h-[40%] w-[35%] rounded-full ${blobStyles.blob3} opacity-[calc(var(--intensity)*0.15)] blur-[60px]`}
            style={
              {
                '--intensity': baseOpacity,
                ...getAnimationStyle(3),
              } as React.CSSProperties
            }
          />
        </div>
      </div>

      {/* Noise texture overlay for depth */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Blur overlay for content readability */}
      {blurOverlay && (
        <div
          className="absolute inset-0 transition-opacity duration-300"
          style={{
            background: `radial-gradient(ellipse at center, transparent 0%, var(--color-bg-primary) 70%)`,
            opacity: Math.max(0.3, baseOpacity * 0.5),
          }}
        />
      )}

      {/* Gradient fade to edges for seamless blending */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(to bottom, var(--color-bg-primary) 0%, transparent 15%, transparent 85%, var(--color-bg-primary) 100%),
            linear-gradient(to right, var(--color-bg-primary) 0%, transparent 10%, transparent 90%, var(--color-bg-primary) 100%)
          `,
        }}
      />
    </div>
  );
}

/**
 * GradientBackground Static Variant
 *
 * Pre-configured static background without animation.
 * Use for performance-critical sections or when reduced motion is preferred.
 */
export function StaticGradientBackground({
  className = '',
  variant = 'default',
  intensity = 0.5,
  blurOverlay = true,
  'aria-label': ariaLabel = 'Decorative gradient background',
}: Omit<GradientBackgroundProps, 'animated'>) {
  return (
    <GradientBackground
      className={className}
      variant={variant}
      animated={false}
      intensity={intensity}
      blurOverlay={blurOverlay}
      aria-label={ariaLabel}
    />
  );
}

/**
 * GradientBackground Subtle Variant
 *
 * Pre-configured subtle background for content sections.
 * Lower intensity, minimal animation.
 */
export function SubtleGradientBackground({
  className = '',
  blurOverlay = true,
  'aria-label': ariaLabel = 'Decorative gradient background',
}: Omit<GradientBackgroundProps, 'variant' | 'intensity' | 'animated'>) {
  return (
    <GradientBackground
      className={className}
      variant="subtle"
      intensity={0.3}
      animated={true}
      blurOverlay={blurOverlay}
      aria-label={ariaLabel}
    />
  );
}

/**
 * GradientBackground Hero Variant
 *
 * Pre-configured vibrant background for hero sections.
 * Higher intensity, full animation.
 */
export function HeroGradientBackground({
  className = '',
  blurOverlay = true,
  'aria-label': ariaLabel = 'Decorative gradient background',
}: Omit<GradientBackgroundProps, 'variant' | 'intensity' | 'animated'>) {
  return (
    <GradientBackground
      className={className}
      variant="vibrant"
      intensity={0.7}
      animated={true}
      blurOverlay={blurOverlay}
      aria-label={ariaLabel}
    />
  );
}

export default GradientBackground;
