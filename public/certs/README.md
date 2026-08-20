# Certificate artwork

Images here are published on the live site. They are web-optimised JPEGs
(max 1600px, quality 86) converted from the originals kept **outside git** in
`/Certificates` — that folder is `.gitignore`d because it holds identity
documents.

## Present

| File | Credential |
| --- | --- |
| `sap-genai.jpg` | SAP Certified — SAP Generative AI Developer **(featured)** |
| `ibm-sql.jpg` | Databases and SQL for Data Science with Python · IBM |
| `ml-specialization.jpg` | Machine Learning Specialization · Stanford & DeepLearning.AI |
| `supervised-ml.jpg` | Supervised Machine Learning: Regression and Classification |
| `advanced-learning-algorithms.jpg` | Advanced Learning Algorithms |
| `unsupervised-rl.jpg` | Unsupervised Learning, Recommenders, Reinforcement Learning |
| `ai-for-everyone.jpg` | AI For Everyone · DeepLearning.AI |
| `streamlit-ml-app.jpg` | Build a ML Web App with Streamlit and Python |
| `breast-cancer-ml.jpg` | Breast Cancer Prediction Using Machine Learning |
| `matlab-onramp.jpg` | MATLAB Onramp · MathWorks |
| `mit-nanolab.jpg` | 2023 NanoLab · MIT.nano / Tec-MIT |
| `essex-msc.jpg` | MSc Artificial Intelligence with Distinction · University of Essex |
| `cs50x.jpg` | CS50x · Harvard University |
| `rockwell-award.jpg` | Rockwell Automation integration-project recognition (Dec 2025) |

## Still missing

Add any of these and the card picks it up on the next build — no code change.

| File | Credential |
| --- | --- |
| `google-analytics.jpg` | Google Analytics · Google Digital Academy |
| `intro-generative-ai.jpg` | Introduction to Generative AI · Google Cloud |
| `ga4-deep-dive.jpg` | Dive Deeper into GA4 Data and Reports · Google |
| `kaggle-intro-ml.jpg` | Intro to Machine Learning · Kaggle |
| `kaggle-python.jpg` | Python · Kaggle |
| `qpr.jpg` | QPR Suicide Prevention Gatekeeper |

Missing artwork renders a branded issuer tile in production, and a drop-zone
naming the exact filename when running `npm run dev`.

## Deliberately not published

The **Tecnológico de Monterrey** diploma (`Certificates/TecMonterrey.jpeg`) is
kept off the site by owner decision: it carries an ID photo, a handwritten
signature and a folio number. The Education card renders without it.

**Format:** JPG or PNG, roughly 4:3, at least 1000px wide. Filenames are declared
in `src/data/certifications.ts` and `src/data/education.ts`.
