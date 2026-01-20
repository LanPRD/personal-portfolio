import { BiCalendar } from "react-icons/bi";
import { cn } from "../lib/css";

interface QualificationProps {
  title: string;
  subtitle: string;
  calendar: string;
  order: number;
  isLast?: boolean;
}

export function Qualification({ calendar, subtitle, title, order, isLast = false }: QualificationProps) {
  return (
    <div className={cn("grid grid-cols-[1fr_max-content_1fr] gap-x-[2.4rem]", "max-[350px]:gap-[1.4rem]")}>
      {order % 2 === 0 && (
        <>
          <div></div>
          <div>
            <span className="inline-block w-[13px] h-[13px] bg-(--first-color) rounded-full" />
            {!isLast && (
              <span className="block w-[1px] h-full bg-(--first-color) translate-x-[6px] -translate-y-[7px]" />
            )}
          </div>
        </>
      )}

      <div>
        <h3 className="text-(length:--normal-font-size) font-(--font-medium)">{title}</h3>
        <span className="inline-block text-(length:--small-font-size) mb-(--mb-1)">{subtitle}</span>
        <div className="text-(length:--smaller-font-size) text-(--text-color-light) flex items-center gap-1">
          <BiCalendar /> {calendar}
        </div>
      </div>

      {order % 2 !== 0 && (
        <div>
          <span className="inline-block w-[13px] h-[13px] bg-(--first-color) rounded-full" />
          {!isLast && <span className="block w-[1px] h-full bg-(--first-color) translate-x-[6px] -translate-y-[7px]" />}
        </div>
      )}
    </div>
  );
}
