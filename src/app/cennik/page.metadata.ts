import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cenník | WebAppMaster",
  description: "Orientačný cenník a kalkulačka pre webstránky, aplikácie a automatizácie na mieru. Získajte nezáväznú cenovú ponuku rýchlo online.",
  alternates: {
    canonical: "/cennik",
  },
  openGraph: {
    title: "Cenník | WebAppMaster",
    description: "Spočítajte si orientačnú cenu webu alebo aplikácie. Férové ceny, žiadne skryté poplatky.",
    url: "https://webappmaster.sk/cennik",
    images: [
      {
        url: "https://webappmaster.sk/images/seo-cover.jpg",
        width: 1200,
        height: 630,
        alt: "WebAppMaster Cenník",
      },
    ],
    siteName: "WebAppMaster",
    locale: "sk_SK",
    type: "website",
  },
};
