import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { ThemeProviders } from "@/providers/theme-providers";
import SectionContainer from "@/components/SectionContainer";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import siteConfig from "@/config/config";

const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: "./",
    siteName: siteConfig.title,
    images: [siteConfig.socialBanner],
    locale: "id",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: siteConfig.title,
    card: "summary_large_image",
    images: [siteConfig.socialBanner],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${space_grotesk.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          defer
          src="https://analytics.us.umami.is/script.js"
          data-website-id={siteConfig.umamiWebsiteId}
        ></script>
      </head>
      <body>
        <ThemeProviders>
          <SectionContainer>
            <div className="flex h-screen flex-col justify-between font-sans">
              <Header />
              <main className="mb-auto">{children}</main>
              <Footer />
            </div>
          </SectionContainer>
        </ThemeProviders>
      </body>
    </html>
  );
}
