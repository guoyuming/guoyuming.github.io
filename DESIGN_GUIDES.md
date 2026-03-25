# Yuming's Blog - Design System Guide

Extracted from the live implementation. Inspired by ThomasMoes.com, adapted for a bilingual (Chinese/English) product & growth blog.

---

## 1. Typography

### Font Stack

```css
--font-display: 'Playfair Display', Georgia, serif;     /* Headings, nav, logo, decorative numbers */
--font-heading: 'Instrument Sans', -apple-system, sans-serif; /* UI labels, card titles, buttons, meta */
--font-body:    'Instrument Sans', -apple-system, sans-serif; /* Body text on non-article pages */
--font-serif:   'Noto Serif SC', 'Playfair Display', Georgia, serif; /* Chinese article body, card descriptions */
--font-mono:    'SF Mono', 'Monaco', 'Inconsolata', monospace; /* Code blocks */
```

### Font Usage Map

| Context | Font | Weight | Size (desktop) | Size (mobile) |
|---------|------|--------|----------------|---------------|
| Site logo | `--font-display` | 500 | 1.5rem | 1.25rem |
| Nav entries (BaseLayout) | `--font-display` | 500 | 0.95rem | 0.875rem |
| Nav entries (PostLayout) | `--font-display` | 500 | 0.95rem | 0.875rem |
| Section headings | `--font-display` | 400 | 2.25rem | 1.75rem |
| Page title (h1) | `--font-display` | 400 | 3rem | 2rem |
| Article title | `--font-display` | 400 | 3.5rem | 2.25rem / 1.875rem |
| Article body h2 | `--font-display` | 400 | 2rem | 1.625rem |
| Article body h3 | `--font-heading` | 700 | 1.5rem | 1.25rem |
| Card title | `--font-heading` | 700 | 1.375rem | 1.125rem |
| Card number (decorative) | `--font-display` | 400 | 4.5rem | 3rem |
| Card description (work) | `--font-serif` | - | 0.95rem | - |
| Article body text | `Noto Serif SC` | - | 1.25rem | 1.125rem |
| Blockquote | `--font-display` | italic | 1.25rem / 1.375rem | 1.125rem |
| Buttons | `--font-heading` | 600 | 0.875rem | - |
| Tags (pill) | `--font-heading` | 400 | 0.9375rem | - |
| Metadata | `--font-heading` | - | 0.875rem | - |
| Archive year | `--font-display` | - | 2rem | - |

### Scale Principle
- **Playfair Display**: Anything that needs personality and editorial weight (headings, nav, logo, blockquotes, large numbers)
- **Instrument Sans**: Anything functional (buttons, labels, metadata, card titles, UI controls)
- **Noto Serif SC**: Long-form Chinese reading (article body, card descriptions)

---

## 2. Color System

### Light Mode (default)

```css
--color-bg: #ffffff;
--color-bg-alt: #f6f4f3;
--color-bg-card: #ffffff;
--color-text: #2d2011;
--color-text-muted: rgba(45, 32, 17, 0.5);
--color-accent: #e4432e;
--color-accent-hover: #ff472a;
--color-border: rgba(215, 202, 188, 0.4);
--color-border-hover: rgba(45, 32, 17, 0.3);
```

### Dark Mode (`[data-theme="dark"]`)

```css
--color-bg: #0d0c16;
--color-bg-alt: #141218;
--color-bg-card: #1a1825;
--color-text: #ebe5de;
--color-text-muted: rgba(235, 229, 222, 0.5);
--color-border: rgba(235, 229, 222, 0.15);
--color-border-hover: rgba(235, 229, 222, 0.35);
```

### Article Page (PostLayout - Light Cream)

```css
--theme-bg: #faf8f5;
--theme-text: #2d2011;
--theme-accent: #8b4513;
--theme-muted: #6b6b6b;
```

### Named Colors

```css
--brown: #2d2011;       /* Primary dark text, CTA backgrounds */
--dark-bg: #0d0c16;     /* Code blocks, dark sections */
--lightgrey: #ebe5de;   /* Dark mode text, light accents */
--cream: #fef4ec;
--warm-white: #fef7e9;
--color-gold: #f5c517;
--color-blue: #3749e5;
--color-green: #628147;
```

### Pattern: Theme-dependent UI tokens
All interactive UI colors (nav backdrop, button bg/hover, card shadows, focus rings) are defined as CSS variables that swap between light and dark mode. Use `var(--nav-btn-bg)` / `var(--btn-bg)` etc., never hard-coded rgba values in components.

---

## 3. Layout

```css
--max-width: 1440px;       /* Page container */
--content-width: 720px;    /* Homepage listing width */
/* --content-width: 660px; in PostLayout for article reading */
--spacing: 60px;           /* Desktop horizontal padding */
--spacing-sm: 40px;
--nav-height: 80px;        /* Desktop nav */
```

### Responsive Breakpoints

| Breakpoint | Spacing | Nav height | Notes |
|------------|---------|------------|-------|
| > 1400px | 60px | 80px | Work cards fill width |
| > 768px | 60px | 80px | Default desktop |
| <= 768px | 24px | 64px | Mobile: single column grids, smaller type |
| <= 480px | 24px | 64px | Further type reduction |

### Section Spacing
- Between sections: `padding-bottom: 80px`
- Section heading top padding: `20px`
- Section heading bottom margin: `32px`

---

## 4. Border Radius

```css
--radius-card: 20px;   /* Cards, modals, code blocks */
--radius-nav: 30px;    /* Nav container top corners */
--radius-pill: 100px;  /* Buttons, tags, toggles */
--radius-sm: 8px;      /* Inline code, small images */
```

---

## 5. Shadows

