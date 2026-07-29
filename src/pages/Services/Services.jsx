import Container from "../../components/common/Container";
import SectionHeading from "../../components/common/SectionHeading";
import ServiceCard from "../../components/common/ServiceCard";
import { useLanguage } from "../../hooks/useLanguage";
import { servicesData } from "../../data/servicesData";

export default function Services() {
  const { t, lang } = useLanguage();
  const services = servicesData[lang];

  return (
    <div className="py-20 md:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow={t("services.eyebrow")}
          title={t("services.title")}
          subtitle={t("services.subtitle")}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </div>
  );
}
