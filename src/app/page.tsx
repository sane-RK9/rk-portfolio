import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-primary/30 selection:text-white">
      <Navbar />
      <Hero />
      
      {/* Placeholder for upcoming sections to enable scrolling */}
      <section className="h-[50vh] flex items-center justify-center text-slate-700 font-mono text-sm">
        // SCROLL FOR PROJECTS [IN DEVELOPMENT]
      </section>
    </main>
  );
}