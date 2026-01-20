"use client";

import { KeenSliderInstance } from "keen-slider";
import { useKeenSlider } from "keen-slider/react";
import React, { useEffect, useState } from "react";
import { cn } from "../lib/css";

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
      <div className="relative">
        <div ref={sliderRef} className="keen-slider">
          {childrenArray.map((child, index) => (
            <div key={index} className="keen-slider__slide bg-transparent flex items-center justify-center h-auto px-2">
              {child}
            </div>
          ))}
        </div>

        {loaded && instanceRef.current && buttons && (
          <>
            <Arrow left onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()} />
            <Arrow onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()} />
          </>
        )}
      </div>

      {loaded && instanceRef.current && childrenArray.length > 0 && (
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
    <svg
      onClick={props.onClick}
      className={cn(
        "w-8 h-8 absolute top-1/2 -translate-y-1/2",
        "fill-(--first-color) cursor-pointer",
        props.left ? "-left-3 lg:-left-22" : "-right-3 lg:-right-22"
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />}
      {!props.left && <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />}
    </svg>
  );
}

function Dots(props: { sliders: number[]; instanceRef: KeenSliderInstance; currentSlide: number }) {
  return (
    <div className="flex justify-center">
      {props.sliders.map(idx => {
        return (
          <button
            key={idx}
            onClick={() => {
              props.instanceRef?.moveToIdx(idx);
            }}
            className={cn(
              "border-none w-4 h-4 bg-[#c5c5c5] rounded-full",
              "m-[2.5rem_4px] p-2 cursor-pointer",
              "focus:outline-none",
              "lg:mt-[22.4]",
              props.currentSlide === idx && "bg-(--first-color)"
            )}
          />
        );
      })}
    </div>
  );
}
