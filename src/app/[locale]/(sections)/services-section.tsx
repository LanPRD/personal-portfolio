import { useTranslations } from "next-intl";
import { useState } from "react";
import { BiCode } from "react-icons/bi";
import { FaServer } from "react-icons/fa";
import { FiSmartphone } from "react-icons/fi";
import { TiArrowRight } from "react-icons/ti";
import { ServicesModal } from "../../../components/service-modal";
import { cn } from "../../../lib/css";

interface ModalViewerProps {
  isVisible: boolean;
  modalIndex?: number;
}

export function ServicesSection() {
  const t = useTranslations("services");
  const [showModal, setShowModal] = useState<ModalViewerProps>({ isVisible: false });

  return (
    <section className="section" id="services">
      <h2 className="section__title">{t("title")}</h2>
      <span className="section__subtitle">{t("subtitle")}</span>

      <div
        className={cn(
          "container grid gap-[2.4rem] grid-cols-2",
          "max-[350px]:grid-cols-[max-content] max-[350px]:justify-center",
          "md:grid-cols-[repeat(3,218px)] md:justify-center",
          "lg:grid-cols-[repeat(3,268px)]"
        )}
      >
        <div
          className={cn(
            "relative bg-(--container-color) p-[5.6rem_0.8rem_2rem_2.4rem] rounded-[0.4rem]",
            "shadow-[0_2px_4px_rgba(0,0,0,0.15)] transition-shadow duration-300",
            "hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)]",
            "max-[350px]:pr-[4.5rem]"
          )}
        >
          <div>
            <BiCode className={cn("block text-[2.4rem] text-(--first-color) mb-(--mb-1)", "md:text-[3.2rem]")} />
            <h3 className="text-(length:--h3-font-size) mb-(--mb-1) font-(--font-medium)">
              Frontend <br /> Development
            </h3>

            <span
              onClick={() => setShowModal({ isVisible: true, modalIndex: 0 })}
              className="button button--flex button--small button--link cursor-pointer text-(length:--small-font-size) group"
            >
              {t("more")}
              <TiArrowRight className="button__icon transition-transform duration-300 group-hover:translate-x-[0.4rem]" />
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

        <div
          className={cn(
            "relative bg-(--container-color) p-[5.6rem_0.8rem_2rem_2.4rem] rounded-[0.4rem]",
            "shadow-[0_2px_4px_rgba(0,0,0,0.15)] transition-shadow duration-300",
            "hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)]",
            "max-[350px]:pr-[4.5rem]"
          )}
        >
          <div>
            <FaServer className={cn("block text-[2.4rem] text-(--first-color) mb-(--mb-1)", "md:text-[3.2rem]")} />
            <h3 className="text-(length:--h3-font-size) mb-(--mb-1) font-(--font-medium)">
              Backend <br /> Development
            </h3>

            <span
              onClick={() => setShowModal({ isVisible: true, modalIndex: 1 })}
              className="button button--flex button--small button--link cursor-pointer text-(length:--small-font-size) group"
            >
              {t("more")}
              <TiArrowRight className="button__icon transition-transform duration-300 group-hover:translate-x-[0.4rem]" />
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

        <div
          className={cn(
            "relative bg-(--container-color) p-[5.6rem_0.8rem_2rem_2.4rem] rounded-[0.4rem]",
            "shadow-[0_2px_4px_rgba(0,0,0,0.15)] transition-shadow duration-300",
            "hover:shadow-[0_2px_8px_rgba(0,0,0,0.15)]",
            "max-[350px]:pr-[4.5rem]"
          )}
        >
          <div>
            <FiSmartphone className={cn("block text-[2.4rem] text-(--first-color) mb-(--mb-1)", "md:text-[3.2rem]")} />
            <h3 className="text-(length:--h3-font-size) mb-(--mb-1) font-(--font-medium)">
              Mobile <br /> Development
            </h3>

            <span
              onClick={() => setShowModal({ isVisible: true, modalIndex: 3 })}
              className="button button--flex button--small button--link cursor-pointer text-(length:--small-font-size) group"
            >
              {t("more")}
              <TiArrowRight className="button__icon transition-transform duration-300 group-hover:translate-x-[0.4rem]" />
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
      </div>
    </section>
  );
}
