import styled from "styled-components";

export const SocialDiv = styled.div`
  display: grid;
  grid-template-columns: max-content;
  row-gap: 1.6rem;

  .home__social-icon {
    font-size: 2rem;
    color: var(--first-color);

    &:hover {
      color: var(--first-color-alt);
    }
  }
`;
