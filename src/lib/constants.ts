export const SITE = {
  name: "Success Resource Consult",
  shortName: "SRC",
  tagline: "Empowering Global Dreams Through Education, Careers & Immigration",
  founded: 2011,
  foundedDate: "24 August 2011",
  url: "https://successresourceconsult.com",
  phoneDisplay: "+234 814 233 0299",
  phoneIntl: "2348142330299",
  email: "info@successresourceconsult.com",
  address:
    "119, Awolowo Way, De Plaza Vile, Allen Roundabout Bus Stop (Jaiz Bank), Beside Ibile Bank, Ikeja, Lagos State, Nigeria",
  addressShort: "119 Awolowo Way, Allen Roundabout, Ikeja, Lagos",
};

export const SOCIALS = {
  facebook: "https://facebook.com/srchr1",
  instagram: "https://instagram.com/certified_hr",
  youtube: "https://youtube.com/@immigration_doctor",
  linkedin: "",
};

export const WHATSAPP_LINK = (message: string) =>
  `https://wa.me/${SITE.phoneIntl}?text=${encodeURIComponent(message)}`;

type NavLink = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Study Abroad", href: "/study-abroad" },
      { label: "Scholarships", href: "/scholarships" },
      { label: "Canada Teaching Jobs", href: "/canada-teaching-jobs" },
      { label: "Visa Services", href: "/visa-services" },
      { label: "Immigration Services", href: "/immigration-services" },
      { label: "Book Store & Publications", href: "/bookstore" },
    ],
  },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LINKS = {
  services: [
    { label: "Study Abroad", href: "/study-abroad" },
    { label: "Scholarships", href: "/scholarships" },
    { label: "Canada Teaching Jobs", href: "/canada-teaching-jobs" },
    { label: "Visa Services", href: "/visa-services" },
    { label: "Immigration Services", href: "/immigration-services" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Success Stories", href: "/success-stories" },
    { label: "Blog & Resources", href: "/blog" },
    { label: "Book Store & Publications", href: "/bookstore" },
    { label: "Free Eligibility Assessment", href: "/eligibility-assessment" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
};
