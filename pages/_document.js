import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/ikonka.jpg"></link>
          <meta name="theme-color" content="#fff" />
          <meta
            property="og:description"
            content="Куьрон китоби, узбекча ва арабча талкинда."
          />
          <meta property="og:title" content="Куьрон китоби" />
          <meta property="og:site_name" content="Quronim.uz" />
          <meta property="og:image" content="/ikonka.jpg" />
          <meta
            name="description"
            content="Куьрон китоби, узбекча ва арабча талкинда."
          />
          <meta property="og:url" content="https://www.quronim.uz/" />
          <meta
            name="keywords"
            content="quron, quronim, quronim uz, quron uz"
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

export default MyDocument;
