import { services } from "../mock/services.js";

export async function getServices(lang = "fr") {
  // Swap this with a real API call, e.g. fetch(`/api/services?lang=${lang}`)
  return Promise.resolve(services[lang] ?? services.fr);
}
