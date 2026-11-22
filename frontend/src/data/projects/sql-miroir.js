// All data for the SQL Miroir project lives in this one file — edit here to
// update the card, the detail page, and every language at once.
export const sqlMiroir = {
  id: "sql-miroir",
  year: "2024",
  duration: { fr: "3 mois", en: "3 months", ar: "3 أشهر" },
  technologies: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS"],
  link: null, // no public deployment yet — the UI shows a "coming soon" state
  githubUrl: "https://github.com/ALLALI-Fadoua/SQL-Miroir",
  image: "/projects/sql/SQL-Home.png",
  logo: "/projects/sql/SQL-Logo.png",
  gallery: [
    { url: "/projects/sql/SQL-Home.png", title: { fr: "Interface de requête SQL", en: "SQL query interface", ar: "واجهة استعلام SQL" } },
    { url: "/projects/sql/SQL-Requete.png", title: { fr: "Exécution d'une requête", en: "Running a query", ar: "تنفيذ استعلام" } },
    { url: "/projects/sql/SQL-Login.png", title: { fr: "Connexion", en: "Login", ar: "تسجيل الدخول" } },
    { url: "/projects/sql/SQL-Singup.png", title: { fr: "Inscription", en: "Sign up", ar: "إنشاء حساب" } },
    { url: "/projects/sql/SQL-DataBase.png", title: { fr: "Liste des bases de données", en: "List of databases", ar: "قائمة قواعد البيانات" } },
    { url: "/projects/sql/SQL-Table.png", title: { fr: "Tables, attributs et valeurs", en: "Tables, attributes and values", ar: "الجداول والخصائص والقيم" } },
    { url: "/projects/sql/SQL-Attribute.png", title: { fr: "Liste des tables et attributs", en: "Tables and attributes list", ar: "قائمة الجداول والخصائص" } },
    { url: "/projects/sql/SQL-Value.png", title: { fr: "Liste des attributs et valeurs", en: "Attributes and values list", ar: "قائمة الخصائص والقيم" } },
    { url: "/projects/sql/SQL-PrimaryKey.png", title: { fr: "Liste des clés primaires", en: "List of primary keys", ar: "قائمة المفاتيح الأساسية" } },
    { url: "/projects/sql/SQL-ForiegnKey.png", title: { fr: "Liste des clés étrangères", en: "List of foreign keys", ar: "قائمة المفاتيح الأجنبية" } },
  ],

  translations: {
    fr: {
      name: "SQL Miroir",
      category: "Simulateur de base de données",
      subtitle: "Pratiquer le SQL sans jamais installer de serveur",
      shortDescription:
        "SQL Miroir est un simulateur de système de gestion de base de données qui permet de créer des bases, des tables et d'exécuter de vraies requêtes SQL, entièrement dans le navigateur, sans aucune installation.",
      context:
        "Pensé pour les étudiants et les professionnels qui veulent s'entraîner sur des opérations SQL sans installer un vrai serveur de base de données — une expérience de simulation complète, directement dans le navigateur.",
      vision:
        "Faire de l'apprentissage du SQL une expérience immédiate et sans friction, accessible à quiconque possède un navigateur.",
      objective:
        "Permettre à un étudiant de créer sa première base de données et d'exécuter sa première requête en quelques secondes, sans aucune configuration.",
      problem:
        "Apprendre le SQL demande en général d'installer et de configurer un vrai serveur de base de données — une vraie barrière pour les étudiants et débutants qui veulent simplement s'exercer.",
      solution:
        "SQL Miroir simule un SGBD complet directement dans le navigateur : création de bases, tables, clés primaires/étrangères, et exécution de requêtes SQL en temps réel, sans aucune installation.",
      targetAudience: [
        "Étudiants en informatique apprenant les bases de données",
        "Enseignants cherchant un support pédagogique pratique",
        "Développeurs débutants souhaitant s'exercer au SQL",
        "Bootcamps et centres de formation tech",
      ],
      mainSections: [
        { title: "Éditeur SQL", description: "Zone d'écriture et d'exécution des requêtes avec retour immédiat des résultats." },
        { title: "Gestion des bases", description: "Création et organisation des bases de données et de leurs tables simulées." },
        { title: "Métadonnées", description: "Vue d'ensemble du schéma : tables, colonnes, clés primaires et étrangères." },
      ],
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
      technicalApproach:
        "Le simulateur repose sur un analyseur SQL personnalisé côté client, qui interprète et exécute les requêtes sans jamais dépendre d'un vrai serveur de base de données.",
      results: [
        "Projet noté 16/15 par les évaluateurs",
        "Apprentissage du SQL nettement facilité",
        "Bonnes performances même avec de gros jeux de données",
      ],
      growthPotential:
        "Au-delà d'un projet étudiant, SQL Miroir pourrait devenir un outil pédagogique déployé dans des écoles ou des plateformes de formation en ligne, avec un mode multi-utilisateurs et un suivi de progression.",
      roadmap: [
        "Comptes utilisateurs avec sauvegarde des bases",
        "Exercices guidés et corrigés automatiques",
        "Suivi de progression pédagogique",
        "Export des schémas et des requêtes",
      ],
      projectImpact:
        "Le projet démontre qu'il est possible de rendre un concept technique aussi aride que le SQL accessible et engageant, sans sacrifier la rigueur technique.",
    },

    en: {
      name: "SQL Miroir",
      category: "Database simulator",
      subtitle: "Practice SQL without ever installing a server",
      shortDescription:
        "SQL Miroir is a database management system simulator that lets you create databases, tables, and run real SQL queries entirely in the browser, with no installation required.",
      context:
        "Built for students and professionals who want to practice SQL operations without installing a full RDBMS — a complete simulation experience, right in the browser.",
      vision:
        "Make learning SQL an immediate, frictionless experience, accessible to anyone with a browser.",
      objective:
        "Let a student create their first database and run their first query within seconds, with zero setup.",
      problem:
        "Learning SQL usually means installing and configuring a real database server — a real barrier for students and beginners who just want to practice queries.",
      solution:
        "SQL Miroir simulates a full RDBMS right in the browser: creating databases, tables, primary/foreign keys, and running SQL queries in real time, with no installation at all.",
      targetAudience: [
        "Computer science students learning databases",
        "Teachers looking for a hands-on teaching tool",
        "Beginner developers wanting to practice SQL",
        "Bootcamps and tech training centers",
      ],
      mainSections: [
        { title: "SQL editor", description: "Write and run queries with instant feedback on the results." },
        { title: "Database management", description: "Create and organize simulated databases and their tables." },
        { title: "Metadata", description: "Overview of the schema: tables, columns, primary and foreign keys." },
      ],
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
      technicalApproach:
        "The simulator runs on a custom client-side SQL parser that interprets and executes queries without ever depending on a real database server.",
      results: [
        "Project graded 16/15 by evaluators",
        "Noticeably easier SQL learning",
        "Good performance even with large datasets",
      ],
      growthPotential:
        "Beyond a student project, SQL Miroir could become a teaching tool deployed in schools or online learning platforms, with multi-user support and progress tracking.",
      roadmap: [
        "User accounts with saved databases",
        "Guided exercises with automatic grading",
        "Learning progress tracking",
        "Schema and query export",
      ],
      projectImpact:
        "The project shows that even a dry technical concept like SQL can be made accessible and engaging without sacrificing technical rigor.",
    },

    ar: {
      name: "SQL Miroir",
      category: "محاكي قواعد بيانات",
      subtitle: "تعلّم SQL دون تثبيت أي خادم",
      shortDescription:
        "SQL Miroir هو محاكي لنظام إدارة قواعد البيانات، يتيح إنشاء قواعد بيانات وجداول وتنفيذ استعلامات SQL حقيقية بالكامل داخل المتصفح، دون أي تثبيت.",
      context:
        "صُمم للطلاب والمحترفين الراغبين في التدرب على عمليات SQL دون تثبيت خادم قاعدة بيانات كامل — تجربة محاكاة متكاملة داخل المتصفح مباشرة.",
      vision:
        "جعل تعلّم SQL تجربة فورية وسلسة، متاحة لأي شخص يملك متصفحًا.",
      objective:
        "تمكين الطالب من إنشاء أول قاعدة بيانات وتنفيذ أول استعلام في ثوانٍ معدودة، دون أي إعداد.",
      problem:
        "تعلّم SQL يتطلب عادة تثبيت وضبط خادم قاعدة بيانات حقيقي — عائق حقيقي أمام الطلاب والمبتدئين الذين يريدون فقط التدرب على الاستعلامات.",
      solution:
        "يحاكي SQL Miroir نظام إدارة قواعد بيانات كاملاً داخل المتصفح مباشرة: إنشاء قواعد وجداول ومفاتيح أساسية/أجنبية، وتنفيذ استعلامات SQL لحظيًا دون أي تثبيت.",
      targetAudience: [
        "طلاب الإعلام الآلي المتعلمون لقواعد البيانات",
        "الأساتذة الباحثون عن أداة تعليمية عملية",
        "المطورون المبتدئون الراغبون في التدرب على SQL",
        "مراكز التكوين التقني والبوتكامب",
      ],
      mainSections: [
        { title: "محرر SQL", description: "منطقة كتابة وتنفيذ الاستعلامات مع نتائج فورية." },
        { title: "إدارة القواعد", description: "إنشاء وتنظيم قواعد البيانات وجداولها المحاكاة." },
        { title: "البيانات الوصفية", description: "نظرة شاملة على الهيكل: الجداول، الأعمدة، المفاتيح الأساسية والأجنبية." },
      ],
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
      technicalApproach:
        "يعتمد المحاكي على محلل SQL مخصص من جهة العميل، يفسّر وينفذ الاستعلامات دون الاعتماد إطلاقًا على خادم قاعدة بيانات حقيقي.",
      results: [
        "حصل المشروع على تقييم استثنائي 16/15",
        "تعلّم SQL أصبح أسهل وأسرع",
        "أداء جيد حتى مع مجموعات بيانات كبيرة",
      ],
      growthPotential:
        "بعيدًا عن كونه مشروعًا طلابيًا، يمكن أن يصبح SQL Miroir أداة تعليمية تُعتمد في المدارس أو منصات التكوين عبر الإنترنت، مع دعم متعدد المستخدمين ومتابعة للتقدم.",
      roadmap: [
        "حسابات مستخدمين مع حفظ القواعد",
        "تمارين موجهة وتصحيح تلقائي",
        "متابعة التقدم التعليمي",
        "تصدير الهياكل والاستعلامات",
      ],
      projectImpact:
        "يُظهر المشروع أنه من الممكن جعل مفهوم تقني جاف مثل SQL سهل الوصول وجذابًا، دون التضحية بالدقة التقنية.",
    },
  },
};