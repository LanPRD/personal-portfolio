import { Carousel } from "@/components/carousel";
import { PortfolioContent } from "@/components/portfolio-content";
import { SectionWrapper } from "@/components/section-wrapper";
import { useTranslations } from "next-intl";

export function PortfolioSection() {
  const t = useTranslations("portfolio");

  return (
    <SectionWrapper id="portfolio" title={t("title")} subtitle={t("subtitle")}>
      <div className="container overflow-initial">
        <Carousel buttons>
          <PortfolioContent
            title="MBook"
            description={t("mbook")}
            img={{ src: "/assets/img/mbook.png", alt: "MBook banner project" }}
          />

          <PortfolioContent
            title="LuckySea"
            description={t("luckysea")}
            demoLink="https://beta.luckysea.gg/"
            img={{ src: "/assets/img/luckysea.png", alt: "LuckySea banner project" }}
          />

          <PortfolioContent
            title="Greengrocer"
            description={t("greengrocer")}
            demoLink="https://github.com/LanPRD/simple-marketplace-flutter/"
            img={{ src: "/assets/img/greengrocer.webp", alt: "Greengrocer banner project" }}
          />

          <PortfolioContent
            title="Unimidia"
            description={t("unimidia")}
            demoLink="https://dev.unimidia.tv/"
            img={{ src: "/assets/img/unimidia-bg.png", alt: "Unimidia banner project" }}
          />
        </Carousel>
      </div>
    </SectionWrapper>
  );
}
