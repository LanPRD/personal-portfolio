import { BiCalendar } from "react-icons/bi";

import { QualificationData } from "./styles";

interface QualificationProps {
  title: string;
  subtitle: string;
  calendar: string;
  order: number;
  isLast?: boolean;
}

export function Qualification({ calendar, subtitle, title, order, isLast = false }: QualificationProps) {
  return (
    <QualificationData>
      {order % 2 === 0 && (
        <>
          <div></div>
          <div>
            <span className="qualification__rounder"></span>
            {isLast ? <></> : <span className="qualification__line"></span>}
          </div>
        </>
      )}

      <div>
        <h3 className="qualification__title">{title}</h3>
        <span className="qualification__subtitle">{subtitle}</span>
        <div className="qualification__calendar">
          <BiCalendar /> {calendar}
        </div>
      </div>

      {order % 2 !== 0 && (
        <div>
          <span className="qualification__rounder"></span>
          {isLast ? <></> : <span className="qualification__line"></span>}
        </div>
      )}
    </QualificationData>
  );
}
