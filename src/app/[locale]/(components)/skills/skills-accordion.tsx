"use client";

import { cn } from "@/lib/css";
import React, { useState } from "react";

interface SkillsAccordionProps {
  children: React.ReactNode;
}

export function SkillsAccordion({ children }: SkillsAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className={cn("container grid", "sm:grid-cols-2")}>
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            isOpen: openIndex === index,
            onToggle: () => setOpenIndex(index)
          } as any);
        }
        return child;
      })}
    </div>
  );
}
