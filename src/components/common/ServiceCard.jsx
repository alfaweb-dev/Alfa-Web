import * as Icons from "lucide-react";

export default function ServiceCard({ service }) {
  const Icon = Icons[service.icon] ?? Icons.Sparkles;

  return (
    <div className="group flex flex-col gap-5 rounded-2xl border border-sand/10 bg-panel/60 p-7 transition-all duration-300 hover:border-sand/30 hover:bg-panel">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-sand/10 text-sand transition-colors duration-300 group-hover:bg-sand group-hover:text-primary-dark">
        <Icon size={22} strokeWidth={1.75} />
      </div>
      <h3 className="font-display text-xl text-sand-light">{service.title}</h3>
      <p className="text-sm leading-relaxed text-sand-light/55">{service.description}</p>
    </div>
  );
}
