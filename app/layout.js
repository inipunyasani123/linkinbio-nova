import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora", weight: ["400", "600", "700"] });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const __jsonld = {"@context":"https://schema.org","@type":"ProfilePage","mainEntity":{"@type":"Person","name":"Nova Ardhana","jobTitle":"Creative Technologist","url":"https://linkinbio-nova.pintuweb.id","inLanguage":"id"}};

export const metadata = {
  metadataBase: new URL("https://linkinbio-nova.pintuweb.id"),
  title: { default: "Nova Ardhana — Creative Technologist", template: "%s — Nova Ardhana" },
  description: "Tautan Nova Ardhana, creative technologist di Jakarta: empat studi kasus web interaktif, lab eksperimen, tarif, dan slot kolaborasi.",
  applicationName: "Nova Ardhana",
  keywords: ["creative technologist", "link in bio", "studi kasus web interaktif", "front-end developer jakarta", "portofolio"],
  authors: [{ name: "Nova Ardhana" }],
  creator: "Nova Ardhana",
  publisher: "Nova Ardhana",
  alternates: { canonical: "https://linkinbio-nova.pintuweb.id" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://linkinbio-nova.pintuweb.id",
    siteName: "Nova Ardhana",
    title: "Nova Ardhana — Creative Technologist",
    description: "Tautan Nova Ardhana, creative technologist di Jakarta: empat studi kasus web interaktif, lab eksperimen, tarif, dan slot kolaborasi.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "Nova Ardhana — Creative Technologist" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nova Ardhana — Creative Technologist",
    description: "Tautan Nova Ardhana, creative technologist di Jakarta: empat studi kasus web interaktif, lab eksperimen, tarif, dan slot kolaborasi.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${sora.variable} ${inter.variable}`}>
      <body className="antialiased">{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        <aside aria-label="Tentang situs demo ini" style={{ display: 'block', margin: 0, padding: '12px 16px', background: '#0f1b33', color: '#dfe6f3', font: '400 13px/1.5 system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif', textAlign: 'center' }}>
          Situs demo buatan PintuWeb — nama dan isinya rekaan.{' '}
          <a href="https://www.pintuweb.id/kontak?demo=nova" style={{ color: '#ffffff', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>Buat yang seperti ini →</a>
        </aside>
        </body>
    </html>
  );
}
