import { motion } from "framer-motion";
import Button from "../../common/Button.jsx";
import { useLanguage } from "../../../i18n/LanguageContext.jsx";

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-navy">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto px-6 text-center"
      >
        <h2 className="font-display font-semibold text-3xl sm:text-5xl text-white leading-tight">
          {t("cta.title")}
        </h2>
        <p className="text-white/70 mt-5">{t("cta.desc")}</p>
        <div className="mt-9 flex justify-center">
          <Button as="a" href="#contact" variant="beige">
            {t("cta.button")}
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
