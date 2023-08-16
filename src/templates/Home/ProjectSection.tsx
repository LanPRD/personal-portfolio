import { useTranslations } from "next-intl";
import { PiPaperPlaneRightBold } from "react-icons/pi";
import { ProjectSectionContainer } from "./styles";

export function ProjectSection() {
  const t = useTranslations("project");

  return (
    <ProjectSectionContainer>
      {/* <section className="project section grid"> */}
      <section className="project section grid">
        <div className="project__bg">
          <div className="project__container container">
            <div className="project__data">
              <h2 className="project__title">{t("title")}</h2>
              <p className="project__description">{t("description")}</p>
              <a href="#contact" className="button button--flex button--white">
                {t("contact")}
                <PiPaperPlaneRightBold className="project__icon button__icon" />
              </a>
            </div>

            {/* TODO: project image */}
            {/* <img src="/assets/img/contactme.png" alt="Allan Prado" className="project__img" /> */}
          </div>
        </div>
      </section>
    </ProjectSectionContainer>
  );
}
