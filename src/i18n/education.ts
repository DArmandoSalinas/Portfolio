import { education, type Education } from "@/data/education";
import type { Locale } from "./config";

const es: Education[] = [
  {
    degree: "MSc Artificial Intelligence",
    school: "University of Essex",
    period: "2024 — 2025",
    location: "Colchester, Reino Unido",
    distinction: "Distinction",
    detail:
      "Tesis: un enfoque de machine learning para reconocimiento de emoción a partir de la variabilidad de la frecuencia cardíaca, construido de punta a punta desde PPG crudo hasta ingeniería de features y validación leave-one-participant-out. Las materias cubrieron machine learning, redes neuronales, ingeniería de lenguaje natural, sistemas inteligentes y robótica, y ciencia de datos para la toma de decisiones. Awarded Distinction.",
    coursework: [
      "Machine Learning",
      "Intelligent Systems and Robotics",
      "Data Science and Decision Making",
      "Neural Networks",
      "Natural Language Engineering",
    ],
    certificate: "/certs/essex-msc.jpg",
    certificateAlt: "Título de MSc in Artificial Intelligence, University of Essex",
  },
  {
    degree: "Ingeniero en Mecatrónica",
    school: "Tecnológico de Monterrey",
    period: "2021 — 2025",
    location: "Monterrey, MX",
    detail:
      "La mitad de hardware de la base: sistemas de control, automatización industrial, diseño de robots, materiales y manufactura, y la física detrás de una lectura de sensor. Por eso el trabajo de ML posterior parte de la señal — vibración, temperatura, PPG — y no de un CSV ya limpio.",
    coursework: [
      "Sistemas de control",
      "Automatización industrial",
      "Diseño de robots",
      "Materiales y manufactura",
      "Pensamiento computacional",
    ],
    certificate: "/education/titulo-mecatronica-limpio.png",
    certificateAlt: "Título de Ingeniero en Mecatrónica, Tecnológico de Monterrey",
  },
];

export const educationByLocale: Record<Locale, Education[]> = { en: education, es };
