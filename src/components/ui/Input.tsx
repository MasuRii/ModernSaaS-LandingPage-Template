import * as React from 'react';
import { cn } from '../../utils/cn';

/**
 * Input Props Interface
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Optional label for the input */
  label?: string;
  /** Optional helper text displayed below the input */
  helperText?: string;
  /** Error message to display (sets error state) */
  error?: string;
  /** Whether the input should take up the full width of its container */
  fullWidth?: boolean;
  /** Additional CSS classes for the container */
  containerClassName?: string;
}

/**
 * Input Component
 *
 * A versatile, accessible input component with support for labels,
 * helper text, error states, and full light/dark mode support.
 *
 * @example
 * ```tsx
 * // Default input
 * <Input placeholder="Enter your name" />
 *
 * // With label and helper text
 * <Input
 *   label="Email"
 *   type="email"
 *   placeholder="name@example.com"
 *   helperText="We'll never share your email."
 * />
 *
 * // Error state
 * <Input
 *   label="Password"
 *   type="password"
 *   error="Password must be at least 8 characters."
 * />
 * ```
 */
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type = 'text',
      label,
      helperText,
      error,
      fullWidth = false,
      id,
      containerClassName = '',
      ...props
    },
    ref,
  ) => {
    // Generate unique IDs for accessibility if not provided
    const generatedId = React.useId();
    const inputId = id || generatedId;
    const helperId = `${inputId}-helper`;
    const errorId = `${inputId}-error`;

    return (
      <div
        className={cn('flex flex-col gap-1.5', fullWidth ? 'w-full' : 'w-auto', containerClassName)}
      >
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium text-text-primary select-none">
            {label}
          </label>
        )}
        <div className="relative">
          <input
            ref={ref}
            type={type}
            id={inputId}
            className={cn(
              'flex h-10 w-full rounded-lg border border-border-default bg-bg-primary px-3 py-2 text-base ring-offset-bg-primary transition-all duration-200 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-border-default dark:bg-bg-primary dark:focus-visible:ring-primary-400',
              error
                ? 'border-error-500 focus-visible:ring-error-500 dark:border-error-400 dark:focus-visible:ring-error-400'
                : 'hover:border-border-primary',
              className,
            )}
            aria-describedby={cn(helperText && !error && helperId, error && errorId)}
            aria-invalid={!!error}
            {...props}
          />
        </div>
        {error ? (
          <p
            id={errorId}
            className="text-xs font-medium text-error-600 dark:text-error-400 animate-in fade-in slide-in-from-top-1 duration-200"
            role="alert"
          >
            {error}
          </p>
        ) : helperText ? (
          <p id={helperId} className="text-xs text-text-muted">
            {helperText}
          </p>
        ) : null}
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
export { Input };
