import { SiGithub, SiLinkedin } from "react-icons/si";
import { SocialDiv } from "./styles";

export function Social() {
  return (
    <SocialDiv>
      <a href="https://www.linkedin.com/in/lanprd" target="_blank" className="home__social-icon" rel="noreferrer">
        <SiLinkedin />
      </a>

      <a href="https://github.com/LanPRD" target="_blank" className="home__social-icon" rel="noreferrer">
        <SiGithub />
      </a>
    </SocialDiv>
  );
}
