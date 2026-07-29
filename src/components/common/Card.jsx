import { motion } from "framer-motion";
import { cn } from "../../utils/helpers.js";

export default function Card({ children, className, hover = true }) {
  return (
    <motion.div
      whileHover={hover ? { y: -6 } : undefined}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={cn(
        "bg-white rounded-2xl p-7 border border-black/5 shadow-sm hover:shadow-xl hover:shadow-navy/10 transition-shadow",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
