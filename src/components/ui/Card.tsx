"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={cn(
        "bg-card/40 backdrop-blur-md border border-white/5 rounded-xl overflow-hidden hover:border-primary/30 transition-colors duration-500 hover:shadow-[0_0_30px_rgba(14,165,233,0.05)]",
        className
      )}
    >
      {children}
    </motion.div>
  );
};