```css
/* Resting shadow on work cards */
box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);

/* Hover shadow (light mode) */
--card-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);

/* Hover shadow (dark mode) */
--card-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);

/* Focus ring (double-border effect) */
--card-focus-shadow: 0 0 0 6px #ffffff, 0 0 0 8px rgba(45, 32, 17, 0.2);

/* Article images */
box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);

/* Modal overlay */
box-shadow: 0 24px 80px rgba(0, 0, 0, 0.4);
```

---

## 6. Interactions & Transitions

### Timing
- **Default**: `0.2s ease` (links, buttons, toggles, nav)
- **Cards**: `0.25s cubic-bezier(0.4, 0, 0.2, 1)` (smoother, more polished)
- **Decorative number color**: `0.3s ease`
- **Scroll fade-in**: `0.5s cubic-bezier(0.4, 0, 0.2, 1)`

### Hover Transforms
- **Cards** (work, project, post): `scale(1.015)`
- **Nav links / tags**: `scale(1.05)`
- **Buttons**: `scale(1.075)`
- **Logo**: `scale(1.1)`
- **Social icons**: `scale(1.1)`
- **Post nav cards**: `scale(1.02)`

### Link Pattern
- **BaseLayout**: `text-decoration: none`, plain text inherits color
- **PostLayout**: `border-bottom: 1px solid currentColor`, disappears on hover (`border-bottom-color: transparent`)

### Scroll Animations (IntersectionObserver)

```css
.fade-in-section {
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1),
              transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-in-section.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

```javascript
// Trigger once when 10% visible, then unobserve
var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
```

Respects `prefers-reduced-motion: reduce` by disabling animations.

---

## 7. Navigation

### Structure
- Sticky at top (`position: sticky; top: 0; z-index: 1000`)
- Frosted glass backdrop: `backdrop-filter: blur(20px)` with semi-transparent background
- Top corners rounded: `border-radius: 30px 30px 0 0`
- Height: 80px (desktop), 64px (mobile)

### BaseLayout Nav
- Logo left ("Yuming"), nav links right
- Links: Playfair Display, 0.95rem, weight 500, pill-shaped with transparent bg
- Hover: subtle bg fill + scale(1.05)
- Current page: inverted colors (dark bg, light text / vice versa in dark mode)

### PostLayout Nav
- Same structure but without article title in the nav bar (clean, minimal)
- Uses `.nav-btn` class with glass-style background (`var(--nav-btn-bg)`)

---

## 8. Card Patterns

### Work Cards (Horizontal Scroll)
- Colored backgrounds per company, logo centered top, text bottom
- Fixed width `320px` in scroll mode, `flex: 1` above 1400px
- Resting shadow + elevated shadow on hover
- Description: `line-clamp: 3`, Noto Serif SC

### Project Cards (2-Column Grid)
- Image frame with `aspect-ratio: 16/10`
- Title bar below with arrow icon
- Border + subtle hover elevation

### Post Cards (Writing Section)
- Large decorative number (4.5rem, faint color that tints on hover)
- Title in Instrument Sans 700
- Excerpt in muted color
- Fixed width `340px` in horizontal scroll

### Hidden Scrollbar Pattern

```css
scrollbar-width: none;  /* Firefox */
&::-webkit-scrollbar { display: none; }  /* Chrome/Safari */
```

Scroll containers break out of parent padding with negative margins + re-applied padding.

---

## 9. Buttons & Tags

### Buttons
- Pill shape (`border-radius: 100px`), 44px height
- Default: subtle bg (`var(--btn-bg)`), text color inherits
- Primary: accent bg, white text
- Hover: bg darkens + `scale(1.075)`

### Tags
- Pill shape, 1px border, transparent bg
- Hover: fills with accent color, white text, `scale(1.05)`

---

## 10. Footer & Theme Controls

### Social Links
- Icon row: LinkedIn, X/Twitter, GitHub, WeChat (modal trigger)
- Circle hover: accent color bg tint + `scale(1.1)`

### Theme Toggle
- Pill button with sun/moon SVG icons
- Persists via `localStorage.getItem('theme')`
- FOUC prevention: inline script in `<head>` applies saved theme before paint

### Language Toggle
- zh/EN pill toggle
- Persists via `localStorage.getItem('lang')`, defaults to `'en'`
- Uses `data-i18n` attributes on elements, JS swaps text content from translation map

---

## 11. Article Page (PostLayout)

### Layout
- Max width: 660px (narrower than homepage 720px for reading comfort)
- Centered title, metadata below, thin divider, then body

### Body Typography
- Noto Serif SC at 1.25rem, line-height 1.9
- Images: centered, max-height 600px, 12px radius, subtle shadow
- Code: inline has border + bg tint; blocks are dark (#1a1825) full-bleed on mobile
- Blockquotes: 3px accent left border, italic Playfair Display

### Post Navigation
- Card-style prev/next links at bottom
- Subtle bg, border, hover accent border + `scale(1.02)`

---

## 12. Accessibility

- `prefers-reduced-motion: reduce` disables scroll animations
- All interactive elements have `aria-label` where needed
- WeChat modal closable by clicking overlay or close button
- Focus ring: double-border box-shadow effect on cards

---

## File Structure

| File | Responsibility |
|------|---------------|
| `src/layouts/BaseLayout.astro` | Global styles (~1000 lines): design tokens, typography, nav, cards, buttons, tags, footer, theme/lang scripts, scroll animations |
| `src/layouts/PostLayout.astro` | Article-specific styles: cream theme tokens, article nav, body typography, post navigation, footer (self-contained, no BaseLayout dependency) |
| `src/pages/index.astro` | Homepage-specific styles: work cards, project grid, writing scroll, section spacing |
| `src/pages/archives.astro` | Archives split-panel UI styles |
| `src/pages/projects/[...slug].astro` | Project detail page styles |
