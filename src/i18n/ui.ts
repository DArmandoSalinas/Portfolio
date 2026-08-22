import type { Category, Filter } from "@/data/projects";
import type { Locale } from "./config";

export type Ui = {
  skip: string;
  navAria: string;
  footerAria: string;
  langAria: string;
  backToTop: string;
  openMenu: string;
  closeMenu: string;
  close: string;
  certificate: string;
  enlarge: (alt: string) => string;
  credentialOnFile: string;
  downloadCv: string;
  cv: string;
  getInTouch: string;
  emailMe: string;
  viewResume: string;
  current: string;
  live: string;
  repository: string;
  walkthrough: string;
  open: string;
  verify: string;
  archive: string;
  earlier: string;
  allProjects: (n: number) => string;
  projectsMeta: (n: number) => string;
  filterAria: string;
  shownFor: (n: number, filter: string) => string;
  mscCoursework: string;
  spokenLanguages: string;
  courseraTracks: string;
  courseraBlurb: (skills: number, groups: number) => string;
  onFile: (n: number) => string;
  allCerts: (n: number) => string;
  print: string;
  resumeBanner: string;
  resumeTitle: string;
  resumeDescription: string;
  resumeLocationLine: string;
  resumeSections: {
    summary: string;
    skills: string;
    experience: string;
    projects: string;
    education: string;
    certs: string;
    spoken: string;
  };
  ogLine: string;
  ogMsc: string;
  nav: { label: string; href: string }[];
  work: { label: string; title: string; lead: string };
  experience: { label: string; title: string; lead: string };
  credentials: { label: string; title: string; lead: string };
  toolkit: { label: string; title: string; lead: string };
  contact: { label: string; title: string; lead: string };
  earlierTitle: string;
  filters: Record<Filter, string>;
  langLevel: Record<"Native" | "Professional" | "Basic", string>;
  languageNames: Record<"Spanish" | "English" | "German", string>;
  metadataDescription: string;
};

