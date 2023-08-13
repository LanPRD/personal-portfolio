import { PiPaperPlaneRightBold } from "react-icons/pi";
import { ProjectSectionContainer } from "./styles";

export function ProjectSection() {
  return (
    <ProjectSectionContainer>
      <section className="project section">
        <div className="project__bg">
          <div className="project__container container grid">
            <div className="project__data">
              <h2 className="project__title">You have a new project</h2>
              <p className="project__description">Contact me now and het a 30% discount on your new project.</p>
              <a href="#contact" className="button button--flex button--white">
                Contact Me
                <PiPaperPlaneRightBold className="project__icon button__icon" />
              </a>
            </div>

            {/* TODO: project image */}
            <img src="" alt="" className="project__img" />
          </div>
        </div>
      </section>
    </ProjectSectionContainer>
  );
}