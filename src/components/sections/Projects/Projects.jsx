import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Container from "../../layout/Container.jsx";
import SectionTitle from "../../common/SectionTitle.jsx";
import Loading from "../../common/Loading.jsx";
import { useProjects } from "../../../hooks/useProjects.js";
import { useLanguage } from "../../../i18n/LanguageContext.jsx";

const GRADIENTS = [
  "linear-gradient(135deg,#111A63,#2c3a9e)",
  "linear-gradient(135deg,#D2C2B2,#a98f77)",
  "linear-gradient(135deg,#111A63,#D2C2B2)",
  "linear-gradient(135deg,#1a2578,#111A63)",
];

export default function Projects() {
  const { t } = useLanguage();
  const { items, loading } = useProjects();

  return (
    <section id="work" className="bg-paper py-24">
      <Container>
        <SectionTitle title={t("projects.title")} />
        {loading ? (
          <Loading />
        ) : (
          <div className="grid sm:grid-cols-2 gap-7">
            {items.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-2xl overflow-hidden border border-black/5 hover:shadow-xl hover:shadow-navy/10 hover:-translate-y-1 transition"
              >
                <div
                  className="h-40 flex items-center justify-center"
                  style={{ backgroundImage: GRADIENTS[i % GRADIENTS.length] }}
                >
                  <span className="font-display font-semibold text-2xl text-white/90">{project.name}</span>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-3">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techs.map((tech) => (
                      <span key={tech} className="text-xs font-accent px-2.5 py-1 rounded-full bg-navy-tint text-navy">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/projects/${project.slug}`}
                    className="text-sm font-accent font-medium text-navy inline-flex items-center gap-1.5"
                  >
                    {t("projects.cta")} <ArrowRight size={15} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
