import Container from "../../layout/Container.jsx";
import { useLanguage } from "../../../i18n/LanguageContext.jsx";
import { technologies } from "../../../mock/technologies.js";

export default function Technologies() {
  const { t } = useLanguage();
  const doubled = [...technologies, ...technologies];

  return (
    <section className="border-y border-black/5 py-8 overflow-hidden bg-paper">
      <Container>
        <p className="text-center font-accent text-xs uppercase tracking-widest text-gray-400 mb-5">
          {t("trusted.label")}
        </p>
      </Container>
      <div className="flex overflow-hidden">
        <div className="marquee-track flex gap-14 shrink-0 items-center px-7 font-display font-medium text-xl text-gray-400 whitespace-nowrap">
          {doubled.map((tech, i) => (
            <span key={`${tech}-${i}`}>{tech}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
