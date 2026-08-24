import {
  cvCerts,
  cvEducation,
  cvProjects,
  cvRoles,
  cvSkills,
  cvSpokenLanguages,
  cvSummary,
  type CvCertGroup,
  type CvProject,
  type CvRole,
} from "@/data/resume";
import type { Locale } from "./config";

const summaryEs =
  "Ingeniero de IA y Machine Learning, MSc in Artificial Intelligence (Distinction). Entrega sistemas completos — pipeline de datos, modelo, API, interfaz, nube — no notebooks. Construye IA generativa en SAP para automatizar el reporte de fallas técnicas y fundó ARMATUS, un coach de iOS en producción. Formación en mecatrónica: procesamiento de señales, analítica predictiva y monitoreo en tiempo real.";

const rolesEs: CvRole[] = [
  {
    title: "Ingeniero de IA y Machine Learning",
    org: "SAP",
    period: "ene 2026 — Actualidad",
    location: "San Pedro Garza García, N.L., México",
    bullets: [
      "Diseño y despliego servicios de IA generativa que automatizan el reporte de fallas técnicas, mejorando la categorización de incidentes y reduciendo el tiempo de triaje del ingeniero.",
      "Construyo extensiones con LLM sobre SAP Business AI y BTP, integrando foundation models vía SAP AI Core, AI Launchpad y el generative AI hub.",
      "Convierto texto no estructurado de fallas en registros estructurados y ruteables, reemplazando la clasificación manual con un flujo dirigido por modelo. Certified SAP Generative AI Developer (2026) sobre este stack.",
    ],
  },
  {
    title: "Founder e ingeniero de machine learning",
    org: "ARMATUS (armatus.app)",
    period: "may 2026 — Actualidad",
    location: "Monterrey, México",
    bullets: [
      "Fundé y publiqué un coach de entrenamiento de iOS con IA generativa en producción: onboarding, generación de plan, tracking de sesión en vivo y progresión, bilingüe EN/ES.",
      "Arquitecté un protocolo cerrado de cinco etapas (calibrar, planear, adaptar, ejecutar, evolucionar) que regenera cada semana a partir de series registradas, PRs y fatiga acumulada en lugar de servir una plantilla estática.",
      "Construí una API de streaming que convierte un perfil de atleta más señales diarias de readiness (energía, sueño, tiempo) en un plan semanal dosificado con justificación explícita.",
      "Modelé el trabajo de endurance como carga sistémica real para que el volumen de fuerza se ajuste solo detrás de un techo de readiness; soy dueño de toda la superficie, del cliente móvil a la API.",
    ],
  },
  {
    title: "Trainee de datos e IA",
    org: "Interius",
    period: "sep 2025 — dic 2025",
    location: "San Pedro Garza García, N.L., México",
    bullets: [
      "Entregué MVPs de IA de punta a punta — encuadre del problema, ingeniería de features, entrenamiento, evaluación y despliegue.",
      "Construí segmentación de contactos por engagement, geografía y actividad de canal, convirtiendo una lista plana en cohortes accionables para outreach personalizado.",
      "Publiqué diagnósticos de carga y eficiencia como servicios Streamlit contenedorizados en Google Cloud Run para acceso self-serve de stakeholders.",
    ],
  },
  {
    title: "Investigador de IA",
    org: "University of Essex",
    period: "nov 2024 — sep 2025",
    location: "Colchester, Reino Unido",
    bullets: [
      "Construí un pipeline de reconocimiento de emoción de punta a punta a partir de PPG en 62 participantes, alcanzando Pearson r = 0.5975 y RMSE 0.154 para arousal continuo, por encima del r ≈ 0.40 reportado en trabajo comparable solo con PPG.",
      "Ingenié 30+ features de HRV en dominios de tiempo, frecuencia (Welch PSD) y Poincaré no lineal, con normalización de baseline por sujeto.",
      "Validé bajo validación cruzada leave-one-participant-out con búsqueda anidada, comparando Random Forest, XGBoost y SVR para probar generalización a sujetos no vistos.",
    ],
  },
];

