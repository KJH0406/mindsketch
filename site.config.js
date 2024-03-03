const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Kim JangHo",
    image: "/avatar.jpg",
    role: "frontend developer",
    bio: "Always growing🔥",
    email: "rlawkdgh0406@naver.com",
    linkedin: "kimjangho",
    github: "KJH0406",
    instagram: "_djangho",
    phone: "",
    // phone: "+82 10-2108-4146",
  },
  projects: [
    {
      name: `mindsketch`,
      href: "https://github.com/KJH0406/mindsketch",
    },
  ],
  // blog setting (required)
  blog: {
    title: "mindsketch",
    description:
      "'마인드 스케치, 일상 속 영감과 배움을 통한 생각을 그리다' 일상의 순간들과 개인적 학습 과정에서 발견한 영감들을 기록하고 공유합니다.",
  },

  // CONFIG configration (required)
  link: "https://mindsketch.vercel.app",
  since: 2024, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "9e4b7117-3c03-4cb8-a8ce-3600b4975643", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
