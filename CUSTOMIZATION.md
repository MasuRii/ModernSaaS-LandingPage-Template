# Customization Guide

This guide provides detailed instructions for fully adapting the ModernSaaS
template to your brand and product requirements.

## Table of Contents

1. [Branding & Configuration](#branding--configuration)
2. [Theme Customization](#theme-customization)
3. [Typography](#typography)
4. [Component Customization](#component-customization)
5. [Content Management](#content-management)
6. [Adding New Pages](#adding-new-pages)
7. [Modifying Sections](#modifying-sections)
8. [Animations & Motion](#animations--motion)
9. [Path Management](#path-management)

---

## Branding & Configuration

The primary branding configuration is centralized in `src/config/site.ts`. This
file controls the company name, social links, contact info, and SEO defaults
used across the entire site.

### Company Information

Update the `company` constant to change your product's identity:

```typescript
// src/config/site.ts
export const company = {
  name: 'YourProduct',
  tagline: 'The ultimate solution for X',
  shortDescription: 'Describe your product in one or two sentences.',
  foundedYear: 2026,
  // ...
} as const;
```

### Feature Flags

Enable or disable entire site features via `featureFlags`:

```typescript
// src/config/site.ts
export const featureFlags = {
  newsletter: true,
  liveChat: false, // Disables the chat widget
  darkMode: true,
  demoMode: true, // If true, placeholder links trigger "Demo Modal"
} as const;
```

---

## Theme Customization

The template uses a robust CSS variable system defined in
`src/styles/tokens.css`. It follows a three-tier hierarchy: **Primitive →
Semantic → Component**.

### Color Palette

To change your brand colors, modify the **Primitive Tokens**:

```css
/* src/styles/tokens.css */
:root {
  /* Primary - Change these to your brand's blue/color */
  --primitive-color-primary-500: #3b82f6;
  --primitive-color-primary-600: #1d4ed8;

  /* Secondary - Change these to your secondary brand color */
  --primitive-color-secondary-500: #a855f7;
}
```

### Dark Mode

Dark mode colors are defined in the `.dark` class block in `tokens.css`.
Semantic tokens automatically switch based on the active theme:

```css
/* src/styles/tokens.css */
.dark {
  --token-bg-primary: var(--primitive-color-gray-950);
  --token-text-primary: var(--primitive-color-gray-50);
}
```

---

## Typography

The template uses **Inter** as the default sans-serif font.

### Changing Fonts

1. Import your new font in `src/layouts/Layout.astro`.
2. Update the font tokens in `src/styles/tokens.css`:

```css
/* src/styles/tokens.css */
:root {
  --font-family-sans: 'YourNewFont', system-ui, sans-serif;
  --font-family-mono: 'YourNewMono', monospace;
}
```

### Type Scale

Adjust the modular type scale by modifying the font size tokens:

```css
:root {
  --font-size-base: 1rem; /* 16px */
  --font-size-xl: 1.25rem; /* 20px */
  --font-size-4xl: 2.25rem; /* 36px */
}
```

---

## Component Customization

Components are built using React and Tailwind CSS v4. They are located in
`src/components/ui/`.

### Reusable UI Components

Most UI components accept a `variant`, `size`, and `className` prop for easy
styling:

```tsx
import { Button } from '@/components/ui';

<Button variant="primary" size="lg" className="rounded-full shadow-lg">
  Get Started
</Button>;
```

### Modifying Component Styles

Component-specific styles are usually handled via Tailwind classes within the
component file. For example, to change the default button radius globally,
update `Button.tsx`:

```tsx
// src/components/ui/Button.tsx
const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md font-medium transition-colors...',
  {
    // ...
  },
);
```

---

## Content Management

All site content (text, testimonials, pricing, features) is stored in
`src/data/`. This allows you to update the site content without touching the UI
code.

| Data File         | Content Controlled                                       |
| ----------------- | -------------------------------------------------------- |
| `features.ts`     | Feature lists, bento grid content, zigzag sections       |
| `pricing.ts`      | Pricing tiers, billing cycles, feature comparisons       |
| `testimonials.ts` | Customer quotes, avatars, ratings                        |
| `blog.ts`         | Static blog metadata (dynamic content in `src/content/`) |
| `navigation.ts`   | Header and footer link structures                        |

---

## Adding New Pages

The template uses **Astro's file-based routing**.

1. Create a new `.astro` file in `src/pages/` (e.g.,
   `src/pages/new-page.astro`).
2. Wrap your content with the `Layout` component:

```astro
---
import Layout from '../layouts/Layout.astro';
import Section from '../components/ui/Section';
import Container from '../components/ui/Container';
---

<Layout title="New Page">
  <Section>
    <Container>
      <h1>New Page Content</h1>
    </Container>
  </Section>
</Layout>
```

---

## Modifying Sections

Sections are modular components located in `src/components/sections/`. Each
section typically maps to one part of a page (e.g., `Hero`, `Features`,
`Pricing`).

To change the layout of the homepage Hero:

1. Open `src/components/sections/Hero.tsx`.
2. Modify the JSX/Tailwind classes.
3. Update the data being passed from `src/pages/index.astro`.

---

## Animations & Motion

Animations are powered by **Motion One** and **Framer Motion**.

### Changing Entrance Animations

Entrance animations are defined in individual components using the `motion`
component:

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

### Global Motion Preferences

Reduced motion is automatically respected. You can check the user's preference
using the `useReducedMotion` hook provided in `src/hooks/useReducedMotion.ts`.

---

## Path Management

The template supports deployment to subdirectories (common for GitHub Pages).

### Internal Links

Always use the `Link` component or the `resolveHref` utility to ensure paths are
correctly prefixed with the project base path:

```tsx
import { resolveHref } from '@/config/paths';

const path = resolveHref('/features'); // Returns "/ModernSaaS-LandingPage-Template/features"
```

### Asset Paths

Use `getAssetPath` or `getImagePath` for any local assets:

```tsx
import { getImagePath } from '@/config/paths';

const logoSrc = getImagePath('logo.svg'); // Handles base path and subdirectory
```

---

## Deployment

For detailed deployment instructions, see the
[README.md](./README.md#deployment) or the
[DEPLOYMENT_VERIFICATION.md](./docs/DEPLOYMENT_VERIFICATION.md) file.
