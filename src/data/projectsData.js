// Real project data (from Alfa Web's actual case studies), reshaped for the
// trilingual site. `image` stays null until real screenshots are uploaded —
// see components/portfolio/ProjectThumb.jsx for the generated placeholder.
// `link` / `githubUrl` are the real project URLs; leave `link` empty for
// projects not deployed publicly and the UI will show a "coming soon" state.
const base = [
  {
    id: "sql-miroir",
    year: "2025",
    duration: { fr: "2 mois", en: "2 months", ar: "شهران" },
    technologies: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS"],
    link: null,
    githubUrl: "https://github.com/ALLALI-Fadoua/SQL-Miroir",
    image: null,
    logo: "/projects/sql-miroir.png",
    gallery: [],
  },
  {
    id: "mehneti",
    year: "2025",
    duration: { fr: "5 mois", en: "5 months", ar: "5 أشهر" },
    technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io", "Redux", "JWT", "Stripe"],
    link: null,
    githubUrl: "https://github.com/ALLALI-Fadoua/Mihneti",
    image: null,
    logo: "/projects/mehneti.png",
    gallery: [],
  },
  {
    id: "fitora",
    year: "2026",
    duration: { fr: "1 mois", en: "1 month", ar: "شهر واحد" },
    technologies: ["React", "Tailwind CSS", "React Router", "Lucide React"],
    link: "https://fiitora.netlify.app/",
    githubUrl: "https://github.com/ALLALI-Fadoua/Fitora",
    image: null,
    logo: "/projects/fitora.png",
    gallery: ["/"],
  },
  {
    id: "portfolio",
    year: "2025",
    duration: { fr: "1 semaine", en: "1 week", ar: "أسبوع واحد" },
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    link: "https://my-portfolio-alfa.vercel.app/",
    githubUrl: "https://github.com/ALLALI-Fadoua/Portfolio",
    image: null,
    logo: "/projects/portfolio.png",
    gallery: [],
  },
  {
    id: "dzayer3abrzaman",
    year: "2026",
    duration: { fr: "2 semaines", en: "2 weeks", ar: "أسبوعان" },
    technologies: ["React", "Vite", "Tailwind CSS", "React Router"],
    link: "https://dzayer-through-time.netlify.app/",
    githubUrl: "https://github.com/ALLALI-Fadoua/Dzayer-Through-Time-",
    image: null,
    logo: "/projects/dzayer.png",
    gallery: [],
  },
  {
    id: "unihubdz",
    year: "2026",
    duration: { fr: "3 semaines", en: "3 weeks", ar: "3 أسابيع" },
    technologies: ["React", "Vite", "Tailwind CSS", "React Router"],
    link: "https://unihubdz.netlify.app/",
    githubUrl: "https://github.com/ALLALI-Fadoua/UniHub-DZ",
    image: null,
    logo: "/projects/unihubdz.png",
    gallery: [],
  },
  {
    id: "leora",
    year: "2026",
    duration: { fr: "1 mois", en: "1 month", ar: "شهر واحد" },
    technologies: ["React", "Tailwind CSS", "React Router", "Vite"],
    link: "",
    githubUrl: "",
    image: null,
    logo: "/projects/leora.png",
    gallery: [],
  },
];

const byId = Object.fromEntries(base.map((p) => [p.id, p]));

