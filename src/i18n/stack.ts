import { courseraTracks, stack, type StackGroup } from "@/data/stack";
import type { Locale } from "./config";

const stackEs: StackGroup[] = [
  { label: "Lenguajes", items: stack[0].items },
  { label: "Machine learning", items: stack[1].items },
  { label: "LLM", items: stack[2].items },
  { label: "Entrega", items: stack[3].items },
  {
    label: "Dominio",
    items: [
      "Procesamiento de señales",
      "Robótica · PID · control difuso",
      "Equidad en salud",
      "Mantenimiento predictivo",
    ],
  },
];

const courseraEs: StackGroup[] = [
  { label: "Machine learning y deep learning", items: courseraTracks[0].items },
  { label: "Estadística, analítica y pronóstico", items: courseraTracks[1].items },
  { label: "Ingeniería de datos y SQL", items: courseraTracks[2].items },
  { label: "IA generativa y estrategia", items: courseraTracks[3].items },
  { label: "Ingeniería y operaciones", items: courseraTracks[4].items },
];

export const stackByLocale: Record<Locale, StackGroup[]> = { en: stack, es: stackEs };
export const courseraByLocale: Record<Locale, StackGroup[]> = {
  en: courseraTracks,
  es: courseraEs,
};
