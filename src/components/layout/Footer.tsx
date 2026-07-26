import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { NewsletterForm } from "./NewsletterForm";
import { FOOTER_LINKS, SITE, SOCIALS } from "@/lib/constants";

const socialIcons = [
  { icon: Facebook, href: SOCIALS.facebook, label: "Facebook" },
  { icon: Instagram, href: SOCIALS.instagram, label: "Instagram" },
  { icon: Youtube, href: SOCIALS.youtube, label: "YouTube" },
  { icon: Linkedin, href: SOCIALS.linkedin, label: "LinkedIn (coming soon)" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white">
      <div className="pointer-events-none absolute -left-24 -top-24 size-96 rounded-full bg-navy-700/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 size-96 rounded-full bg-navy-600/20 blur-3xl" />

      <Container className="relative py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-full bg-white text-sm font-bold text-navy-950">
                SRC
              </span>
              <span className="text-base font-semibold">{SITE.name}</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/60">
              Empowering global dreams through education, careers &amp;
              immigration since {SITE.founded}. Ethical, professional, and
              personalized advisory for every stage of your international
              journey.
            </p>

            <div className="mt-7 flex items-center gap-3">
              {socialIcons.map(({ icon: Icon, href, label }) => {
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
                    className={`flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 ease-premium ${
                      isPlaceholder
                        ? "pointer-events-none cursor-default opacity-40"
                        : "hover:border-white/30 hover:bg-white/10 hover:-translate-y-0.5"
                    }`}
                  >
                    <Icon className="size-[18px]" strokeWidth={1.75} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
              Services
            </p>
            <ul className="mt-5 space-y-3.5">
              {FOOTER_LINKS.services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
              Company
            </p>
            <ul className="mt-5 space-y-3.5">
              {FOOTER_LINKS.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
              Stay Informed
            </p>
            <p className="mt-5 text-sm leading-relaxed text-white/60">
              Scholarship updates, visa tips, and career opportunities —
              straight to your inbox.
            </p>
            <div className="mt-4">
              <NewsletterForm />
            </div>

            <ul className="mt-7 space-y-3">
              <li>
                <a
                  href={`tel:+${SITE.phoneIntl}`}
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-white"
                >
                  <Phone className="size-4 shrink-0" strokeWidth={1.75} />
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-white"
                >
                  <Mail className="size-4 shrink-0" strokeWidth={1.75} />
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(SITE.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 text-sm text-white/70 hover:text-white"
                >
                  <MapPin className="mt-0.5 size-4 shrink-0" strokeWidth={1.75} />
                  {SITE.addressShort}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/45">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy-policy"
              className="text-xs text-white/45 hover:text-white/80"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-conditions"
              className="text-xs text-white/45 hover:text-white/80"
            >
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
