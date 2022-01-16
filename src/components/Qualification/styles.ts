import styled from "styled-components";

export const QualificationData = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content 1fr;
  column-gap: 2.4rem;

  .qualification__title {
    font-size: var(--normal-font-size);
    font-weight: var(--font-medium);
  }

  .qualification__subtitle {
    display: inline-block;
    font-size: var(--small-font-size);
    margin-bottom: var(--mb-1);
  }

  .qualification__calendar {
    font-size: var(--smaller-font-size);
    color: var(--text-color-light);
  }

  .qualification__rounder {
    display: inline-block;
    width: 13px;
    height: 13px;
    background-color: var(--first-color);
    border-radius: 50%;
  }

  .qualification__line {
    display: block;
    width: 1px;
    height: 100%;
    background-color: var(--first-color);
    transform: translate(6px, -7px);
  }
`;
