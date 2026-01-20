"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { RiBracesFill } from "react-icons/ri";
import { SiServerless } from "react-icons/si";
import { Skill } from "../../../components/skill";
import { cn } from "../../../lib/css";

export function SkillSection() {
  const t = useTranslations("skill");
  const [wichListOpenned, setWichListOpenned] = useState<number>(0);

  return (
    <section className="section" id="skills">
      <h2 className="section__title">{t("title")}</h2>
      <span className="section__subtitle">{t("subtitle")}</span>

      <div className={cn("container grid", "sm:grid-cols-2")}>
        <div className={wichListOpenned === 0 ? "skills__open" : "skills__close"}>
          <div className="flex items-center mb-(--mb-2-5) cursor-pointer" onClick={() => setWichListOpenned(0)}>
            <RiBracesFill className="text-[3.2rem] text-(--first-color) mr-(--mb-0-75)" />

            <div>
              <h1 className={cn("text-(length:--h3-font-size)", "max-[350px]:text-(length:--normal-font-size)")}>
                Frontend developer
              </h1>
              <span className="text-(length:--small-font-size) text-(--text-color-light)">{t("morethan")}</span>
            </div>

            <FaAngleDown className="skills__arrow text-[3.2rem] text-(--first-color) ml-auto transition-transform duration-400" />
          </div>

          <div className="skills__list grid gap-y-[2.4rem] pl-16">
            <Skill name="HTML" numberPercentage={95} />
            <Skill name="CSS" numberPercentage={90} />
            <Skill name="JavaScript" numberPercentage={90} />
            <Skill name="React" numberPercentage={90} />
            <Skill name="Next.js" numberPercentage={90} />
            <Skill name="Flutter/Dart" numberPercentage={85} />
          </div>
        </div>

        <div className={wichListOpenned === 1 ? "skills__open" : "skills__close"}>
          <div className="flex items-center mb-(--mb-2-5) cursor-pointer" onClick={() => setWichListOpenned(1)}>
            <SiServerless className="text-[3.2rem] text-(--first-color) mr-(--mb-0-75)" />

            <div>
              <h1 className={cn("text-(length:--h3-font-size)", "max-[350px]:text-(length:--normal-font-size)")}>
                Backend developer
              </h1>
              <span className="text-(length:--small-font-size) text-(--text-color-light)">{t("morethan")}</span>
            </div>

            <FaAngleDown className="skills__arrow text-[3.2rem] text-(--first-color) ml-auto transition-transform duration-400" />
          </div>

          <div className="skills__list grid gap-y-[2.4rem] pl-16">
            <Skill name="Node.js" numberPercentage={95} />
            <Skill name=".NET" numberPercentage={85} />
            <Skill name="AWS - Serverless Architecture" numberPercentage={85} />
          </div>
        </div>
      </div>
    </section>
  );
}
