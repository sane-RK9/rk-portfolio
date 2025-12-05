"use client";
import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import { TechBadge } from "../ui/TechBadge";

const projects = [
  {
    title: "Neural Architect",
    desc: "A local-first LLM orchestration engine for autonomous agents.",
    tech: ["Python", "LangChain", "Docker", "FastAPI"],
    image: "/api/placeholder/600/400" // Replace with actual image
  },
  {
    title: "DataStream V2",
    desc: "Real-time data pipeline processing 1M+ events/sec with anomaly detection.",
    tech: ["Rust", "Kafka", "ClickHouse", "React"],
    image: "/api/placeholder/600/400"
  }
];

export const Projects = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <SectionTitle title="Projects" />
        
        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative grid md:grid-cols-2 gap-8 bg-card/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:border-primary/30 transition-all duration-500 overflow-hidden"
            >
              {/* Animated Top Border */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent -translate-x-full group-hover:animate-shimmer" />

              {/* Left: Image */}
              <div className="relative rounded-xl overflow-hidden bg-surface aspect-video border border-white/5 group-hover:border-primary/20 transition-colors">
                {/* Replace with Next/Image */}
                <div className="absolute inset-0 bg-slate-800 flex items-center justify-center text-slate-600 font-mono">
                  [ PROTOTYPE PREVIEW ]
                </div>
              </div>

              {/* Right: Content */}
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl font-bold font-heading text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="h-[1px] flex-1 bg-slate-800 group-hover:bg-primary/20 transition-colors" />
                </div>
                
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-3 mt-auto">
                  {project.tech.map(t => <TechBadge key={t} name={t} />)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};