export const projectsData = {
  fr: [
    {
      ...byId["sql-miroir"],
      name: "SQL Miroir",
      category: "Simulateur de base de données",
      subtitle: "Pratiquer le SQL sans jamais installer de serveur",
      context:
        "Pensé pour les étudiants et les professionnels qui veulent s'entraîner sur des opérations SQL sans installer un vrai serveur de base de données — une expérience de simulation complète, directement dans le navigateur.",
      problem:
        "Apprendre le SQL demande en général d'installer et de configurer un vrai serveur de base de données — une vraie barrière pour les étudiants et débutants qui veulent simplement s'exercer.",
      solution:
        "SQL Miroir simule un SGBD complet directement dans le navigateur : création de bases, tables, clés primaires/étrangères, et exécution de requêtes SQL en temps réel, sans aucune installation.",
      challenges: [
        "Construire un parseur SQL personnalisé",
        "Optimiser les performances sur de grandes tables",
        "Gérer la concurrence des requêtes",
        "Adapter l'interface à tous les écrans",
      ],
      features: [
        "Simulation complète de bases de données et de tables",
        "Exécution de requêtes SQL en temps réel",
        "Gestion des métadonnées et du schéma",
        "Validation des requêtes et gestion détaillée des erreurs",
        "Support des jointures et des relations",
      ],
      results: [
        "Projet noté 16/15 par les évaluateurs",
        "Apprentissage du SQL nettement facilité",
        "Bonnes performances même avec de gros jeux de données",
      ],
    },
    {
      ...byId["mehneti"],
      name: "Mehneti.dz",
      category: "Plateforme de recrutement",
      subtitle: "Le recrutement intelligent, pensé pour l'Algérie",
      context:
        "Une plateforme pensée pour les candidats comme pour les recruteurs en Algérie, avec un algorithme de matching par compétences et localisation, un chat en temps réel et des tableaux de bord détaillés.",
      problem:
        "En Algérie, la recherche d'emploi reste largement manuelle : candidatures dispersées par e-mail, aucune mise en relation pertinente entre profils et offres, suivi laborieux côté recruteur.",
      solution:
        "Mehneti.dz connecte candidats et employeurs grâce à un algorithme de matching intelligent, un chat en temps réel et des tableaux de bord dédiés à chaque profil, pour fluidifier tout le processus de recrutement.",
      challenges: [
        "Algorithme de matching basé sur les compétences et la localisation",
        "Architecture scalable pour gérer des milliers d'utilisateurs",
        "Mise en place d'un chat temps réel performant",
        "Sécurisation des données sensibles des utilisateurs",
      ],
      features: [
        "Matching intelligent candidat ↔ employeur",
        "Chat en temps réel (Socket.io)",
        "Tableaux de bord analytiques pour chaque rôle",
        "Génération de CV multi-formats",
        "Filtres de recherche avancés",
      ],
      results: [
        "Forte croissance des utilisateurs dès le lancement",
        "Premiers partenariats avec des entreprises locales",
        "Adopté par de jeunes chercheurs d'emploi en Algérie",
      ],
    },
    {
      ...byId["fitora"],
      name: "Fitora",
      category: "Plateforme de coaching sportif",
      subtitle: "Coachs et athlètes réunis sur une seule plateforme",
      context:
        "Conçue exclusivement pour l'industrie du coaching sportif, avec des espaces dédiés aux coachs, aux athlètes et aux administrateurs — gestion des programmes, des réservations, des paiements et du suivi de performance, en arabe (RTL) et mode sombre.",
      problem:
        "Trouver un coach qualifié et suivre un programme personnalisé reste compliqué : peu d'outils réunissent réservation, suivi de progression et paiement dans une seule expérience, surtout en arabe.",
      solution:
        "Fitora réunit coachs et athlètes en mode sombre, en arabe (RTL) : réservation de séances, programmes personnalisés, suivi des objectifs et paiements, avec un espace dédié pour chaque rôle.",
      challenges: [
        "Concevoir trois espaces indépendants avec un système de mise en page partagé",
        "Construire une interface arabe (RTL) entièrement interactive en mode sombre",
        "Créer un calendrier dynamique pour les séances et activités",
        "Structurer des programmes d'entraînement personnalisés avec modules et exercices",
      ],
      features: [
        "Espace coach : gestion des séances et des programmes",
        "Espace athlète : réservations, paiements, suivi de progression",
        "Calendrier interactif des séances",
        "Suivi des objectifs et récompenses sportives",
        "Tableau de bord des revenus et commissions",
      ],
      results: [
        "Interface multi-rôles entièrement fonctionnelle",
        "Tableau de bord coach avec calendrier et revenus",
        "Architecture prête pour l'intégration d'un vrai backend",
      ],
    },
    {
      ...byId["portfolio"],
      name: "Portfolio personnel",
      category: "Site vitrine",
      subtitle: "Une vitrine professionnelle qui charge en moins d'une seconde",
      context:
        "Ce portfolio démontre la maîtrise des technologies web modernes et des principes de design actuels, avec une expérience utilisateur soignée sur tous les appareils.",
      problem:
        "Un développeur a besoin d'une vitrine crédible pour montrer ses compétences — mais beaucoup de portfolios sont lents, peu soignés visuellement, ou mal adaptés au mobile.",
      solution:
        "Un portfolio au design moderne, en mode clair/sombre, avec des animations fluides (Framer Motion) et un temps de chargement inférieur à une seconde, pour une première impression professionnelle sur tous les appareils.",
      challenges: [
        "Gérer la responsivité sur de multiples appareils",
        "Créer une navigation intuitive et minimaliste",
        "Maintenir un design cohérent entre mode clair et sombre",
        "Personnaliser le portfolio pour refléter une identité de développeur",
      ],
      features: [
        "Mode clair/sombre avec transition fluide",
        "Formulaire de contact fonctionnel",
        "Navigation fluide entre les sections",
        "Performance optimisée, chargement ultra rapide",
      ],
      results: [
        "Temps de chargement inférieur à 1 seconde",
        "Déploiement sans erreur sur Vercel",
        "Expérience utilisateur fluide et immersive",
      ],
    },
    {
      ...byId["dzayer3abrzaman"],
      name: "دزاير عبر الزمن",
      category: "Plateforme éducative",
      subtitle: "L'histoire de l'Algérie, racontée en une frise interactive",
      context:
        "Conçue pour rendre l'histoire de l'Algérie plus accessible aux étudiants, enseignants et passionnés, en combinant storytelling, navigation interactive et design responsive.",
      problem:
        "L'histoire de l'Algérie est riche mais souvent présentée de façon aride — peu d'outils numériques la rendent vivante et accessible aux étudiants et aux curieux.",
      solution:
        "دزاير عبر الزمن transforme cette histoire en une frise chronologique interactive : événements clés, figures historiques et grandes époques à explorer avec une navigation moderne et fluide.",
      challenges: [
        "Concevoir une navigation chronologique intuitive",
        "Structurer une grande quantité d'informations historiques clairement",
        "Créer des composants de frise responsive pour tous les écrans",
        "Optimiser les performances avec un contenu multimédia riche",
      ],
      features: [
        "Frise chronologique interactive",
        "Pages détaillées pour les figures historiques",
        "Recherche et filtrage par époque",
        "Interface moderne avec animations fluides",
        "Contenu organisé chronologiquement",
      ],
      results: [
        "Plateforme éducative complète livrée",
        "Navigation fluide sur toute la frise",
        "Architecture React propre, prête pour un backend/CMS",
      ],
    },
    {
      ...byId["unihubdz"],
      name: "UniHub DZ",
      category: "Plateforme étudiante",
      subtitle: "Toute la vie étudiante algérienne, centralisée",
      context:
        "Pensée pour simplifier la vie étudiante en centralisant ressources académiques, clubs, événements et opportunités dans un seul espace numérique accessible et collaboratif.",
      problem:
        "Les étudiants algériens jonglent entre plusieurs sources dispersées pour trouver des clubs, événements, stages ou bourses — l'information est fragmentée et difficile à centraliser.",
      solution:
        "UniHub DZ centralise tout en un seul endroit : annuaire des universités, clubs étudiants, événements, stages et bourses, avec profils et recherche, pour simplifier la vie étudiante.",
      challenges: [
        "Concevoir une architecture évolutive pour des ressources variées",
        "Créer des composants réutilisables pour plusieurs types de contenu",
        "Construire un système de navigation intuitif",
        "Gérer efficacement de grands volumes de données",
      ],
      features: [
        "Annuaire des universités",
        "Clubs et associations étudiantes",
        "Liste des événements et ateliers",
        "Stages et offres d'emploi",
        "Bourses et concours",
      ],
      results: [
        "Plateforme étudiante complète livrée",
        "Interface moderne et responsive",
        "Architecture prête pour l'intégration backend",
      ],
    },
    {
      ...byId["leora"],
      name: "LÉORA",
      category: "Boutique e-commerce de chaussures",
      subtitle: "Une expérience digitale élégante pour une boutique de chaussures féminines",
      context:
        "LÉORA est une boutique digitale pensée pour une marque de chaussures féminines souhaitant présenter ses collections dans une expérience moderne, élégante et immersive. Le projet transforme une simple présence sur les réseaux sociaux en une véritable expérience e-commerce.",
      problem:
        "De nombreuses boutiques de chaussures vendent principalement via Instagram et Facebook, ce qui rend la présentation des produits, la recherche d'informations et le passage de commande moins structurés. Les clientes doivent souvent parcourir plusieurs publications ou contacter directement la boutique pour obtenir les détails d'un produit.",
      solution:
        "LÉORA propose une boutique en ligne moderne permettant de découvrir les collections, consulter les détails des chaussures, choisir les variantes disponibles et accéder rapidement aux informations nécessaires avant l'achat, dans une interface pensée autour de l'élégance de la marque.",
      challenges: [
        "Créer une identité digitale élégante adaptée à une boutique féminine",
        "Mettre en valeur les chaussures à travers une présentation visuelle immersive",
        "Construire une navigation simple et intuitive pour parcourir les collections",
        "Créer une expérience responsive adaptée au mobile et aux réseaux sociaux",
        "Structurer les produits, catégories, tailles, couleurs et prix de manière claire",
      ],
      features: [
        "Homepage immersive avec mise en avant des collections",
        "Catalogue de chaussures avec catégories",
        "Fiches produits détaillées",
        "Gestion des tailles, couleurs et prix",
        "Présentation des produits avec images haute qualité",
        "Interface responsive mobile, tablette et desktop",
        "Navigation fluide et expérience utilisateur moderne",
        "Design adapté à l'identité visuelle de LÉORA",
      ],
      results: [
        "Création d'une identité digitale élégante pour LÉORA",
        "Transformation d'une boutique présente sur les réseaux sociaux en expérience web professionnelle",
        "Présentation plus claire et attractive des collections",
        "Expérience responsive pensée en priorité pour les utilisatrices mobiles",
        "Base évolutive pouvant accueillir de futures fonctionnalités e-commerce",
    ],
  },
  ],

  en: [
    {
      ...byId["sql-miroir"],
      name: "SQL Miroir",
      category: "Database simulator",
      subtitle: "Practice SQL without ever installing a server",
      context:
        "Built for students and professionals who want to practice SQL operations without installing a full RDBMS — a complete simulation experience, right in the browser.",
      problem:
        "Learning SQL usually means installing and configuring a real database server — a real barrier for students and beginners who just want to practice queries.",
      solution:
        "SQL Miroir simulates a full RDBMS right in the browser: creating databases, tables, primary/foreign keys, and running SQL queries in real time, with no installation at all.",
      challenges: [
        "Building a custom SQL parser",
        "Performance optimization for large tables",
        "Managing query concurrency",
        "Responsive interface for all devices",
      ],
      features: [
        "Full simulation of databases and tables",
        "Real-time SQL query execution",
        "Metadata and schema management",
        "Query validation and detailed error handling",
        "Support for joins and relations",
      ],
      results: [
        "Project graded 16/15 by evaluators",
        "Noticeably easier SQL learning",
        "Good performance even with large datasets",
      ],
    },
    {
      ...byId["mehneti"],
      name: "Mehneti.dz",
      category: "Recruitment platform",
      subtitle: "Intelligent recruitment, built for Algeria",
      context:
        "A platform built for both candidates and recruiters in Algeria, powered by a skills-and-location matching algorithm, real-time chat and detailed dashboards.",
      problem:
        "In Algeria, job hunting is still largely manual: applications scattered across emails, no relevant matching between profiles and openings, and a slow process for recruiters.",
      solution:
        "Mehneti.dz connects candidates and employers through an intelligent matching algorithm, real-time chat, and dedicated dashboards for every role, streamlining the whole recruitment process.",
      challenges: [
        "Matching algorithm based on skills and location",
        "Scalable architecture to handle thousands of users",
        "Implementing high-performance real-time chat",
        "Securing sensitive user data",
      ],
      features: [
        "Intelligent candidate ↔ employer matching",
        "Real-time chat (Socket.io)",
        "Analytics dashboards for every role",
        "Multi-format CV generation",
        "Advanced search filters",
      ],
      results: [
        "Strong user growth right after launch",
        "First partnerships with local companies",
        "Adopted by young job seekers across Algeria",
      ],
    },
    {
      ...byId["fitora"],
      name: "Fitora",
      category: "Sports coaching platform",
      subtitle: "Coaches and athletes, one platform",
      context:
        "Designed exclusively for the sports coaching industry, with dedicated spaces for coaches, athletes and admins — managing programs, bookings, payments and performance tracking, in Arabic (RTL) dark mode.",
      problem:
        "Finding a qualified coach and following a personalized program is hard — few tools bring booking, progress tracking and payments together in one experience, especially in Arabic.",
      solution:
        "Fitora brings coaches and athletes together in a sleek dark-mode, Arabic (RTL) experience: session booking, personalized training programs, goal tracking and payments, with a dedicated space for each role.",
      challenges: [
        "Designing three independent role-based spaces with a shared layout system",
        "Building a fully interactive Arabic RTL dark-mode interface",
        "Creating a dynamic calendar for sessions and activities",
        "Structuring personalized training programs with modules and exercises",
      ],
      features: [
        "Coach space: session and program management",
        "Athlete space: bookings, payments, progress tracking",
        "Interactive session calendar",
        "Sports goals and achievement tracking",
        "Earnings and commission dashboard",
      ],
      results: [
        "Fully functional multi-role UI",
        "Coach dashboard with calendar and earnings",
        "Architecture ready for real backend integration",
      ],
    },
    {
      ...byId["portfolio"],
      name: "Personal portfolio",
      category: "Showcase website",
      subtitle: "A professional showcase that loads in under a second",
      context:
        "This portfolio demonstrates mastery of modern web technologies and current design principles, with a polished user experience across every device.",
      problem:
        "A developer needs a credible showcase for their skills — but many portfolios are slow, visually rough, or poorly adapted to mobile.",
      solution:
        "A modern portfolio with light/dark mode, smooth Framer Motion animations, and under one second load time, making a professional first impression on every device.",
      challenges: [
        "Managing responsiveness across multiple devices",
        "Creating an intuitive, minimalist navigation system",
        "Maintaining consistent design between light and dark mode",
        "Personalizing the portfolio to reflect a developer's identity",
      ],
      features: [
        "Light/dark mode with smooth transition",
        "Working contact form",
        "Smooth navigation between sections",
        "Optimized performance, ultra-fast loading",
      ],
      results: [
        "Load time under 1 second",
        "Deployed on Vercel with zero errors",
        "Smooth, immersive user experience",
      ],
    },
    {
      ...byId["dzayer3abrzaman"],
      name: "Dzayer Through Time",
      category: "Educational platform",
      subtitle: "Algeria's history, told as an interactive timeline",
      context:
        "Designed to make Algeria's history more accessible to students, educators and enthusiasts, combining storytelling, interactive navigation and responsive design.",
      problem:
        "Algeria's history is rich but often presented in a dry, textbook way — few digital tools make it lively and accessible for students and curious minds.",
      solution:
        "Dzayer Through Time turns that history into an interactive timeline: key events, historical figures and major eras to explore through smooth, modern navigation.",
      challenges: [
        "Designing an intuitive chronological navigation experience",
        "Structuring large amounts of historical information clearly",
        "Creating responsive timeline components for all screens",
        "Optimizing performance with rich multimedia content",
      ],
      features: [
        "Interactive historical timeline",
        "Detailed pages for historical figures",
        "Search and filtering by era",
        "Modern UI with smooth animations",
        "Content organized chronologically",
      ],
      results: [
        "Complete educational platform delivered",
        "Smooth navigation across the whole timeline",
        "Clean React architecture, ready for a backend/CMS",
      ],
    },
    {
      ...byId["unihubdz"],
      name: "UniHub DZ",
      category: "Student platform",
      subtitle: "Algerian student life, all in one place",
      context:
        "Built to simplify student life by centralizing academic resources, clubs, events and opportunities in one accessible, collaborative digital hub.",
      problem:
        "Algerian students juggle scattered sources to find clubs, events, internships or scholarships — information is fragmented and hard to keep track of.",
      solution:
        "UniHub DZ centralizes everything in one place: a university directory, student clubs, events, internships and scholarships, with profiles and search, to simplify student life.",
      challenges: [
        "Designing a scalable information architecture for diverse resources",
        "Creating reusable components for multiple content types",
        "Building an intuitive navigation system",
        "Managing large datasets efficiently",
      ],
      features: [
        "University directory",
        "Student clubs and organizations",
        "Events and workshops listing",
        "Internships and job opportunities",
        "Scholarships and competitions",
      ],
      results: [
        "Complete student platform delivered",
        "Modern, responsive interface",
        "Architecture ready for backend integration",
      ],
    },
    {
      ...byId["leora"],
      name: "LÉORA",
      category: "Footwear E-commerce Store",
      subtitle: "An elegant digital experience designed for a women's footwear brand",
      context:
        "LÉORA is a digital storefront designed for a women's footwear brand looking to present its collections through a modern, elegant and immersive experience. The project transforms a social-media-based presence into a professional web experience.",
      problem:
        "Many footwear boutiques mainly sell through Instagram and Facebook, making product discovery, information access and ordering less structured. Customers often have to browse multiple posts or contact the store directly to get product details.",
      solution:
        "LÉORA provides a modern online storefront where customers can discover collections, explore detailed product pages, check available variants and quickly access the information they need before purchasing, all within an elegant brand-focused interface.",
      challenges: [
        "Creating an elegant digital identity for a women's footwear brand",
        "Showcasing footwear through an immersive visual experience",
        "Building simple and intuitive collection navigation",
        "Creating a responsive experience optimized for mobile users",
        "Structuring products, categories, sizes, colors and prices clearly",
      ],
      features: [
        "Immersive homepage showcasing collections",
        "Footwear catalog with categories",
        "Detailed product pages",
        "Size, color and price information",
        "High-quality product presentation",
        "Responsive mobile, tablet and desktop experience",
        "Smooth navigation and modern user experience",
        "Design aligned with LÉORA's visual identity",
      ],
      results: [
        "Created an elegant digital identity for LÉORA",
        "Transformed a social-media-based boutique into a professional web experience",
        "Improved product and collection presentation",
        "Designed a mobile-first experience for customers",
        "Created a scalable foundation for future e-commerce features",
      ],
    },
  ],

  ar: [
    {
      ...byId["sql-miroir"],
      name: "SQL Miroir",
      category: "محاكي قواعد بيانات",
      subtitle: "تعلّم SQL دون تثبيت أي خادم",
      context:
        "صُمم للطلاب والمحترفين الراغبين في التدرب على عمليات SQL دون تثبيت خادم قاعدة بيانات كامل — تجربة محاكاة متكاملة داخل المتصفح مباشرة.",
      problem:
        "تعلّم SQL يتطلب عادة تثبيت وضبط خادم قاعدة بيانات حقيقي — عائق حقيقي أمام الطلاب والمبتدئين الذين يريدون فقط التدرب على الاستعلامات.",
      solution:
        "يحاكي SQL Miroir نظام إدارة قواعد بيانات كاملاً داخل المتصفح مباشرة: إنشاء قواعد وجداول ومفاتيح أساسية/أجنبية، وتنفيذ استعلامات SQL لحظيًا دون أي تثبيت.",
      challenges: [
        "بناء محلل SQL مخصص",
        "تحسين الأداء مع الجداول الكبيرة",
        "إدارة تزامن الاستعلامات",
        "واجهة متجاوبة مع جميع الشاشات",
      ],
      features: [
        "محاكاة كاملة لقواعد البيانات والجداول",
        "تنفيذ استعلامات SQL في الوقت الفعلي",
        "إدارة البيانات الوصفية وهيكل القاعدة",
        "التحقق من الاستعلامات ومعالجة تفصيلية للأخطاء",
        "دعم الربط بين الجداول والعلاقات",
      ],
      results: [
        "حصل المشروع على تقييم استثنائي 16/15",
        "تعلّم SQL أصبح أسهل وأسرع",
        "أداء جيد حتى مع مجموعات بيانات كبيرة",
      ],
    },
    {
      ...byId["mehneti"],
      name: "Mehneti.dz",
      category: "منصة توظيف",
      subtitle: "التوظيف الذكي، مصمم خصيصًا للجزائر",
      context:
        "منصة مصممة للباحثين عن عمل وأصحاب العمل في الجزائر، بخوارزمية مطابقة تعتمد على المهارات والموقع، ومحادثة فورية، ولوحات تحكم تفصيلية.",
      problem:
        "في الجزائر، لا يزال البحث عن عمل يتم يدويًا في الغالب: طلبات متفرقة عبر البريد الإلكتروني، وغياب ربط فعلي بين الملفات والعروض، ومتابعة صعبة بالنسبة لأصحاب العمل.",
      solution:
        "تربط Mehneti.dz بين الباحثين عن عمل وأصحاب العمل عبر خوارزمية مطابقة ذكية، ومحادثة فورية، ولوحات تحكم مخصصة لكل فئة، لتسهيل عملية التوظيف بأكملها.",
      challenges: [
        "خوارزمية مطابقة تعتمد على المهارات والموقع",
        "بنية قابلة للتوسع لاستيعاب آلاف المستخدمين",
        "تطبيق محادثة فورية عالية الأداء",
        "تأمين البيانات الحساسة للمستخدمين",
      ],
      features: [
        "مطابقة ذكية بين المرشح وصاحب العمل",
        "محادثة فورية (Socket.io)",
        "لوحات تحكم تحليلية لكل فئة",
        "توليد السيرة الذاتية بعدة صيغ",
        "فلاتر بحث متقدمة",
      ],
      results: [
        "نمو قوي للمستخدمين منذ الإطلاق",
        "أولى الشراكات مع شركات محلية",
        "اعتماد المنصة من طرف باحثين شباب عن عمل في الجزائر",
      ],
    },
    {
      ...byId["fitora"],
      name: "Fitora",
      category: "منصة تدريب رياضي",
      subtitle: "المدربون والرياضيون في منصة واحدة",
      context:
        "صُممت خصيصًا لقطاع التدريب الرياضي، بفضاءات مستقلة للمدربين والرياضيين والإداريين — إدارة البرامج والحجوزات والمدفوعات ومتابعة الأداء، بواجهة عربية (RTL) داكنة.",
      problem:
        "إيجاد مدرب رياضي مؤهل ومتابعة برنامج تدريبي مخصص أمر معقد — قلة من الأدوات تجمع الحجز ومتابعة التقدم والدفع في تجربة واحدة، خصوصًا باللغة العربية.",
      solution:
        "تجمع Fitora بين المدربين والرياضيين في تجربة داكنة وباللغة العربية (RTL): حجز الحصص، برامج تدريبية مخصصة، متابعة الأهداف والدفع، مع فضاء مستقل لكل فئة.",
      challenges: [
        "تصميم ثلاثة فضاءات مستقلة بنظام تخطيط مشترك",
        "بناء واجهة عربية (RTL) تفاعلية بالكامل بوضع داكن",
        "إنشاء تقويم ديناميكي للحصص والأنشطة",
        "هيكلة برامج تدريبية مخصصة بوحدات وتمارين",
      ],
      features: [
        "فضاء المدرب: إدارة الحصص والبرامج",
        "فضاء الرياضي: الحجوزات، الدفع، متابعة التقدم",
        "تقويم تفاعلي للحصص",
        "متابعة الأهداف الرياضية والإنجازات",
        "لوحة تحكم للأرباح والعمولات",
      ],
      results: [
        "واجهة متعددة الأدوار تعمل بالكامل",
        "لوحة تحكم للمدرب مع تقويم وأرباح",
        "بنية جاهزة للربط بخادم حقيقي",
      ],
    },
    {
      ...byId["portfolio"],
      name: "الموقع الشخصي",
      category: "موقع عرض شخصي",
      subtitle: "واجهة احترافية تُحمّل في أقل من ثانية",
      context:
        "يُظهر هذا الموقع إتقانًا لأحدث تقنيات الويب ومبادئ التصميم الحالية، بتجربة مستخدم متقنة على جميع الأجهزة.",
      problem:
        "يحتاج كل مطور إلى واجهة موثوقة لعرض مهاراته — لكن كثيرًا من المواقع الشخصية بطيئة، أو غير مصقولة بصريًا، أو غير متوافقة جيدًا مع الهاتف.",
      solution:
        "موقع شخصي بتصميم عصري، بوضعين فاتح وداكن، وحركات سلسة (Framer Motion)، وزمن تحميل أقل من ثانية، لانطباع أول احترافي على جميع الأجهزة.",
      challenges: [
        "إدارة التجاوب عبر أجهزة متعددة",
        "إنشاء تنقل بديهي وبسيط",
        "الحفاظ على تصميم متناسق بين الوضعين الفاتح والداكن",
        "تخصيص الموقع ليعكس هوية المطور",
      ],
      features: [
        "وضع فاتح/داكن بانتقال سلس",
        "نموذج تواصل يعمل فعليًا",
        "تنقل سلس بين الأقسام",
        "أداء محسّن وتحميل فائق السرعة",
      ],
      results: [
        "زمن تحميل أقل من ثانية واحدة",
        "نشر بدون أي خطأ على Vercel",
        "تجربة مستخدم سلسة وغامرة",
      ],
    },
    {
      ...byId["dzayer3abrzaman"],
      name: "دزاير عبر الزمن",
      category: "منصة تعليمية",
      subtitle: "تاريخ الجزائر، في خط زمني تفاعلي",
      context:
        "صُممت لجعل تاريخ الجزائر أكثر سهولة بالنسبة للطلاب والمعلمين والمهتمين، بالجمع بين السرد القصصي والتنقل التفاعلي والتصميم المتجاوب.",
      problem:
        "تاريخ الجزائر غني لكنه غالبًا ما يُقدَّم بطريقة جافة — قلة من الأدوات الرقمية تجعله حيًا ومتاحًا للطلاب والمهتمين.",
      solution:
        "يحوّل دزاير عبر الزمن هذا التاريخ إلى خط زمني تفاعلي: أحداث رئيسية، شخصيات تاريخية، وعصور كبرى يمكن استكشافها عبر تنقل عصري وسلس.",
      challenges: [
        "تصميم تجربة تنقل زمني بديهية",
        "هيكلة كم كبير من المعلومات التاريخية بوضوح",
        "إنشاء مكونات خط زمني متجاوبة مع كل الشاشات",
        "تحسين الأداء مع محتوى وسائط غني",
      ],
      features: [
        "خط زمني تاريخي تفاعلي",
        "صفحات مفصلة للشخصيات التاريخية",
        "بحث وتصفية حسب العصر",
        "واجهة عصرية بحركات سلسة",
        "محتوى منظم زمنيًا",
      ],
      results: [
        "منصة تعليمية متكاملة تم تسليمها",
        "تنقل سلس عبر كامل الخط الزمني",
        "بنية React نظيفة وجاهزة لخادم/CMS",
      ],
    },
    {
      ...byId["unihubdz"],
      name: "UniHub DZ",
      category: "منصة طلابية",
      subtitle: "الحياة الجامعية الجزائرية في مكان واحد",
      context:
        "صُممت لتبسيط الحياة الطلابية عبر تجميع الموارد الأكاديمية والنوادي والفعاليات والفرص في مركز رقمي واحد سهل الوصول وتعاوني.",
      problem:
        "يتنقل الطلاب الجزائريون بين مصادر متفرقة للعثور على النوادي والفعاليات والتربصات أو المنح — المعلومة مشتتة ويصعب تتبعها.",
      solution:
        "توحّد UniHub DZ كل شيء في مكان واحد: دليل الجامعات، النوادي الطلابية، الفعاليات، التربصات والمنح، مع ملفات شخصية وبحث، لتبسيط الحياة الطلابية.",
      challenges: [
        "تصميم بنية معلوماتية قابلة للتوسع لموارد متنوعة",
        "إنشاء مكونات قابلة لإعادة الاستخدام لأنواع محتوى متعددة",
        "بناء نظام تنقل بديهي",
        "إدارة مجموعات بيانات كبيرة بكفاءة",
      ],
      features: [
        "دليل الجامعات",
        "النوادي والجمعيات الطلابية",
        "قائمة الفعاليات وورشات العمل",
        "فرص التربص والعمل",
        "المنح الدراسية والمسابقات",
      ],
      results: [
        "منصة طلابية متكاملة تم تسليمها",
        "واجهة عصرية ومتجاوبة",
        "بنية جاهزة للربط بخادم خلفي",
      ],
    },
    {
      ...byId["leora"],
      name: "LÉORA",
      category: "متجر إلكتروني للأحذية",
      subtitle: "تجربة رقمية أنيقة مصممة لعلامة متخصصة في الأحذية النسائية",
      context:
        "LÉORA هو متجر رقمي صُمم لعلامة متخصصة في الأحذية النسائية، بهدف تقديم مجموعاتها من خلال تجربة عصرية وأنيقة وجذابة. يحوّل المشروع الحضور على مواقع التواصل الاجتماعي إلى تجربة ويب احترافية.",
      problem:
        "تعتمد العديد من متاجر الأحذية على Instagram وFacebook لعرض منتجاتها، مما يجعل اكتشاف المنتجات والحصول على المعلومات وإتمام الطلب أقل تنظيمًا. غالبًا ما تضطر العميلة إلى البحث بين المنشورات أو التواصل مباشرة مع المتجر لمعرفة تفاصيل المنتج.",
      solution:
        "يوفر LÉORA متجرًا إلكترونيًا عصريًا يسمح للعميلات باكتشاف المجموعات، استعراض تفاصيل الأحذية، معرفة المقاسات والألوان المتوفرة والوصول بسهولة إلى المعلومات اللازمة قبل الشراء، ضمن واجهة تعكس هوية العلامة.",
      challenges: [
        "إنشاء هوية رقمية أنيقة تناسب علامة متخصصة في الأحذية النسائية",
        "إبراز الأحذية من خلال تجربة بصرية جذابة",
        "إنشاء تنقل بسيط وسهل بين مختلف المجموعات",
        "تصميم تجربة متجاوبة ومناسبة خصوصًا لمستخدمي الهاتف",
        "تنظيم المنتجات والتصنيفات والمقاسات والألوان والأسعار بشكل واضح",
      ],
      features: [
        "صفحة رئيسية جذابة لعرض المجموعات",
        "كتالوج للأحذية مع التصنيفات",
        "صفحات تفصيلية للمنتجات",
        "عرض المقاسات والألوان والأسعار",
        "عرض المنتجات بجودة عالية",
        "تصميم متجاوب للهاتف واللوحي والحاسوب",
        "تنقل سلس وتجربة مستخدم عصرية",
        "تصميم متناسق مع الهوية البصرية لـ LÉORA",
      ],
      results: [
        "إنشاء هوية رقمية أنيقة لعلامة LÉORA",
        "تحويل حضور المتجر على مواقع التواصل إلى تجربة ويب احترافية",
        "تقديم المجموعات والمنتجات بطريقة أوضح وأكثر جاذبية",
        "تصميم تجربة موجهة بشكل أساسي لمستخدمي الهاتف",
        "إنشاء قاعدة قابلة للتطوير وإضافة خصائص تجارة إلكترونية مستقبلية",
      ],
    },
  ],
};
