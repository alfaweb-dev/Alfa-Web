// All data for the UniHub DZ project lives in this one file.
export const unihubdz = {
  id: "unihubdz",
  year: "2026",
  duration: { fr: "3 semaines", en: "3 weeks", ar: "3 أسابيع" },
  technologies: ["React", "Vite", "Tailwind CSS", "React Router"],
  link: "https://unihubdz.netlify.app/",
  githubUrl: "https://github.com/ALLALI-Fadoua/UniHub-DZ",
  image: "/projects/unihub/UniHub-Home.png",
  logo: "/projects/unihub/unihubdz.png",
  gallery: [
    { url: "/projects/unihub/UniHub-Home.png", title: { fr: "Page d'accueil", en: "Homepage", ar: "الصفحة الرئيسية" } },
    { url: "/projects/unihub/UniHub-Events.png", title: { fr: "Liste des événements", en: "Events list", ar: "قائمة الفعاليات" } },
    { url: "/projects/unihub/UniHub-Clubs.png", title: { fr: "Liste des clubs", en: "Clubs list", ar: "قائمة النوادي" } },
    { url: "/projects/unihub/UniHub-Profile.png", title: { fr: "Profil étudiant", en: "Student profile", ar: "الملف الشخصي للطالب" } },
    { url: "/projects/unihub/UniHub-student-events.png", title: { fr: "Mes événements", en: "My events", ar: "فعالياتي" } },
    { url: "/projects/unihub/UniHub-admin.png", title: { fr: "Tableau de bord admin", en: "Admin dashboard", ar: "لوحة تحكم الإدارة" } },
    { url: "/projects/unihub/UniHub-Events-admin.png", title: { fr: "Gestion des événements", en: "Events management", ar: "إدارة الفعاليات" } },
    { url: "/projects/unihub/UniHub-Clubs-admin.png", title: { fr: "Gestion des clubs", en: "Clubs management", ar: "إدارة النوادي" } },
  ],

  translations: {
    fr: {
      name: "UniHub DZ",
      category: "Plateforme étudiante",
      subtitle: "Toute la vie étudiante algérienne, centralisée",
      shortDescription:
        "UniHub DZ centralise tout ce dont un étudiant algérien a besoin : universités, clubs, événements, stages et bourses, dans une interface moderne et responsive.",
      context:
        "Pensée pour simplifier la vie étudiante en centralisant ressources académiques, clubs, événements et opportunités dans un seul espace numérique accessible et collaboratif.",
      vision:
        "Devenir le point d'entrée unique de la vie étudiante algérienne, en ligne.",
      objective:
        "Réduire la fragmentation de l'information étudiante en centralisant ressources, clubs et opportunités dans un seul espace.",
      problem:
        "Les étudiants algériens jonglent entre plusieurs sources dispersées pour trouver des clubs, événements, stages ou bourses — l'information est fragmentée et difficile à centraliser.",
      solution:
        "UniHub DZ centralise tout en un seul endroit : annuaire des universités, clubs étudiants, événements, stages et bourses, avec profils et recherche, pour simplifier la vie étudiante.",
      targetAudience: [
        "Étudiants universitaires en Algérie",
        "Clubs et associations étudiantes",
        "Universités souhaitant centraliser leur communication",
        "Entreprises proposant stages et opportunités aux étudiants",
      ],
      mainSections: [
        { title: "Universités", description: "Annuaire des établissements avec leurs informations clés." },
        { title: "Clubs", description: "Découverte et présentation des clubs et associations étudiantes." },
        { title: "Événements", description: "Liste des événements et ateliers à venir sur le campus." },
        { title: "Opportunités", description: "Stages, offres d'emploi, bourses et concours." },
      ],
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
      technicalApproach:
        "Une architecture de composants réutilisables permettant d'ajouter facilement de nouveaux types de contenu (universités, clubs, événements) sans réécrire l'interface.",
      results: [
        "Plateforme étudiante complète livrée",
        "Interface moderne et responsive",
        "Architecture prête pour l'intégration backend",
      ],
      growthPotential:
        "UniHub DZ pourrait évoluer vers un modèle avec des universités ou entreprises partenaires sponsorisant leur visibilité sur la plateforme.",
      roadmap: [
        "Comptes étudiants personnalisés",
        "Messagerie entre étudiants et clubs",
        "Calendrier académique intégré",
        "Application mobile",
      ],
      projectImpact:
        "Le projet illustre comment une bonne architecture d'information peut simplifier un quotidien étudiant autrement dispersé entre de nombreuses sources.",
    },

    en: {
      name: "UniHub DZ",
      category: "Student platform",
      subtitle: "Algerian student life, all in one place",
      shortDescription:
        "UniHub DZ centralizes everything an Algerian student needs: universities, clubs, events, internships and scholarships, in a modern, responsive interface.",
      context:
        "Built to simplify student life by centralizing academic resources, clubs, events and opportunities in one accessible, collaborative digital hub.",
      vision:
        "To become the single entry point for Algerian student life, online.",
      objective:
        "Reduce the fragmentation of student information by centralizing resources, clubs and opportunities in one place.",
      problem:
        "Algerian students juggle scattered sources to find clubs, events, internships or scholarships — information is fragmented and hard to keep track of.",
      solution:
        "UniHub DZ centralizes everything in one place: a university directory, student clubs, events, internships and scholarships, with profiles and search, to simplify student life.",
      targetAudience: [
        "University students in Algeria",
        "Student clubs and associations",
        "Universities wanting to centralize communication",
        "Companies offering internships and opportunities to students",
      ],
      mainSections: [
        { title: "Universities", description: "Directory of institutions with key information." },
        { title: "Clubs", description: "Discover and showcase student clubs and associations." },
        { title: "Events", description: "List of upcoming campus events and workshops." },
        { title: "Opportunities", description: "Internships, jobs, scholarships and competitions." },
      ],
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
      technicalApproach:
        "A reusable component architecture that makes it easy to add new content types (universities, clubs, events) without rewriting the interface.",
      results: [
        "Complete student platform delivered",
        "Modern, responsive interface",
        "Architecture ready for backend integration",
      ],
      growthPotential:
        "UniHub DZ could evolve toward a model where partner universities or companies sponsor their visibility on the platform.",
      roadmap: [
        "Personalized student accounts",
        "Messaging between students and clubs",
        "Integrated academic calendar",
        "Mobile app",
      ],
      projectImpact:
        "The project shows how good information architecture can simplify a student's day-to-day, otherwise scattered across many sources.",
    },

    ar: {
      name: "UniHub DZ",
      category: "منصة طلابية",
      subtitle: "الحياة الجامعية الجزائرية في مكان واحد",
      shortDescription:
        "توحّد UniHub DZ كل ما يحتاجه الطالب الجزائري: الجامعات، النوادي، الفعاليات، التربصات والمنح، في واجهة عصرية ومتجاوبة.",
      context:
        "صُممت لتبسيط الحياة الطلابية عبر تجميع الموارد الأكاديمية والنوادي والفعاليات والفرص في مركز رقمي واحد سهل الوصول وتعاوني.",
      vision:
        "أن تصبح نقطة الدخول الوحيدة للحياة الجامعية الجزائرية على الإنترنت.",
      objective:
        "تقليص تشتت المعلومة الطلابية عبر تجميع الموارد والنوادي والفرص في مكان واحد.",
      problem:
        "يتنقل الطلاب الجزائريون بين مصادر متفرقة للعثور على النوادي والفعاليات والتربصات أو المنح — المعلومة مشتتة ويصعب تتبعها.",
      solution:
        "توحّد UniHub DZ كل شيء في مكان واحد: دليل الجامعات، النوادي الطلابية، الفعاليات، التربصات والمنح، مع ملفات شخصية وبحث، لتبسيط الحياة الطلابية.",
      targetAudience: [
        "الطلاب الجامعيون في الجزائر",
        "النوادي والجمعيات الطلابية",
        "الجامعات الراغبة في توحيد تواصلها",
        "الشركات المقدمة للتربصات والفرص للطلاب",
      ],
      mainSections: [
        { title: "الجامعات", description: "دليل المؤسسات مع معلوماتها الأساسية." },
        { title: "النوادي", description: "اكتشاف وعرض النوادي والجمعيات الطلابية." },
        { title: "الفعاليات", description: "قائمة الفعاليات وورشات العمل القادمة في الحرم الجامعي." },
        { title: "الفرص", description: "التربصات، عروض العمل، المنح والمسابقات." },
      ],
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
      technicalApproach:
        "بنية مكونات قابلة لإعادة الاستخدام تسهّل إضافة أنواع محتوى جديدة (جامعات، نوادي، فعاليات) دون إعادة كتابة الواجهة.",
      results: [
        "منصة طلابية متكاملة تم تسليمها",
        "واجهة عصرية ومتجاوبة",
        "بنية جاهزة للربط بخادم خلفي",
      ],
      growthPotential:
        "يمكن أن تتطور UniHub DZ نحو نموذج تقوم فيه جامعات أو شركات شريكة برعاية ظهورها على المنصة.",
      roadmap: [
        "حسابات طلابية مخصصة",
        "مراسلة بين الطلاب والنوادي",
        "تقويم أكاديمي مدمج",
        "تطبيق للهاتف المحمول",
      ],
      projectImpact:
        "يُظهر المشروع كيف يمكن لبنية معلوماتية جيدة أن تبسّط يوميات الطالب المشتتة بين مصادر عديدة.",
    },
  },
};