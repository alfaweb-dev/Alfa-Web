// All data for the دزاير عبر الزمن (Dzayer Through Time) project lives in this one file.
export const dzayer3abrzaman = {
  id: "dzayer3abrzaman",
  year: "2026",
  duration: { fr: "2 semaines", en: "2 weeks", ar: "أسبوعان" },
  technologies: ["React", "Vite", "Tailwind CSS", "React Router"],
  link: "https://dzayer-through-time.netlify.app/",
  githubUrl: "https://github.com/ALLALI-Fadoua/Dzayer-Through-Time-",
  image: "/projects/dzayer3abrzaman/Dzayer-Home.png",
  logo: "/projects/dzayer.png",

  gallery: [
    { url: "/projects/dzayer3abrzaman/Dzayer-Home.png", title: { fr: "Page d'accueil", en: "Homepage", ar: "الصفحة الرئيسية" } },
    { url: "/projects/dzayer3abrzaman/Dzayer-Timeline.png", title: { fr: "Frise chronologique interactive", en: "Interactive historical timeline", ar: "الخط الزمني التاريخي التفاعلي" } },
    { url: "/projects/dzayer3abrzaman/Dzayer-Eras.png", title: { fr: "Époques historiques", en: "Historical eras", ar: "العصور التاريخية" } },
    { url: "/projects/dzayer3abrzaman/Dzayer-Events.png", title: { fr: "Grands événements historiques", en: "Major historical events", ar: "الأحداث التاريخية الكبرى" } },
    { url: "/projects/dzayer3abrzaman/Dzayer-Figures.png", title: { fr: "Figures historiques", en: "Historical figures", ar: "الشخصيات التاريخية" } },
    { url: "/projects/dzayer3abrzaman/Dzayer-admin.png", title: { fr: "Tableau de bord admin", en: "Admin dashboard", ar: "لوحة تحكم الإدارة" } },
    { url: "/projects/dzayer3abrzaman/Dzayer-static2.png", title: { fr: "Gestion des années (admin)", en: "Admin years management", ar: "إدارة السنوات" } },
    { url: "/projects/dzayer3abrzaman/Dzayer-static1.png", title: { fr: "Gestion des statistiques (admin)", en: "Admin statistics management", ar: "إدارة الإحصائيات" } },
    { url: "/projects/dzayer3abrzaman/Dzayer-static.png", title: { fr: "Statistiques d'évolution", en: "Statistics of evolution", ar: "إحصائيات التطور" } },
    { url: "/projects/dzayer3abrzaman/Dzayer-static3.png", title: { fr: "Sections du site", en: "Site sections", ar: "أقسام الموقع" } },
  ],

  translations: {
    fr: {
      name: "دزاير عبر الزمن",
      category: "Plateforme éducative",
      subtitle: "L'histoire de l'Algérie, racontée en une frise interactive",
      shortDescription:
        "دزاير عبر الزمن est une plateforme numérique dédiée à la découverte et à la valorisation de l'histoire de l'Algérie. Elle transforme une grande quantité d'informations historiques en une expérience interactive permettant de parcourir les années, les époques, les événements et les figures historiques à travers une interface moderne.",
      context:
        "L'histoire de l'Algérie représente un patrimoine culturel et historique extrêmement riche. Pourtant, son exploration numérique reste souvent limitée à des articles, des documents PDF ou des archives présentant les informations sous une forme principalement textuelle. دزاير عبر الزمن part de cette problématique pour proposer une nouvelle manière de découvrir, comprendre et transmettre l'histoire.",
      vision:
        "Créer un espace numérique où l'histoire de l'Algérie devient plus vivante, plus visuelle et plus facile à explorer, en remplaçant la recherche parmi de nombreuses pages par une exploration naturelle à travers une ligne du temps.",
      objective:
        "Rendre l'histoire algérienne plus accessible aux nouvelles générations en utilisant les possibilités du web : interaction, visualisation, navigation chronologique, recherche, filtres et contenu multimédia.",
      problem:
        "Les ressources historiques sont nombreuses mais souvent fragmentées : un étudiant qui souhaite comprendre une période précise doit généralement consulter plusieurs sources différentes, dans des formats peu engageants pour un public habitué aux expériences numériques interactives.",
      solution:
        "دزاير عبر الزمن centralise et organise les informations historiques autour d'une expérience chronologique : l'utilisateur part d'une vue globale de l'histoire de l'Algérie puis approfondit progressivement une année, une période, un événement ou une personnalité.",
      targetAudience: [
        "Élèves et étudiants souhaitant découvrir ou réviser l'histoire de l'Algérie",
        "Enseignants recherchant un support numérique complémentaire",
        "Passionnés d'histoire et de patrimoine algérien",
        "Établissements scolaires et universitaires",
        "Institutions culturelles et patrimoniales",
      ],
      mainSections: [
        { title: "Accueil", description: "Présentation de la plateforme, de son concept et accès rapide aux principales sections historiques." },
        { title: "Frise chronologique", description: "Cœur de la plateforme permettant de parcourir l'histoire de l'Algérie année après année." },
        { title: "Époques historiques", description: "Organisation de l'histoire en grandes périodes permettant d'obtenir rapidement une vue d'ensemble." },
        { title: "Événements historiques", description: "Présentation détaillée des événements majeurs avec leur contexte et leur position dans la chronologie." },
        { title: "Figures historiques", description: "Pages dédiées aux personnalités ayant joué un rôle important dans l'histoire de l'Algérie." },
        { title: "Statistiques", description: "Visualisation de données apportant une dimension analytique à l'expérience historique." },
        { title: "Administration", description: "Interface de gestion de certaines données, base d'une future gestion complète du contenu." },
      ],
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
      technicalApproach:
        "Une architecture frontend moderne : React pour des composants réutilisables, Vite pour un environnement de développement rapide, Tailwind CSS pour un design cohérent et responsive, et React Router pour la navigation. La séparation entre composants, pages et données permet d'envisager une future connexion à une API sans reconstruction complète.",
      results: [
        "Plateforme éducative complète livrée",
        "Navigation fluide sur toute la frise",
        "Architecture React propre, prête pour un backend/CMS",
      ],
      growthPotential:
        "Au-delà d'un projet éducatif, دزاير عبر الزمن pourrait devenir un véritable portail numérique consacré à l'histoire et au patrimoine algérien — support pédagogique pour des établissements scolaires, outil de médiation culturelle pour des institutions, ou plateforme de découverte pour le grand public.",
      roadmap: [
        "CMS complet pour les historiens et administrateurs",
        "Base de données historique centralisée",
        "Archives photographiques et documents historiques",
        "Cartes interactives de l'Algérie à différentes périodes",
        "Parcours pédagogiques pour les étudiants",
      ],
      projectImpact:
        "Le projet démontre comment les technologies web peuvent préserver, organiser et transmettre le patrimoine historique sous une forme adaptée aux usages numériques actuels — il ne s'agit pas seulement de présenter l'histoire, mais de créer une expérience qui donne envie de l'explorer.",
    },

    en: {
      name: "Dzayer Through Time",
      category: "Educational platform",
      subtitle: "Algeria's history, told as an interactive timeline",
      shortDescription:
        "Dzayer Through Time is a digital platform dedicated to discovering and showcasing Algeria's history. It turns a large amount of historical information into an interactive experience for exploring years, eras, events and historical figures through a modern interface.",
      context:
        "Algeria's history is an extremely rich cultural and historical heritage — yet its digital exploration is often limited to articles, PDFs or archives presenting information in a mostly textual form. Dzayer Through Time starts from this problem to offer a new way to discover, understand and pass on history.",
      vision:
        "Create a digital space where Algeria's history feels more alive, more visual and easier to explore, replacing the search through many pages with a natural journey along a timeline.",
      objective:
        "Make Algerian history more accessible to new generations by using what the web makes possible: interaction, visualization, chronological navigation, search, filters and multimedia content.",
      problem:
        "Historical resources are plentiful but often fragmented: a student wanting to understand a specific period usually has to consult several different sources, in formats that aren't very engaging for an audience used to interactive digital experiences.",
      solution:
        "Dzayer Through Time centralizes and organizes historical information around a chronological experience: the user starts from a global view of Algeria's history, then progressively dives into a year, a period, an event or a figure.",
      targetAudience: [
        "Pupils and students discovering or revising Algeria's history",
        "Teachers looking for a complementary digital resource",
        "History and heritage enthusiasts",
        "Schools and universities",
        "Cultural and heritage institutions",
      ],
      mainSections: [
        { title: "Home", description: "Platform overview, concept, and quick access to the main historical sections." },
        { title: "Timeline", description: "The heart of the platform — browsing Algeria's history year by year." },
        { title: "Historical eras", description: "History organized into major periods for a quick overview." },
        { title: "Historical events", description: "Detailed presentation of major events, with context and timeline placement." },
        { title: "Historical figures", description: "Pages dedicated to the people who shaped Algeria's history." },
        { title: "Statistics", description: "Data visualization adding an analytical dimension to the historical experience." },
        { title: "Admin", description: "Interface for managing some of the platform's data — the base for a future full content-management system." },
      ],
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
      technicalApproach:
        "A modern frontend architecture: React for reusable components, Vite for a fast dev environment, Tailwind CSS for a consistent, responsive design, and React Router for navigation. Separating components, pages and data leaves room for a future API connection without a full rebuild.",
      results: [
        "Complete educational platform delivered",
        "Smooth navigation across the whole timeline",
        "Clean React architecture, ready for a backend/CMS",
      ],
      growthPotential:
        "Beyond an educational project, Dzayer Through Time could become a true digital portal dedicated to Algerian history and heritage — a teaching resource for schools, a cultural mediation tool for institutions, or a discovery platform for the general public.",
      roadmap: [
        "Full CMS for historians and administrators",
        "Centralized historical database",
        "Photo archives and historical documents",
        "Interactive maps of Algeria across different periods",
        "Guided learning paths for students",
      ],
      projectImpact:
        "The project shows how web technology can preserve, organize and pass on historical heritage in a form suited to today's digital habits — not just presenting history, but creating an experience that makes people want to explore it.",
    },

    ar: {
      name: "دزاير عبر الزمن",
      category: "منصة تعليمية",
      subtitle: "تاريخ الجزائر، في خط زمني تفاعلي",
      shortDescription:
        "دزاير عبر الزمن منصة رقمية مخصصة لاكتشاف وإبراز تاريخ الجزائر، تحوّل كمًا كبيرًا من المعلومات التاريخية إلى تجربة تفاعلية لتصفح السنوات والعصور والأحداث والشخصيات التاريخية عبر واجهة عصرية.",
      context:
        "يمثّل تاريخ الجزائر إرثًا ثقافيًا وتاريخيًا غنيًا جدًا، إلا أن استكشافه رقميًا غالبًا ما يقتصر على مقالات أو ملفات PDF أو أرشيفات تعرض المعلومة بشكل نصي بحت. ينطلق دزاير عبر الزمن من هذه الإشكالية ليقترح طريقة جديدة لاكتشاف التاريخ وفهمه ونقله.",
      vision:
        "خلق فضاء رقمي يجعل تاريخ الجزائر أكثر حيوية وبصرية وسهولة في الاستكشاف، عبر استبدال البحث بين صفحات عديدة برحلة طبيعية عبر خط زمني.",
      objective:
        "جعل التاريخ الجزائري أكثر سهولة بالنسبة للأجيال الجديدة، باستغلال إمكانيات الويب: التفاعل، التصور البصري، التنقل الزمني، البحث، الفلترة والمحتوى المتعدد الوسائط.",
      problem:
        "الموارد التاريخية كثيرة لكنها غالبًا مشتتة: الطالب الراغب في فهم فترة معينة يضطر عادة لمراجعة عدة مصادر مختلفة، بصيغ لا تجذب جمهورًا معتادًا على التجارب الرقمية التفاعلية.",
      solution:
        "يوحّد دزاير عبر الزمن المعلومات التاريخية وينظمها حول تجربة زمنية: ينطلق المستخدم من نظرة شاملة على تاريخ الجزائر، ثم يتعمّق تدريجيًا في سنة أو فترة أو حدث أو شخصية.",
      targetAudience: [
        "التلاميذ والطلاب الراغبون في اكتشاف أو مراجعة تاريخ الجزائر",
        "الأساتذة الباحثون عن دعم رقمي تكميلي",
        "المهتمون بالتاريخ والتراث الجزائري",
        "المؤسسات المدرسية والجامعية",
        "المؤسسات الثقافية والتراثية",
      ],
      mainSections: [
        { title: "الرئيسية", description: "تقديم المنصة ومفهومها، مع وصول سريع للأقسام التاريخية الرئيسية." },
        { title: "الخط الزمني", description: "جوهر المنصة، يتيح تصفح تاريخ الجزائر سنة بعد سنة." },
        { title: "العصور التاريخية", description: "تنظيم التاريخ ضمن فترات كبرى لنظرة شاملة سريعة." },
        { title: "الأحداث التاريخية", description: "عرض تفصيلي للأحداث الكبرى مع سياقها وموقعها الزمني." },
        { title: "الشخصيات التاريخية", description: "صفحات مخصصة للشخصيات التي كان لها دور مهم في تاريخ الجزائر." },
        { title: "الإحصائيات", description: "تصور بصري للبيانات يضيف بُعدًا تحليليًا للتجربة التاريخية." },
        { title: "الإدارة", description: "واجهة لإدارة بعض بيانات المنصة، وأساس لنظام إدارة محتوى كامل مستقبلاً." },
      ],
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
      technicalApproach:
        "بنية أمامية عصرية: React لمكونات قابلة لإعادة الاستخدام، Vite لبيئة تطوير سريعة، Tailwind CSS لتصميم متناسق ومتجاوب، وReact Router للتنقل. الفصل بين المكونات والصفحات والبيانات يتيح لاحقًا ربطًا بواجهة برمجية دون إعادة بناء كاملة.",
      results: [
        "منصة تعليمية متكاملة تم تسليمها",
        "تنقل سلس عبر كامل الخط الزمني",
        "بنية React نظيفة وجاهزة لخادم/CMS",
      ],
      growthPotential:
        "بعيدًا عن كونه مشروعًا تعليميًا، يمكن أن يصبح دزاير عبر الزمن بوابة رقمية حقيقية مخصصة لتاريخ الجزائر وتراثها — دعمًا تربويًا للمؤسسات المدرسية، أداة وساطة ثقافية للمؤسسات، أو منصة اكتشاف لعموم الجمهور.",
      roadmap: [
        "نظام إدارة محتوى كامل للمؤرخين والإداريين",
        "قاعدة بيانات تاريخية مركزية",
        "أرشيف صور ووثائق تاريخية",
        "خرائط تفاعلية للجزائر عبر فترات مختلفة",
        "مسارات تعليمية موجهة للطلاب",
      ],
      projectImpact:
        "يُظهر المشروع كيف يمكن لتقنيات الويب أن تحافظ على التراث التاريخي وتنظمه وتنقله بشكل يتماشى مع العادات الرقمية الحالية — لا يتعلق الأمر فقط بعرض التاريخ، بل بخلق تجربة تدفع لاستكشافه.",
    },
  },
};
