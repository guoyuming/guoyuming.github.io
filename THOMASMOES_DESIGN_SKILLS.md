# ThomasMoes.com Design Skills Documentation

Based on fetching and analyzing the live HTML/CSS from thomasmoes.com, here are two comprehensive design skill documents with exact CSS specifications that can be replicated.

---

## Design Skill 1: Homepage Design

### 1.1 Typography System

**Font Stack (loaded via Google Fonts + custom @font-face):**

```javascript
// Primary fonts loaded via WebFont loader
WebFont.load({
  google: {
    families: [
      "Oswald:200,300,400,500,600,700",
      "Varela Round:400",
      "Instrument Sans:regular,700",
      "Joan:regular"
    ]
  }
});
```

```css
/* CSS Variables for typography */
:root {
  --typography-font-family: Agipo, Verdana, sans-serif;
}

body {
  -webkit-font-smoothing: antialiased;
  font-family: Agipo, Verdana, sans-serif;
  font-size: 14px;
  line-height: 20px;
}

h1, h2 {
  font-family: 'Gt Ultra Fine Trial', Georgia, sans-serif;
  font-size: 40px;
  font-weight: 400;
  line-height: 120%;
  margin-top: 20px;
  margin-bottom: 10px;
}

h2 {
  line-height: 140%;
}

h3 {
  font-family: Agipo, Verdana, sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  margin-top: 20px;
  margin-bottom: 10px;
}

p {
  font-family: Agipo, Verdana, sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 140%;
  margin-bottom: 10px;
}

figcaption {
  opacity: 0.5;
  text-align: center;
  margin-top: 5px;
  font-family: Agipo, Verdana, sans-serif;
  font-size: 16px;
  line-height: 140%;
}
```

### 1.2 Color System (CSS Custom Properties)

```css
:root {
  --brown: #2d2011;
  --dark-bg: #0d0c16;
  --lightgrey: #ebe5de;
  --01-ando-bg: #070707;
}

body {
  color: var(--brown);
  background-color: #fff;
  flex-flow: column;
  display: flex;
}
```

### 1.3 Link Styling (Distinctive Pattern)

```css
/* Custom underline using border instead of text-decoration */
a {
  color: inherit !important;
  border-bottom: 1px solid currentColor;
  text-decoration: none;
}

a:hover {
  border-bottom: none;
}

/* Remove underline for banner links */
.banner a {
  border-bottom: none;
}

.banner a:hover {
  border-bottom: none;
}
```

### 1.4 Container Layout

```css
.home-content-container {
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 60px;
  padding-right: 60px;
}
```

### 1.5 Navigation Design

```css
.home-nav-container {
  z-index: 1000;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  height: 80px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  position: sticky;
  top: 0;
}

/* Logo block */
._52-nav-logo-block {
  border-bottom-width: 0;
  border-top-left-radius: 20px;
  justify-content: flex-start;
  align-items: center;
  width: 95px;
  height: 80px;
  padding-top: 5px;
  padding-left: 20px;
  transition: all 0.2s;
  display: flex;
  overflow: hidden;
}

._52-nav-logo-block:hover {
  transform: scale(1.1);
}

/* Dot separator between nav items */
.text-dot {
  margin: 0 8px;
  opacity: 0.5;
}

/* Nav button text */
.btn-text {
  font-family: Agipo, Verdana, sans-serif;
  font-size: 14px;
}
```

### 1.6 Hero Section Typography

```css
.home-hero-container {
  padding: 80px 0;
}

h2 {
  /* "Hi I'm Thomas," */
  font-family: 'Gt Ultra Fine Trial', Georgia, sans-serif;
  font-size: 40px;
  font-weight: 400;
}

.home-hero-title {
  /* "A creative partner for early-stage teams" */
  font-family: 'Gt Ultra Fine Trial', Georgia, sans-serif;
  font-size: 80px;
  font-weight: 400;
  line-height: 110%;
}

/* Responsive line break helper */
.enter-responsive {
  display: block;
}

/* Hero CTA button */
.hero-btn {
  background-color: var(--brown);
  border-radius: 100px;
  padding: 12px 24px;
  display: inline-flex;
  align-items: center;
  transition: all 0.2s;
}

.hero-btn:hover {
  transform: scale(1.05);
}

.btn-text.color-white {
  color: #fff;
}
```

### 1.7 Availability Badge with Animated Dot

