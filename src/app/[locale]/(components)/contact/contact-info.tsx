interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

export function ContactInfo({ icon, title, subtitle }: ContactInfoProps) {
  return (
    <div className="flex mb-(--mb-2) items-center">
      <div className="text-[3rem] text-(--first-color) mr-(--mb-0-75)" aria-hidden="true">
        {icon}
      </div>
      <div>
        <h3 className="text-(length:--h3-font-size) font-(--font-medium)">{title}</h3>
        <span className="text-(length:--small-font-size) text-(--text-color-light)">{subtitle}</span>
      </div>
    </div>
  );
}
