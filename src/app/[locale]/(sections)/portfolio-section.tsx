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
            title={t("items.luckysea.title")}
            description={t("luckysea")}
            demoLink="https://beta.luckysea.gg/"
            img={{ src: "/assets/img/luckysea.png", alt: t("items.luckysea.alt") }}
          />

          <PortfolioContent
            title={t("items.ledgerapi.title")}
            description={t("ledgerapi")}
            demoLink="https://github.com/LanPRD/ledger-api/"
            // img={{ src: "/assets/img/greengrocer.webp", alt: t("items.ledgerapi.alt") }}
          />

          <PortfolioContent
            title={t("items.greengrocer.title")}
            description={t("greengrocer")}
            demoLink="https://github.com/LanPRD/simple-marketplace-flutter/"
            img={{ src: "/assets/img/greengrocer.webp", alt: t("items.greengrocer.alt") }}
          />

          <PortfolioContent
            title={t("items.unimidia.title")}
            description={t("unimidia")}
            demoLink="https://dev.unimidia.tv/"
            img={{ src: "/assets/img/unimidia-bg.png", alt: t("items.unimidia.alt") }}
          />
        </Carousel>
      </div>
    </SectionWrapper>
  );
}
