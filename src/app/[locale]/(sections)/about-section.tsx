import { AboutInfo } from "@/components/about-info";
import { SectionWrapper } from "@/components/section-wrapper";
import { cn } from "@/lib/css";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { PiDownloadSimpleBold } from "react-icons/pi";

export function AboutSection() {
  const t = useTranslations("about");

  return (
    <SectionWrapper id="about" title={t("title")} subtitle={t("subtitle")}>
      <div className={cn("container grid", "sm:grid-cols-2", "md:gap-x-32")}>
        <div className={cn("w-80 rounded-[0.8rem] justify-self-center self-start", "md:w-140")}>
          <Image
            src="/assets/img/aboutme.webp"
            alt={t("imageAlt")}
            width={350}
            height={350}
            className="w-full h-auto rounded-[0.8rem]"
          />
        </div>

        <div>
          <p className={cn("text-center mb-(--mb-2-5)", "md:text-left")}>{t("description")}</p>

          <div className={cn("mb-(--mb-2-5) grid grid-cols-3 gap-y-[0.4rem]", "md:justify-between")}>
            <AboutInfo time={5} typeOftime={t("info.years")} text={t("info.experience")} />
            <AboutInfo time={4} typeOftime={t("info.years")} text={t("info.awsServerless")} />
            <AboutInfo time={4} typeOftime={t("info.years")} text={t("info.web3")} />
            <AboutInfo time={2} typeOftime={t("info.years")} text={t("info.mobile")} />
          </div>

          <div className={cn("col-span-full flex justify-center", "md:justify-start")}>
            <a /* download="" href="" */ className="button button--flex">
              {t("downloadCv")} <PiDownloadSimpleBold className="button__icon ml-2" />
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
