import styled from "styled-components";

export const HomeImage = styled.div`
  .home__blob {
    width: 200px;
    fill: var(--first-color);
  }

  .home__blob-img {
    width: 170px;
  }

  @media screen and (max-width: 350px) {
    .home__blob {
      width: 180px;
    }
  }

  @media screen and (min-width: 568px) {
    order: 1;
    justify-self: center;
  }

  @media screen and (min-width: 768px) {
    .home__blob {
      width: 270px;
    }
  }
`;
