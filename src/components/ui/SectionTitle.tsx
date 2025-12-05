"use client";
import { motion } from "framer-motion";

export const SectionTitle = ({ title, subtitle }: { title: string; subtitle?: string }) => {
  return (
    <div className="mb-12">
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-heading font-bold text-white flex items-baseline gap-2"
      >
        {title}
        <span className="text-primary animate-pulse text-lg">.</span>
      </motion.h2>
      
      {/* Animated Line */}
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: "60px" }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="h-1 bg-gradient-to-r from-primary to-transparent mt-4 rounded-full"
      />
      
      {subtitle && (
        <p className="mt-4 text-slate-400 max-w-lg font-light">
          {subtitle}
        </p>
      )}
    </div>
  );
};