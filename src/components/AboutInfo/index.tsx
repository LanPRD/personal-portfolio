import { Content } from "./styles";

interface AboutInfoProps {
  time: number;
  typeOftime: string;
  text: string;
}

export function AboutInfo({ text, time, typeOftime }: AboutInfoProps) {
  return (
    <Content>
      <span className="about__info-title">{time}+</span>
      <span className="about__info-name">
        {typeOftime} <br /> {text}
      </span>
    </Content>
  );
}
