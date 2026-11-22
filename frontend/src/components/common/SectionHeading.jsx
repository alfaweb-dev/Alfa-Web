export default function SectionHeading({ eyebrow, title, subtitle, align = "start" }) {
  const alignClass = align === "center" ? "text-center items-center mx-auto" : "text-start items-start";

  return (
    <div className={`flex flex-col gap-4 max-w-2xl ${alignClass}`}>
      {eyebrow && (
        <span className="flex items-center gap-3 text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-copper">
          <span className="h-1.5 w-1.5 rotate-45 bg-sand/70 shrink-0" />
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-[2.75rem] leading-[1.1] text-sand-light">{title}</h2>
      {subtitle && <p className="text-base md:text-lg text-sand-light/60">{subtitle}</p>}
    </div>
  );
}