```css
.available-label {
  display: flex;
  align-items: center;
  gap: 8px;
}

.available-dot {
  width: 8px;
  height: 8px;
  background-color: #22c55e;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { 
    opacity: 1; 
    transform: scale(1);
  }
  50% { 
    opacity: 0.5; 
    transform: scale(0.9);
  }
}
```

### 1.8 Work Section Card Grid

```css
.home-work-container {
  padding: 60px 0;
}

.h2-work {
  font-family: 'Gt Ultra Fine Trial', Georgia, sans-serif;
  font-size: 40px;
  margin-bottom: 40px;
}

.home-work-block {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 40px;
}

.home-work-item-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.home-work-item-container img {
  width: 440px;
  max-width: 100%;
}

.home-work-item-title {
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
}

.home-work-item-subtitle {
  font-size: 16px;
  line-height: 150%;
}
```

### 1.9 About Section (Two-Column Layout)

```css
.home-about-container {
  padding: 80px 0;
}

.home-about-block {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: start;
}

.home-about-text-container {
  text-align: left;
  max-width: 640px;
}

.home-about-intro-text {
  font-family: 'Gt Ultra Fine Trial', Georgia, sans-serif;
  font-size: 32px;
  line-height: 140%;
  margin-bottom: 24px;
}

.home-about-intro {
  z-index: 80;
  color: var(--brown);
  margin-top: 40px;
  margin-bottom: 40px;
  font-family: Agipo, Verdana, sans-serif;
  font-size: 22px;
  position: relative;
  line-height: 160%;
}

.home-about-photo-container {
  display: flex;
  justify-content: center;
}

.home-about-photo-block img {
  max-width: 629px;
  width: 100%;
}
```

### 1.10 Expertise Tags (Pill Design)

```css
.home-expertise-container {
  margin-top: 40px;
}

.home-text-subtitle {
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 16px;
  opacity: 0.7;
}

.home-expterise-tags-block {
  display: flex;
  flex-wrap: wrap;
}

.tag {
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  background-color: #fff;
  border: 1px solid #d7cabc;
  border-radius: 100px;
  grid-template-rows: auto auto;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
  margin-bottom: 10px;
  margin-right: 10px;
  padding: 15px 25px;
  font-family: Agipo, Verdana, sans-serif;
  font-size: 18px;
  display: inline-block;
}
```

### 1.11 Button Design

```css
.button {
  background-color: rgba(255, 255, 255, 0.15);
  border-bottom-style: none;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  height: 44px;
  padding-left: 20px;
  padding-right: 20px;
  font-size: 14px;
  font-weight: 400;
  text-decoration: none;
  transition: all 0.2s;
  display: flex;
}

.button:hover {
  background-color: rgba(255, 255, 255, 0.35);
  transform: scale(1.075);
}

.button.w--current {
  color: var(--dark-bg);
  background-color: #fff;
}

.button.white {
  color: #000;
  background-color: #fff;
  font-weight: 700;
}

.button.white:hover {
  background-color: rgba(255, 255, 255, 0.8);
}
```

### 1.12 Play Section (Dark Background)

```css
.home-play-container {
  color: #ebe5de;
  background-color: #0d0c16;
  padding-top: 100px;
}

.home-line-divider {
  width: 100%;
  height: 1px;
  background-color: rgba(235, 229, 222, 0.2);
  margin: 20px 0;
}
```

### 1.13 Contact Section

```css
.home-contact-container {
  padding: 80px 0;
}

.home-contact-block {
  max-width: 600px;
}

.home-contact-text {
  font-size: 22px;
  line-height: 160%;
  margin-bottom: 16px;
}

.home-contact-subtext {
  font-size: 14px;
  opacity: 0.7;
}

/* Location flags */
.div-block-76 {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}

.image-32 {
  width: 32px;
  height: auto;
}
```

---

## Design Skill 2: Article/Obsession Page Design

### 2.1 Dynamic Color Theming Per Article

Each article has unique background and text colors applied via inline styles. Here are the actual color combinations used:

