import "keen-slider/keen-slider.min.css";
import "../globals.css";

import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Toaster } from "sonner";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { AppProvider } from "@/context";

import { poppins } from "../fonts";

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio.prdev.com.br"),
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

export function generateStaticParams() {
  return routing.locales.map(locale => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning className={poppins.variable}>
      <body className={poppins.className}>
        <NextIntlClientProvider messages={messages}>
          <AppProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <Toaster />
          </AppProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
