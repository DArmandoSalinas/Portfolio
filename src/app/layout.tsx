import type { Metadata, Viewport } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.shortName,
  authors: [{ name: site.name, url: site.links.github }],
  creator: site.name,
  robots: { index: true, follow: true },
  verification: {
    google: "s1VKZ2-U-62ZS8eiZtybwJCnWiMnkNNATUW6eVS4vw8",
  },
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
