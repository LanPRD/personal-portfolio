import { useTranslations } from "next-intl";
import { MdOutlineEmail } from "react-icons/md";
import { PiMapPinBold, PiPaperPlaneRightBold, PiPhone } from "react-icons/pi";
import { ContactSectionContainer } from "./styles";

export function ContactSection() {
  const t = useTranslations("contact");

  return (
    <ContactSectionContainer>
      <section className="contact section" id="contact">
        <h2 className="section__title">{t("title")}</h2>
        <span className="section__subtitle">{t("subtitle")}</span>

        <div className="contact__container container grid">
          <div>
            <div className="contact__information">
              <PiPhone className="contact__icon" />

              <div>
                <h3 className="contact__title">{t("call")}</h3>
                <span className="contact__subtitle">+55 (11) 9 8949-0063</span>
              </div>
            </div>

            <div className="contact__information">
              <MdOutlineEmail className="contact__icon" />

              <div>
                <h3 className="contact__title">Email</h3>
                <span className="contact__subtitle">prdev.solutions@gmail.com</span>
              </div>
            </div>

            <div className="contact__information">
              <PiMapPinBold className="contact__icon" />

              <div>
                <h3 className="contact__title">{t("location")}</h3>
                <span className="contact__subtitle">Campinas - SP, Brazil</span>
              </div>
            </div>
          </div>

          <form action="" className="contact__form grid">
            <div className="contact__inputs grid">
              <div className="contact__content">
                <label htmlFor="" className="contact__label">
                  {t("name")}
                </label>
                <input type="text" className="contact__input" />
              </div>

              <div className="contact__content">
                <label htmlFor="" className="contact__label">
                  Email
                </label>
                <input type="email" className="contact__input" />
              </div>
            </div>

            <div className="contact__content">
              <label htmlFor="" className="contact__label">
                {t("project")}
              </label>
              <input type="text" className="contact__input" />
            </div>

            <div className="contact__content">
              <label htmlFor="" className="contact__label">
                {t("message")}
              </label>
              <textarea
                name=""
                id=""
                cols={0}
                rows={7}
                className="contact__input"
                style={{ resize: "none" }}
              ></textarea>
            </div>

            <div>
              <a href="#" className="button button--flex">
                {t("sendMessage")}
                <PiPaperPlaneRightBold className="button__icon" />
              </a>
            </div>
          </form>
        </div>
      </section>
    </ContactSectionContainer>
  );
}
