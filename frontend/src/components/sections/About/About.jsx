import { motion } from "framer-motion";
import Container from "../../layout/Container.jsx";
import { useLanguage } from "../../../i18n/LanguageContext.jsx";

const STAT_KEYS = [
  { value: "20+", labelKey: "about.stat1", bg: "bg-navy-tint" },
  { value: "100%", labelKey: "about.stat2", bg: "bg-beige-soft" },
  { value: "24/7", labelKey: "about.stat3", bg: "bg-beige-soft" },
  { valueKey: "about.stat4num", labelKey: "about.stat4", bg: "bg-navy-tint" },
];

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24">
      <Container className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display font-semibold text-3xl sm:text-4xl leading-tight text-navy">
            {t("about.title")}
          </h2>
          <p className="text-gray-600 mt-5 leading-relaxed">{t("about.desc")}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid grid-cols-2 gap-5"
        >
          {STAT_KEYS.map((stat) => (
            <div key={stat.labelKey} className={`rounded-2xl p-6 ${stat.bg}`}>
              <p className="font-display font-bold text-4xl text-navy">
                {stat.value ?? t(stat.valueKey)}
              </p>
              <p className="font-accent text-sm text-gray-600 mt-1">{t(stat.labelKey)}</p>
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
