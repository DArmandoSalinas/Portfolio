import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";
import { REVEAL_BOOT } from "@/lib/revealBoot";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.shortName}`,
  },
  description:
    "End-to-end ML, generative AI at SAP, and founder of ARMATUS. Predictive maintenance, healthcare ML, RAG, and shipped APIs.",
  applicationName: site.shortName,
  authors: [{ name: site.name, url: site.links.github }],
  creator: site.name,
  keywords: [
    "AI Engineer",
    "Machine Learning Engineer",
    "Generative AI",
    "SAP Business AI",
    "MLOps",
    "RAG",
    "Predictive maintenance",
    "Healthcare ML",
    "HRV",
    "Monterrey",
    "Diego Armando Salinas Lugo",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    siteName: site.name,
    title: `${site.name} — ${site.role}`,
    description:
      "End-to-end ML, generative AI at SAP, and founder of ARMATUS. Predictive maintenance, healthcare ML, RAG, and shipped APIs.",
    url: "/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description:
      "End-to-end ML, generative AI at SAP, and founder of ARMATUS. Predictive maintenance, healthcare ML, RAG, and shipped APIs.",
  },
  icons: {
    icon: [
      { url: "/brand/favicon.png", type: "image/png" },
      { url: "/brand/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/brand/icon-192.png",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  email: `mailto:${site.email}`,
  telephone: site.phone,
  url: site.url,
  image: `${site.url}/brand/icon-192.png`,
  address: { "@type": "PostalAddress", addressLocality: "Monterrey", addressCountry: "MX" },
  sameAs: [site.links.github, site.links.linkedin, site.links.armatus],
  knowsLanguage: ["Spanish", "English", "German"],
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "University of Essex" },
    { "@type": "CollegeOrUniversity", name: "Tecnológico de Monterrey" },
  ],
  worksFor: { "@type": "Organization", name: "SAP" },
  knowsAbout: [
    "Machine Learning",
    "Generative AI",
    "Signal Processing",
    "Predictive Maintenance",
    "Retrieval-Augmented Generation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: REVEAL_BOOT }} />
      </head>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
