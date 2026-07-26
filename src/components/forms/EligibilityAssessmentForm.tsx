"use client";

import { InquiryForm, type InquiryField } from "@/components/forms/InquiryForm";

const fields: InquiryField[] = [
  { name: "name", label: "Full Name", type: "text", required: true, placeholder: "Your full name" },
  { name: "email", label: "Email Address", type: "email", required: true, placeholder: "you@email.com" },
  { name: "phone", label: "Phone Number", type: "tel", required: true, placeholder: "+234..." },
  {
    name: "interest",
    label: "I'm Interested In",
    type: "select",
    required: true,
    options: [
      "Study Abroad",
      "Scholarships",
      "Global Careers",
      "Visa Services",
      "Immigration Services",
    ],
  },
  {
    name: "qualification",
    label: "Highest Qualification",
    type: "select",
    required: true,
    options: [
      "Secondary School",
      "Diploma",
      "Bachelor's Degree",
      "Master's Degree",
      "PhD",
      "Professional Certification",
    ],
  },
  {
    name: "destination",
    label: "Preferred Destination",
    type: "select",
    options: [
      "Canada",
      "United States",
      "United Kingdom",
      "Netherlands",
      "Germany",
      "Ireland",
      "Australia",
      "Not Sure Yet",
    ],
  },
  {
    name: "message",
    label: "Tell us more about your goals",
    type: "textarea",
    fullWidth: true,
    placeholder: "e.g. I want to pursue a master's in Canada starting 2027...",
  },
];

export function EligibilityAssessmentForm() {
  return (
    <InquiryForm
      fields={fields}
      submitLabel="Get My Free Assessment"
      whatsappIntro="Hello SRC, I would like to complete a free eligibility assessment."
      successMessage="Thank you — your eligibility assessment request has been sent. Our team will review your details and follow up shortly."
    />
  );
}
