import { useTranslations } from "next-intl";
import Image from "next/image";
import { BiDownload } from "react-icons/bi";
import { AboutInfo } from "../../components/AboutInfo";
import { AboutContainer } from "./styles";

export function AboutSection() {
  const t = useTranslations("about");

  return (
    <section className="about section" id="about">
      <h2 className="section__title">{t("title")}</h2>
      <span className="section__subtitle">{t("subtitle")}</span>

      <AboutContainer className="container grid">
        {/* TODO Me */}
        <div className="about__img">
          <Image
            src="/assets/img/aboutme.webp"
            alt="Picture of the author Allan Prado"
            width={265}
            height={200}
            className="about__img"
          />
        </div>

        <div className="about__data">
          <p className="about__description">{t("description")}</p>

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
