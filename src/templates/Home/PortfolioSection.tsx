import { useTranslations } from "next-intl";
import { Carousel } from "../../components/Carousel";
import { PortfolioContent } from "../../components/PortfolioContent";
import { PortfolioContainer } from "./styles";

export function PortfolioSection() {
  const t = useTranslations("portfolio");

  return (
    <section className="portifolio section" id="portfolio">
      <h2 className="section__title">{t("title")}</h2>
      <span className="section__subtitle">{t("subtitle")}</span>

      <PortfolioContainer className="container">
        <div>
          <Carousel buttons>
            <PortfolioContent
              title={"MBook"}
              description={t("mbook")}
              img={{ src: "/assets/img/mbook.png", alt: "MBook banner project" }}
            />

            <PortfolioContent
              title={"LuckySea"}
              description={t("luckysea")}
              demoLink="https://dev.luckysea.gg/"
              img={{ src: "/assets/img/luckysea.png", alt: "LuckySea banner project" }}
            />

            <PortfolioContent
              title={"Greengrocer"}
              description={t("greengrocer")}
              img={{ src: "/assets/img/greengrocer.webp", alt: "Greengrocer banner project" }}
            />

            <PortfolioContent
              title={"Unimidia"}
              description={t("unimidia")}
              demoLink="https://unimidia.tv/"
              img={{ src: "/assets/img/unimidia-bg.png", alt: "Unimidia banner project" }}
            />
          </Carousel>
        </div>
      </PortfolioContainer>
    </section>
  );
}
