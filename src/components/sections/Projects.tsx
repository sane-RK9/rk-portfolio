"use client";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ProjectCard } from "@/components/projects/ProjectCard";

const projects = [
  {
    title: "Neural-RAG Engine",
    role: "Lead Architect",
    desc: "A local-first retrieval augmented generation system designed for privacy-critical documents. Uses a custom vector ingestion pipeline and quantizes models for edge deployment.",
    tech: ["Python", "LangChain", "Qdrant", "Docker"],
    type: "backend",
    metrics: { latency: "< 120ms", type: "Local LLM" }
  },
  {
    title: "Autonomous Dev Agent",
    role: "Core Contributor",
    desc: "An agentic workflow that autonomously writes, tests, and fixes Python scripts based on natural language prompts. Implements reflection loops for error correction.",
    tech: ["LangGraph", "DeepSeek", "FastAPI", "Redis"],
    type: "ai",
    metrics: { latency: "Async", type: "Agentic System" }
  },
  // Add more projects here
];

export const Projects = () => {
  return (
    <section className="py-32 relative bg-background" id="projects">
      <div className="container mx-auto px-6">
        <SectionTitle 
          title="System Architecture" 
          subtitle="Selected works focused on scalable AI pipelines and automation." 
        />
        
        <div className="flex flex-col gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};