import type { Metadata } from "next"
import { SITE_NAME, SITE_URL } from "./constants"

interface MetadataOptions {
  title: string
  description: string
  path?: string
  image?: string
}

export function createMetadata({ title, description, path = "", image }: MetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`
  const ogImage = image ?? `${SITE_URL}/og-image.png`

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      images: [{ url: ogImage, width: 1200, height: 630 }],
      locale: "ko_KR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [ogImage],
    },
    alternates: { canonical: url },
  }
}
