import { notFound } from "next/navigation";
import { Hero } from "@/components/Hero";
import { Work } from "@/components/Work";
import { Experience } from "@/components/Experience";
import { Credentials } from "@/components/Credentials";
import { Toolkit } from "@/components/Toolkit";
import { Contact } from "@/components/Contact";
import { availableCertImages } from "@/lib/certAssets";
import { allCertImages } from "@/data/certifications";
import { allDiplomaImages } from "@/data/education";
import { isLocale } from "@/i18n/config";
import { setRequestLocale } from "@/i18n/request-locale";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  setRequestLocale(raw);
  const available = availableCertImages([...allCertImages, ...allDiplomaImages]);

  return (
    <>
      <Hero locale={raw} />
      <Work locale={raw} />
      <Experience locale={raw} />
      <Credentials available={available} locale={raw} />
      <Toolkit locale={raw} />
      <Contact locale={raw} />
    </>
  );
}
