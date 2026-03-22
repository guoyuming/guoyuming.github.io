# Yuming's Blog - Claude Code Project Guide

## Project Overview

Personal blog for Yuming (郭雨明), built with Astro 4, deployed to GitHub Pages at `https://guoyuming.github.io`. Content is primarily in Chinese (zh-Hans). Topics: product design, technology, AI, SaaS, growth.

## Tech Stack

- **Framework**: Astro 4 (static site generation, content collections)
- **Language**: TypeScript (strict mode via `astro/tsconfigs/strict`)
- **Styling**: Scoped CSS in `.astro` files + global styles in `BaseLayout.astro`
- **Content**: Markdown files in `src/content/posts/` (60 posts)
- **Deployment**: GitHub Actions → GitHub Pages (`.github/workflows/deploy.yml`)
- **Package manager**: npm (uses `package-lock.json`)

## Project Structure

```
src/
├── content/
│   ├── config.ts          # Content collection schema (title, date, description - all optional)
│   └── posts/             # Markdown blog posts
├── layouts/
│   ├── BaseLayout.astro   # Main layout: dark theme, nav, footer, global styles
│   └── PostLayout.astro   # Article layout: light cream theme, SEO, JSON-LD, prev/next nav
├── pages/
│   ├── index.astro        # Homepage: post grid cards sorted alphabetically (zh-CN)
│   ├── archives.astro     # Blog page: split-panel (article list + preview card)
│   ├── rss.xml.js         # RSS feed
│   └── posts/[...slug].astro  # Dynamic post routes
├── styles/                # (empty - styles are inline in layouts)
├── env.d.ts
public/
├── images/                # Post images organized by slug folder
├── robots.txt
├── android-chrome-512x512.png
scripts/
├── migrate-notion.cjs     # Notion export → Astro migration tool
```

## Design System ("ThomasMoes Bold")

### Two Themes
- **Dark theme** (BaseLayout - homepage/archives): `--color-bg: #0d0c16`, `--color-text: #ebe5de`, `--color-accent: #e4432e`
- **Light theme** (PostLayout - articles): `--theme-bg: #faf8f5`, `--theme-text: #2d2011`, `--theme-accent: #8b4513`

### Typography
- Display: `Playfair Display` (headings, titles)
- Heading/Body: `Instrument Sans` (nav, cards, UI text)
- Article Body: `Noto Serif SC` (Chinese serif for reading)
- Monospace: `SF Mono, Monaco, Inconsolata`

### Key Design Tokens
- `--radius-card: 20px`, `--radius-pill: 100px`, `--radius-sm: 8px`
- `--max-width: 1440px`, `--content-width: 660px` (articles) / `720px` (listings)
- `--nav-height: 80px` (desktop), `64px` (mobile)

## Content Conventions

### Post Frontmatter
```yaml
---
title: "Article Title"      # Optional - falls back to slug-derived title
date: 2024-01-15            # Optional - used for sorting and SEO
description: "Summary"      # Optional - used for meta description
---
```

### Post Filename Patterns
- Dated: `YYMMDD-title-slug.md` (e.g., `170130-HowtoCustomHexoMenu.md`)
- Undated: `title-slug.md` (e.g., `什么是真正-ai-native-产品设计.md`)
- Chinese filenames are common and expected

### Image Organization
Post images go in `public/images/{post-slug}/` with filenames like `image.png`, `image 1.png`, etc.

### slugToTitle Helper
Duplicated in 4 files (`index.astro`, `archives.astro`, `[...slug].astro`, `rss.xml.js`). Strips `YYMMDD-` prefix and replaces hyphens with spaces.

## Development

```bash
npm run dev        # Start dev server
npm run build      # Build static site to dist/
npm run preview    # Preview built site
```

## Key Patterns

- Posts are sorted alphabetically by display title using `localeCompare('zh-CN')` (not by date)
- The archives page uses a split-panel UI with click-to-preview (not hover), managed by inline vanilla JS
- All SEO meta tags (OG, Twitter, JSON-LD) are in PostLayout
- RSS feed and sitemap are auto-generated
- No component library - everything is vanilla Astro + CSS

## Known Technical Debt

- `slugToTitle()` is duplicated in 4 files - should be extracted to a shared utility
- `dist/` is committed but also in `.gitignore` - the committed version may be stale
- `src/styles/` directory exists but is empty (all styles inline in layouts)
- `getExcerpt()` is duplicated in `index.astro` and `archives.astro`
- Global styles in BaseLayout are ~600 lines and could be extracted

## Git Conventions

- Commit messages: short, lowercase, descriptive (e.g., "fix click article card", "add two column for archive")
- Branch: `main` only
- CI: Push to `main` triggers GitHub Actions deploy
