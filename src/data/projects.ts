export const FILTERS = [
  "All",
  "Production",
  "Healthcare AI",
  "Predictive Maintenance",
  "NLP / LLMs",
  "Forecasting",
  "Robotics",
  "Founder",
] as const;

export type Filter = (typeof FILTERS)[number];
export type Category = Exclude<Filter, "All">;

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  hook: string;
  body: string;
  categories: Category[];
  metrics?: Metric[];
  stack: string[];
  repo?: string;
  repos?: { label: string; url: string }[];
  live?: { label: string; url: string }[];
  video?: string;
  note?: string;
  featured: boolean;
};

export const projects: Project[] = [
  // ─────────────────────────── TIER A · FEATURED ───────────────────────────
  {
    id: "armatus",
    title: "ARMATUS",
    hook: "An iPhone coach that architects the week — not a template.",
    body: "Calibrates the athlete, maps overload, checks readiness before load, doses the day, and logs against a technique standard. Each new week is regenerated from PRs and accumulated fatigue — with running and cycling counted as real load, not a footnote. Structured plans stream from user context through a production mobile app and API.",
    categories: ["Founder", "Production", "NLP / LLMs"],
    metrics: [
      { value: "iOS", label: "shipped app" },
      { value: "5-step", label: "closed protocol" },
      { value: "ES / EN", label: "bilingual" },
    ],
    stack: ["TypeScript", "iOS", "Generative AI", "Streaming API", "Design system"],
    live: [
      { label: "armatus.app", url: "https://www.armatus.app/" },
      { label: "Web coach", url: "https://armatus-web-coach.vercel.app" },
    ],
    featured: true,
  },
  {
    id: "coazon",
    title: "COAZON",
    hook: "A cardiologist's prescription, turned into a care plan a family can actually follow.",
    body: "Built after a health scare in his own family. COAZON turns a doctor's prescription into a living plan: flexible medication reminders, a guided blood-pressure and vitals diary with trend charts marked by clinical zone, a deterministic red-flag alarm engine wired to an emergency screen, and a doctor-ready PDF for the next appointment. The AI layer is deliberately bounded — it reads prescriptions, accepts natural-language logging and writes descriptive summaries, but never diagnoses, prescribes or changes a dose, and every health answer defers to the treating physician. With no API key configured it degrades to fully manual and the app still works. Spanish-first and bilingual from day one, so it fits the household it was built for.",
    categories: ["Founder", "Healthcare AI", "NLP / LLMs"],
    metrics: [
      { value: "7", label: "milestones, 6 complete" },
      { value: "0", label: "AI diagnoses by design" },
      { value: "ES / EN", label: "bilingual" },
    ],
    stack: [
      "FastAPI",
      "SQLAlchemy 2.0",
      "PostgreSQL",
      "Alembic",
      "JWT auth",
      "React Native",
      "Expo",
      "TypeScript",
      "OpenAI",
      "Railway",
    ],
    note: "In development — App Store polish stage. A logging and reminder tool, not a medical device: it never diagnoses, prescribes or recommends. Private repository.",
    featured: true,
  },
  {
    id: "rul",
    title: "Engines Health Monitor",
    hook: "Fleet remaining-useful-life you can query in English — and download as a briefing.",
    body: "XGBoost predicts remaining useful life on NASA C-MAPSS turbofan data, with SHAP attribution per sensor. A FastAPI service serves inference behind a Streamlit fleet dashboard, while a LangGraph multi-agent layer handles natural-language diagnostics and generates ReportLab PDF maintenance briefings. Deployed on Google Cloud Run.",
    categories: ["Predictive Maintenance", "Production", "NLP / LLMs"],
    metrics: [
      { value: "16.74", label: "test RMSE (cycles)" },
      { value: "12.33", label: "test MAE" },
      { value: "0.825", label: "test R²" },
      { value: "15.02", label: "val RMSE" },
    ],
    stack: ["XGBoost", "SHAP", "FastAPI", "Streamlit", "LangGraph", "OpenAI", "MLflow", "Cloud Run"],
    repo: "https://github.com/DArmandoSalinas/predictive-maintenance-rul",
    live: [{ label: "Live dashboard", url: "https://rul-dashboard-368785016309.us-central1.run.app" }],
    featured: true,
  },
  {
    id: "rag",
    title: "Personal Research Assistant",
    hook: "Chat with your PDFs. Every answer shows the snippet it came from.",
    body: "Upload, chunk at 1000/100, embed, retrieve through a MultiQueryRetriever, then answer with GPT-4o grounded in Chroma — sources always visible. Built and tested against his own HRV thesis, indexed to 149 segments covering features like RMSSD and pNN50.",
    categories: ["NLP / LLMs", "Production"],
    metrics: [
      { value: "149", label: "indexed segments" },
      { value: "1000/100", label: "chunk / overlap" },
      { value: "100%", label: "answers cite source" },
    ],
    stack: ["FastAPI", "LangChain", "ChromaDB", "GPT-4o", "text-embedding-3-small", "Streamlit", "PyPDF"],
    repo: "https://github.com/DArmandoSalinas/RAG",
    featured: true,
  },
  {
    id: "adhd",
    title: "ADHD & Sex Prediction",
    hook: "Screening support with fairness and explanations, not a black box.",
    body: "1,213 participants, fMRI connectomes joined with psychosocial data. Mutual-information selection, KernelPCA and stratified splits feed a Random Forest for ADHD and Logistic Regression for sex, tuned toward female recall. LIME and SHAP carry the explanations, and fairness is reported by sex because female ADHD is historically underdiagnosed.",
    categories: ["Healthcare AI"],
    metrics: [
      { value: "82%", label: "ADHD accuracy" },
      { value: "0.88–0.90", label: "ADHD recall" },
      { value: "0.866", label: "ADHD AUC" },
      { value: "0.71 / 0.48", label: "sex recall M / F" },
    ],
    stack: ["scikit-learn", "XGBoost", "Keras", "SHAP", "LIME"],
    repos: [
      { label: "Predicting-ADHD-sex", url: "https://github.com/DArmandoSalinas/Predicting-ADHD-sex" },
      {
        label: "Stage 1 · EDA",
        url: "https://github.com/DArmandoSalinas/ADHD-Outcome-Prediction-Data-Exploration-Preprocessing",
      },
    ],
    video: "https://youtu.be/F41ycarl3_U",
    note: "Academic research. Not a clinical device.",
    featured: true,
  },
  {
    id: "heart",
    title: "Cardiovascular Risk Classification",
    hook: "Leak-free clinical ML — and proof that a pooled AUC can lie.",
    body: "UCI four-site heart disease data, 920 patients. Sentinel zeros in cholesterol and resting blood pressure are mapped to NaN, and the ColumnTransformer lives inside cross-validation so nothing leaks. HistGradientBoosting is selected on recall then F1, explained with SHAP and LIME. Leave-One-Site-Out exposes the transportability gap the pooled score hides.",
    categories: ["Healthcare AI"],
    metrics: [
      { value: "0.90", label: "test ROC-AUC" },
      { value: "87.3%", label: "recall" },
      { value: "0.85", label: "F1" },
      { value: "0.79", label: "LOSO mean AUC" },
    ],
    stack: ["scikit-learn", "HistGradientBoosting", "SHAP", "LIME", "ColumnTransformer"],
    repo: "https://github.com/DArmandoSalinas/HeartDisease-Predictor",
    note: "Educational. Not a validated clinical instrument. Worst-site AUC ≈ 0.70. Top drivers: asymptomatic chest pain, oldpeak, exercise-induced angina.",
    featured: true,
  },
  {
    id: "motor",
    title: "Motor Performance Monitoring",
    hook: "Interpretable machine health from vibration and temperature — and a first place for it.",
    body: "An industrial preventive-maintenance system built around a real question: how do you improve a procedure a plant is already running? It profiles two very different machines — a Sumitomo three-phase induction motor baselined across five speeds (50/60/75/90/100%) and a Haas Mini Mill baselined from combined operational trajectories — then applies machine-specific adaptive thresholds, because a milling machine is legitimately noisier than a motor. A threaded serial reader with auto-reconnection feeds live vibration and temperature into 0–100 health scores in a Streamlit dashboard, with replay mode for demos without hardware and live packet/FPS diagnostics. Deliberately rule-based rather than ML: every alarm traces back to the statistic that fired it, which is what a maintenance team can actually act on and audit.",
    categories: ["Predictive Maintenance"],
    metrics: [
      { value: "1st", label: "Tec Expo Ingenierías" },
      { value: "2", label: "machine types profiled" },
      { value: "5", label: "speed baselines" },
      { value: "0–100", label: "health score" },
    ],
    stack: ["Python", "Streamlit", "Signal processing", "Serial / IoT", "Statistical thresholds"],
    repo: "https://github.com/DArmandoSalinas/Motor-performance-prediction",
    note: "First place at Tec Expo Ingenierías, the Tecnológico de Monterrey engineering project competition. Recognized by Rockwell Automation for contribution to an integration project using their technology (Nuevo León, Dec 2025).",
    featured: true,
  },
  {
    id: "hrv",
    title: "HRV Emotion Recognition",
    hook: "From raw PPG to emotion models under leave-one-participant-out.",
    body: "MSc thesis. Butterworth filtering and IBI extraction feed time, frequency and non-linear HRV features — including Poincaré descriptors — normalized against a calibration baseline. Mutual-information selection, grid search and LOPO / LOGO validation compare Random Forest, XGBoost and SVR for continuous arousal.",
    categories: ["Healthcare AI"],
    metrics: [
      { value: "0.5975", label: "Pearson r (arousal)" },
      { value: "0.154", label: "RMSE ± 0.032" },
      { value: "62", label: "participants" },
    ],
    stack: ["Python", "NeuroKit2", "SciPy", "scikit-learn", "Signal processing"],
    repo: "https://github.com/DArmandoSalinas/HR_DiegoSalinas",
    note: "MSc Artificial Intelligence thesis, University of Essex — Random Forest, LOPO validated.",
    featured: true,
  },
  {
    id: "wellhave",
    title: "WellHave",
    hook: "Daily pulse in; a risk level and a recovery plan out.",
    body: "A classifier sorts burnout into low, moderate and high, then GPT-4o through LangChain turns that signal into coaching a person can act on. FastAPI backend, React Native (Expo) client, Supabase for state.",
    categories: ["Healthcare AI", "NLP / LLMs"],
    metrics: [
      { value: "3", label: "burnout tiers" },
      { value: "Mobile", label: "Expo client" },
    ],
    stack: ["FastAPI", "GPT-4o", "LangChain", "React Native", "Expo", "Supabase"],
    repo: "https://github.com/DArmandoSalinas/Wellhave",
    featured: true,
  },

  // ─────────────────────────── TIER B · STRONG ───────────────────────────
  {
    id: "segmentation",
    title: "Advanced Contact Segmentation",
    hook: "Clustering that turns a contact list into an engagement strategy.",
    body: "Proof of concept for Interius / APREU: segments by engagement, geography × engagement, and channel activity. Packaged as a Streamlit app, containerized and deployed to Google Cloud Run.",
    categories: ["Production"],
    stack: ["scikit-learn", "Clustering", "Streamlit", "Docker", "Cloud Run"],
    repo: "https://github.com/DArmandoSalinas/Advanced_Segmentation_ST",
    featured: false,
  },
  {
    id: "housing",
    title: "California House Price Estimator",
    hook: "Notebook to endpoint, without the gap in between.",
    body: "EDA leads into a RandomForest pipeline, which is served behind a FastAPI /predict route with a responsive HTML frontend on top.",
    categories: ["Forecasting", "Production"],
    stack: ["scikit-learn", "RandomForest", "FastAPI", "HTML"],
    repo: "https://github.com/DArmandoSalinas/California-House-Price-Estimator",
    featured: false,
  },
  {
    id: "rossmann",
    title: "Rossmann Sales Forecasting",
    hook: "1,115 stores, a six-week horizon, one feed-forward net.",
    body: "A 128-64-32 MLP with 0.3 dropout, Adam and early stopping forecasts store sales across a six-week window, trained on engineered calendar and promotion features.",
    categories: ["Forecasting"],
    metrics: [
      { value: "1,115", label: "stores" },
      { value: "~0.06", label: "RMSE on engineered features" },
    ],
    stack: ["TensorFlow", "Keras", "Feature engineering", "Pandas"],
    repo: "https://github.com/DArmandoSalinas/RossmannSales_FNN",
    note: "RMSE reported on this project's engineered feature scale; the official Kaggle metric is RMSPE.",
    featured: false,
  },
  {
    id: "text-emotion",
    title: "Text Emotion Recognition",
    hook: "Six emotions across 416k tweets.",
    body: "Bag-of-words with stemming feeds an XGBoost classifier, validated with stratified K-fold across six emotion classes.",
    categories: ["NLP / LLMs"],
    metrics: [
      { value: "87.5%", label: "accuracy" },
      { value: "~416k", label: "tweets" },
    ],
    stack: ["XGBoost", "NLTK", "Bag-of-Words", "scikit-learn"],
    repo: "https://github.com/DArmandoSalinas/Leveraging-XGBoost-for-Text-Classification-on-Emotion-Recognition",
    featured: false,
  },
  {
    id: "movies",
    title: "Hybrid Movie Recommender",
    hook: "Collaborative and content-based, then both at once.",
    body: "SVD collaborative filtering, TF-IDF content similarity, and a hybrid blend of the two, wrapped in a Flask interface.",
    categories: ["NLP / LLMs"],
    metrics: [
      { value: "0.477", label: "SVD RMSE" },
      { value: "3.624", label: "baseline RMSE" },
    ],
    stack: ["Surprise / SVD", "TF-IDF", "Flask", "Pandas"],
    repo: "https://github.com/DArmandoSalinas/movie-recommendation-system",
    featured: false,
  },
  {
    id: "politrauma",
    title: "Politrauma",
    hook: "Polytrauma workflows, walked step by step.",
    body: "An interactive clinical-education web tool that guides students through polytrauma assessment and trauma care decision paths.",
    categories: ["Healthcare AI", "Production"],
    stack: ["TypeScript", "HTML", "Vercel"],
    repo: "https://github.com/DArmandoSalinas/Politrauma",
    live: [{ label: "politrauma.vercel.app", url: "https://politrauma.vercel.app" }],
    note: "Educational. Not a medical device.",
    featured: false,
  },
  {
    id: "turtlebot",
    title: "TurtleBot Navigation",
    hook: "PID and fuzzy logic deciding in real time.",
    body: "Edge following and obstacle avoidance on a TurtleBot, with fuzzy rules and PID control acting on live sensor readings.",
    categories: ["Robotics"],
    stack: ["Python", "ROS", "Fuzzy logic", "PID"],
    repo: "https://github.com/DArmandoSalinas/PID-and-Fuzzy-logic-for-Intelligent-Systems-and-Robotics",
    featured: false,
  },
  {
    id: "rocket",
    title: "Rocket Landing Neural Network",
    hook: "A neural network written from scratch, no framework.",
    body: "Forward pass, backpropagation, Xavier initialization and input normalization implemented by hand, then flown against simulated landings.",
    categories: ["Robotics"],
    stack: ["Python", "NumPy", "Backpropagation"],
    repo: "https://github.com/DArmandoSalinas/RocketLanding_NeuralNetwork",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const gridProjects = projects;

// ─────────────────────────── EARLIER WORK ───────────────────────────
export type EarlierItem = { title: string; body: string; url?: string; tag: string };

export const earlierWork: { group: string; items: EarlierItem[] }[] = [
  {
    group: "Software & web",
    items: [
      {
        title: "CS50x — DIAR Notices",
        body: "Flask notice-distribution app built for the Harvard CS50x final project.",
        url: "https://github.com/DArmandoSalinas/CS50-Certification-Projects",
        tag: "C · Python · SQL · JS",
      },
      {
        title: "LegRoutine",
        body: "A micro-site delivering a leg routine for runners.",
        url: "https://leg-routine-one.vercel.app",
        tag: "HTML · Vercel",
      },
    ],
  },
  {
    group: "Engineering roots · Mechatronics",
    items: [
      {
        title: "ABB welding cell",
        body: "Two robots and a positioner simulated in RobotStudio; proposed a 31-second cycle time.",
        tag: "RobotStudio",
      },
      {
        title: "John Deere moldboard fixture",
        body: "Fixture design and stress-relief study for moldboard manufacturing.",
        tag: "Manufacturing",
      },
      {
        title: "Greenhouse LED control",
        body: "Closed-loop lighting control modelled in Simulink.",
        tag: "Simulink",
      },
      {
        title: "Clinic energy-balance protocol",
        body: "Thermogenesis and energy-balance measurement protocol for a clinical setting.",
        tag: "Instrumentation",
      },
      {
        title: "Industrial temperature sensing",
        body: "Sensor conditioning and signal chain for industrial temperature measurement.",
        tag: "Electronics",
      },
    ],
  },
];
