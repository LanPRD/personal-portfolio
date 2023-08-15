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
      <div
        style={{
          position: "relative",
          height: "208px",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
        className="portfolio__img"
      >
        {img && (
          <Image
            src={img.src}
            alt={img.alt}
            className="portfolio__img"
            style={{
              objectFit: "cover"
            }}
            width={320}
            height={208}
          />
        )}
      </div>

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
