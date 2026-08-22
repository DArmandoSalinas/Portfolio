export type Cert = {
  id: string;
  title: string;
  issuer: string;
  year: string;
  takeaway: string;
  url?: string;
  /** File to drop into /public/certs/. Rendered as a drop-zone until it exists. */
  image: string;
  featured?: boolean;
};

export type CertGroup = { group: string; blurb: string; items: Cert[] };

export const certifications: CertGroup[] = [
  {
    group: "Awards & Recognition",
    blurb: "Judged competition results and industry recognition.",
    items: [
      {
        id: "rockwell",
        title: "Rockwell Automation — Integration Project Recognition",
        issuer: "Rockwell Automation · Tec de Monterrey",
        year: "Dec 2025",
        takeaway:
          "Certificate of participation from Rockwell Automation recognizing outstanding contribution to an industrial integration project built on their automation stack. The underlying work — a live vibration and temperature health monitor for a Sumitomo induction motor and a Haas Mini Mill — took first place at Tec Expo Ingenierías, the end-of-semester competition of the School of Engineering and Sciences at Tecnológico de Monterrey Campus Monterrey, where 120+ student projects are judged by faculty and industry. Rockwell is one of the world's largest industrial-automation vendors; the recognition sits on a project that a maintenance team can audit, not a slide deck.",
        image: "/certs/rockwell-award.jpg",
      },
    ],
  },
  {
    group: "Professional",
    blurb: "Vendor-verified, issued against a live product surface.",
    items: [
      {
        id: "sap-genai",
        title: "SAP Certified Associate — SAP Generative AI Developer",
        issuer: "SAP",
        year: "2026",
        takeaway:
          "Official SAP credential (C_AIG) confirming the skills to extend SAP BTP applications with leading large language models through SAP AI Core, SAP AI Launchpad and the generative AI hub. The exam is performance-based: candidates complete real configuration and prompting tasks in a live Launchpad tenant rather than answering multiple-choice theory. Coverage is weighted toward the generative AI hub (prompt templates, orchestration, model selection), LLM fundamentals and application techniques, AI Core workflows (train, serve, operate), and SAP Business AI strategy. This is the same stack used in the current SAP role for automated technical fault reporting.",
        image: "/certs/sap-genai.jpg",
        featured: true,
      },
      {
        id: "ibm-sql",
        title: "Databases and SQL for Data Science with Python",
        issuer: "IBM · Coursera",
        year: "Feb 2026",
        takeaway:
          "IBM's practical SQL course for data science: relational-database concepts, DDL and DML, filtering, grouping and joins, then accessing cloud databases from Jupyter with Python (SQL magic and sqlite3). Labs run against live cloud instances; the capstone analyses real open data (City of Chicago datasets) rather than toy tables. Optional honors material covers views, transactions and stored procedures — the layer between a notebook and a warehouse.",
        url: "https://coursera.org/verify/8PGNB9D29558",
        image: "/certs/ibm-sql.jpg",
      },
      {
        id: "google-analytics",
        title: "Google Analytics Certification",
        issuer: "Google Skillshop",
        year: "Oct 2025",
        takeaway:
          "Official Google Analytics 4 Individual Qualification via Skillshop. Validates setup of GA4 properties, the event-based data model that replaced Universal Analytics, conversion tracking, standard reports, and using behavioural data to inform product decisions. The exam is 50 questions in 75 minutes with an 80% passing score; the credential is valid for 12 months. Credential ID 162337721, valid through October 2026.",
        image: "/certs/google-analytics.jpg",
      },
      {
        id: "ga4-deep-dive",
        title: "Dive Deeper into GA4 Data and Reports",
        issuer: "Google",
        year: "Oct 2025",
        takeaway:
          "Follow-on Google training beyond the default GA4 dashboards: Explorations, segments, comparisons and custom reporting so product traffic can be sliced by cohort, path and event rather than by a canned overview. Complements the Skillshop certification with the analysis layer hiring managers actually ask for — not just 'is Analytics installed', but 'what did users do'.",
        image: "/certs/ga4-deep-dive.jpg",
      },
    ],
  },
  {
    group: "Specialization",
    blurb: "Multi-course programs with a graded capstone.",
    items: [
      {
        id: "ml-spec",
        title: "Machine Learning Specialization",
        issuer: "Stanford Online & DeepLearning.AI",
        year: "Sep 2024",
        takeaway:
          "Andrew Ng's three-course specialization — the rebuilt, Python-based successor to the original Stanford ML course. Supervised learning (linear and logistic regression, regularization) in NumPy and scikit-learn; neural networks, decision trees and ensembles in TensorFlow; then unsupervised learning, recommenders and reinforcement learning. Emphasis throughout on evaluation, a data-centric approach to improving performance, and the practices used to ship models rather than only derive them. The three constituent courses are listed individually below, each with its own verified certificate.",
        url: "https://coursera.org/verify/TXOIBDQHPBCO",
        image: "/certs/ml-specialization.jpg",
      },
    ],
  },
  {
    group: "Courses",
    blurb: "The individual units behind the specializations, plus foundations.",
    items: [
      {
        id: "streamlit-ml-app",
        title: "Build a Machine Learning Web App with Streamlit and Python",
        issuer: "Coursera Project Network",
        year: "Jul 2025",
        takeaway:
          "Guided project covering the last mile most notebooks skip: wrapping a trained model in an interactive Streamlit interface, handling user input, displaying predictions, and structuring a small app a stakeholder can actually open. Directly used later in the RUL fleet dashboard, the motor-health monitor, and the Interius segmentation MVPs shipped on Cloud Run.",
        url: "https://coursera.org/verify/M9UAASE87OKR",
        image: "/certs/streamlit-ml-app.jpg",
      },
      {
        id: "breast-cancer-ml",
        title: "Breast Cancer Prediction Using Machine Learning",
        issuer: "Coursera Project Network",
        year: "May 2025",
        takeaway:
          "Guided clinical-classification project: train and evaluate a classifier on diagnostic features, report accuracy with an appropriate split, and treat the result as screening support rather than a diagnosis. The same discipline — leak-free preprocessing, recall-aware metrics, an explicit 'not a device' boundary — carries into the heart-disease and ADHD research projects on this site.",
        url: "https://coursera.org/verify/BLOTYLBB1SRA",
        image: "/certs/breast-cancer-ml.jpg",
      },
      {
        id: "supervised-ml",
        title: "Supervised Machine Learning: Regression and Classification",
        issuer: "Stanford Online & DeepLearning.AI",
        year: "Aug 2024",
        takeaway:
          "Course 1 of the Machine Learning Specialization. Linear regression with multiple features, vectorization, feature scaling and polynomial features; logistic regression for binary classification; overfitting and regularization. Implemented in Python with NumPy and scikit-learn, with the math walked through after the intuition so the later healthcare and forecasting models are not black boxes.",
        url: "https://coursera.org/verify/DC187SZOIW5H",
        image: "/certs/supervised-ml.jpg",
      },
      {
        id: "advanced-algorithms",
        title: "Advanced Learning Algorithms",
        issuer: "Stanford Online & DeepLearning.AI",
        year: "Sep 2024",
        takeaway:
          "Course 2 of the specialization. Multi-class neural networks trained in TensorFlow, bias/variance diagnosis, regularization and dropout, then decision trees, random forests and XGBoost — the family of models behind the RUL monitor, the emotion-recognition thesis, and the text-emotion classifier. Also covers the practical loop of iterating on data and error analysis rather than only on architecture.",
        url: "https://coursera.org/verify/FUWQZMN34XQJ",
        image: "/certs/advanced-learning-algorithms.jpg",
      },
      {
        id: "unsupervised-rl",
        title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
        issuer: "Stanford Online & DeepLearning.AI",
        year: "Sep 2024",
        takeaway:
          "Course 3 of the specialization. K-means clustering and anomaly detection; collaborative filtering and content-based recommenders; then reinforcement learning — states, actions, rewards, the Bellman equation and Q-learning. The clustering content is what later became the Interius contact-segmentation MVP; the recommender material is what sits under the hybrid movie system.",
        url: "https://coursera.org/verify/IYWIZMHDPX45",
        image: "/certs/unsupervised-rl.jpg",
      },
      {
        id: "ai-for-everyone",
        title: "AI For Everyone",
        issuer: "DeepLearning.AI",
        year: "Aug 2024",
        takeaway:
          "Andrew Ng's non-technical course on how AI projects are actually scoped inside an organization: what is and is not a machine-learning problem, build-versus-buy, data strategy, team roles, and the ethical and workflow questions that decide whether a model ships. Useful as the briefing layer around the technical work — how to talk to a stakeholder without overselling a notebook.",
        url: "https://coursera.org/verify/FNO9TJD505E0",
        image: "/certs/ai-for-everyone.jpg",
      },
      {
        id: "intro-genai",
        title: "Introduction to Generative AI",
        issuer: "Google Cloud",
        year: "Apr 2024",
        takeaway:
          "Google Cloud's foundation course on how generative models differ from classical discriminative machine learning: foundation models, prompt-based interaction, and where the technology is already used in products. The conceptual split — generate versus classify — is the one that later structures the SAP generative-AI work and the bounded AI layer in COAZON (read and summarize, never diagnose).",
        url: "https://coursera.org/account/accomplishments/records/4EA6G8XL52NZ",
        image: "/certs/intro-generative-ai.jpg",
      },
      {
        id: "cs50x",
        title: "CS50's Introduction to Computer Science",
        issuer: "Harvard University",
        year: "Dec 2022",
        takeaway:
          "Harvard's CS50x: the intellectual enterprises of computer science and the art of programming. Abstraction, algorithms, data structures, memory, resource management, security, software engineering and web programming, taught through C, then Python, SQL, HTML/CSS, JavaScript and Flask. Certificate requires at least 70% on each of ten problem sets, eight labs, and a final project. The final project here was DIAR Notices, a Flask notice-distribution app, listed under earlier work.",
        url: "https://cs50.harvard.edu/certificates/c4e41b00-a724-43da-84b3-18e64c9fd221",
        image: "/certs/cs50x.jpg",
      },
      {
        id: "kaggle-ml",
        title: "Intro to Machine Learning",
        issuer: "Kaggle",
        year: "Apr 2024",
        takeaway:
          "Kaggle's applied introduction: decision trees, underfitting versus overfitting, train/validation splits, mean absolute error, and random forests, practiced on real-estate prediction notebooks. Short, notebook-native, and the first place the 'always hold out a validation set' habit was drilled before the larger Coursera specialization.",
        image: "/certs/kaggle-intro-ml.jpg",
      },
      {
        id: "kaggle-python",
        title: "Python",
        issuer: "Kaggle",
        year: "2023",
        takeaway:
          "Kaggle's Python course: functions, conditionals, lists, loops, strings, dictionaries, and working with external libraries. The language layer everything else on this page is written in — completed as a foundation before the machine-learning track.",
        image: "/certs/kaggle-python.jpg",
      },
      {
        id: "matlab-onramp",
        title: "MATLAB Onramp",
        issuer: "MathWorks",
        year: "Mar 2022",
        takeaway:
          "MathWorks' interactive Onramp (~2 hours): the MATLAB desktop and editor, vectors and matrices, indexing, array calculations, function calls, data import, logical arrays, and plotting, assessed live in the browser. The same environment later used for the greenhouse LED closed-loop model in Simulink and other mechatronics coursework — the numerical-computing half of the engineering degree.",
        image: "/certs/matlab-onramp.jpg",
      },
      {
        id: "mit-nanolab",
        title: "2023 NanoLab — online portion",
        issuer: "MIT · Tec-MIT Nanotechnology Program",
        year: "Mar 2023",
        takeaway:
          "Online portion of nanoLab, a core initiative of the MIT–Tecnológico de Monterrey Program in Nanoscience and Nanotechnology (established 2014, hosted at MIT.nano). Coverage includes cleanroom process flow, micro- and nanofabrication techniques, device fabrication, and analysing fabrication data. The virtual class has reached more than a thousand Tec students; a smaller cohort continues to in-person workshops at MIT. This certificate is the online portion — process literacy, not a claim of having run tools in Cambridge.",
        image: "/certs/mit-nanolab.jpg",
      },
    ],
  },
  {
    group: "Additional",
    blurb: "Outside the engineering track, kept because it is part of how the work is done.",
    items: [
      {
        id: "qpr",
        title: "QPR Suicide Prevention Gatekeeper",
        issuer: "Tecnológico de Monterrey · QPR Institute",
        year: "Sep 2022",
        takeaway:
          "Question, Persuade, Refer — evidence-based gatekeeper training developed by Dr. Paul Quinnett and the QPR Institute, delivered at Tec de Monterrey. Analogous to CPR: recognize warning signs of a suicide crisis, ask directly, persuade the person to accept help, and refer them to care. Listed because several projects on this page touch health and because a professional who ships tools around people's bodies should be trained to notice distress, not only to model it.",
        image: "/certs/qpr.jpg",
      },
    ],
  },
];

export const featuredCert = certifications
  .flatMap((g) => g.items)
  .find((c) => c.featured)!;

export const certCount = certifications.reduce((n, g) => n + g.items.length, 0);

export const allCertImages = certifications.flatMap((g) => g.items.map((c) => c.image));
