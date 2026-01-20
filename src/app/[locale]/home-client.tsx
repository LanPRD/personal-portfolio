"use client";

import { useEffect } from "react";

import { ScrollUp } from "../../components/scroll-up";

import { AboutSection } from "./(sections)/about-section";
import { ContactSection } from "./(sections)/contact-section";
import { HomeSection } from "./(sections)/home-section";
import { PortfolioSection } from "./(sections)/portfolio-section";
import { ProjectSection } from "./(sections)/project-section";
import { QualificationSection } from "./(sections)/qualification-section";
import { ServicesSection } from "./(sections)/services-section";
import { SkillSection } from "./(sections)/skill-section";

export function HomeClient() {
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
    return () => window.removeEventListener("scroll", scrollActive);
  }, []);

  useEffect(() => {
    function scrollHeader() {
      const nav = document.getElementById("header");

      if (window.scrollY >= 80) nav?.classList.add("scroll-header");
      else nav?.classList.remove("scroll-header");
    }

    window.addEventListener("scroll", scrollHeader);
    return () => window.removeEventListener("scroll", scrollHeader);
  }, []);

  useEffect(() => {
    function scrollUp() {
      const scrollUpEl = document.getElementById("scroll-up");

      if (window.scrollY >= 560) scrollUpEl?.classList.add("show-scroll");
      else scrollUpEl?.classList.remove("show-scroll");
    }

    window.addEventListener("scroll", scrollUp);
    return () => window.removeEventListener("scroll", scrollUp);
  }, []);

  return (
    <main className="main">
      <HomeSection />
      <AboutSection />
      <SkillSection />
      <QualificationSection />
      <ServicesSection />
      <PortfolioSection />
      <ProjectSection />
      <ContactSection />

      <ScrollUp />
    </main>
  );
}
