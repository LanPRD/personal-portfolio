interface SectionWrapperProps {
  id: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export function SectionWrapper({ id, title, subtitle, children }: SectionWrapperProps) {
  return (
    <section className="section" id={id}>
      <h2 className="section__title">{title}</h2>
      <span className="section__subtitle">{subtitle}</span>
      {children}
    </section>
  );
}
