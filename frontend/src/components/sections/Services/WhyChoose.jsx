import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import Container from "../../layout/Container.jsx";
import { useLanguage } from "../../../i18n/LanguageContext.jsx";
import { whyChoose } from "../../../mock/services.js";

export default function WhyChoose() {
  const { t, lang } = useLanguage();
  const items = whyChoose[lang] ?? whyChoose.fr;

  return (
    <section className="py-24 relative overflow-hidden bg-navy">
      <svg className="absolute w-96 -top-10 -end-10 opacity-5 pointer-events-none" viewBox="0 0 200 260">
        <path
          d="M100,32 C54,32 32,80 32,132 L32,184 C32,222 60,252 100,252 C140,252 168,222 168,184 L168,132 C168,80 146,32 100,32 Z"
          stroke="#fff" strokeWidth="6" fill="none"
        />
      </svg>
      <Container className="relative">
        <h2 className="font-display font-semibold text-3xl sm:text-4xl text-white text-center mb-14">
          {t("why.title")}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = Icons[item.icon] ?? Icons.Sparkles;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-6"
              >
                <Icon className="mb-4 text-beige" size={26} strokeWidth={1.6} />
                <h3 className="font-display font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
