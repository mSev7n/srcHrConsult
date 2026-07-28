"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { NAV_LINKS, SITE } from "@/lib/constants";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  useEffect(() => {
    setServicesOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const solid = scrolled || mobileOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-premium ${
        solid
          ? "bg-white/80 backdrop-blur-xl shadow-soft"
          : "bg-transparent"
      }`}
    >
      <Container>
        <nav className="flex h-[76px] items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <span
              className={`flex size-9 items-center justify-center rounded-full text-sm font-bold transition-colors duration-500 ${
                solid ? "bg-navy-950 text-white" : "bg-white text-navy-950"
              }`}
            >
              SRC
            </span>
            <span
              className={`hidden text-[15px] font-semibold leading-tight transition-colors duration-500 sm:block ${
                solid ? "text-navy-950" : "text-white"
              }`}
            >
              Success Resource
              <br />
              Consult
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                      solid
                        ? "text-navy-800 hover:bg-navy-950/5"
                        : "text-white/90 hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                    <ChevronDown className="size-3.5" />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute left-0 top-full w-64 overflow-hidden rounded-2xl border border-navy-900/10 bg-white p-2 shadow-card"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setServicesOpen(false)}
                            className="block rounded-xl px-4 py-2.5 text-sm text-navy-700 transition-colors hover:bg-navy-950/5 hover:text-navy-950"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                    solid
                      ? "text-navy-800 hover:bg-navy-950/5"
                      : "text-white/90 hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <Link
              href="/eligibility-assessment"
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                solid
                  ? "text-navy-800 hover:bg-navy-950/5"
                  : "text-white/90 hover:bg-white/10"
              }`}
            >
              Free Assessment
            </Link>
            <Button href="/book-consultation" size="md">
              Book a Consultation
            </Button>
          </div>

          <button
            className={`flex size-10 items-center justify-center rounded-full lg:hidden ${
              solid ? "text-navy-950" : "text-white"
            }`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-navy-900/10 bg-white lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-6">
              {NAV_LINKS.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-navy-900 hover:bg-navy-950/5"
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="ml-4 flex flex-col border-l border-navy-900/10 pl-4">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="rounded-xl px-4 py-2.5 text-sm text-navy-600 hover:bg-navy-950/5"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-3 flex flex-col gap-3 px-4">
                <Button
                  href="/book-consultation"
                  size="md"
                  className="w-full"
                  onClick={() => setMobileOpen(false)}
                >
                  Book a Consultation
                </Button>
                <Button
                  href="/eligibility-assessment"
                  variant="secondary"
                  size="md"
                  className="w-full"
                  onClick={() => setMobileOpen(false)}
                >
                  Free Eligibility Assessment
                </Button>
                <a
                  href={`tel:+${SITE.phoneIntl}`}
                  className="text-center text-sm font-medium text-navy-600"
                >
                  {SITE.phoneDisplay}
                </a>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
