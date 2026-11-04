import fs from 'fs';

const domain = "https://ruangrimbaoutbound.id";

const staticPages = [
  "",
  "/tentang-kami",
  "/paket",
  "/fasilitas",
  "/galeri",
  "/blog",
  "/kontak",
  "/kebijakan-privasi",
  "/syarat-ketentuan",
  "/sitemap-info",
  "/outbound-perusahaan",
  "/family-gathering",
  "/outbound-sekolah",
  "/outbound-wisata"
];

const packagePages = [
  "/team-building",
  "/fun-games",
  "/leadership-camp",
  "/corporate-gathering",
  "/paket-hemat",
  "/paket-standard",
  "/paket-premium",
  "/paket-custom",
  "/outbound-pelajar",
  "/character-building",
  "/ldks-leadership",
  "/edukasi-alam",
  "/outbound-wisata",
  "/outbound-rafting",
  "/outbound-offroad",
  "/outbound-camping"
];

const blogPages = [
  "/blog/panduan-lengkap-outbound-perusahaan",
  "/blog/tips-memilih-paket-team-building",
  "/blog/rekomendasi-lokasi-outbound-batu-malang"
];

const allPages = Array.from(new Set([...staticPages, ...packagePages, ...blogPages]));

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    url => `  <url>
    <loc>${domain}${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${url === "" ? "1.0" : url.startsWith("/blog/") || packagePages.includes(url) ? "0.8" : "0.7"}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

fs.writeFileSync('./public/sitemap.xml', xml);
console.log('sitemap.xml generated with ' + allPages.length + ' URLs');
