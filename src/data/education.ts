export type Education = {
  num: string;
  degree: string;
  school: string;
  period: string;
  location?: string;
  distinction?: string;
  detail: string;
  coursework: string[];
  /** Degree certificate. Drop the file into /public/certs/ to light it up. */
  certificate?: string;
  certificateAlt?: string;
};

export const education: Education[] = [
  {
    num: "01",
    degree: "MSc Artificial Intelligence",
    school: "University of Essex",
    period: "2024 — 2025",
    location: "Colchester, UK",
    distinction: "With Distinction",
    detail:
      "Thesis: A Machine Learning Approach for Emotion Recognition Using Heart Rate Variability.",
    coursework: [
      "Machine Learning",
      "Intelligent Systems and Robotics",
      "Data Science and Decision Making",
      "Neural Networks",
      "Natural Language Engineering",
    ],
    certificate: "/certs/essex-msc.jpg",
    certificateAlt: "MSc Artificial Intelligence degree certificate, University of Essex",
  },
  {
    num: "02",
    degree: "B.S. Mechatronics Engineering",
    school: "Tecnológico de Monterrey",
    period: "2021 — 2025",
    location: "Monterrey, MX",
    detail:
      "The hardware half of the foundation: control, automation and the physics under the signal.",
    coursework: [
      "Computational thinking",
      "Materials and manufacturing",
      "Industrial automation",
      "Control systems",
      "Robot design",
    ],
  },
  {
    num: "03",
    degree: "Machine Learning Specialization",
    school: "DeepLearning.AI & Stanford Online",
    period: "2024",
    detail:
      "Supervised and unsupervised learning, neural networks, recommenders and reinforcement learning.",
    coursework: ["Supervised learning", "Neural networks", "Recommenders", "Reinforcement learning"],
  },
];

export const allDiplomaImages = education
  .map((e) => e.certificate)
  .filter((c): c is string => Boolean(c));
