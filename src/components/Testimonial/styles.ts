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

  div.testimonial__img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    margin-right: var(--mb-0-75);
  }

  img.testimonial__img {
    object-fit: cover;
    width: 100%;
    height: 100%;
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

  @media screen and (max-width: 350px) {
    .testimonial__data,
    .testimonial__header {
      flex-direction: column;
      align-items: center;
    }

    .testimonial__img {
      margin-right: 0;
      margin-bottom: var(--mb-0-25);
    }

    .testimonial__data,
    .testimonial__description {
      text-align: center;
    }
  }
`;
