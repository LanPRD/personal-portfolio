interface AboutInfoProps {
  time: number;
  typeOftime: string;
  text: string;
}

export function AboutInfo({ text, time, typeOftime }: AboutInfoProps) {
  return (
    <div>
      <span className="block text-center text-(length:--h2-font-size) font-(--font-semi-bold) text-(--title-color)">
        {time}+
      </span>
      <span className="block text-center text-(length:--smaller-font-size)">
        {typeOftime} <br /> {text}
      </span>
    </div>
  );
}
