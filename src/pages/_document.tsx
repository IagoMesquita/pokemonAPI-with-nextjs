import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentProps,
} from 'next/document';

export default class MyDocument extends Document<DocumentProps> {
  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="UTF-8" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"></link>
          {/* <link rel="manifest" href="/manifest.json" /> */}
          {/* <link href="/assets/icons/favicon.ico" rel="icon" /> */}
          {/* <link rel="preconnect" href="https://fonts.googleapis.com" /> */}
          {/* <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          /> */}
          {/* <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
            rel="stylesheet"
          /> */}
          {/* <link rel="apple-touch-icon" href="/apple-icon.png" /> */}
          {/* <meta name="theme-color" content="#ffffff" /> */}
        </Head>

        <body>
          <noscript>
            Você precisa habilitar o JavaScript no seu navegador para essa
            aplicação funcionar.
          </noscript>

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
