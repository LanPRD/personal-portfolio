import { SectionWrapper } from "@/components/section-wrapper";
import { cn } from "@/lib/css";
import { useTranslations } from "next-intl";
import { PiBracketsAngleBold, PiDeviceMobile, PiHardDrivesFill } from "react-icons/pi";
import { ServiceCard } from "../(components)/services/service-card";

export function ServicesSection() {
  const t = useTranslations("services");

  const services = [
    {
      icon: <PiBracketsAngleBold />,
      title: "Frontend Development",
      services: ["React.js.", "Next.js.", "Tailwind, styled-components, Radix, etc.", "jQuery and Vanilla JS."]
    },
    {
      icon: <PiHardDrivesFill />,
      title: "Backend Development",
      services: ["Backend with Node.js.", "AWS Serverless configurations.", "Database.", "IA.", "Bots."]
    },
    {
      icon: <PiDeviceMobile />,
      title: "Mobile Development",
      services: ["Flutter/Dart.", "React Native.", "Tailwind, styled-components, etc."]
    }
  ];

  return (
    <SectionWrapper id="services" title={t("title")} subtitle={t("subtitle")}>
      <div
        className={cn(
          "container grid gap-[2.4rem] grid-cols-2",
          "max-[350px]:grid-cols-[max-content] max-[350px]:justify-center",
          "md:grid-cols-[repeat(3,218px)] md:justify-center",
          "lg:grid-cols-[repeat(3,268px)]"
        )}
      >
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            moreLabel={t("more")}
            services={service.services}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
