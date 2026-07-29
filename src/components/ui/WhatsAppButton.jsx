import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "../../utils/constants";
import { useLanguage } from "../../hooks/useLanguage";

export default function WhatsAppButton() {
  const { t } = useLanguage();

  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("contact.whatsapp")}
      className="fixed bottom-6 end-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-cream shadow-lg shadow-primary/30 transition-transform hover:scale-105"
    >
      <MessageCircle size={26} />
    </a>
  );
}
