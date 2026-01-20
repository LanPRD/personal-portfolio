import type { Metadata } from "next";
import HomeClient from "./home-client";

export const metadata: Metadata = {
  title: "Portfolio | Allan Prado - Desenvolvedor de Software"
};

export default function Page() {
  return <HomeClient />;
}
