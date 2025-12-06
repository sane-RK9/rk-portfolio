"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Workflow, Image as ImageIcon, Database, Server, Brain, Globe } from "lucide-react";
import { TechBadge } from "@/components/ui/TechBadge";

// Helper: The "Blueprint" visualization (The Node Graph)
const BlueprintView = ({ type }: { type: string }) => {
  // We can customize the nodes based on project type later
  return (
    <div className="h-full w-full bg-[#0D1624] p-6 relative overflow-hidden flex flex-col items-center justify-center">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
      
      {/* The Node Graph Container */}
      <div className="relative z-10 flex flex-col items-center gap-4 w-full max-w-[240px]">
        
        {/* Node 1: Input */}
        <div className="w-full border border-primary/30 bg-surface/80 p-2 rounded flex items-center gap-3">
            <Globe className="w-4 h-4 text-slate-400" />
            <span className="text-xs font-mono text-slate-300">Client / API</span>
        </div>
        
        {/* Connector */}
        <div className="h-4 w-[1px] bg-primary/30" />

        {/* Node 2: Processing */}
        <div className="w-full border border-primary/60 bg-primary/5 p-2 rounded flex items-center gap-3 shadow-[0_0_15px_rgba(14,165,233,0.1)]">
            <Server className="w-4 h-4 text-primary" />
            <span className="text-xs font-mono text-primary">Orchestrator (FastAPI)</span>
        </div>

        {/* Connector */}
        <div className="h-4 w-[1px] bg-primary/30" />

        {/* Node 3: Intelligence */}
        <div className="w-full border border-secondary/50 bg-secondary/5 p-2 rounded flex items-center gap-3">
            <Brain className="w-4 h-4 text-secondary" />
            <span className="text-xs font-mono text-secondary">LLM Agent (LangGraph)</span>
        </div>
        
        {/* Connector */}
        <div className="h-4 w-[1px] bg-primary/30" />

        {/* Node 4: Storage */}
        <div className="w-full border border-slate-700 bg-slate-900/50 p-2 rounded flex items-center gap-3">
            <Database className="w-4 h-4 text-slate-500" />
            <span className="text-xs font-mono text-slate-400">Vector Store (Pinecone)</span>
        </div>

      </div>

      <div className="absolute bottom-4 right-4 text-[10px] font-mono text-slate-600">
        ARCH_V1.0 // SECURE
      </div>
    </div>
  );
};

export const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const [mode, setMode] = useState<"demo" | "blueprint">("demo");

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="group relative bg-card/40 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-primary/20 transition-all duration-500"
    >
      <div className="grid md:grid-cols-2 gap-0 h-full">
        
        {/* LEFT SIDE: Visuals (Toggleable) */}
        <div className="relative h-[300px] md:h-auto border-b md:border-b-0 md:border-r border-white/5 bg-black/20">
          
          {/* Toggle Button */}
          <button
            onClick={() => setMode(mode === "demo" ? "blueprint" : "demo")}
            className="absolute top-4 left-4 z-20 flex items-center gap-2 px-3 py-1.5 bg-black/80 backdrop-blur text-[10px] font-mono font-bold text-primary border border-primary/30 rounded hover:bg-primary/10 transition-all uppercase tracking-wider"
          >
            {mode === "demo" ? <Workflow size={14} /> : <ImageIcon size={14} />}
            {mode === "demo" ? "View Architecture" : "View Demo UI"}
          </button>

          <AnimatePresence mode="wait">
            {mode === "demo" ? (
              <motion.div
                key="demo"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="w-full h-full"
              >
                {/* Placeholder Image - Replace src with project screenshot */}
                <div className="w-full h-full bg-slate-900 flex items-center justify-center relative overflow-hidden group-hover:bg-slate-800 transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <span className="text-slate-600 font-mono text-sm">[ UI PREVIEW ]</span>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="blueprint"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="w-full h-full"
              >
                <BlueprintView type={project.type} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* RIGHT SIDE: Details */}
        <div className="p-8 flex flex-col h-full">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-bold font-heading text-white group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-sm font-mono text-primary/60 mt-1">{project.role}</p>
            </div>
            
            {/* Links */}
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors">
                <Github size={18} />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors">
                <ExternalLink size={18} />
              </a>
            </div>
          </div>

          <p className="text-slate-400 leading-relaxed mb-6 text-sm">
            {project.desc}
          </p>

          <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((t: string) => (
                <TechBadge key={t} name={t} />
              ))}
            </div>
            
            {/* Engineering Signal */}
            <div className="pt-4 border-t border-white/5 flex gap-6 text-xs font-mono text-slate-500">
              <div>
                <span className="block text-slate-700 mb-1">LATENCY</span>
                <span className="text-emerald-500">{project.metrics.latency}</span>
              </div>
              <div>
                <span className="block text-slate-700 mb-1">TYPE</span>
                <span className="text-slate-300">{project.metrics.type}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};