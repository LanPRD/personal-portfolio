import { PiPaperPlaneRightBold } from "react-icons/pi";
import { ProjectSectionContainer } from "./styles";

export function ProjectSection() {
  return (
    <ProjectSectionContainer>
      {/* <section className="project section grid"> */}
      <section className="project section grid">
        <div className="project__bg">
          <div className="project__container container">
            <div className="project__data">
              <h2 className="project__title">You have a new project</h2>
              <p className="project__description">Contact me now and het a 30% discount on your new project.</p>
              <a href="#contact" className="button button--flex button--white">
                Contact Me
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
