import styled from "styled-components";

interface SkillDataType {
  barClassName: number;
}

export const SkillData = styled.div<SkillDataType>`
  .skills__titles {
    display: flex;
    justify-content: space-between;
    margin-bottom: var(--mb-0-5);
  }

  .skills__name {
    font-size: var(--normal-font-size);
    font-weight: var(--font-medium);
  }

  .skills__bar,
  .skills__percentage {
    height: 5px;
    border-radius: 0.4rem;
  }

  .skills__bar {
    background-color: var(--first-color-lighter);
  }

  .skills__percentage {
    display: block;
    background-color: var(--first-color);
    width: ${props => props.barClassName}%;
  }
`;
