import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="ieru created using Next.JS" />
          <meta name="theme-color" content="var(--white)" />
          <link rel="icon" href="/meta/favicon.ico" />
          <link href="/meta/favicon.ico" />
          <link href="/meta/mask-icon.svg" color="#000000" />
          <link rel="manifest" href="/meta/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
