"use client";

import { SectionWrapper } from "@/components/section-wrapper";
import { Skill } from "@/components/skill";
import { cn } from "@/lib/css";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { PiBracketsCurlyBold, PiDatabaseFill } from "react-icons/pi";
import { SkillGroup } from "../(components)/skills/skill-group";

export function SkillSection() {
  const t = useTranslations("skill");
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <SectionWrapper id="skills" title={t("title")} subtitle={t("subtitle")}>
      <div className={cn("container grid", "sm:grid-cols-2")}>
        <SkillGroup
          icon={<PiBracketsCurlyBold />}
          title="Frontend developer"
          subtitle={t("morethan")}
          isOpen={openIndex === 0}
          onToggle={() => setOpenIndex(0)}
        >
          <Skill name="HTML" numberPercentage={95} />
          <Skill name="CSS" numberPercentage={90} />
          <Skill name="JavaScript" numberPercentage={90} />
          <Skill name="React" numberPercentage={90} />
          <Skill name="Next.js" numberPercentage={90} />
          <Skill name="Flutter/Dart" numberPercentage={85} />
        </SkillGroup>

        <SkillGroup
          icon={<PiDatabaseFill />}
          title="Backend developer"
          subtitle={t("morethan")}
          isOpen={openIndex === 1}
          onToggle={() => setOpenIndex(1)}
        >
          <Skill name="Node.js" numberPercentage={95} />
          <Skill name=".NET" numberPercentage={85} />
          <Skill name="AWS - Serverless Architecture" numberPercentage={85} />
        </SkillGroup>
      </div>
    </SectionWrapper>
  );
}
