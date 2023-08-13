import styled from "styled-components";

export const CarouselContainer = styled.div`
  position: relative;

  [class^="number-slide"],
  [class*=" number-slide"] {
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;

    padding: 0px 6px;
  }
`;

export const DotsContainer = styled.div`
  display: flex;
  justify-content: center;

  .dot {
    border: none;
    width: 10px;
    height: 10px;
    background: #c5c5c5;
    border-radius: 50%;
    margin: 2.5rem 4px;
    padding: 6px;
    cursor: pointer;
  }

  .dot:focus {
    outline: none;
  }

  .dot.active {
    background: var(--first-color);
  }
`;

export const ArrowSvg = styled.svg`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  fill: var(--first-color);
  cursor: pointer;

  &.arrow--left {
    left: -0.75rem;
  }

  &.arrow--right {
    left: auto;
    right: -0.75rem;
  }

  &.arrow--disabled {
    fill: rgba(255, 255, 255, 0.5);
  }
`;
