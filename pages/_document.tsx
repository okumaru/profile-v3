import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'
import CookieAlert from "../components/cookies-alert"

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
        <Script id="cookies-alert" strategy="afterInteractive">
          {`

            const cookiesAlertBtn = document.getElementById('cookies-alert-btn');
            const cookiesAlertSection = document.getElementById("cookies-alert");

            const hideCookiesAlert = () => {
              cookiesAlertSection.style.display = 'none';
            }

            setTimeout(() => {
              hideCookiesAlert();
            }, 15000);

            cookiesAlertBtn.addEventListener('click', () => {
              hideCookiesAlert();
            });

          `}
        </Script>
      </Head>
      <body className='relative'>
        <Main />
        <NextScript />
        <CookieAlert />
      </body>
    </Html>
  )
}
