import { cn } from "../lib/css";

export function Blob() {
  return (
    <div
      className={cn(
        // Mobile first - blob wrapper positioning
        "sm:order-1 sm:justify-self-center"
      )}
    >
      <svg
        className={cn(
          // Base size
          "w-[200px] fill-(--first-color)",
          // Responsive sizes
          "max-[350px]:w-[180px]",
          "sm:w-[200px]",
          "md:w-[270px]",
          "lg:w-[320px]"
        )}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask id="mask0" style={{ maskType: "alpha" }}>
          <path
            d="M39.8,-53.8C52.2,-45.9,63.1,-35,71.6,-20.5C80,-6.1,86,11.9,81.2,26.4C76.5,40.9,61.1,51.9,45.8,61.9C30.5,72,15.2,81,1,79.6C-13.2,78.1,-26.3,66.2,-35.1,54.1C-43.8,41.9,-48.2,29.5,-53.3,16.6C-58.5,3.8,-64.4,-9.6,-60.7,-19.3C-56.9,-29,-43.5,-35.2,-31.8,-43.3C-20,-51.5,-10,-61.6,1.9,-64.1C13.7,-66.7,27.5,-61.7,39.8,-53.8Z"
            transform="translate(100 100)"
          />
        </mask>
        <g mask="url(#mask0)">
          <path
            d="M39.8,-53.8C52.2,-45.9,63.1,-35,71.6,-20.5C80,-6.1,86,11.9,81.2,26.4C76.5,40.9,61.1,51.9,45.8,61.9C30.5,72,15.2,81,1,79.6C-13.2,78.1,-26.3,66.2,-35.1,54.1C-43.8,41.9,-48.2,29.5,-53.3,16.6C-58.5,3.8,-64.4,-9.6,-60.7,-19.3C-56.9,-29,-43.5,-35.2,-31.8,-43.3C-20,-51.5,-10,-61.6,1.9,-64.1C13.7,-66.7,27.5,-61.7,39.8,-53.8Z"
            transform="translate(100 100)"
          />

          {/* TODO - add link (change X and Y)*/}
          <image className="w-[180px]" x="5" y="35" xlinkHref="/assets/img/me.webp" />
        </g>
      </svg>
    </div>
  );
}
