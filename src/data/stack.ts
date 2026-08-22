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

/**
 * Coursera skill tracks. These are progress areas Coursera tracks across
 * courses and guided projects — not completed certifications. Labelled as
 * such on the site so nothing here overstates what was finished.
 */
export const courseraTracks: StackGroup[] = [
  {
    label: "Machine learning & deep learning",
    items: [
      "Machine Learning Foundations",
      "Applied Machine Learning I: Supervised Learning",
      "Applied Machine Learning II: Unsupervised and Specialized Methods",
      "Custom Deep Learning Model Architecture",
      "Deep Learning Model Engineering and Optimization",
      "Deep Learning & Modern Architectures",
      "Advanced Deep Learning",
      "Advanced Feature Engineering and Selection",
      "Advanced Model Tuning and Regularization",
      "Model Tuning & Evaluation",
      "Model Evaluation, Interpretation, and Communication",
      "Automating the Machine Learning Lifecycle",
    ],
  },
  {
    label: "Statistics, analytics & forecasting",
    items: [
      "Statistical Analysis & Modeling",
      "Statistical Modeling and Inference",
      "Statistical Modeling for Financial Forecasting",
      "Predictive Analytics & Forecasting",
      "Advanced Analytics & Techniques",
      "Advanced Exploratory Data Analysis",
      "Project Appraisal and Forecasting",
      "Data Preparation & Analysis",
      "Data-Driven Business Analysis",
    ],
  },
  {
    label: "Data engineering & SQL",
    items: [
      "Foundations of Data Extraction with SQL",
      "Advanced Data Wrangling with SQL",
      "Database Interrogation with SQL for Consultants",
      "Data Modeling and SQL for Data Warehousing",
      "Database Design & Operations",
      "Database Operations for Data Analysis",
      "Building a Scripted ETL Pipeline",
      "Data Transformation and Structuring",
      "Data Transformation and Manipulation",
      "Transformation Engineering & Reusable Components",
      "Data Engineering & Management",
      "Data Acquisition and Preparation",
      "Data and Storage",
      "Foundational Data Access and Reporting",
      "Foundational Data Design and AI Development",
    ],
  },
  {
    label: "Generative AI & strategy",
    items: [
      "Applied Generative AI Development and Strategy",
      "Applying Generative AI in Consulting",
      "Foundations of Responsible AI Strategy",
      "AI Governance and Technology Foresight",
      "Enterprise AI Strategy and Investment",
      "Building the AI-Ready Enterprise",
      "AI-Powered Productivity for Business Communication",
      "AI-Assisted Project Coordination & Innovation",
    ],
  },
  {
    label: "Engineering & operations",
    items: [
      "Scripting and API Automation for IT Operations",
      "Connecting the Front-End with Back-End APIs",
      "Cloud Operations and Security",
      "Business Requirements & Stakeholder Alignment",
      "Foundational Business Analysis with Spreadsheet Tools",
    ],
  },
];

export const courseraTrackCount = courseraTracks.reduce(
  (n, g) => n + g.items.length,
  0,
);
