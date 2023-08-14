import styled from "styled-components";

export const PortfolioContentStyled = styled.div`
  padding: 0 1.5rem;

  .portfolio__img {
    width: 265px;
    border-radius: 0.5rem;
    justify-self: center;
  }

  .portfolio__title {
    font-size: var(--h3-font-size);
    margin-bottom: var(--mb-0-5);
  }

  .portfolio__description {
    margin-bottom: var(--mb-0-75);
  }

  .portfolio__button .button__icon {
    transition: 0.3s;
  }

  .portfolio__button:hover .button__icon {
    transform: translateX(0.25rem);
  }

  @media screen and (min-width: 568px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 768px) {
    .portfolio__img {
      width: 320px;
    }
  }

  @media screen and (min-width: 768px) {
    align-items: center;
  }

  @media (min-width: 1024px) {
    column-gap: 8rem;
  }
`;
