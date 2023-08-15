import styled from "styled-components";

export const HomeContainer = styled.div`
  gap: 1.6rem;

  .home__content {
    grid-template-columns: 0.5fr 3fr;
    padding-top: 5.6rem;
    align-items: center;
  }

  @media screen and (max-width: 350px) {
    .home__content {
      grid-template-columns: 0.25fr 3fr;
    }
  }

  @media screen and (min-width: 568px) {
    .home__content {
      grid-template-columns: max-content 1fr 1fr;
    }
  }

  @media screen and (min-width: 768px) {
    row-gap: 8rem;

    .home__content {
      padding-top: 6.4rem;
      column-gap: 3.2rem;
    }
  }
`;

export const HomeScroll = styled.div`
  display: none;
  margin-top: 10.4rem;

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

  @media screen and (min-width: 768px) {
    display: block;

    .home__scroll-button {
      margin-left: 4.8rem;
    }
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

  @media screen and (min-width: 568px) {
    grid-column: initial;
  }
`;

export const AboutContainer = styled.div`
  .about__img {
    width: 200px;
    border-radius: 0.8rem;
    justify-self: center;
    align-self: flex-start;
  }

  .about__description {
    text-align: center;
    margin-bottom: var(--mb-2-5);
  }

  .about__info {
    margin-bottom: var(--mb-2-5);
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: 0.4rem;
  }

  .about__buttons {
    grid-column: 1/4;

    display: flex;
    justify-content: center;
  }

  @media screen and (min-width: 568px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 768px) {
    column-gap: 8rem;

    .about__img {
      width: 350px;
    }

    .about__description {
      text-align: initial;
    }

    .about__info {
      justify-content: space-between;
    }

    .about__buttons {
      justify-content: initial;
    }
  }
`;

export const SkillWrapper = styled.div`
  @media screen and (min-width: 568px) {
    grid-template-columns: repeat(2, 1fr);
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

  @media screen and (max-width: 350px) {
    .skills__title {
      font-size: var(--normal-font-size);
    }
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
  }

  .qualification__button.qualification__active {
    color: var(--first-color);
  }

  .qualification__sections {
    margin-top: var(--mb-3);
  }

  @media screen and (min-width: 568px) {
    .qualification__sections {
      display: grid;
      grid-template-columns: 0.6fr;
      justify-content: center;
    }
  }

  @media screen and (min-width: 768px) {
    .qualification__tabs {
      justify-content: center;
    }

    .qualification__button {
      margin: 0 var(--mb-1);
    }

    .qualification__sections {
      grid-template-columns: 0.5fr;
    }
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

  @media screen and (max-width: 350px) {
    grid-template-columns: max-content;
    justify-content: center;

    .services__content {
      padding-right: 4.5rem;
    }
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 218px);
    justify-content: center;

    .services__icon {
      font-size: 3.2rem;
    }

    .services__content {
      /* padding: 9.6rem 0 3.2rem 2.4rem; */
    }
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 268px);
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

  @media screen and (max-width: 350px) {
    .project__img {
      width: 200px;
    }
  }

  @media screen and (min-width: 568px) {
    .project__container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (max-width: 768px) {
    .project__data {
      padding-bottom: 3rem;
    }
  }

  @media screen and (min-width: 768px) {
    text-align: initial;

    .project__bg {
      background: none;
    }

    .project__container {
      background-color: var(--first-color-second);
      border-radius: 1.6rem;
      padding: 4.8rem 4rem;
      grid-template-columns: 1fr max-content;
      column-gap: 4.8rem;
    }

    .project__data {
      /* padding-top: 1.2rem; */
    }
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

  @media screen and (min-width: 568px) {
    .contact__container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (min-width: 1024px) {
    .contact__form {
      width: 460px;
    }

    .contact__inputs {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
