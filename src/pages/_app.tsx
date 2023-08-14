import "keen-slider/keen-slider.min.css";

import { AppProps } from "next/app";

import { AppProvider } from "../context";

import { Header } from "../components/Header";

import GlobalStyle from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Header />
      <Component {...pageProps} />
      <GlobalStyle />
    </AppProvider>
  );
}

export default MyApp;
