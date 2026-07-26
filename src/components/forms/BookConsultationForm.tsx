"use client";

import { useSearchParams } from "next/navigation";
import { InquiryForm, type InquiryField } from "@/components/forms/InquiryForm";

const SERVICE_OPTIONS = [
  "Study Abroad",
  "Scholarships",
  "Global Careers",
  "Visa Services",
  "Immigration Services",
  "HR Consulting",
  "Not Sure Yet",
];

const fields: InquiryField[] = [
  { name: "name", label: "Full Name", type: "text", required: true, placeholder: "Your full name" },
  { name: "email", label: "Email Address", type: "email", required: true, placeholder: "you@email.com" },
  { name: "phone", label: "Phone Number", type: "tel", required: true, placeholder: "+234..." },
  { name: "service", label: "Service", type: "select", required: true, options: SERVICE_OPTIONS },
  { name: "preferred_date", label: "Preferred Date", type: "date", required: true },
  { name: "preferred_time", label: "Preferred Time", type: "time", required: true },
  {
    name: "message",
    label: "Message",
    type: "textarea",
    fullWidth: true,
    placeholder: "Tell us a little about your goals...",
  },
];

export function BookConsultationForm() {
  const searchParams = useSearchParams();
  const service = searchParams.get("service");
  const defaultService =
    service && SERVICE_OPTIONS.includes(service) ? service : undefined;

  return (
    <InquiryForm
      fields={fields}
      submitLabel="Book Consultation"
      whatsappIntro="Hello SRC, I would like to book a consultation."
      successMessage="Thank you — your consultation request has been sent. Our team will reach out to confirm your appointment."
      defaultValues={defaultService ? { service: defaultService } : {}}
    />
  );
}
