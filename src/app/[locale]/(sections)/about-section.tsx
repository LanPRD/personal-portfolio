import { useTranslations } from "next-intl";
import Image from "next/image";
import { BiDownload } from "react-icons/bi";
import { AboutInfo } from "../../../components/about-info";
import { cn } from "../../../lib/css";

export function AboutSection() {
  const t = useTranslations("about");

  return (
    <section className="section" id="about">
      <h2 className="section__title">{t("title")}</h2>
      <span className="section__subtitle">{t("subtitle")}</span>

      <div className={cn("container grid", "sm:grid-cols-2", "md:gap-x-32")}>
        {/* TODO Me */}
        <div className={cn("w-[200px] rounded-[0.8rem] justify-self-center self-start", "md:w-[350px]")}>
          <Image
            src="/assets/img/aboutme.webp"
            alt="Picture of the author Allan Prado"
            width={350}
            height={350}
            className="w-full h-auto rounded-[0.8rem]"
          />
        </div>

        <div>
          <p className={cn("text-center mb-(--mb-2-5)", "md:text-left")}>{t("description")}</p>

          <div className={cn("mb-(--mb-2-5) grid grid-cols-3 gap-y-[0.4rem]", "md:justify-between")}>
            <AboutInfo time={3} typeOftime="Years" text="experience" />
            <AboutInfo time={3} typeOftime="Years" text="working with AWS Serverless" />
            <AboutInfo time={2} typeOftime="Years" text="working with web3" />
            <AboutInfo time={2} typeOftime="Years" text="working mobile development" />
          </div>

          <div className={cn("col-span-full flex justify-center", "md:justify-start")}>
            {/* TODO Add my CV in AWS bucket */}
            <a /* download="" href="" */ className="button button--flex">
              Download CV <BiDownload className="button__icon ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
