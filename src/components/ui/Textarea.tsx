import * as React from 'react';
import { cn } from '../../utils/cn';

/**
 * Textarea Props Interface
 */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Optional label for the textarea */
  label?: string | undefined;
  /** Optional helper text displayed below the textarea */
  helperText?: string | undefined;
  /** Error message to display (sets error state) */
  error?: string | undefined;
  /** Whether the textarea should take up the full width of its container */
  fullWidth?: boolean | undefined;
  /** Whether to show a character count */
  showCharacterCount?: boolean | undefined;
  /** Maximum number of characters allowed */
  maxLength?: number | undefined;
  /** Additional CSS classes for the container */
  containerClassName?: string | undefined;
}

/**
 * Textarea Component
 *
 * A versatile, accessible multi-line input component with support for labels,
 * helper text, error states, character counts, and full light/dark mode support.
 *
 * @example
 * ```tsx
 * // Default textarea
 * <Textarea placeholder="Enter your message" />
 *
 * // With label and character count
 * <Textarea
 *   label="Bio"
 *   placeholder="Tell us about yourself"
 *   showCharacterCount
 *   maxLength={500}
 * />
 *
 * // Error state
 * <Textarea
 *   label="Comment"
 *   error="Comment is too short."
 * />
 * ```
 */
const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      label,
      helperText,
      error,
      fullWidth = false,
      showCharacterCount = false,
      maxLength,
      id,
      containerClassName = '',
      value,
      defaultValue,
      onChange,
      ...props
    },
    ref,
  ) => {
    // Generate unique IDs for accessibility if not provided
    const generatedId = React.useId();
    const textareaId = id || generatedId;
    const helperId = `${textareaId}-helper`;
    const errorId = `${textareaId}-error`;

    // Manage character count state if uncontrolled or controlled
    const [charCount, setCharCount] = React.useState(String(value || defaultValue || '').length);

    const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCharCount(e.target.value.length);
      if (onChange) {
        onChange(e);
      }
    };

    // Update character count when value changes (for controlled component)
    React.useEffect(() => {
      if (value !== undefined) {
        setCharCount(String(value).length);
      }
    }, [value]);

    return (
      <div
        className={cn('flex flex-col gap-1.5', fullWidth ? 'w-full' : 'w-auto', containerClassName)}
      >
        <div className="flex items-center justify-between">
          {label && (
            <label
              htmlFor={textareaId}
              className="text-sm font-medium text-text-primary select-none"
            >
              {label}
            </label>
          )}
          {showCharacterCount && maxLength && (
            <span
              className={cn(
                'text-xs text-text-muted select-none',
                charCount > maxLength ? 'text-error-600 dark:text-error-400' : '',
              )}
            >
              {charCount} / {maxLength}
            </span>
          )}
        </div>
        <div className="relative">
          <textarea
            ref={ref}
            id={textareaId}
            maxLength={maxLength}
            onChange={handleTextareaChange}
            value={value}
            defaultValue={defaultValue}
            className={cn(
              'flex min-h-[80px] w-full rounded-lg border border-border-default bg-bg-primary px-3 py-2 text-base ring-offset-bg-primary transition-all duration-200 placeholder:text-text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-border-default dark:bg-bg-primary dark:focus-visible:ring-primary-400',
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

Textarea.displayName = 'Textarea';

export default Textarea;
export { Textarea };
