/**
 * AnimatedElement Component
 *
 * A declarative wrapper around Motion One for React components.
 * Supports presets, custom animations, scroll triggers, and reduced motion.
 *
 * @see docs/research/ANIMATION_STRATEGY.md
 */

import React, { forwardRef, useEffect, useRef } from 'react';
import { type AnimationOptions, type Easing, animate, inView } from 'motion';
import { getAccessibleDuration, useReducedMotion } from '@/utils/reducedMotion';
import { DURATIONS, EASINGS, type EasingDefinition, PRESETS } from '@/config/animation';

// ============================================================================
// Types
// ============================================================================

type HTMLIntrinsicElements = keyof React.JSX.IntrinsicElements;

export interface AnimatedElementProps extends React.HTMLAttributes<HTMLElement> {
  /** HTML element to render */
  as?: HTMLIntrinsicElements;
  /** Animation preset name */
  preset?: keyof typeof PRESETS;
  /** Custom keyframes for animation */
  keyframes?: Record<string, unknown[]>;
  /** Animation duration in seconds */
  duration?: number;
  /** Animation easing (bezier array) */
  ease?: EasingDefinition;
  /** Delay before animation starts */
  delay?: number;
  /** Trigger animation when element comes into view */
  triggerOnView?: boolean;
  /** Only animate once (vs every time element enters view) */
  once?: boolean;
  /** Threshold for intersection observer (0-1) */
  threshold?: number;
  /** Root margin for intersection observer */
  rootMargin?: string;
  /** Transform origin for scale/rotate animations */
  transformOrigin?: string;
  /** Children to render inside */
  children?: React.ReactNode;
  /** CSS class names */
  className?: string;
  /** Inline styles */
  style?: React.CSSProperties;
}

// ============================================================================
// Component
// ============================================================================

export const AnimatedElement = forwardRef<HTMLElement, AnimatedElementProps>(
  (
    {
      as: Component = 'div',
      preset,
      keyframes,
      duration = DURATIONS.normal,
      ease = EASINGS.easeOut,
      delay = 0,
      triggerOnView = false,
      once = true,
      threshold = 0.1,
      rootMargin,
      transformOrigin = 'center',
      children,
      className,
      style,
      ...props
    },
    forwardedRef,
  ) => {
    const internalRef = useRef<HTMLElement>(null);
    const elementRef = (forwardedRef || internalRef) as React.RefObject<HTMLElement>;
    const { prefersReducedMotion } = useReducedMotion();

    useEffect(() => {
      const element = elementRef.current;
      if (!element) return;

      // Handle reduced motion
      if (prefersReducedMotion) {
        // Set final state immediately
        if (preset && PRESETS[preset]) {
          const presetConfig = PRESETS[preset];
          Object.entries(presetConfig.animate).forEach(([key, value]) => {
            if (typeof value === 'number' || typeof value === 'string') {
              (element.style as unknown as Record<string, string>)[key] = String(value);
            }
          });
        } else if (keyframes) {
          Object.entries(keyframes).forEach(([key, values]) => {
            const lastValue = values[values.length - 1];
            if (typeof lastValue === 'number' || typeof lastValue === 'string') {
              (element.style as unknown as Record<string, string>)[key] = String(lastValue);
            }
          });
        }
        return undefined;
      }

      // Set transform origin
      element.style.transformOrigin = transformOrigin;

      // Build animation configuration
      const animationOptions: AnimationOptions = {
        duration: getAccessibleDuration(duration, prefersReducedMotion),
        ease: ease as Easing,
        delay,
      };

      // Determine keyframes to use
      let finalKeyframes: Record<string, unknown[]>;

      if (preset && PRESETS[preset]) {
        const presetConfig = PRESETS[preset];
        finalKeyframes = {};
        Object.entries(presetConfig.initial).forEach(([key]) => {
          finalKeyframes[key] = [presetConfig.initial[key], presetConfig.animate[key]];
        });
        // Use preset duration/ease if not overridden
        if (duration === DURATIONS.normal && presetConfig.transition?.duration) {
          animationOptions.duration = presetConfig.transition.duration;
        }
        if (ease === EASINGS.easeOut && presetConfig.transition?.ease) {
          animationOptions.ease = presetConfig.transition.ease as Easing;
        }
      } else if (keyframes) {
        finalKeyframes = keyframes;
      } else {
        // Default fade in
        finalKeyframes = { opacity: [0, 1] };
      }

      // Run animation
      const runAnimation = () => {
        animate(element, finalKeyframes, animationOptions);
      };

      if (triggerOnView) {
        const cleanup = inView(
          element,
          () => {
            runAnimation();
            return once ? undefined : () => {};
          },
          {
            amount: threshold,
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            margin: rootMargin as any,
          },
        );

        return () => cleanup();
      } else {
        runAnimation();
      }

      return undefined;
    }, [
      preset,
      keyframes,
      duration,
      ease,
      delay,
      triggerOnView,
      once,
      threshold,
      rootMargin,
      transformOrigin,
      prefersReducedMotion,
      elementRef,
    ]);

    return React.createElement(
      Component,
      {
        ref: elementRef,
        className,
        style,
        ...props,
      },
      children,
    );
  },
);

