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
          <meta
            name="description"
            content="Olá! Sou Allan Prado, desenvolvedor de software fullstack. Explore meu portfólio e descubra como estou moldando o mundo digital."
          />
          <meta
            name="keywords"
            content="desenvolvedor de software, programador de aplicativos, desenvolvimento de aplicativos móveis, desenvolvimento de aplicativos web, programação de sistemas, engenheiro de software, linguagens de programação, arquitetura de software, interface de usuário, experiência do usuário, desenvolvimento front-end, desenvolvimento back-end, codificação, soluções de software, inovação tecnológica, consultoria em software"
          />

          <meta name="robots" content="index, follow" />

          <meta property="twitter:title" content="Portfolio | Allan Prado" />
          <meta
            property="twitter:description"
            content="Olá! Sou Allan Prado, desenvolvedor de software fullstack. Explore meu portfólio e descubra como estou moldando o mundo digital."
          />
          <meta property="twitter:image" content="/assets/img/aboutme.jpg" />
          <meta property="twitter:card" content="summary_large_image" />

          <meta property="og:title" content="Portfolio | Allan Prado" />
          <meta
            property="og:description"
            content="Olá! Sou Allan Prado, um entusiasta da criação de soluções de software inovadoras. Explore meu portfólio e descubra como estou moldando o mundo digital."
          />
          <meta property="og:image" content="/assets/img/aboutme.jpg" />
          <meta property="og:url" content="https://portfolio.prdev.com.br/" />

          <meta name="google-site-verification" content="iPv-9zHIdWo7MZ6SZPhdfcL6Diu8WPiVReHAxykWFvs" />
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
