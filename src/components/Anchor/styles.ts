import styled from "styled-components";

export const LiTag = styled.li`
  .nav__link {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: var(--small-font-size);
    color: var(--title-color);
    font-weight: var(--font-medium);

    &:hover {
      color: var(--first-color);
    }

    & > svg {
      font-size: 1.8rem;
    }
  }
`;
