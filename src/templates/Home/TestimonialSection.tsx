import { Carousel } from "../../components/Carousel";
import { Testimonial } from "../../components/Testimonial";

export function TestimonialSection() {
  return (
    <section className="testimonial section">
      <h2 className="section__title">Testimonial</h2>
      <span className="section__subtitle">My client saying</span>

      <div className="testimonial__container container">
        <Carousel
          buttons={false}
          breakpoints={{
            "(min-width: 568px)": {
              slides: {
                perView: 2
              }
            }
          }}
        >
          <Testimonial
            name={"Sara Smith"}
            type={"Client"}
            description={
              "I get a good impression, I carry out my project with all the possible quality and attention and support 24 hours a day."
            }
          />

          <Testimonial
            name={"Matt Robinson"}
            type={"Client"}
            description={
              "I get a good impression, I carry out my project with all the possible quality and attention and support 24 hours a day."
            }
          />

          <Testimonial
            name={"Raul Harris"}
            type={"Client"}
            description={
              "I get a good impression, I carry out my project with all the possible quality and attention and support 24 hours a day."
            }
          />
        </Carousel>
      </div>
    </section>
  );
}
