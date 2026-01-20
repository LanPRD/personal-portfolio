import { Qualification } from "@/components/qualification";
import { SectionWrapper } from "@/components/section-wrapper";
import { useTranslations } from "next-intl";
import { QualificationTabs } from "../(components)/qualification/qualification-tabs";

export function QualificationSection() {
  const t = useTranslations("qualification");

  const educationContent = (
    <>
      <Qualification
        title={t("educationItems.mechatronics.title")}
        subtitle={t("educationItems.mechatronics.subtitle")}
        calendar={t("educationItems.mechatronics.calendar")}
        order={1}
      />
      <Qualification
        title={t("educationItems.engineering.title")}
        subtitle={t("educationItems.engineering.subtitle")}
        calendar={t("educationItems.engineering.calendar")}
        order={2}
        isLast
      />
    </>
  );

  const workContent = (
    <>
      <Qualification
        title={t("workItems.volunteering.title")}
        subtitle={t("workItems.volunteering.subtitle")}
        calendar={t("workItems.volunteering.calendar")}
        order={0}
      />
      <Qualification
        title={t("workItems.productionAssistant.title")}
        subtitle={t("workItems.productionAssistant.subtitle")}
        calendar={t("workItems.productionAssistant.calendar")}
        order={1}
      />
      <Qualification
        title={t("workItems.commercialIntern.title")}
        subtitle={t("workItems.commercialIntern.subtitle")}
        calendar={t("workItems.commercialIntern.calendar")}
        order={2}
      />
      <Qualification
        title={t("workItems.financialConsultant.title")}
        subtitle={t("workItems.financialConsultant.subtitle")}
        calendar={t("workItems.financialConsultant.calendar")}
        order={3}
      />
      <Qualification
        title={t("workItems.freelancer.title")}
        subtitle={t("workItems.freelancer.subtitle")}
        calendar={t("workItems.freelancer.calendar")}
        order={4}
      />
      <Qualification
        title={t("workItems.superopa.title")}
        subtitle={t("workItems.superopa.subtitle")}
        calendar={t("workItems.superopa.calendar")}
        order={5}
      />
      <Qualification
        title={t("workItems.cryptolamen.title")}
        subtitle={t("workItems.cryptolamen.subtitle")}
        calendar={t("workItems.cryptolamen.calendar")}
        order={6}
      />
      <Qualification
        title={t("workItems.luckysea.title")}
        subtitle={t("workItems.luckysea.subtitle")}
        calendar={t("workItems.luckysea.calendar")}
        order={7}
      />
      <Qualification
        title={t("workItems.unimidia.title")}
        subtitle={t("workItems.unimidia.subtitle")}
        calendar={t("workItems.unimidia.calendar")}
        order={8}
        isLast
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
