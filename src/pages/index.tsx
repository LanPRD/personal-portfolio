import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

import { BiMouseAlt, BiMessageSquareDetail, BiDownload, BiBriefcase, BiCheckCircle, BiCode } from "react-icons/bi";
import { TiArrowDown, TiArrowRight, TiTimes } from "react-icons/ti";
import { RiBracesFill } from "react-icons/ri";
import { FaAngleDown, FaGraduationCap, FaServer } from "react-icons/fa";
import { SiServerless } from "react-icons/si";

import Social from "../components/Social";
import Blob from "../components/Blob";
import AboutInfo from "../components/AboutInfo";
import Skill from "../components/Skill";
import Qualification from "../components/Qualification";
import ServicesModal from "../components/ServicesModal";

import {
  HomeContainer,
  HomeData,
  HomeScroll,
  AboutContainer,
  SkillContainer,
  QualificationContainer,
  ServiceContainer
} from "../styles/home";

interface ModalViewerProps {
  isVisible: boolean;
  modalIndex?: number;
}

export default function Home() {
  const [wichListOpenned, setWichListOpenned] = useState<number>(0);
  const [tab, setTab] = useState<string>("education");
  const [showModal, setShowModal] = useState<ModalViewerProps>({ isVisible: false });

  return (
    <>
      <Head>
        <title>Portfolio | Allan Prado</title>

        {/* Metatags podem ser adicionadas aqui */}
      </Head>

      <main className="main">
        <section className="home section" id="home">
          <HomeContainer className="container grid">
            <div className="home__content grid">
              <Social />

              <Blob />

              <HomeData>
                <h1 className="home__title">Hi, I&apos;am Allan Prado</h1>
                <h3 className="home__subtitle">Fullstack developer</h3>
                <p className="home__description">
                  This is a description This is a description This is a description This is a description This is a
                  description This is a description This is a description
                </p>
                <a href="#contact" className="button button--flex">
                  Contact Me <BiMessageSquareDetail className="button__icon" />
                </a>
              </HomeData>
            </div>

            <HomeScroll>
              <a href="#about" className="home__scroll-button button--flex">
                <BiMouseAlt className="home__scroll-mouse" />
                <span className="home__scroll-name">Scroll down</span>
                <TiArrowDown className="home__scroll-arrow" />
              </a>
            </HomeScroll>
          </HomeContainer>
        </section>

        <section className="about section" id="about">
          <h2 className="section__title">About Me</h2>
          <span className="section__subtitle">My introduction</span>

          <AboutContainer className="container grid">
            {/* TODO Me */}
            {/* <Image src="" alt="" className="about__img" /> */}

            <div className="about__data">
              <p className="about__description">Type you description here</p>

              <div className="about__info">
                <AboutInfo time={1} typeOftime="Years" text="experience" />
                <AboutInfo time={1} typeOftime="Years" text="working with AWS Serverless" />
                <AboutInfo time={1} typeOftime="Years" text="working mobile development" />

                <div className="about__buttons">
                  {/* TODO Add my CV in AWS bucket */}
                  <a /* download="" href="" */ className="button button--flex">
                    Download CV <BiDownload style={{ marginLeft: "8px" }} className="button__icon" />
                  </a>
                </div>
              </div>
            </div>
          </AboutContainer>
        </section>

        <section className="skill section" id="skills">
          <h2 className="section__title">Skills</h2>
          <span className="section__subtitle">My techinical level</span>

          <div className="skills__container container grid">
            <div>
              <SkillContainer className={wichListOpenned === 0 ? "skills__open" : "skills__close"}>
                <div className="skills__header" onClick={() => setWichListOpenned(0)}>
                  <RiBracesFill className="skills__icon" />

                  <div>
                    <h1 className="skills__title">Frontend developer</h1>
                    <span className="skills__subtitle">More than 1 years</span>
                  </div>

                  <FaAngleDown className="skills__arrow" />
                </div>

                <div className="skills__list grid">
                  <Skill name="HTML" numberPercentage={95} />
                  <Skill name="CSS" numberPercentage={85} />
                  <Skill name="JavaScript" numberPercentage={90} />
                  <Skill name="React" numberPercentage={90} />
                  <Skill name="Next.js" numberPercentage={80} />
                  <Skill name="Flutter/Dart" numberPercentage={35} />
                </div>
              </SkillContainer>

              <SkillContainer className={wichListOpenned === 1 ? "skills__open" : "skills__close"}>
                <div className="skills__header" onClick={() => setWichListOpenned(1)}>
                  <SiServerless className="skills__icon" />

                  <div>
                    <h1 className="skills__title">Backend developer</h1>
                    <span className="skills__subtitle">More than 1 years</span>
                  </div>

                  <FaAngleDown className="skills__arrow" />
                </div>

                <div className="skills__list grid">
                  <Skill name="Node.js" numberPercentage={85} />
                  <Skill name="AWS - Serverless Architecture" numberPercentage={55} />
                </div>
              </SkillContainer>
            </div>
          </div>
        </section>

        <section className="qualification section">
          <h2 className="section__title">Qualification</h2>
          <span className="section__subtitle">My personal journey</span>

          <QualificationContainer className="qualification__container container">
            <div className="qualification__tabs">
              <div
                className={`qualification__button button--flex ${tab === "education" ? "qualification__active" : ""}`}
                onClick={() => setTab("education")}
              >
                <FaGraduationCap className="qualification__icon" /> Education
              </div>

              <div
                className={`qualification__button button--flex ${tab === "work" ? "qualification__active" : ""}`}
                onClick={() => setTab("work")}
              >
                <BiBriefcase className="qualification__icon" /> Work
              </div>
            </div>

            <div className="qualification__sections">
              <div
                className={`qualification__content ${
                  tab === "education" ? "qualification__active" : "qualification__deactive"
                }`}
                id="education"
              >
                <Qualification
                  title="Mechatronics technician"
                  subtitle="Colégio Politécnico Bento-Quirino"
                  calendar="2012 - 2014"
                  order={1}
                />

                <Qualification
                  title="Control and Automation Enginner"
                  subtitle="UNISAL - Universidade Salesiana de São Paulo"
                  calendar="2015 - 2020"
                  order={2}
                  isLast={true}
                />
              </div>

              <div
                className={`qualification__content ${
                  tab === "work" ? "qualification__active" : "qualification__deactive"
                }`}
                id="work"
              >
                <Qualification
                  title="Volunteering"
                  subtitle="Grupo Leme"
                  calendar="01/2014 - 07/2017"
                  order={0}
                  isLast={true}
                />

                <Qualification title="Production assistant" subtitle="Sethi3D" calendar="07/2017 - 10/2017" order={1} />

                <Qualification
                  title="Commercial intern"
                  subtitle="CSW Soluções"
                  calendar="07/2019 - 02/2020"
                  order={2}
                />

                <Qualification
                  title="Financial consultant"
                  subtitle="W1 Consultoria"
                  calendar="02/2020 - 09/2020"
                  order={3}
                />

                <Qualification
                  title="Self-employed"
                  subtitle="Visual Basic for Applications Developer"
                  calendar="01/2020 - 1/2021"
                  order={4}
                />

                <Qualification
                  title="Fullstack developer"
                  subtitle="SuperOpa | OpaBox"
                  calendar="04/2021 - 12/2021"
                  order={5}
                  isLast={true}
                />
              </div>
            </div>
          </QualificationContainer>
        </section>

        <section className="services section" id="services">
          <h2 className="section__title">Services</h2>
          <span className="section__subtitle">What i offer</span>

          <ServiceContainer className="services__container containter grid">
            <div className="services__content">
              <div>
                <BiCode className="services__icon" />
                <h3 className="services__title">
                  Frontend <br /> Development
                </h3>

                <span
                  onClick={() => setShowModal({ isVisible: true, modalIndex: 0 })}
                  className="button button--flex button--small button--link services__button"
                >
                  View More <TiArrowRight className="button__icon" />
                </span>

                {showModal.modalIndex === 0 && (
                  <ServicesModal
                    isVisible={showModal.isVisible}
                    callbackShowModal={setShowModal}
                    title="Frontend Development"
                    services={[
                      "I develop the webpage interface.",
                      "App development - Flutter/Dart.",
                      "Backend connectivity.",
                      "Frameworks - React and Next.js.",
                      "Tailwind, styled-components, sass",
                      "jQuery and Vanilla JS"
                    ]}
                  />
                )}
              </div>
            </div>

            <div className="services__content">
              <div>
                <FaServer className="services__icon" />
                <h3 className="services__title">
                  Backend <br /> Development
                </h3>

                <span
                  onClick={() => setShowModal({ isVisible: true, modalIndex: 1 })}
                  className="button button--flex button--small button--link services__button"
                >
                  View More <TiArrowRight className="button__icon" />
                </span>

                {showModal.modalIndex === 1 && (
                  <ServicesModal
                    isVisible={showModal.isVisible}
                    callbackShowModal={setShowModal}
                    title="Backend Development"
                    services={[
                      "Backend with Node.js.",
                      "AWS Serverless configurations.",
                      "Express configurations.",
                      "Typescript.",
                      "NoSQL Database - DynamoDB."
                    ]}
                  />
                )}
              </div>
            </div>
          </ServiceContainer>
        </section>
      </main>
    </>
  );
}
