import "keen-slider/keen-slider.min.css";

import { NextIntlClientProvider } from "next-intl";
import { AppProps } from "next/app";

import { AppProvider } from "../context";

import { Header } from "../components/Header";

import GlobalStyle from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NextIntlClientProvider messages={pageProps.messages}>
      <AppProvider>
        <Header />
        <Component {...pageProps} />
        <GlobalStyle />
      </AppProvider>
    </NextIntlClientProvider>
  );
}

export default MyApp;
