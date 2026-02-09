import * as React from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../utils/cn';

/**
 * Select Option Interface
 */
export interface SelectOption {
  /** Label to display */
  label: string;
  /** Value of the option */
  value: string | number;
  /** Whether the option is disabled */
  disabled?: boolean;
}

/**
 * Select Props Interface
 */
export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  /** Optional label for the select */
  label?: string;
  /** Optional helper text displayed below the select */
  helperText?: string;
  /** Error message to display (sets error state) */
  error?: string;
  /** Whether the select should take up the full width of its container */
  fullWidth?: boolean;
  /** Options for the select */
  options?: SelectOption[];
  /** Additional CSS classes for the container */
  containerClassName?: string;
}

/**
 * Select Component
 *
 * A versatile, accessible select component with support for labels,
 * helper text, error states, and full light/dark mode support.
 *
 * @example
 * ```tsx
 * // Default select
 * <Select
 *   options={[
 *     { label: 'Option 1', value: '1' },
 *     { label: 'Option 2', value: '2' },
 *   ]}
 * />
 *
 * // With label and helper text
 * <Select
 *   label="Project Category"
 *   options={[
 *     { label: 'Design', value: 'design' },
 *     { label: 'Development', value: 'dev' },
 *   ]}
 *   helperText="Choose the best fit."
 * />
 *
 * // Error state
 * <Select
 *   label="Country"
 *   options={[{ label: 'Select country...', value: '' }]}
 *   error="Please select a country."
 * />
 * ```
 */
const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      className,
      label,
      helperText,
      error,
      fullWidth = false,
      options = [],
      id,
      containerClassName = '',
      children,
      ...props
    },
    ref,
  ) => {
    // Generate unique IDs for accessibility if not provided
    const generatedId = React.useId();
    const selectId = id || generatedId;
    const helperId = `${selectId}-helper`;
    const errorId = `${selectId}-error`;

    return (
      <div
        className={cn('flex flex-col gap-1.5', fullWidth ? 'w-full' : 'w-auto', containerClassName)}
      >
        {label && (
          <label htmlFor={selectId} className="text-sm font-medium text-text-primary select-none">
            {label}
          </label>
        )}
        <div className="relative group">
          <select
            ref={ref}
            id={selectId}
            className={cn(
              'flex h-10 w-full appearance-none rounded-lg border border-border-default bg-bg-primary px-3 py-2 pr-10 text-base ring-offset-bg-primary transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-border-default dark:bg-bg-primary dark:focus-visible:ring-primary-400',
              error
                ? 'border-error-500 focus-visible:ring-error-500 dark:border-error-400 dark:focus-visible:ring-error-400'
                : 'hover:border-border-primary',
              className,
            )}
            aria-describedby={cn(helperText && !error && helperId, error && errorId)}
            aria-invalid={!!error}
            {...props}
          >
            {options.length > 0
              ? options.map((option) => (
                  <option key={option.value} value={option.value} disabled={option.disabled}>
                    {option.label}
                  </option>
                ))
              : children}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-text-muted group-hover:text-text-primary transition-colors duration-200">
            <ChevronDown className="h-4 w-4" />
          </div>
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

Select.displayName = 'Select';

export default Select;
export { Select };
