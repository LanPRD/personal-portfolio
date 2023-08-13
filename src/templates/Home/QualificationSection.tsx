import { useState } from "react";
import { BiBriefcase } from "react-icons/bi";
import { FaGraduationCap } from "react-icons/fa";
import { Qualification } from "../../components/Qualification";
import { QualificationContainer } from "./styles";

export function QualificationSection() {
  const [tab, setTab] = useState<string>("education");

  return (
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
            className={`qualification__content ${tab === "work" ? "qualification__active" : "qualification__deactive"}`}
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

            <Qualification title="Commercial intern" subtitle="CSW Soluções" calendar="07/2019 - 02/2020" order={2} />

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
  );
}
