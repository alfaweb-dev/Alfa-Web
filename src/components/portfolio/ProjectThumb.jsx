// Renders a real screenshot if `image` is provided, otherwise a brand-toned
// generated placeholder (initial + category) so the grid never looks broken.
export default function ProjectThumb({ image, name, index = 0 }) {
  if (image) {
    return <img src={image} alt={name} className="h-full w-full object-cover" />;
  }

  const variants = [
    "from-primary-light via-primary to-primary-dark",
    "from-[#2a2452] via-primary to-primary-dark",
    "from-primary via-primary-dark to-[#050714]",
  ];
  const gradient = variants[index % variants.length];

  return (
    <div className={`relative flex h-full w-full items-center justify-center bg-gradient-to-br ${gradient}`}>
      <span className="font-display text-6xl text-sand/15">{name.charAt(0)}</span>
    </div>
  );
}
