import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { RiBracesFill } from "react-icons/ri";
import { SiServerless } from "react-icons/si";
import { Skill } from "../../components/Skill";
import { SkillContainer } from "./styles";

export function SkillSection() {
  const [wichListOpenned, setWichListOpenned] = useState<number>(0);

  return (
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
              <Skill name="Flutter/Dart" numberPercentage={85} />
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
  );
}
