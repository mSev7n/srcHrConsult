import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { BackToTop } from "@/components/layout/BackToTop";
import { Analytics } from "@/components/layout/Analytics";
import { SITE } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description:
    "Success Resource Consult (SRC) is a trusted international education, scholarship, career mobility, visa advisory and immigration consultancy, established in 2011.",
  keywords: [
    "study abroad consultant Nigeria",
    "scholarship advisory",
    "Canada teaching jobs",
    "visa advisory",
    "immigration consulting",
    "Success Resource Consult",
  ],
  openGraph: {
    title: SITE.tagline,
    description:
      "Your trusted partner for international education, scholarships, global careers, visa advisory and immigration consulting.",
    url: SITE.url,
    siteName: SITE.name,
    images: ["/images/hero-plane.webp"],
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.tagline,
    description:
      "Your trusted partner for international education, scholarships, global careers, visa advisory and immigration consulting.",
    images: ["/images/hero-plane.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="flex min-h-screen flex-col font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
        <Analytics />
      </body>
    </html>
  );
}
