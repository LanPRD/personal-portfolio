import { Qualification } from "@/components/qualification";
import { SectionWrapper } from "@/components/section-wrapper";
import { useTranslations } from "next-intl";
import { QualificationTabs } from "../(components)/qualification/qualification-tabs";

export function QualificationSection() {
  const t = useTranslations("qualification");

  const educationContent = (
    <>
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
    </>
  );

  const workContent = (
    <>
      <Qualification title="Volunteering" subtitle="Grupo Leme" calendar="01/2014 - 07/2017" order={0} />
      <Qualification title="Production assistant" subtitle="Sethi3D" calendar="07/2017 - 10/2017" order={1} />
      <Qualification title="Commercial intern" subtitle="CSW Soluções" calendar="07/2019 - 02/2020" order={2} />
      <Qualification title="Financial consultant" subtitle="W1 Consultoria" calendar="02/2020 - 09/2020" order={3} />
      <Qualification
        title="Self-employed"
        subtitle="Visual Basic for Applications Developer"
        calendar="01/2020 - 1/2021"
        order={4}
      />

      <Qualification title="Fullstack developer" subtitle="SuperOpa | OpaBox" calendar="04/2021 - 12/2021" order={5} />
      <Qualification title="Frontend developer" subtitle="Crypto Lamen" calendar="01/2021 - current" order={6} />
      <Qualification title="Frontend developer" subtitle="LuckySea" calendar="08/2022 - current" order={7} />
      <Qualification
        title="Frontend developer"
        subtitle="Unimidia"
        calendar="11/2022 - current"
        order={8}
        isLast={true}
      />
    </>
  );

  return (
    <SectionWrapper id="qualification" title={t("title")} subtitle={t("subtitle")}>
      <QualificationTabs
        workLabel={t("work")}
        educationLabel={t("education")}
        workContent={workContent}
        educationContent={educationContent}
      />
    </SectionWrapper>
  );
}
