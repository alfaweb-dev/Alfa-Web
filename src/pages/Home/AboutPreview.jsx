import Container from "../../components/common/Container";
import SectionHeading from "../../components/common/SectionHeading";
import Button from "../../components/common/Button";
import { useLanguage } from "../../hooks/useLanguage";

export default function AboutPreview() {
  const { t } = useLanguage();
  const values = t("about.values");

  return (
    <section className="py-20 md:py-28">
      <Container className="grid gap-12 md:grid-cols-2 md:items-start">
        <SectionHeading eyebrow={t("about.eyebrow")} title={t("about.title")} subtitle={t("about.text")} />

        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-sand/10 bg-panel/40 p-6">
              <h3 className="font-display text-lg text-sand-light mb-2">{t("about.mission_title")}</h3>
              <p className="text-sm text-sand-light/60">{t("about.mission_text")}</p>
            </div>
            <div className="rounded-2xl border border-sand/10 bg-panel/40 p-6">
              <h3 className="font-display text-lg text-sand-light mb-2">{t("about.vision_title")}</h3>
              <p className="text-sm text-sand-light/60">{t("about.vision_text")}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {Array.isArray(values) &&
              values.map((value) => (
                <span key={value} className="rounded-full border border-sand/20 px-4 py-1.5 text-sm text-sand">
                  {value}
                </span>
              ))}
          </div>

          <div>
            <Button to="/about" variant="ghost" className="!px-0">
              {t("nav.about")} →
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
