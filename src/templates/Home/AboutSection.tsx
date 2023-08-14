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
        <img src="" alt="" className="about__img" />

        <div className="about__data">
          <p className="about__description">Type you description here</p>

          <div className="about__info">
            <AboutInfo time={1} typeOftime="Years" text="experience" />
            <AboutInfo time={1} typeOftime="Years" text="working with AWS Serverless" />
            <AboutInfo time={1} typeOftime="Years" text="working mobile development" />
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
