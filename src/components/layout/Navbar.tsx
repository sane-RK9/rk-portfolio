"use client";
import { motion } from "framer-motion";
import { SystemStatus } from "@/components/ui/SystemStatus";
import { Button } from "@/components/ui/Button";

export const Navbar = () => {
  const scrollToContact = () => {
  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
};
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-background/70 border-b border-white/5"
    >
      {/* Logo */}
      <div className="flex items-center gap-2 group cursor-pointer">
        <div className="w-8 h-8 rounded bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center font-bold text-white font-mono shadow-[0_0_15px_rgba(14,165,233,0.3)] group-hover:shadow-[0_0_25px_rgba(14,165,233,0.5)] transition-all">
          RK9
        </div>
        <span className="hidden md:block font-mono text-sm text-slate-400 group-hover:text-white transition-colors">
          // SYSTEM
        </span>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-6">
        <div className="hidden md:block">
          <SystemStatus />
        </div>
        <Button 
          variant="outline" 
          className="hidden sm:flex items-center gap-2 font-mono text-xs" 
          onClick={scrollToContact}>
           <span className="text-primary">&gt;</span> Ping RK9
        </Button>
      </div>
    </motion.nav>
  );
};