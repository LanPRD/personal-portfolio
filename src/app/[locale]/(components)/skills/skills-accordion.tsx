"use client";

import { cn } from "@/lib/css";
import { Children, cloneElement, isValidElement, useState } from "react";

interface SkillsAccordionProps {
  children: React.ReactNode;
}

export function SkillsAccordion({ children }: SkillsAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className={cn("container grid", "sm:grid-cols-2")}>
      {Children.map(children, (child, index) => {
        if (isValidElement(child)) {
          return cloneElement(child, {
            isOpen: openIndex === index,
            onToggle: () => setOpenIndex(index)
          } as any);
        }
        return child;
      })}
    </div>
  );
}
