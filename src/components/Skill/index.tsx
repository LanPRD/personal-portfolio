import { SkillData } from "./styles";

interface SkillProps {
  name: string;
  numberPercentage: number;
}

export function Skill({ name, numberPercentage }: SkillProps) {
  return (
    <SkillData barClassName={numberPercentage}>
      <div className="skills__titles">
        <h3 className="skills__name">{name}</h3>
        <span className="skills__number">{numberPercentage}%</span>
      </div>

      <div className="skills__bar">
        <span className="skills__percentage"></span>
      </div>
    </SkillData>
  );
}
