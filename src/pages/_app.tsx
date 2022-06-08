import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
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
