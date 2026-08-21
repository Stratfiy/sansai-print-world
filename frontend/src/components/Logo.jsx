import React from "react";

// Recreated Sansai Printworld wordmark
const Logo = ({ dark = false }) => {
  const rainbow = [
    { c: "#2563eb", l: "P" },
    { c: "#ec0f74", l: "r" },
    { c: "#0e1b3d", l: "i" },
    { c: "#f59e0b", l: "n" },
    { c: "#0e1b3d", l: "t" },
    { c: "#0d9488", l: "w" },
    { c: "#0e1b3d", l: "o" },
    { c: "#ec0f74", l: "r" },
    { c: "#0e1b3d", l: "l" },
    { c: "#2563eb", l: "d" },
  ];
  return (
    <div className="flex items-center gap-2 select-none">
      <div className="relative h-9 w-9 shrink-0">
        <span className="absolute inset-0 rounded-full" style={{ background: "conic-gradient(#2563eb,#ec0f74,#f59e0b,#0d9488,#2563eb)" }} />
        <span className="absolute inset-[3px] rounded-full bg-white" />
        <span className="absolute inset-[9px] rounded-full" style={{ background: "conic-gradient(#2563eb,#ec0f74,#f59e0b,#0d9488,#2563eb)" }} />
      </div>
      <div className="leading-none">
        <span className="block font-display text-[10px] font-bold tracking-[0.22em]" style={{ color: dark ? "#fff" : "#0e1b3d" }}>SANSAI</span>
        <span className="font-display text-xl font-extrabold tracking-tight">
          {rainbow.map((r, i) => (
            <span key={i} style={{ color: dark ? "#fff" : r.c }}>{r.l}</span>
          ))}
        </span>
      </div>
    </div>
  );
};

export default Logo;
