import { motion } from "framer-motion";
import Container from "../../layout/Container.jsx";
import SectionTitle from "../../common/SectionTitle.jsx";
import Card from "../../common/Card.jsx";
import Loading from "../../common/Loading.jsx";
import { useServices } from "../../../hooks/useServices.js";
import { useLanguage } from "../../../i18n/LanguageContext.jsx";

export default function Services() {
  const { t } = useLanguage();
  const { items, loading } = useServices();

  return (
    <section id="services" className="bg-paper py-24">
      <Container>
        <SectionTitle title={t("services.title")} subtitle={t("services.sub")} />
        {loading ? (
          <Loading />
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <Card>
                  <h3 className="font-display font-semibold text-lg mb-3 text-navy">{service.title}</h3>
                  <ul className="space-y-1.5 text-sm text-gray-600">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 bg-beige" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
