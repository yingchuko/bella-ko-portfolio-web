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
  punchline: string;
  description: string;
  technologies: string[];
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
      { label: "Skills" , href: "#skills" },
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
      line1: "深耕 Vue / Nuxt / TypeScript 的現代化網頁。",
      line2: "以金融級架構標準，打造可靠的數位體驗。",
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
    title: "實踐與成長",
    titleItalic: "A journey through meaningful work.",
    items: [
      {
        year: "2022 — 2025",
        company: "資拓宏宇國際股份有限公司",
        url: "https://www.iisigroup.com/",
        role: "前端工程師",
        description: [
          "重構央行、台銀等金融核心系統，從零建立 Nuxt 3 企業級架構。",
          "標準化前端組件與開發規範，透過 Git Flow、Code Review 提升協作效率。",
          "取得 ISO 27001 證照並擔任資安代表通過稽核，確保系統穩健性。",
          "負責無障礙網頁檢測 WCAG 優化，使系統符合通用設計標準。",
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
    sectionLabel: "Skills",
    title: "技術核心",
    titleItalic: "Tools of the craft.",
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
    title: "賦予邏輯與價值",
    titleItalic: "Projects that speak for themselves.",
    viewProjectLabel: "查看專案詳情",
    items: [
      {
        title: "央行電子表單全端維護",
        punchline: "精確處理金融邏輯，穩定運行萬無一失。",
        description:
          "深耕高複雜度的金融業務邏輯，精準對接銀行體系之法規需求。透過深度使用者訪談識別操作瓶頸，將繁瑣的紙本流程數位化，在確保資料高度安全與完整性的前提下，優化跨部門審核流暢度。",
        technologies: [
          "Vue 2.6",
          "Vuetify",
          "Vue Router",
          "C#",
          "SCSS",
          "金融業務邏輯",
          "系統安全性",
        ],
      },
      {
        title: "大型金融報表管理系統優化",
        punchline: "以標準化組件架構，驅動數據視覺化的數位轉型。",
        description:
          "執行台銀與華銀大型系統之 UI / UX 翻新專案。藉由建立封裝高度可重用的表單模板組件，大幅提升開發效率，提供兼具美感與效能的查詢體驗。",
        technologies: [
          "Vue 3",
          "TypeScript",
          "Pinia",
          "Quasar",
          "Tailwind",
          "組件化架構設計",
          "介面優化",
        ],
      },
      {
        title: "兆豐銀行人事系統架構設計",
        punchline: "主導全棧技術選型，建構高彈性的整合架構。",
        description:
          "負責系統核心架構規劃，精確拆解規格文件並弭平技術斷層。透過 C# 後端 API 與 Vue 3 前端之高效整合實作，帶領開發團隊建立標準化流程，顯著降低溝通成本並縮短產品交付週期。",
        technologies: [
          "Vue 3.4",
          "Vue Router",
          "Vuetify",
          "C#",
          "Sass",
          "技術領導",
          "架構規劃",
        ],
      },
      {
        title: "無障礙網頁規範實作專案",
        punchline: "消弭數位落差，實踐普惠金融的設計準則。",
        description:
          "將國家級無障礙標準與中央銀行電子表單與結合，透過嚴謹的操作路徑測試，確保符合最新 WCAG 規範，將友善體驗內化於每一處互動細節。",
        technologies: ["無障礙規範", "WCAG", "通用設計", "使用者訪談"],
      },
      {
        title: "Nuxt 3 技術實踐系列",
        punchline: "技術轉化與經驗輸出，系統化梳理現代框架美學。",
        description:
          "於 iThome 鐵人賽中系統化梳理 Nuxt 3 之 SSR 與 SSG 渲染架構。透過實戰範例探討 Composables 之邏輯封裝，展現將複雜技術脈絡轉化為易讀文件的輸出能力，榮獲佳作肯定。",
        technologies: ["Nuxt 3", "SSR/SSG", "技術寫作", "iThome 佳作"],
      },
      {
        title: "Creative Planets 品牌官網",
        punchline: "極致效能與視覺的交會，打造品牌數位形象。",
        description:
          "運用 Next.js 架構優化載入效能，搭配 Framer Motion 實現細膩的互動體驗。針對 SEO 與 Web Vitals 進行全方位打磨，在視覺質感與搜尋排名之間取得完美平衡。",
        technologies: [
          "Next.js",
          "React 18",
          "Tailwind CSS",
          "TypeScript",
          "SEO 優化",
          "互動式元件",
        ],
      },
      {
        title: "手作課程全端電商平台",
        punchline: "從零構建完整電商生態，實現無縫的購物旅程。",
        description:
          "整合會員系統、動態購物車及金流結帳流程，實作全端電商之邏輯閉環。搭配地圖 API 進行線下實體店面導航，確保在不同裝置下皆能提供直覺、流暢的購物體驗。",
        technologies: [
          "React 18",
          "Redux",
          "Node.js",
          "MySQL",
          "RESTful API",
          "RWD",
        ],
      },
    ] satisfies ProjectEntry[],
  },

  certifications: {
    sectionLabel: "Certifications",
    title: "積累的證明",
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
      mail: "z072614@gmail.com",
    },
    intro:
      "Open for select projects and collaborations. Let's create something serene together.",
    socialLinks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/bella-ko-yingchu/",
      },
      { name: "GitHub", url: "https://github.com/yingchuko" },
    ] satisfies SocialLink[],
    copyrightName: "YingChu Ko",
    tagline: "Crafted with intention",
  },
};
