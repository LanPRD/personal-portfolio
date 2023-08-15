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
              img={{ src: "/assets/img/mbook.png", alt: "MBook banner project" }}
            />

            <PortfolioContent
              title={"LuckySea"}
              description={
                "I developed a responsive NFT lootbox for desktop and web app, featuring original roulette wheels, cards, and illustrations. Technologies like ReactJS, TypeScript, ethers.js, and web3 were employed. Directly connected to the blockchain."
              }
              demoLink="https://dev.luckysea.gg/"
              img={{ src: "/assets/img/luckysea.png", alt: "LuckySea banner project" }}
            />

            <PortfolioContent
              title={"Greengrocer"}
              description={
                "I developed an e-commerce app for Android and iOS, centered around vegetables, greens, fruits, and more. It offers convenience for online shopping, featuring buttons, product cards, and shopping lists. Built with Flutter/Dart, it showcases cards, loadings, and screen transitions."
              }
              img={{ src: "/assets/img/greengrocer.webp", alt: "Greengrocer banner project" }}
            />

            <PortfolioContent
              title={"Unimidia"}
              description={
                "I created a responsive digital menu for desktop, mobile, and Android app. Features dashboards, TV control, and cards for information. Aimed at businesses looking to boost sales by promoting products. Built with ReactJS, TypeScript, styled-components, and Radix. Future marketplace implementation planned."
              }
              demoLink="https://unimidia.tv/"
              img={{ src: "/assets/img/unimidia-bg.png", alt: "Unimidia banner project" }}
            />
          </Carousel>
        </div>
      </PortfolioContainer>
    </section>
  );
}
