/**
 * CV content, structured for ATS parsing first and human scanning second.
 *
 * Rules applied throughout:
 *  - Standard section headings (Summary / Skills / Experience / Projects /
 *    Education / Certifications) so parsers map fields correctly.
 *  - Single column, no tables, no text boxes, no graphics.
 *  - Bullets follow X-Y-Z: accomplished [X] measured by [Y] by doing [Z].
 *  - Roughly two thirds of bullets carry a number; none are invented.
 *  - Keyword clusters mirror AI/ML job-posting language.
 */

export const cvSummary =
  "AI & Machine Learning Engineer, MSc Artificial Intelligence (Distinction). Ships complete systems — data pipeline, model, API, interface, cloud — not notebooks. Builds generative AI at SAP to automate technical fault reporting and founded ARMATUS, a production iOS training coach. Based in Monterrey, Mexico; TN visa eligible for United States roles.";

export type CvRole = {
  title: string;
  org: string;
  period: string;
  location?: string;
  bullets: string[];
};

export const cvRoles: CvRole[] = [
  {
    title: "Machine Learning & AI Engineer",
    org: "SAP",
    period: "Jan 2026 — Present",
    location: "San Pedro Garza García, NL, Mexico",
    bullets: [
      "Design and deploy generative AI services that automate technical fault reporting, improving incident categorization and cutting engineer triage time.",
      "Build LLM-backed extensions on SAP Business AI and BTP, integrating foundation models via SAP AI Core, AI Launchpad and the generative AI hub.",
      "Convert unstructured fault text into structured, routable records, replacing manual classification with a model-driven workflow. Certified SAP Generative AI Developer (2026) on this stack.",
    ],
  },
  {
    title: "Founder & Machine Learning Engineer",
    org: "ARMATUS (armatus.app)",
    period: "May 2026 — Present",
    location: "Monterrey, Mexico",
    bullets: [
      "Founded and shipped a production iOS generative-AI training coach: onboarding, plan generation, live session tracking and progression, bilingual EN/ES.",
      "Architected a closed five-stage protocol (calibrate, plan, adapt, execute, evolve) that regenerates each week from logged sets, PRs and accumulated fatigue rather than serving a static template.",
      "Built a streaming API converting an athlete profile plus daily readiness signals (energy, sleep, time) into a dosed weekly plan with explicit rationale.",
      "Modelled endurance work as real systemic load so strength volume auto-adjusts behind a readiness ceiling; own the full surface from mobile client to API.",
    ],
  },
  {
    title: "Data & AI Trainee",
    org: "Interius",
    period: "Sep 2025 — Dec 2025",
    location: "San Pedro Garza García, NL, Mexico",
    bullets: [
      "Delivered AI MVPs end to end — problem framing, feature engineering, model training, evaluation and deployment.",
      "Built contact segmentation across engagement, geography and channel activity, converting a flat list into targetable cohorts for personalized outreach.",
      "Shipped workload and efficiency diagnostics as containerized Streamlit services on Google Cloud Run for self-serve stakeholder access.",
    ],
  },
  {
    title: "AI Researcher",
    org: "University of Essex",
    period: "Nov 2024 — Sep 2025",
    location: "Colchester, United Kingdom",
    bullets: [
      "Built an end-to-end emotion-recognition pipeline from PPG across 62 participants, reaching Pearson r = 0.5975 and RMSE 0.154 for continuous arousal, above the r ≈ 0.40 reported for comparable PPG-only work.",
      "Engineered 30+ HRV features across time, frequency (Welch PSD) and non-linear Poincaré domains with per-subject baseline normalization.",
      "Validated under leave-one-participant-out cross-validation with nested search, benchmarking Random Forest, XGBoost and SVR to prove generalization to unseen subjects.",
    ],
  },
];

export type CvProject = {
  name: string;
  stack: string;
  bullets: string[];
  link?: string;
};

