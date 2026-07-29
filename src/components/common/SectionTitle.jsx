import { cn } from "../../utils/helpers.js";

export default function SectionTitle({ eyebrow, title, subtitle, center = true, light = false }) {
  return (
    <div className={cn("max-w-xl mb-14", center && "mx-auto text-center")}>
      {eyebrow && (
        <p className="font-accent text-xs uppercase tracking-widest text-beige mb-3">{eyebrow}</p>
      )}
      <h2
        className={cn(
          "font-display font-semibold text-3xl sm:text-4xl leading-tight",
          light ? "text-white" : "text-navy"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-4", light ? "text-white/70" : "text-gray-600")}>{subtitle}</p>
      )}
    </div>
  );
}
