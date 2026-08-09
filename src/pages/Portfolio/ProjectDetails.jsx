import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Sparkles, ShieldCheck } from "lucide-react";
import Container from "../../components/common/Container";
import ProjectThumb from "../../components/portfolio/ProjectThumb";
import Button from "../../components/common/Button";
import { useLanguage } from "../../hooks/useLanguage";
import { projectsData } from "../../data/projects";

export default function ProjectDetails() {
  const { id } = useParams();
  const { t, lang } = useLanguage();
  const projects = projectsData[lang];
  const index = projects.findIndex((p) => p.id === id);
  const project = projects[index];

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <div className="py-16 md:py-24">
      <Container className="flex flex-col gap-16">
        <Link
          to="/portfolio"
          className="inline-flex w-fit items-center gap-2 text-sm text-sand-light/60 hover:text-sand-light transition-colors"
        >
          <ArrowLeft size={16} />
          {t("portfolio.back")}
        </Link>

        {/* Hero */}
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-sand/10">
            <ProjectThumb image={project.image} logo={project.logo} name={project.name} index={index} />
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              {project.logo && (
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sand-light/95 p-2 shadow-md shadow-primary-dark/20">
                  <img src={project.logo} alt="" className="h-full w-full object-contain" />
                </span>
              )}
              <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-copper">
                <span className="h-1.5 w-1.5 rotate-45 bg-sand/70" />
                {project.category}
              </span>
            </div>
            <h1 className="font-display text-3xl md:text-5xl text-sand-light leading-tight">{project.name}</h1>
            <p className="text-base text-sand-light/65 leading-relaxed">{project.shortDescription || project.subtitle}</p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="rounded-full border border-sand/15 px-3 py-1 text-xs text-sand/80">
                  {tech}
                </span>
              ))}
            </div>

            <dl className="grid grid-cols-2 gap-4 pt-1 text-sm">
              <div>
                <dt className="text-sand-light/40 text-xs uppercase tracking-wide">{t("portfolio.duration_label")}</dt>
                <dd className="text-sand-light/80 mt-1">{project.duration[lang]}</dd>
              </div>
              <div>
                <dt className="text-sand-light/40 text-xs uppercase tracking-wide">{t("nav.portfolio")}</dt>
                <dd className="text-sand-light/80 mt-1">{project.year}</dd>
              </div>
            </dl>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              {project.link ? (
                <Button href={project.link} variant="primary">
                  {t("portfolio.visit_site")}
                  <ArrowUpRight size={16} />
                </Button>
              ) : (
                <span className="inline-flex items-center gap-2 rounded-full border border-sand/15 px-6 py-3 text-sm text-sand-light/40 cursor-not-allowed">
                  {t("portfolio.coming_soon")}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Gallery — only renders once real screenshots are added to the project's `gallery` array */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-2xl text-sand-light">{t("portfolio.gallery_title")}</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.gallery.map((shot) => (
                <div key={shot.url} className="overflow-hidden rounded-xl border border-sand/10">
                  <img src={shot.url} alt={shot.title} className="w-full object-cover" />
                  {shot.title && (
                    <p className="px-4 py-3 text-xs text-sand-light/60 bg-panel/40">{shot.title}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Context — who it's for and why it exists */}
        <div className="rounded-2xl border border-sand/10 bg-panel/30 p-8">
          <h2 className="font-display text-xl text-sand-light mb-3">{t("portfolio.context_title")}</h2>
          <p className="text-sm leading-relaxed text-sand-light/65 max-w-3xl">{project.context}</p>
        </div>

        {/* Vision & objective */}
        {(project.vision || project.objective) && (
          <div className="grid gap-6 md:grid-cols-2">
            {project.vision && (
              <div className="rounded-2xl border border-sand/10 bg-panel/30 p-8">
                <h3 className="font-display text-lg text-sand-light mb-3">{t("portfolio.vision_title")}</h3>
                <p className="text-sm leading-relaxed text-sand-light/65">{project.vision}</p>
              </div>
            )}
            {project.objective && (
              <div className="rounded-2xl border border-sand/10 bg-panel/30 p-8">
                <h3 className="font-display text-lg text-sand-light mb-3">{t("portfolio.objective_title")}</h3>
                <p className="text-sm leading-relaxed text-sand-light/65">{project.objective}</p>
              </div>
            )}
          </div>
        )}

        {/* Problem / Solution — the case for why this project matters */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-sand/10 bg-panel/40 p-8">
            <h2 className="font-display text-xl text-sand-light mb-3">{t("portfolio.problem_title")}</h2>
            <p className="text-sm leading-relaxed text-sand-light/65">{project.problem}</p>
          </div>
          <div className="rounded-2xl bg-sand p-8">
            <h2 className="font-display text-xl text-primary-dark mb-3">{t("portfolio.solution_title")}</h2>
            <p className="text-sm leading-relaxed text-primary-dark/80">{project.solution}</p>
          </div>
        </div>

        {/* Who it's for — helps a prospect see themselves in the case study */}
        {project.targetAudience && project.targetAudience.length > 0 && (
          <div className="flex flex-col gap-5">
            <h2 className="font-display text-2xl text-sand-light">{t("portfolio.audience_title")}</h2>
            <div className="flex flex-wrap gap-2">
              {project.targetAudience.map((audience) => (
                <span key={audience} className="rounded-full border border-sand/20 px-4 py-2 text-sm text-sand">
                  {audience}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Technical challenges — demonstrates real capability to prospects */}
        <div className="flex flex-col gap-6">
          <h2 className="font-display text-2xl text-sand-light">{t("portfolio.challenges_title")}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {project.challenges.map((challenge) => (
              <div key={challenge} className="flex items-start gap-3 rounded-xl border border-sand/10 bg-panel/30 p-4">
                <ShieldCheck size={16} className="mt-0.5 shrink-0 text-sand" />
                <span className="text-sm text-sand-light/75">{challenge}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main sections — shows the platform's real scope/complexity */}
        {project.mainSections && project.mainSections.length > 0 && (
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-2xl text-sand-light">{t("portfolio.sections_title")}</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {project.mainSections.map((section) => (
                <div key={section.title} className="rounded-xl border border-sand/10 bg-panel/30 p-5">
                  <h3 className="font-display text-base text-sand-light mb-1.5">{section.title}</h3>
                  <p className="text-sm text-sand-light/60 leading-relaxed">{section.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Features */}
        <div className="flex flex-col gap-6">
          <h2 className="font-display text-2xl text-sand-light">{t("portfolio.features_title")}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {project.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3 rounded-xl border border-sand/10 bg-panel/30 p-4">
                <Sparkles size={16} className="mt-0.5 shrink-0 text-sand" />
                <span className="text-sm text-sand-light/75">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technical approach */}
        {project.technicalApproach && (
          <div className="rounded-2xl border border-sand/10 bg-panel/30 p-8">
            <h2 className="font-display text-xl text-sand-light mb-3">{t("portfolio.tech_approach_title")}</h2>
            <p className="text-sm leading-relaxed text-sand-light/65 max-w-3xl">{project.technicalApproach}</p>
          </div>
        )}

        {/* Results */}
        <div className="flex flex-col gap-6">
          <h2 className="font-display text-2xl text-sand-light">{t("portfolio.results_title")}</h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {project.results.map((result) => (
              <div key={result} className="flex items-start gap-3 rounded-xl border border-sand/15 p-5">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-sand" />
                <span className="text-sm text-sand-light/75">{result}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Growth potential & roadmap — forward-looking, shows scalability thinking */}
        {(project.growthPotential || (project.roadmap && project.roadmap.length > 0)) && (
          <div className="grid gap-6 md:grid-cols-2">
            {project.growthPotential && (
              <div className="rounded-2xl border border-sand/10 bg-panel/40 p-8">
                <h2 className="font-display text-xl text-sand-light mb-3">{t("portfolio.growth_title")}</h2>
                <p className="text-sm leading-relaxed text-sand-light/65">{project.growthPotential}</p>
              </div>
            )}
            {project.roadmap && project.roadmap.length > 0 && (
              <div className="rounded-2xl border border-sand/10 bg-panel/40 p-8">
                <h2 className="font-display text-xl text-sand-light mb-3">{t("portfolio.roadmap_title")}</h2>
                <ul className="flex flex-col gap-2">
                  {project.roadmap.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-sand-light/65">
                      <span className="mt-2 h-1 w-1 rounded-full bg-sand/60 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Project impact — closing statement, sets up the final CTA */}
        {project.projectImpact && (
          <p className="text-center font-display text-lg md:text-xl text-sand-light/80 italic max-w-3xl mx-auto leading-relaxed">
            "{project.projectImpact}"
          </p>
        )}

        {/* Closing CTA — turn a good case study into a lead */}
        <div className="grain-overlay relative overflow-hidden rounded-2xl bg-panel border border-sand/10 px-8 py-12 text-center flex flex-col items-center gap-4">
          <h2 className="relative font-display text-2xl md:text-3xl text-sand-light">{t("hero.cta_primary")}</h2>
          <p className="relative text-sand-light/60 max-w-md">{t("contact.subtitle")}</p>
          <Button to="/contact" variant="primary" className="relative mt-2">
            {t("nav.contact")}
            <ArrowUpRight size={16} />
          </Button>
        </div>
      </Container>
    </div>
  );
}
