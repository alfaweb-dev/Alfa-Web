import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Container from "../../layout/Container.jsx";
import { useLanguage } from "../../../i18n/LanguageContext.jsx";
import { testimonials } from "../../../mock/testimonials.js";

export default function Testimonials() {
  const { lang } = useLanguage();
  const items = testimonials[lang] ?? testimonials.fr;

  return (
    <section className="py-24">
      <Container className="grid sm:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="rounded-2xl p-6 border border-black/5 bg-paper"
          >
            <div className="flex gap-0.5 text-amber-400 mb-3">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} size={14} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">&ldquo;{item.quote}&rdquo;</p>
            <p className="font-accent text-sm font-medium text-navy">{item.name}</p>
            <p className="text-xs text-gray-400">{item.role}</p>
          </motion.div>
        ))}
      </Container>
    </section>
  );
}
