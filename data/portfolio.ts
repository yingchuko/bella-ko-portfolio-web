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
  url?: string;
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
      { label: "Skills", href: "#skills" },
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
    established: "Est. 2026",
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
          "重構央行、台銀與兆豐等大型系統，導入 TypeScript 與組件化設計，建構高維護性的企業級架構。",
          "全端協作 RESTful API 串接與 C#/.NET 維護，具備處理複雜前後端邏輯整合的能力。",
          "取得 ISO 27001 主導稽核員證照並擔任資安代表，同時負責無障礙網頁檢測與通用設計優化。",
          "建立前端組件標準化規範，透過 Git Flow、Code Review 與技術指導提升團隊協作效率。",
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
        year: "2023 — 2023",
        company: "iThome 鐵人賽佳作",
        url: "https://ithelp.ithome.com.tw/2020-12th-ironman/articles/6664",
        role: "Modern Web 組佳作",
        description: [
          "30 篇 Nuxt 3 技術文章，系統化整理框架核心概念與實務應用。",
          "內容涵蓋 SSR、Nitro Server、Server API、Data Fetching、Composables、Routing、Layouts、Middleware、State Management 等核心技術。",
          "延伸研究 Nuxt Image、Nuxt Content、UnoCSS、ESLint 與 Deployment。",
        ],
        skills: ["Vue 3", "Nuxt 3", "技術寫作"],
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
          "JavaScript",
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
            "專注於模組化重構與組件庫開發，提升程式碼重用性與後續維護效率。",
        },
        {
          title: "設計轉化",
          description:
            "具設計背景，協助縮短設計與開發間的落差，將複雜功能整理成易於操作的介面，並重視細節一致性。",
        },
        {
          title: "資安與規範",
          description:
            "取得資訊安全相關證照，實際參與 SSDLC 安全流程與無障礙規範落實，提升系統穩定性與可用性。",
        },
        {
          title: "技術影響力",
          description:
            "擁有 Vue 技術分享與 Nuxt 鐵人賽佳作經驗，利用 Git Flow 與 Code Review 協助團隊建立開發共識。",
        },
      ] satisfies PhilosophyPillar[],
    },
  },

  projects: {
    sectionLabel: "Projects",
    title: "賦予邏輯與價值",
    titleItalic: "Projects that speak for themselves.",
    items: [
      {
        title: "央行＿電子表單全端維護",
        description:
          "深耕高複雜度的金融業務邏輯，精準對接銀行體系之法規需求。透過深度使用者訪談識別操作瓶頸，將繁瑣的紙本流程數位化，在確保資料高度安全與完整性的前提下，優化跨部門審核流暢度。",
        technologies: ["Vue 2.6", "Vuetify", "C#"],
      },
      {
        title: "台銀／華銀＿報表管理系統",
        description:
          "執行台灣銀行與華南銀行大型系統之前端翻新專案。藉由 TypeScript 與 UI Framework 建立高度可重用的表單模板組件，大幅提升開發效率，提供兼具美感與效能的查詢體驗。",
        technologies: ["Vue 3", "TypeScript", "Quasar"],
      },
      {
        title: "Discord＿技術新聞推播工具",
        description:
          "協同 AI 工具完成技術新聞策展平台。面對限制主導三層架構重構與效能排毒，導入全域排他鎖與惰性限額評估，大幅節省 95% 執行時間與 AI Token 成本，根除記憶體溢出與逾時危機。",
        technologies: ["Next.js", "Claude", "Discord Webhook"],
        url: "https://github.com/yingchuko/tech-curator.git",
      },
      {
        title: "PetTopic＿寵物飲食電商平台",
        description:
          "打造流暢的寵物電商與健康測驗體驗。採用 Zustand 實現輕量高效的全域狀態管理與購物車資料存取，搭配 Framer Motion 與 Tailwind CSS 構建符合原子化設計的高重用性組件與細膩互動。",
        technologies: ["React 19", "Zustand", "TypeScript", "Tailwind"],
        url: "https://pet-topic.vercel.app/",
      },

      {
        title: "央行＿無障礙網頁規範實作",
        description:
          "將國家級無障礙標準與中央銀行電子表單與結合，透過嚴謹的操作路徑測試與使用者訪談，確保符合最新 WCAG 規範，將友善體驗內化於每一處互動細節。",
        technologies: ["無障礙規範", "WCAG", "通用設計", "使用者訪談"],
      },
      {
        title: "兆豐銀行＿人事系統架構設計",
        description:
          "負責系統核心架構規劃，精確拆解規格文件並弭平技術斷層。透過 C# 後端 API 與 Vue 3 前端的整合實作，帶領開發團隊建立標準化流程，顯著降低溝通成本並縮短產品交付週期。",
        technologies: ["Vue 3.4", "技術領導", "架構規劃"],
      },
      {
        title: "Creative Planets＿品牌官網",
        description:
          "運用 Next.js 架構優化載入效能，搭配 Framer Motion 實現細膩的互動體驗。針對 SEO 與 Web Vitals 進行全方位打磨，在視覺質感與搜尋排名之間取得完美平衡。",
        technologies: ["Next.js", "React 18", "TypeScript"],
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
