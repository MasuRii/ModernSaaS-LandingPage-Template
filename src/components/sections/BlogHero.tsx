import * as React from 'react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { GradientBackground } from '../ui/GradientBackground';
import { blogMetadata } from '@/data/blog';

/**
 * BlogHero Component
 *
 * The hero section for the blog listing page.
 * Features a large title and description with a subtle mesh gradient background.
 */
export const BlogHero: React.FC = () => {
  return (
    <Section
      background="default"
      padding="lg"
      className="relative overflow-hidden border-b border-border-muted"
    >
      <GradientBackground variant="default" className="opacity-10" />
      <Container className="relative z-10 text-center py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary mb-6 tracking-tight">
            The ModernSaaS Blog
          </h1>
          <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto">
            {blogMetadata.description}
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default BlogHero;
