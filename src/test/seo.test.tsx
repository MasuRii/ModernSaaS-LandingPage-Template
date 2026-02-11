import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { BreadcrumbSchema } from '../components/seo/BreadcrumbSchema';

describe('BreadcrumbSchema', () => {
  it('should render breadcrumb schema correctly', () => {
    const crumbs = [
      { name: 'Home', item: '/' },
      { name: 'Blog', item: '/blog/' },
      { name: 'Post', item: '/blog/post/' },
    ];

    const { container } = render(<BreadcrumbSchema crumbs={crumbs} />);
    const script = container.querySelector('script[type="application/ld+json"]');

    expect(script).toBeTruthy();
    const schema = JSON.parse(script?.innerHTML || '{}');

    expect(schema['@type']).toBe('BreadcrumbList');
    expect(schema.itemListElement).toHaveLength(3);
    expect(schema.itemListElement[0].name).toBe('Home');
    expect(schema.itemListElement[1].name).toBe('Blog');
    expect(schema.itemListElement[2].name).toBe('Post');
  });

  it('should return null if no crumbs are provided', () => {
    const { container } = render(<BreadcrumbSchema crumbs={[]} />);
    expect(container.firstChild).toBeNull();
  });
});
