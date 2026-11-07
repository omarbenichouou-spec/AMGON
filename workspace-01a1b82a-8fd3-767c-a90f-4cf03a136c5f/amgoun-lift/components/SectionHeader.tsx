export function SectionHeader({ eyebrow, title, subtitle, align = "left", light = false }: { eyebrow: string; title: string; subtitle?: string; align?: "left" | "center"; light?: boolean }) {
  return (
    <div className={`section-heading section-heading--${align}${light ? " section-heading--light" : ""}`}>
      <span className="eyebrow"><span />{eyebrow}</span>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
}
