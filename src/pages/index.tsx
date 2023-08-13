import Head from "next/head";

import { AboutSection } from "../templates/Home/AboutSection";
import { PortfolioSection } from "../templates/Home/PortfolioSection";
import { ProjectSection } from "../templates/Home/ProjectSection";
import { QualificationSection } from "../templates/Home/QualificationSection";
import { ServicesSection } from "../templates/Home/ServicesSection";
import { SkillSection } from "../templates/Home/SkillSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio | Allan Prado</title>

        {/* Metatags podem ser adicionadas aqui */}
      </Head>

      <main className="main">
        <AboutSection />
        <SkillSection />
        <QualificationSection />
        <ServicesSection />
        <PortfolioSection />
        <ProjectSection />
      </main>
    </>
  );
}
