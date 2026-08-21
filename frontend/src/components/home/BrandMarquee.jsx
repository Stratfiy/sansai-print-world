import React from "react";
import { brands } from "../../mock";

const BrandMarquee = () => {
  const loop = [...brands, ...brands];
  return (
    <div className="border-y border-black/5 bg-white py-6">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />
        <div className="marquee">
          {loop.map((b, i) => (
            <div key={i} className="flex items-center gap-8 px-8">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ec0f74]" />
              <span className="whitespace-nowrap font-display text-[15px] font-semibold uppercase tracking-[0.2em] text-[#0e1b3d]/70">
                {b}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandMarquee;
