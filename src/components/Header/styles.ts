import styled from "styled-components";

export const HeaderTag = styled.header`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: var(--z-fixed);
  background-color: var(--body-color);

  @media screen and (min-width: 768px) {
    top: 0;
    bottom: initial;
  }
`;

export const NavTag = styled.nav`
  max-width: 968px;
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    height: calc(var(--header-height) + 2.4rem);
    column-gap: 1.6rem;

    .nav__icon,
    .nav__close,
    .nav__toggle {
      display: none;
    }

    .nav__list {
      display: flex;
      column-gap: 3.2rem;
    }

    .nav__menu {
      margin-left: auto;
    }

    .change-theme {
      margin: 0;
    }
  }

  .nav__logo,
  .nav__toggle {
    color: var(--title-color);
    font-weight: var(--font-medium);
  }

  .nav__logo:hover {
    color: var(--first-color);
  }

  .nav__toggle {
    font-size: 2rem;
    cursor: pointer;

    &:hover {
      color: var(--first-color);
    }
  }

  .nav__list {
    grid-template-columns: repeat(3, 1fr);
    gap: 3.2rem;
  }

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

  .nav__close {
    position: absolute;
    right: 2rem;
    bottom: 0.8rem;
    font-size: 2.4rem;
    cursor: pointer;
    color: var(--first-color);

    &:hover {
      color: var(--first-color-alt);
    }
  }

  .show-menu {
    bottom: 0 !important;
  }

  @media screen and (max-width: 767px) {
    .nav__menu {
      position: fixed;
      bottom: -100%;
      left: 0;
      width: 100%;
      background-color: var(--body-color);
      padding: 3.2rem 2.4rem 6.4rem;
      box-shadow: 0 -1px 4px rgba(0, 0, 0, 0.15);
      border-radius: 2.4rem 2.4rem 0 0;
      transition: 0.3s;
    }
  }
`;
