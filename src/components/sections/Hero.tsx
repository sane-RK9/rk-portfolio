"use client";
import { motion } from "framer-motion";
import { ArrowRight, Terminal, Github } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { TrainingLog } from "@/components/ui/TrainingLog";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      
      {/* 1. Background Effects (Grid + Glow) */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 opacity-50" />

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT: Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            AVAILABLE FOR HIRE
          </div>

          <h1 className="text-5xl md:text-7xl font-bold font-heading text-white leading-tight mb-6">
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Intelligent</span> Systems
          </h1>
          
          <p className="text-lg text-slate-400 mb-8 max-w-xl leading-relaxed">
            I'm an AI Engineer & Systems Architect specialized in building <span className="text-slate-200">agentic workflows</span>, local-first LLMs, and high-scale automation pipelines.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="primary">
              View Projects <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="secondary">
              <Github className="w-4 h-4" /> GitHub Profile
            </Button>
          </div>

          {/* Personality Injection: Training Log */}
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
          {/* Decorative Rings */}
          <div className="absolute inset-0 border border-primary/20 rounded-full scale-110 animate-pulse-slow" />
          <div className="absolute inset-0 border border-primary/10 rounded-full scale-125" />
          
          {/* Avatar Container (Duotone Style) */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/50 shadow-[0_0_50px_rgba(14,165,233,0.3)] bg-black">
             {/* 
                Step 5 Implementation: 
                This uses CSS blending to create the "Cyber" look even with a normal photo.
                Replace '/avatar-placeholder.jpg' with your actual photo later.
             */}
             <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-primary/40 z-10 mix-blend-overlay" />
             {/* Placeholder for now - replace src with your image */}
             <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-600 font-mono text-center p-4">
                [ INSERT DUOTONE<br/>AVATAR HERE ]
             </div>
          </div>

          {/* Floating Tech Badges */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-0 bg-surface/80 backdrop-blur border border-white/10 p-3 rounded-xl shadow-xl"
          >
            <Terminal className="w-6 h-6 text-primary mb-1" />
            <div className="text-xs font-mono text-slate-400">Backends</div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 left-0 bg-surface/80 backdrop-blur border border-white/10 p-3 rounded-xl shadow-xl"
          >
            <div className="text-2xl font-bold text-white">98%</div>
            <div className="text-xs font-mono text-slate-400">Accuracy</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};