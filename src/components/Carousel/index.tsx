import { KeenSliderInstance } from "keen-slider";
import { useKeenSlider } from "keen-slider/react";
import React, { ReactChild, ReactFragment, ReactPortal, useEffect, useState } from "react";
import { ArrowSvg, CarouselContainer, DotsContainer } from "./styles";

interface CarouselProps {
  buttons?: boolean;
  breakpoints?: any;
  children: React.ReactNode;
}

export function Carousel({ buttons = true, breakpoints, children }: CarouselProps) {
  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    initial: 0,
    slides: {
      spacing: 48
    },
    breakpoints: breakpoints,
    created(slider) {
      let timeout: ReturnType<typeof setTimeout>;
      let mouseOver = false;

      function clearNextTimeout() {
        clearTimeout(timeout);
      }

      function nextTimeout() {
        clearTimeout(timeout);
        if (mouseOver) return;
        timeout = setTimeout(() => {
          slider.next();
        }, 4000);
      }

      slider.container.addEventListener("mouseover", () => {
        mouseOver = true;
        clearNextTimeout();
      });

      slider.container.addEventListener("mouseout", () => {
        mouseOver = false;
        nextTimeout();
      });

      nextTimeout();

      slider.on("dragStarted", clearNextTimeout);
      slider.on("animationEnded", nextTimeout);
      slider.on("updated", nextTimeout);
      slider.on("slideChanged", slider => setCurrentSlide(slider.track.details.rel));
    }
  });

  const childrenArray = React.Children.toArray(children);

  useEffect(() => {
    if (instanceRef.current) {
      setLoaded(true);
      instanceRef.current?.update();
    }
  }, [instanceRef]);

  return (
    <>
      <CarouselContainer>
        <div ref={sliderRef} className="keen-slider">
          {childrenArray.map((child, index) => (
            <div key={index} className="keen-slider__slide number-slide1">
              {child}
            </div>
          ))}
        </div>

        {loaded && instanceRef.current && !buttons && (
          <>
            <Arrow left onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()} />
            <Arrow onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()} />
          </>
        )}
      </CarouselContainer>

      {loaded && instanceRef.current && (
        <Dots
          sliders={[...Array(instanceRef.current?.track.details.slides.length).keys()]}
          instanceRef={instanceRef.current}
          currentSlide={currentSlide}
        />
      )}
    </>
  );
}

function Arrow(props: { left?: boolean; onClick: (e: any) => void }) {
  return (
    <ArrowSvg
      onClick={props.onClick}
      className={`arrow ${props.left ? "arrow--left" : "arrow--right"} `}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />}
      {!props.left && <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />}
    </ArrowSvg>
  );
}

function Dots(props: { sliders: number[]; instanceRef: KeenSliderInstance; currentSlide: number }) {
  return (
    <DotsContainer>
      {props.sliders.map(idx => {
        return (
          <button
            key={idx}
            onClick={() => {
              props.instanceRef?.moveToIdx(idx);
            }}
            className={"dot" + (props.currentSlide === idx ? " active" : "")}
          ></button>
        );
      })}
    </DotsContainer>
  );
}
