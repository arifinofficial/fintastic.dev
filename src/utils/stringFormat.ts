import siteConfig from "@/config/config";

export const slugify = (input: string) =>
  input
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

export const discussUrl = (slug: string) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    siteConfig.siteUrl + slug
  )}`;

export const editUrl = (path: string) =>
  `${siteConfig.siteRepo}/blob/main/${path}`;
