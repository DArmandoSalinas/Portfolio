import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Principle } from "@/components/Principle";
import { Experience } from "@/components/Experience";
import { FeaturedWork } from "@/components/FeaturedWork";
import { AllProjects } from "@/components/AllProjects";
import { Certifications } from "@/components/Certifications";
import { Education } from "@/components/Education";
import { Stack } from "@/components/Stack";
import { ResumeSection } from "@/components/ResumeSection";
import { Contact } from "@/components/Contact";
import { availableCertImages } from "@/lib/certAssets";
import { allCertImages } from "@/data/certifications";
import { allDiplomaImages } from "@/data/education";

export default function Home() {
  const available = availableCertImages([...allCertImages, ...allDiplomaImages]);

  return (
    <>
      <Hero />
      <About />
      <Principle />
      <Experience />
      <FeaturedWork />
      <AllProjects />
      <Certifications available={available} />
      <Education available={available} />
      <Stack />
      <ResumeSection />
      <Contact />
    </>
  );
}
