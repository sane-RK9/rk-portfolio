"use client";
import { motion } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";

const skillCategories = [
  {
    name: "AI / ML",
    skills: ["TensorFlow", "PyTorch", "LangChain", "OpenAI API", "HuggingFace"]
  },
  {
    name: "Backend",
    skills: ["Python", "FastAPI", "PostgreSQL", "Redis", "Docker"]
  },
  {
    name: "Automation",
    skills: ["n8n", "Selenium", "Celery", "Bash Scripting", "CI/CD"]
  }
];

export const Skills = () => {
  return (
    <section className="py-24 bg-surface/30">
      <div className="container mx-auto px-6">
        <SectionTitle title="Technical Arsenal" />
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl bg-card border border-white/5 hover:border-primary/30 hover:shadow-[0_0_20px_rgba(14,165,233,0.1)] transition-all duration-300"
            >
              <h3 className="text-xl font-heading font-semibold text-white mb-6 border-l-2 border-primary pl-4">
                {cat.name}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {cat.skills.map((skill) => (
                  <div key={skill} className="text-sm text-slate-400 font-mono hover:text-primary transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
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