export const cvProjects: CvProject[] = [
  {
    name: "Predictive Maintenance Platform — Remaining Useful Life",
    stack: "XGBoost, SHAP, FastAPI, Streamlit, LangGraph, OpenAI, MLflow, Docker, Google Cloud Run",
    link: "rul-dashboard-368785016309.us-central1.run.app",
    bullets: [
      "Predicted turbofan remaining useful life on NASA C-MAPSS at 16.74-cycle test RMSE, 12.33 MAE and R² 0.825, with SHAP exposing the driving sensor per prediction.",
      "Served it via FastAPI behind a Streamlit fleet dashboard, plus a LangGraph multi-agent layer answering natural-language questions and emitting PDF briefings.",
    ],
  },
  {
    name: "Personal Research Assistant — Retrieval-Augmented Generation",
    stack: "FastAPI, LangChain, ChromaDB, OpenAI GPT-4o, text-embedding-3-small, Streamlit, PyPDF",
    link: "github.com/DArmandoSalinas/RAG",
    bullets: [
      "Built document question-answering that chunks, embeds and retrieves via MultiQueryRetriever, grounding every GPT-4o answer in ChromaDB and returning its source snippet.",
      "Indexed a 149-segment corpus and eliminated unsourced answers by making citation a hard requirement of the response contract.",
    ],
  },
  {
    name: "Cardiovascular Risk Classification — Leak-Free Clinical ML",
    stack: "scikit-learn, HistGradientBoosting, SHAP, LIME, ColumnTransformer",
    link: "github.com/DArmandoSalinas/HeartDisease-Predictor",
    bullets: [
      "Classified coronary disease across 920 patients from four sites at 0.90 test ROC-AUC, 87.3% recall and 0.85 F1, tuning the threshold for recall since a missed case costs more than a false alarm.",
      "Prevented leakage by fitting the ColumnTransformer inside cross-validation, and exposed a transportability gap via Leave-One-Site-Out validation (mean AUC 0.79, worst site 0.70).",
    ],
  },
  {
    name: "COAZON — Heart-Health Companion (in development)",
    stack: "FastAPI, SQLAlchemy 2.0, PostgreSQL, Alembic, JWT, React Native (Expo), TypeScript, OpenAI, Railway",
    bullets: [
      "Building a bilingual cardiac-care app that turns a prescription into a living plan — medication reminders, guided blood-pressure logging with clinical-zone trend charts, a deterministic red-flag alarm engine and a doctor-ready PDF report.",
      "Bounded the AI layer so it structures and summarizes but never diagnoses, prescribes or alters a dose, and made it degrade to fully manual without an API key so the app never depends on the model being available.",
    ],
  },
  {
    name: "Motor Performance Monitoring — Industrial IoT (1st place, Tec Expo Ingenierías)",
    stack: "Python, Streamlit, signal processing, serial telemetry, statistical thresholding",
    link: "github.com/DArmandoSalinas/Motor-performance-prediction",
    bullets: [
      "Won first place at Tec Expo Ingenierías by re-engineering an existing plant maintenance procedure into a live monitoring system, profiling a Sumitomo three-phase motor across five speed baselines and a Haas Mini Mill from combined trajectories.",
      "Scored machine health 0–100 from threaded serial vibration and temperature telemetry with machine-specific adaptive thresholds, keeping the design fully rule-based so every alarm traces to the statistic that fired it; recognized by Rockwell Automation for the integration work.",
    ],
  },
  {
    name: "ADHD Screening Support with Fairness Analysis",
    stack: "scikit-learn, XGBoost, Keras, KernelPCA, SHAP, LIME",
    link: "github.com/DArmandoSalinas/Predicting-ADHD-sex",
    bullets: [
      "Predicted ADHD outcomes for 1,213 participants from fMRI connectomes and psychosocial data at 82% accuracy, 0.88–0.90 recall and 0.866 AUC; reported results by sex, surfacing a female-recall gap tied to documented underdiagnosis.",
    ],
  },
];

export const cvSkills = [
  {
    label: "Languages",
    items: ["Python", "SQL", "TypeScript", "JavaScript", "MATLAB", "C"],
  },
  {
    label: "Machine Learning",
    items: [
      "scikit-learn",
      "XGBoost",
      "TensorFlow",
      "Keras",
      "Random Forest",
      "Gradient Boosting",
      "Support Vector Regression",
      "Neural Networks",
      "Feature Engineering",
      "Hyperparameter Tuning",
      "Cross-Validation (LOPO, LOSO, k-fold)",
    ],
  },
  {
    label: "Generative AI & LLM",
    items: [
      "SAP Business AI",
      "SAP AI Core",
      "SAP AI Launchpad",
      "SAP Generative AI Hub",
      "OpenAI GPT-4o",
      "LangChain",
      "LangGraph",
      "Retrieval-Augmented Generation (RAG)",
      "Vector Databases (ChromaDB)",
      "Embeddings",
      "Prompt Engineering",
      "Multi-Agent Systems",
    ],
  },
  {
    label: "MLOps & Deployment",
    items: [
      "FastAPI",
      "REST APIs",
      "Streamlit",
      "Flask",
      "Docker",
      "Google Cloud Run",
      "MLflow",
      "Git",
      "GitHub",
      "Vercel",
      "React Native (Expo)",
      "PostgreSQL",
      "SQLAlchemy",
      "Alembic",
      "Supabase",
    ],
  },
  {
    label: "Data, Evaluation & Domain",
    items: [
      "Pandas",
      "NumPy",
      "SciPy",
      "NeuroKit2",
      "Signal Processing (Butterworth, Welch PSD, PPG/HRV, vibration)",
      "Time-Series Forecasting",
      "SHAP",
      "LIME",
      "ROC-AUC",
      "Precision / Recall / F1",
      "RMSE / MAE / R²",
      "Fairness Analysis",
      "Predictive Maintenance",
      "Healthcare & Clinical ML",
      "Affective Computing",
      "Robotics (PID, Fuzzy Logic)",
      "Industrial Automation",
    ],
  },
];

export const cvEducation = [
  {
    degree: "MSc Artificial Intelligence — Distinction",
    school: "University of Essex, United Kingdom",
    period: "2024 — 2025",
    notes: [
      "Modules: Machine Learning; Intelligent Systems and Robotics; Data Science and Decision Making; Neural Networks; Natural Language Engineering. Thesis: heart-rate-variability emotion recognition from PPG signals.",
    ],
  },
  {
    degree: "B.Sc. Mechatronics Engineering",
    school: "Tecnológico de Monterrey, Mexico",
    period: "2021 — 2025",
    notes: ["Coursework: control systems, industrial automation, robot design, manufacturing."],
  },
];

/** SAP first, then vendor, then academic. QPR omitted from the engineering CV. */
export const cvCerts = [
  "SAP Certified: SAP Generative AI Developer (2026)",
  "Databases and SQL for Data Science with Python — IBM (2026)",
  "Google Analytics Certification — Google (2025)",
  "Machine Learning Specialization — Stanford & DeepLearning.AI (2024)",
  "ML Web App with Streamlit and Python — Coursera (2025)",
  "Introduction to Generative AI — Google Cloud (2024)",
  "AI For Everyone — DeepLearning.AI (2024)",
  "CS50x: Introduction to Computer Science — Harvard (2022)",
  "NanoLab — MIT.nano / Tec-MIT (2023)",
  "MATLAB Onramp — MathWorks (2022)",
];

export const cvSpokenLanguages = "Spanish (native), English (professional), German (basic)";
