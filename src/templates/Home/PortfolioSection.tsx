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
          <Carousel buttons>
            <PortfolioContent
              title={"MBook"}
              description={
                "Personal mobile diary app for jotting thoughts, feelings, and moments. Features rich text entries, cards, and buttons. No animations. Designed for individuals seeking self-reflection and sharing. Capturing actions, thoughts, and moments fosters self-awareness, expression, and clarity. Developed with Flutter, Node, and Dart. An intuitive note-taking app enabling text, images, and video entries. A unique diary solution in the market."
              }
            />

            <PortfolioContent
              title={"LuckySea"}
              description={"Website adaptable to all devices, with ui components and animated interactions."}
              demoLink="https://dev.luckysea.gg/"
            />

            <PortfolioContent
              title={"Greengrocer"}
              description={"Website adaptable to all devices, with ui components and animated interactions."}
              img={{ src: "/assets/img/greengrocer.webp", alt: "Greengrocer" }}
            />

            <PortfolioContent
              title={"Unimidia"}
              description={"Website adaptable to all devices, with ui components and animated interactions."}
              demoLink="https://dev.unimidia.tv/"
              img={{ src: "/assets/img/unimidia.png", alt: "Unimidia" }}
            />
          </Carousel>
        </div>
      </PortfolioContainer>
    </section>
  );
}
