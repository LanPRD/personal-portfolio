import styled from "styled-components";

export const Content = styled.div`
  .about__info-title {
    font-size: var(--h2-font-size);
    font-weight: var(--font-semi-bold);
    color: var(--title-color);
  }

  .about__info-name {
    font-size: var(--smaller-font-size);
  }

  .about__info-title,
  .about__info-name {
    display: block;
    text-align: center;
  }
`;
