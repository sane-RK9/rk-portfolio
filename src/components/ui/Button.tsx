"use client";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
}

export const Button = ({ 
  children, 
  variant = "primary", 
  className,
  ...props 
}: ButtonProps) => {
  const baseStyle = "px-6 py-3 rounded-lg font-mono text-sm tracking-wide transition-all duration-300 relative overflow-hidden group";
  
  const variants = {
    primary: "bg-gradient-to-r from-primary to-secondary text-white shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.5)] border border-transparent",
    secondary: "bg-surface text-primary border border-primary/20 hover:border-primary/50 hover:bg-primary/5 hover:shadow-[0_0_15px_rgba(14,165,233,0.2)]",
    outline: "bg-transparent text-slate-400 hover:text-white border-b border-primary/30 rounded-none px-0 py-1 hover:border-primary"
  };

  return (
    <motion.button 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyle, variants[variant], className)}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      {/* Subtle shine effect overlay */}
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12" />
      )}
    </motion.button>
  );
};