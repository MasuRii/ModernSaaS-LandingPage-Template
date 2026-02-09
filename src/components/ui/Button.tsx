import * as React from 'react';
import { Loader2 } from 'lucide-react';

/**
 * Button Variants
 *
 * - primary: Filled button for primary actions (CTAs)
 * - secondary: Filled button with secondary color for secondary actions
 * - outline: Bordered button with transparent background
 * - ghost: Transparent button with hover background
 */
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';

/**
 * Button Sizes
 *
 * - sm: Small buttons for compact layouts
 * - md: Default size for most use cases
 * - lg: Large buttons for prominent CTAs
 */
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Button Props Interface
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant */
  variant?: ButtonVariant;
  /** Size of the button */
  size?: ButtonSize;
  /** Loading state - shows spinner and disables button */
  loading?: boolean;
  /** Full width button */
  fullWidth?: boolean;
  /** Icon to display before text */
  leftIcon?: React.ReactNode;
  /** Icon to display after text */
  rightIcon?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Children content */
  children: React.ReactNode;
}

/**
 * Button Component
 *
 * A versatile, accessible button component with multiple variants, sizes,
 * and states. Supports icons, loading state, and full customization.
 *
 * @example
 * ```tsx
 * // Primary button (default)
 * <Button>Get Started</Button>
 *
 * // Secondary button
 * <Button variant="secondary">Learn More</Button>
 *
 * // Outline button
 * <Button variant="outline">Cancel</Button>
 *
 * // Ghost button
 * <Button variant="ghost">Close</Button>
 *
 * // Loading state
 * <Button loading>Submitting...</Button>
 *
 * // With icons
 * <Button leftIcon={<Icon />}>Download</Button>
 * <Button rightIcon={<Icon />}>Next</Button>
 * ```
 */
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      disabled = false,
      fullWidth = false,
      leftIcon,
      rightIcon,
      className = '',
      children,
      type = 'button',
      ...props
    },
    ref,
  ) => {
    // Base styles shared across all variants
    const baseStyles = `
      inline-flex
      items-center
      justify-center
      font-medium
      transition-all
      duration-200
      ease-out
      focus-visible:outline-none
      focus-visible:ring-2
      focus-visible:ring-primary-500
      focus-visible:ring-offset-2
      focus-visible:ring-offset-bg-primary
      disabled:pointer-events-none
      disabled:opacity-50
      cursor-pointer
      shrink-0
    `;

    // Variant-specific styles
    const variantStyles: Record<ButtonVariant, string> = {
      primary: `
        bg-primary-600
        text-white
        border
        border-transparent
        hover:bg-primary-700
        hover:shadow-md
        active:bg-primary-800
        dark:bg-primary-500
        dark:hover:bg-primary-600
        dark:active:bg-primary-700
        dark:focus-visible:ring-primary-400
      `,
      secondary: `
        bg-secondary-600
        text-white
        border
        border-transparent
        hover:bg-secondary-700
        hover:shadow-md
        active:bg-secondary-800
        dark:bg-secondary-500
        dark:hover:bg-secondary-600
        dark:active:bg-secondary-700
        dark:focus-visible:ring-secondary-400
      `,
      outline: `
        bg-transparent
        text-text-primary
        border
        border-border-primary
        hover:bg-bg-secondary
        hover:border-border-secondary
        active:bg-bg-tertiary
        dark:border-border-primary
        dark:hover:bg-bg-secondary
        dark:hover:border-border-secondary
      `,
      ghost: `
        bg-transparent
        text-text-primary
        border
        border-transparent
        hover:bg-bg-secondary
        active:bg-bg-tertiary
        dark:hover:bg-bg-secondary
      `,
    };

    // Size-specific styles
    const sizeStyles: Record<ButtonSize, string> = {
      sm: 'h-8 px-3 text-sm gap-1.5 rounded-md',
      md: 'h-10 px-4 text-base gap-2 rounded-lg',
      lg: 'h-12 px-6 text-lg gap-2.5 rounded-lg',
    };

    // Icon size adjustments based on button size
    const iconSizes: Record<ButtonSize, number> = {
      sm: 14,
      md: 16,
      lg: 20,
    };

    // Combine all classes
    const classes = [
      baseStyles,
      variantStyles[variant],
      sizeStyles[size],
      fullWidth ? 'w-full' : '',
      loading ? 'cursor-wait' : '',
      className,
    ]
      .join(' ')
      .replace(/\s+/g, ' ')
      .trim();

    // Loading spinner component
    const LoadingSpinner = (
      <Loader2 className="animate-spin" size={iconSizes[size]} aria-hidden="true" />
    );

    return (
      <button
        ref={ref}
        type={type}
        className={classes}
        disabled={disabled || loading}
        aria-disabled={disabled || loading}
        aria-busy={loading}
        {...props}
      >
        {loading ? (
          <>
            {LoadingSpinner}
            <span>{children}</span>
          </>
        ) : (
          <>
            {leftIcon && (
              <span className="inline-flex shrink-0" aria-hidden="true">
                {leftIcon}
              </span>
            )}
            <span>{children}</span>
            {rightIcon && (
              <span className="inline-flex shrink-0" aria-hidden="true">
                {rightIcon}
              </span>
            )}
          </>
        )}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;

/**
 * Icon Button Component
 *
 * A compact button variant designed for icon-only actions.
 * Maintains accessibility while providing a square button format.
 */
export interface IconButtonProps extends Omit<ButtonProps, 'leftIcon' | 'rightIcon' | 'children'> {
  /** Icon to display */
  icon: React.ReactNode;
  /** Accessible label for the icon */
  'aria-label': string;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, size = 'md', className = '', ...props }, ref) => {
    const sizeClasses: Record<ButtonSize, string> = {
      sm: 'h-8 w-8 p-1.5',
      md: 'h-10 w-10 p-2',
      lg: 'h-12 w-12 p-2.5',
    };

    return (
      <Button ref={ref} size={size} className={`${sizeClasses[size]} ${className}`} {...props}>
        {icon}
      </Button>
    );
  },
);

IconButton.displayName = 'IconButton';

/**
 * Button Group Component
 *
 * Groups related buttons together with proper spacing and responsive behavior.
 */
export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /** Stack buttons vertically on small screens */
  stackOnMobile?: boolean;
  /** Full width on mobile */
  fullWidthMobile?: boolean;
}

export const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ children, stackOnMobile = false, fullWidthMobile = false, className = '', ...props }, ref) => {
    const classes = [
      'flex',
      'flex-wrap',
      'gap-3',
      stackOnMobile ? 'flex-col sm:flex-row' : '',
      fullWidthMobile ? '[&>*]:w-full sm:[&>*]:w-auto' : '',
      className,
    ]
      .join(' ')
      .replace(/\s+/g, ' ')
      .trim();

    return (
      <div ref={ref} className={classes} role="group" {...props}>
        {children}
      </div>
    );
  },
);

ButtonGroup.displayName = 'ButtonGroup';
