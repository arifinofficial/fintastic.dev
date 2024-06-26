const siteConfig = {
  title: "fintastic Blog",
  description:
    "Personal blog Arifin N, sharing about software engineering, web development, and sharing what i've learned.",
  language: "id",
  theme: "system",
  siteUrl: "https://fintastic.dev",
  siteRepo: "https://github.com/arifinofficial/fintastic.dev",
  email: "arifinofficial@outlook.com",
  github: "https://github.com/arifinofficial",
  twitter: "https://twitter.com/arifinofficial",
  linkedIn: "https://www.linkedin.com/in/arifinofficial",
  socialBanner: "https://res.cloudinary.com/di2q89ggu/image/upload/v1711265134/fintastic.dev/cover_n00szg.jpg",
  giscus: {
    dataRepo: process.env.NEXT_PUBLIC_GISCUS_DATA_REPO as `${string}/${string}`,
    repoId: process.env.NEXT_PUBLIC_GISCUS_REPO_ID as string,
    category: "Q&A",
    categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
    dataMapping: "pathname" as "pathname",
  },
  umamiWebsiteId: process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID
};

export default siteConfig;
