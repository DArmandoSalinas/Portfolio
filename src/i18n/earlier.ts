import { earlierWork, type EarlierItem } from "@/data/projects";
import type { Locale } from "./config";

const es: { group: string; items: EarlierItem[] }[] = [
  {
    group: "Software y web",
    items: [
      {
        title: "CS50x — DIAR Notices",
        body: "App Flask de distribución de avisos como proyecto final de Harvard CS50x — el certificado exige el proyecto además de los diez problem sets.",
        url: "https://github.com/DArmandoSalinas/CS50-Certification-Projects",
        tag: "C · Python · SQL · JS",
      },
      {
        title: "LegRoutine",
        body: "Un micro-sitio con una rutina de piernas para corredores. Pequeño, publicado, sigue en línea.",
        url: "https://leg-routine-one.vercel.app",
        tag: "HTML · Vercel",
      },
    ],
  },
  {
    group: "Raíces de ingeniería · Mecatrónica",
    items: [
      {
        title: "Celda de soldadura ABB",
        body: "Dos robots y un posicionador simulados en RobotStudio; se propuso un tiempo de ciclo de 31 segundos para la celda.",
        tag: "RobotStudio",
      },
      {
        title: "Fixture de vertedera John Deere",
        body: "Diseño de fixture y estudio de alivio de esfuerzos para la manufactura de moldboards.",
        tag: "Manufactura",
      },
      {
        title: "Control LED de invernadero",
        body: "Control de iluminación en lazo cerrado modelado en Simulink — el MATLAB Onramp puesto a trabajar en una planta real.",
        tag: "Simulink",
      },
      {
        title: "Protocolo de balance energético clínico",
        body: "Protocolo de medición de termogénesis y balance energético para un entorno clínico.",
        tag: "Instrumentación",
      },
      {
        title: "Sensado industrial de temperatura",
        body: "Acondicionamiento de sensores y cadena de señal para medición industrial de temperatura.",
        tag: "Electrónica",
      },
    ],
  },
];

export const earlierByLocale: Record<Locale, { group: string; items: EarlierItem[] }[]> = {
  en: earlierWork,
  es,
};
