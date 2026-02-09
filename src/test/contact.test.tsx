import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ContactHero, ContactInfo, FAQSection } from '../components/sections';
import { ContactForm } from '../components/forms/ContactForm';
import { ThemeProvider } from '../components/ThemeProvider';
import * as React from 'react';

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

// Mock ResizeObserver
global.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

describe('Contact Page Components', () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => (
    <ThemeProvider defaultTheme="light">{children}</ThemeProvider>
  );

  it('renders ContactHero correctly', () => {
    render(<ContactHero />, { wrapper });
    expect(screen.getByRole('heading', { name: /Get in touch/i })).toBeDefined();
  });

  it('renders ContactForm correctly', () => {
    render(<ContactForm />, { wrapper });
    expect(screen.getByLabelText(/Full Name/i)).toBeDefined();
    expect(screen.getByLabelText(/Email Address/i)).toBeDefined();
    expect(screen.getByLabelText(/Message/i)).toBeDefined();
    expect(screen.getByRole('button', { name: /Send Message/i })).toBeDefined();
  });

  it('renders ContactInfo correctly', () => {
    render(<ContactInfo />, { wrapper });
    expect(screen.getByText(/Other ways to connect/i)).toBeDefined();
    expect(screen.getByText(/Email Us/i)).toBeDefined();
    expect(screen.getByText(/Sales Inquiries/i)).toBeDefined();
    expect(screen.getByText(/Office/i)).toBeDefined();
  });

  it('renders FAQSection with custom data on contact page', () => {
    const customFaqs = [
      { question: 'Test Question', answer: 'Test Answer', category: 'plans' as const },
    ];
    render(<FAQSection heading="Support FAQ" subheading="Custom Subheading" faqs={customFaqs} />, {
      wrapper,
    });
    expect(screen.getByText(/Support FAQ/i)).toBeDefined();
    expect(screen.getByText(/Custom Subheading/i)).toBeDefined();
    expect(screen.getByText(/Test Question/i)).toBeDefined();
  });
});
