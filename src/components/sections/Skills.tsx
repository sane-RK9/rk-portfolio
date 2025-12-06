"use client";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Cpu, Network, Database, Code2 } from "lucide-react";

const skillGroups = [
  {
    category: "Intelligence Layer",
    icon: <BrainIcon />,
    skills: ["LangChain", "LlamaIndex", "Ollama", "DeepSeek", "HuggingFace", "PyTorch"]
  },
  {
    category: "Core Infrastructure",
    icon: <ServerIcon />,
    skills: ["FastAPI", "Docker", "Kubernetes", "PostgreSQL", "Redis", "Celery"]
  },
  {
    category: "Agentic Workflow",
    icon: <WorkflowIcon />,
    skills: ["LangGraph", "n8n", "CrewAI", "AutoGPT", "Selenium", "Puppeteer"]
  }
];

export const Skills = () => {
  return (
    <section className="py-24 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/50 to-background pointer-events-none" />
        
        <div className="container mx-auto px-6 relative z-10">
            <SectionTitle title="Technical Arsenal" subtitle="The modules installed in my cognitive architecture." />
            
            <div className="grid md:grid-cols-3 gap-8">
                {skillGroups.map((group, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-card/30 backdrop-blur-sm border border-white/5 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded bg-primary/10 text-primary group-hover:text-white group-hover:bg-primary transition-colors">
                                {group.icon}
                            </div>
                            <h3 className="text-lg font-bold font-heading text-slate-200">{group.category}</h3>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                            {group.skills.map(skill => (
                                <div key={skill} className="px-3 py-1.5 text-xs font-mono text-slate-400 border border-white/5 rounded bg-black/20 hover:text-primary hover:border-primary/30 transition-colors cursor-default">
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
};

// Simple Icons to avoid imports if not needed, or replace with Lucide
function BrainIcon() { return <Cpu size={20} />; }
function ServerIcon() { return <Database size={20} />; }
function WorkflowIcon() { return <Network size={20} />; }