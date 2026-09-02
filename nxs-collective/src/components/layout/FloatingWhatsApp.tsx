import { MessageCircle } from "lucide-react";
import { getWhatsappUrl } from "@/config/site";

export default function FloatingWhatsApp() {
  return (
    <a
      href={getWhatsappUrl("Hi NXS Collective, I would like to enquire about your services.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with NXS Collective on WhatsApp"
      data-analytics-event="whatsapp_click"
      data-analytics-label="Floating WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-2xl transition-transform hover:-translate-y-1"
    >
      <MessageCircle size={20} strokeWidth={2} />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
