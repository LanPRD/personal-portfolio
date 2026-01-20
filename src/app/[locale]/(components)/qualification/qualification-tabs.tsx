"use client";

import { cn } from "@/lib/css";
import { useState } from "react";
import { PiBriefcaseFill, PiGraduationCapFill } from "react-icons/pi";

interface QualificationTabsProps {
  workLabel: string;
  educationLabel: string;
  workContent: React.ReactNode;
  educationContent: React.ReactNode;
}

export function QualificationTabs({
  workLabel,
  educationLabel,
  workContent,
  educationContent
}: QualificationTabsProps) {
  const [tab, setTab] = useState<string>("work");

  return (
    <div className="container">
      <div className={cn("flex justify-evenly mb-(--mb-2)", "md:justify-center")}>
        <button
          className={cn(
            "flex items-center text-(length:--h3-font-size) font-(--font-medium) cursor-pointer hover:text-(--first-color)",
            "md:mx-(--mb-1)",
            tab === "work" && "text-(--first-color)"
          )}
          onClick={() => setTab("work")}
          aria-pressed={tab === "work"}
        >
          <PiBriefcaseFill className="text-[2rem] mr-(--mb-0-25)" /> {workLabel}
        </button>

        <button
          className={cn(
            "flex items-center text-(length:--h3-font-size) font-(--font-medium) cursor-pointer hover:text-(--first-color)",
            "md:mx-(--mb-1)",
            tab === "education" && "text-(--first-color)"
          )}
          onClick={() => setTab("education")}
          aria-pressed={tab === "education"}
        >
          <PiGraduationCapFill className="text-[2rem] mr-(--mb-0-25)" /> {educationLabel}
        </button>
      </div>

      <div className={cn("mt-(--mb-3)", "sm:grid sm:grid-cols-[0.6fr] sm:justify-center", "md:grid-cols-[0.5fr]")}>
        <div className={tab === "education" ? "block" : "hidden"} id="education" role="tabpanel">
          {educationContent}
        </div>

        <div className={tab === "work" ? "block" : "hidden"} id="work" role="tabpanel">
          {workContent}
        </div>
      </div>
    </div>
  );
}
