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
      title: t("items.frontend.title"),
      services: [
        t("items.frontend.list.react"),
        t("items.frontend.list.next"),
        t("items.frontend.list.ui"),
        t("items.frontend.list.js")
      ]
    },
    {
      icon: <PiHardDrivesFill />,
      title: t("items.backend.title"),
      services: [
        t("items.backend.list.node"),
        t("items.backend.list.dotnet"),
        t("items.backend.list.aws"),
        t("items.backend.list.database"),
        t("items.backend.list.ai"),
        t("items.backend.list.bots")
      ]
    },
    {
      icon: <PiDeviceMobile />,
      title: t("items.mobile.title"),
      services: [t("items.mobile.list.flutter"), t("items.mobile.list.reactNative"), t("items.mobile.list.ui")]
    }
  ];

  return (
    <SectionWrapper id="services" title={t("title")} subtitle={t("subtitle")}>
      <div
        className={cn(
          "grid gap-[2.4rem] grid-cols-2",
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
