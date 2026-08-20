/**
 * CV content. Ordering encodes edit #1: production systems and founder work
 * sit in the top third; coursework sits at the bottom.
 */

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
    location: "San Pedro Garza García, NL",
    bullets: [
      "Designs and deploys Generative AI that automates technical fault reporting — improving incident categorization and cutting response time.",
      "Builds on SAP Business AI and BTP extension patterns, consuming leading LLMs through SAP AI Core, AI Launchpad and the generative AI hub.",
      "SAP Certified — SAP Generative AI Developer (2026).",
    ],
  },
  {
    title: "Founder & Developer",
    org: "ARMATUS · armatus.app",
    period: "May 2026 — Present",
    bullets: [
      "Founded and shipped a consumer generative-AI iOS training coach, live at armatus.app.",
      "Deep onboarding — goals, equipment, injuries, training history, lifestyle — builds the athlete model that drives every plan.",
      "Daily signals (energy, sleep, available time) plus logged sessions feed an overload / readiness loop that regenerates each week from evidence.",
      "Readiness ceiling is checked before load; hybrid sport (running, cycling, swimming) is counted as real fatigue, not a footnote.",
      "Production iOS client and streaming API for structured plan generation, bilingual ES / EN.",
    ],
  },
  {
    title: "Data & AI Trainee",
    org: "Interius",
    period: "Sep 2025 — Dec 2025",
    location: "San Pedro Garza García, NL",
    bullets: [
      "Delivered AI MVPs end to end: strategy, analysis, feature engineering, model training, evaluation and deployment.",
      "Built advanced contact segmentation and workload / efficiency diagnostics used for decision-making.",
      "Shipped as containerized Streamlit services on Google Cloud Run.",
    ],
  },
  {
    title: "AI Student Researcher",
    org: "University of Essex",
    period: "Nov 2024 — Sep 2025",
    location: "Colchester, UK",
    bullets: [
      "End-to-end ML for emotion recognition from HRV features derived from PPG across 62 participants.",
      "Butterworth filtering, IBI extraction, and time / frequency / non-linear (Poincaré) feature engineering.",
      "Leave-one-participant-out validation and model comparison; Random Forest reached r = 0.5975 for continuous arousal.",
    ],
  },
];

export type CvProject = {
  name: string;
  line: string;
  metrics?: string;
  link?: string;
};

