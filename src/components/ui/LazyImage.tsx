import * as React from 'react';
import { cn } from '@/utils/cn';
import { Skeleton } from './Skeleton';

export interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /**
   * Optional placeholder to show while the image is loading.
   * If true, shows a Skeleton component.
   * If a React node, renders that node.
   * @default true
   */
  placeholder?: boolean | React.ReactNode;
  /**
   * Additional CSS classes for the container
   */
  containerClassName?: string;
  /**
   * Aspect ratio for the container to prevent layout shift (e.g., '16/9')
   */
  aspectRatio?: string | undefined;
}

/**
 * LazyImage Component
 *
 * An enhanced image component that supports:
 * - Native lazy loading
 * - Blur-up transition effect
 * - Skeleton placeholder to prevent CLS (Cumulative Layout Shift)
 * - Error handling
 */
export const LazyImage = React.forwardRef<HTMLImageElement, LazyImageProps>(
  (
    {
      src,
      alt,
      loading = 'lazy',
      className,
      containerClassName,
      placeholder = true,
      aspectRatio,
      onLoad,
      onError,
      ...props
    },
    ref,
  ) => {
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [hasError, setHasError] = React.useState(false);

    const handleLoad = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
      setIsLoaded(true);
      if (onLoad) onLoad(event);
    };

    const handleError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
      setHasError(true);
      if (onError) onError(event);
    };

    // If no src, we can't show much
    if (!src) return null;

    return (
      <div
        className={cn('relative overflow-hidden bg-bg-tertiary/20', containerClassName)}
        style={{ aspectRatio }}
      >
        {/* Placeholder / Skeleton */}
        {!isLoaded && !hasError && placeholder && (
          <div className="absolute inset-0 z-0">
            {placeholder === true ? (
              <Skeleton className="w-full h-full rounded-none" />
            ) : (
              placeholder
            )}
          </div>
        )}

        {/* Error State */}
        {hasError && (
          <div className="absolute inset-0 flex items-center justify-center bg-bg-tertiary text-text-muted text-xs p-2 text-center">
            Failed to load image
          </div>
        )}

        {/* Actual Image */}
        <img
          ref={ref}
          src={src}
          alt={alt}
          loading={loading}
          onLoad={handleLoad}
          onError={handleError}
          className={cn(
            'transition-opacity duration-500 ease-in-out',
            isLoaded ? 'opacity-100' : 'opacity-0',
            className,
          )}
          {...props}
        />
      </div>
    );
  },
);

LazyImage.displayName = 'LazyImage';
