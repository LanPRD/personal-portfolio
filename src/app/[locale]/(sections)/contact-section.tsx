import { useTranslations } from "next-intl";
import { MdOutlineEmail } from "react-icons/md";
import { PiMapPinBold, PiPaperPlaneRightBold, PiPhone } from "react-icons/pi";
import { cn } from "../../../lib/css";

export function ContactSection() {
  const t = useTranslations("contact");

  return (
    <section className="section" id="contact">
      <h2 className="section__title">{t("title")}</h2>
      <span className="section__subtitle">{t("subtitle")}</span>

      <div className={cn("container grid gap-y-12", "sm:grid-cols-2")}>
        <div>
          <div className="flex mb-(--mb-2) items-center">
            <PiPhone className="text-[3rem] text-(--first-color) mr-(--mb-0-75)" />

            <div>
              <h3 className="text-(length:--h3-font-size) font-(--font-medium)">{t("call")}</h3>
              <span className="text-(length:--small-font-size) text-(--text-color-light)">+55 (11) 9 8949-0063</span>
            </div>
          </div>

          <div className="flex mb-(--mb-2) items-center">
            <MdOutlineEmail className="text-[3rem] text-(--first-color) mr-(--mb-0-75)" />

            <div>
              <h3 className="text-(length:--h3-font-size) font-(--font-medium)">Email</h3>
              <span className="text-(length:--small-font-size) text-(--text-color-light)">
                prdev.solutions@gmail.com
              </span>
            </div>
          </div>

          <div className="flex mb-(--mb-2) items-center">
            <PiMapPinBold className="text-[3rem] text-(--first-color) mr-(--mb-0-75)" />

            <div>
              <h3 className="text-(length:--h3-font-size) font-(--font-medium)">{t("location")}</h3>
              <span className="text-(length:--small-font-size) text-(--text-color-light)">Campinas - SP, Brazil</span>
            </div>
          </div>
        </div>

        <form className={cn("grid", "lg:w-[460px]")}>
          <div className={cn("grid", "lg:grid-cols-2")}>
            <div className="bg-(--input-color) rounded-lg p-[0.75rem_1rem_0.25rem]">
              <label className="text-(length:--smaller-font-size) text-(--title-color)">{t("name")}</label>
              <input
                type="text"
                className="w-full bg-(--input-color) text-(--text-color) font-[Poppins] text-(length:--normal-font-size) border-none outline-none p-[0.25rem_0.5rem_0.5rem_0]"
              />
            </div>

            <div className="bg-(--input-color) rounded-lg p-[0.75rem_1rem_0.25rem]">
              <label className="text-(length:--smaller-font-size) text-(--title-color)">Email</label>
              <input
                type="email"
                className="w-full bg-(--input-color) text-(--text-color) font-[Poppins] text-(length:--normal-font-size) border-none outline-none p-[0.25rem_0.5rem_0.5rem_0]"
              />
            </div>
          </div>

          <div className="bg-(--input-color) rounded-lg p-[0.75rem_1rem_0.25rem]">
            <label className="text-(length:--smaller-font-size) text-(--title-color)">{t("project")}</label>
            <input
              type="text"
              className="w-full bg-(--input-color) text-(--text-color) font-[Poppins] text-(length:--normal-font-size) border-none outline-none p-[0.25rem_0.5rem_0.5rem_0]"
            />
          </div>

          <div className="bg-(--input-color) rounded-lg p-[0.75rem_1rem_0.25rem]">
            <label className="text-(length:--smaller-font-size) text-(--title-color)">{t("message")}</label>
            <textarea
              rows={7}
              className="w-full bg-(--input-color) text-(--text-color) font-[Poppins] text-(length:--normal-font-size) border-none outline-none p-[0.25rem_0.5rem_0.5rem_0] resize-none"
            />
          </div>

          <div>
            <button type="button" className="button button--flex">
              {t("sendMessage")}
              <PiPaperPlaneRightBold className="button__icon" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
