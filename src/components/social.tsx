import { cn } from "@/lib/css";
import { PiGithubLogoFill, PiLinkedinLogoFill } from "react-icons/pi";

export function Social() {
  return (
    <div className={cn("grid grid-cols-[max-content] gap-y-[1.6rem]", "lg:-translate-x-[9.6rem]")}>
      <a
        href="https://www.linkedin.com/in/lanprd"
        target="_blank"
        className="text-[2.4rem] text-(--first-color) hover:text-(--first-color-alt)"
        rel="noreferrer"
      >
        <PiLinkedinLogoFill />
      </a>

      <a
        href="https://github.com/LanPRD"
        target="_blank"
        className="text-[2.4rem] text-(--first-color) hover:text-(--first-color-alt)"
        rel="noreferrer"
      >
        <PiGithubLogoFill />
      </a>
    </div>
  );
}
