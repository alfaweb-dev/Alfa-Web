// Renders a real screenshot if `image` is provided; otherwise shows the
// project's real logo (client-provided) centered on a brand-toned gradient,
// inside a neutral badge so any logo colour stays legible. Falls back to an
// initial letter only if neither is available.
export default function ProjectThumb({ image, logo, name, index = 0 }) {
  if (image) {
    return <img src={image} alt={name} className="h-full w-full object-cover" />;
  }

  const variants = [
    "from-primary-light via-primary to-primary-dark",
    "from-[#2a2452] via-primary to-primary-dark",
    "from-primary via-primary-dark to-[#050714]",
    "from-[#1c2570] via-primary-light to-primary-dark",
    "from-primary-dark via-[#232c78] to-primary",
    "from-[#141a52] via-primary to-[#050714]",
  ];
  const gradient = variants[index % variants.length];

  return (
    <div className={`relative flex h-full w-full items-center justify-center bg-gradient-to-br ${gradient}`}>
      {logo ? (
        <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-sand-light/95 p-4 shadow-lg shadow-primary-dark/30">
          <img src={logo} alt={`${name} logo`} className="h-full w-full object-contain" />
        </div>
      ) : (
        <span className="font-display text-6xl text-sand/15">{name.charAt(0)}</span>
      )}
    </div>
  );
}
