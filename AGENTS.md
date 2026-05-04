# AGENTS.md — Luna Thai Massage & Wellness Website

## Project Overview

A Thai massage & wellness booking website for **Luna Thai Massage & Wellness**.
Built with Next.js (App Router), TypeScript, Tailwind CSS, and shadcn/ui.

---

## Tech Stack

| Layer       | Technology                                      |
|-------------|-------------------------------------------------|
| Framework   | Next.js 14+ (App Router)                        |
| Language    | TypeScript                                      |
| Styling     | Tailwind CSS                                    |
| UI Library  | shadcn/ui                                       |
| Icons       | lucide-react                                    |
| Fonts       | Google Fonts via next/font (Playfair Display + Lato) |

---

## Project Structure

```
app/
  layout.tsx          ← Root layout: Navbar + Footer, font setup
  page.tsx            ← Home page
  services/
    page.tsx          ← Services page
  booking/
    page.tsx          ← Booking page
components/
  Navbar.tsx
  Footer.tsx
  ServiceCard.tsx
  TestimonialCard.tsx
  BookingForm.tsx
public/
  logo.png            ← Luna Thai logo asset
```

---

## Brand & Design System

### Color Palette

```css
--luna-gold:   #C9A84C   /* Primary background, CTAs */
--luna-brown:  #5C3317   /* Headings, text, borders */
--luna-cream:  #F5F0E8   /* Cards, section backgrounds */
--luna-white:  #FFFFFF   /* Text on dark backgrounds */
```

Always reference these via CSS variables — never hardcode hex values in components.

### Typography

- **Display / Headings**: Playfair Display (serif) — loaded via `next/font/google`
- **Body**: Lato (sans-serif) — loaded via `next/font/google`
- **Accent / Italic**: Playfair Display Italic for subheadings like *Massage & Wellness*

### Aesthetic Rules

- Premium day spa feel — warm, serene, organic
- Subtle animations only: fade-in on load, gentle card hover lifts
- No clinical whites, no corporate blues, no purple gradients
- Decorative elements: crescent moon, stars, thin gold dividers

---

## Pages & Responsibilities

### `/` — Home Page
Sections in order:
1. **Hero** — headline, tagline, two CTAs, decorative moon element
2. **About** — two-column layout (text + image placeholder)
3. **Services Preview** — 3 service cards linking to `/services`
4. **Testimonials** — 3 testimonial cards using shadcn `Card`
5. **Contact** — address, hours, phone, email, map placeholder

### `/services` — Services Page
- Full service grid (6 services) with shadcn `Card` + `Badge`
- Why Choose Us — 4-column icon layout
- FAQ — shadcn `Accordion`

### `/booking` — Booking Page
- Left: `BookingForm` component (no backend — success toast on submit)
- Right sidebar: hours, location, cancellation policy
- Uses shadcn: `Input`, `Select`, `RadioGroup`, `Textarea`, `Calendar`, `Toast`, `Label`, `Button`

---

## Component Guidelines

### Shared Components

**`Navbar.tsx`**
- Sticky with backdrop blur on scroll
- Left: logo text (LUNA THAI + *Massage & Wellness*)
- Right: nav links + "Book Now" CTA button
- Mobile: hamburger menu using shadcn `Sheet`

**`Footer.tsx`**
- Logo + tagline
- Quick links: Home, Services, Booking
- Social icons: Facebook, Instagram (lucide-react)
- Copyright line

**`ServiceCard.tsx`**
Props: `title`, `description`, `duration`, `price`, `href`
- Uses shadcn `Card`, `Badge` for duration tag
- "Book This Service" button → `/booking`

**`TestimonialCard.tsx`**
Props: `quote`, `name`, `rating`
- Cream background card, brown text
- Star rating rendered with lucide-react `Star` icons

**`BookingForm.tsx`**
- Controlled form with `useState`
- On submit: validate fields, show shadcn `Toast` success message
- Never use HTML `<form>` submit — use `onClick` on the button

---

## Coding Conventions

- All components in `components/` are **client components** (`"use client"`) if they use state or event handlers
- Pages in `app/` are **server components** by default unless interactivity is needed
- Use `cn()` utility from `lib/utils.ts` for conditional Tailwind class merging
- Import shadcn components from `@/components/ui/`
- Import lucide icons directly: `import { Star } from "lucide-react"`
- No hardcoded color hex values in JSX — use Tailwind classes mapped to CSS variables

---

## Content (Placeholder Data)

### Services
| Service                  | Duration Options     | Price (NZD)    |
|--------------------------|----------------------|----------------|
| Traditional Thai Massage | 60 / 90 min          | $80 / $110     |
| Aromatherapy Massage     | 60 / 90 min          | $90 / $120     |
| Hot Stone Massage        | 90 min               | $130           |
| Deep Tissue Massage      | 60 / 90 min          | $90 / $120     |
| Couple's Massage         | 60 / 90 min          | $160 / $210    |
| Foot Reflexology         | 60 min               | $75            |

### Business Info (Placeholder)
- **Address**: 123 Wellness Lane, Christchurch 8011, New Zealand
- **Phone**: +64 3 123 4567
- **Email**: hello@lunathaimassage.co.nz
- **Hours**: Mon–Sat 9:00 AM – 8:00 PM, Sun 10:00 AM – 6:00 PM

### Booking Time Slots
9:00 AM, 10:00 AM, 11:00 AM, 12:00 PM, 1:00 PM, 2:00 PM,
3:00 PM, 4:00 PM, 5:00 PM, 6:00 PM, 7:00 PM

---

## Out of Scope

- No backend, database, or authentication
- No real payment processing
- No CMS integration
- No email sending from the booking form (toast confirmation only)
- No multilingual support (English only)

---

## Known Constraints

- Booking form submission is UI-only — display shadcn `Toast` on success, no API call
- Map section uses a placeholder iframe or a styled card — no real Maps API key required
- Logo SVG/PNG should be placed in `/public/` and referenced via `next/image`
```

---