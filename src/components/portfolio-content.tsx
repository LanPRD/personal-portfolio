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
  const hasImage = Boolean(img);

  return (
    <div className={cn("grid px-6", hasImage && "sm:grid-cols-2", "md:items-center", hasImage && "lg:gap-x-32")}>
      {hasImage && (
        <div
          className={cn(
            "relative h-83 overflow-hidden flex items-center justify-center",
            "w-106 rounded-lg justify-self-center",
            "md:w-lg"
          )}
        >
          <Image src={img!.src} alt={img!.alt} className="object-cover rounded-lg" width={320} height={208} />
        </div>
      )}

      <div className={cn(!hasImage && "sm:col-span-2")}>
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
