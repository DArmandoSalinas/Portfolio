export const site = {
  name: "Diego Armando Salinas Lugo",
  shortName: "Diego Salinas",
  role: "AI & Machine Learning Engineer",
  headline: "Systems that don't improvise.",
  headlineLines: ["Systems that", "don't improvise."],
  subhead:
    "MSc AI with Distinction · Generative AI at SAP · Founder of ARMATUS",
  location: "Monterrey, MX",
  workAuth: "Open to US roles — TN visa eligible",
  email: "salinas.diegoarmando03@gmail.com",
  phone: "+52 81 1988 3223",
  phoneHref: "+528119883223",
  url: "https://diegosalinas.vercel.app",
  links: {
    github: "https://github.com/DArmandoSalinas",
    linkedin: "https://www.linkedin.com/in/diego-armando-salinas-062599248/",
    armatus: "https://www.armatus.app/",
    armatusCoach: "https://armatus-web-coach.vercel.app",
  },
  cv: "/resume/Diego-Armando-Salinas-Lugo-CV.pdf",
  languages: [
    { name: "Spanish", level: "Native" },
    { name: "English", level: "Professional" },
    { name: "German", level: "Basic" },
  ],
  about:
    "AI & ML engineer who builds full systems, not notebooks. Mechatronics at Tecnológico de Monterrey plus an MSc in Artificial Intelligence with Distinction at the University of Essex. Now at SAP designing Generative AI for technical fault reporting, and founder of ARMATUS — a production iOS coach that architects training weeks from profile, readiness and logged evidence. Work spans signal processing, explainable clinical ML, predictive maintenance, RAG and deployed FastAPI / Streamlit / Cloud Run products.",
  nav: [
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Certifications", href: "#certifications" },
    { label: "Resume", href: "#resume" },
    { label: "Contact", href: "#contact" },
  ],
  protocol: [
    { num: "01", label: "SAP", note: "Generative AI in production" },
    { num: "02", label: "ARMATUS", note: "Founder · shipped iOS" },
    { num: "03", label: "Research", note: "MSc AI, Distinction" },
    { num: "04", label: "Built", note: "17 shipped systems" },
  ],
} as const;

export type Site = typeof site;
