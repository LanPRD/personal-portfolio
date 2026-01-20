"use client";

import { cn } from "@/lib/css";
import { PiCaretDownBold } from "react-icons/pi";

interface SkillGroupProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

export function SkillGroup({ icon, title, subtitle, isOpen, onToggle, children }: SkillGroupProps) {
  return (
    <div className={isOpen ? "skills__open" : "skills__close"}>
      <button
        className="flex items-center mb-(--mb-2-5) cursor-pointer w-full text-left"
        onClick={onToggle}
        aria-expanded={isOpen}
        type="button"
      >
        <div className="text-[3.2rem] text-(--first-color) mr-(--mb-0-75)" aria-hidden="true">
          {icon}
        </div>

        <div>
          <h3 className={cn("text-(length:--h3-font-size)", "max-[350px]:text-(length:--normal-font-size)")}>
            {title}
          </h3>
          <span className="text-(length:--small-font-size) text-(--text-color-light)">{subtitle}</span>
        </div>

        <PiCaretDownBold
          className="skills__arrow text-[3.2rem] text-(--first-color) ml-auto transition-transform duration-400"
          aria-hidden="true"
        />
      </button>

      <div className="skills__list grid gap-y-[2.4rem] pl-16">{children}</div>
    </div>
  );
}
