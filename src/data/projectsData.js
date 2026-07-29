// Mock projects — swap for an API call to GET /projects once the backend is wired in.
// `image` is left null on purpose: real screenshots will replace the generated
// placeholder (see components/portfolio/ProjectThumb.jsx) once assets are ready.
const base = [
  { id: "dzayer-through-time", year: "2025", tags: ["React", "Node.js", "MongoDB"], image: null },
  { id: "fitora", year: "2025", tags: ["React", "NestJS", "Prisma"], image: null },
  { id: "alfa-web", year: "2026", tags: ["React", "Vite", "Tailwind"], image: null },
];

export const projectsData = {
  fr: [
    {
      ...base[0],
      name: "Dzayer Through Time",
      category: "Plateforme culturelle",
      description: "Plateforme interactive retraçant l'histoire de l'Algérie à travers une expérience visuelle immersive.",
    },
    {
      ...base[1],
      name: "Fitora",
      category: "Plateforme sportive",
      description: "Plateforme de coaching sportif avec tableaux de bord administrateur et espace apprenant.",
    },
    {
      ...base[2],
      name: "Alfa Web",
      category: "Studio digital",
      description: "Le portfolio que vous consultez actuellement — vitrine des services et projets d'Alfa Web.",
    },
  ],
  en: [
    {
      ...base[0],
      name: "Dzayer Through Time",
      category: "Cultural platform",
      description: "An interactive platform tracing Algeria's history through an immersive visual experience.",
    },
    {
      ...base[1],
      name: "Fitora",
      category: "Sports platform",
      description: "A sports coaching platform with an admin dashboard and a dedicated learner space.",
    },
    {
      ...base[2],
      name: "Alfa Web",
      category: "Digital studio",
      description: "The portfolio you're browsing right now — a showcase of Alfa Web's services and projects.",
    },
  ],
  ar: [
    {
      ...base[0],
      name: "دزاير عبر الزمن",
      category: "منصة ثقافية",
      description: "منصة تفاعلية تروي تاريخ الجزائر عبر تجربة بصرية غامرة.",
    },
    {
      ...base[1],
      name: "Fitora",
      category: "منصة رياضية",
      description: "منصة تدريب رياضي بلوحة تحكم للإدارة وفضاء مخصص للمتدربين.",
    },
    {
      ...base[2],
      name: "Alfa Web",
      category: "استوديو رقمي",
      description: "هذا الموقع الذي تتصفحه الآن — واجهة تعرض خدمات ومشاريع Alfa Web.",
    },
  ],
};
