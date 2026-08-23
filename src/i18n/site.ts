import type { Locale } from "./config";

export type SiteCopy = {
  role: string;
  bio: readonly [string, string];
  workAuth: string;
  languages: { name: "Spanish" | "English" | "German"; level: "Native" | "Professional" | "Basic" }[];
  proof: { label: string; detail: string; meta: string }[];
};

export const siteCopy: Record<Locale, SiteCopy> = {
  en: {
    role: "AI & Machine Learning Engineer",
    bio: [
      "I build machine-learning systems end to end: the model, the API, the interface, and the cloud they run on.",
      "I studied mechatronics at Tecnológico de Monterrey and an MSc in Artificial Intelligence with Distinction at Essex. I work on Generative AI at SAP, and I founded ARMATUS, a training coach on iOS.",
    ],
    workAuth: "Open to US roles and project work — TN visa eligible",
    languages: [
      { name: "Spanish", level: "Native" },
      { name: "English", level: "Professional" },
      { name: "German", level: "Basic" },
    ],
    proof: [
      { label: "SAP", detail: "Generative AI in production", meta: "Current role" },
      { label: "ARMATUS", detail: "Founder · shipped on iOS", meta: "Current" },
      { label: "MSc Artificial Intelligence", detail: "University of Essex", meta: "Distinction" },
      { label: "Monterrey, MX", detail: "Open to roles and project work", meta: "TN visa eligible" },
    ],
  },
  es: {
    role: "Ingeniero de IA y Machine Learning",
    bio: [
      "Construyo sistemas de machine learning de punta a punta: el modelo, la API, la interfaz y la nube donde corren.",
      "Estudié mecatrónica en el Tecnológico de Monterrey y un MSc in Artificial Intelligence with Distinction en Essex. Trabajo en IA generativa en SAP, y fundé ARMATUS, un coach de entrenamiento en iOS.",
    ],
    workAuth: "Abierto a roles en EE. UU. y a proyectos — elegible a visa TN",
    languages: [
      { name: "Spanish", level: "Native" },
      { name: "English", level: "Professional" },
      { name: "German", level: "Basic" },
    ],
    proof: [
      { label: "SAP", detail: "IA generativa en producción", meta: "Rol actual" },
      { label: "ARMATUS", detail: "Founder · publicado en iOS", meta: "Actual" },
      { label: "MSc Artificial Intelligence", detail: "University of Essex", meta: "Distinction" },
      { label: "Monterrey, MX", detail: "Abierto a roles y proyectos", meta: "Elegible a visa TN" },
    ],
  },
};
