export const site = {
  name: "Diego Armando Salinas Lugo",
  shortName: "Diego Salinas",
  displayName: "Diego Armando Salinas",
  role: "AI & Machine Learning Engineer",
  nameLines: ["Diego Armando", "Salinas"],
  /**
   * Two beats: what ships, then the path that made it possible.
   */
  bio: [
    "I build machine-learning systems end to end: the model, the API, the interface, and the cloud they run on.",
    "I studied mechatronics at Tecnológico de Monterrey and an MSc in Artificial Intelligence with Distinction at Essex. I work on Generative AI at SAP, and I founded ARMATUS, a training coach on iOS.",
  ],
  location: "Monterrey, MX",
  workAuth: "Open to US roles and project work — TN visa eligible",
  email: "salinas.diegoarmando03@gmail.com",
  phone: "+52 81 1988 3223",
  phoneHref: "+528119883223",
  url: "https://www.diegoarmandosalinas.site",
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
  nav: [
    { label: "Work", href: "#work" },
    { label: "Experience", href: "#experience" },
    { label: "Credentials", href: "#credentials" },
    { label: "Contact", href: "#contact" },
  ],
  proof: [
    { label: "SAP", detail: "Generative AI in production", meta: "Current role" },
    { label: "ARMATUS", detail: "Founder · shipped on iOS", meta: "Current" },
    { label: "MSc Artificial Intelligence", detail: "University of Essex", meta: "Distinction" },
    { label: "Monterrey, MX", detail: "Open to roles and project work", meta: "TN visa eligible" },
  ],
} as const;

export type Site = typeof site;
