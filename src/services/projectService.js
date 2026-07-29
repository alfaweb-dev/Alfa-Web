import { projects } from "../mock/projects.js";

export async function getProjects(lang = "fr") {
  return Promise.resolve(projects[lang] ?? projects.fr);
}

export async function getProjectBySlug(slug, lang = "fr") {
  const list = projects[lang] ?? projects.fr;
  return Promise.resolve(list.find((p) => p.slug === slug) ?? null);
}
