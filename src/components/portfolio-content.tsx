import Image from "next/image";
import { TiArrowRight } from "react-icons/ti";
import { cn } from "../lib/css";

interface PortfolioContentProps {
  img?: {
    src: string;
    alt: string;
  };
  title: string;
  description: string;
  demoLink?: string;
}

export function PortfolioContent({ demoLink, description, title, img }: PortfolioContentProps) {
  return (
    <div className={cn("grid px-[1.5rem]", "sm:grid-cols-2", "md:items-center", "lg:gap-x-[8rem]")}>
      <div
        className={cn(
          "relative h-[208px] overflow-hidden flex items-center justify-center",
          "w-[265px] rounded-[0.5rem] justify-self-center",
          "md:w-[320px]"
        )}
      >
        {img && <Image src={img.src} alt={img.alt} className="object-cover" width={320} height={208} />}
      </div>

      <div>
        <h3 className="text-(length:--h3-font-size) mb-(--mb-0-5)">{title}</h3>
        <p className="mb-(--mb-0-75)">{description}</p>
        {demoLink && (
          <a href={demoLink} target="_blank" rel="noreferrer" className="button button--flex button--small group">
            Demo
            <TiArrowRight className="button__icon transition-transform duration-300 group-hover:translate-x-[0.25rem]" />
          </a>
        )}
      </div>
    </div>
  );
}
