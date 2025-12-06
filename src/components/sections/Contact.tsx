"use client";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Copy, Check } from "lucide-react";
import { useState } from "react";

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "rishabh.kumar.offical1@gmail.com"; 

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 relative" id="contact">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-card border border-white/5 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden"
        >
            {/* Glow Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[100px] bg-primary/20 blur-[80px]" />
            
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
                Initialize <span className="text-primary">Connection</span>
            </h2>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto">
                My comms channels are open. Available for consulting on agentic workflows and local LLM architecture.
            </p>

            {/* The "Terminal" Input Box */}
            <div className="bg-black/50 border border-white/10 rounded-lg p-4 max-w-md mx-auto flex items-center justify-between group hover:border-primary/30 transition-colors mb-8">
                <div className="flex items-center gap-3 overflow-hidden">
                    <span className="text-primary animate-pulse">❯</span>
                    <span className="font-mono text-slate-300 text-sm truncate">{email}</span>
                </div>
                <button 
                    onClick={handleCopy}
                    className="p-2 hover:bg-white/10 rounded-md transition-colors text-slate-400 hover:text-white"
                    title="Copy to clipboard"
                >
                    {copied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
                </button>
            </div>

            <div className="flex justify-center gap-6">
                <SocialLink href="https://github.com/sane-RK9" icon={<Github size={20} />} label="GitHub" />
                <SocialLink href="https://www.linkedin.com/in/rishabh-kumar-80028b336/" icon={<Linkedin size={20} />} label="LinkedIn" />
                <SocialLink href={`mailto:${email}`} icon={<Mail size={20} />} label="Email" />
            </div>
        </motion.div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) => (
    <a 
        href={href} 
        className="flex flex-col items-center gap-2 text-slate-500 hover:text-primary transition-colors group"
        target="_blank"
        rel="noreferrer"
    >
        <div className="p-3 rounded-full bg-white/5 border border-white/5 group-hover:border-primary/30 group-hover:bg-primary/10 transition-all">
            {icon}
        </div>
        <span className="text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
            {label}
        </span>
    </a>
);