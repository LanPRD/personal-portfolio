import { cn } from "@/lib/css";
import { useTranslations } from "next-intl";
import { PiPaperPlaneRightBold } from "react-icons/pi";

export function ProjectSection() {
  const t = useTranslations("project");

  return (
    <section className="section">
      <div className={cn("text-center bg-(--first-color-second)", "md:text-left md:bg-transparent")}>
        <div
          className={cn(
            "container",
            "sm:grid sm:grid-cols-2",
            "md:bg-(--first-color-second) md:rounded-[1.6rem] md:p-[4.8rem_4rem] md:grid-cols-1 md:gap-x-[4.8rem]",
            "max-md:[&>div]:pb-12"
          )}
        >
          <div className="text-center">
            <h2 className="text-(length:--h2-font-size) text-white mb-(--mb-0-75)">{t("title")}</h2>
            <p className="text-white mb-(--mb-1-5)">{t("description")}</p>
            <a href="#contact" className="button button--flex button--white">
              {t("contact")}
              <PiPaperPlaneRightBold className="button__icon" />
            </a>
          </div>

          {/* TODO: project image */}
          {/* <img src="/assets/img/contactme.png" alt="Allan Prado" className="w-[232px] justify-self-center max-[350px]:w-[200px]" /> */}
        </div>
      </div>
    </section>
  );
}
