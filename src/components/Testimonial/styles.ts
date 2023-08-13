import styled from "styled-components";

export const TestimonialContainer = styled.div`
  .testimonial__data,
  .testimonial__header {
    display: flex;
  }

  .testimonial__data {
    justify-content: space-between;
    margin-bottom: var(--mb-1);
  }

  .testimonial__img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: var(--mb-0-75);
  }

  .testimonial__name {
    font-size: var(--h3-font-size);
    font-weight: var(--font-medium);
  }

  .testimonial__client {
    font-size: var(--small-font-size);
    color: var(--text-color-light);
  }

  .testimonial__description {
    margin-bottom: var(--mb-2-5);
  }

  .testimonial__icon-start {
    color: var(--first-color);
  }
`;
