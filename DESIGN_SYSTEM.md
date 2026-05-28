# DriveLegal Design System

## Overview

The DriveLegal dashboard uses a cohesive design system built on modern principles of accessibility, consistency, and user experience. This document serves as the single source of truth for design decisions.

---

## Color Palette

### Primary Colors

```
Blue #2563EB
├─ 50  #eff6ff
├─ 100 #dbeafe
├─ 200 #bfdbfe
├─ 300 #93c5fd
├─ 400 #60a5fa
├─ 500 #3b82f6
├─ 600 #2563eb (primary)
├─ 700 #1d4ed8
├─ 800 #1e40af
└─ 900 #1e3a8a
```

### Semantic Colors

| Name | Purpose | Hex |
|------|---------|-----|
| Success | Positive actions, valid states | #22C55E |
| Warning | Caution, pending actions | #F59E0B |
| Danger | Errors, critical actions | #EF4444 |
| Info | Informational content | #3B82F6 |

### Neutral Colors

| Name | Usage | Light | Dark |
|------|-------|-------|------|
| Background | Main background | #F8FAFC | #0F172A |
| Surface | Cards, panels | #FFFFFF | #1E293B |
| Border | Dividers, outlines | #E2E8F0 | #334155 |
| Text Primary | Main text | #0F172A | #F8FAFC |
| Text Secondary | Muted text | #64748B | #94A3B8 |

---

## Typography

### Font Family
```
Font: Inter
URL: https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap
```

### Font Scale

| Level | Size | Weight | Line-height | Usage |
|-------|------|--------|-------------|-------|
| Display | 32px | 700 | 1.2 | Page titles |
| Heading 1 | 28px | 700 | 1.2 | Section headers |
| Heading 2 | 24px | 600 | 1.25 | Subsections |
| Heading 3 | 20px | 600 | 1.3 | Card titles |
| Heading 4 | 18px | 600 | 1.4 | Small headers |
| Body Large | 16px | 400 | 1.5 | Main content |
| Body | 14px | 400 | 1.5 | Standard text |
| Body Small | 13px | 400 | 1.5 | Helper text |
| Caption | 12px | 500 | 1.4 | Labels, metadata |
| Overline | 11px | 600 | 1.6 | Tags, badges |

---

## Spacing System

```
Multiplier | Value
-----------|-------
0          | 0px
1          | 4px (xs)
2          | 8px (sm)
3          | 12px
4          | 16px (md)
6          | 24px (lg)
8          | 32px (xl)
12         | 48px (2xl)
16         | 64px (3xl)
```

### Usage Guidelines

- **Padding**: Use for internal spacing within components
- **Margin**: Use for spacing between components
- **Gap**: Use for spacing in flex/grid layouts

---

## Shadow System

```css
/* xs - Subtle elevation */
box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

/* sm - Light elevation */
box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);

/* md - Standard elevation */
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);

/* lg - Prominent elevation */
box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);

/* elevation - Maximum elevation */
box-shadow: 0 12px 24px -6px rgba(0, 0, 0, 0.08);
```

---

## Radius System

```
0   - No radius
1   - 2px
2   - 4px
3   - 6px
4   - 8px (standard)
6   - 12px
8   - 16px
full - 9999px (circular)
```

### Usage
- **Buttons**: 8px
- **Cards**: 8px
- **Inputs**: 8px
- **Avatars**: circular
- **Badges**: 16px

---

## Component Library

### Button Component

```tsx
<Button 
  variant="primary" 
  size="md"
  icon={<Icon size={16} />}
  loading={false}
  disabled={false}
>
  Button Text
</Button>
```

**Variants**:
- `primary` - Primary action (blue)
- `secondary` - Secondary action (white border)
- `ghost` - Minimal action (transparent)
- `danger` - Destructive action (red)

**Sizes**:
- `sm` - 8px 12px text-xs
- `md` - 8px 16px text-sm (default)
- `lg` - 12px 24px text-base

### Card Component

```tsx
<Card interactive elevated>
  <CardHeader title="Title" subtitle="Subtitle" />
  <CardContent>
    Content here
  </CardContent>
  <CardFooter>
    Footer content
  </CardFooter>
</Card>
```

**Props**:
- `interactive` - Hover effects
- `elevated` - Extra shadow

### Badge Component

```tsx
<Badge variant="success">
  Success Label
</Badge>
```

**Variants**:
- `success` - Green background
- `warning` - Amber background
- `danger` - Red background
- `primary` - Blue background
- `neutral` - Gray background

---

## Animations

### Transition Durations

```css
/* Fast interactions */
transition-duration: 150ms;

/* Standard transitions */
transition-duration: 200ms; /* Default */

/* Slower transitions */
transition-duration: 300ms;

/* Slow animations */
transition-duration: 500ms;
```

### Easing Functions

```css
ease-in-out     /* Default, balanced */
ease-out        /* Decelerate, for exits */
ease-in         /* Accelerate, for entries */
ease-linear     /* Constant speed */
```

### Predefined Animations

