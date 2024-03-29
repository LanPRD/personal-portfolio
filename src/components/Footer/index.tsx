import { useTranslations } from "next-intl";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { FooterContainer } from "./styles";

export function Footer() {
  const t = useTranslations("footer");

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
              <Link href="#services" className="footer__link">
                {t("services")}
              </Link>
            </li>

            <li>
              <Link href="#portfolio" className="footer__link">
                {t("portfolio")}
              </Link>
            </li>

            <li>
              <Link href="#contact" className="footer__link">
                {t("contactme")}
              </Link>
            </li>
          </ul>

          <div className="footer__socials">
            <a href="https://www.instagram.com/allanprd/" target="_blank" className="footer__social" rel="noreferrer">
              <FaInstagram />
            </a>

            <a href="#" target="_blank" className="footer__social">
              <LuTwitter />
            </a>

            <a href="https://www.linkedin.com/in/lanprd" target="_blank" className="footer__social" rel="noreferrer">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <p className="footer__copy">&#169; {t("copy")}</p>
      </div>
    </FooterContainer>
  );
}
