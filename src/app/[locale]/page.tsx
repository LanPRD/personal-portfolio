import { ScrollUp } from "@/components/scroll-up";
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { AboutSection } from "./(sections)/about-section";
import { ContactSection } from "./(sections)/contact-section";
import { HomeSection } from "./(sections)/home-section";
import { PortfolioSection } from "./(sections)/portfolio-section";
import { ProjectSection } from "./(sections)/project-section";
import { QualificationSection } from "./(sections)/qualification-section";
import { ServicesSection } from "./(sections)/services-section";
import { SkillSection } from "./(sections)/skill-section";

export const metadata: Metadata = {
  title: "Portfolio | Allan Prado - Desenvolvedor de Software"
};

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;

  setRequestLocale(locale);

  return (
    <>
      <HomeSection />
      <AboutSection />
      <SkillSection />
      <QualificationSection />
      <ServicesSection />
      <PortfolioSection />
      <ProjectSection />
      <ContactSection />

      <ScrollUp />
    </>
  );
}
