import { useTranslations } from "next-intl";
import { useState } from "react";
import { BiBriefcase } from "react-icons/bi";
import { FaGraduationCap } from "react-icons/fa";
import { Qualification } from "../../../components/qualification";
import { cn } from "../../../lib/css";

export function QualificationSection() {
  const [tab, setTab] = useState<string>("work");
  const t = useTranslations("qualification");

  return (
    <section className="section">
      <h2 className="section__title">{t("title")}</h2>
      <span className="section__subtitle">{t("subtitle")}</span>

      <div className="container">
        <div className={cn("flex justify-evenly mb-(--mb-2)", "md:justify-center")}>
          <div
            className={cn(
              "flex items-center text-(length:--h3-font-size) font-(--font-medium) cursor-pointer hover:text-(--first-color)",
              "md:mx-(--mb-1)",
              tab === "work" && "text-(--first-color)"
            )}
            onClick={() => setTab("work")}
          >
            <BiBriefcase className="text-[2rem] mr-(--mb-0-25)" /> {t("work")}
          </div>

          <div
            className={cn(
              "flex items-center text-(length:--h3-font-size) font-(--font-medium) cursor-pointer hover:text-(--first-color)",
              "md:mx-(--mb-1)",
              tab === "education" && "text-(--first-color)"
            )}
            onClick={() => setTab("education")}
          >
            <FaGraduationCap className="text-[2rem] mr-(--mb-0-25)" /> {t("education")}
          </div>
        </div>

        <div className={cn("mt-(--mb-3)", "sm:grid sm:grid-cols-[0.6fr] sm:justify-center", "md:grid-cols-[0.5fr]")}>
          <div className={tab === "education" ? "block" : "hidden"} id="education">
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

          <div className={tab === "work" ? "block" : "hidden"} id="work">
            <Qualification title="Volunteering" subtitle="Grupo Leme" calendar="01/2014 - 07/2017" order={0} />

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
            />

            <Qualification title="Frontend developer" subtitle="Crypto Lamen" calendar="01/2021 - current" order={6} />

            <Qualification title="Frontend developer" subtitle="LuckySea" calendar="08/2022 - current" order={7} />

            <Qualification
              title="Frontend developer"
              subtitle="Unimidia"
              calendar="11/2022 - current"
              order={8}
              isLast={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
