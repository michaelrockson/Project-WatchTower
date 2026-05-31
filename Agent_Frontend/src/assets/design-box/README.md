# Linear Design Box

A self-contained, modular design system inspired by the Linear.app aesthetic. Built for speed, performance, and
high-quality user experiences with a focus on dark mode and refined visual effects.

## Quick Start

Include the main stylesheet in your HTML:

```html

<link rel="stylesheet" href="linear-design-box/linear.css">
```

## Structure

- `core/`: Fundamental system tokens and base styles.
    - `tokens.css`: Color scales, typography, and spacing.
    - `base.css`: Resets and global utility classes.
    - `layout.css`: Grid system and layout primitives.
    - `responsive.css`: Breakpoints and mobile overrides.
- `ui/`: Component-level styles and effects.
    - `components.css`: Buttons, cards, inputs, etc.
    - `effects.css`: Glassmorphism, gradients, and shadows.
    - `animations.css`: Micro-animations and transitions.

## Key Features

- **Prefix**: All classes are prefixed with `li-` to avoid naming collisions.
- **Dark Mode**: Optimized for high-contrast dark interfaces by default.
- **Inter Typography**: Scalable typographic hierarchy based on the Inter font family.
- **Glassmorphism**: Premium backdrop-blur effects for cards and overlays.
- **Responsive**: Mobile-first grid and utility system.

## Example Usage

### Hero Section

```html

<section class="li-section">
    <div class="li-container li-text-center">
        <h1 class="li-text-hero li-gradient-text">Build for the future.</h1>
        <p class="li-text-lg li-text-secondary">Modular primitives for your next project.</p>
        <div class="li-flex li-justify-center li-mt-8">
            <button class="li-btn li-btn-primary">Get Started</button>
            <button class="li-btn li-btn-secondary">Documentation</button>
        </div>
    </div>
</section>
```

### Glass Card

```html

<div class="li-card li-glass-card">
    <h3 class="li-card-title">Glassmorphism</h3>
    <p class="li-text-sm li-text-secondary">Subtle blur and border effects.</p>
</div>
```

---

Created with Antigravity.
