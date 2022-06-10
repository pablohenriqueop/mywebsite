import Head from "next/head";
import Script from "next/script";

import "../styles/globals.css";

const tagManagerArgs = {
  gtmId: "G-ETG9WP4T77",
};

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${tagManagerArgs.gtmId}`}
      />

      <Script strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${tagManagerArgs.gtmId}', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
      <Head>
        <title>Pablo Henrique - Desenvolvedor front-end</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
