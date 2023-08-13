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
`;
