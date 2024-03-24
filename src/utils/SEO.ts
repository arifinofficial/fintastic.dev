import { Metadata } from "next";
import siteConfig from "@/config/config";

interface Props {
  title: string;
  slug: string;
  description: string;
  image?: string;
}

const SEO = ({ title, slug, description, image }: Props): Metadata => {
  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${siteConfig.title}`,
      description: description,
      url: siteConfig.siteUrl + slug,
      siteName: siteConfig.title,
      images: image ? [image] : [siteConfig.socialBanner],
      locale: "id",
      type: "website",
    },
    twitter: {
      title: `${title} | ${siteConfig.title}`,
      card: "summary_large_image",
      images: image ? [image] : [siteConfig.socialBanner],
    },
  };
};

export default SEO;
