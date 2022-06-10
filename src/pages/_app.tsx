import { useEffect } from "react";
import Head from "next/head";
import "../styles/globals.css";
import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: "G-ETG9WP4T77",
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: tagManagerArgs.gtmId });
  }, []);
  return (
    <>
      <Head>
        <title>Pablo Henrique - Desenvolvedor front-end</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
