# Aimorelogy Website UI Style Analysis

## 1. Design Philosophy
The design follows a clean, modern, and professional aesthetic, emphasizing clarity and readability. It uses a "Swiss Style" approach with strong typography, ample whitespace, and a structured grid system. The visual hierarchy is established through dramatic font size contrasts and a restrained color palette.

## 2. Color System
The color palette is minimal, relying heavily on monochrome shades with a single primary accent color.

### Primary Colors
- **Primary Purple**: `#4f4398` (Used for branding, accents, and active states)
- **Black**: `#0a0a0a` (Primary text, dark backgrounds)
- **White**: `#ffffff` (Backgrounds, text on dark backgrounds)

### Neutral Scale
- **Gray 50**: `#fafafa` (Light backgrounds)
- **Gray 100**: `#f5f5f5`
- **Gray 200**: `#e5e5e5` (Borders, dividers)
- **Gray 300**: `#d4d4d4`
- **Gray 400**: `#a3a3a3`
- **Gray 500**: `#737373` (Secondary text)
- **Gray 900**: `#111111`

## 3. Typography
The site uses **Inter** as the primary typeface, ensuring high legibility across devices.

### Type Scale
- **Display**: `clamp(4rem, 12vw, 16rem)` - Extremely large, thin weight (100), tight tracking.
- **Headline**: `clamp(2.5rem, 8vw, 8rem)` - Large, light weight (200).
- **Title**: `clamp(1.5rem, 4vw, 3rem)` - Medium size, light weight (300).
- **Body**: `clamp(1rem, 2.5vw, 1.5rem)` - Standard reading text, light weight (300).
- **Label**: `clamp(0.8rem, 1.5vw, 1rem)` - Small, medium weight (500), uppercase, wide tracking.

## 4. Layout & Structure
- **Full-Page Sections**: The site is divided into full-screen sections (`.page`), creating a slide-like experience.
- **Container**: A central container limits width to `min(90vw, 1400px)` with padding.
- **Grids**:
    - **Capabilities**: Responsive grid (`repeat(auto-fit, minmax(300px, 1fr))`).
    - **Case Studies**: Alternating grid layout (Text-Image / Image-Text).
    - **Contact**: Simple grid for contact details.

## 5. Components

### Navigation
- **Sidebar**: A hidden drawer menu (`.sidebar`) triggered by a hamburger icon (`.menu-trigger`).
- **Navigation Dots**: Fixed vertical dots (`.nav-dots`) on the right side to indicate current section.

### Cards & Content
- **Capability Cards**: White cards with a subtle border, hover lift effect, and large background numbers.
- **Case Study Items**: Dark theme sections with large, semi-transparent numbering and tech tags.

### Buttons & Interactions
- **Hover Effects**: Links and cards change color or lift (`transform: translateY(-4px)`) on hover.
- **Menu Trigger**: Animated hamburger icon that transforms into an 'X'.

## 6. Animations
- **Entrance Animations**: Elements fade in and move up (`.fade-in`) when entering the viewport.
- **Staggering**: Elements appear in sequence (`.stagger-1`, `.stagger-2`, etc.) to create a fluid loading effect.
- **Transitions**: Smooth transitions (0.3s ease) for hover states and menu toggles.

## 7. Responsive Behavior
- **Mobile**:
    - Sidebar width adjusts.
    - Grids collapse to single columns.
    - Font sizes scale down using `clamp()`.
    - Alternating layouts (like Case Studies) stack vertically.
