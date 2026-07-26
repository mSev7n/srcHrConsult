"use client";

import Link from "next/link";
import {
  GraduationCap,
  Award,
  Briefcase,
  Plane,
  Globe2,
  Users,
  ArrowUpRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealGroup, revealItem } from "@/components/ui/Reveal";
import { motion } from "framer-motion";

const services = [
  {
    icon: GraduationCap,
    title: "Study Abroad",
    description:
      "Admission guidance for reputable institutions across Canada, the US, UK, Netherlands, Germany, Ireland and Australia.",
    href: "/study-abroad",
  },
  {
    icon: Award,
    title: "Scholarships",
    description:
      "Guidance on undergraduate, master's, PhD and fully-funded scholarship opportunities, from search to application.",
    href: "/scholarships",
  },
  {
    icon: Briefcase,
    title: "Global Careers",
    description:
      "Ethical guidance for Canada teaching opportunities, international recruitment and career mobility advisory.",
    href: "/canada-teaching-jobs",
  },
  {
    icon: Plane,
    title: "Visa Services",
    description:
      "Support preparing accurate, complete student, visitor, business and family visit visa applications.",
    href: "/visa-services",
  },
  {
    icon: Globe2,
    title: "Immigration Consulting",
    description:
      "Professional guidance on selected immigration pathways, skilled migration and documentation advisory.",
    href: "/immigration-services",
  },
  {
    icon: Users,
    title: "HR Consulting",
    description:
      "Recruitment support, talent sourcing and organizational development for employers and professionals.",
    href: "/services",
  },
];

export function ServicesOverview() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <Container>
        <SectionHeader
          eyebrow="What We Do"
          title="One consultancy, six pathways to a global future"
          description="From your first application to your final departure, SRC provides ethical, professional guidance at every stage."
        />

        <RevealGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {services.map((service) => (
            <motion.div key={service.title} variants={revealItem}>
              <Link
                href={service.href}
                className="card-pop group flex h-full flex-col rounded-3xl border border-navy-900/[0.07] bg-white p-8 shadow-soft hover:border-navy-500/40 hover:bg-navy-50/70"
              >
                <div className="flex size-12 items-center justify-center rounded-2xl bg-navy-950 text-white transition-transform duration-500 ease-premium group-hover:scale-110">
                  <service.icon className="size-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-6 flex items-center justify-between text-lg font-semibold text-navy-950">
                  {service.title}
                  <ArrowUpRight className="size-4 text-navy-300 transition-all duration-500 ease-premium group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-navy-900" />
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-navy-600">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
