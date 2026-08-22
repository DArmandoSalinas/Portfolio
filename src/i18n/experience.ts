import { experience, type Role } from "@/data/experience";
import type { Locale } from "./config";

const es: Role[] = [
  {
    num: "01",
    title: "Ingeniero de Machine Learning e IA",
    org: "SAP",
    period: "ene 2026 — Actualidad",
    location: "San Pedro Garza García, N.L.",
    current: true,
    summary:
      "Diseña y despliega IA generativa que automatiza el reporte de fallas técnicas: mejor categorización de incidentes, respuesta más rápida.",
    points: [
      "Construye servicios de GenAI sobre SAP Business AI y patrones de extensión de BTP.",
      "Trabaja con LLMs de primer nivel a través de SAP AI Core, AI Launchpad y el generative AI hub.",
      "SAP Certified — SAP Generative AI Developer.",
    ],
    tags: ["IA generativa", "SAP BTP", "AI Core", "LLMs"],
  },
  {
    num: "02",
    title: "Founder y desarrollador",
    org: "ARMATUS",
    orgUrl: "https://www.armatus.app/",
    period: "may 2026 — Actualidad",
    current: true,
    summary:
      "Un coach de iOS de consumo con GenAI que arma la semana de entrenamiento en lugar de servir una plantilla.",
    points: [
      "El onboarding profundo — metas, equipo, lesiones, historial, estilo de vida — se vuelve el modelo del atleta.",
      "Señales diarias (energía, sueño, tiempo) y sesiones registradas reconstruyen el plan con evidencia.",
      "Mapa de sobrecarga, techo de readiness antes de la carga, estándares de técnica; el deporte híbrido cuenta como fatiga real.",
      "App móvil en producción más una API de streaming para generar el plan estructurado.",
    ],
    tags: ["Founder", "iOS", "GenAI", "API en producción", "TypeScript"],
  },
  {
    num: "03",
    title: "Trainee de datos e IA",
    org: "Interius",
    period: "sep 2025 — dic 2025",
    location: "San Pedro Garza García, N.L.",
    summary:
      "Llevó ideas de IA a MVPs que funcionan: estrategia, análisis, ingeniería de features, entrenamiento, evaluación y despliegue.",
    points: [
      "Segmentación avanzada de contactos para afinar la estrategia de engagement.",
      "Diagnósticos de carga y eficiencia pensados para decidir, no para un dashboard.",
      "Publicado como servicios Streamlit contenedorizados en Google Cloud Run.",
    ],
    tags: ["Clustering", "Streamlit", "Docker", "Cloud Run"],
  },
  {
    num: "04",
    title: "Investigador estudiante de IA",
    org: "University of Essex",
    period: "nov 2024 — sep 2025",
    location: "Colchester, Reino Unido",
    summary:
      "Machine learning de punta a punta para reconocimiento de emoción a partir de features de HRV derivadas de señales PPG.",
    points: [
      "Filtrado Butterworth, extracción de IBI y features de HRV en tiempo, frecuencia y no lineales.",
      "Validación leave-one-participant-out y leave-one-group-out en 62 participantes.",
      "Comparación de modelos — Random Forest, XGBoost, SVR — para regresión continua de arousal.",
    ],
    tags: ["Procesamiento de señales", "HRV", "LOPO", "Neuromarketing"],
  },
];

export const experienceByLocale: Record<Locale, Role[]> = { en: experience, es };
