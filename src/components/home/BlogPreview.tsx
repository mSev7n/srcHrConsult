"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Award,
  BookOpen,
  Newspaper,
  Compass,
  Briefcase,
  FileText,
  ArrowUpRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { RevealGroup, revealItem } from "@/components/ui/Reveal";

const resources = [
  { icon: Award, title: "Scholarship Updates", description: "The latest fully-funded and partial scholarship opportunities." },
  { icon: Compass, title: "Study Abroad Guides", description: "Step-by-step guidance on institutions, courses and applications." },
  { icon: FileText, title: "Visa Information", description: "What to know before you apply for a student, visitor or business visa." },
  { icon: Newspaper, title: "Immigration News", description: "Updates on immigration pathways and policy changes that matter." },
  { icon: Briefcase, title: "Career Insights", description: "Guidance on international career mobility and teaching opportunities." },
  { icon: BookOpen, title: "Educational Resources", description: "Practical resources to help you plan and prepare with confidence." },
];

export function BlogPreview() {
  return (
    <section className="bg-paper py-20 sm:py-28">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeader
            align="left"
            eyebrow="Resources"
            title="Resources to support your journey"
            description="Reliable, up-to-date information so you can make confident decisions — updated regularly by our advisory team."
          />
          <Link
            href="/blog"
            className="group hidden shrink-0 items-center gap-1.5 text-sm font-medium text-navy-800 sm:flex"
          >
            Visit the Blog
            <ArrowUpRight className="size-4 transition-transform duration-300 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <RevealGroup className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {resources.map((item) => (
            <motion.div
              key={item.title}
              variants={revealItem}
              className="card-pop group rounded-3xl border border-navy-900/[0.07] bg-white p-7 hover:border-navy-500/40 hover:bg-navy-50/70"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-navy-950/[0.04] text-navy-900 transition-all duration-500 ease-premium group-hover:scale-110 group-hover:bg-navy-950 group-hover:text-white">
                <item.icon className="size-5" strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 text-base font-semibold text-navy-950">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </RevealGroup>

        <div className="mt-10 flex justify-center sm:hidden">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-navy-800"
          >
            Visit the Blog
            <ArrowUpRight className="size-4 transition-transform duration-300 ease-premium group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
