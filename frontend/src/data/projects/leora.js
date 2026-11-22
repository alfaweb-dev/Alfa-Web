// All data for the LÉORA project lives in this one file.
export const leora = {
  id: "leora",
  year: "2026",
  duration: { fr: "mois", en: "month", ar: "شهر" },

  technologies: [
    "React",
    "Vite",
    "Tailwind CSS",
    "React Router",
    "Lucide React"
  ],

  link: "https://leora-black.vercel.app/",
  githubUrl: "https://github.com/ALLALI-Fadoua/Leora",

  image: "/projects/leora/Leora-Home.png",
  logo: "/projects/leora.png",

  gallery: [
    {
      url: "/projects/leora/Leora-Home.png",
      title: {
        fr: "Page d'accueil",
        en: "Homepage",
        ar: "الصفحة الرئيسية"
      }
    },
    {
      url: "/projects/leora/Leora-Products.png",
      title: {
        fr: "Collection de chaussures",
        en: "Shoe collection",
        ar: "مجموعة الأحذية"
      }
    },
    {
      url: "/projects/leora/Leora-ProductDetails.png",
      title: {
        fr: "Détails du produit",
        en: "Product details",
        ar: "تفاصيل المنتج"
      }
    },
    {
      url: "/projects/leora/Leora-Categories.png",
      title: {
        fr: "Catégories",
        en: "Categories",
        ar: "التصنيفات"
      }
    },
    {
      url: "/projects/leora/Leora-Cart.png",
      title: {
        fr: "Panier",
        en: "Shopping cart",
        ar: "سلة التسوق"
      }
    },
    {
      url: "/projects/leora/Leora-Mobile.png",
      title: {
        fr: "Expérience mobile",
        en: "Mobile experience",
        ar: "تجربة الهاتف"
      }
    }
  ],

  translations: {
    fr: {
      name: "LÉORA",

      category: "E-commerce de chaussures féminines",

      subtitle:
        "Une expérience digitale élégante pensée pour une boutique de chaussures féminines.",

      shortDescription:
        "LÉORA est une expérience e-commerce moderne conçue pour une marque de chaussures féminines. Le projet combine une identité visuelle élégante avec une expérience d'achat fluide, permettant aux clientes de découvrir les collections, consulter les produits, choisir leur pointure et leur couleur, gérer leur panier et passer commande facilement.",

      context:
        "Le projet LÉORA part d'un constat simple : de nombreuses boutiques de chaussures utilisent principalement Instagram pour présenter leurs produits et gérer leurs commandes. Cette approche peut rapidement devenir difficile à gérer lorsque les clientes doivent demander les prix, les pointures, les couleurs ou la disponibilité directement par message. LÉORA a donc été pensée comme une véritable boutique digitale permettant de centraliser et de simplifier cette expérience.",

      vision:
        "Créer une expérience e-commerce élégante et intuitive permettant à une boutique de chaussures féminines de présenter ses produits de manière professionnelle tout en offrant aux clientes un parcours d'achat simple, rapide et agréable.",

      objective:
        "L'objectif de LÉORA est de transformer une expérience de vente principalement basée sur les réseaux sociaux en une expérience digitale plus structurée, en facilitant la découverte des produits, la sélection des variantes et le processus de commande.",

      problem:
        "La vente de chaussures exclusivement via Instagram peut entraîner plusieurs difficultés : produits difficiles à retrouver, questions répétitives concernant les prix et les pointures, informations dispersées et processus de commande dépendant entièrement des messages privés. Ces contraintes peuvent rendre l'expérience moins fluide pour les clientes et plus difficile à gérer pour la boutique.",

      solution:
        "LÉORA propose une boutique e-commerce centralisée où les clientes peuvent parcourir les collections, rechercher et filtrer les produits, consulter leurs détails, sélectionner leur pointure et leur couleur, ajouter leurs articles au panier et suivre un parcours de commande plus simple.",

      targetAudience: [
        "Femmes à la recherche de chaussures tendance et élégantes",
        "Clientes souhaitant découvrir facilement différentes collections",
        "Acheteuses habituées aux réseaux sociaux et au shopping en ligne",
        "Boutiques de chaussures souhaitant digitaliser leur activité",
        "Marques de mode souhaitant développer leur présence en ligne",
      ],

      mainSections: [
        {
          title: "Accueil",
          description:
            "Présentation de LÉORA, de son univers visuel et des collections mises en avant."
        },
        {
          title: "Collections",
          description:
            "Exploration des différentes catégories de chaussures proposées par la marque."
        },
        {
          title: "Produits",
          description:
            "Catalogue permettant de découvrir les modèles, leurs prix, leurs couleurs et leurs disponibilités."
        },
        {
          title: "Détails du produit",
          description:
            "Présentation détaillée de chaque paire avec sélection de la pointure et de la couleur."
        },
        {
          title: "Panier",
          description:
            "Gestion des articles sélectionnés avant de finaliser la commande."
        },
      ],

      challenges: [
        "Créer une identité visuelle élégante et féminine adaptée à une marque de chaussures",
        "Transformer l'expérience d'achat sur les réseaux sociaux en parcours e-commerce structuré",
        "Organiser efficacement un catalogue composé de plusieurs catégories et produits",
        "Gérer les variantes de produits telles que les pointures et les couleurs",
        "Créer une navigation simple et intuitive pour faciliter la découverte des produits",
        "Garantir une expérience responsive cohérente sur mobile, tablette et desktop",
        "Structurer le frontend de manière suffisamment flexible pour intégrer un backend ultérieurement",
      ],

      features: [
        "Homepage moderne et orientée conversion",
        "Catalogue de chaussures organisé par catégories",
        "Recherche et filtrage des produits",
        "Fiches produits détaillées",
        "Sélection des pointures et des couleurs",
        "Gestion du panier",
        "Parcours de commande intuitif",
        "Design responsive",
        "Identité visuelle féminine et élégante",
      ],

      technicalApproach:
        "LÉORA a été développée comme une expérience e-commerce évolutive et non comme une simple vitrine. L'architecture frontend repose sur des composants réutilisables permettant de séparer les différentes parties de l'interface : navigation, catalogue, cartes produits, détails produits, filtres et panier. Les données produits sont structurées de manière à faciliter une future connexion à une API et à une base de données.",

      results: [
        "Création d'une identité digitale cohérente pour LÉORA",
        "Conception d'une expérience e-commerce moderne et élégante",
        "Organisation claire des produits et des différentes catégories",
        "Mise en place d'un parcours allant de la découverte du produit jusqu'au panier",
        "Création d'une interface responsive adaptée aux différents appareils",
        "Base frontend évolutive prête pour de futures fonctionnalités e-commerce",
      ],

      growthPotential:
        "LÉORA peut évoluer progressivement d'une boutique digitale vers une véritable plateforme e-commerce. Le projet pourrait intégrer un système de gestion des stocks, des comptes clientes, des paiements en ligne, un espace administrateur, des commandes en temps réel et des outils d'analyse permettant à la boutique de mieux comprendre ses clientes et ses performances commerciales.",

      roadmap: [
        "Authentification et comptes clientes",
        "Gestion des stocks en temps réel",
        "Système complet de gestion des commandes",
        "Paiement en ligne",
        "Espace administrateur pour gérer les produits et les commandes",
        "Wishlist et produits favoris",
        "Avis et évaluations des produits",
        "Notifications et suivi des commandes",
        "Statistiques et analytics e-commerce",
      ],

      projectImpact:
        "LÉORA illustre comment une boutique traditionnelle ou principalement présente sur Instagram peut évoluer vers une expérience digitale plus professionnelle. Le projet ne se limite pas à présenter des chaussures, mais cherche à construire un véritable parcours e-commerce centré sur la découverte, le choix et l'achat.",
    },

    en: {
      name: "LÉORA",

      category: "Women's Footwear E-commerce",

      subtitle:
        "An elegant digital experience designed for a modern women's footwear brand.",

      shortDescription:
        "LÉORA is a modern e-commerce experience designed for a women's footwear brand. The project combines an elegant visual identity with a seamless shopping journey, allowing customers to discover collections, explore products, select sizes and colors, manage their cart, and place orders easily.",

      context:
        "The LÉORA project started from a simple observation: many footwear boutiques rely heavily on Instagram to showcase products and manage orders. This can quickly become difficult when customers need to ask about prices, sizes, colors, or availability through direct messages. LÉORA was therefore designed as a digital storefront that centralizes and simplifies the entire shopping experience.",

      vision:
        "Create an elegant and intuitive e-commerce experience that allows a women's footwear boutique to showcase its products professionally while providing customers with a simple, fast, and enjoyable shopping journey.",

      objective:
        "The main objective of LÉORA is to transform a social-media-based selling experience into a more structured digital shopping experience by simplifying product discovery, variant selection, and ordering.",

      problem:
        "Selling footwear exclusively through Instagram can create several challenges: products can be difficult to find, customers repeatedly ask about prices and sizes, information is scattered across conversations, and the ordering process depends heavily on direct messages. These limitations can make the experience less convenient for customers and harder to manage for the business.",

      solution:
        "LÉORA provides a centralized e-commerce storefront where customers can browse collections, search and filter products, view detailed product information, select sizes and colors, add items to their cart, and follow a smoother ordering journey.",

      targetAudience: [
        "Women looking for stylish and elegant footwear",
        "Customers who want to easily explore different collections",
        "Social-media users interested in online shopping",
        "Footwear boutiques looking to digitalize their business",
        "Fashion brands looking to strengthen their online presence",
      ],

      mainSections: [
        {
          title: "Home",
          description:
            "Introduction to LÉORA, its visual identity, and featured footwear collections."
        },
        {
          title: "Collections",
          description:
            "Explore the different footwear categories offered by the brand."
        },
        {
          title: "Products",
          description:
            "A structured catalog showcasing products, prices, colors, and availability."
        },
        {
          title: "Product Details",
          description:
            "Detailed product pages with size and color selection."
        },
        {
          title: "Cart",
          description:
            "Manage selected products before completing the order."
        },
      ],

      challenges: [
        "Creating an elegant and feminine visual identity suitable for a footwear brand",
        "Transforming social-media shopping into a structured e-commerce journey",
        "Organizing a product catalog across multiple footwear categories",
        "Handling product variants such as sizes and colors",
        "Creating simple and intuitive navigation for product discovery",
        "Ensuring a consistent responsive experience across devices",
        "Building a flexible frontend foundation for future backend integration",
      ],

      features: [
        "Modern conversion-focused homepage",
        "Footwear catalog organized by categories",
        "Product search and filtering",
        "Detailed product pages",
        "Size and color selection",
        "Shopping cart management",
        "Intuitive ordering journey",
        "Responsive design",
        "Elegant and feminine visual identity",
      ],

      technicalApproach:
        "LÉORA was developed as an evolving e-commerce experience rather than a simple showcase website. The frontend architecture relies on reusable components to separate different parts of the interface, including navigation, product catalogs, product cards, filters, product details, and cart management. Product data is structured to make future API and database integration easier.",

      results: [
        "Created a cohesive digital identity for LÉORA",
        "Designed a modern and elegant e-commerce experience",
        "Structured products and footwear categories clearly",
        "Created a complete journey from product discovery to cart",
        "Delivered a responsive interface across different devices",
        "Built a scalable frontend foundation for future e-commerce features",
      ],

      growthPotential:
        "LÉORA can gradually evolve from a digital storefront into a complete e-commerce platform. Future development could include inventory management, customer accounts, online payments, an administration dashboard, real-time order management, and analytics tools to help the business better understand its customers and sales performance.",

      roadmap: [
        "Customer authentication and accounts",
        "Real-time inventory management",
        "Complete order management system",
        "Online payment integration",
        "Admin dashboard for products and orders",
        "Wishlist and favorite products",
        "Product reviews and ratings",
        "Order notifications and tracking",
        "E-commerce analytics and performance dashboards",
      ],

      projectImpact:
        "LÉORA demonstrates how a traditional footwear boutique or an Instagram-based business can evolve into a more professional digital shopping experience. The project is not only about showcasing shoes, but about creating a complete customer journey focused on discovery, selection, and purchase.",
    },

    ar: {
      name: "LÉORA",

      category: "منصة تجارة إلكترونية للأحذية النسائية",

      subtitle:
        "تجربة رقمية أنيقة مصممة لعلامة عصرية متخصصة في الأحذية النسائية.",

      shortDescription:
        "LÉORA هي تجربة تجارة إلكترونية عصرية مصممة لعلامة متخصصة في الأحذية النسائية. يجمع المشروع بين هوية بصرية أنيقة وتجربة تسوق سلسة، حيث يمكن للزبونات اكتشاف المجموعات، استعراض المنتجات، اختيار المقاس واللون، إدارة السلة وإتمام الطلب بسهولة.",

      context:
        "انطلق مشروع LÉORA من ملاحظة بسيطة: تعتمد العديد من محلات الأحذية بشكل كبير على Instagram لعرض المنتجات وإدارة الطلبات. وقد يصبح ذلك صعبًا عندما تحتاج الزبونات إلى السؤال عن الأسعار أو المقاسات أو الألوان أو التوفر عبر الرسائل الخاصة. لذلك تم تصميم LÉORA كمتجر رقمي يعمل على تنظيم وتبسيط تجربة التسوق بالكامل.",

      vision:
        "إنشاء تجربة تجارة إلكترونية أنيقة وسهلة الاستخدام تسمح لمتجر الأحذية النسائية بعرض منتجاته بطريقة احترافية، مع توفير رحلة شراء بسيطة وسريعة ومريحة للزبونات.",

      objective:
        "الهدف الأساسي من LÉORA هو تحويل تجربة البيع المعتمدة بشكل كبير على شبكات التواصل الاجتماعي إلى تجربة رقمية أكثر تنظيمًا، من خلال تسهيل اكتشاف المنتجات واختيار الخيارات وإتمام الطلب.",

      problem:
        "يمكن أن يؤدي بيع الأحذية بشكل حصري عبر Instagram إلى عدة مشاكل، مثل صعوبة العثور على المنتجات، وتكرار الأسئلة حول الأسعار والمقاسات، وتشتت المعلومات داخل المحادثات، بالإضافة إلى اعتماد عملية الطلب بشكل كبير على الرسائل الخاصة. هذه الأمور تجعل تجربة الشراء أقل سهولة للزبونة وتجعل إدارة المتجر أكثر صعوبة.",

      solution:
        "توفر LÉORA متجرًا إلكترونيًا مركزيًا يمكن للزبونات من خلاله تصفح المجموعات، البحث عن المنتجات وتصفيتها، الاطلاع على تفاصيلها، اختيار المقاس واللون، إضافة المنتجات إلى السلة، واتباع رحلة طلب أكثر سهولة.",

      targetAudience: [
        "النساء الباحثات عن أحذية عصرية وأنيقة",
        "الزبونات الراغبات في استكشاف مختلف المجموعات بسهولة",
        "مستخدمات شبكات التواصل المهتمات بالتسوق الإلكتروني",
        "محلات الأحذية الراغبة في رقمنة نشاطها",
        "علامات الموضة الراغبة في تعزيز حضورها الرقمي",
      ],

      mainSections: [
        {
          title: "الرئيسية",
          description:
            "التعريف بعلامة LÉORA وهويتها البصرية والمجموعات المميزة."
        },
        {
          title: "المجموعات",
          description:
            "استكشاف مختلف فئات الأحذية التي تقدمها العلامة."
        },
        {
          title: "المنتجات",
          description:
            "كتالوج منظم لعرض المنتجات والأسعار والألوان والتوفر."
        },
        {
          title: "تفاصيل المنتج",
          description:
            "صفحة مفصلة لكل منتج مع إمكانية اختيار المقاس واللون."
        },
        {
          title: "السلة",
          description:
            "إدارة المنتجات المختارة قبل إتمام الطلب."
        },
      ],

      challenges: [
        "إنشاء هوية بصرية أنيقة وأنثوية مناسبة لعلامة أحذية",
        "تحويل تجربة التسوق عبر شبكات التواصل إلى رحلة تجارة إلكترونية منظمة",
        "تنظيم كتالوج المنتجات ضمن عدة فئات من الأحذية",
        "إدارة خيارات المنتجات مثل المقاسات والألوان",
        "إنشاء تنقل بسيط وسهل لتسهيل اكتشاف المنتجات",
        "ضمان تجربة متجاوبة ومتناسقة على مختلف الأجهزة",
        "بناء قاعدة Frontend مرنة تسمح بدمج Backend مستقبلًا",
      ],

      features: [
        "صفحة رئيسية عصرية وموجهة نحو التحويل",
        "كتالوج أحذية منظم حسب الفئات",
        "البحث وتصفية المنتجات",
        "صفحات تفصيلية للمنتجات",
        "اختيار المقاس واللون",
        "إدارة سلة التسوق",
        "رحلة طلب سهلة وواضحة",
        "تصميم متجاوب",
        "هوية بصرية أنيقة وأنثوية",
      ],

      technicalApproach:
        "تم تطوير LÉORA كتجربة تجارة إلكترونية قابلة للتطور وليست مجرد موقع تعريفي. تعتمد بنية الواجهة على مكونات قابلة لإعادة الاستخدام لفصل مختلف أجزاء التطبيق، مثل التنقل وكتالوج المنتجات وبطاقات المنتجات والفلاتر وتفاصيل المنتجات والسلة. كما تم تنظيم بيانات المنتجات بطريقة تسهل دمج API وقاعدة بيانات مستقبلًا.",

      results: [
        "إنشاء هوية رقمية متكاملة لعلامة LÉORA",
        "تصميم تجربة تجارة إلكترونية عصرية وأنيقة",
        "تنظيم المنتجات وفئات الأحذية بطريقة واضحة",
        "إنشاء رحلة متكاملة من اكتشاف المنتج إلى السلة",
        "تصميم واجهة متجاوبة مع مختلف الأجهزة",
        "إنشاء قاعدة Frontend قابلة للتطوير وإضافة خصائص مستقبلية",
      ],

      growthPotential:
        "يمكن أن تتطور LÉORA تدريجيًا من متجر رقمي إلى منصة تجارة إلكترونية متكاملة. ويمكن مستقبلًا إضافة إدارة المخزون، حسابات الزبائن، الدفع الإلكتروني، لوحة تحكم للإدارة، إدارة الطلبات في الوقت الحقيقي، وأدوات تحليل تساعد المتجر على فهم الزبائن والأداء التجاري بشكل أفضل.",

      roadmap: [
        "حسابات وتسجيل دخول للزبائن",
        "إدارة المخزون في الوقت الحقيقي",
        "نظام متكامل لإدارة الطلبات",
        "دمج الدفع الإلكتروني",
        "لوحة تحكم لإدارة المنتجات والطلبات",
        "قائمة المفضلة والمنتجات المفضلة",
        "تقييمات وآراء الزبائن",
        "إشعارات وتتبع الطلبات",
        "إحصائيات وتحليلات التجارة الإلكترونية",
      ],

      projectImpact:
        "يوضح مشروع LÉORA كيف يمكن لمتجر أحذية تقليدي أو يعتمد بشكل أساسي على Instagram أن ينتقل إلى تجربة رقمية أكثر احترافية. فالمشروع لا يقتصر على عرض الأحذية، بل يهدف إلى بناء رحلة متكاملة للزبونة تتمحور حول اكتشاف المنتج واختياره وشرائه.",
    },
  },
};