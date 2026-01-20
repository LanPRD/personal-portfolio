import Image from "next/image";
import { PiStarBold } from "react-icons/pi";
import { cn } from "../lib/css";

interface TestimonialProps {
  name: string;
  type: string;
  src: string;
  alt: string;
  description: string;
}

export function Testimonial({ description, name, type, src, alt }: TestimonialProps) {
  return (
    <div>
      <div className="mb-(--mb-2-5)">
        <div
          className={cn(
            "flex justify-between mb-(--mb-1)",
            "max-[350px]:flex-col max-[350px]:items-center max-[350px]:text-center"
          )}
        >
          <div className={cn("flex", "max-[350px]:flex-col max-[350px]:items-center")}>
            <div
              className={cn(
                "w-[60px] h-[60px] rounded-full overflow-hidden relative mr-(--mb-0-75)",
                "max-[350px]:mr-0 max-[350px]:mb-(--mb-0-25)"
              )}
            >
              <Image src={src} alt={alt} className="object-cover w-full h-full" width={120} height={120} />
            </div>

            <div>
              <h3 className="text-(length:--h3-font-size) font-(--font-medium)">{name}</h3>
              <span className="text-(length:--small-font-size) text-(--text-color-light)">{type}</span>
            </div>
          </div>

          <div className="flex text-(--first-color)">
            <PiStarBold />
            <PiStarBold />
            <PiStarBold />
            <PiStarBold />
            <PiStarBold />
          </div>
        </div>

        <p className={cn("max-[350px]:text-center")}>{description}</p>
      </div>
    </div>
  );
}
