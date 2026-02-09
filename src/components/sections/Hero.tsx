import * as React from 'react';
import { type Variants, motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import {
  Button,
  Container,
  DemoLink,
  GradientBackground,
  Section,
  Skeleton,
  SocialProofBadge,
} from '@/components/ui';
import { socialProofStats, testimonials } from '@/data';
import { company } from '@/config/site';
import { ROUTES } from '@/config/paths';
import { PRESETS, STAGGER } from '@/config/animation';
import { cn } from '@/utils/cn';

/**
 * Props for the Hero component
 */
export interface HeroProps {
  /**
   * Additional CSS classes to apply
   */
  className?: string;
}

/**
 * Hero Section Component
 *
 * The primary entrance section of the homepage designed to make a strong first impression.
 * Features:
 * - Compelling headline and subheadline from site config
 * - Dual CTAs (Primary + Demo)
 * - Animated mesh gradient background
 * - Product mockup placeholder using Skeleton loaders
 * - Integrated social proof indicators
 * - Entrance animations for all elements
 */
export const Hero: React.FC<HeroProps> = ({ className }) => {
  return (
    <Section
      className={cn(
        'relative min-h-[calc(100vh-72px)] flex items-center overflow-hidden pt-20 pb-16 lg:pt-32 lg:pb-24',
        className,
      )}
      background="transparent"
      id="hero"
      aria-label="Hero Section"
    >
      {/* Background with mesh gradient */}
      <GradientBackground
        variant="vibrant"
        intensity={0.6}
        className="opacity-40 dark:opacity-20"
        aria-label="Animated gradient background"
      />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Column */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={
              {
                initial: PRESETS.stagger?.initial,
                animate: {
                  ...PRESETS.stagger?.animate,
                  transition: {
                    ...STAGGER.hero,
                  },
                },
              } as unknown as Variants
            }
            className="flex flex-col items-start text-left"
          >
            {/* Social Proof Badge */}
            <SocialProofBadge
              className="mb-6"
              variant="rated"
              rating={socialProofStats.rating}
              count={socialProofStats.users}
              avatars={testimonials.slice(0, 3).map((t) => t.author.avatar || '')}
              variants={PRESETS.fadeInUp as unknown as Variants}
            />

            {/* Headline */}
            <motion.h1
              variants={PRESETS.heroEntrance as unknown as Variants}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary mb-6 max-w-[600px] leading-[1.1]"
            >
              Build Faster with{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400">
                {company.name}
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={PRESETS.fadeInUp as unknown as Variants}
              className="text-lg md:text-xl text-text-muted mb-10 max-w-[520px] leading-relaxed"
            >
              {company.tagline}. The all-in-one platform for scaling your business with powerful
              automation tools.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={PRESETS.fadeInUp as unknown as Variants}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Button size="lg" className="px-8" rightIcon={<ArrowRight size={20} />}>
                Get Started
              </Button>
              <DemoLink href={ROUTES.FEATURES}>
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 bg-bg-primary/50 backdrop-blur-sm"
                  leftIcon={<Play size={18} className="fill-current" />}
                >
                  View Demo
                </Button>
              </DemoLink>
            </motion.div>

            {/* Secondary Social Proof */}
            <motion.div
              variants={PRESETS.fadeInUp as unknown as Variants}
              className="mt-10 flex flex-wrap items-center gap-6 opacity-60 grayscale"
            >
              <div className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                Featured In
              </div>
              <div className="flex gap-6 items-center">
                <div className="h-6 w-20 bg-text-muted/20 rounded-md" />
                <div className="h-5 w-24 bg-text-muted/20 rounded-md" />
                <div className="h-6 w-16 bg-text-muted/20 rounded-md" />
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Column - Product Mockup Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative perspective-1000"
          >
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative z-10 w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl border border-border-default bg-bg-primary"
            >
              {/* Product Mockup Content (Simulated Dashboard) */}
              <div className="absolute inset-0 flex flex-col bg-bg-secondary/30">
                {/* Mockup Toolbar */}
                <div className="flex items-center gap-2 px-4 h-10 border-b border-border-default bg-bg-primary/80 backdrop-blur-md">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-error-500/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-warning-500/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-success-500/40" />
                  </div>
                  <div className="mx-auto">
                    <Skeleton className="h-4 w-48 rounded-md opacity-40" />
                  </div>
                </div>

                {/* Mockup Body */}
                <div className="flex-1 flex overflow-hidden">
                  {/* Sidebar */}
                  <div className="w-16 md:w-20 border-r border-border-default bg-bg-primary/40 p-3 space-y-4">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Skeleton key={i} className="h-10 w-full rounded-lg opacity-30" />
                    ))}
                  </div>

                  {/* Main Content */}
                  <div className="flex-1 p-6 space-y-6 overflow-hidden">
                    <div className="flex justify-between items-center mb-2">
                      <Skeleton className="h-8 w-40 rounded-lg opacity-50" />
                      <div className="flex gap-2">
                        <Skeleton className="h-9 w-9 rounded-md opacity-30" />
                        <Skeleton className="h-9 w-24 rounded-md opacity-40" />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <Skeleton className="h-28 rounded-xl opacity-40" />
                      <Skeleton className="h-28 rounded-xl opacity-40" />
                      <Skeleton className="h-28 rounded-xl opacity-40" />
                    </div>

                    <div className="space-y-4 pt-2">
                      <Skeleton className="h-4 w-3/4 rounded opacity-30" />
                      <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <Skeleton className="h-32 rounded-xl opacity-20" />
                          <Skeleton className="h-4 w-full rounded opacity-10" />
                        </div>
                        <div className="space-y-3">
                          <Skeleton className="h-32 rounded-xl opacity-20" />
                          <Skeleton className="h-4 w-full rounded opacity-10" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Decorative background effects */}
            <div className="absolute -top-16 -right-16 w-80 h-80 bg-primary-500/20 blur-[100px] rounded-full -z-10 animate-pulse" />
            <div className="absolute -bottom-16 -left-16 w-80 h-80 bg-secondary-500/20 blur-[100px] rounded-full -z-10 animate-pulse" />

            {/* Floating visual elements (decorations) */}
            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-bg-primary border border-border-default rounded-xl shadow-xl z-20 flex items-center justify-center p-4 hidden md:flex"
            >
              <div className="space-y-2 w-full">
                <div className="flex justify-between">
                  <Skeleton className="h-3 w-1/2 rounded" />
                  <div className="h-3 w-3 rounded-full bg-success-500" />
                </div>
                <Skeleton className="h-2 w-full rounded" />
                <Skeleton className="h-2 w-3/4 rounded" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

Hero.displayName = 'Hero';

export default Hero;
