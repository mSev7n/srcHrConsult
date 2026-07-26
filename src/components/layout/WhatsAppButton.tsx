"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { SITE, WHATSAPP_LINK } from "@/lib/constants";

export function WhatsAppButton() {
  return (
    <motion.a
      href={WHATSAPP_LINK(
        `Hello SRC, my name is __________. I would like to enquire about your services.`
      )}
      target="_blank"
      rel="noreferrer"
      aria-label={`Chat with ${SITE.name} on WhatsApp`}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1.2, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-6 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.6)] sm:bottom-8 sm:right-8"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366] opacity-30" />
      <MessageCircle className="size-7" fill="white" strokeWidth={0} />
    </motion.a>
  );
}
