import styled, { css, keyframes } from "styled-components";

interface ModalContainerProps {
  isVisible: boolean;
}

const showModalAnimation = keyframes`
  0% {
    opacity: 0;
    visibility: hidden;

  }

  100% {
    opacity: 1;
    visibility: visible;
  }
`;

export const ModalContainer = styled.div<ModalContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.6rem;
  z-index: var(--z-modal);

  ${props =>
    props.isVisible
      ? css`
          animation: 0.3s ${showModalAnimation} ease backwards;
        `
      : css`
          animation: none;
        `};

  .services__modal-content {
    position: relative;
    background-color: var(--container-color);
    padding: 2.4rem;
    border-radius: 0.8rem;
  }

  .services__modal-services {
    row-gap: 1.6rem;
  }

  .services__modal-service {
    display: flex;
    align-items: center;
  }

  .services__modal-title {
    font-size: var(--h3-font-size);
    font-weight: var(--font-medium);
    margin-bottom: var(--mb-1-5);
  }

  .services__modal-close {
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
    font-size: 2.4rem;
    color: var(--first-color);
    cursor: pointer;
  }

  .services__modal-icon {
    color: var(--first-color);
    margin-right: var(--mb-0-25);
  }
`;