```css
/* Article 17: It's time for our own Space Age */
background-color: black;
color: #f9dd5a;

/* Article 16: Room with a view */
background-color: #0d0c16;
color: white;

/* Article 15: The Sea Ranch */
background-color: white;
color: #e4432e;

/* Article 14: Posters reveal design spirit */
background-color: black;
color: #f5c517;

/* Article 13: Beautiful words */
background-color: #fef4ec;
color: black;

/* Article 12: Contemporary architecture */
background-color: #1d2c27;
color: #d9b988;

/* Article 11: Reflections */
background-color: #3749e5;
color: white;

/* Article 10: Vienna Secession */
background-color: #a4805b;
color: #0b1111;

/* Article 9: Fellini sketches */
background-color: #fef4ec;
color: #ff472a;

/* Article 8: Tokyo Toilets */
background-color: black;
color: white;

/* Article 7: Classic car design */
background-color: #fef7e9;
color: #332822;

/* Article 6: Enzo Mari */
background-color: #dfebec;
color: #cc251c;

/* Article 5: Sony Walkman */
background-color: #f0eeed;
color: #e78a2e;

/* Article 4: Soviet Time Machines */
background-color: #f42e2b;
color: white;

/* Article 3: Yukitsuri */
background-color: #d7d5d8;
color: #2e201f;

/* Article 2: Roubaix La Piscine */
background-color: #ee7257;
color: #3749e5;

/* Article 1: Church of The Light */
background-color: #140808;
color: white;
```

### 2.2 Obsession Card Design (Horizontal Scroll)

```css
._52-content-thumb-item-block {
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  text-align: left;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  grid-auto-columns: 1fr;
  min-width: 340px;
  max-width: 360px;
  min-height: 500px;
  max-height: 500px;
  margin-bottom: 30px;
  padding: 20px 40px 40px;
  transition: all 0.2s;
  display: grid;
}

._52-content-thumb-item-block:hover {
  transform: scale(1.015);
}

/* Current/active card highlight with double border effect */
._52-content-thumb-item-block.w--current {
  border: 1px solid #000;
  grid-template-columns: 1fr;
  box-shadow: 0 0 0 7px #0d0c16, 0 0 0 11px #fff;
}
```

### 2.3 Large Number Typography

```css
._50-list-number-text {
  text-align: left;
  padding-top: 5px;
  font-family: 'Gt Ultra Fine Trial', Georgia, sans-serif;
  font-size: 80px;
  font-weight: 400;
  line-height: 110%;
  display: inline-flex;
}

._52-list-title {
  font-family: Instrument Sans, sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 130%;
  margin-top: 8px;
  margin-bottom: 0;
}

._52-list-block-intro {
  margin-top: auto;
}

._52-list-block-text {
  font-size: 16px;
  line-height: 150%;
  margin-bottom: 12px;
}

._52-list-meta-text {
  font-size: 14px;
  opacity: 0.7;
}
```

### 2.4 Hidden Scrollbar for Horizontal Scroll

```css
.all-related-container {
  overflow: scroll;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE & Edge */
}

.all-related-container::-webkit-scrollbar {
  display: none; /* Chrome, Safari */
}

.about-content-overflow {
  overflow: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.about-content-overflow::-webkit-scrollbar {
  display: none;
}
```

### 2.5 Article Navigation (Sticky with Rounded Corners)

```css
._52-nav-container {
  z-index: 1000;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  flex-flow: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1440px;
  height: 80px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  position: sticky;
  top: 0;
}

._52-nav-pagetitle {
  flex-flow: column;
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-left: 180px;
  display: flex;
}

._52-nav-pagetitle-subtitle {
  font-size: 12px;
  opacity: 0.7;
}

._52-nav-pagetitle-title {
  font-family: Instrument Sans, sans-serif;
  font-size: 18px;
  font-weight: 700;
  line-height: 160%;
  display: inline-flex;
}

._52-nav-subnav-block {
  margin-right: 20px;
  display: flex;
  gap: 8px;
}

/* Divider between nav buttons */
.divider {
  width: 1px;
  height: 24px;
  background-color: rgba(255, 255, 255, 0.2);
  margin: 0 8px;
}
```

### 2.6 Newsletter Subscription Circle

```css
.newsletter-container {
  z-index: 5;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  padding: 300px 60px;
  display: flex;
  position: relative;
}

.newsletter-block {
  text-align: center;
  background-color: #fff;
  border-radius: 340px;
  flex-flow: column;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  max-width: 360px;
  height: 100%;
  min-height: 360px;
  max-height: 360px;
  padding-bottom: 30px;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
}

.btn-subscribe {
  background-color: #000;
  color: #fff;
  border-radius: 100px;
  padding: 12px 24px;
  font-weight: 700;
  transition: all 0.2s;
}

.btn-subscribe:hover {
  transform: scale(1.05);
}
```

