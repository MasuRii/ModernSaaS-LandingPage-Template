import React from 'react';
import { Section } from '../ui/Section';
import { Container } from '../ui/Container';
import { motion } from 'framer-motion';

export interface LegalHeroProps {
  title: string;
  lastUpdated: string;
}

export const LegalHero: React.FC<LegalHeroProps> = ({ title, lastUpdated }) => {
  return (
    <Section
      background="primary"
      padding="lg"
      className="overflow-hidden relative border-b border-border-muted"
    >
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary-500/10 rounded-full blur-[120px]" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-6 tracking-tight"
          >
            {title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-text-secondary"
          >
            Last Updated: {lastUpdated}
          </motion.p>
        </div>
      </Container>
    </Section>
  );
};
