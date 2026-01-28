# ProActive Implementation Plan

## Goal Description
Build a pixel-perfect, fully functional production-ready web application for "ProActive" physiotherapy. The core task involves translating provided HTML/CSS designs into a Next.js 14+ application while strictly converting the primary color scheme from Green to Blue. All page names and section titles must match the design assets exactly.

## User Review Required
> [!IMPORTANT]
> **Color Transformation:**
> - Primary Green (`#0df259`) → Primary Blue (`#2563eb` aka `blue-600`)
> - Background Dark Green (`#102216`) → Background Dark Blue (`#0f172a` aka `slate-900`)
> - Surface Dark Green (`#1a3322`) → Surface Dark Blue (`#1e293b` aka `slate-800`)
> - Light Mint Background (`#f5f8f6`) → Light Blue Background (`#eff6ff` aka `blue-50`)
>
> **Page Routing (Strictly derived from Design Folders):**
> - Home → `/` (`proactive_physiotherapy_home`)
> - About → `/about` (`about_proactive_physiotherapy`)
> - Services → `/services` (`our_services`)
> - Book Appointment → `/book-appointment` (`book_an_appointment`)
> - FAQ → `/faq` (`frequently_asked_questions`)
> - Blog → `/blog` (`latest_health_tips_blog`)
> - Contact → `/contact` (Derived from Nav link, though no specific design folder found yet, will implement standard contact page matching design language)

## Proposed Changes

### Configuration
#### [MODIFY] [tailwind.config.ts](file:///d:/proactive/tailwind.config.ts)
- Update color palette to new Blue system.
- Add `primary`, `background-light`, `background-dark`, `text-light`, `text-dark`, `surface-light`, `surface-dark` utility colors.
- Ensure `container` and `fontFamily` settings match design.

#### [MODIFY] [globals.css](file:///d:/proactive/app/globals.css)
- define CSS variables for the colors to allow easy switching if needed, or stick to Tailwind config.

### Core UI Components (`/components/ui`)
#### [NEW] [Button.tsx](file:///d:/proactive/components/ui/Button.tsx)
- Reusable Button component with `primary`, `outline`, `ghost` variants (Blue themed).
#### [NEW] [Card.tsx](file:///d:/proactive/components/ui/Card.tsx)
- Base card container.
#### [NEW] [Input.tsx](file:///d:/proactive/components/ui/Input.tsx)
- Form input fields.

### Sections (Named Strictly by Design Titles)
#### [NEW] [WhyChooseProActive.tsx](file:///d:/proactive/components/sections/WhyChooseProActive.tsx)
- "Why Choose ProActive?" section.
#### [NEW] [OurCoreServices.tsx](file:///d:/proactive/components/sections/OurCoreServices.tsx)
- "Our Core Services" section.
#### [NEW] [PatientStories.tsx](file:///d:/proactive/components/sections/PatientStories.tsx)
- "Patient Stories" (Testimonials) section.
#### [NEW] [ReadyToFeelBetter.tsx](file:///d:/proactive/components/sections/ReadyToFeelBetter.tsx)
- "Ready to feel better?" CTA section.
#### [NEW] [Hero.tsx](file:///d:/proactive/components/sections/Hero.tsx)
- Main Home Hero.

### Layout Components
#### [NEW] [Navbar.tsx](file:///d:/proactive/components/layout/Navbar.tsx)
- Top navigation with strict links.
#### [NEW] [Footer.tsx](file:///d:/proactive/components/layout/Footer.tsx)
- Footer with "Quick Links" and "Contact".

### Pages
#### [MODIFY] [page.tsx](file:///d:/proactive/app/page.tsx)
- Assemble Home page sections.
#### [MODIFY] [layout.tsx](file:///d:/proactive/app/layout.tsx)
- Include Font setup (Manrope), Navbar, and Footer.
#### [NEW] [page.tsx](file:///d:/proactive/app/about/page.tsx)
- About page implementation.
#### [NEW] [page.tsx](file:///d:/proactive/app/services/page.tsx)
- Services page.
#### [NEW] [page.tsx](file:///d:/proactive/app/book-appointment/page.tsx)
- Booking page + Form.
#### [NEW] [page.tsx](file:///d:/proactive/app/faq/page.tsx)
- FAQ page.
#### [NEW] [page.tsx](file:///d:/proactive/app/blog/page.tsx)
- Blog listing page.
#### [MODIFY] [page.tsx](file:///d:/proactive/app/contact/page.tsx)
- Contact page + Form.

## Verification Plan
### Automated Tests
- Run `npm run build` to ensure 0 errors.
- Run `npm run lint`.

### Manual Verification
- Verify strictly that NO Green exists (only Blue).
- Verify Page Routes match strict names.
- Verify Sections match strict names.
- Verify "Book Appointment" form works (logs to console/mock API).
- Mobile responsiveness check using Browser Tool (screenshot verification).
