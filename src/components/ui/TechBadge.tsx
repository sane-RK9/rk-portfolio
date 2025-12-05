export const TechBadge = ({ name }: { name: string }) => (
  <span className="px-3 py-1 text-xs font-mono text-primary bg-primary/5 border border-primary/20 rounded hover:bg-primary/10 hover:border-primary/50 transition-colors cursor-default">
    {name}
  </span>
);