export const cvProjects: CvProject[] = [
  {
    name: "Engines Health Monitor — Predictive Maintenance",
    line: "XGBoost RUL on NASA C-MAPSS with SHAP attribution, FastAPI inference, Streamlit fleet dashboard, and a LangGraph multi-agent layer for NL diagnostics and PDF briefings. Deployed on Google Cloud Run.",
    metrics: "Test RMSE 16.74 cycles · MAE 12.33 · R² 0.825",
    link: "rul-dashboard-368785016309.us-central1.run.app",
  },
  {
    name: "Personal Research Assistant (RAG)",
    line: "PDF question answering with chunking, embeddings and a MultiQueryRetriever; GPT-4o answers grounded in ChromaDB with visible source snippets. FastAPI + Streamlit.",
    metrics: "149 indexed segments · every answer cites its source",
    link: "github.com/DArmandoSalinas/RAG",
  },
  {
    name: "Cardiovascular Risk Classification",
    line: "Leak-free clinical pipeline on UCI four-site heart data (920 patients); sentinel-zero repair, ColumnTransformer inside CV, HistGradientBoosting, SHAP + LIME, Leave-One-Site-Out transportability check.",
    metrics: "ROC-AUC 0.90 · recall 87.3% · F1 0.85 · LOSO mean AUC 0.79",
    link: "github.com/DArmandoSalinas/HeartDisease-Predictor",
  },
  {
    name: "ADHD & Sex Prediction with Fairness",
    line: "1,213 participants, fMRI connectomes and psychosocial data; MI selection, KernelPCA, Random Forest and Logistic Regression with LIME / SHAP and fairness reporting by sex.",
    metrics: "ADHD accuracy 82% · recall 0.88–0.90 · AUC 0.866",
    link: "github.com/DArmandoSalinas/Predicting-ADHD-sex",
  },
  {
    name: "WellHave — Burnout prediction + LLM coach",
    line: "Burnout classifier (low / moderate / high) paired with GPT-4o coaching via LangChain. FastAPI backend, React Native (Expo) client, Supabase.",
    link: "github.com/DArmandoSalinas/Wellhave",
  },
  {
    name: "Motor Performance Monitoring",
    line: "Serial ingestion from a Sumitomo three-phase motor and Haas Mini Mill; machine-specific baselines, adaptive z-score and temperature-slope thresholds, 0–100 health scores in Streamlit. Fully interpretable rules.",
    link: "github.com/DArmandoSalinas/Motor-performance-prediction",
  },
  {
    name: "Text Emotion Recognition",
    line: "XGBoost over ~416k tweets across six emotion classes with bag-of-words, stemming and stratified K-fold.",
    metrics: "87.5% accuracy",
    link: "github.com/DArmandoSalinas/Leveraging-XGBoost-for-Text-Classification-on-Emotion-Recognition",
  },
  {
    name: "Hybrid Movie Recommender",
    line: "SVD collaborative filtering blended with TF-IDF content similarity behind a Flask interface.",
    metrics: "SVD RMSE 0.477 vs 3.624 baseline",
    link: "github.com/DArmandoSalinas/movie-recommendation-system",
  },
  {
    name: "Politrauma",
    line: "Interactive clinical-education web tool for polytrauma assessment workflows. Educational, not a medical device.",
    link: "politrauma.vercel.app",
  },
];

export const cvSkills = [
  {
    label: "ML",
    items: [
      "Python",
      "scikit-learn",
      "XGBoost",
      "TensorFlow / Keras",
      "SHAP",
      "LIME",
      "NeuroKit2",
      "SciPy",
      "MLflow",
    ],
  },
  {
    label: "Platform",
    items: [
      "FastAPI",
      "LangChain",
      "LangGraph",
      "OpenAI",
      "SAP AI Core / generative AI hub",
      "Streamlit",
      "Flask",
      "Docker",
      "GCP Cloud Run",
      "Vercel",
      "TypeScript",
      "React Native / Expo",
      "SQL",
      "Git",
    ],
  },
  {
    label: "Domain",
    items: [
      "Signal processing (PPG, HRV, vibration)",
      "Predictive maintenance",
      "Healthcare ML & fairness",
      "Retrieval-augmented generation",
      "Robotics · PID · fuzzy control",
      "MATLAB",
      "C",
    ],
  },
];

/** Edit #3 and #10: SAP first, IBM SQL and Intro to GenAI added, QPR omitted. */
export const cvCerts = [
  "SAP Certified — SAP Generative AI Developer · SAP, 2026",
  "Databases and SQL for Data Science with Python · IBM, 2026",
  "Google Analytics · Google Digital Academy, 2025",
  "Machine Learning Specialization · Stanford Online & DeepLearning.AI, 2024",
  "Introduction to Generative AI · Google Cloud, 2024",
  "AI For Everyone · DeepLearning.AI, 2024",
  "Intro to Machine Learning · Kaggle, 2024",
  "2023 NanoLab (online) · MIT / Tec-MIT Nanotechnology, 2023",
  "CS50's Introduction to Computer Science · Harvard University, 2022",
  "MATLAB Onramp · MathWorks, 2022",
];

export const cvEducation = [
  {
    degree: "MSc Artificial Intelligence — with Distinction",
    school: "University of Essex, UK",
    period: "2024 — 2025",
    note: "Thesis: A Machine Learning Approach for Emotion Recognition Using Heart Rate Variability.",
  },
  {
    degree: "B.S. Mechatronics Engineering",
    school: "Tecnológico de Monterrey, MX",
    period: "2021 — 2025",
    note: "Control systems, industrial automation, robot design, manufacturing.",
  },
];
