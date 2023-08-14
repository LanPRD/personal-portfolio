import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding-top: 2rem;

  .footer__container {
    row-gap: 3.5rem;
  }

  .footer__bg {
    background-color: var(--first-color-second);
    padding: 2rem 0 3rem;
  }

  .footer__title {
    font-size: var(--h1-font-size);
    margin-bottom: var(--mb-0-25);
  }

  .footer__subtitle {
    font-size: var(--small-font-size);
  }

  .footer__links {
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;

    &:hover {
      color: var(--first-color-lighter);
    }
  }

  .footer__social {
    font-size: 2rem;
    margin-right: var(--mb-1-5);

    &:hover {
      color: var(--first-color-lighter);
    }
  }

  .footer__copy {
    font-size: var(--smaller-font-size);
    text-align: center;
    color: var(--text-color-lighter);
    margin-top: var(--mb-3);
  }

  .footer__title,
  .footer__subtitle,
  .footer__link,
  .footer__social {
    color: #fff;
  }

  @media screen and (min-width: 568px) {
    .footer__container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (min-width: 568px) {
    .footer__container {
      grid-template-columns: repeat(3, 1fr);
    }

    .footer__bg {
      padding: 4.8rem 0 5.6rem;
    }

    .footer__links {
      flex-direction: row;
      column-gap: 3.2rem;
    }

    .footer__socials {
      justify-self: flex-end;
    }

    .footer__copy {
      margin-top: 7.2rem;
    }
  }
`;
