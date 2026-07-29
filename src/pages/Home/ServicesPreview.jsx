import Container from "../../components/common/Container";
import SectionHeading from "../../components/common/SectionHeading";
import ServiceCard from "../../components/common/ServiceCard";
import Button from "../../components/common/Button";
import { useLanguage } from "../../hooks/useLanguage";
import { servicesData } from "../../data/servicesData";

export default function ServicesPreview() {
  const { t, lang } = useLanguage();
  const services = servicesData[lang].slice(0, 3);

  return (
    <section className="py-20 md:py-28 bg-bg-soft border-y border-sand/5">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading eyebrow={t("services.eyebrow")} title={t("services.title")} subtitle={t("services.subtitle")} />
          <Button to="/services" variant="outline" className="shrink-0">
            {t("services.cta")}
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
