import type { Project } from "@/data/projects";

export type ProjectOverlay = Partial<
  Pick<Project, "hook" | "problem" | "body" | "brief" | "note" | "live" | "repos" | "docs">
> & {
  metrics?: { label: string }[];
  galleryCaption?: string;
  galleryChapters?: { title?: string; caption?: string }[];
  galleryShots?: { label?: string; alt?: string }[];
};

export const projectsEs: Record<string, ProjectOverlay> = {
  armatus: {
    brief:
      "Un protocolo cerrado de cinco pasos: calibrar al atleta, mapear la sobrecarga, revisar readiness antes de la carga, dosificar el día y registrar contra un estándar de técnica. Cada semana nueva se regenera a partir de PRs y fatiga acumulada; correr y ciclismo cuentan como carga real, no como una nota al margen.",
    hook: "Un coach de iPhone que arma la semana de entrenamiento — no una plantilla que se recorre a toques.",
    problem:
      "Las apps genéricas de entrenamiento sirven listas estáticas. Ignoran el equipo, las lesiones, el sueño y el hecho de que un rodaje largo el miércoles es carga sobre el mismo sistema nervioso que la sentadilla del jueves. Quien entrena en serio termina en una hoja de cálculo.",
    body: "ARMATUS es un producto de iOS de consumo construido alrededor de un protocolo cerrado: Calibrar → Planear → Adaptar → Ejecutar → Evolucionar. El onboarding profundo (metas, equipo, lesiones, horario, estilo de vida, deportes externos) se vuelve el modelo del atleta. Cada semana se genera con un mapa de sobrecarga y una justificación explícita; el coach diario dosifica la sesión contra energía, sueño, tiempo y un techo de readiness, para que el plan ceda a la capacidad y no al ego. El tracker registra series contra un estándar de técnica, con esquemas de setup, respiración y errores comunes. Journey guarda PRs, volumen y carga de deporte híbrido como el dataset del que se regenera la semana siguiente. Correr, ciclismo, natación y triatlón entran al algoritmo como fatiga real, no como una nota al margen. Español e inglés desde el día uno. App móvil en producción más una API de streaming para generar el plan estructurado.",
    metrics: [
      { label: "app publicada" },
      { label: "protocolo cerrado" },
      { label: "bilingüe" },
    ],
    live: [
      { label: "armatus.app", url: "https://www.armatus.app/" },
      { label: "Coach web", url: "https://armatus-web-coach.vercel.app" },
    ],
    galleryChapters: [
      {
        title: "Coach",
        caption: "Primero el techo. Después la dosis — y un tracker que registra contra un estándar de técnica.",
      },
      {
        title: "Plan",
        caption: "La semana tiene mapa y razón. La sobrecarga se ve — no se improvisa.",
      },
      {
        title: "Evidencia",
        caption: "PRs, volumen y el modelo del atleta del que se regenera la semana siguiente.",
      },
    ],
  },
  coazon: {
    brief:
      "Nació después de un susto de salud en la familia. Recordatorios flexibles de medicación, un diario de signos vitales graficado por zona clínica, una alarma determinista de banderas rojas ligada a una pantalla de emergencia, y un PDF listo para el médico. La capa de IA está acotada a propósito: lee recetas y escribe resúmenes, y nunca diagnostica, receta ni cambia una dosis.",
    hook: "La receta de un cardiólogo, convertida en un plan de cuidado que una familia sí puede seguir.",
    problem:
      "Después de un evento cardíaco, el hospital da de alta a una familia con una receta en papel, un baumanómetro y una lista de signos de alarma que no van a recordar a las 2 a.m. Las apps de salud o presionan con un horario rígido o, en silencio, empiezan a diagnosticar.",
    body: "COAZON convierte la receta del médico en un plan vivo del hogar: recordatorios flexibles de medicación que toleran un día real, un diario guiado de presión y signos vitales con tendencias marcadas por zona clínica, un motor determinista de banderas rojas ligado a una pantalla de emergencia, y un PDF listo para la siguiente cita. La capa de IA está acotada a propósito: lee recetas, acepta registro en lenguaje natural y escribe resúmenes descriptivos, pero nunca diagnostica, receta ni cambia una dosis, y cada respuesta de salud se remite al médico tratante. Sin API key se degrada a modo fully manual y la app sigue funcionando. Español primero y bilingüe desde el día uno, porque esa es la casa para la que se construyó. FastAPI y PostgreSQL en el servidor; React Native (Expo) en el cliente.",
    metrics: [
      { label: "hitos, 6 completos" },
      { label: "diagnósticos de IA, por diseño" },
      { label: "bilingüe" },
    ],
    note: "En desarrollo — etapa de pulido para App Store. Una herramienta de registro y recordatorios, no un dispositivo médico: nunca diagnostica, receta ni recomienda. Repositorio privado.",
    galleryChapters: [
      {
        title: "Hoy",
        caption: "El día como lo vive la casa — tomas con nombre, vitales pendientes, la siguiente tableta a las 08:00.",
      },
      {
        title: "La receta",
        caption: "El papel entra. Sale una lista viva — el OCR está acotado: lee, nunca receta.",
      },
      {
        title: "El medicamento",
        caption: "Un horario real: nombre y dosis, stock y notas, y luego guardar — o archivar.",
      },
      {
        title: "Métricas",
        caption: "Un diario de signos vitales marcado por zona clínica — no una gráfica bonita. Presión, tendencias, historial.",
      },
      {
        title: "Reporte",
        caption: "Lo que llevas al cardiólogo: adherencia a 30 días, un resumen acotado, un PDF listo para la consulta.",
      },
      {
        title: "Citas",
        caption: "Estudios, citas y un asistente que no diagnostica. El hogar cabe en un solo lugar.",
      },
    ],
  },
  rul: {
    brief:
      "XGBoost predice la vida útil restante sobre datos de turbofán NASA C-MAPSS, con atribución SHAP por sensor. Un servicio FastAPI está detrás de un dashboard de flota en Streamlit, y una capa de agentes LangGraph responde diagnósticos en lenguaje natural y escribe el briefing de mantenimiento en PDF.",
    hook: "Vida útil restante de flota que puedes consultar en inglés — y descargar como briefing.",
    problem:
      "Un número de remaining-useful-life en un notebook no le sirve a un planificador de mantenimiento. Necesitan vista de flota, la razón por la que disparó el modelo, una conversación sin abrir Python, y un PDF que puedan llevar al hangar.",
    body: "Un servicio de mantenimiento predictivo de punta a punta sobre los datos de degradación de turbofán NASA C-MAPSS. XGBoost estima la vida útil restante por motor; SHAP atribuye la predicción a sensores individuales para que un técnico vea qué lectura se movió. FastAPI sirve inferencia; un dashboard Streamlit es la superficie de flota. Encima, una capa multi-agente LangGraph responde preguntas de diagnóstico en inglés y escribe un briefing de mantenimiento en PDF con ReportLab. Todo el stack corre en Google Cloud Run, así que el demo es la forma de producción, no un screenshot local. RMSE de test 16.74 ciclos, MAE 12.33, R² 0.825.",
    metrics: [
      { label: "RMSE de test (ciclos)" },
      { label: "MAE de test" },
      { label: "R² de test" },
      { label: "RMSE de validación" },
    ],
    live: [{ label: "Tablero en vivo", url: "https://rul-dashboard-368785016309.us-central1.run.app" }],
    galleryCaption:
      "Recorrido del dashboard de flota — vida útil restante, SHAP y el agente de briefing",
  },
  rag: {
    hook: "Habla con tus PDFs. Cada respuesta muestra el fragmento del que salió.",
    problem:
      "Un modelo de lenguaje inventa una cita con ganas. Para una tesis, o cualquier documento del que eres responsable, eso no sirve. El requisito era simple: si la respuesta no está en el archivo, el sistema tiene que decirlo, y si está, tienes que ver el pasaje.",
    body: "Un servicio de generación aumentada por recuperación: sube un PDF, córtalo en chunks de 1000 tokens con overlap de 100, embede con text-embedding-3-small, guarda en Chroma, recupera con MultiQueryRetriever y responde con GPT-4o anclado solo a esos chunks — las fuentes siempre visibles. Construido y probado contra la propia tesis de HRV, indexada a 149 segmentos que cubren features como RMSSD y pNN50. FastAPI detrás de un cliente Streamlit, para que el mismo patrón se siente delante de cualquier conjunto de documentos, no solo este.",
    metrics: [
      { label: "segmentos indexados" },
      { label: "chunk / overlap" },
      { label: "respuestas citan fuente" },
    ],
  },
  adhd: {
    hook: "Apoyo al tamizaje con equidad y explicaciones, no una caja negra.",
    problem:
      "El TDAH en mujeres está históricamente subdiagnosticado. Un modelo entrenado con datos mixtos puede verse preciso en agregado y fallar en silencio al grupo que ya espera más tiempo por un referido. El brief era predecir estatus de TDAH a partir de conectomas de fMRI más datos psicosociales, y reportar equidad por sexo en lugar de esconderla en un score pooled.",
    body: "1,213 participantes. Selección de features por información mutua, KernelPCA y splits estratificados alimentan un Random Forest para TDAH y una regresión logística para sexo, con el modelo de sexo afinado hacia recall femenino. LIME y SHAP cargan las explicaciones para que un hallazgo se inspeccione, no solo se califique. La equidad se reporta por sexo a propósito. Accuracy de TDAH 82%, recall 0.88–0.90, AUC 0.866; recall de sexo 0.71 hombres / 0.48 mujeres — la brecha está en la página, no en un apéndice.",
    metrics: [
      { label: "accuracy TDAH" },
      { label: "recall TDAH" },
      { label: "AUC TDAH" },
      { label: "recall sexo H / M" },
    ],
    repos: [
      { label: "Predicting-ADHD-sex", url: "https://github.com/DArmandoSalinas/Predicting-ADHD-sex" },
      {
        label: "Etapa 1 · EDA",
        url: "https://github.com/DArmandoSalinas/ADHD-Outcome-Prediction-Data-Exploration-Preprocessing",
      },
    ],
    note: "Investigación académica. No es un dispositivo clínico.",
  },
  heart: {
    hook: "ML clínico sin fugas — y la prueba de que un AUC pooled puede mentir.",
    problem:
      "Los datos de UCI de enfermedad cardíaca son cuatro hospitales mezclados como si fueran uno. Ceros centinela en colesterol y presión en reposo parecen mediciones. Un modelo que preprocesa fuera del loop de validación cruzada se verá excelente y fallará en la siguiente clínica.",
    body: "920 pacientes en cuatro sitios. Los ceros centinela de colesterol y presión en reposo se mapean a NaN, y el ColumnTransformer vive dentro de la validación cruzada para que nada se filtre del fold de hold-out. HistGradientBoosting se elige por recall y luego F1, explicado con SHAP y LIME. Leave-One-Site-Out expone la brecha de transportabilidad que el score pooled esconde: ROC-AUC de test 0.90, recall 87.3%, F1 0.85 — AUC medio LOSO 0.79, peor sitio ≈ 0.70. Drivers principales: dolor torácico asintomático, oldpeak, angina inducida por ejercicio.",
    metrics: [
      { label: "ROC-AUC de test" },
      { label: "recall" },
      { label: "F1" },
      { label: "AUC medio LOSO" },
    ],
    note: "Educativo. No es un instrumento clínico validado. AUC del peor sitio ≈ 0.70.",
  },
  motor: {
    brief:
      "Perfila dos máquinas muy distintas — un motor de inducción con baseline en cinco velocidades y un Haas Mini Mill con baseline a partir de trayectorias operativas — y aplica umbrales adaptativos específicos. Deliberadamente basado en reglas, no en ML: cada alarma remite a la estadística que la disparó, que es lo que un equipo de mantenimiento puede auditar.",
    hook: "Salud de máquina interpretable a partir de vibración y temperatura — y un primer lugar por ello.",
    problem:
      "Una planta ya tiene un procedimiento de mantenimiento preventivo. La pregunta útil no es «podemos entrenar una red en este motor» — es cómo mejorar un procedimiento que la gente ya corre, en dos máquinas que no suenan igual, sin una alarma que no puedan explicar.",
    body: "Un sistema industrial de mantenimiento preventivo construido alrededor de vibración y temperatura en vivo. Perfila dos máquinas muy distintas — un motor de inducción trifásico Sumitomo con baseline en cinco velocidades (50/60/75/90/100%) y un Haas Mini Mill con baseline a partir de trayectorias operativas combinadas — y aplica umbrales adaptativos específicos, porque un centro de maquinado es legítimamente más ruidoso que un motor. Un lector serial en hilos con reconexión automática alimenta los sensores a scores de salud 0–100 en un dashboard Streamlit, con modo replay para demos sin hardware y diagnósticos de paquetes/FPS en vivo. Deliberadamente basado en reglas y no en ML: cada alarma remite a la estadística que la disparó, que es lo que un equipo de mantenimiento puede actuar y auditar. Primer lugar en Tec Expo Ingenierías; reconocimiento de Rockwell Automation por contribución a un proyecto de integración con su tecnología (Nuevo León, diciembre 2025).",
    metrics: [
      { label: "Tec Expo Ingenierías" },
      { label: "tipos de máquina perfilados" },
      { label: "baselines de velocidad" },
      { label: "score de salud" },
    ],
    note: "Primer lugar en Tec Expo Ingenierías, la competencia de proyectos de ingeniería del Tecnológico de Monterrey. Reconocimiento de Rockwell Automation por contribución a un proyecto de integración con su tecnología (Nuevo León, dic 2025).",
    galleryCaption: "Monitor de salud del motor en vivo — vibración, temperatura y el score 0–100",
  },
  hrv: {
    brief:
      "Tesis de MSc. Filtrado Butterworth y extracción de IBI alimentan features de HRV en tiempo, frecuencia y no lineales, normalizadas contra un baseline de calibración. Validado leave-one-participant-out en 62 personas, para que el modelo generalice a un extraño en lugar de inflar un score pooled.",
    hook: "De PPG crudo a modelos de emoción bajo leave-one-participant-out.",
    problem:
      "La emoción a partir del rostro es un demo resuelto. La emoción a partir del pulso, en un extraño que el modelo nunca ha visto, es una pregunta más difícil y más honesta — y la que un wearable de verdad tiene que responder.",
    body: "Tesis de MSc en la University of Essex. La fotopletismografía cruda se filtra con Butterworth; se extraen intervalos entre latidos; se calculan features de HRV en tiempo, frecuencia (Welch PSD) y no lineales — incluidos descriptores de Poincaré — y se normalizan contra un baseline de calibración por sujeto. Selección por información mutua, grid search anidado y validación leave-one-participant-out / leave-one-group-out comparan Random Forest, XGBoost y SVR para arousal continuo. Mejor resultado: Pearson r = 0.5975, RMSE 0.154 ± 0.032, en 62 participantes. LOPO es el punto: el modelo tiene que funcionar en una persona con la que no se entrenó.",
    metrics: [
      { label: "Pearson r (arousal)" },
      { label: "RMSE ± 0.032" },
      { label: "participantes" },
    ],
    note: "Tesis de MSc in Artificial Intelligence, University of Essex — Random Forest, validado LOPO. Awarded Distinction.",
    docs: [
      {
        label: "Tesis",
        url: "/work/hrv/HRV-Emotion-Recognition-thesis.pdf",
      },
    ],
    galleryShots: [
      {
        label: "Tesis",
        alt: "Portada de la tesis de MSc: Analysis of Heart Rate Variability using PPG signals to detect and predict emotions through Machine Learning",
      },
    ],
  },
  wellhave: {
    hook: "Pulso diario de entrada; un nivel de riesgo y un plan de recuperación de salida.",
    problem:
      "Las herramientas de burnout o sueltan un score de cuestionario o generan consejo abierto sin anclaje. Ninguna es algo que una persona pueda actuar el mismo día.",
    body: "Un clasificador de tres niveles ordena un pulso diario en riesgo bajo, moderado o alto de burnout; GPT-4o a través de LangChain convierte esa señal en un plan de recuperación concreto — no un discurso motivacional. Backend FastAPI, cliente React Native (Expo), Supabase para el estado. El modelo decide el nivel; el modelo de lenguaje solo puede coachar dentro de él.",
    metrics: [
      { label: "niveles de burnout" },
      { label: "cliente Expo" },
    ],
  },
  segmentation: {
    hook: "Clustering que convierte una lista de contactos en una estrategia de engagement.",
    problem:
      "Una lista plana de contactos no es una estrategia. Interius / APREU necesitaba cohortes a las que sí pudieran hablar — por engagement, por geografía cruzada con engagement y por canal — sin esperar a un equipo de datos en cada pull.",
    body: "Prueba de concepto para Interius / APREU: segmentos no supervisados por engagement, geografía × engagement y actividad de canal, empaquetados como app Streamlit, contenedorizados y desplegados en Google Cloud Run para que los stakeholders los abrieran ellos mismos. La misma forma «del notebook a Cloud Run» que el dashboard de RUL posterior.",
  },
  housing: {
    hook: "Del notebook al endpoint, sin el hueco en medio.",
    body: "El análisis exploratorio lleva a un pipeline RandomForest, servido detrás de una ruta FastAPI /predict con un frontend HTML responsive encima. El ejercicio es el medio que falta en la mayoría de los cursos: el modelo entrenado es una API, no una celda al final de un notebook.",
  },
  rossmann: {
    hook: "1,115 tiendas, un horizonte de seis semanas, una red feed-forward.",
    body: "Un MLP 128-64-32 con dropout 0.3, Adam y early stopping pronostica ventas diarias en una ventana de seis semanas para 1,115 tiendas Rossmann, entrenado sobre features de calendario, promoción y tienda. RMSE ~0.06 en la escala de features de este proyecto (la métrica oficial de Kaggle es RMSPE — se anota para que el número no se sobrelea).",
    metrics: [
      { label: "tiendas" },
      { label: "RMSE en features ingenierizadas" },
    ],
    note: "RMSE reportado en la escala de features de este proyecto; la métrica oficial de Kaggle es RMSPE.",
  },
  "text-emotion": {
    hook: "Seis emociones en 416k tweets.",
    body: "Bag-of-words con stemming alimenta un clasificador XGBoost, validado con K-fold estratificado en seis clases de emoción sobre unos 416,000 tweets. 87.5% de accuracy. Un baseline clásico de NLP — útil como control «antes de transformers», y como prueba de que la misma familia de boosting usada en sensores también sostiene texto.",
    metrics: [
      { label: "accuracy" },
      { label: "tweets" },
    ],
  },
  movies: {
    hook: "Colaborativo y basado en contenido, y luego los dos a la vez.",
    body: "Filtrado colaborativo SVD, similitud de contenido TF-IDF y un blend híbrido de ambos, envuelto en una interfaz Flask. RMSE SVD 0.477 contra un baseline de 3.624 — la mitad colaborativa hace el trabajo; la de contenido cubre el cold-start que el SVD no puede.",
    metrics: [
      { label: "RMSE SVD" },
      { label: "RMSE baseline" },
    ],
  },
  politrauma: {
    hook: "Flujos de politrauma, paso a paso.",
    body: "Una herramienta web interactiva de educación clínica que guía a estudiantes por la evaluación de politrauma y las rutas de decisión en trauma. Construida para enseñar, no para la cama: TypeScript en Vercel, abierta para que una cohorte recorra el mismo caso. Explícitamente no es un dispositivo médico.",
    note: "Educativo. No es un dispositivo médico.",
  },
  turtlebot: {
    hook: "PID y lógica difusa decidiendo en tiempo real.",
    body: "Seguimiento de borde y evitación de obstáculos en un TurtleBot, con reglas difusas y control PID actuando sobre lecturas de sensores en vivo. Curso de Intelligent Systems and Robotics en Essex — la mitad de teoría de control de la carrera de mecatrónica, corriendo en un robot y no en Simulink.",
  },
  rocket: {
    hook: "Una red neuronal escrita desde cero, sin framework.",
    body: "Forward pass, backpropagation, inicialización Xavier y normalización de entrada implementados a mano en NumPy, y luego volados contra aterrizajes simulados. El punto del ejercicio es que el trabajo posterior en TensorFlow no es magia: la regla de actualización se escribió.",
  },
};
