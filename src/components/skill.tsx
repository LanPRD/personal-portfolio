interface SkillProps {
  name: string;
  numberPercentage: number;
}

export function Skill({ name, numberPercentage }: SkillProps) {
  return (
    <div>
      <div className="flex justify-between mb-(--mb-0-5)">
        <h3 className="text-(length:--normal-font-size) font-(--font-medium)">{name}</h3>
        <span className="text-(length:--normal-font-size)">{numberPercentage}%</span>
      </div>

      <div className="h-[5px] rounded-[0.4rem] bg-(--first-color-lighter)">
        <span className="block h-[5px] rounded-[0.4rem] bg-(--first-color)" style={{ width: `${numberPercentage}%` }} />
      </div>
    </div>
  );
}
