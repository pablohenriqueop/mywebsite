import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Pablo Henrique - desenvolvedor front-end</title>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap"
            rel="stylesheet"
          />

          <title>Pablo Henrique - Desenvolvedor front-end</title>
          <meta
            name="title"
            content="Pablo Henrique  - Desenvolvedor front-end"
          />
          <meta
            name="description"
            content=" Aqui você vai encontrar um pequeno resumo sobre o meu trabalho,
                seja bem-vindo 😁"
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.pablohenrique.dev/" />
          <meta
            property="og:title"
            content="Pablo Henrique  - Desenvolvedor front-end"
          />
          <meta
            property="og:description"
            content=" Aqui você vai encontrar um pequeno resumo sobre o meu trabalho,
                seja bem-vindo 😁"
          />
          <meta
            property="og:image"
            content="https://www.pablohenrique.dev/_next/image?url=%2Fimg%2Fpablohenrique.jpg&w=3840&q=75"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://www.pablohenrique.dev/"
          />
          <meta
            property="twitter:title"
            content="Pablo Henrique  - Desenvolvedor front-end"
          />
          <meta
            property="twitter:description"
            content=" Aqui você vai encontrar um pequeno resumo sobre o meu trabalho,
                seja bem-vindo 😁"
          />
          <meta
            property="twitter:image"
            content="https://www.pablohenrique.dev/_next/image?url=%2Fimg%2Fpablohenrique.jpg&w=3840&q=75"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
