import * as React from 'react';
import { type Variants, motion } from 'framer-motion';
import { Container, GradientBackground, Section } from '@/components/ui';
import { PRESETS } from '@/config/animation';
import { company } from '@/config/site';
import { cn } from '@/utils/cn';

/**
 * Props for the CompanyStory component
 */
export interface CompanyStoryProps {
  /**
   * Additional CSS classes to apply
   */
  className?: string;
}

/**
 * CompanyStory Section Component
 *
 * This component implements both the About Hero (Mission) and the
 * Company Story (Origin & Vision) sections as defined in the
 * about page wireframes.
 *
 * Features:
 * - High-impact mission statement with animated background
 * - Split-layout origin story with image placeholder
 * - Vision and current state subsections
 * - Responsive design (stacked on mobile, side-by-side on desktop)
 * - Theme-aware styling for light and dark modes
 */
export const CompanyStory: React.FC<CompanyStoryProps> = ({ className }) => {
  return (
    <div className={cn('flex flex-col', className)}>
      {/* About Hero Section (Mission) */}
      <Section
        id="about-hero"
        className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden"
        background="transparent"
        aria-label="About Hero - Our Mission"
      >
        <GradientBackground
          id="about-hero-gradient"
          variant="subtle"
          intensity={0.4}
          className="opacity-30 dark:opacity-10"
        />

        <Container className="relative z-10">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={PRESETS.fadeInUp as unknown as Variants}
            >
              <h2 className="text-sm font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 mb-4">
                Our Mission
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary mb-8 leading-[1.1]">
                {company.mission}
              </h1>
              <p className="text-lg md:text-xl text-text-muted leading-relaxed max-w-3xl mx-auto">
                {company.fullDescription}
              </p>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Company Story Section (Origin, Today, Future) */}
      <Section
        id="company-story"
        className="py-16 lg:py-24"
        background="default"
        aria-label="Company Story - Our Journey"
      >
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Left Column: Image Placeholder */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '-100px' }}
              variants={PRESETS.fadeInRight as unknown as Variants}
              className="relative aspect-[5/6] w-full max-w-[500px] mx-auto lg:mx-0 rounded-2xl overflow-hidden bg-surface-secondary border border-border shadow-md"
            >
              <div className="absolute inset-0 flex items-center justify-center text-text-muted text-sm font-medium">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-surface-primary flex items-center justify-center shadow-sm">
                    <svg
                      className="w-8 h-8 opacity-20"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span>Team / Office Photo Placeholder</span>
                  <span className="text-xs opacity-60">500 x 600</span>
                </div>
              </div>
              {/* Optional: Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </motion.div>

            {/* Right Column: Text Content */}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: '-100px' }}
              variants={PRESETS.fadeInLeft as unknown as Variants}
              className="flex flex-col"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-8">
                Where We Started
              </h2>

              <div className="space-y-6 text-text-muted leading-relaxed">
                <p>
                  Founded in {company.foundedYear}, we set out to solve a simple problem: making
                  collaboration effortless for remote teams. What started as a weekend project
                  between two friends has grown into a platform used by thousands of companies
                  worldwide.
                </p>
                <p>
                  Our journey began with a focus on simplicity and accessibility. We believed that
                  enterprise-grade tools shouldn&apos;t be restricted to large corporations with
                  massive budgets.
                </p>
              </div>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">Today</h3>
                  <p className="text-text-muted leading-relaxed">
                    We&apos;re a team of passionate individuals across 12 countries, united by a
                    shared vision of democratizing access to intelligent automation tools.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">The Future</h3>
                  <p className="text-text-muted leading-relaxed">{company.vision}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

CompanyStory.displayName = 'CompanyStory';

export default CompanyStory;
