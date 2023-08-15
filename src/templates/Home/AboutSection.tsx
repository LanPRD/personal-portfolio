import Image from "next/image";
import { BiDownload } from "react-icons/bi";
import { AboutInfo } from "../../components/AboutInfo";
import { AboutContainer } from "./styles";

export function AboutSection() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <AboutContainer className="container grid">
        {/* TODO Me */}
        <div className="about__img">
          <Image
            src="/assets/img/aboutme.jpg"
            alt="Picture of the author Allan Prado"
            width={265}
            height={200}
            className="about__img"
          />
        </div>

        <div className="about__data">
          <p className="about__description">
            Software developer passionate about creating solutions that impact people&apos;s lives. With experience in
            both blockchain and conventional web, my journey includes 4 years of voluntary work, leading teams and
            turning ideas into reality. Specializing in HTML, CSS, JS, React, Next, Node, Flutter, Dart, AWS Serverless,
            and TypeScript, I am a self-taught, dedicated, and persistent fullstack developer. My meticulous attention
            to detail drives the quality of each project, as I believe even the smallest aspect makes a difference in
            the final outcome. My goal is to create memorable applications that enrich people&apos;s lives. Beyond the
            realm of programming, my time is divided among gaming, anime, travel, trails, nature, and graffiti. I look
            forward to taking on new challenges and continuing to grow as a professional.
          </p>

          <div className="about__info">
            <AboutInfo time={3} typeOftime="Years" text="experience" />
            <AboutInfo time={3} typeOftime="Years" text="working with AWS Serverless" />
            <AboutInfo time={2} typeOftime="Years" text="working with web3" />
            <AboutInfo time={2} typeOftime="Years" text="working mobile development" />
          </div>

          <div className="about__buttons">
            {/* TODO Add my CV in AWS bucket */}
            <a /* download="" href="" */ className="button button--flex">
              Download CV <BiDownload style={{ marginLeft: "8px" }} className="button__icon" />
            </a>
          </div>
        </div>
      </AboutContainer>
    </section>
  );
}
