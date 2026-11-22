import { ArrowRight } from "lucide-react";
import Container from "../../components/common/Container";
import Button from "../../components/common/Button";
import { useLanguage } from "../../hooks/useLanguage";
import logoMark from "../../assets/images/logo-mark-light.png";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="grain-overlay relative overflow-hidden bg-bg pt-16 pb-24 md:pt-28 md:pb-36">
      {/* faint watermark of the brand mark, repeated as texture */}
      <div
        aria-hidden
        className="pointer-events-none absolute -end-32 -top-20 h-[560px] w-[560px] opacity-[0.05]"
      >
        <img src={logoMark} alt="" className="h-full w-full object-contain" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute -start-40 bottom-0 h-[420px] w-[420px] rounded-full bg-primary-light/25 blur-3xl"
      />

      <Container className="relative grid gap-14 md:grid-cols-2 md:items-center">
        <div className="flex flex-col gap-6 animate-rise-in">
          <span className="flex items-center gap-3 text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-sand">
            <span className="h-1.5 w-1.5 rotate-45 bg-sand/70" />
            {t("hero.eyebrow")}
          </span>
          <h1 className="font-display text-4xl md:text-6xl leading-[1.08] text-sand-light text-balance">
            {t("hero.title")}
          </h1>
          <p className="text-base md:text-lg text-sand-light/60 max-w-md">{t("hero.subtitle")}</p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button to="/contact" variant="primary">
              {t("hero.cta_primary")}
              <ArrowRight size={16} />
            </Button>
            <Button to="/portfolio" variant="outline">
              {t("hero.cta_secondary")}
            </Button>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="absolute h-72 w-72 md:h-96 md:w-96 rounded-full bg-sand/[0.06] animate-glow-pulse" />
          <div className="absolute h-56 w-56 md:h-72 md:w-72 rounded-full border border-sand/10" />
          <img
            src={logoMark}
            alt="Alfa Web"
            className="relative h-56 w-auto md:h-80 animate-draw-reveal drop-shadow-[0_0_40px_rgba(210,194,178,0.15)]"
          />
        </div>
      </Container>
    </section>
  );
}
