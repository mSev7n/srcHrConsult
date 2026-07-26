import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  GraduationCap,
  Briefcase,
  FlaskConical,
  Plane,
  Users,
  Globe,
  Handshake,
  BookOpen,
  Building2,
  ArrowRight,
  FileText,
  Clock,
  AlertCircle,
} from "lucide-react";
import { SplitHero } from "@/components/ui/SplitHero";
import { FloatingStackVisual } from "@/components/ui/visuals/FloatingStackVisual";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/forms/ContactForm";
import { SITE, SOCIALS, WHATSAPP_LINK } from "@/lib/constants";

const heroVisualItems = [
  {
    icon: <Phone className="size-5" strokeWidth={1.75} />,
    title: "Call or WhatsApp",
    subtitle: SITE.phoneDisplay,
  },
  {
    icon: <Mail className="size-5" strokeWidth={1.75} />,
    title: "Email Us",
    subtitle: "We reply within a day",
  },
  {
    icon: <MapPin className="size-5" strokeWidth={1.75} />,
    title: "Visit Our Office",
    subtitle: "Ikeja, Lagos, Nigeria",
  },
];

const MAPS_QUERY = encodeURIComponent(SITE.address);
const MAPS_EMBED_SRC = `https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`;
const MAPS_DIRECTIONS_LINK = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`;

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Success Resource Consult by phone, WhatsApp, email or our contact form. Serving clients across Nigeria and internationally.",
};

const socialLinks = [
  { icon: Facebook, href: SOCIALS.facebook, label: "Facebook" },
  { icon: Instagram, href: SOCIALS.instagram, label: "Instagram" },
  { icon: Youtube, href: SOCIALS.youtube, label: "YouTube" },
  { icon: Linkedin, href: SOCIALS.linkedin, label: "LinkedIn (coming soon)" },
];

const serviceCards = [
  {
    icon: GraduationCap,
    title: "Study Abroad",
    description: "Are you considering studying abroad? Contact us to explore your study-abroad options.",
    href: "/study-abroad",
    label: "Explore Study Abroad",
    color: "bg-blue-50 text-blue-700",
  },
  {
    icon: BookOpen,
    title: "Scholarships",
    description: "Looking for scholarship and funding opportunities? Connect with SRC for information and guidance.",
    href: "/scholarships",
    label: "Explore Scholarships",
    color: "bg-amber-50 text-amber-700",
  },
  {
    icon: FlaskConical,
    title: "PhD & Research",
    description: "Interested in funded PhD opportunities or academic research? Let's discuss your goals.",
    href: "/contact?subject=PhD+%26+Research",
    label: "Explore PhD Opportunities",
    color: "bg-purple-50 text-purple-700",
  },
  {
    icon: Plane,
    title: "Canada Teaching Jobs",
    description: "Are you a qualified teacher interested in international teaching opportunities? Register your interest and explore the recruitment process.",
    href: "/canada-teaching-jobs",
    label: "Explore Canada Teaching Jobs",
    color: "bg-red-50 text-red-700",
  },
  {
    icon: Briefcase,
    title: "HR & Recruitment",
    description: "Are you an employer or organization looking for talent? Let's discuss your recruitment requirements.",
    href: "/contact?subject=HR+%26+Recruitment",
    label: "Explore HR & Recruitment",
    color: "bg-navy-50 text-navy-700",
  },
  {
    icon: Globe,
    title: "Visa Services",
    description: "Need guidance on a visa application? Contact us to discuss your intended travel purpose and relevant visa category.",
    href: "/visa-services",
    label: "Explore Visa Services",
    color: "bg-teal-50 text-teal-700",
  },
  {
    icon: Users,
    title: "Immigration Services",
    description: "Exploring immigration or permanent residence options? Start by discussing your profile and objectives.",
    href: "/immigration-services",
    label: "Explore Immigration Services",
    color: "bg-green-50 text-green-700",
  },
  {
    icon: Handshake,
    title: "International Partnerships",
    description: "Are you an international organization, recruitment agency, school, employer, or institution interested in working with SRC? We welcome professional partnership enquiries.",
    href: "/contact?subject=International+Partnership",
    label: "Partner With SRC",
    color: "bg-orange-50 text-orange-700",
  },
];

const employerPartnerTypes = [
  "International employers",
  "Recruitment agencies",
  "Schools & school boards",
  "Universities & educational institutions",
  "Workforce organizations",
  "HR & professional institutions",
  "International business partners",
];

const collaborationAreas = [
  "International & teacher recruitment",
  "Talent sourcing & HR services",
  "Education partnerships",
  "Workforce solutions",
  "Strategic partnerships",
];

const candidateOpportunities = [
  "Study Abroad",
  "Scholarships",
  "PhD opportunities",
  "Teaching jobs in Canada",
  "International careers",
  "Recruitment opportunities",
];

const enquiryForms = [
  { enquiry: "Visa Enquiry", form: "Visa Assessment Form", href: "/contact?subject=Visa+Services" },
  { enquiry: "Scholarship Enquiry", form: "Scholarship Assessment Form", href: "/contact?subject=Scholarship" },
  { enquiry: "Canada Teaching Job Enquiry", form: "Teacher Registration & Assessment Form", href: "/canada-teaching-jobs" },
  { enquiry: "Recruitment Enquiry", form: "Candidate Registration Form", href: "/contact?subject=HR+%26+Recruitment" },
  { enquiry: "Employer Enquiry", form: "Employer Recruitment Form", href: "/contact?subject=HR+%26+Recruitment" },
  { enquiry: "International Partnership", form: "Partnership Enquiry Form", href: "/contact?subject=International+Partnership" },
];

export default function ContactPage() {
  return (
    <>
      <SplitHero
        eyebrow="Contact Us"
        title="Let's Start the Conversation"
        description="Have a question about studying abroad, scholarships, careers, visas, or immigration? Reach out — our team is here to help."
        visual={<FloatingStackVisual items={heroVisualItems} />}
      />

      {/* ── HOW CAN WE HELP YOU? ────────────────────────────────── */}
      <section className="bg-paper py-20 sm:py-28">
        <Container>
          <SectionHeader
            eyebrow="How Can We Help You?"
            title="We Are Here to Help You Explore Your Next Opportunity"
            description="Whether you are a student, graduate, researcher, professional, teacher, employer, recruitment agency, educational institution, or international organization — SRC welcomes the opportunity to hear from you."
          />

          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {serviceCards.map((card, i) => (
              <Reveal key={card.title} delay={i * 0.04}>
                <Link
                  href={card.href}
                  className="card-pop group flex h-full flex-col rounded-2xl border border-navy-900/10 bg-white p-6 shadow-soft"
                >
                  <span
                    className={`inline-flex size-11 items-center justify-center rounded-xl ${card.color} mb-4`}
                  >
                    <card.icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <p className="text-sm font-semibold text-navy-950">
                    {card.title}
                  </p>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-600">
                    {card.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-navy-700 transition-gap group-hover:gap-2">
                    {card.label}
                    <ArrowRight className="size-3.5" strokeWidth={2.25} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CONTACT INFO + FORM ──────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.3fr]">
            <Reveal>
              <h2 className="text-lg font-semibold text-navy-950">
                Get in touch directly
              </h2>

              <div className="mt-6 space-y-4">
                <a
                  href={`tel:+${SITE.phoneIntl}`}
                  className="flex items-start gap-4 rounded-2xl border border-navy-900/10 bg-white p-5 shadow-soft transition-colors hover:border-navy-900/25"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-navy-950 text-white">
                    <Phone className="size-[18px]" strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-navy-950">Call Us</p>
                    <p className="mt-1 text-sm text-navy-600">{SITE.phoneDisplay}</p>
                  </div>
                </a>

                <a
                  href={WHATSAPP_LINK("Hello SRC, I have a question.")}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-4 rounded-2xl border border-navy-900/10 bg-white p-5 shadow-soft transition-colors hover:border-navy-900/25"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
                    <MessageCircle className="size-[18px]" strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-navy-950">WhatsApp</p>
                    <p className="mt-1 text-sm text-navy-600">{SITE.phoneDisplay}</p>
                  </div>
                </a>

                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-start gap-4 rounded-2xl border border-navy-900/10 bg-white p-5 shadow-soft transition-colors hover:border-navy-900/25"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-navy-950 text-white">
                    <Mail className="size-[18px]" strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-navy-950">Email</p>
                    <p className="mt-1 text-sm text-navy-600">{SITE.email}</p>
                  </div>
                </a>

                <a
                  href={MAPS_DIRECTIONS_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-4 rounded-2xl border border-navy-900/10 bg-white p-5 shadow-soft transition-colors hover:border-navy-900/25"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-navy-950 text-white">
                    <MapPin className="size-[18px]" strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-navy-950">
                      Visit Our Office
                    </p>
                    <p className="mt-1 text-sm text-navy-600">{SITE.address}</p>
                  </div>
                </a>

                {/* Business Hours */}
                <div className="flex items-start gap-4 rounded-2xl border border-navy-900/10 bg-white p-5 shadow-soft">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-navy-950 text-white">
                    <Clock className="size-[18px]" strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-navy-950">Business Hours</p>
                    <p className="mt-1 text-sm text-navy-600">Monday – Friday: 9:00 am – 5:00 pm</p>
                    <p className="text-sm text-navy-600">Saturday: By Appointment</p>
                    <p className="text-sm text-navy-600">Sunday: Closed</p>
                    <p className="mt-2 text-xs text-navy-400">
                      Appointments may be required for in-person consultations.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-sm font-medium text-navy-800">Follow Us</p>
                <div className="mt-3 flex items-center gap-3">
                  {socialLinks.map(({ icon: Icon, href, label }) => {
                    const isPlaceholder = !href;
                    return (
                      <a
                        key={label}
                        href={href || undefined}
                        target={href ? "_blank" : undefined}
                        rel={href ? "noreferrer" : undefined}
                        aria-label={label}
                        aria-disabled={isPlaceholder}
                        title={label}
                        className={`flex size-10 items-center justify-center rounded-full border border-navy-900/10 bg-white transition-all duration-300 ease-premium ${
                          isPlaceholder
                            ? "pointer-events-none cursor-default opacity-40"
                            : "hover:border-navy-900/25 hover:-translate-y-0.5"
                        }`}
                      >
                        <Icon className="size-[18px] text-navy-800" strokeWidth={1.75} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-navy-500">
                  Send Us a Message
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-navy-950">
                  How Can We Assist You?
                </h2>
                <p className="mt-1.5 text-sm text-navy-600">
                  Please complete the contact form below and we'll be in touch shortly.
                </p>
              </div>
              <Suspense fallback={<div className="h-[480px] animate-pulse rounded-3xl bg-white" />}>
                <ContactForm />
              </Suspense>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── GOOGLE MAPS ─────────────────────────────────────────── */}
      <section className="bg-paper pb-20 sm:pb-28">
        <Container>
          <Reveal>
            <div className="mb-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-navy-500">Visit Our Office</p>
                <h2 className="mt-1 text-xl font-semibold text-navy-950">We Welcome You to SRC</h2>
                <p className="mt-1 text-sm text-navy-600">{SITE.addressShort}</p>
              </div>
              <div className="flex shrink-0 gap-3">
                <Button href={MAPS_DIRECTIONS_LINK} variant="secondary" size="md">
                  Get Directions
                </Button>
                <Button href="/book-consultation" variant="primary" size="md">
                  Book an Appointment
                </Button>
              </div>
            </div>
          </Reveal>
          <Reveal className="overflow-hidden rounded-3xl border border-navy-900/10 shadow-soft">
            <iframe
              title={`${SITE.name} office location`}
              src={MAPS_EMBED_SRC}
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block w-full"
            />
          </Reveal>
        </Container>
      </section>

      {/* ── FOR EMPLOYERS & INTERNATIONAL PARTNERS ──────────────── */}
      <section className="bg-navy-950 py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 top-0 size-[500px] rounded-full bg-navy-700/20 blur-3xl" />
          <div className="absolute -right-40 bottom-0 size-[500px] rounded-full bg-navy-600/15 blur-3xl" />
        </div>
        <Container className="relative">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr]">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
                For Employers & International Partners
              </span>
              <h2 className="mt-5 text-balance text-3xl font-semibold leading-[1.15] text-white sm:text-4xl">
                Let&rsquo;s Build Something Meaningful Together
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/70">
                If you represent an international organization and are interested in working with SRC, we invite you to contact our team. We welcome enquiries from:
              </p>

              <ul className="mt-6 space-y-2.5">
                {employerPartnerTypes.map((type) => (
                  <li key={type} className="flex items-center gap-3 text-sm text-white/80">
                    <span className="size-1.5 shrink-0 rounded-full bg-white/40" />
                    {type}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  href="/contact?subject=International+Partnership"
                  variant="secondary"
                  size="md"
                >
                  Submit Partnership Enquiry
                </Button>
                <Button
                  href="/contact?subject=HR+%26+Recruitment"
                  variant="outline-light"
                  size="md"
                >
                  Request Capability Statement
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-white/10 text-white">
                    <Building2 className="size-5" strokeWidth={1.75} />
                  </span>
                  <p className="font-semibold text-white">Potential Areas of Collaboration</p>
                </div>
                <ul className="mt-6 space-y-4">
                  {collaborationAreas.map((area) => (
                    <li
                      key={area}
                      className="flex items-center gap-4 border-b border-white/10 pb-4 last:border-0 last:pb-0"
                    >
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-white/70">
                        <ArrowRight className="size-4" strokeWidth={2} />
                      </span>
                      <span className="text-sm text-white/80">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── FOR CANDIDATES ──────────────────────────────────────── */}
      <section className="bg-paper py-20 sm:py-28">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr]">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-navy-900/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-navy-600">
                For Candidates
              </span>
              <h2 className="mt-5 text-balance text-3xl font-semibold leading-[1.15] text-navy-950 sm:text-4xl">
                Are You Exploring an International Opportunity?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-navy-600">
                If you are interested in any of the following, you can begin by exploring the relevant SRC service or booking a consultation:
              </p>

              <ul className="mt-6 space-y-2.5">
                {candidateOpportunities.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-navy-700">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-navy-100 text-navy-700">
                      <ArrowRight className="size-3" strokeWidth={2.5} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/services" variant="primary" size="md">
                  Explore Opportunities
                </Button>
                <Button href="/book-consultation" variant="secondary" size="md">
                  Book a Consultation
                </Button>
              </div>
            </Reveal>

            {/* ── BEFORE YOU CONTACT US ─────────────────────────── */}
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-navy-900/10 bg-white p-8 shadow-soft">
                <div className="flex items-center gap-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-navy-950 text-white">
                    <FileText className="size-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="font-semibold text-navy-950">Before You Contact Us</p>
                    <p className="mt-0.5 text-xs text-navy-500">
                      For specific enquiries, you may be directed to a dedicated assessment form.
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-navy-600">
                  To help us respond efficiently, please provide as much relevant information as possible. This helps us understand your needs and direct your enquiry to the right team.
                </p>

                <div className="mt-5 space-y-3">
                  {enquiryForms.map((item) => (
                    <Link
                      key={item.enquiry}
                      href={item.href}
                      className="group flex items-center justify-between rounded-xl border border-navy-900/8 bg-paper px-4 py-3 transition-all duration-300 hover:border-navy-900/20 hover:bg-navy-50"
                    >
                      <div>
                        <p className="text-xs font-semibold text-navy-800">{item.enquiry}</p>
                        <p className="mt-0.5 text-xs text-navy-500">→ {item.form}</p>
                      </div>
                      <ArrowRight className="size-4 shrink-0 text-navy-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-navy-700" strokeWidth={2} />
                    </Link>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ── IMPORTANT NOTICE ────────────────────────────────────── */}
      <section className="bg-white py-14 sm:py-16">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl rounded-2xl border border-amber-200 bg-amber-50 p-7 sm:p-9">
              <div className="flex items-start gap-4">
                <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700">
                  <AlertCircle className="size-5" strokeWidth={1.75} />
                </span>
                <div>
                  <p className="font-semibold text-amber-900">Important Notice</p>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-amber-800">
                    <li>
                      Success Resource Consult aims to respond to enquiries as promptly as possible. Response times may vary depending on the nature and volume of enquiries received.
                    </li>
                    <li>
                      Information provided through this website is for general informational and educational purposes unless otherwise stated.
                    </li>
                    <li>
                      Visa, immigration, admission, scholarship, employment, and recruitment decisions are made by the relevant authorities, institutions, or employers.{" "}
                      <strong className="font-semibold">SRC does not guarantee any specific outcome.</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ── CLOSING CTA BANNER ──────────────────────────────────── */}
      <section className="relative overflow-hidden bg-navy-950 py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_100%_at_50%_100%,rgba(30,53,112,0.4)_0%,rgba(5,10,28,0)_60%)]" />
        <div className="pointer-events-none absolute -left-32 top-1/2 size-80 -translate-y-1/2 rounded-full bg-navy-600/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 top-1/2 size-80 -translate-y-1/2 rounded-full bg-navy-500/15 blur-3xl" />

        <Container className="relative max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
              We Look Forward to Hearing From You
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 text-balance text-3xl font-semibold leading-[1.15] text-white sm:text-4xl">
              Whether You Are Taking Your First Step or Planning Your Next Major Move — We Are Ready to Listen
            </h2>
          </Reveal>
          <Reveal delay={0.14}>
            <p className="mx-auto mt-5 max-w-xl text-balance text-base leading-relaxed text-white/70 sm:text-lg">
              Your question could be the beginning of your next opportunity.
            </p>
            <p className="mt-2 text-sm italic text-white/50">
              Education. Opportunity. Careers. Global Mobility. — Connecting People. Building Teams. Creating Global Opportunities.
            </p>
          </Reveal>

          <Reveal
            delay={0.22}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              href={WHATSAPP_LINK("Hello SRC, I'd like to get in touch.")}
              variant="secondary"
              size="lg"
            >
              Contact SRC Today
            </Button>
            <Button href="/book-consultation" variant="outline-light" size="lg">
              Book a Consultation
            </Button>
          </Reveal>

          <Reveal delay={0.3}>
            <a
              href={`tel:+${SITE.phoneIntl}`}
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-white"
            >
              <Phone className="size-4" strokeWidth={1.75} />
              {SITE.phoneDisplay}
            </a>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
