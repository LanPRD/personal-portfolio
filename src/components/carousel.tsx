"use client";

import { KeenSliderInstance } from "keen-slider";
import { useKeenSlider } from "keen-slider/react";
import { Children, useCallback, useState } from "react";
import { cn } from "../lib/css";

interface CarouselProps {
  buttons?: boolean;
  breakpoints?: any;
  children: React.ReactNode;
}

export function Carousel({ buttons = true, breakpoints, children }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderInstance, setSliderInstance] = useState<KeenSliderInstance | null>(null);
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    initial: 0,
    slides: {
      spacing: 48
    },
    breakpoints: breakpoints,
    created(slider) {
      setSliderInstance(slider);

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

  const childrenArray = Children.toArray(children);
  const slidesCount = sliderInstance?.track.details.slides.length ?? 0;

  const handlePrev = useCallback(() => {
    sliderInstance?.prev();
  }, [sliderInstance]);

  const handleNext = useCallback(() => {
    sliderInstance?.next();
  }, [sliderInstance]);

  const handleGoToSlide = useCallback(
    (idx: number) => {
      sliderInstance?.moveToIdx(idx);
    },
    [sliderInstance]
  );

  return (
    <>
      <div className="relative">
        <div ref={sliderRef} className="keen-slider">
          {childrenArray.map((child, index) => (
            <div key={index} className="keen-slider__slide bg-transparent flex items-center justify-center h-auto px-2">
              {child}
            </div>
          ))}
        </div>

        {sliderInstance && buttons && (
          <>
            <Arrow left onClick={handlePrev} />
            <Arrow onClick={handleNext} />
          </>
        )}
      </div>

      {sliderInstance && childrenArray.length > 0 && (
        <Dots sliders={[...Array(slidesCount).keys()]} onGoToSlide={handleGoToSlide} currentSlide={currentSlide} />
      )}
    </>
  );
}

function Arrow(props: { left?: boolean; onClick: (e: any) => void }) {
  return (
    <button
      type="button"
      onClick={props.onClick}
      aria-label={props.left ? "Previous slide" : "Next slide"}
      className={cn(
        "w-8 h-8 absolute top-1/2 -translate-y-1/2 bg-transparent border-none p-0",
        "cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-(--first-color)",
        props.left ? "-left-3 lg:-left-22" : "-right-3 lg:-right-22"
      )}
    >
      <svg
        className="w-full h-full fill-(--first-color)"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        {props.left && <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />}
        {!props.left && <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />}
      </svg>
    </button>
  );
}

function Dots(props: { sliders: number[]; onGoToSlide: (idx: number) => void; currentSlide: number }) {
  return (
    <div className="flex justify-center" role="tablist" aria-label="Slides">
      {props.sliders.map(idx => {
        const isActive = props.currentSlide === idx;
        return (
          <button
            key={idx}
            type="button"
            role="tab"
            aria-label={`Go to slide ${idx + 1}`}
            aria-selected={isActive}
            onClick={() => props.onGoToSlide(idx)}
            className={cn(
              "border-none min-w-11 min-h-11 rounded-full",
              "m-[2rem_4px] cursor-pointer",
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-(--first-color)",
              "lg:mt-[22.4]",
              "flex items-center justify-center"
            )}
          >
            <span
              className={cn("w-3 h-3 rounded-full transition-colors", isActive ? "bg-(--first-color)" : "bg-[#c5c5c5]")}
              aria-hidden="true"
            />
          </button>
        );
      })}
    </div>
  );
}
