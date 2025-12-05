"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, GitMerge } from "lucide-react";

interface Node {
  id: string;
  label: string;
  type: "client" | "server" | "db" | "ai";
}

const BlueprintView = ({ nodes }: { nodes: Node[] }) => {
  // Simple auto-layout for nodes to look like a flow
  return (
    <div className="h-full w-full bg-[#0D1624] p-6 relative overflow-hidden border border-primary/20 rounded-xl">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
      
      <div className="relative z-10 flex flex-col justify-between h-full">
        <div className="text-xs font-mono text-primary/70 mb-4 tracking-widest">
          // SYSTEM_ARCHITECTURE_V1.0
        </div>
        
        {/* Simplified Flow Visualization */}
        <div className="flex flex-col gap-6 items-center">
          {nodes.map((node, i) => (
            <div key={node.id} className="relative group w-full max-w-[200px]">
               {/* Connector Line */}
              {i !== nodes.length - 1 && (
                <div className="absolute left-1/2 top-full h-6 w-[1px] bg-primary/30 -translate-x-1/2" />
              )}
              
              <div className="bg-surface/90 border border-primary/30 p-3 rounded text-center backdrop-blur-sm group-hover:border-primary/80 transition-colors shadow-[0_0_10px_rgba(14,165,233,0.05)]">
                <span className="text-[10px] uppercase text-slate-500 block mb-1">{node.type}</span>
                <span className="text-sm font-mono text-primary">{node.label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-right text-[10px] text-slate-600 font-mono mt-4">
          LATENCY: &lt;45ms • SECURE
        </div>
      </div>
    </div>
  );
};

export const ProjectCard = ({ project }: { project: any }) => {
  const [mode, setMode] = useState<"demo" | "blueprint">("demo");

  return (
    <div className="group relative grid md:grid-cols-2 gap-8 bg-card/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-primary/30 transition-all duration-500">
      
      {/* Left: Interactive Display */}
      <div className="relative h-[300px] w-full">
        <AnimatePresence mode="wait">
          {mode === "demo" ? (
            <motion.div
              key="demo"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="w-full h-full rounded-xl overflow-hidden bg-slate-800"
            >
              {/* Replace with <Image /> */}
              <div className="w-full h-full flex items-center justify-center text-slate-600">
                [ DEMO IMAGE / GIF ]
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="blueprint"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="w-full h-full"
            >
              {/* Pass actual node data from project props */}
              <BlueprintView nodes={[
                { id: "1", label: "React Client", type: "client" },
                { id: "2", label: "FastAPI Gateway", type: "server" },
                { id: "3", label: "LangChain Agent", type: "ai" },
                { id: "4", label: "Vector DB", type: "db" },
              ]} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toggle Switch */}
        <button
          onClick={() => setMode(mode === "demo" ? "blueprint" : "demo")}
          className="absolute top-4 right-4 z-20 flex items-center gap-2 px-3 py-1.5 bg-black/80 backdrop-blur text-xs font-mono text-primary border border-primary/30 rounded-full hover:bg-primary/10 transition-all"
        >
          {mode === "demo" ? <GitMerge size={14} /> : <Maximize2 size={14} />}
          {mode === "demo" ? "VIEW ARCHITECTURE" : "VIEW DEMO"}
        </button>
      </div>

      {/* Right: Content (Title, Desc, etc. - From previous implementation) */}
      <div className="flex flex-col justify-center">
        <h3 className="text-2xl font-bold font-heading text-white">{project.title}</h3>
        <p className="text-slate-400 mt-4">{project.desc}</p>
        {/* ... Tech badges ... */}
      </div>
    </div>
  );
};