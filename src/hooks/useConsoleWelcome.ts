"use client";
import { useEffect } from "react";

export const useConsoleWelcome = () => {
  useEffect(() => {
    // Prevent running twice in React Strict Mode
    if ((window as any).hasRunConsoleWelcome) return;
    (window as any).hasRunConsoleWelcome = true;

    const styleTitle = "font-family: monospace; font-size: 14px; font-weight: bold; color: #0EA5E9;";
    const styleBody = "font-family: monospace; font-size: 12px; color: #94a3b8;";

    console.log(`%c
    // SYSTEM_ACCESS_GRANTED
    --------------------------------------------------
    Welcome to the Neural Architecture.
    
    Built with:
    > Next.js 16 (App Router)
    > Tailwind CSS v3
    > Framer Motion
    
    Type 'rk.contact()' to open communication channels.
    --------------------------------------------------
    `, styleTitle);

    // Add hidden command
    (window as any).rk = {
        contact: () => {
            console.log("%cOpening mail client...", styleTitle);
            window.location.href = "mailto:your.email@example.com";
        },
        stack: () => {
             console.table([
                { layer: "Frontend", tech: "Next.js, Tailwind, Framer" },
                { layer: "Backend", tech: "FastAPI, Python" },
                { layer: "AI", tech: "LangChain, Ollama, DeepSeek" }
             ]);
        }
    };
  }, []);
};