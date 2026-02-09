import * as React from 'react';
import { type Variants, motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import {
  Button,
  Container,
  DemoLink,
  GradientBackground,
  ProductMockup,
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

          {/* Visual Column - Product Mockup */}
          <div className="relative">
            <ProductMockup
              src="/images/dashboard-mockup.svg"
              alt="Platform Dashboard"
              variant="laptop"
              variants={PRESETS.fadeInRight as unknown as Variants}
              className="z-10"
            />

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
          </div>
        </div>
      </Container>
    </Section>
  );
};

Hero.displayName = 'Hero';

export default Hero;
