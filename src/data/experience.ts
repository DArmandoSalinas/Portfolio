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
      "Designs and deploys Generative AI that automates technical fault reporting — sharper incident categorization, faster response.",
    points: [
      "Builds GenAI services on SAP Business AI and BTP extension patterns.",
      "Works with leading LLMs through SAP AI Core, AI Launchpad and the generative AI hub.",
      "SAP Certified — SAP Generative AI Developer.",
    ],
    tags: ["Generative AI", "SAP BTP", "AI Core", "LLMs"],
  },
  {
    num: "02",
    title: "Founder & Developer",
    org: "ARMATUS",
    orgUrl: "https://www.armatus.app/",
    period: "May 2026 — Present",
    current: true,
    summary:
      "A consumer GenAI iOS coach that architects the training week instead of serving a template.",
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
      "Took AI ideas to working MVPs — strategy, analysis, feature engineering, training, evaluation and deployment.",
    points: [
      "Advanced contact segmentation to sharpen engagement strategy.",
      "Workload and efficiency diagnostics built for decision-making, not dashboards.",
      "Shipped as containerized Streamlit services on Google Cloud Run.",
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
      "End-to-end machine learning for emotion recognition from HRV features derived from PPG signals.",
    points: [
      "Butterworth filtering, IBI extraction, and time / frequency / non-linear HRV features.",
      "Leave-one-participant-out and leave-one-group-out validation across 62 participants.",
      "Model comparison — Random Forest, XGBoost, SVR — for continuous arousal regression.",
    ],
    tags: ["Signal processing", "HRV", "LOPO", "Neuromarketing"],
  },
];
