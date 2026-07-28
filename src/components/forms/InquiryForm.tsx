"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { sendInquiryEmail, isEmailJsConfigured } from "@/lib/emailjs";
import { SITE, WHATSAPP_LINK } from "@/lib/constants";

export type InquiryField = {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "date" | "time" | "textarea" | "select";
  required?: boolean;
  options?: string[];
  placeholder?: string;
  fullWidth?: boolean;
};

export function InquiryForm({
  fields,
  submitLabel = "Send",
  whatsappIntro,
  successMessage = "Thank you — your message has been sent. Our team will get back to you shortly.",
  defaultValues = {},
}: {
  fields: InquiryField[];
  submitLabel?: string;
  whatsappIntro: string;
  successMessage?: string;
  defaultValues?: Record<string, string>;
}) {
  const [values, setValues] = useState<Record<string, string>>(defaultValues);
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  function update(name: string, value: string) {
    setValues((v) => ({ ...v, [name]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");

    const summary = fields
      .map((f) => `${f.label}: ${values[f.name] || "-"}`)
      .join("\n");
    const whatsappMessage = `${whatsappIntro}\n\n${summary}`;

    try {
      if (isEmailJsConfigured) {
        await sendInquiryEmail({ to_email: SITE.email, ...values, summary });
      }
    } catch {

    }

    window.open(WHATSAPP_LINK(whatsappMessage), "_blank", "noopener,noreferrer");
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-navy-900/10 bg-white p-10 text-center shadow-soft">
        <span className="flex size-14 items-center justify-center rounded-full bg-navy-950/[0.06] text-navy-900">
          <CheckCircle2 className="size-7" strokeWidth={1.75} />
        </span>
        <p className="max-w-sm text-sm leading-relaxed text-navy-700 sm:text-base">
          {successMessage}
        </p>
        <p className="text-xs text-navy-500">
          We&rsquo;ve also opened WhatsApp with your details pre-filled —
          just hit send there too.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-navy-900/10 bg-white p-6 shadow-soft sm:p-8"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {fields.map((field) => (
          <div
            key={field.name}
            className={
              field.fullWidth || field.type === "textarea"
                ? "sm:col-span-2"
                : ""
            }
          >
            <label
              htmlFor={field.name}
              className="mb-1.5 block text-sm font-medium text-navy-800"
            >
              {field.label}
              {field.required && <span className="text-navy-400"> *</span>}
            </label>

            {field.type === "textarea" ? (
              <textarea
                id={field.name}
                name={field.name}
                required={field.required}
                rows={4}
                placeholder={field.placeholder}
                value={values[field.name] || ""}
                onChange={(e) => update(field.name, e.target.value)}
                className="w-full resize-none rounded-xl border border-navy-900/15 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-navy-400 focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-900/10"
              />
            ) : field.type === "select" ? (
              <select
                id={field.name}
                name={field.name}
                required={field.required}
                value={values[field.name] || ""}
                onChange={(e) => update(field.name, e.target.value)}
                className="w-full rounded-xl border border-navy-900/15 bg-white px-4 py-3 text-sm text-navy-900 focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-900/10"
              >
                <option value="" disabled>
                  {field.placeholder || "Select an option"}
                </option>
                {field.options?.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                required={field.required}
                placeholder={field.placeholder}
                value={values[field.name] || ""}
                onChange={(e) => update(field.name, e.target.value)}
                className="w-full rounded-xl border border-navy-900/15 bg-white px-4 py-3 text-sm text-navy-900 placeholder:text-navy-400 focus:border-navy-500 focus:outline-none focus:ring-2 focus:ring-navy-900/10"
              />
            )}
          </div>
        ))}
      </div>

      <Button type="submit" icon={false} className="mt-7 w-full sm:w-auto">
        {status === "loading" ? (
          <span className="inline-flex items-center gap-2">
            <Loader2 className="size-4 animate-spin" /> Sending...
          </span>
        ) : (
          <span className="inline-flex items-center gap-2">
            <Send className="size-4" /> {submitLabel}
          </span>
        )}
      </Button>
      <p className="mt-4 flex items-center gap-2 text-xs text-navy-500">
        <MessageCircle className="size-3.5 shrink-0" />
        We&rsquo;ll also open WhatsApp with your details so you can send
        them directly.
      </p>
    </form>
  );
}
