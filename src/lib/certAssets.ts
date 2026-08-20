import fs from "node:fs";
import path from "node:path";

/**
 * Server-side existence check for certificate artwork.
 *
 * Doing this at render time (rather than with an <img onError> handler) means
 * the drop-zone placeholder is in the HTML itself — no broken-image flash, and
 * it is correct without JavaScript.
 */
export function certImageExists(publicPath: string): boolean {
  try {
    const rel = publicPath.replace(/^\//, "");
    return fs.existsSync(path.join(process.cwd(), "public", rel));
  } catch {
    return false;
  }
}

export function availableCertImages(images: string[]): string[] {
  return images.filter(certImageExists);
}
