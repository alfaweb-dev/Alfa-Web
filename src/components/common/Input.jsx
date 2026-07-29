import { forwardRef } from "react";
import { cn } from "../../utils/helpers.js";

const Input = forwardRef(function Input({ label, error, as = "input", className, ...props }, ref) {
  const Tag = as;
  return (
    <label className="block text-start">
      {label && (
        <span className="font-accent text-sm font-medium text-navy mb-1.5 block">{label}</span>
      )}
      <Tag
        ref={ref}
        className={cn(
          "w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-navy/20",
          error ? "border-red-400" : "border-black/10 focus:border-navy",
          className
        )}
        {...props}
      />
      {error && <span className="text-xs text-red-500 mt-1 block">{error}</span>}
    </label>
  );
});

export default Input;
