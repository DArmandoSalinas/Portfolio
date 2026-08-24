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
  /** The situation the system answers — shown on spotlight rows. */
  problem?: string;
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
  /** Tightened copy used in the spotlight rows, where space is the constraint. */
  brief?: string;
  gallery?: {
    kind: "phones" | "video" | "board";
    tone?: "light" | "dark";
    shots?: {
      src: string;
      alt: string;
      label?: string;
      frame?: "phone" | "doc" | "wide";
    }[];
    src?: string;
    poster?: string;
    caption?: string;
    youtube?: string;
  };
};

export const projects: Project[] = [
  {
    id: "armatus",
    brief:
      "A closed five-step protocol: calibrate the athlete, map overload, check readiness before load, dose the day, log against a technique standard. Each new week is regenerated from logged PRs and accumulated fatigue, with running and cycling counted as real load rather than a footnote.",
    title: "ARMATUS",
    hook: "An iPhone coach that architects the training week — not a template you tap through.",
    problem:
      "Generic training apps serve static lists. They ignore equipment, injuries, sleep, and the fact that a long run on Wednesday is load on the same nervous system as Thursday's squat. Athletes who train seriously end up in a spreadsheet.",
    body: "ARMATUS is a consumer iOS product built around a closed protocol: Calibrate → Plan → Adapt → Execute → Evolve. Deep onboarding (goals, equipment, injuries, schedule, lifestyle, external sports) becomes the athlete model. Each week is generated with an overload map and an explicit rationale — then the daily coach doses the session against energy, sleep, time and a readiness ceiling, so the plan yields to capacity rather than ego. The tracker logs sets against a technique standard, with sketches for setup, breathing and common errors. Journey stores PRs, volume and hybrid-sport load as the dataset the next week is regenerated from. Running, cycling, swimming and triathlon enter the algorithm as real fatigue, not a note in the margin. Spanish and English from day one. Production mobile app plus a streaming API for structured plan generation.",
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
    gallery: {
      kind: "phones",
      tone: "dark",
      shots: [
        {
          src: "/work/armatus/01.jpg",
          alt: "ARMATUS Coach — daily readiness check before the session",
          label: "Coach",
        },
        {
          src: "/work/armatus/02.jpg",
          alt: "ARMATUS weekly plan — training and sport mapped by day",
          label: "My Plan",
        },
        {
          src: "/work/armatus/03.jpg",
          alt: "ARMATUS weekly plan rationale — why this week is built this way",
          label: "Rationale",
        },
        {
          src: "/work/armatus/04.jpg",
          alt: "ARMATUS Journey — this week's sessions, volume, and streak",
          label: "Journey",
        },
        {
          src: "/work/armatus/05.jpg",
          alt: "ARMATUS Journey — top exercises and maxes over 90 days",
          label: "PRs",
        },
        {
          src: "/work/armatus/06.jpg",
          alt: "ARMATUS Journey — strength trend and recent sessions",
          label: "Strength",
        },
        {
          src: "/work/armatus/07.jpg",
          alt: "ARMATUS athlete profile — complete athlete model",
          label: "Profile",
        },
        {
          src: "/work/armatus/08.jpg",
          alt: "ARMATUS Coach — generate today's workout from readiness and time",
          label: "Generate",
        },
        {
          src: "/work/armatus/09.jpg",
          alt: "ARMATUS Coach — conversational session brief",
          label: "Chat",
        },
        {
          src: "/work/armatus/10.jpg",
          alt: "ARMATUS Coach — generated session with why-this-workout",
          label: "Session",
        },
      ],
    },
    featured: true,
  },
  {
    id: "coazon",
    brief:
      "Built after a health scare in the family. Flexible medication reminders, a vitals diary charted by clinical zone, a deterministic red-flag alarm wired to an emergency screen, and a doctor-ready PDF for the next appointment. The AI layer is bounded on purpose — it reads prescriptions and writes summaries, and never diagnoses, prescribes or changes a dose.",
    title: "COAZON",
    hook: "A cardiologist's prescription, turned into a care plan a family can actually follow.",
    problem:
      "After a cardiac event, the hospital discharges a family with a paper prescription, a blood-pressure cuff, and a list of warning signs they will not remember at 2 a.m. Existing health apps either nag on a rigid schedule or quietly start diagnosing.",
    body: "COAZON turns a doctor's prescription into a living household plan: flexible medication reminders that tolerate a real day, a guided blood-pressure and vitals diary with trend charts marked by clinical zone, a deterministic red-flag alarm engine wired to an emergency screen, and a doctor-ready PDF for the next appointment. The AI layer is deliberately bounded — it reads prescriptions, accepts natural-language logging and writes descriptive summaries, but never diagnoses, prescribes or changes a dose, and every health answer defers to the treating physician. With no API key configured it degrades to fully manual and the app still works. Spanish-first and bilingual from day one, because that is the household it was built for. FastAPI and PostgreSQL on the server; React Native (Expo) on the client.",
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
    gallery: {
      kind: "phones",
      tone: "light",
      shots: [
        {
          src: "/work/coazon/01-today.jpg",
          alt: "COAZON today — dose checklist and next medication",
          label: "Hoy",
        },
        {
          src: "/work/coazon/02-today-vitals.jpg",
          alt: "COAZON today — pending measurements, summary, and alarm data",
          label: "Hoy · vitales",
        },
        {
          src: "/work/coazon/03-scan.jpg",
          alt: "COAZON prescription scan — reading the receta",
          label: "Escaneo",
        },
        {
          src: "/work/coazon/04-scan-review.jpg",
          alt: "COAZON prescription scan — review and confirm extracted medicines",
          label: "Receta",
        },
        {
          src: "/work/coazon/05-medicines.jpg",
          alt: "COAZON medicines list with scan-prescription action",
          label: "Medicinas",
        },
        {
          src: "/work/coazon/06-edit-med.jpg",
          alt: "COAZON edit medication — name, dose, and schedule",
          label: "Editar",
        },
        {
          src: "/work/coazon/07-edit-stock.jpg",
          alt: "COAZON edit medication — stock, notes, and dose changes",
          label: "Stock",
        },
        {
          src: "/work/coazon/08-edit-save.jpg",
          alt: "COAZON edit medication — save, archive, or delete",
          label: "Guardar",
        },
        {
          src: "/work/coazon/09-metrics-hub.jpg",
          alt: "COAZON metrics hub — blood pressure, heart rate, weight, glucose",
          label: "Métricas",
        },
        {
          src: "/work/coazon/10-metrics.jpg",
          alt: "COAZON metrics — blood-pressure trend with in-range band",
          label: "Tendencias",
        },
        {
          src: "/work/coazon/11-historial.jpg",
          alt: "COAZON blood-pressure history with in-range and out-of-range flags",
          label: "Historial",
        },
        {
          src: "/work/coazon/12-assistant.jpg",
          alt: "COAZON assistant — bounded answers about the care plan, never a diagnosis",
          label: "Asistente",
        },
        {
          src: "/work/coazon/13-report.jpg",
          alt: "COAZON report — 30-day adherence and patient data for the next visit",
          label: "Reporte",
        },
        {
          src: "/work/coazon/13b-ai-report.jpg",
          alt: "COAZON report — bounded AI summary for the next appointment",
          label: "Resumen IA",
        },
        {
          src: "/work/coazon/14-pdf.jpg",
          alt: "COAZON doctor PDF — 30-day adherence, vitals diary, medicines, and studies",
          label: "PDF",
          frame: "doc",
        },
        {
          src: "/work/coazon/15-estudios.jpg",
          alt: "COAZON studies and appointments",
          label: "Estudios",
        },
        {
          src: "/work/coazon/16-more.jpg",
          alt: "COAZON more — profile, alarm data, assistant, and language",
          label: "Más",
        },
      ],
    },
    featured: true,
  },
  {
    id: "rul",
    brief:
      "XGBoost predicts remaining useful life on NASA C-MAPSS turbofan data, with SHAP attribution per sensor. A FastAPI service sits behind a Streamlit fleet dashboard, and a LangGraph agent layer answers diagnostics in plain English and writes the maintenance briefing as a PDF.",
    title: "Engines Health Monitor",
    hook: "Fleet remaining-useful-life you can query in English — and download as a briefing.",
    problem:
      "A remaining-useful-life number in a notebook does not help a maintenance planner. They need a fleet view, a reason the model fired, a conversation they can have without opening Python, and a PDF they can take to the hangar.",
    body: "An end-to-end predictive-maintenance service on NASA's C-MAPSS turbofan degradation data. XGBoost estimates remaining useful life per engine; SHAP attributes the prediction back to individual sensors so a technician can see which reading moved. FastAPI serves inference; a Streamlit dashboard is the fleet surface. On top of that, a LangGraph multi-agent layer answers diagnostic questions in plain English and writes a ReportLab PDF maintenance briefing. The whole stack is deployed on Google Cloud Run, so the demo is the production shape, not a local screenshot. Test RMSE 16.74 cycles, MAE 12.33, R² 0.825.",
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
    gallery: {
      kind: "video",
      src: "/work/engines-health-monitor.mp4",
      poster: "/work/engines-health-monitor.jpg",
      caption: "Fleet dashboard walkthrough — remaining useful life, SHAP, and the briefing agent",
    },
    featured: true,
  },
  {
    id: "rag",
    title: "Personal Research Assistant",
    hook: "Chat with your PDFs. Every answer shows the snippet it came from.",
    problem:
      "A language model will happily invent a citation. For a thesis, or any document you are accountable for, that is unusable. The requirement was simple: if the answer is not in the file, the system has to say so, and if it is, you have to see the passage.",
    body: "A retrieval-augmented generation service: upload a PDF, chunk at 1000 tokens with 100-token overlap, embed with text-embedding-3-small, store in Chroma, retrieve through a MultiQueryRetriever, then answer with GPT-4o grounded only in those chunks — sources always visible. Built and tested against the HRV thesis itself, indexed to 149 segments covering features such as RMSSD and pNN50. FastAPI behind a Streamlit client, so the same pattern can sit in front of any document set, not only this one.",
    categories: ["NLP / LLMs", "Production"],
    metrics: [
      { value: "149", label: "indexed segments" },
      { value: "1000/100", label: "chunk / overlap" },
      { value: "100%", label: "answers cite source" },
    ],
    stack: ["FastAPI", "LangChain", "ChromaDB", "GPT-4o", "text-embedding-3-small", "Streamlit", "PyPDF"],
    repo: "https://github.com/DArmandoSalinas/RAG",
    gallery: {
      kind: "board",
      shots: [
        {
          src: "/work/rag/assistant.jpg",
          alt: "Personal Research Assistant — PDF indexed to 149 segments, answer grounded in the thesis",
          label: "Assistant",
          frame: "wide",
        },
      ],
    },
    featured: true,
  },
  {
    id: "adhd",
    title: "ADHD & Sex Prediction",
    hook: "Screening support with fairness and explanations, not a black box.",
    problem:
      "Female ADHD is historically underdiagnosed. A model trained on mixed data can look accurate in aggregate while quietly failing the group that already waits longest for a referral. The brief was to predict ADHD status from fMRI connectomes plus psychosocial data, and to report fairness by sex rather than hide it in a pooled score.",
    body: "1,213 participants. Mutual-information feature selection, KernelPCA and stratified splits feed a Random Forest for ADHD and Logistic Regression for sex, with the sex model tuned toward female recall. LIME and SHAP carry the explanations so a finding can be inspected, not only scored. Fairness is reported by sex on purpose. ADHD accuracy 82%, recall 0.88–0.90, AUC 0.866; sex recall 0.71 male / 0.48 female — the gap is on the page, not in an appendix.",
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
    problem:
      "UCI heart-disease data is four hospitals pooled as if they were one. Sentinel zeros in cholesterol and resting blood pressure look like measurements. A model that preprocesses outside the cross-validation loop will look excellent and fail the next clinic.",
    body: "920 patients across four sites. Sentinel zeros in cholesterol and resting blood pressure are mapped to NaN, and the ColumnTransformer lives inside cross-validation so nothing leaks from the held-out fold. HistGradientBoosting is selected on recall then F1, explained with SHAP and LIME. Leave-One-Site-Out then exposes the transportability gap the pooled score hides: test ROC-AUC 0.90, recall 87.3%, F1 0.85 — LOSO mean AUC 0.79, worst site ≈ 0.70. Top drivers: asymptomatic chest pain, oldpeak, exercise-induced angina.",
    categories: ["Healthcare AI"],
    metrics: [
      { value: "0.90", label: "test ROC-AUC" },
      { value: "87.3%", label: "recall" },
      { value: "0.85", label: "F1" },
      { value: "0.79", label: "LOSO mean AUC" },
    ],
    stack: ["scikit-learn", "HistGradientBoosting", "SHAP", "LIME", "ColumnTransformer"],
    repo: "https://github.com/DArmandoSalinas/HeartDisease-Predictor",
    note: "Educational. Not a validated clinical instrument. Worst-site AUC ≈ 0.70.",
    featured: true,
  },
  {
    id: "motor",
    brief:
      "Profiles two very different machines — an induction motor baselined across five speeds and a Haas Mini Mill baselined from operational trajectories — then applies machine-specific adaptive thresholds. Deliberately rule-based, not ML: every alarm traces back to the statistic that fired it, which is what a maintenance team can audit.",
    title: "Motor Performance Monitoring",
    hook: "Interpretable machine health from vibration and temperature — and a first place for it.",
    problem:
      "A plant already has a preventive-maintenance procedure. The useful question is not 'can we train a neural net on this motor' — it is how you improve a procedure people already run, on two machines that do not sound the same, without an alarm they cannot explain.",
    body: "An industrial preventive-maintenance system built around live vibration and temperature. It profiles two very different machines — a Sumitomo three-phase induction motor baselined across five speeds (50/60/75/90/100%) and a Haas Mini Mill baselined from combined operational trajectories — then applies machine-specific adaptive thresholds, because a milling machine is legitimately noisier than a motor. A threaded serial reader with auto-reconnection feeds the sensors into 0–100 health scores in a Streamlit dashboard, with replay mode for demos without hardware and live packet/FPS diagnostics. Deliberately rule-based rather than ML: every alarm traces back to the statistic that fired it, which is what a maintenance team can act on and audit. First place at Tec Expo Ingenierías; recognized by Rockwell Automation for contribution to an integration project using their technology (Nuevo León, December 2025).",
    categories: ["Predictive Maintenance"],
    metrics: [
      { value: "1st", label: "Tec Expo Ingenierías" },
      { value: "2", label: "machine types profiled" },
      { value: "5", label: "speed baselines" },
      { value: "0–100", label: "health score" },
    ],
    stack: ["Python", "Streamlit", "Signal processing", "Serial / IoT", "Statistical thresholds"],
    repo: "https://github.com/DArmandoSalinas/Motor-performance-prediction",
    video: "https://www.youtube.com/watch?v=-XtzsPBqdcY",
    note: "First place at Tec Expo Ingenierías, the Tecnológico de Monterrey engineering project competition. Recognized by Rockwell Automation for contribution to an integration project using their technology (Nuevo León, Dec 2025).",
    gallery: {
      kind: "board",
      youtube: "https://www.youtube.com/watch?v=-XtzsPBqdcY",
      caption: "Live motor health monitor — vibration, temperature, and the 0–100 score",
      shots: [
        {
          src: "/work/motor/poster.jpg",
          alt: "Expo Ingenierías poster — predictive maintenance of a motor through accelerometer and temperature sensors",
          label: "Poster",
          frame: "doc",
        },
        {
          src: "/work/motor/expo-first.jpg",
          alt: "First place certificate — Tec Expo Ingenierías AD2025, research and improvement proposals",
          label: "1er lugar",
          frame: "doc",
        },
      ],
    },
    featured: true,
  },
  {
    id: "hrv",
    brief:
      "MSc thesis. Butterworth filtering and IBI extraction feed time, frequency and non-linear HRV features, normalized against a calibration baseline. Validated leave-one-participant-out across 62 people, so the model has to generalize to a stranger rather than flatter a pooled score.",
    title: "HRV Emotion Recognition",
    hook: "From raw PPG to emotion models under leave-one-participant-out.",
    problem:
      "Emotion from the face is a solved demo. Emotion from the pulse, on a stranger the model has never seen, is a harder and more honest question — and the one a wearable actually has to answer.",
    body: "MSc thesis at the University of Essex. Raw photoplethysmography is Butterworth-filtered; inter-beat intervals are extracted; time-domain, frequency-domain (Welch PSD) and non-linear HRV features — including Poincaré descriptors — are computed and normalized against a per-subject calibration baseline. Mutual-information selection, nested grid search and leave-one-participant-out / leave-one-group-out validation compare Random Forest, XGBoost and SVR for continuous arousal. Best result: Pearson r = 0.5975, RMSE 0.154 ± 0.032, across 62 participants. LOPO is the point: the model has to work on a person it was not trained on.",
    categories: ["Healthcare AI"],
    metrics: [
      { value: "0.5975", label: "Pearson r (arousal)" },
      { value: "0.154", label: "RMSE ± 0.032" },
      { value: "62", label: "participants" },
    ],
    stack: ["Python", "NeuroKit2", "SciPy", "scikit-learn", "Signal processing"],
    repo: "https://github.com/DArmandoSalinas/HR_DiegoSalinas",
    note: "MSc Artificial Intelligence thesis, University of Essex — Random Forest, LOPO validated. Awarded Distinction.",
    featured: true,
  },
  {
    id: "wellhave",
    title: "WellHave",
    hook: "Daily pulse in; a risk level and a recovery plan out.",
    problem:
      "Burnout tools either dump a questionnaire score or generate open-ended advice with no grounding. Neither is something a person can act on the same day.",
    body: "A three-tier classifier sorts a daily pulse into low, moderate or high burnout risk, then GPT-4o through LangChain turns that signal into a concrete recovery plan — not a pep talk. FastAPI backend, React Native (Expo) client, Supabase for state. The model decides the tier; the language model is only allowed to coach inside it.",
    categories: ["Healthcare AI", "NLP / LLMs"],
    metrics: [
      { value: "3", label: "burnout tiers" },
      { value: "Mobile", label: "Expo client" },
    ],
    stack: ["FastAPI", "GPT-4o", "LangChain", "React Native", "Expo", "Supabase"],
    repo: "https://github.com/DArmandoSalinas/Wellhave",
    featured: true,
  },

  {
    id: "segmentation",
    title: "Advanced Contact Segmentation",
    hook: "Clustering that turns a contact list into an engagement strategy.",
    problem:
      "A flat contact list is not a strategy. Interius / APREU needed cohorts they could actually speak to — by engagement, by geography crossed with engagement, and by channel — without waiting on a data team for each pull.",
    body: "Proof of concept for Interius / APREU: unsupervised segments by engagement, geography × engagement, and channel activity, packaged as a Streamlit app, containerized and deployed to Google Cloud Run so stakeholders could open it themselves. The same 'notebook to Cloud Run' shape as the later RUL dashboard.",
    categories: ["Production"],
    stack: ["scikit-learn", "Clustering", "Streamlit", "Docker", "Cloud Run"],
    repo: "https://github.com/DArmandoSalinas/Advanced_Segmentation_ST",
    featured: false,
  },
  {
    id: "housing",
    title: "California House Price Estimator",
    hook: "Notebook to endpoint, without the gap in between.",
    body: "Exploratory analysis leads into a RandomForest pipeline, served behind a FastAPI /predict route with a responsive HTML frontend on top. The exercise is the missing middle of most coursework: the trained model is an API, not a cell at the bottom of a notebook.",
    categories: ["Forecasting", "Production"],
    stack: ["scikit-learn", "RandomForest", "FastAPI", "HTML"],
    repo: "https://github.com/DArmandoSalinas/California-House-Price-Estimator",
    featured: false,
  },
  {
    id: "rossmann",
    title: "Rossmann Sales Forecasting",
    hook: "1,115 stores, a six-week horizon, one feed-forward net.",
    body: "A 128-64-32 MLP with 0.3 dropout, Adam and early stopping forecasts daily sales across a six-week window for 1,115 Rossmann stores, trained on engineered calendar, promotion and store features. RMSE ~0.06 on this project's engineered feature scale (the official Kaggle metric is RMSPE — noted so the number is not over-read).",
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
    body: "Bag-of-words with stemming feeds an XGBoost classifier, validated with stratified K-fold across six emotion classes on roughly 416,000 tweets. 87.5% accuracy. A classical NLP baseline — useful as the 'before transformers' control, and as proof the same boosting family used on sensors also holds on text.",
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
    body: "SVD collaborative filtering, TF-IDF content similarity, and a hybrid blend of the two, wrapped in a Flask interface. SVD RMSE 0.477 against a 3.624 baseline — the collaborative half is doing the work; the content half covers the cold-start the SVD cannot.",
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
    body: "An interactive clinical-education web tool that guides students through polytrauma assessment and trauma-care decision paths. Built for teaching, not for the bedside: TypeScript on Vercel, open so a cohort can walk the same case. Explicitly not a medical device.",
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
    body: "Edge following and obstacle avoidance on a TurtleBot, with fuzzy rules and PID control acting on live sensor readings. Intelligent Systems and Robotics coursework at Essex — the control-theory half of the mechatronics degree, running on a robot rather than in Simulink.",
    categories: ["Robotics"],
    stack: ["Python", "ROS", "Fuzzy logic", "PID"],
    repo: "https://github.com/DArmandoSalinas/PID-and-Fuzzy-logic-for-Intelligent-Systems-and-Robotics",
    featured: false,
  },
  {
    id: "rocket",
    title: "Rocket Landing Neural Network",
    hook: "A neural network written from scratch, no framework.",
    body: "Forward pass, backpropagation, Xavier initialization and input normalization implemented by hand in NumPy, then flown against simulated landings. The point of the exercise is that the later TensorFlow work is not magic — the update rule was written out.",
    categories: ["Robotics"],
    stack: ["Python", "NumPy", "Backpropagation"],
    repo: "https://github.com/DArmandoSalinas/RocketLanding_NeuralNetwork",
    featured: false,
  },
];

