import { motion } from "framer-motion";
import Container from "../../layout/Container.jsx";
import Badge from "../../common/Badge.jsx";
import Button from "../../common/Button.jsx";
import { useLanguage } from "../../../i18n/LanguageContext.jsx";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden pt-20">
      <Container className="py-20 lg:py-28 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <Badge>{t("hero.eyebrow")}</Badge>
          <h1 className="font-display font-semibold text-[2.6rem] leading-[1.08] sm:text-6xl mt-6 text-navy">
            {t("hero.title")}
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mt-6 max-w-md leading-relaxed">
            {t("hero.desc")}
          </p>
          <div className="flex flex-wrap gap-4 mt-9">
            <Button as="a" href="#contact" variant="primary">
              {t("hero.cta1")}
            </Button>
            <Button as="a" href="#work" variant="outline">
              {t("hero.cta2")}
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          className="relative h-[420px] flex items-center justify-center"
        >
          <div className="absolute w-72 h-72 rounded-full bg-beige-soft blur-md" />
          <svg viewBox="0 0 200 260" className="relative w-56 h-72 drop-shadow-xl">
            <motion.path
              d="M100,32 C54,32 32,80 32,132 L32,184 C32,222 60,252 100,252 C140,252 168,222 168,184 L168,132 C168,80 146,32 100,32 Z"
              stroke="#111A63" strokeWidth="6" fill="none"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.6, ease: "easeInOut" }}
            />
            <motion.path
              d="M80,36 L52,102 L68,132 L94,220"
              stroke="#111A63" strokeWidth="6" fill="none" strokeLinecap="round"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.4, ease: "easeInOut", delay: 0.3 }}
            />
            <motion.path
              d="M88,54 L146,110 L114,122 L162,166"
              stroke="#D2C2B2" strokeWidth="6" fill="none" strokeLinecap="round"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.4, ease: "easeInOut", delay: 0.6 }}
            />
          </svg>
          <div className="absolute -top-2 end-2 w-40 rounded-xl bg-white shadow-xl border border-black/5 p-3">
            <div className="flex gap-1 mb-2">
              <span className="w-2 h-2 rounded-full bg-red-300" />
              <span className="w-2 h-2 rounded-full bg-yellow-300" />
              <span className="w-2 h-2 rounded-full bg-green-300" />
            </div>
            <div className="h-1.5 w-full rounded bg-navy/10 mb-1.5" />
            <div className="h-1.5 w-2/3 rounded bg-navy/10" />
          </div>
          <div className="absolute bottom-4 start-[-1rem] w-32 rounded-xl bg-white shadow-xl border border-black/5 p-3">
            <svg viewBox="0 0 100 40" className="w-full h-8">
              <polyline points="0,35 20,25 40,28 60,10 80,15 100,2" fill="none" stroke="#111A63" strokeWidth="3" />
            </svg>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
