"use client";

export const SystemStatus = () => {
  // You can hook this up to an API later. For now, it's time-based.
  const hours = new Date().getHours();
  const isOnline = hours >= 9 && hours <= 20; // 9 AM to 8 PM

  return (
    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/5 backdrop-blur-sm">
      <span className="relative flex h-2 w-2">
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isOnline ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
        <span className={`relative inline-flex rounded-full h-2 w-2 ${isOnline ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
      </span>
      <span className="text-[10px] font-mono font-medium text-slate-400 tracking-wider">
        {isOnline ? "ONLINE" : "OFFLINE"}
      </span>
    </div>
  );
};