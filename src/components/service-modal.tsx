import { cn } from "@/lib/css";
import { Dispatch, SetStateAction } from "react";
import { PiCheckCircleBold, PiXBold } from "react-icons/pi";

interface ServicesModalProps {
  title: string;
  services: string[];
  isVisible: boolean;
  onClose: Dispatch<SetStateAction<{ isVisible: boolean; modalIndex?: number }>>;
}

export function ServicesModal({ services, title, isVisible, onClose }: ServicesModalProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 bg-black/50 flex items-center justify-center px-[1.6rem] z-(--z-modal)",
        "max-[350px]:px-[0.8rem]",
        isVisible
          ? "animate-[showModal_0.3s_ease_backwards] opacity-100 visible"
          : "opacity-0 invisible pointer-events-none"
      )}
    >
      <div className={cn("relative bg-(--container-color) p-[2.4rem] rounded-[0.8rem]", "md:w-180")}>
        <h4 className="text-(length:--h3-font-size) font-(--font-medium) mb-(--mb-1-5)">
          {title.split(" ")[0]} <br /> {title.split(" ")[1]}
        </h4>

        <PiXBold
          onClick={() => onClose({ isVisible: false })}
          className="absolute top-[1.6rem] right-[1.6rem] text-[2.4rem] text-(--first-color) cursor-pointer"
        />

        <ul className="grid gap-y-[1.6rem]">
          {services.map((service, index) => (
            <li key={index} className="flex items-center">
              <PiCheckCircleBold className="text-(--first-color) mr-(--mb-0-25)" />
              <p>{service}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