export const ui: Record<Locale, Ui> = {
  en: {
    skip: "Skip to content",
    navAria: "Primary",
    footerAria: "Footer",
    langAria: "Language",
    backToTop: "back to top",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    close: "Close",
    certificate: "Certificate",
    enlarge: (alt) => `Enlarge ${alt}`,
    credentialOnFile: "Credential on file",
    downloadCv: "Download CV",
    cv: "CV",
    getInTouch: "Get in touch",
    emailMe: "Email me",
    viewResume: "View résumé",
    current: "Current",
    live: "Live",
    repository: "Repository",
    walkthrough: "Walkthrough",
    open: "Open",
    verify: "Verify",
    archive: "Archive",
    earlier: "Earlier",
    allProjects: (n) => `All ${n} projects, filterable`,
    projectsMeta: (n) => `${n} projects`,
    filterAria: "Filter projects by category",
    shownFor: (n, filter) => `${n} projects shown for ${filter}.`,
    mscCoursework: "MSc coursework",
    spokenLanguages: "Spoken languages",
    courseraTracks: "Coursera skill tracks",
    courseraBlurb: (skills, groups) =>
      `${skills} tracked skill areas in progress across ${groups} groups — progress areas Coursera records across courses and guided projects, not completed certifications.`,
    onFile: (n) => `${n} on file`,
    allCerts: (n) => `All ${n} certifications and awards`,
    print: "Print",
    resumeBanner: "ATS-formatted: single column, standard headings, no tables or graphics.",
    resumeTitle: "Resume",
    resumeDescription: "Curriculum vitae for Diego Armando Salinas Lugo — AI & Machine Learning Engineer.",
    resumeLocationLine:
      "Monterrey, Mexico | TN Visa Eligible for United States roles | Open to relocation and remote",
    resumeSections: {
      summary: "Professional Summary",
      skills: "Technical Skills",
      experience: "Professional Experience",
      projects: "Selected Projects",
      education: "Education",
      certs: "Certifications",
      spoken: "Spoken Languages",
    },
    ogLine: "Machine-learning systems, end to end.",
    ogMsc: "MSc AI, Distinction",
    nav: [
      { label: "Work", href: "#work" },
      { label: "Experience", href: "#experience" },
      { label: "Credentials", href: "#credentials" },
      { label: "Contact", href: "#contact" },
    ],
    work: {
      label: "Work",
      title: "Selected work",
      lead: "Five systems that shipped. Metrics are test-set unless noted. Healthcare projects are research, not medical devices.",
    },
    experience: {
      label: "Experience",
      title: "Experience",
      lead: "Four roles. Each one shipped something a person could use.",
    },
    credentials: {
      label: "Credentials",
      title: "Education and certifications",
      lead: "Every document below is the original. Click a scan to open it full size.",
    },
    toolkit: {
      label: "Toolkit",
      title: "Tools",
      lead: "Every tool here appears in a project on this page.",
    },
    contact: {
      label: "Contact",
      title: "Get in touch",
      lead: "Open to AI and ML engineering roles in Mexico and the United States. TN visa eligible — happy to relocate or work remote.",
    },
    earlierTitle: "Engineering roots and smaller builds",
    filters: {
      All: "All",
      Production: "Production",
      "Healthcare AI": "Healthcare AI",
      "Predictive Maintenance": "Predictive Maintenance",
      "NLP / LLMs": "NLP / LLMs",
      Forecasting: "Forecasting",
      Robotics: "Robotics",
      Founder: "Founder",
    },
    langLevel: { Native: "Native", Professional: "Professional", Basic: "Basic" },
    languageNames: { Spanish: "Spanish", English: "English", German: "German" },
    metadataDescription:
      "AI & Machine Learning Engineer. Generative AI at SAP, founder of ARMATUS (shipped iOS), MSc Artificial Intelligence with Distinction. End-to-end ML: data, model, API, interface, cloud.",
  },
  es: {
    skip: "Saltar al contenido",
    navAria: "Principal",
    footerAria: "Pie de página",
    langAria: "Idioma",
    backToTop: "volver al inicio",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
    close: "Cerrar",
    certificate: "Certificado",
    enlarge: (alt) => `Ampliar ${alt}`,
    credentialOnFile: "Credencial en archivo",
    downloadCv: "Descargar CV",
    cv: "CV",
    getInTouch: "Hablemos",
    emailMe: "Escríbeme",
    viewResume: "Ver currículum",
    current: "Actual",
    live: "En vivo",
    repository: "Repositorio",
    walkthrough: "Recorrido",
    open: "Abrir",
    verify: "Verificar",
    archive: "Archivo",
    earlier: "Antes",
    allProjects: (n) => `Los ${n} proyectos, filtrables`,
    projectsMeta: (n) => `${n} proyectos`,
    filterAria: "Filtrar proyectos por categoría",
    shownFor: (n, filter) => `${n} proyectos mostrados en ${filter}.`,
    mscCoursework: "Materias del MSc",
    spokenLanguages: "Idiomas",
    courseraTracks: "Rutas de habilidad en Coursera",
    courseraBlurb: (skills, groups) =>
      `${skills} áreas de habilidad en progreso en ${groups} grupos — avances que Coursera registra en cursos y proyectos guiados, no certificaciones terminadas.`,
    onFile: (n) => `${n} en archivo`,
    allCerts: (n) => `Las ${n} certificaciones y distinciones`,
    print: "Imprimir",
    resumeBanner: "Formato ATS: una columna, encabezados estándar, sin tablas ni gráficos.",
    resumeTitle: "Currículum",
    resumeDescription:
      "Currículum de Diego Armando Salinas Lugo — Ingeniero de IA y Machine Learning.",
    resumeLocationLine:
      "Monterrey, México | Elegible a visa TN para Estados Unidos | Abierto a reubicación y remoto",
    resumeSections: {
      summary: "Resumen profesional",
      skills: "Habilidades técnicas",
      experience: "Experiencia profesional",
      projects: "Proyectos seleccionados",
      education: "Educación",
      certs: "Certificaciones",
      spoken: "Idiomas",
    },
    ogLine: "Sistemas de machine learning, de punta a punta.",
    ogMsc: "MSc IA, Distinction",
    nav: [
      { label: "Trabajo", href: "#work" },
      { label: "Experiencia", href: "#experience" },
      { label: "Credenciales", href: "#credentials" },
      { label: "Contacto", href: "#contact" },
    ],
    work: {
      label: "Trabajo",
      title: "Trabajo seleccionado",
      lead: "Cinco sistemas que salieron a producción. Las métricas son de test salvo que se indique. Los proyectos de salud son investigación, no dispositivos médicos.",
    },
    experience: {
      label: "Experiencia",
      title: "Experiencia",
      lead: "Cuatro roles. En cada uno se entregó algo que una persona podía usar.",
    },
    credentials: {
      label: "Credenciales",
      title: "Educación y certificaciones",
      lead: "Cada documento de abajo es el original. Haz clic en el escaneo para verlo a tamaño completo.",
    },
    toolkit: {
      label: "Herramientas",
      title: "Herramientas",
      lead: "Cada herramienta de esta lista aparece en un proyecto de esta página.",
    },
    contact: {
      label: "Contacto",
      title: "Hablemos",
      lead: "Abierto a roles de ingeniería de IA y ML en México y Estados Unidos. Elegible a visa TN — dispuesto a reubicarme o trabajar en remoto.",
    },
    earlierTitle: "Raíces de ingeniería y proyectos menores",
    filters: {
      All: "Todos",
      Production: "Producción",
      "Healthcare AI": "IA en salud",
      "Predictive Maintenance": "Mantenimiento predictivo",
      "NLP / LLMs": "NLP / LLMs",
      Forecasting: "Pronóstico",
      Robotics: "Robótica",
      Founder: "Founder",
    },
    langLevel: { Native: "Nativo", Professional: "Profesional", Basic: "Básico" },
    languageNames: { Spanish: "Español", English: "Inglés", German: "Alemán" },
    metadataDescription:
      "Ingeniero de IA y Machine Learning. IA generativa en SAP, fundador de ARMATUS (iOS en producción), MSc in Artificial Intelligence with Distinction. ML de punta a punta: datos, modelo, API, interfaz, nube.",
  },
};

export function getUi(locale: Locale): Ui {
  return ui[locale];
}

export function filterLabel(locale: Locale, filter: Filter): string {
  return ui[locale].filters[filter];
}

export function categoryLabel(locale: Locale, category: Category): string {
  return ui[locale].filters[category];
}
