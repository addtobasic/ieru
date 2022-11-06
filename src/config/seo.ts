import { DefaultSeoProps } from "next-seo";

export const baseUrl = "https://ieru.life";

export const defaultSEO: DefaultSeoProps = {
  title: "ieru",
  description:
    "ieru is a chat tool that facilitates communication and lowers the hurdles for speaking up, while ensuring psychological safety.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    site_name: "ieru",
    images: [
      {
        url: `${baseUrl}/meta/og-image.png`,
        alt: "ieru",
      },
    ],
  },
};
