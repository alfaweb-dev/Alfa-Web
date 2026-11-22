import { cn } from "../../utils/helpers.js";

export default function Badge({ children, className }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-accent text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full bg-navy-tint text-navy",
        className
      )}
    >
      {children}
    </span>
  );
}
