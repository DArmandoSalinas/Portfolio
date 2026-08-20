import fs from "node:fs";
import path from "node:path";

/**
 * Server-side existence check for anything under /public.
 *
 * Doing this at render time (rather than with an <img onError> handler) means
 * the fallback ships in the HTML itself — no broken-image flash, and it is
 * correct without JavaScript.
 */
export function publicFileExists(publicPath: string): boolean {
  try {
    const rel = publicPath.replace(/^\//, "");
    return fs.existsSync(path.join(process.cwd(), "public", rel));
  } catch {
    return false;
  }
}

/** Back-compat alias used by the certification grid. */
export const certImageExists = publicFileExists;

export function availableCertImages(images: string[]): string[] {
  return images.filter(publicFileExists);
}
