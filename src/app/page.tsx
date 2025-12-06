"use client";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { useConsoleWelcome } from "@/hooks/useConsoleWelcome";

export default function Home() {
  // Easter Egg Hook
  useConsoleWelcome();

  return (
    <main className="min-h-screen bg-background relative selection:bg-primary/30 selection:text-white">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      
      <footer className="py-8 border-t border-white/5 text-center">
        <p className="font-mono text-xs text-slate-600">
          RK9_SYSTEM_V1.0 // TERMINAL_ID: 8X92
        </p>
      </footer>
    </main>
  );
}