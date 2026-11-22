import { Link } from "react-router-dom";

const variants = {
  primary: "bg-sand text-primary-dark hover:bg-sand-light",
  outline: "border border-sand/40 text-sand-light hover:bg-sand hover:text-primary-dark hover:border-sand",
  ghost: "text-sand hover:text-sand-light",
  whatsapp: "bg-panel border border-sand/25 text-sand-light hover:border-sand/50",
};

export default function Button({
  children,
  to,
  href,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-colors duration-300 ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
}
