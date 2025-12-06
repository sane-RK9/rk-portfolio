"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Update this array to current training activities
const dataStream = [
  { type: "READING", label: "Designing Data-Intensive Apps" },
  { type: "BUILDING", label: "Agentic Workflows" },
  { type: "LEARNING", label: "Rust & Wasm" }
];

export const TrainingLog = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % dataStream.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="hidden md:flex items-center gap-3 text-xs font-mono text-slate-500 bg-surface/50 px-4 py-2 rounded border border-white/5">
      <span className="text-primary animate-pulse">▐</span>
      <div className="w-[250px] relative h-[20px] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center gap-2"
          >
            <span className="text-primary font-bold">[{dataStream[index].type}]</span>
            <span className="truncate">{dataStream[index].label}</span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};