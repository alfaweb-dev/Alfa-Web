import { ArrowRight, MessageCircle } from "lucide-react";
import Container from "../../components/common/Container";
import Button from "../../components/common/Button";
import { useLanguage } from "../../hooks/useLanguage";
import { WHATSAPP_LINK } from "../../utils/constants";

export default function ContactCta() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grain-overlay relative overflow-hidden rounded-3xl bg-panel border border-sand/10 px-8 py-16 md:px-16 md:py-20 text-center flex flex-col items-center gap-6">
          <div
            aria-hidden
            className="pointer-events-none absolute -end-24 -bottom-24 h-72 w-72 rounded-full bg-sand/[0.06] blur-3xl"
          />
          <h2 className="relative font-display text-3xl md:text-5xl text-sand-light leading-tight max-w-2xl">
            {t("contact.title")}
          </h2>
          <p className="relative text-sand-light/60 max-w-lg">{t("contact.subtitle")}</p>
          <div className="relative flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button to="/contact" variant="primary">
              {t("hero.cta_primary")}
              <ArrowRight size={16} />
            </Button>
            <Button href={WHATSAPP_LINK} variant="outline">
              <MessageCircle size={16} />
              {t("contact.whatsapp")}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
