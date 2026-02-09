import React from 'react';
import { Section } from '@/components/ui/Section';
import { Container } from '@/components/ui/Container';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/Accordion';
import { type PricingFAQ, pricingFAQs } from '@/data/pricing';

/**
 * Props for the FAQSection component
 */
export interface FAQSectionProps {
  /** Optional heading override */
  heading?: string;
  /** Optional subheading override */
  subheading?: string;
  /** Optional FAQ data override */
  faqs?: PricingFAQ[];
  /** Additional CSS classes */
  className?: string;
}

/**
 * FAQSection Component
 *
 * Displays a list of frequently asked questions using an Accordion component.
 * Uses pricingFAQs as the default data source.
 */
export const FAQSection: React.FC<FAQSectionProps> = ({
  heading = 'Frequently Asked Questions',
  subheading = 'Everything you need to know about our product and pricing.',
  faqs = pricingFAQs,
  className,
}) => {
  return (
    <Section
      id="faq"
      background="default"
      padding="lg"
      heading={heading}
      subheading={subheading}
      className={className}
    >
      <Container size="narrow">
        <Accordion type="single" className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg md:text-xl py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base md:text-lg pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </Section>
  );
};

export default FAQSection;
