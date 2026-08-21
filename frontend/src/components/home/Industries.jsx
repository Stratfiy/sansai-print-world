import React from "react";
import * as Icons from "lucide-react";
import { industries } from "../../mock";

const Industries = () => {
  return (
    <section className="bg-[#fbf6ec] section-pad">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.2em] text-[#ec0f74]">Trusted by</p>
        <h2 className="max-w-xl font-display text-[36px] leading-[1.1] font-extrabold text-[#0e1b3d] md:text-[46px]">
          Powering print for every industry.
        </h2>

        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
          {industries.map((it) => {
            const Icon = Icons[it.icon] || Icons.Box;
            return (
              <div
                key={it.label}
                className="group flex flex-col items-center gap-4 rounded-2xl border border-black/[0.05] bg-white px-4 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(14,27,61,0.08)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#fbf6ec] transition-colors group-hover:bg-[#0e1b3d]/5">
                  <Icon size={24} style={{ color: it.color }} />
                </div>
                <span className="font-display text-[15px] font-semibold text-[#0e1b3d]">{it.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
