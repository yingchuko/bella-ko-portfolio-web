/** Central portfolio copy and structured content. Image paths are root-relative (served from /public). */

export type NavLink = { label: string; href: string };

export type TextSegment = { text: string; italic?: boolean };

export type StatItem = { value: string; label: string };

export type ExperienceEntry = {
  year: string;
  company: string;
  url: string;
  role: string;
  description: string[];
  skills: string[];
};

export type ProjectEntry = {
  title: string;
  description: string;
  technologies: string[];
  /** Root-relative path under `public/`, e.g. `/screenshots/oevra.png`. Omit or null to use the placeholder tile. */
  image?: string | null;
};

export type SkillCategory = { id: string; label: string; items: string[] };

export type PhilosophyPillar = { title: string; description: string };

export type SocialLink = { name: string; url: string };

export const portfolioData = {
  seo: {
    title: "柯映竹 | Frontend Engineer",
    description:
      "專注於 Vue 3 / Nuxt 3 與現代化互動技術的前端工程師，具備設計美學與資安規範實務。",
  },

  site: {
    brand: "YingChu Ko",
    nav: [
      { label: "About", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
      { label: "Certifications", href: "#certifications" },
      { label: "Contact", href: "#contact" },
    ] satisfies NavLink[],
  },

  hero: {
    headlineLines: [
      { text: "Design, Engineering & Experience.", italic: true },
      { text: "以美學驅動技術", italic: false },
      { text: "以架構支撐體驗", italic: false },
    ] satisfies TextSegment[],
    tagline: {
      line1: "深耕 Vue / Nuxt / TypeScript 的現代化 Web 實踐。",
      line2: "以金融級架構標準，打造流暢且可靠的數位體驗。",
    },
    scrollLabel: "Scroll",
    established: "Est. 2022",
  },

  about: {
    sectionLabel: "About",
    manifesto: [
      [{ text: "我是柯映竹" }, { text: " (Bella Ko)", italic: true }],
      [{ text: "在設計美學與金融級架構間" }],
      [{ text: "建構數位體驗的平衡。" }],
    ] satisfies TextSegment[][],
    body: [
      "擁有深耕央行、台銀等大型金融系統的實務經驗，擅長從零到一建構基於 Vue 3 / Nuxt 3 / TypeScript 的現代化前端架構。",
      "跨領域背景與視覺敏銳度，使我能精準弭平 UI/UX 與技術實作間的落差，並將複雜邏輯轉化為直觀且具備無障礙標準的互動介面。",
    ],
    stats: [
      { value: "2Years↑", label: "前端工作經歷" },
      { value: "Award", label: "iThome 鐵人賽" },
      { value: "ISO", label: "27001 資安主導稽核員" },
    ] satisfies StatItem[],
  },

  experience: {
    sectionLabel: "Experience",
    titleBefore: "實踐與成長",
    titleItalic: "A journey through meaningful work.",
    items: [
      {
        year: "2022 — 2025",
        company: "資拓宏宇國際股份有限公司",
        url: "https://www.iisigroup.com/",
        role: "前端工程師",
        description: [
          "主導中央銀行、台銀、兆豐等金融核心系統重構，從零到一建立 Nuxt 3 企業級架構。",
          "定義標準化組件庫與前端開發規範，導入 Git Flow 與 Code Review，優化團隊協作開發流程。",
          "擔任資安代表實踐 SSDLC 安全開發，取得 ISO 27001 證照並通過稽核，確保金融系統穩健性。",
          "負責政府無障礙網頁檢測（WCAG）與優化，確保系統符合通用設計標準。",
        ],
        skills: [
          "Vue 3",
          "Nuxt 3",
          "TypeScript",
          "RWD",
          "Git Flow",
          "ISO 27001",
          "Accessibility",
        ],
      },
      {
        year: "2022 — 2022",
        company: "iSpan 資展國際",
        url: "https://www.ispan.com.tw/",
        role: "前端工程是就業養成班",
        description: [
          "接受 600 小時全端高強度訓練，精通 HTML5 / CSS3 與 React 框架實作 SPA 應用。",
          "具備後端整合基礎，搭配 Node.js 與 MySQL 開發具備資料庫串接能力的完整專案。",
        ],
        skills: ["React", "JavaScript", "Node.js", "MySQL", "Bootstrap"],
      },
      {
        year: "2017 — 2021",
        company: "國立臺北教育大學",
        url: "https://www.ntue.edu.tw/",
        role: "文化創意產業經營學系",
        description: [
          "專攻跨領域藝術與媒體設計，建立深厚的設計美學根基。",
          "擅長將視覺敘事與數位體驗結合，作品曾獲實境遊戲設計獎項並成功達成群眾募資。",
        ],
        skills: ["Adobe Photoshop", "Adobe Illustrator"],
      },
    ] satisfies ExperienceEntry[],
  },

  skills: {
    sectionLabel: "Expertise",
    titleLine1: "技術核心",
    titleLine2: "Tools of the craft.",
    categories: [
      {
        id: "development",
        label: "Frontend & Development",
        items: [
          "JavaScript (ES6+)",
          "TypeScript",
          "Vue 3",
          "Nuxt 3",
          "React",
          "Next.js",
          "HTML5",
          "CSS3",
          "SCSS",
        ],
      },
      {
        id: "ui-design",
        label: "UI & Visual Design",
        items: [
          "Tailwind CSS",
          "Figma",
          "Quasar",
          "Vuetify",
          "PrimeVue",
          "Accessibility",
          "RWD 響應式設計",
        ],
      },
      {
        id: "backend-tools",
        label: "Backend & Tools",
        items: [
          "Node.js",
          "C# / .NET",
          "RESTful API",
          "Git Flow",
          "SSDLC 安全開發",
          "ISO 27001 實務",
        ],
      },
    ] satisfies SkillCategory[],

    philosophy: {
      label: "Core Highlights",
      pillars: [
        {
          title: "架構與效能",
          description:
            "專精於模組化重構與組件庫開發，有效提升代碼重用性與維護效率。",
        },
        {
          title: "設計轉化",
          description:
            "憑藉美學背景，精準弭平設計與技術落差，將複雜邏輯轉化為直觀介面。",
        },
        {
          title: "資安與規範",
          description:
            "落實 SSDLC 安全流程與無障礙標準，確保金融級系統的穩健與包容性。",
        },
        {
          title: "技術影響力",
          description:
            "具備技術教學經驗，主導 Git Flow 協作與 Code Review，帶動團隊成長。",
        },
      ] satisfies PhilosophyPillar[],
    },
  },

  projects: {
    sectionLabel: "Projects",
    titleLine1: "賦予邏輯與價值",
    titleLine2: "Projects that speak for themselves.",
    viewProjectLabel: "查看專案詳情",
    items: [
      {
        title: "中央銀行電子表單系統全端維護",
        description:
          "精確處理高複雜度的金融業務邏輯，並透過使用者訪談優化介面流暢度，在極高穩定性要求下確保系統安全運行。",
        technologies: [
          "Vue 2.6",
          "Vuetify",
          "Vue Router",
          "C#",
          "SCSS",
          "金融業務邏輯",
          "系統安全性",
        ],
        image: null,
      },
      {
        title: "大型金融報表管理系統優化",
        description:
          "執行台銀與華銀報表系統 UI 翻新，建立高度可重用的表單模板與組件庫，顯著降低後續開發與維護成本。",
        technologies: [
          "Vue 3",
          "TypeScript",
          "Pinia",
          "Quasar",
          "Tailwind",
          "組件化架構設計",
          "介面優化",
        ],
        image: null,
      },
      {
        title: "銀行雲端櫃檯與人事系統架構設計",
        description:
          "負責兆豐銀行系統架構規劃，分析規格文件並指導團隊完成 C# 與 Vue 3 的高效整合開發，降低技術溝通成本。",
        technologies: [
          "Vue 3.4",
          "Vue Router",
          "Vuetify",
          "C#",
          "Sass",
          "技術領導",
          "架構規劃",
        ],
        image: null,
      },
      {
        title: "金融無障礙網頁規範實作專案",
        description:
          "中央銀行電子表單系統符合國家無障礙標準，將複雜的金融表單轉化為符合 WCAG 規範的友善操作體驗。",
        technologies: ["無障礙規範", "WCAG", "通用設計", "使用者訪談"],
        image: null,
      },
      {
        title: "Nuxt 3 技術實踐系列",
        description:
          "系統化梳理 Nuxt 3 之 SSR 架構與 Composables 邏輯應用，榮獲 iThome 鐵人賽佳作，展現技術轉化與輸出能力。",
        technologies: ["Nuxt 3", "SSR/SSG", "技術寫作", "iThome 佳作"],
        image: null,
      },
      {
        title: "Creative Planets 品牌官網",
        description:
          "使用 Next.js 打造現代化互動元件，針對 SEO 與載入效能進行優化，完美呈現品牌的高質感視覺意象。",
        technologies: [
          "Next.js",
          "React 18",
          "Tailwind CSS",
          "TypeScript",
          "SEO 優化",
          "互動式元件",
        ],
        image: null,
      },
      {
        title: "手作課程全端電商平台",
        description:
          "從零到一實作完整電商邏輯，整合會員系統、地圖 API 與購物車結帳流程，打造流暢的全端購物體驗。",
        technologies: [
          "React 18",
          "Redux",
          "Node.js",
          "MySQL",
          "RESTful API",
          "RWD",
        ],
        image: null,
      },
    ] satisfies ProjectEntry[],
  },

  certifications: {
    sectionLabel: "Certifications",
    titleBefore: "積累的證明",
    titleItalic: "Always learning, always building.",
    items: [
      {
        name: "ISO 27001:2022 資訊安全管理系統主導稽核員",
        issuer: "SGS 台灣檢驗科技",
        year: "2024",
      },
      {
        name: "基於 SSDLC 的 DevSecOps 課程",
        issuer: "iSpan 資展國際",
        year: "2024",
      },
      {
        name: "安全程式碼撰寫",
        issuer: "中華電信學院",
        year: "2023",
      },
      {
        name: "前端開發全端整合就業養成班",
        issuer: "iSpan 資展國際 & TCCA 台中市電腦商業共同協會",
        year: "2022",
      },
    ],
  },

  footer: {
    sectionLabel: "Get in Touch",
    email: {
      mailto: "z072614@gmail.com",
      displayLine1: "z072614@gmail",
      displayLine2: ".com",
    },
    intro:
      "Open for select projects and collaborations. Let's create something serene together.",
    localTimeLabel: "Local Time",
    connectLabel: "Connect",
    navigateLabel: "Navigate",
    socialLinks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bella-ko-yingchu/",
      },
      { name: "GitHub", url: "https://github.com/yingchuko" },
    ] satisfies SocialLink[],
    nav: [
      { label: "About", href: "#about" },
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
      { label: "Certifications", href: "#certifications" },
    ] satisfies NavLink[],
    copyrightName: "YingChu Ko",
    tagline: "Crafted with intention",
  },
};
