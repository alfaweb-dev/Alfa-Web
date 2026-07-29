import Container from "../../components/common/Container";
import SectionHeading from "../../components/common/SectionHeading";
import ProjectCard from "../../components/portfolio/ProjectCard";
import { useLanguage } from "../../hooks/useLanguage";
import { projectsData } from "../../data/projectsData";

export default function Portfolio() {
  const { t, lang } = useLanguage();
  const projects = projectsData[lang];

  return (
    <div className="py-20 md:py-28">
      <Container className="flex flex-col gap-14">
        <SectionHeading
          eyebrow={t("portfolio.eyebrow")}
          title={t("portfolio.title")}
          subtitle={t("portfolio.subtitle")}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </Container>
    </div>
  );
}
