import Image from "next/image";
import { PiStarBold } from "react-icons/pi";
import { TestimonialContainer } from "./styles";

interface TestimonialProps {
  name: string;
  type: string;
  src: string;
  alt: string;
  description: string;
}

export function Testimonial({ description, name, type, src, alt }: TestimonialProps) {
  return (
    <TestimonialContainer>
      <div className="testimonial__content">
        <div className="testimonial__data">
          <div className="testimonial__header">
            <div className="testimonial__img">
              <Image src={src} alt={alt} className="testimonial__img" width={120} height={120} />
            </div>

            <div>
              <h3 className="testimonial__name">{name}</h3>
              <span className="testimonial__client">{type}</span>
            </div>
          </div>

          <div>
            <PiStarBold className="testimonial__icon-start" />
            <PiStarBold className="testimonial__icon-start" />
            <PiStarBold className="testimonial__icon-start" />
            <PiStarBold className="testimonial__icon-start" />
            <PiStarBold className="testimonial__icon-start" />
          </div>
        </div>

        <p className="testimonial__description">{description}</p>
      </div>
    </TestimonialContainer>
  );
}
