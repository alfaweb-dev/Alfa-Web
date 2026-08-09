import Container from "../../components/common/Container";
import SectionHeading from "../../components/common/SectionHeading";
import ProjectCard from "../../components/portfolio/ProjectCard";
import Button from "../../components/common/Button";
import { useLanguage } from "../../hooks/useLanguage";
import { projectsData } from "../../data/projects";

export default function PortfolioPreview() {
  const { t, lang } = useLanguage();
  const projects = [...projectsData[lang]].sort((a, b) => Number(b.year) - Number(a.year)).slice(0, 3);

  return (
    <section className="py-20 md:py-28">
      <Container className="flex flex-col gap-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading eyebrow={t("portfolio.eyebrow")} title={t("portfolio.title")} subtitle={t("portfolio.subtitle")} />
          <Button to="/portfolio" variant="outline" className="shrink-0">
            {t("portfolio.cta")}
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