/**
 * The five rows at the top of Work, in reading order: two founder products, a
 * production ML service, an awarded industrial system, and the research thesis.
 * Ordered by what a hiring manager needs first, not by date.
 */
export const SPOTLIGHT_IDS = ["armatus", "coazon", "rul", "motor", "rag", "hrv"] as const;

const byId = new Map(projects.map((p) => [p.id, p]));

export const spotlightProjects = SPOTLIGHT_IDS.map((id) => byId.get(id)!);
export const featuredProjects = projects.filter((p) => p.featured);
export const gridProjects = projects;

export type EarlierItem = { title: string; body: string; url?: string; tag: string };

export const earlierWork: { group: string; items: EarlierItem[] }[] = [
  {
    group: "Software & web",
    items: [
      {
        title: "CS50x — DIAR Notices",
        body: "Flask notice-distribution app built as the Harvard CS50x final project — the certificate requires the project as well as the ten problem sets.",
        url: "https://github.com/DArmandoSalinas/CS50-Certification-Projects",
        tag: "C · Python · SQL · JS",
      },
      {
        title: "LegRoutine",
        body: "A micro-site delivering a focused leg routine for runners. Small, shipped, still live.",
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
        body: "Two robots and a positioner simulated in RobotStudio; proposed a 31-second cycle time for the cell.",
        tag: "RobotStudio",
      },
      {
        title: "John Deere moldboard fixture",
        body: "Fixture design and stress-relief study for moldboard manufacturing.",
        tag: "Manufacturing",
      },
      {
        title: "Greenhouse LED control",
        body: "Closed-loop lighting control modelled in Simulink — the MATLAB Onramp put to work on a real plant.",
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
