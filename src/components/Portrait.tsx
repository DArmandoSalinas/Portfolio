import Image from "next/image";
import { publicFileExists } from "@/lib/certAssets";
import { site } from "@/data/site";
import { getContent } from "@/i18n/content";
import type { Locale } from "@/i18n/config";

export const PORTRAIT_SRC = "/me/diego-armando.jpg";

export function Portrait({
  className = "",
  locale,
}: {
  className?: string;
  locale: Locale;
}) {
  if (!publicFileExists(PORTRAIT_SRC)) return null;
  const { site: copy } = getContent(locale);

  return (
    <figure className={`m-0 ${className}`}>
      <div className="portrait-frame relative aspect-[4/5] w-full">
        <Image
          src={PORTRAIT_SRC}
          alt={`${site.name}, ${copy.role}`}
          fill
          priority
          sizes="(max-width: 767px) 20rem, 28rem"
          className="object-cover object-[center_12%]"
        />
      </div>
    </figure>
  );
}
