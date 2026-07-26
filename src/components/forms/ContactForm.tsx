"use client";

import { useSearchParams } from "next/navigation";
import { InquiryForm, type InquiryField } from "@/components/forms/InquiryForm";

const SUBJECT_OPTIONS = [
  "Study Abroad",
  "Scholarship",
  "PhD & Research",
  "Canada Teaching Jobs",
  "HR & Recruitment",
  "Visa Services",
  "Immigration Services",
  "International Partnership",
  "Book Store / Publications",
  "General Enquiry",
];

const CONTACT_METHOD_OPTIONS = ["Email", "Phone", "WhatsApp"];

const fields: InquiryField[] = [
  { name: "name", label: "Full Name", type: "text", required: true, placeholder: "Your full name" },
  { name: "email", label: "Email Address", type: "email", required: true, placeholder: "you@email.com" },
  { name: "phone", label: "Phone / WhatsApp Number", type: "tel", required: true, placeholder: "+234..." },
  { name: "country", label: "Country of Residence", type: "text", required: false, placeholder: "e.g. Nigeria, United Kingdom…" },
  {
    name: "subject",
    label: "What Are You Contacting SRC About?",
    type: "select",
    required: true,
    placeholder: "Select a topic",
    options: SUBJECT_OPTIONS,
  },
  {
    name: "message",
    label: "Your Message",
    type: "textarea",
    required: true,
    fullWidth: true,
    placeholder: "Tell us how we can help you…",
  },
  {
    name: "contactMethod",
    label: "Preferred Contact Method",
    type: "select",
    required: false,
    placeholder: "Select preferred method",
    options: CONTACT_METHOD_OPTIONS,
    fullWidth: true,
  },
];

export function ContactForm() {
  const searchParams = useSearchParams();
  const subject = searchParams.get("subject");
  const defaultSubject =
    subject && SUBJECT_OPTIONS.includes(subject) ? subject : undefined;

  return (
    <InquiryForm
      fields={fields}
      submitLabel="Send Enquiry"
      whatsappIntro="Hello SRC, I have a question."
      successMessage="Thank you for reaching out — we've received your message and will respond shortly."
      defaultValues={defaultSubject ? { subject: defaultSubject } : {}}
    />
  );
}