### 2.7 Preloader Animation

```css
.preloader {
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.preloader-text {
  font-family: Agipo, sans-serif;
  font-size: 14px;
}

.page-loader_component {
  display: flex;
}
```

```javascript
// GSAP Preloader Animation
let customEase = "M0,0,C0,0,0.13,0.34,0.238,0.442,0.305,0.506,0.322,0.514,0.396,0.54,0.478,0.568,0.468,0.56,0.522,0.584,0.572,0.606,0.61,0.719,0.714,0.826,0.798,0.912,1,1,1,1";

let counter = { value: 0 };
let loaderDuration = 4;

// Shorter duration for returning visitors
if (sessionStorage.getItem("visited") !== null) {
  loaderDuration = 1.5;
  counter = { value: 80 };
}
sessionStorage.setItem("visited", "true");

let tl = gsap.timeline({ onComplete: endLoaderAnimation });

tl.to(counter, {
  value: 100,
  onUpdate: updateLoaderText,
  duration: loaderDuration,
  ease: CustomEase.create("custom", customEase)
});

tl.to(".page-loader_text-fill", {
  height: "100%",
  duration: loaderDuration,
  ease: CustomEase.create("custom", customEase)
}, 0);
```

### 2.8 Dynamic Font Assignment via JavaScript

```javascript
// Font styles applied dynamically based on CMS data attributes
const fontStyles = {
  "font-coconat": { family: "'Coconat Demi', serif", weight: "400" },
  "font-agipo": { family: "'Agipo', sans-serif", weight: "500" },
  "font-gtultrafine": { family: "'GT Ultra Fine Trial', serif", weight: "300" },
  "font-instrument-sans": { family: "'Instrument Sans', sans-serif", weight: "700" },
  "font-joan": { family: "'Joan', serif", weight: "600" },
  "font-gtwalsheim-pro": { family: "'gtwalsheimpro', sans-serif", weight: "300" },
  "font-onari": { family: "'onari', sans-serif" },
  "font-konstruktor": { family: "'Konstruktor', sans-serif", weight: "400" },
  "font-gtflexa-extended": { family: "'Gtflexatrial Xexpbdit', sans-serif", weight: "400" },
  "font-sharp-grotesk-book": { family: "'Sharpgrotesk 20', sans-serif", weight: "500" },
  "font-etna": { family: "'Demo Etna', serif", weight: "500" },
  "font-eckmann": { family: "'Eckmann', sans-serif", weight: "500" },
  "font-ergon": { family: "'Ergon Trial', serif", weight: "400" },
  "font-schmalfette": { family: "'Schmalfette', serif", weight: "400" },
  "font-helvetica": { family: "'Helvetica', sans-serif", weight: "700" },
  "font-cinetype": { family: "'Gt Cinetype Trial', sans-serif", weight: "500" },
  "font-microgramma": { family: "'Microgramma D Extended', sans-serif" }
};

// Apply fonts on page load
window.onload = function() {
  document.querySelectorAll("[data-font]").forEach(item => {
    const fontKey = item.getAttribute("data-font");
    const fontWeight = item.getAttribute("data-weight");

    if (fontStyles[fontKey]) {
      item.style.fontFamily = fontStyles[fontKey].family;
      item.style.fontWeight = fontWeight ? fontWeight : fontStyles[fontKey].weight;
    }
  });
};
```

### 2.9 Article Body Typography Variations

