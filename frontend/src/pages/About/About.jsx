import Container from "../../components/common/Container";
import SectionHeading from "../../components/common/SectionHeading";
import { useLanguage } from "../../hooks/useLanguage";

export default function About() {
  const { t } = useLanguage();
  const values = t("about.values");

  return (
    <div className="py-20 md:py-28">
      <Container className="flex flex-col gap-16">
        <SectionHeading eyebrow={t("about.eyebrow")} title={t("about.title")} subtitle={t("about.text")} />

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-sand/10 bg-panel/40 p-8">
            <h3 className="font-display text-2xl text-sand-light mb-3">{t("about.mission_title")}</h3>
            <p className="text-sm leading-relaxed text-sand-light/60">{t("about.mission_text")}</p>
          </div>
          <div className="rounded-2xl border border-sand/10 bg-panel/40 p-8">
            <h3 className="font-display text-2xl text-sand-light mb-3">{t("about.vision_title")}</h3>
            <p className="text-sm leading-relaxed text-sand-light/60">{t("about.vision_text")}</p>
          </div>
          <div className="rounded-2xl bg-sand p-8">
            <h3 className="font-display text-2xl text-primary-dark mb-4">{t("about.values_title")}</h3>
            <ul className="flex flex-col gap-2">
              {Array.isArray(values) &&
                values.map((value) => (
                  <li key={value} className="text-sm text-primary-dark/80 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rotate-45 bg-primary-dark/60" />
                    {value}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
