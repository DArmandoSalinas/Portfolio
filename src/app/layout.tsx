import type { Metadata, Viewport } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.shortName,
  authors: [{ name: site.name, url: site.links.github }],
  creator: site.name,
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#e2e4e8",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
