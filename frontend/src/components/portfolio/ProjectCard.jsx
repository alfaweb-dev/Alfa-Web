import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import ProjectThumb from "./ProjectThumb";
import { useLanguage } from "../../hooks/useLanguage";

export default function ProjectCard({ project, index = 0 }) {
  const { t } = useLanguage();
  const detailsPath = `/portfolio/${project.id}`;

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-sand/10 bg-panel/40 transition-all duration-300 hover:border-sand/30 hover:-translate-y-1">
      <Link to={detailsPath} className="relative aspect-[4/3] overflow-hidden block">
        <div className="h-full w-full transition-transform duration-700 group-hover:scale-105">
          <ProjectThumb logo={project.logo} name={project.name} index={index} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 via-primary-dark/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="text-[0.65rem] uppercase tracking-[0.2em] text-sand/70">{project.category}</p>
          <h3 className="font-display text-2xl text-sand-light">{project.name}</h3>
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-3">
          <p className="text-sm text-sand-light/60 flex-1">{project.subtitle}</p>
          <span className="text-xs text-sand-light/35 shrink-0">{project.year}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="rounded-full border border-sand/15 px-3 py-1 text-xs text-sand/80">
              {tech}
            </span>
          ))}
        </div>

        {/* Only shown when a real live link exists — otherwise the card's
            image/title (linking to the internal case-study page) is enough. */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-sand hover:gap-2 hover:text-sand-light transition-all"
          >
            {t("portfolio.view_project")}
            <ArrowUpRight size={16} />
          </a>
        )}
      </div>
    </article>
  );
}
