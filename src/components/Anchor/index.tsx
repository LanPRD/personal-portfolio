import Link from "next/link";
import { LiTag } from "./styles";

interface AnchorProps {
  setShowMenu: () => void;
  icon: React.ReactElement;
  text: string;
  href: string;
  className: string;
  activeLink?: boolean;
}

export function Anchor({ setShowMenu, icon, text, href, className, activeLink }: AnchorProps) {
  return (
    <LiTag className={className}>
      <Link href={`#${href}`} className={`nav__link ${activeLink ? "active-link" : ""}`} onClick={() => setShowMenu()}>
        {icon} {text}
      </Link>
    </LiTag>
  );
}
