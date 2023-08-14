import { useState } from "react";
import { BiCode } from "react-icons/bi";
import { FaServer } from "react-icons/fa";
import { TiArrowRight } from "react-icons/ti";
import { ServicesModal } from "../../components/ServicesModal";
import { ServiceContainer } from "./styles";

interface ModalViewerProps {
  isVisible: boolean;
  modalIndex?: number;
}

export function ServicesSection() {
  const [showModal, setShowModal] = useState<ModalViewerProps>({ isVisible: false });

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>

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
              View More <TiArrowRight className="button__icon" />
            </span>

            {showModal.modalIndex === 0 && (
              <ServicesModal
                isVisible={showModal.isVisible}
                callbackShowModal={setShowModal}
                title="Frontend Development"
                services={[
                  "I develop the webpage interface.",
                  "App development - Flutter/Dart.",
                  "Backend connectivity.",
                  "Frameworks - React and Next.js.",
                  "Tailwind, styled-components, sass",
                  "jQuery and Vanilla JS"
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
              View More <TiArrowRight className="button__icon" />
            </span>

            {showModal.modalIndex === 1 && (
              <ServicesModal
                isVisible={showModal.isVisible}
                callbackShowModal={setShowModal}
                title="Backend Development"
                services={[
                  "Backend with Node.js.",
                  "AWS Serverless configurations.",
                  "Express configurations.",
                  "Typescript.",
                  "NoSQL Database - DynamoDB."
                ]}
              />
            )}
          </div>
        </div>

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
              View More <TiArrowRight className="button__icon" />
            </span>

            {showModal.modalIndex === 0 && (
              <ServicesModal
                isVisible={showModal.isVisible}
                callbackShowModal={setShowModal}
                title="Frontend Development"
                services={[
                  "I develop the webpage interface.",
                  "App development - Flutter/Dart.",
                  "Backend connectivity.",
                  "Frameworks - React and Next.js.",
                  "Tailwind, styled-components, sass",
                  "jQuery and Vanilla JS"
                ]}
              />
            )}
          </div>
        </div>
      </ServiceContainer>
    </section>
  );
}
