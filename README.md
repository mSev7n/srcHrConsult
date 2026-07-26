# Success Resource Consult — Website

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion + Lucide React.
Fully static/frontend — no database, no accounts, no CMS. Ready to deploy on Vercel.

## Getting started

1. Install [Node.js 18.18+ or 20+](https://nodejs.org/) if you don't have it.
2. From this folder, run:
   ```
   npm install
   npm run dev
   ```
3. Open http://localhost:3000

## Deploying on Vercel

1. Push this folder to a GitHub repo, then import it in Vercel (framework
   preset "Next.js" is auto-detected — no config needed).
2. In the Vercel project's **Settings → Environment Variables**, add the
   variables from `.env.local.example` (EmailJS is required for forms to
   email you; Analytics is optional). For local dev, copy that file to
   `.env.local` and fill it in there instead.
3. Deploy. That's it — everything else (SEO, sitemap, robots.txt, images)
   is already wired up to work out of the box.

### EmailJS setup (powers all forms)

Forms have no backend — they submit straight from the browser via
[EmailJS](https://www.emailjs.com) *and* open a pre-filled WhatsApp chat, so
every submission reaches you two ways even if one fails.

1. Create a free EmailJS account → add an **Email Service** (e.g. Gmail) →
   create one **Email Template**.
2. In your template, use `{{summary}}` as the main body — every form on
   this site sends a human-readable `summary` field alongside the raw
   field values, so one template covers Contact, Book Consultation, and
   Eligibility Assessment.
3. Copy your Service ID, Template ID, and Public Key into
   `NEXT_PUBLIC_EMAILJS_SERVICE_ID` / `_TEMPLATE_ID` / `_PUBLIC_KEY`.
4. Until these are set, forms still work — they just skip the email step
   and rely on the WhatsApp message (which always fires).

## What's built

**Pages:** Home, About, Services (hub), Study Abroad, Scholarships, Canada
Teaching Jobs & Global Careers, Visa Services, Immigration Services,
Success Stories, Blog & Resources, Book a Consultation, Free Eligibility
Assessment, Contact, FAQ, Privacy Policy, Terms & Conditions, and a
branded 404.

**Design system:** navy/white/black palette, Inter + Manrope, a full
shared UI kit (`Button`, `SectionHeader`, `PageHero`, `CtaBand`,
`FeatureGrid`, `CheckList`, `FlagGrid`, `CountryShowcase`, `NumberedSteps`,
`FAQAccordion`/`FAQSection`, `InfoNote`, `Reveal`/`RevealGroup` scroll
animations, `AnimatedCounter`).

**Global:** sticky `Navbar` with services dropdown, `Footer` (socials,
newsletter, phone/email), floating `WhatsAppButton`, `BackToTop`,
`robots.ts`, `sitemap.ts`, GA4 + Meta Pixel (env-gated, inert until you set
the IDs), SVG favicon.

**Forms:** one generic, schema-driven `InquiryForm` component powers
Contact, Book Consultation (with "What happens next" — appointments are
manually confirmed, not auto-booked), and Free Eligibility Assessment.
Every submit both emails you (via EmailJS) and opens WhatsApp with the
same details pre-filled.

## Honest content notes

A few sections were deliberately built *without* invented content rather
than fabricating fake social proof:

- **Success Stories** has no client testimonials yet (none were provided)
  — it's built as a real, complete page with a "share your story" CTA
  instead of made-up quotes.
- **Blog & Resources** has topic categories but no published articles yet
  — framed honestly as "coming soon" with a newsletter signup.
- **Contact page** has no Google Maps embed — no office address was
  provided. Give me a real address and I'll drop the embed in.
- **Privacy Policy / Terms & Conditions** are genuine, tailored drafts
  (they describe how this specific site actually works — EmailJS,
  WhatsApp, no database), but are a starting point, not a substitute for
  review by a qualified legal professional before going live.

## Still open

- LinkedIn URL (footer icon is in place, dimmed until you provide a link).
- Real testimonials for Success Stories once clients share them.
- A Google Maps embed on Contact, once you share an address.
