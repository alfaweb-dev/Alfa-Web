export default function Loading({ label = "Loading…" }) {
  return (
    <div className="flex items-center justify-center py-16 gap-3 text-navy">
      <span className="w-2 h-2 rounded-full bg-navy animate-bounce [animation-delay:-0.3s]" />
      <span className="w-2 h-2 rounded-full bg-navy animate-bounce [animation-delay:-0.15s]" />
      <span className="w-2 h-2 rounded-full bg-navy animate-bounce" />
      <span className="font-accent text-sm text-gray-500 ms-2">{label}</span>
    </div>
  );
}
