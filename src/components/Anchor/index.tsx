import { LiTag } from "./styles";

interface AnchorProps {
  setShowMenu: () => void;
  icon: React.ReactElement;
  text: string;
  href: string;
  className: string;
}

export function Anchor({ setShowMenu, icon, text, href, className }: AnchorProps) {
  return (
    <LiTag className={className}>
      <a href={`#${href}`} className="nav__link" onClick={() => setShowMenu()}>
        {icon} {text}
      </a>
    </LiTag>
  );
}
