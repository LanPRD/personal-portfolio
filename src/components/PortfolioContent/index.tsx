import Image from "next/image";
import { TiArrowRight } from "react-icons/ti";
import { PortfolioContentStyled } from "./styles";

interface PortfolioContentProps {
  img?: {
    src: string;
    alt: string;
  };
  title: string;
  description: string;
  demoLink?: string;
}

export function PortfolioContent({ demoLink, description, title, img }: PortfolioContentProps) {
  return (
    <PortfolioContentStyled className="grid">
      <Image src={img ? img.src : ""} alt={img ? img.alt : ""} className="portfolio__img" />

      <div className="portfolio__data">
        <h3 className="portfolio__title">{title}</h3>
        <p className="portfolio__description">{description}</p>
        {demoLink && (
          <a
            href={demoLink ? demoLink : "#"}
            target="_blank"
            rel="noreferrer"
            className="button button--flex button-small portfolio__button"
          >
            Demo
            <TiArrowRight className="button__icon" />
          </a>
        )}
      </div>
    </PortfolioContentStyled>
  );
}
