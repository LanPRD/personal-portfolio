import Link from "next/link";
import { cn } from "../lib/css";

interface AnchorProps {
  setShowMenu: () => void;
  icon: React.ReactElement<any>;
  text: string;
  href: string;
  className?: string;
  activeLink?: boolean;
}

export function Anchor({ setShowMenu, icon, text, href, className, activeLink }: AnchorProps) {
  return (
    <li className={className}>
      <Link
        href={`#${href}`}
        className={cn(
          "flex flex-col items-center gap-1",
          "text-(length:--small-font-size) text-(--title-color) font-(--font-medium)",
          "hover:text-(--first-color)",
          "[&>svg]:text-[1.8rem] text-center",
          activeLink && "active-link"
        )}
        onClick={() => setShowMenu()}
      >
        {icon} {text}
      </Link>
    </li>
  );
}
