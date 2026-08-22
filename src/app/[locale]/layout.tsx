import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import "../globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { site } from "@/data/site";
import { I18nProvider } from "@/i18n/context";
import { isLocale, localeHtml, localeOg, localePath, locales, type Locale } from "@/i18n/config";
import { getContent } from "@/i18n/content";
import { getUi } from "@/i18n/ui";
import { REVEAL_BOOT } from "@/lib/revealBoot";
import { setRequestLocale } from "@/i18n/request-locale";

const sans = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-mono",
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return {};
  const locale = raw;
  const t = getUi(locale);
  const { site: copy } = getContent(locale);
  const path = localePath(locale);
  const title = `${site.name} — ${copy.role}`;

  return {
    title: {
      default: title,
      template: `%s — ${site.displayName}`,
    },
    description: t.metadataDescription,
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
      "Ingeniero de IA",
    ],
    alternates: {
      canonical: path,
      languages: {
        en: "/",
        es: "/es",
        "x-default": "/",
      },
    },
    openGraph: {
      type: "profile",
      siteName: site.name,
      title,
      description: t.metadataDescription,
      url: path,
      locale: localeOg[locale],
      alternateLocale: locale === "en" ? ["es_MX"] : ["en_US"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: t.metadataDescription,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: Promise<{ locale: string }> }>) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale: Locale = raw;
  setRequestLocale(locale);
  const { site: copy, ui: t } = getContent(locale);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: copy.role,
    email: `mailto:${site.email}`,
    telephone: site.phone,
    url: site.url,
    image: `${site.url}/me/diego-armando.jpg`,
    address: { "@type": "PostalAddress", addressLocality: "Monterrey", addressCountry: "MX" },
    sameAs: [site.links.github, site.links.linkedin, site.links.armatus],
    knowsLanguage: ["es", "en", "de"],
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

  return (
    <html lang={localeHtml[locale]} className={`${sans.variable} ${mono.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: REVEAL_BOOT }} />
      </head>
      <body>
        <I18nProvider key={locale} locale={locale}>
          <a href="#main" className="skip-link">
            {t.skip}
          </a>
          <Nav />
          <main id="main">{children}</main>
          <Footer />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </I18nProvider>
      </body>
    </html>
  );
}
