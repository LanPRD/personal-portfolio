import { GetStaticPropsContext } from "next";
import Head from "next/head";
import { useEffect } from "react";

import { Footer } from "../components/Footer";
import { ScrollUp } from "../components/ScrollUp";

import { AboutSection } from "../templates/Home/AboutSection";
import { ContactSection } from "../templates/Home/ContactSection";
import { HomeSection } from "../templates/Home/HomeSection";
import { PortfolioSection } from "../templates/Home/PortfolioSection";
import { ProjectSection } from "../templates/Home/ProjectSection";
import { QualificationSection } from "../templates/Home/QualificationSection";
import { ServicesSection } from "../templates/Home/ServicesSection";
import { SkillSection } from "../templates/Home/SkillSection";
import { TestimonialSection } from "../templates/Home/TestimonialSection";

export default function Home() {
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    function scrollActive() {
      const scrollY = window.scrollY;

      sections.forEach(current => {
        const rect = current.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY - 50;
        const sectionId = current.getAttribute("id");

        const link = document.querySelector(`.nav__menu a[href*="${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + rect.height) {
          link?.classList.add("active-link");
        } else {
          link?.classList.remove("active-link");
        }
      });
    }

    window.addEventListener("scroll", scrollActive);

    return () => {
      window.removeEventListener("scroll", scrollActive);
    };
  }, []);

  useEffect(() => {
    function scrollHeader() {
      const nav = document.getElementById("header");

      if (window.scrollY && window.scrollY >= 80) {
        nav?.classList.add("scroll-header");
      } else {
        nav?.classList.remove("scroll-header");
      }
    }

    window.addEventListener("scroll", scrollHeader);

    return () => {
      window.removeEventListener("scroll", scrollHeader);
    };
  }, []);

  useEffect(() => {
    function scrollUp() {
      const scrollUp = document.getElementById("scroll-up");

      if (window.scrollY && window.scrollY >= 560) {
        scrollUp?.classList.add("show-scroll");
      } else {
        scrollUp?.classList.remove("show-scroll");
      }
    }

    window.addEventListener("scroll", scrollUp);

    return () => {
      window.removeEventListener("scroll", scrollUp);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Portfolio | Allan Prado - Deselvolvedor de Software</title>

        {/* Metatags podem ser adicionadas aqui */}
      </Head>

      <main className="main">
        <HomeSection />
        <AboutSection />
        <SkillSection />
        <QualificationSection />
        <ServicesSection />
        <PortfolioSection />
        <ProjectSection />
        <TestimonialSection />
        <ContactSection />

        <ScrollUp />
      </main>

      <Footer />
    </>
  );
}

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../lang/${locale}.json`)).default
    }
  };
}
