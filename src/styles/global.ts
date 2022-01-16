import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --header-height: 3rem;

    --hue-color: 152; // Purple 250 - Green 152 - Blue 230 - Pink 340

    --first-color: hsl(var(--hue-color), 69%, 61%);
    --first-color-second: hsl(var(--hue-color), 69%, 61%);
    --first-color-alt: hsl(var(--hue-color), 57%, 53%);
    --first-color-lighter: hsl(var(--hue-color), 92%, 85%);
    --title-color: hsl(var(--hue-color), 8%, 12%);
    --text-color: hsl(var(--hue-color), 8%, 45%);
    --text-color-light: hsl(var(--hue-color), 8%, 65%);
    --input-color: hsl(var(--hue-color), 70%, 96%);
    --body-color: hsl(var(--hue-color), 60%, 99%);
    --container-color: #fff;

    --big-font-size: 3.2rem;
    --h1-font-size: 2.4rem;
    --h2-font-size: 2rem;
    --h3-font-size: 1.8rem;
    --normal-font-size: 1.6rem;
    --small-font-size: 1.4rem;
    --smaller-font-size: 1.2rem;

    --font-medium: 500;
    --font-semi-bold: 600;

    --mb-0-25: 0.4rem;
    --mb-0-5: 0.8rem;
    --mb-0-75: 1.2rem;
    --mb-1: 1.6rem;
    --mb-1-5: 2rem;
    --mb-2: 2.4rem;
    --mb-2-5: 2.8rem;
    --mb-3: 3.2rem;

    --z-tooltip: 10;
    --z-fixed: 100;
    --z-modal: 1000;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
    scroll-behavior: smooth;
  }

  body {
    margin: 0 0 var(--header-height) 0;

    background-color: var(--body-color);
    color: var(--text-color);
  }

  body, input, textarea, select, button {
    font: 400 var(--normal-font-size) "Poppins", sans-serif;
  }

  h1, h2, h3, h4 {
    color: var(--title-color);
    font-weight: var(--font-semi-bold);
  }

  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .section {
    padding: 3.2rem 0 6.4rem;
  }

  .section__title {
    font-size: var(--h1-font-size);
  }

  .section__subtitle {
    display: block;
    font-size: var(--small-font-size);
    margin-bottom: var(--mb-3);
  }

  .section__title, .section__subtitle {
    text-align: center;
  }

  .container {
    max-width: 768px;
    margin-left: var(--mb-1-5);
    margin-right: var(--mb-1-5);
  }

  .grid {
    display: grid;
    gap: 1.5rem;
  }

  .button {
    display: inline-block;
    background-color: var(--first-color);
    color: #FFF;
    padding: 1.6rem;
    border-radius: .4rem;
    font-weight: var(--font-medium);

    &:hover {
      background-color: var(--first-color-alt);
    }
  }

  .button--flex {
    display: inline-flex;
    align-items: center;
  }

  .button--small {
    padding: 1.4rem 1.6rem;
  }

  .button--link {
    padding: 0;
    background-color: transparent;
    color: var(--first-color);

    &:hover {
      background-color: transparent;
      color: var(--first-color-alt);
    }
  }

  .skills__close .skills__list {
    height: 0;
    overflow: hidden;
  }

  .skills__open .skills__list {
    height: max-content;
    margin-bottom: var(--mb-2-5);
  }

  .skills__open .skills__arrow {
    transform: rotate(-180deg);
  }

  @media screen and (min-width: 968px) {
    :root {
      --big-font-size: 4.8rem;
      --h1-font-size: 3.6rem;
      --h2-font-size: 2.4rem;
      --h3-font-size: 2rem;
      --normal-font-size: 1.4rem;
      --small-font-size: 1.2rem;
      --smaller-font-size: 1rem;
    }
  }

  /* @media (max-width: 1080px) {
    font-size: 14px;
  }

  @media (max-width: 720px) {
    font-size: 12px;
  } */
`;
