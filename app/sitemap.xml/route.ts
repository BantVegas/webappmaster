import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://webappmaster.sk";
  // Všetky tvoje aktuálne stránky podľa adresárovej štruktúry
  const pages = [
    "", // domovská stránka /
    "/ako-to-funguje",
    "/cennik",
    "/spolupraca"
  ];

  const urls = pages.map(
    (path) => `
      <url>
        <loc>${baseUrl}${path}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
    `
  );

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls.join("")}
    </urlset>
  `;

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
