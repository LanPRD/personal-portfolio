import "keen-slider/keen-slider.min.css";
import "./globals.css";

import type { Metadata } from "next";

import { Footer } from "../components/footer";
import { Header } from "../components/header";

import { AppProvider } from "../context";
import { NextIntlClientProvider } from "next-intl";

export const metadata: Metadata = {
  authors: [{ name: "Allan Prado" }],
  title: "Portfolio | Allan Prado",
  description:
    "Olá! Sou Allan Prado, desenvolvedor de software fullstack. Explore meu portfólio e descubra como estou moldando o mundo digital.",
  keywords: [
    "desenvolvedor de software",
    "programador de aplicativos",
    "desenvolvimento de aplicativos móveis",
    "desenvolvimento de aplicativos web",
    "programação de sistemas",
    "engenheiro de software",
    "arquitetura de software",
    "interface de usuário",
    "experiência do usuário",
    "desenvolvimento front-end",
    "desenvolvimento back-end",
    "consultoria em software"
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Portfolio | Allan Prado",
    description:
      "Olá! Sou Allan Prado, um entusiasta da criação de soluções de software inovadoras. Explore meu portfólio e descubra como estou moldando o mundo digital.",
    url: "https://portfolio.prdev.com.br/",
    images: [{ url: "/assets/img/aboutme.webp" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Allan Prado",
    description:
      "Olá! Sou Allan Prado, desenvolvedor de software fullstack. Explore meu portfólio e descubra como estou moldando o mundo digital.",
    images: ["/assets/img/aboutme.webp"]
  },
  verification: {
    google: "iPv-9zHIdWo7MZ6SZPhdfcL6Diu8WPiVReHAxykWFvs"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>

      <body>
        <NextIntlClientProvider>
          <AppProvider>
            <Header />
            {children}
            <Footer />
          </AppProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