const projectsEs: CvProject[] = [
  {
    name: "Plataforma de mantenimiento predictivo — Remaining Useful Life",
    stack: cvProjects[0].stack,
    link: cvProjects[0].link,
    bullets: [
      "Predije la vida útil restante de turbofán en NASA C-MAPSS a 16.74 ciclos de RMSE de test, 12.33 MAE y R² 0.825, con SHAP exponiendo el sensor que mueve cada predicción.",
      "Lo serví vía FastAPI detrás de un dashboard de flota Streamlit, más una capa multi-agente LangGraph que responde preguntas en lenguaje natural y emite briefings en PDF.",
    ],
  },
  {
    name: "Asistente personal de investigación — Retrieval-Augmented Generation",
    stack: cvProjects[1].stack,
    link: cvProjects[1].link,
    bullets: [
      "Construí pregunta-respuesta sobre documentos que parte, embede y recupera vía MultiQueryRetriever, anclando cada respuesta de GPT-4o en ChromaDB y devolviendo el fragmento fuente.",
      "Indexé un corpus de 149 segmentos y eliminé respuestas sin fuente al hacer de la cita un requisito duro del contrato de respuesta.",
    ],
  },
  {
    name: "Clasificación de riesgo cardiovascular — ML clínico sin fugas",
    stack: cvProjects[2].stack,
    link: cvProjects[2].link,
    bullets: [
      "Clasifiqué enfermedad coronaria en 920 pacientes de cuatro sitios a 0.90 ROC-AUC de test, 87.3% recall y 0.85 F1, afinando el umbral por recall porque un caso perdido cuesta más que una falsa alarma.",
      "Evité fugas ajustando el ColumnTransformer dentro de la validación cruzada, y expuse una brecha de transportabilidad vía validación Leave-One-Site-Out (AUC medio 0.79, peor sitio 0.70).",
    ],
  },
  {
    name: "COAZON — compañero de salud cardíaca (en desarrollo)",
    stack: cvProjects[3].stack,
    bullets: [
      "Construyo una app bilingüe de cuidado cardíaco que convierte una receta en un plan vivo — recordatorios de medicación, registro guiado de presión con tendencias por zona clínica, un motor determinista de banderas rojas y un reporte PDF listo para el médico.",
      "Acoté la capa de IA para que estructure y resuma pero nunca diagnostique, recete ni altere una dosis, y la hice degradar a modo fully manual sin API key para que la app nunca dependa de que el modelo esté disponible.",
    ],
  },
  {
    name: "Monitoreo de desempeño de motores — IoT industrial (1.er lugar, Tec Expo Ingenierías)",
    stack: cvProjects[4].stack,
    link: cvProjects[4].link,
    bullets: [
      "Gané primer lugar en Tec Expo Ingenierías al reingeniar un procedimiento de mantenimiento de planta existente en un sistema de monitoreo en vivo, perfilando un motor trifásico Sumitomo en cinco baselines de velocidad y un Haas Mini Mill a partir de trayectorias combinadas.",
      "Califiqué la salud de máquina 0–100 a partir de telemetría serial de vibración y temperatura con umbrales adaptativos específicos, manteniendo el diseño fully basado en reglas para que cada alarma remita a la estadística que la disparó; reconocimiento de Rockwell Automation por el trabajo de integración.",
    ],
  },
  {
    name: "Apoyo al tamizaje de TDAH con análisis de equidad",
    stack: cvProjects[5].stack,
    link: cvProjects[5].link,
    bullets: [
      "Predije outcomes de TDAH para 1,213 participantes a partir de conectomas de fMRI y datos psicosociales a 82% de accuracy, recall 0.88–0.90 y AUC 0.866; reporté resultados por sexo, mostrando una brecha de recall femenino ligada al subdiagnóstico documentado.",
    ],
  },
];

const skillsEs = [
  { label: "Lenguajes", items: cvSkills[0].items },
  { label: "Machine Learning", items: cvSkills[1].items },
  { label: "IA generativa y LLM", items: cvSkills[2].items },
  { label: "MLOps y despliegue", items: cvSkills[3].items },
  { label: "Datos, evaluación y dominio", items: cvSkills[4].items },
];

const educationEs = [
  {
    degree: "MSc Artificial Intelligence — Distinction",
    school: "University of Essex, Reino Unido",
    period: "2024 — 2025",
    notes: [
      "Tesis: Analysis of Heart Rate Variability using PPG signals to detect and predict emotions through Machine Learning. Materias: Machine Learning; Intelligent Systems and Robotics; Data Science and Decision Making; Neural Networks; Natural Language Engineering.",
    ],
  },
  {
    degree: "Ingeniero en Mecatrónica",
    school: "Tecnológico de Monterrey, México",
    period: "2021 — 2025",
    notes: ["Materias: sistemas de control, automatización industrial, diseño de robots, manufactura."],
  },
];

const certsEs: CvCertGroup[] = [
  {
    group: "Profesional",
    items: [
      "SAP Certified Associate — Generative AI Developer (2026)",
      "SQL for Data Science with Python — IBM (2026)",
      "Google Analytics Certification — Google (2025)",
      "GA4 Data and Reports — Google (2025)",
    ],
  },
  {
    group: "Distinciones",
    items: [
      "1.er lugar — Tec Expo Ingenierías, Tecnológico de Monterrey (2025)",
      "Rockwell Automation Integration Recognition — Tec de Monterrey (2025)",
    ],
  },
  {
    group: "Especialización",
    items: [
      "Machine Learning Specialization — Stanford & DeepLearning.AI (2024)",
    ],
  },
  {
    group: "Cursos",
    items: [
      "ML Web App with Streamlit and Python — Coursera (2025)",
      "Breast Cancer Prediction Using ML — Coursera (2025)",
      "Introduction to Generative AI — Google Cloud (2024)",
      "AI For Everyone — DeepLearning.AI (2024)",
      "Intro to Machine Learning — Kaggle (2024)",
      "Python — Kaggle (2023)",
      "CS50x: Introduction to Computer Science — Harvard (2022)",
      "2023 NanoLab — MIT / Tec-MIT (2023)",
      "MATLAB Onramp — MathWorks (2022)",
    ],
  },
  {
    group: "Adicional",
    items: [
      "QPR Suicide Prevention Gatekeeper — Tec de Monterrey (2022)",
    ],
  },
];

export function getResume(locale: Locale) {
  if (locale === "es") {
    return {
      summary: summaryEs,
      roles: rolesEs,
      projects: projectsEs,
      skills: skillsEs,
      education: educationEs,
      certs: certsEs,
      spoken: "Español (nativo), inglés (profesional), alemán (básico)",
    };
  }
  return {
    summary: cvSummary,
    roles: cvRoles,
    projects: cvProjects,
    skills: cvSkills,
    education: cvEducation,
    certs: cvCerts,
    spoken: cvSpokenLanguages,
  };
}