```css
/* Article Type 01 - Church of Light style */
._01-intro-heading {
  text-align: center;
  margin-top: 80px;
  font-family: Joan, sans-serif;
  font-size: 100px;
  font-weight: 400;
  line-height: 120%;
}

._01-intro-text {
  text-align: center;
  max-width: 660px;
  margin: 40px auto 0;
  font-family: Joan, sans-serif;
  font-size: 26px;
}

._01-body-container {
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 78px;
  margin-left: 40px;
  margin-right: 40px;
  padding: 40px;
  display: flex;
}

._01-body-text {
  border: 7px solid #444;
  max-width: 660px;
  margin-bottom: 80px;
  padding: 50px;
  font-family: Joan, sans-serif;
  font-size: 22px;
  line-height: 180%;
}

._01-body-text img {
  border-radius: 8px;
}

/* Article Type 02 - Roubaix style */
._02-heading {
  text-align: center;
  font-family: Instrument Sans, sans-serif;
  font-size: 180px;
  font-weight: 700;
  line-height: 90%;
}

._02-p-intro {
  text-align: center;
  margin-top: 60px;
  font-family: Instrument Sans, sans-serif;
  font-size: 30px;
  font-weight: 700;
}

._02-body {
  max-width: 600px;
  margin-bottom: 80px;
  font-family: Instrument Sans, sans-serif;
  font-size: 24px;
  line-height: 150%;
}

._02-body-container {
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 1200px;
  margin: 40px auto 80px;
  display: flex;
}

._02-intro-container {
  text-align: center;
  justify-content: center;
  align-self: center;
  align-items: center;
  max-width: 980px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 40px;
  padding-right: 40px;
}
```

### 2.10 Body Container

```css
._52-body-container {
  background-color: var(--dark-bg);
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
}

.content-container {
  margin-top: -1px;
  margin-left: auto;
  margin-right: auto;
}
```

### 2.11 Line Dividers

```css
.home-line-divider {
  width: 100%;
  height: 1px;
  background-color: rgba(45, 32, 17, 0.3);
}

/* For dark backgrounds */
.navigation-line-divider {
  height: 2px;
  width: 100%;
}

.obsession-line-divider {
  height: 2px;
  background-color: currentColor;
}
```

### 2.12 52 Weeks Landing Layout (Sidebar + Content)

```css
._52-landing-container {
  grid-template-rows: auto;
  grid-template-columns: 450px 1fr;
  grid-auto-columns: 1fr;
  margin-left: auto;
  margin-right: auto;
  display: flex;
}

._52-landing-intro-container {
  z-index: 1;
  text-align: center;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 440px;
  height: 100vh;
  margin-top: -40px;
  padding-top: 0;
  padding-left: 40px;
  padding-right: 40px;
  display: flex;
  position: fixed;
}

._52-landing-intro-container-copy {
  /* Variant for non-fixed sidebar */
  text-align: center;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  min-width: 360px;
  padding: 40px;
  display: flex;
}

._52weeks-footer {
  color: #fafafa;
  margin-top: 20px;
  margin-bottom: 40px;
  font-family: Agipo, Verdana, sans-serif;
  font-size: 18px;
  line-height: 150%;
}

._52-landing-content-container {
  z-index: 10;
  background-color: #0d0c16;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-left: 500px;
  display: flex;
  position: relative;
  box-shadow: 0 0 100px 100px #0d0c16;
}

._52-landing-content-container-copy {
  /* Horizontal scroll variant */
  display: flex;
  flex-flow: row;
  gap: 20px;
  padding: 20px 0;
}

._52-content-list-wrapper {
  flex-flow: wrap;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  padding-right: 40px;
}

._52-content-list-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
```

---

## Key Design Principles Summary

### 1. Typography
- **Body font**: Agipo (sans-serif) - clean, modern, geometric
- **Heading font**: GT Ultra Fine Trial (serif) - elegant, refined
- **Display font**: Instrument Sans (bold) - impactful headlines
- **Article-specific fonts**: Dynamic assignment per content theme

### 2. Color Strategy
- Dark backgrounds (#0d0c16) create dramatic contrast
- Each article has a unique color palette creating visual identity
- High contrast text colors for readability
- Muted borders using rgba() for subtlety

### 3. Spacing System
- Container max-width: 1440px
- Horizontal padding: 60px (desktop), 40px (tablet), 20px (mobile)
- Consistent vertical rhythm with 40px, 60px, 80px spacing blocks

### 4. Border Radius
- Cards: 20px
- Navigation corners: 30px
- Buttons & tags: 100px (pill shape)
- Newsletter circle: 340px

### 5. Interactions
- Subtle scale transforms on hover (1.015x - 1.075x)
- All transitions: 0.2s ease
- Links: border-bottom underlines that disappear on hover

### 6. Special Effects
- Hidden scrollbars for horizontal scroll containers
- Double border effect for active cards (box-shadow trick)
- GSAP preloader with custom easing curve

### 7. Responsive Considerations
- Grid layouts collapse gracefully
- Typography scales down on mobile
- Navigation becomes hamburger menu on medium screens
- Cards maintain minimum widths for readability
