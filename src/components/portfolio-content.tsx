import { cn } from "@/lib/css";
import Image from "next/image";
import { PiArrowRight } from "react-icons/pi";

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
    <div className={cn("grid px-6", "sm:grid-cols-2", "md:items-center", "lg:gap-x-32")}>
      <div
        className={cn(
          "relative h-83 overflow-hidden flex items-center justify-center",
          "w-106 rounded-lg justify-self-center",
          "md:w-lg"
        )}
      >
        {img && <Image src={img.src} alt={img.alt} className="object-cover rounded-lg" width={320} height={208} />}
      </div>

      <div>
        <h3 className="text-(length:--h3-font-size) mb-(--mb-0-5)">{title}</h3>
        <p className="mb-(--mb-0-75)">{description}</p>
        {demoLink && (
          <a href={demoLink} target="_blank" rel="noreferrer" className="button button--flex button--small group">
            Demo
            <PiArrowRight className="button__icon transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        )}
      </div>
    </div>
  );
}
