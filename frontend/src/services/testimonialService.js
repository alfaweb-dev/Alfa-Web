import { testimonials } from "../mock/testimonials.js";

export async function getTestimonials(lang = "fr") {
  return Promise.resolve(testimonials[lang] ?? testimonials.fr);
}
