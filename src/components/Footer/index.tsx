import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { FooterContainer } from "./styles";

export function Footer() {
  return (
    <FooterContainer>
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">Allan</h1>
            <span className="footer__subtitle">Fullstack developer</span>
          </div>

          <ul className="footer__links">
            <li>
              <a href="#services" className="footer__link">
                Services
              </a>
            </li>

            <li>
              <a href="#portfolio" className="footer__link">
                Portfolio
              </a>
            </li>

            <li>
              <a href="#contact" className="footer__link">
                Contactme
              </a>
            </li>
          </ul>

          <div className="footer__socials">
            <a href="#" target="_blank" className="footer__social">
              <FaInstagram />
            </a>

            <a href="#" target="_blank" className="footer__social">
              <LuTwitter />
            </a>

            <a href="#" target="_blank" className="footer__social">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <p className="footer__copy">&#169; pr.dev. All right reserved</p>
      </div>
    </FooterContainer>
  );
}
