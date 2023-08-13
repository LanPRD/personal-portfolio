import { Dispatch, SetStateAction } from "react";

import { BiCheckCircle } from "react-icons/bi";
import { TiTimes } from "react-icons/ti";

import { ModalContainer } from "./styles";

interface ServicesModalProps {
  title: string;
  services: string[];
  isVisible: boolean;
  callbackShowModal: Dispatch<SetStateAction<{ isVisible: boolean; modalIndex?: number }>>;
}

export function ServicesModal({ services, title, isVisible, callbackShowModal }: ServicesModalProps) {
  return (
    <ModalContainer isVisible={isVisible}>
      <div className="services__modal-content">
        <h4 className="services__modal-title">
          {title.split(" ")[0]} <br /> {title.split(" ")[1]}
        </h4>

        <TiTimes onClick={() => callbackShowModal({ isVisible: false })} className="services__modal-close" />

        <ul className="services__modal-services grid">
          {services.map((service, index) => (
            <li key={index} className="services__modal-service">
              <BiCheckCircle className="services__modal-icon" />
              <p>{service}</p>
            </li>
          ))}
        </ul>
      </div>
    </ModalContainer>
  );
}
