import React from "react";
import { countries, mapNodes } from "../../mock";
import { MapPin } from "lucide-react";

const GlobalReach = () => {
  return (
    <section className="relative overflow-hidden bg-white section-pad">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.2em] text-[#ec0f74]">Global reach</p>
            <h2 className="font-display text-[36px] leading-[1.1] font-extrabold text-[#0e1b3d] md:text-[46px]">
              Four countries. One promise — uptime.
            </h2>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-[#5b6478]">
              From Chennai and Vijayawada headquarters, we deploy, service and support fleets across India, UAE, Malaysia and Singapore with rapid-response engineers.
            </p>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {countries.map((c) => (
                <span key={c} className="rounded-full border border-[#0e1b3d]/10 bg-[#fbf6ec] px-4 py-2 text-[14px] font-medium text-[#0e1b3d]">
                  {c}
                </span>
              ))}
            </div>
          </div>

          <div className="relative aspect-square w-full max-w-[480px] justify-self-center">
            {/* radar rings */}
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="absolute left-1/2 top-1/2 rounded-full border border-dashed border-[#0e1b3d]/15"
                style={{
                  width: `${(i + 1) * 24}%`,
                  height: `${(i + 1) * 24}%`,
                  transform: "translate(-50%, -50%)",
                }}
              />
            ))}
            <div className="radar-ring absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ec0f74]/10" />
            <div className="radar-ring absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2563eb]/10" style={{ animationDelay: "2s" }} />

            {mapNodes.map((n) => (
              <div key={n.label} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ top: n.top, left: n.left }}>
                <span className={`flex items-center gap-1.5 whitespace-nowrap rounded-full px-3 py-1.5 text-[12px] font-semibold shadow-lg ${n.primary ? "bg-[#0e1b3d] text-white" : "bg-white text-[#0e1b3d] border border-black/5"}`}>
                  <MapPin size={12} className={n.primary ? "text-[#ec0f74]" : "text-[#2563eb]"} />
                  {n.label}
                </span>
              </div>
            ))}

            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="font-display text-[40px] font-extrabold text-[#0e1b3d]">2500+</div>
              <div className="text-[12px] uppercase tracking-wide text-[#8a93a8]">Machines deployed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
