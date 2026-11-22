import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import Container from "../../layout/Container.jsx";
import { useLanguage } from "../../../i18n/LanguageContext.jsx";
import { faq } from "../../../mock/faq.js";

export default function FAQ() {
  const { t, lang } = useLanguage();
  const items = faq[lang] ?? faq.fr;
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-24">
      <Container className="max-w-3xl">
        <h2 className="font-display font-semibold text-3xl sm:text-4xl text-center mb-12 text-navy">
          {t("faq.title")}
        </h2>
        <div className="space-y-3">
          {items.map((item, i) => (
            <div key={item.q} className="border border-black/10 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-start font-accent font-medium text-sm text-navy"
              >
                <span>{item.q}</span>
                <motion.span animate={{ rotate: openIndex === i ? 45 : 0 }}>
                  <Plus size={18} />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-5 overflow-hidden"
                  >
                    <p className="pb-4 text-sm text-gray-600 leading-relaxed">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
