import { Blob } from "@/components/blob";
import { Social } from "@/components/social";
import { cn } from "@/lib/css";
import { useTranslations } from "next-intl";
import { PiArrowDownBold, PiChatTextBold, PiMouseBold } from "react-icons/pi";

export function HomeSection() {
  const t = useTranslations("home");

  return (
    <section className="section" id="home">
      <div className={cn("container grid gap-[1.6rem]", "md:gap-y-32")}>
        <div
          className={cn(
            "grid grid-cols-[0.5fr_3fr] pt-[5.6rem] items-center",
            "max-[350px]:grid-cols-[0.25fr_3fr]",
            "sm:grid-cols-[max-content_1fr_1fr]",
            "md:pt-[6.4rem] md:gap-x-[3.2rem]"
          )}
        >
          <Social />

          <Blob />

          <div className={cn("col-[1/3]", "sm:col-auto")}>
            <h1 className="text-(length:--big-font-size)">{t("title")}</h1>
            <h3 className="text-(length:--h3-font-size) text-(--text-color) font-(--font-medium) mb-(--mb-0-75)">
              Fullstack developer
            </h3>
            <p className="mb-(--mb-2)">{t("description")}</p>
            <a href="#contact" className="button button--flex">
              Contact Me{" "}
              <PiChatTextBold className="button__icon text-[2rem] ml-(--mb-0-5) transition-transform duration-300" />
            </a>
          </div>
        </div>

        <div className={cn("hidden mt-[10.4rem]", "md:block")}>
          <a
            href="#about"
            className={cn(
              "flex items-center text-(--first-color) transition-transform duration-300",
              "hover:translate-y-[0.4rem]",
              "md:ml-[4.8rem]"
            )}
          >
            <PiMouseBold className="text-[3.2rem]" />
            <span className="text-(length:--small-font-size) text-(--title-color) font-(--font-medium) mr-(--mb-0-25)">
              {t("scroll")}
            </span>
            <PiArrowDownBold className="text-[2rem]" />
          </a>
        </div>
      </div>
    </section>
  );
}
