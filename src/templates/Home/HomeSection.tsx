import { BiMessageSquareDetail, BiMouseAlt } from "react-icons/bi";
import { TiArrowDown } from "react-icons/ti";
import { Blob } from "../../components/Blob";
import { Social } from "../../components/Social";
import { HomeContainer, HomeData, HomeScroll } from "./styles";

export function HomeSection() {
  return (
    <section className="home section" id="home">
      <HomeContainer className="container grid">
        <div className="home__content grid">
          <Social />

          <Blob />

          <HomeData>
            <h1 className="home__title">Hi, I&apos;m Allan</h1>
            <h3 className="home__subtitle">Fullstack developer</h3>
            <p className="home__description">
              This is a description This is a description This is a description This is a description This is a
              description This is a description This is a description
            </p>
            <a href="#contact" className="button button--flex">
              Contact Me <BiMessageSquareDetail className="button__icon" />
            </a>
          </HomeData>
        </div>

        <HomeScroll>
          <a href="#about" className="home__scroll-button button--flex">
            <BiMouseAlt className="home__scroll-mouse" />
            <span className="home__scroll-name">Scroll down</span>
            <TiArrowDown className="home__scroll-arrow" />
          </a>
        </HomeScroll>
      </HomeContainer>
    </section>
  );
}
