import Link from "next/link";

import { SiLinkedin, SiInstagram, SiGithub } from "react-icons/si";

import { SocialDiv } from "./styles";

export default function Social() {
  return (
    <SocialDiv>
      <Link href="https://www.linkedin.com/in/lanprd">
        <a target="_blank" className="home__social-icon">
          <SiLinkedin />
        </a>
      </Link>

      <Link href="https://www.instagram.com/">
        <a target="_blank" className="home__social-icon">
          <SiInstagram />
        </a>
      </Link>

      <Link href="https://github.com/LanPRD">
        <a target="_blank" className="home__social-icon">
          <SiGithub />
        </a>
      </Link>
    </SocialDiv>
  );
}
