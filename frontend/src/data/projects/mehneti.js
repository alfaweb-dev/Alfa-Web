// All data for the Mehneti.dz project lives in this one file.
export const mehneti = {
  id: "mehneti",
  year: "2025",
  duration: { fr: "7 mois", en: "7 months", ar: "7 أشهر" },
  technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.io", "Redux", "JWT", "Stripe"],
  link: null, // no public deployment yet — the UI shows a "coming soon" state
  githubUrl: "https://github.com/ALLALI-Fadoua/Mihneti",
  image: "/projects/mihneti/Mihneti-Home.png",
  logo: "/projects/mihneti/Mihneti-logo.png",
  gallery: [
    { url: "/projects/mihneti/Mihneti-Home.png", title: { fr: "Page d'accueil", en: "Homepage", ar: "الصفحة الرئيسية" } },
    { url: "/projects/mihneti/Mihneti-Dash-Applicant.png", title: { fr: "Tableau de bord candidat", en: "Applicant dashboard", ar: "لوحة تحكم المرشح" } },
    { url: "/projects/mihneti/Mihneti-Dash-Company.png", title: { fr: "Tableau de bord recruteur", en: "Company dashboard", ar: "لوحة تحكم الشركة" } },
    { url: "/projects/mihneti/Mihneti-Dash-Admin.png", title: { fr: "Tableau de bord admin", en: "Admin dashboard", ar: "لوحة تحكم الإدارة" } },
    { url: "/projects/mihneti/Mihneti-ListeOffres.png", title: { fr: "Gestion des offres", en: "Offers management", ar: "إدارة العروض" } },
    { url: "/projects/mihneti/Mihneti-ListeCandidature.png", title: { fr: "Liste des candidatures", en: "Applications list", ar: "قائمة الترشيحات" } },
    { url: "/projects/mihneti/Mihneti-DetailInterviews.png", title: { fr: "Détail d'un entretien", en: "Interview details", ar: "تفاصيل المقابلة" } },
    { url: "/projects/mihneti/Mihneti-Candidature.png", title: { fr: "Sélection du CV", en: "CV selection", ar: "اختيار السيرة الذاتية" } },
    { url: "/projects/mihneti/Mihneti-CVFormat.png", title: { fr: "Formats de CV", en: "CV formats", ar: "صيغ السيرة الذاتية" } },
    { url: "/projects/mihneti/Mihneti-chat.png", title: { fr: "Assistant virtuel", en: "Virtual assistant", ar: "المساعد الافتراضي" } },
  ],

  translations: {
    fr: {
      name: "Mehneti.dz",
      category: "Plateforme de recrutement",
      subtitle: "Le recrutement intelligent, pensé pour l'Algérie",
      shortDescription:
        "Mehneti.dz est une plateforme complète de recrutement qui connecte candidats et employeurs en Algérie grâce à un système de matching intelligent, un chat en temps réel et des tableaux de bord dédiés à chaque rôle.",
      context:
        "Une plateforme pensée pour les candidats comme pour les recruteurs en Algérie, avec un algorithme de matching par compétences et localisation, un chat en temps réel et des tableaux de bord détaillés.",
      vision:
        "Devenir la plateforme de référence pour connecter talents et entreprises en Algérie, avec une expérience aussi fluide que les meilleures plateformes internationales.",
      objective:
        "Réduire le temps et l'effort nécessaires pour qu'un candidat trouve une offre pertinente et qu'un recruteur trouve le bon profil.",
      problem:
        "En Algérie, la recherche d'emploi reste largement manuelle : candidatures dispersées par e-mail, aucune mise en relation pertinente entre profils et offres, suivi laborieux côté recruteur.",
      solution:
        "Mehneti.dz connecte candidats et employeurs grâce à un algorithme de matching intelligent, un chat en temps réel et des tableaux de bord dédiés à chaque profil, pour fluidifier tout le processus de recrutement.",
      targetAudience: [
        "Chercheurs d'emploi en Algérie",
        "Recruteurs et entreprises locales",
        "Jeunes diplômés en recherche de première expérience",
        "Agences et cabinets de recrutement",
      ],
      mainSections: [
        { title: "Espace candidat", description: "Création de profil, dépôt de CV, candidatures et suivi des échanges avec les recruteurs." },
        { title: "Espace recruteur", description: "Publication d'offres, gestion des candidatures et communication en temps réel." },
        { title: "Tableau de bord admin", description: "Supervision de la plateforme, statistiques d'usage et gestion des comptes." },
      ],
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
      technicalApproach:
        "Une architecture Node.js/MongoDB pensée pour supporter la montée en charge, avec Socket.io pour les échanges instantanés et Stripe pour les futures offres premium.",
      results: [
        "Forte croissance des utilisateurs dès le lancement",
        "Premiers partenariats avec des entreprises locales",
        "Adopté par de jeunes chercheurs d'emploi en Algérie",
      ],
      growthPotential:
        "Mehneti.dz a un vrai potentiel commercial : abonnements recruteurs, mise en avant d'offres, ou services premium pour les candidats (coaching CV, mise en relation prioritaire).",
      roadmap: [
        "Abonnements recruteurs premium",
        "Système de recommandation par IA",
        "Application mobile",
        "Tests de compétences intégrés",
      ],
      projectImpact:
        "Le projet illustre comment une plateforme bien pensée peut simplifier un processus aussi crucial que la recherche d'emploi dans un marché encore largement informel.",
    },

    en: {
      name: "Mehneti.dz",
      category: "Recruitment platform",
      subtitle: "Intelligent recruitment, built for Algeria",
      shortDescription:
        "Mehneti.dz is a full recruitment platform that connects candidates and employers in Algeria through intelligent matching, real-time chat and dashboards tailored to every role.",
      context:
        "A platform built for both candidates and recruiters in Algeria, powered by a skills-and-location matching algorithm, real-time chat and detailed dashboards.",
      vision:
        "To become the go-to platform connecting talent and companies in Algeria, with an experience as smooth as the best international platforms.",
      objective:
        "Cut the time and effort it takes for a candidate to find a relevant opening and for a recruiter to find the right profile.",
      problem:
        "In Algeria, job hunting is still largely manual: applications scattered across emails, no relevant matching between profiles and openings, and a slow process for recruiters.",
      solution:
        "Mehneti.dz connects candidates and employers through an intelligent matching algorithm, real-time chat, and dedicated dashboards for every role, streamlining the whole recruitment process.",
      targetAudience: [
        "Job seekers in Algeria",
        "Recruiters and local companies",
        "Recent graduates looking for their first role",
        "Recruitment agencies",
      ],
      mainSections: [
        { title: "Candidate space", description: "Profile creation, CV upload, applications and message tracking with recruiters." },
        { title: "Recruiter space", description: "Job posting, application management and real-time communication." },
        { title: "Admin dashboard", description: "Platform oversight, usage statistics and account management." },
      ],
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
      technicalApproach:
        "A Node.js/MongoDB architecture built to scale, with Socket.io for instant messaging and Stripe wired in for future premium offerings.",
      results: [
        "Strong user growth right after launch",
        "First partnerships with local companies",
        "Adopted by young job seekers across Algeria",
      ],
      growthPotential:
        "Mehneti.dz has real commercial potential: recruiter subscriptions, featured job listings, or premium candidate services like CV coaching or priority matching.",
      roadmap: [
        "Premium recruiter subscriptions",
        "AI-based recommendation system",
        "Mobile app",
        "Built-in skills assessments",
      ],
      projectImpact:
        "The project shows how a well-designed platform can simplify a process as crucial as job hunting in a market that's still largely informal.",
    },

    ar: {
      name: "Mehneti.dz",
      category: "منصة توظيف",
      subtitle: "التوظيف الذكي، مصمم خصيصًا للجزائر",
      shortDescription:
        "Mehneti.dz منصة توظيف متكاملة تربط الباحثين عن عمل بأصحاب العمل في الجزائر عبر مطابقة ذكية، ومحادثة فورية، ولوحات تحكم مخصصة لكل فئة.",
      context:
        "منصة مصممة للباحثين عن عمل وأصحاب العمل في الجزائر، بخوارزمية مطابقة تعتمد على المهارات والموقع، ومحادثة فورية، ولوحات تحكم تفصيلية.",
      vision:
        "أن تصبح المنصة المرجعية لربط الكفاءات بالشركات في الجزائر، بتجربة سلسة كأفضل المنصات العالمية.",
      objective:
        "تقليص الوقت والجهد اللازمين لإيجاد المرشح المناسب من جهة أصحاب العمل، والفرصة المناسبة من جهة الباحثين عن عمل.",
      problem:
        "في الجزائر، لا يزال البحث عن عمل يتم يدويًا في الغالب: طلبات متفرقة عبر البريد الإلكتروني، وغياب ربط فعلي بين الملفات والعروض، ومتابعة صعبة بالنسبة لأصحاب العمل.",
      solution:
        "تربط Mehneti.dz بين الباحثين عن عمل وأصحاب العمل عبر خوارزمية مطابقة ذكية، ومحادثة فورية، ولوحات تحكم مخصصة لكل فئة، لتسهيل عملية التوظيف بأكملها.",
      targetAudience: [
        "الباحثون عن عمل في الجزائر",
        "أصحاب العمل والشركات المحلية",
        "الخريجون الجدد الباحثون عن أول تجربة مهنية",
        "مكاتب ووكالات التوظيف",
      ],
      mainSections: [
        { title: "فضاء المرشح", description: "إنشاء الملف الشخصي، إيداع السيرة الذاتية، الترشح ومتابعة التواصل مع أصحاب العمل." },
        { title: "فضاء صاحب العمل", description: "نشر العروض، إدارة الترشيحات والتواصل الفوري." },
        { title: "لوحة تحكم الإدارة", description: "الإشراف على المنصة، إحصائيات الاستخدام وإدارة الحسابات." },
      ],
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
      technicalApproach:
        "بنية Node.js/MongoDB مصممة لتحمل الأحمال المتزايدة، مع Socket.io للمحادثات الفورية وStripe جاهز لعروض مدفوعة مستقبلية.",
      results: [
        "نمو قوي للمستخدمين منذ الإطلاق",
        "أولى الشراكات مع شركات محلية",
        "اعتماد المنصة من طرف باحثين شباب عن عمل في الجزائر",
      ],
      growthPotential:
        "تملك Mehneti.dz إمكانات تجارية حقيقية: اشتراكات لأصحاب العمل، إبراز العروض، أو خدمات مدفوعة للمرشحين (مرافقة السيرة الذاتية، أولوية المطابقة).",
      roadmap: [
        "اشتراكات مدفوعة لأصحاب العمل",
        "نظام توصية بالذكاء الاصطناعي",
        "تطبيق للهاتف المحمول",
        "اختبارات كفاءة مدمجة",
      ],
      projectImpact:
        "يوضح المشروع كيف يمكن لمنصة مدروسة جيدًا أن تبسّط عملية حيوية كالبحث عن عمل في سوق لا يزال غير رسمي إلى حد كبير.",
    },
  },
};