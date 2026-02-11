import React from 'react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { motion } from 'motion/react';

export interface ChangelogHeroProps {
  title?: string;
  description?: string;
}

export const ChangelogHero: React.FC<ChangelogHeroProps> = ({
  title = 'Changelog',
  description = 'Stay up to date with the latest features, improvements, and fixes to ModernSaaS.',
}) => {
  return (
    <Section background="gradient" padding="xl" className="relative overflow-hidden">
      <Container size="narrow" className="text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
        >
          {description}
        </motion.p>
      </Container>
    </Section>
  );
};
