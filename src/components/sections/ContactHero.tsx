import * as React from 'react';
import { type Variants, motion } from 'framer-motion';
import { Container, GradientBackground, Section } from '@/components/ui';
import { PRESETS } from '@/config/animation';
import { pageSEO } from '@/config/site';
import { cn } from '@/utils/cn';

/**
 * Props for the ContactHero component
 */
export interface ContactHeroProps {
  /**
   * Additional CSS classes to apply
   */
  className?: string;
}

/**
 * ContactHero Section Component
 *
 * The hero section for the Contact page, providing a friendly invitation
 * for users to get in touch.
 */
export const ContactHero: React.FC<ContactHeroProps> = ({ className }) => {
  const { description } = pageSEO.contact;

  return (
    <Section
      id="contact-hero"
      className={cn(
        'relative pt-20 pb-12 lg:pt-32 lg:pb-16 overflow-hidden min-h-[30vh] flex items-center',
        className,
      )}
      background="transparent"
      aria-label="Contact Hero Section"
    >
      {/* Background with mesh gradient */}
      <GradientBackground
        id="contact-hero-gradient"
        variant="subtle"
        intensity={0.4}
        className="opacity-30 dark:opacity-10"
      />

      <Container className="relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            animate="animate"
            variants={PRESETS.fadeInUp as unknown as Variants}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-text-primary mb-6 leading-[1.1]">
              Get in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400">
                touch
              </span>
            </h1>
            <p className="text-lg md:text-xl text-text-muted mb-8 leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

ContactHero.displayName = 'ContactHero';

export default ContactHero;
