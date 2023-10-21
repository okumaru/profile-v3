import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import CookieAlert from '../components/cookies-alert';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.G_TAG_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){
              window.dataLayer.push(arguments)
            }
            gtag('js', new Date());
            gtag('config', '${process.env.G_TAG_ID}');
          `}
        </Script>
      </Head>
      <body className="relative">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