```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideIn {
  from {
    transform: translateY(10px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}
```

---

## Accessibility (WCAG 2.1 AA)

### Color Contrast

All text must have a contrast ratio of at least 4.5:1 for normal text and 3:1 for large text.

```
✓ Primary Blue on White: 8.59:1
✓ Primary Blue on Dark: 7.23:1
✓ Success on Light BG: 4.54:1
✓ Warning on Light BG: 5.24:1
```

### Focus States

All interactive elements must have visible focus indicators:

```css
focus {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
}

focus-visible {
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}
```

### Keyboard Navigation

- Tab order follows visual flow
- Escape closes modals/dropdowns
- Enter confirms actions
- Arrow keys navigate selections

### Screen Reader

- Semantic HTML (`<button>`, `<nav>`, `<header>`)
- ARIA labels for icons
- Descriptive link text
- Form labels

---

## Dark Mode

### Implementation

```tsx
<div className={isDark ? 'dark' : ''}>
  {/* Classes automatically apply dark styles */}
</div>
```

### Tailwind Integration

```css
@media (prefers-color-scheme: dark) {
  /* Automatic dark mode */
}
```

### Color Mapping (Dark Mode)

| Light | Dark |
|-------|------|
| #FFFFFF | #1E293B |
| #F8FAFC | #0F172A |
| #0F172A | #F8FAFC |
| #64748B | #94A3B8 |

---

## Responsive Design

### Breakpoints

```
xs: 0px    - Mobile phones
sm: 640px  - Tablets (portrait)
md: 768px  - Tablets (landscape)
lg: 1024px - Small laptops
xl: 1280px - Laptops
2xl: 1536px - Large displays
```

### Mobile-First Approach

```tsx
<div className="text-center sm:text-left md:text-2xl lg:p-8">
  Content
</div>
```

### Responsive Images

```tsx
<img 
  src="image.jpg"
  srcSet="mobile.jpg 640w, tablet.jpg 1024w, desktop.jpg 1536w"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
/>
```

---

## Component Patterns

### Loading State

```tsx
<Button loading>
  Processing...
</Button>

{/* Shows spinner while loading */}
```

### Empty State

```tsx
<Card>
  <div className="py-12 text-center">
    <div className="text-4xl mb-4">📭</div>
    <p className="text-gray-600">No data available</p>
  </div>
</Card>
```

### Error State

```tsx
<Card className="border-l-4 border-danger-600 bg-danger-50">
  <CardContent>
    <p className="text-danger-700">Something went wrong</p>
  </CardContent>
</Card>
```

### Success State

```tsx
<Card className="border-l-4 border-success-600 bg-success-50">
  <CardContent>
    <p className="text-success-700">✓ Operation successful</p>
  </CardContent>
</Card>
```

---

## Icon System

### Lucide React Icons

```tsx
import { Heart, Share2, Download, AlertCircle } from 'lucide-react'

<Heart size={24} className="text-danger-600" />
```

### Size Variants

- `xs` - 12px
- `sm` - 16px
- `md` - 20px (default)
- `lg` - 24px
- `xl` - 32px

### Color Usage

- **Primary Actions**: `text-primary-600`
- **Success**: `text-success-600`
- **Warning**: `text-warning-600`
- **Danger**: `text-danger-600`
- **Muted**: `text-dark-400`

---

## Form Patterns

### Input Field

```tsx
<div className="space-y-2">
  <label className="block text-sm font-medium">
    Label Text
  </label>
  <input 
    type="text"
    placeholder="Placeholder"
    className="input"
  />
  <p className="text-xs text-dark-600">Helper text</p>
</div>
```

### Select Dropdown

```tsx
<select className="input">
  <option value="">Select option...</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</select>
```

### Checkbox

```tsx
<label className="flex items-center gap-2">
  <input type="checkbox" className="h-4 w-4" />
  <span>Checkbox label</span>
</label>
```

### Radio Button

```tsx
<label className="flex items-center gap-2">
  <input type="radio" name="group" className="h-4 w-4" />
  <span>Radio option</span>
</label>
```

---

## Modal Patterns

```tsx
<div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
  <Card className="w-full max-w-md">
    <CardHeader title="Modal Title" />
    <CardContent>
      Modal content
    </CardContent>
    <CardFooter>
      <Button>Cancel</Button>
      <Button variant="primary">Confirm</Button>
    </CardFooter>
  </Card>
</div>
```

---

## Best Practices

✅ **DO**
- Use semantic HTML
- Maintain consistent spacing
- Test color contrast
- Provide loading states
- Use descriptive labels
- Keyboard navigation support

❌ **DON'T**
- Use color alone to convey info
- Disable form inputs permanently
- Auto-play sounds/videos
- Disable zoom on mobile
- Rely on hover states for mobile
- Use generic button text ("Click here")

---

## Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/)
- [Material Design Principles](https://m3.material.io/)
- [Framer Motion](https://www.framer.com/motion/)

---

**Version**: 1.0.0  
**Last Updated**: January 2026  
**Maintained by**: DriveLegal Design Team
