export type Role = {
  num: string;
  title: string;
  org: string;
  orgUrl?: string;
  period: string;
  location?: string;
  summary: string;
  points: string[];
  tags: string[];
  current?: boolean;
};

export const experience: Role[] = [
  {
    num: "01",
    title: "Machine Learning & AI Engineer",
    org: "SAP",
    period: "Jan 2026 — Present",
    location: "San Pedro Garza García, NL",
    current: true,
    summary:
      "I ship Generative AI on SAP BTP at Labs Latin America Monterrey. In 2026 our team of 14 won Innoweeks — 1st place overall, Best Pitch, Best Popular Support — the first Mexican team to take the competition.",
    points: [
      "On ReflexIA, a five-week sprint for Tecmilenio against five Brazilian teams, I built the Gen AI microservice from scratch: speech-to-text, TTS and voice-to-voice (ElevenLabs), an MCP server of agent-callable tools, and GraphRAG on SAP HANA Cloud so the model could query policies and approval chains in context.",
      "I built the voice and chat UI in SAPUI5 TypeScript, Joule-style.",
      "Tecmilenio validated the replacement of a 14-year-old, 5+ platform budget-approval stack: $3.9M saved annually, 3,750 hours returned to educators, enough to fund 518 student scholarships a year.",
      "Day to day I design and deploy generative AI that automates technical fault reporting on SAP Business AI, AI Core, AI Launchpad and the generative AI hub. SAP Certified — Generative AI Developer.",
    ],
    tags: ["Generative AI", "SAP BTP", "GraphRAG", "MCP", "SAPUI5"],
  },
  {
    num: "02",
    title: "Founder & Developer",
    org: "ARMATUS",
    orgUrl: "https://www.armatus.app/",
    period: "May 2026 — Present",
    current: true,
    summary:
      "I founded a consumer GenAI iOS coach that architects the training week instead of serving a template.",
    points: [
      "Deep onboarding — goals, equipment, injuries, history, lifestyle — becomes the athlete model.",
      "Daily signals (energy, sleep, time) and logged sessions rebuild the plan from evidence.",
      "Overload map, readiness ceiling before load, technique standards; hybrid sport counted as real fatigue.",
      "Production mobile app plus streaming API for structured plan generation.",
    ],
    tags: ["Founder", "iOS", "GenAI", "Production API", "TypeScript"],
  },
  {
    num: "03",
    title: "Data & AI Trainee",
    org: "Interius",
    period: "Sep 2025 — Dec 2025",
    location: "San Pedro Garza García, NL",
    summary:
      "I took AI ideas to working MVPs — strategy, analysis, feature engineering, training, evaluation and deployment.",
    points: [
      "I built advanced contact segmentation to sharpen engagement strategy.",
      "I shipped workload and efficiency diagnostics built for decision-making, not dashboards.",
      "I deployed them as containerized Streamlit services on Google Cloud Run.",
    ],
    tags: ["Clustering", "Streamlit", "Docker", "Cloud Run"],
  },
  {
    num: "04",
    title: "AI Student Researcher",
    org: "University of Essex",
    period: "Nov 2024 — Sep 2025",
    location: "Colchester, UK",
    summary:
      "I built end-to-end machine learning for emotion recognition from HRV features derived from PPG signals.",
    points: [
      "Butterworth filtering, IBI extraction, and time / frequency / non-linear HRV features.",
      "Leave-one-participant-out and leave-one-group-out validation across 62 participants.",
      "Model comparison — Random Forest, XGBoost, SVR — for continuous arousal regression.",
    ],
    tags: ["Signal processing", "HRV", "LOPO", "Neuromarketing"],
  },
];
