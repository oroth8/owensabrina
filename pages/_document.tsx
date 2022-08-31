import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Alex+Brush&family=Baskervville:ital@0;1&display=swap"
          rel="stylesheet"
        />
        {process.env.NODE_ENV === "production" && (
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=GTM-5MVWS5V"
            strategy="afterInteractive"
          />
        )}
        {process.env.NODE_ENV === "production" && (
          <Script id="google-analytics" strategy="afterInteractive">
            {`
 window.dataLayer = window.dataLayer || [];
 function gtag(){window.dataLayer.push(arguments);}
 gtag('js', new Date());

 gtag('config', 'GTM-5MVWS5V');
`}
          </Script>
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
