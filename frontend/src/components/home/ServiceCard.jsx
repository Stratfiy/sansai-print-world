import React from "react";
import * as Icons from "lucide-react";
import { CheckCircle2 } from "lucide-react";

export const ServiceCard = ({ s }) => {
  const Icon = Icons[s.icon] || Icons.Box;
  return (
    <div className="group relative rounded-2xl border border-black/[0.06] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(14,27,61,0.10)]">
      <div className="flex items-start justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: s.tint }}>
          <Icon size={22} style={{ color: s.iconColor }} />
        </div>
        <span className="font-display text-[13px] font-semibold text-black/25">{s.num}</span>
      </div>
      <h3 className="mt-5 font-display text-[21px] font-bold text-[#0e1b3d]">{s.title}</h3>
      <p className="mt-2.5 text-[15px] leading-relaxed text-[#5b6478]">{s.desc}</p>
      <ul className="mt-5 space-y-2">
        {s.points.map((p) => (
          <li key={p} className="flex items-center gap-2.5 text-[14px] text-[#0e1b3d]">
            <CheckCircle2 size={16} className="text-[#f59e0b]" /> {p}
          </li>
        ))}
      </ul>
    </div>
  );
};
