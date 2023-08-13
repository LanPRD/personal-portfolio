import { Carousel } from "../../components/Carousel";
import { PortfolioContent } from "../../components/PortfolioContent";
import { PortfolioContainer } from "./styles";

export function PortfolioSection() {
  return (
    <section className="portifolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Most recent work</span>

      <PortfolioContainer className="container">
        <div>
          <Carousel>
            <PortfolioContent
              title={"Modern Website"}
              description={"Website adaptable to all devices, with ui components and animated interactions."}
            />
            <PortfolioContent
              title={"Modern Website"}
              description={"Website adaptable to all devices, with ui components and animated interactions."}
            />
          </Carousel>
        </div>
      </PortfolioContainer>
    </section>
  );
}
