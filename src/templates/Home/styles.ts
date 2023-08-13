import styled from "styled-components";

export const HomeContainer = styled.div`
  gap: 1.6rem;

  .home__content {
    grid-template-columns: 0.5fr 3fr;
    padding-top: 5.6rem;
    align-items: center;
  }
`;

export const HomeScroll = styled.div`
  display: none;

  .home__scroll-button {
    color: var(--first-color);
    transition: 0.3s;

    &:hover {
      transform: translateY(0.4rem);
    }
  }

  .home__scroll-mouse {
    font-size: 3.2rem;
  }

  .home__scroll-name {
    font-size: var(--small-font-size);
    color: var(--title-color);
    font-weight: var(--font-medium);
    margin-right: var(--mb-0-25);
  }

  .home__scroll-name {
    font-size: 2rem;
  }
`;

export const HomeData = styled.div`
  grid-column: 1/3;

  .home__title {
    font-size: var(--big-font-size);
  }

  .home__subtitle {
    font-size: var(--h3-font-size);
    color: var(--text-color);
    font-weight: var(--font-medium);
    margin-bottom: var(--mb-0-75);
  }

  .home__description {
    margin-bottom: var(--mb-2);
  }

  .button__icon {
    font-size: 2rem;
    margin-left: var(--mb-0-5);
    transition: 0.3s;
  }
`;

export const AboutContainer = styled.div`
  .about__img {
    width: 200px;
    border-radius: 0.8rem;
    justify-self: center;
    align-self: center;
  }

  .about__description {
    text-align: center;
    margin-bottom: var(--mb-2-5);
  }

  .about__info {
    display: flex;
    justify-content: space-evenly;

    @media screen and (max-width: 768px) {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      margin-bottom: var(--mb-2-5);

      row-gap: 0.4rem;
    }
  }

  .about__buttons {
    grid-column: 1/4;

    display: flex;
    justify-content: center;
  }
`;

export const SkillContainer = styled.div`
  row-gap: 0;

  .skills__header {
    display: flex;
    align-items: center;
    margin-bottom: var(--mb-2-5);
    cursor: pointer;
  }

  .skills__icon,
  .skills__arrow {
    font-size: 3.2rem;
    color: var(--first-color);
  }

  .skills__icon {
    margin-right: var(--mb-0-75);
  }

  .skills__title {
    font-size: var(--h3-font-size);
  }

  .skills__subtitle {
    font-size: var(--small-font-size);
    color: var(--text-color-light);
  }

  .skills__arrow {
    margin-left: auto;
    transition: 0.4s;
  }

  .skills__list {
    row-gap: 2.4rem;
    padding-left: 4rem;
  }
`;

export const QualificationContainer = styled.div`
  .qualification__tabs {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: var(--m-2);
  }

  .qualification__button {
    font-size: var(--h3-font-size);
    font-weight: var(--font-medium);
    cursor: pointer;

    &:hover {
      color: var(--first-color);
    }
  }

  .qualification__icon {
    font-size: 2rem;
    margin-right: var(--mb-0-25);
  }

  .qualification__deactive {
    display: none;
  }

  .qualification__active {
    display: block;
  }

  .qualification__button.qualification__active {
    color: var(--first-color);
  }
`;

export const ServiceContainer = styled.div`
  gap: 2.4rem;
  grid-template-columns: repeat(2, 1fr);

  .services__content {
    position: relative;
    background-color: var(--container-color);
    padding: 5.6rem 0.8rem 2rem 2.4rem;
    border-radius: 0.4rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
    transition: 0.3s;

    &:hover {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }
  }

  .services__icon {
    display: block;
    font-size: 2.4rem;
    color: var(--first-color);
    margin-bottom: var(--mb-1);
  }

  .services__title {
    font-size: var(--h3-font-size);
    margin-bottom: var(--mb-1);
    font-weight: var(--font-medium);
  }

  .services__button {
    cursor: pointer;
    font-size: var(--small-font-size);

    & .button__icon {
      transition: 0.3s;
    }

    &:hover .button__icon {
      transform: translateX(0.4rem);
    }
  }
`;

export const PortfolioContainer = styled.div`
  overflow: initial;
`;

export const ProjectSectionContainer = styled.div`
  .project {
    text-align: center;
  }

  .project__bg {
    background-color: var(--first-color-second);
    padding-top: 3rem;
  }

  .project__title {
    font-size: var(--h2-font-size);
    margin-bottom: var(--mb-0-75);
  }

  .project__description {
    margin-bottom: var(--mb-1-5);
  }

  .project__title,
  .project__description {
    color: #fff;
  }

  .project__img {
    width: 232px;
    justify-self: center;
  }
`;

export const ContactSectionContainer = styled.div`
  .contact__container {
    row-gap: 3rem;
  }

  .contact__information {
    display: flex;
    margin-bottom: var(--mb-2);
    align-items: center;
  }

  .contact__icon {
    font-size: 3rem;
    color: var(--first-color);
    margin-right: var(--mb-0-75);
  }

  .contact__title {
    font-size: var(--h3-font-size);
    font-weight: var(--font-medium);
  }

  .contact__subtitle {
    font-size: var(--small-font-size);
    color: var(--text-color-light);
  }

  .contact__content {
    background-color: var(--input-color);
    border-radius: 0.5rem;
    padding: 0.75rem 1rem 0.25rem;
  }

  .contact__label {
    font-size: var(--smaller-font-size);
    color: var(--title-color);
  }

  .contact__input {
    width: 100%;
    background-color: var(--input-color);
    color: var(--text-color);
    font-family: var(--body-font);
    font-size: var(--normal-font-size);
    border: none;
    outline: none;
    padding: 0.25rem 0.5rem 0.5rem 0;
  }
`;
