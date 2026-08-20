export type StackGroup = { label: string; items: string[] };

export const stack: StackGroup[] = [
  { label: "Languages", items: ["Python", "SQL", "TypeScript / JavaScript", "MATLAB", "C"] },
  {
    label: "Machine learning",
    items: ["scikit-learn", "XGBoost", "TensorFlow / Keras", "SHAP", "LIME", "NeuroKit2"],
  },
  { label: "LLM", items: ["LangChain", "LangGraph", "OpenAI", "SAP generative AI hub", "ChromaDB"] },
  {
    label: "Ship",
    items: ["FastAPI", "Streamlit", "Flask", "Docker", "GCP Cloud Run", "Vercel", "Git", "MLflow"],
  },
  {
    label: "Domain",
    items: [
      "Signal processing",
      "Robotics · PID · fuzzy control",
      "Healthcare fairness",
      "Predictive maintenance",
    ],
  },
];

export const principles = [
  {
    num: "01",
    label: "Ship the whole path",
    body: "Data, model, API, interface, cloud. A model that nobody can call is a notebook.",
  },
  {
    num: "02",
    label: "Validate like a stranger",
    body: "Leave-one-participant-out, leave-one-site-out. Pooled scores flatter models that will not travel.",
  },
  {
    num: "03",
    label: "Explain every decision",
    body: "SHAP and LIME on anything that touches a person. Rule-based where interpretability beats accuracy.",
  },
  {
    num: "04",
    label: "Report the weak number",
    body: "Worst-site AUC, female recall, the metric that did not improve. Honest beats impressive.",
  },
  {
    num: "05",
    label: "Design is part of engineering",
    body: "The dashboard, the brief, the app. If a person cannot read the output, the system is unfinished.",
  },
];
