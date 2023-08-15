import Document, { DocumentContext, Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()]
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
            rel="stylesheet"
          />

          <meta name="author" content="Allan Prado" />

          <meta property="description" content="Allan Prado - CEO portfolio of pr.dev" />

          <meta property="twitter:title" content="Portfolio | Allan Prado"></meta>
          <meta property="twitter:description" content="Portfolio Allan Prado"></meta>
          <meta property="twitter:image" content="/assets/img/aboutme.jpg"></meta>
          <meta property="twitter:card" content="summary_large_image"></meta>

          <meta property="og:title" content="Portfolio | Allan Prado"></meta>
          <meta property="og:description" content="Portfolio Allan Prado" />
          <meta property="og:image" content="/assets/img/aboutme.jpg"></meta>
          <meta property="og:url" content="https://portfolio.prdev.com.br/"></meta>
        </Head>

        <body>
          <Main />
          <NextScript /> {/* Responsável por executar os scripts das páginas */}
        </body>
      </Html>
    );
  }
}

// Mexer no _document.tsx exige reinicialização do app
