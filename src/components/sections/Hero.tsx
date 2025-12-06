"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Terminal, Github, Bot, Database } from "lucide-react"; // Added Bot & Database icons
import { Button } from "@/components/ui/Button";
import { TrainingLog } from "@/components/ui/TrainingLog";

export const Hero = () => {
  // TECH STACK ROTATION
  const stack = ["LangGraph", "DeepSeek-V3", "Ollama", "n8n Workflows"];
  const [stackIndex, setStackIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStackIndex((prev) => (prev + 1) % stack.length);
    }, 2500); // Faster rotation for "Computing" feel
    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openGithub = () => {
    window.open("https://github.com/sane-RK9", "_blank"); 
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-50" />

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            SYSTEM ONLINE
          </div>

          <h1 className="text-5xl md:text-7xl font-bold font-heading text-white leading-tight mb-6">
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Intelligent</span> Systems
          </h1>
          
          {/* 2. ENGINEERING-FOCUSED SUBTEXT */}
          <p className="text-lg text-slate-400 mb-8 max-w-xl leading-relaxed">
            I design agentic workflows, local-first LLMs, and high-scale automation pipelines — with a focus on <span className="text-slate-200 font-medium">reliability</span>, <span className="text-slate-200 font-medium">reproducibility</span>, and <span className="text-slate-200 font-medium">low-latency execution</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="primary"onClick={scrollToProjects} >
              View Architecture <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="secondary" onClick={openGithub}>
              <Github className="w-4 h-4" /> Source Code
            </Button>
          </div>

          <div className="border-t border-white/10 pt-6">
            <TrainingLog />
          </div>
        </motion.div>

        {/* RIGHT: Visual / Digital Twin */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative hidden md:flex justify-center"
        >
          <div className="absolute inset-0 border border-primary/20 rounded-full scale-110 animate-pulse-slow" />
          <div className="absolute inset-0 border border-primary/10 rounded-full scale-125" />
          
          {/* Avatar Container */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/50 shadow-[0_0_50px_rgba(14,165,233,0.3)] bg-black group">
             <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-primary/40 z-10 mix-blend-overlay" />
             
             {/* Placeholder until photo */}
             <div className="w-full h-full bg-slate-900 flex flex-col items-center justify-center text-slate-600 font-mono text-center p-4">
                <Bot className="w-12 h-12 mb-4 text-slate-700 group-hover:text-primary transition-colors" />
                <span className="text-xs tracking-widest opacity-50">NO_IMAGE_DATA</span>
                <span className="text-[10px] mt-2 text-primary/50">UPLOAD DUOTONE.JPG</span>
             </div>
          </div>

          {/* FLOATING BADGE 1: TECH STACK */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-0 bg-surface/80 backdrop-blur border border-white/10 p-4 rounded-xl shadow-xl min-w-[140px]"
          >
            <Terminal className="w-5 h-5 text-primary mb-2" />
            <div className="text-[10px] uppercase text-slate-500 font-bold mb-1">Current Stack</div>
            <div className="h-[20px] relative overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={stack[stackIndex]}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        className="text-sm font-mono text-white font-medium absolute whitespace-nowrap"
                    >
                        {stack[stackIndex]}
                    </motion.div>
                </AnimatePresence>
            </div>
          </motion.div>

          {/* FLOATING BADGE 2: EXPERTISE (Local LLMs) */}
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 left-0 bg-surface/80 backdrop-blur border border-white/10 p-4 rounded-xl shadow-xl"
          >
            <Database className="w-5 h-5 text-secondary mb-2" />
            <div className="text-xl font-bold text-white leading-none">Local LLM</div>
            <div className="text-[10px] font-mono text-highlight mt-1">Privacy & Speed</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};