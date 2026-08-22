export type Education = {
  degree: string;
  school: string;
  period: string;
  location?: string;
  distinction?: string;
  detail: string;
  coursework: string[];
  /** Degree certificate under /public. Rendered only when the file exists. */
  certificate?: string;
  certificateAlt?: string;
};

/**
 * Degrees only. The Machine Learning Specialization lives in
 * `certifications.ts`, where a graded online program belongs.
 */
export const education: Education[] = [
  {
    degree: "MSc Artificial Intelligence",
    school: "University of Essex",
    period: "2024 — 2025",
    location: "Colchester, UK",
    distinction: "Distinction",
    detail:
      "Thesis: a machine-learning approach to emotion recognition from heart-rate variability, built end-to-end from raw PPG through feature engineering to leave-one-participant-out validation. Coursework covered machine learning, neural networks, natural language engineering, intelligent systems and robotics, and data science for decision-making. Awarded Distinction.",
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
    degree: "B.S. Mechatronics Engineering",
    school: "Tecnológico de Monterrey",
    period: "2021 — 2025",
    location: "Monterrey, MX",
    detail:
      "The hardware half of the foundation: control systems, industrial automation, robot design, materials and manufacturing, and the physics under a sensor reading. This is why later ML work starts from the signal — vibration, temperature, PPG — rather than from a cleaned CSV.",
    coursework: [
      "Control systems",
      "Industrial automation",
      "Robot design",
      "Materials and manufacturing",
      "Computational thinking",
    ],
    certificate: "/education/titulo-mecatronica-limpio.png",
    certificateAlt:
      "Ingeniero en Mecatrónica degree certificate, Tecnológico de Monterrey",
  },
];

export const allDiplomaImages = education
  .map((e) => e.certificate)
  .filter((c): c is string => Boolean(c));