AnimatedElement.displayName = 'AnimatedElement';

// ============================================================================
// Convenience Components
// ============================================================================

/** Fade in animation wrapper */
export const FadeIn = forwardRef<HTMLElement, Omit<AnimatedElementProps, 'preset'>>(
  (props, ref) => <AnimatedElement ref={ref} preset="fadeIn" {...props} />,
);
FadeIn.displayName = 'FadeIn';

/** Fade in from bottom */
export const FadeInUp = forwardRef<HTMLElement, Omit<AnimatedElementProps, 'preset'>>(
  (props, ref) => <AnimatedElement ref={ref} preset="fadeInUp" {...props} />,
);
FadeInUp.displayName = 'FadeInUp';

/** Scale in animation wrapper */
export const ScaleIn = forwardRef<HTMLElement, Omit<AnimatedElementProps, 'preset'>>(
  (props, ref) => <AnimatedElement ref={ref} preset="scaleIn" {...props} />,
);
ScaleIn.displayName = 'ScaleIn';

/** Slide up animation wrapper */
export const SlideUp = forwardRef<HTMLElement, Omit<AnimatedElementProps, 'preset'>>(
  (props, ref) => <AnimatedElement ref={ref} preset="slideUp" {...props} />,
);
SlideUp.displayName = 'SlideUp';

/** Stagger container for child animations */
export interface StaggerContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Delay between each child animation */
  staggerDelay?: number;
  /** Initial delay before first child */
  initialDelay?: number;
  /** Animation preset for children */
  childPreset?: keyof typeof PRESETS;
  /** Custom keyframes for children */
  childKeyframes?: Record<string, unknown[]>;
  /** Trigger when container comes into view */
  triggerOnView?: boolean;
  /** Only animate once */
  once?: boolean;
  /** Threshold for intersection observer (0-1) */
  threshold?: number;
  /** Root margin for intersection observer */
  rootMargin?: string;
  children: React.ReactNode;
}

export const StaggerContainer = forwardRef<HTMLDivElement, StaggerContainerProps>(
  (
    {
      staggerDelay = 0.1,
      initialDelay = 0,
      childPreset = 'fadeInUp',
      childKeyframes,
      triggerOnView = true,
      once = true,
      threshold = 0.1,
      rootMargin,
      children,
      className,
      ...props
    },
    ref,
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const resolvedRef = (ref || containerRef) as React.RefObject<HTMLDivElement>;
    const { prefersReducedMotion } = useReducedMotion();

    useEffect(() => {
      const container = resolvedRef.current;
      if (!container) return undefined;

      const childElements = Array.from(container.children) as HTMLElement[];

      if (prefersReducedMotion) {
        // Set final state immediately
        const preset = PRESETS[childPreset];
        if (preset) {
          childElements.forEach((child) => {
            Object.entries(preset.animate).forEach(([key, value]) => {
              if (typeof value === 'number' || typeof value === 'string') {
                (child.style as unknown as Record<string, string>)[key] = String(value);
              }
            });
          });
        }
        return undefined;
      }

      const runAnimations = () => {
        childElements.forEach((child, index) => {
          let finalKeyframes: Record<string, unknown[]>;

          if (childKeyframes) {
            finalKeyframes = childKeyframes;
          } else {
            const preset = PRESETS[childPreset];
            if (!preset) return;
            finalKeyframes = {};
            Object.entries(preset.initial).forEach(([key]) => {
              finalKeyframes[key] = [preset.initial[key], preset.animate[key]];
            });
          }

          const delay = initialDelay + index * staggerDelay;

          animate(child, finalKeyframes, {
            duration: DURATIONS.normal,
            ease: EASINGS.easeOut as Easing,
            delay,
          });
        });
      };

      if (triggerOnView) {
        const cleanup = inView(container, runAnimations, {
          amount: threshold,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          margin: rootMargin as any,
        });
        return () => cleanup();
      } else {
        runAnimations();
      }

      return undefined;
    }, [
      childPreset,
      childKeyframes,
      staggerDelay,
      initialDelay,
      triggerOnView,
      once,
      prefersReducedMotion,
      resolvedRef,
    ]);

    return (
      <div ref={resolvedRef} className={className} {...props}>
        {children}
      </div>
    );
  },
);

StaggerContainer.displayName = 'StaggerContainer';

// ============================================================================
// Default Export
// ============================================================================

export default AnimatedElement;
