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
    group: "Professional",
    blurb: "Vendor-verified, issued against a live product surface.",
    items: [
      {
        id: "sap-genai",
        title: "SAP Certified — SAP Generative AI Developer",
        issuer: "SAP",
        year: "2026",
        takeaway:
          "Verifies SAP Business AI and extending BTP applications with leading LLMs through SAP AI Core, AI Launchpad and the generative AI hub.",
        image: "/certs/sap-genai.jpg",
        featured: true,
      },
      {
        id: "ibm-sql",
        title: "Databases and SQL for Data Science with Python",
        issuer: "IBM",
        year: "Feb 2026",
        takeaway: "SQL against real datasets, driven from Python.",
        url: "https://coursera.org/verify/8PGNB9D29558",
        image: "/certs/ibm-sql.jpg",
      },
      {
        id: "google-analytics",
        title: "Google Analytics",
        issuer: "Google Digital Academy",
        year: "2025",
        takeaway: "Measurement, reporting and behavioural analysis of product traffic.",
        image: "/certs/google-analytics.jpg",
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
          "Supervised learning, neural networks, unsupervised learning, recommenders and reinforcement learning — in Python.",
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
        takeaway: "Wrapping a trained model in an interactive Streamlit interface.",
        url: "https://coursera.org/verify/M9UAASE87OKR",
        image: "/certs/streamlit-ml-app.jpg",
      },
      {
        id: "breast-cancer-ml",
        title: "Breast Cancer Prediction Using Machine Learning",
        issuer: "Coursera Project Network",
        year: "May 2025",
        takeaway: "Guided project building and evaluating a classifier on clinical data.",
        url: "https://coursera.org/verify/BLOTYLBB1SRA",
        image: "/certs/breast-cancer-ml.jpg",
      },
      {
        id: "supervised-ml",
        title: "Supervised Machine Learning: Regression and Classification",
        issuer: "Stanford Online & DeepLearning.AI",
        year: "Aug 2024",
        takeaway: "NumPy and scikit-learn for linear and logistic regression.",
        url: "https://coursera.org/verify/DC187SZOIW5H",
        image: "/certs/supervised-ml.jpg",
      },
      {
        id: "advanced-algorithms",
        title: "Advanced Learning Algorithms",
        issuer: "Stanford Online & DeepLearning.AI",
        year: "Sep 2024",
        takeaway: "Multi-class networks in TensorFlow, regularization, trees and ensembles.",
        url: "https://coursera.org/verify/FUWQZMN34XQJ",
        image: "/certs/advanced-learning-algorithms.jpg",
      },
      {
        id: "unsupervised-rl",
        title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
        issuer: "Stanford Online & DeepLearning.AI",
        year: "Sep 2024",
        takeaway: "Clustering, dimensionality reduction, recommenders and RL agents.",
        url: "https://coursera.org/verify/IYWIZMHDPX45",
        image: "/certs/unsupervised-rl.jpg",
      },
      {
        id: "ai-for-everyone",
        title: "AI For Everyone",
        issuer: "DeepLearning.AI",
        year: "Aug 2024",
        takeaway: "How AI projects are scoped, staffed and shipped inside an organization.",
        url: "https://coursera.org/verify/FNO9TJD505E0",
        image: "/certs/ai-for-everyone.jpg",
      },
      {
        id: "intro-genai",
        title: "Introduction to Generative AI",
        issuer: "Google Cloud",
        year: "Apr 2024",
        takeaway: "Where generative models diverge from classical machine learning.",
        url: "https://coursera.org/account/accomplishments/records/4EA6G8XL52NZ",
        image: "/certs/intro-generative-ai.jpg",
      },
      {
        id: "cs50x",
        title: "CS50's Introduction to Computer Science",
        issuer: "Harvard University",
        year: "Dec 2022",
        takeaway: "C, Python, SQL, HTML, CSS, JavaScript and Flask — from memory to web.",
        url: "https://cs50.harvard.edu/certificates/c4e41b00-a724-43da-84b3-18e64c9fd221",
        image: "/certs/cs50x.jpg",
      },
      {
        id: "kaggle-ml",
        title: "Intro to Machine Learning",
        issuer: "Kaggle",
        year: "2024",
        takeaway: "Model building and validation on real-estate prediction notebooks.",
        image: "/certs/kaggle-intro-ml.jpg",
      },
      {
        id: "kaggle-python",
        title: "Python",
        issuer: "Kaggle",
        year: "2023",
        takeaway: "Functions, conditionals, lists, loops, strings, dictionaries and libraries.",
        image: "/certs/kaggle-python.jpg",
      },
      {
        id: "matlab-onramp",
        title: "MATLAB Onramp",
        issuer: "MathWorks",
        year: "Mar 2022",
        takeaway: "Vectorized computation, scripting and plotting in MATLAB.",
        image: "/certs/matlab-onramp.jpg",
      },
      {
        id: "mit-nanolab",
        title: "2023 NanoLab — online portion",
        issuer: "MIT · Tec-MIT Nanotechnology",
        year: "Mar 2023",
        takeaway: "Cleanroom process flow, device fabrication and fabrication data analysis.",
        image: "/certs/mit-nanolab.jpg",
      },
    ],
  },
  {
    group: "Additional",
    blurb: "Outside the engineering track, kept for completeness.",
    items: [
      {
        id: "qpr",
        title: "QPR Suicide Prevention Gatekeeper",
        issuer: "Tecnológico de Monterrey",
        year: "Sep 2022",
        takeaway: "Question, Persuade, Refer — peer intervention training.",
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
