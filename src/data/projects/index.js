// Combines every per-project file (./sql-miroir.js, ./fitora.js, ...) into the
// same { fr: [...], en: [...], ar: [...] } shape the rest of the app expects.
// To add a new project: create a new file in this folder with the same shape
// (id/year/duration/technologies/link/githubUrl/image/logo/gallery/translations),
// import it below, and add it to `allProjects`.
import { sqlMiroir } from "./sql-miroir";
import { mehneti } from "./mehneti";
import { fitora } from "./fitora";
import { dzayer3abrzaman } from "./dzayer3abrzaman";
import { unihubdz } from "./unihubdz";
import { leora } from "./leora";

export { sqlMiroir, mehneti, fitora, dzayer3abrzaman, unihubdz, leora };

export const allProjects = [sqlMiroir, mehneti, fitora, dzayer3abrzaman, unihubdz, leora];

const LANGS = ["fr", "en", "ar"];

function localizeGallery(gallery, lang) {
  return (gallery ?? []).map((shot) => ({
    url: shot.url,
    title: typeof shot.title === "object" ? shot.title[lang] : shot.title,
  }));
}

function buildProjectsData() {
  const data = {};
  for (const lang of LANGS) {
    data[lang] = allProjects.map((project) => {
      const { translations, gallery, ...base } = project;
      return { ...base, ...translations[lang], gallery: localizeGallery(gallery, lang) };
    });
  }
  return data;
}

export const projectsData = buildProjectsData();
