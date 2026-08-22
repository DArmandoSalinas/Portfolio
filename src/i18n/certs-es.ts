import type { CertGroup } from "@/data/certifications";

export const certificationsEs: CertGroup[] = [
  {
    group: "Premios y reconocimiento",
    blurb: "Resultados de competencia juzgada y reconocimiento de industria.",
    items: [
      {
        id: "rockwell",
        title: "Rockwell Automation — Reconocimiento de proyecto de integración",
        issuer: "Rockwell Automation · Tec de Monterrey",
        year: "dic 2025",
        takeaway:
          "Constancia de participación de Rockwell Automation que reconoce una contribución destacada a un proyecto de integración industrial construido sobre su stack de automatización. El trabajo de fondo — un monitor en vivo de vibración y temperatura para un motor de inducción Sumitomo y un Haas Mini Mill — obtuvo primer lugar en Tec Expo Ingenierías, la competencia de fin de semestre de la Escuela de Ingeniería y Ciencias del Tecnológico de Monterrey Campus Monterrey, donde más de 120 proyectos estudiantiles son juzgados por facultad e industria. Rockwell es uno de los mayores proveedores de automatización industrial del mundo; el reconocimiento se sienta sobre un proyecto que un equipo de mantenimiento puede auditar, no sobre un slide deck.",
        image: "/certs/rockwell-award.jpg",
      },
    ],
  },
  {
    group: "Profesional",
    blurb: "Verificado por el vendor, emitido contra una superficie de producto en vivo.",
    items: [
      {
        id: "sap-genai",
        title: "SAP Certified Associate — SAP Generative AI Developer",
        issuer: "SAP",
        year: "2026",
        takeaway:
          "Credencial oficial de SAP (C_AIG) que confirma las habilidades para extender aplicaciones de SAP BTP con grandes modelos de lenguaje a través de SAP AI Core, SAP AI Launchpad y el generative AI hub. El examen es basado en desempeño: los candidatos completan tareas reales de configuración y prompting en un tenant vivo de Launchpad, no teoría de opción múltiple. La cobertura se pondera hacia el generative AI hub (plantillas de prompt, orquestación, selección de modelo), fundamentos de LLM y técnicas de aplicación, flujos de AI Core (entrenar, servir, operar) y la estrategia de SAP Business AI. Es el mismo stack usado en el rol actual en SAP para el reporte automatizado de fallas técnicas.",
        image: "/certs/sap-genai.jpg",
        featured: true,
      },
      {
        id: "ibm-sql",
        title: "Databases and SQL for Data Science with Python",
        issuer: "IBM · Coursera",
        year: "feb 2026",
        takeaway:
          "El curso práctico de SQL de IBM para ciencia de datos: conceptos de bases relacionales, DDL y DML, filtrado, agrupación y joins, y luego acceso a bases en la nube desde Jupyter con Python (SQL magic y sqlite3). Los labs corren contra instancias vivas en la nube; el capstone analiza datos abiertos reales (datasets de la City of Chicago), no tablas de juguete. El material opcional de honors cubre vistas, transacciones y stored procedures — la capa entre un notebook y un warehouse.",
        url: "https://coursera.org/verify/8PGNB9D29558",
        image: "/certs/ibm-sql.jpg",
      },
      {
        id: "google-analytics",
        title: "Google Analytics Certification",
        issuer: "Google Skillshop",
        year: "oct 2025",
        takeaway:
          "Individual Qualification oficial de Google Analytics 4 vía Skillshop. Valida el setup de propiedades GA4, el modelo de datos basado en eventos que reemplazó a Universal Analytics, el tracking de conversiones, reportes estándar y el uso de datos de comportamiento para informar decisiones de producto. El examen es de 50 preguntas en 75 minutos con 80% para aprobar; la credencial vale 12 meses. Credential ID 162337721, vigente hasta octubre 2026.",
        image: "/certs/google-analytics.jpg",
      },
      {
        id: "ga4-deep-dive",
        title: "Dive Deeper into GA4 Data and Reports",
        issuer: "Google",
        year: "oct 2025",
        takeaway:
          "Capacitación de Google más allá de los dashboards por defecto de GA4: Explorations, segmentos, comparaciones y reportes custom para cortar el tráfico de producto por cohorte, path y evento, no por un overview enlatado. Complementa la certificación de Skillshop con la capa de análisis que los hiring managers piden de verdad: no solo «¿está Analytics instalado?», sino «¿qué hicieron los usuarios?».",
        image: "/certs/ga4-deep-dive.jpg",
      },
    ],
  },
  {
    group: "Especialización",
    blurb: "Programas de varios cursos con un capstone calificado.",
    items: [
      {
        id: "ml-spec",
        title: "Machine Learning Specialization",
        issuer: "Stanford Online & DeepLearning.AI",
        year: "sep 2024",
        takeaway:
          "La especialización de tres cursos de Andrew Ng — la sucesora reconstruida, en Python, del curso original de Stanford ML. Aprendizaje supervisado (regresión lineal y logística, regularización) en NumPy y scikit-learn; redes neuronales, árboles de decisión y ensembles en TensorFlow; luego aprendizaje no supervisado, recommenders y reinforcement learning. Énfasis a lo largo en evaluación, un enfoque data-centric para mejorar el desempeño, y las prácticas usadas para poner modelos en producción más que solo derivarlos. Los tres cursos constitutivos se listan individualmente abajo, cada uno con su certificado verificado.",
        url: "https://coursera.org/verify/TXOIBDQHPBCO",
        image: "/certs/ml-specialization.jpg",
      },
    ],
  },
  {
    group: "Cursos",
    blurb: "Las unidades individuales detrás de las especializaciones, más fundamentos.",
    items: [
      {
        id: "streamlit-ml-app",
        title: "Build a Machine Learning Web App with Streamlit and Python",
        issuer: "Coursera Project Network",
        year: "jul 2025",
        takeaway:
          "Proyecto guiado que cubre la última milla que la mayoría de los notebooks se saltan: envolver un modelo entrenado en una interfaz Streamlit interactiva, manejar input del usuario, mostrar predicciones y estructurar una app pequeña que un stakeholder sí puede abrir. Usado después de forma directa en el dashboard de flota RUL, el monitor de salud de motores y los MVPs de segmentación de Interius publicados en Cloud Run.",
        url: "https://coursera.org/verify/M9UAASE87OKR",
        image: "/certs/streamlit-ml-app.jpg",
      },
      {
        id: "breast-cancer-ml",
        title: "Breast Cancer Prediction Using Machine Learning",
        issuer: "Coursera Project Network",
        year: "may 2025",
        takeaway:
          "Proyecto guiado de clasificación clínica: entrenar y evaluar un clasificador sobre features diagnósticas, reportar accuracy con un split apropiado y tratar el resultado como apoyo al tamizaje, no como un diagnóstico. La misma disciplina — preprocesamiento sin fugas, métricas conscientes del recall, un límite explícito de «no es un dispositivo» — se lleva a los proyectos de investigación de corazón y TDAH de este sitio.",
        url: "https://coursera.org/verify/BLOTYLBB1SRA",
        image: "/certs/breast-cancer-ml.jpg",
      },
      {
        id: "supervised-ml",
        title: "Supervised Machine Learning: Regression and Classification",
        issuer: "Stanford Online & DeepLearning.AI",
        year: "ago 2024",
        takeaway:
          "Curso 1 de la Machine Learning Specialization. Regresión lineal con múltiples features, vectorización, feature scaling y features polinomiales; regresión logística para clasificación binaria; overfitting y regularización. Implementado en Python con NumPy y scikit-learn, con la matemática recorrida después de la intuición para que los modelos posteriores de salud y pronóstico no sean cajas negras.",
        url: "https://coursera.org/verify/DC187SZOIW5H",
        image: "/certs/supervised-ml.jpg",
      },
      {
        id: "advanced-algorithms",
        title: "Advanced Learning Algorithms",
        issuer: "Stanford Online & DeepLearning.AI",
        year: "sep 2024",
        takeaway:
          "Curso 2 de la especialización. Redes neuronales multi-clase entrenadas en TensorFlow, diagnóstico sesgo/varianza, regularización y dropout, luego árboles de decisión, random forests y XGBoost — la familia de modelos detrás del monitor de RUL, la tesis de reconocimiento de emoción y el clasificador de emoción en texto. También cubre el loop práctico de iterar sobre datos y análisis de error, no solo sobre arquitectura.",
        url: "https://coursera.org/verify/FUWQZMN34XQJ",
        image: "/certs/advanced-learning-algorithms.jpg",
      },
      {
        id: "unsupervised-rl",
        title: "Unsupervised Learning, Recommenders, Reinforcement Learning",
        issuer: "Stanford Online & DeepLearning.AI",
        year: "sep 2024",
        takeaway:
          "Curso 3 de la especialización. Clustering K-means y detección de anomalías; filtrado colaborativo y recommenders basados en contenido; luego reinforcement learning — estados, acciones, recompensas, la ecuación de Bellman y Q-learning. El contenido de clustering es lo que después se volvió el MVP de segmentación de contactos de Interius; el material de recommenders es lo que está debajo del sistema híbrido de películas.",
        url: "https://coursera.org/verify/IYWIZMHDPX45",
        image: "/certs/unsupervised-rl.jpg",
      },
      {
        id: "ai-for-everyone",
        title: "AI For Everyone",
        issuer: "DeepLearning.AI",
        year: "ago 2024",
        takeaway:
          "El curso no técnico de Andrew Ng sobre cómo se acotan de verdad los proyectos de IA dentro de una organización: qué es y qué no es un problema de machine learning, construir versus comprar, estrategia de datos, roles de equipo, y las preguntas éticas y de flujo de trabajo que deciden si un modelo sale a producción. Útil como la capa de briefing alrededor del trabajo técnico — cómo hablar con un stakeholder sin sobrevender un notebook.",
        url: "https://coursera.org/verify/FNO9TJD505E0",
        image: "/certs/ai-for-everyone.jpg",
      },
      {
        id: "intro-genai",
        title: "Introduction to Generative AI",
        issuer: "Google Cloud",
        year: "abr 2024",
        takeaway:
          "Curso base de Google Cloud sobre cómo los modelos generativos se diferencian del machine learning discriminativo clásico: foundation models, interacción basada en prompts y dónde ya se usa la tecnología en productos. La división conceptual — generar versus clasificar — es la que después estructura el trabajo de IA generativa en SAP y la capa de IA acotada en COAZON (leer y resumir, nunca diagnosticar).",
        url: "https://coursera.org/account/accomplishments/records/4EA6G8XL52NZ",
        image: "/certs/intro-generative-ai.jpg",
      },
      {
        id: "cs50x",
        title: "CS50's Introduction to Computer Science",
        issuer: "Harvard University",
        year: "dic 2022",
        takeaway:
          "CS50x de Harvard: las empresas intelectuales de la computación y el arte de programar. Abstracción, algoritmos, estructuras de datos, memoria, gestión de recursos, seguridad, ingeniería de software y programación web, enseñados a través de C, luego Python, SQL, HTML/CSS, JavaScript y Flask. El certificado exige al menos 70% en cada uno de diez problem sets, ocho labs y un proyecto final. El proyecto final aquí fue DIAR Notices, una app Flask de distribución de avisos, listada en trabajo anterior.",
        url: "https://cs50.harvard.edu/certificates/c4e41b00-a724-43da-84b3-18e64c9fd221",
        image: "/certs/cs50x.jpg",
      },
      {
        id: "kaggle-ml",
        title: "Intro to Machine Learning",
        issuer: "Kaggle",
        year: "abr 2024",
        takeaway:
          "La introducción aplicada de Kaggle: árboles de decisión, underfitting versus overfitting, splits train/validation, error absoluto medio y random forests, practicados en notebooks de predicción inmobiliaria. Corto, nativo de notebook, y el primer lugar donde se perforó el hábito de «siempre reserva un set de validación» antes de la especialización más grande de Coursera.",
        image: "/certs/kaggle-intro-ml.jpg",
      },
      {
        id: "kaggle-python",
        title: "Python",
        issuer: "Kaggle",
        year: "2023",
        takeaway:
          "El curso de Python de Kaggle: funciones, condicionales, listas, loops, strings, diccionarios y trabajo con librerías externas. La capa de lenguaje en la que está escrito todo lo demás de esta página — completado como base antes del track de machine learning.",
        image: "/certs/kaggle-python.jpg",
      },
      {
        id: "matlab-onramp",
        title: "MATLAB Onramp",
        issuer: "MathWorks",
        year: "mar 2022",
        takeaway:
          "Onramp interactivo de MathWorks (~2 horas): el desktop y editor de MATLAB, vectores y matrices, indexación, cálculos de arreglos, llamadas a funciones, importación de datos, arreglos lógicos y graficado, evaluado en vivo en el navegador. El mismo entorno usado después para el modelo en lazo cerrado de LED de invernadero en Simulink y otro coursework de mecatrónica — la mitad de cómputo numérico de la carrera de ingeniería.",
        image: "/certs/matlab-onramp.jpg",
      },
      {
        id: "mit-nanolab",
        title: "2023 NanoLab — porción en línea",
        issuer: "MIT · Programa Tec-MIT de Nanotecnología",
        year: "mar 2023",
        takeaway:
          "Porción en línea de nanoLab, una iniciativa central del Programa MIT–Tecnológico de Monterrey en Nanociencia y Nanotecnología (establecido en 2014, con sede en MIT.nano). La cobertura incluye flujo de proceso de cuarto limpio, técnicas de micro- y nanofabricación, fabricación de dispositivos y análisis de datos de fabricación. La clase virtual ha llegado a más de mil estudiantes del Tec; una cohorte más pequeña continúa a talleres presenciales en MIT. Este certificado es la porción en línea — literacidad de proceso, no un reclamo de haber operado herramientas en Cambridge.",
        image: "/certs/mit-nanolab.jpg",
      },
    ],
  },
  {
    group: "Adicional",
    blurb: "Fuera del track de ingeniería, se conserva porque forma parte de cómo se hace el trabajo.",
    items: [
      {
        id: "qpr",
        title: "QPR Suicide Prevention Gatekeeper",
        issuer: "Tecnológico de Monterrey · QPR Institute",
        year: "sep 2022",
        takeaway:
          "Question, Persuade, Refer — entrenamiento de gatekeeper basado en evidencia desarrollado por el Dr. Paul Quinnett y el QPR Institute, impartido en el Tec de Monterrey. Análogo a RCP: reconocer signos de una crisis suicida, preguntar de forma directa, persuadir a la persona a aceptar ayuda y referirla a cuidado. Se lista porque varios proyectos de esta página tocan salud y porque un profesional que publica herramientas alrededor del cuerpo de las personas debería estar entrenado para notar el malestar, no solo para modelarlo.",
        image: "/certs/qpr.jpg",
      },
    ],
  },
];
