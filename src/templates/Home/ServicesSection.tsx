import { useTranslations } from "next-intl";
import { useState } from "react";
import { BiCode } from "react-icons/bi";
import { FaServer } from "react-icons/fa";
import { FiSmartphone } from "react-icons/fi";
import { TiArrowRight } from "react-icons/ti";
import { ServicesModal } from "../../components/ServicesModal";
import { ServiceContainer } from "./styles";

interface ModalViewerProps {
  isVisible: boolean;
  modalIndex?: number;
}

export function ServicesSection() {
  const t = useTranslations("services");
  const [showModal, setShowModal] = useState<ModalViewerProps>({ isVisible: false });

  return (
    <section className="services section" id="services">
      <h2 className="section__title">{t("title")}</h2>
      <span className="section__subtitle">{t("subtitle")}</span>

      <ServiceContainer className="services__container containter grid">
        <div className="services__content">
          <div>
            <BiCode className="services__icon" />
            <h3 className="services__title">
              Frontend <br /> Development
            </h3>

            <span
              onClick={() => setShowModal({ isVisible: true, modalIndex: 0 })}
              className="button button--flex button--small button--link services__button"
            >
              {t("more")} <TiArrowRight className="button__icon" />
            </span>

            {showModal.modalIndex === 0 && (
              <ServicesModal
                isVisible={showModal.isVisible}
                callbackShowModal={setShowModal}
                title="Frontend Development"
                services={[
                  "React.js.",
                  "Next.js.",
                  "Tailwind, styled-components, Radix, etc.",
                  "jQuery and Vanilla JS."
                ]}
              />
            )}
          </div>
        </div>

        <div className="services__content">
          <div>
            <FaServer className="services__icon" />
            <h3 className="services__title">
              Backend <br /> Development
            </h3>

            <span
              onClick={() => setShowModal({ isVisible: true, modalIndex: 1 })}
              className="button button--flex button--small button--link services__button"
            >
              {t("more")} <TiArrowRight className="button__icon" />
            </span>

            {showModal.modalIndex === 1 && (
              <ServicesModal
                isVisible={showModal.isVisible}
                callbackShowModal={setShowModal}
                title="Backend Development"
                services={["Backend with Node.js.", "AWS Serverless configurations.", "Database.", "IA.", "Bots."]}
              />
            )}
          </div>
        </div>

        <div className="services__content">
          <div>
            <FiSmartphone className="services__icon" />
            <h3 className="services__title">
              Mobile <br /> Development
            </h3>

            <span
              onClick={() => setShowModal({ isVisible: true, modalIndex: 3 })}
              className="button button--flex button--small button--link services__button"
            >
              {t("more")} <TiArrowRight className="button__icon" />
            </span>

            {showModal.modalIndex === 3 && (
              <ServicesModal
                isVisible={showModal.isVisible}
                callbackShowModal={setShowModal}
                title="Mobile Development"
                services={["Flutter/Dart.", "React Native.", "Tailwind, styled-components, etc."]}
              />
            )}
          </div>
        </div>
      </ServiceContainer>
    </section>
  );
}
