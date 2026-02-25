import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import dynamic from "next/dynamic";
import { AboutSection } from "./(sections)/about-section";
import { HomeSection } from "./(sections)/home-section";

const SkillSection = dynamic(() => import("./(sections)/skill-section").then(mod => mod.SkillSection));
const QualificationSection = dynamic(
  () => import("./(sections)/qualification-section").then(mod => mod.QualificationSection)
);
const ServicesSection = dynamic(() => import("./(sections)/services-section").then(mod => mod.ServicesSection));
const PortfolioSection = dynamic(() => import("./(sections)/portfolio-section").then(mod => mod.PortfolioSection));
const ProjectSection = dynamic(() => import("./(sections)/project-section").then(mod => mod.ProjectSection));
const ContactSection = dynamic(() => import("./(sections)/contact-section").then(mod => mod.ContactSection));
const ScrollUp = dynamic(() => import("@/components/scroll-up").then(mod => mod.ScrollUp));

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
