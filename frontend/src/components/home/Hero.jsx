import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, CheckCircle2, Activity } from "lucide-react";
import { company, heroStats, heroImage } from "../../mock";

const rainbow = [
  { c: "#2563eb", l: "P" }, { c: "#ec0f74", l: "h" }, { c: "#f59e0b", l: "o" },
  { c: "#0d9488", l: "t" }, { c: "#2563eb", l: "o" }, { c: "#ec0f74", l: "c" },
  { c: "#0e1b3d", l: "o" }, { c: "#0e1b3d", l: "p" }, { c: "#f59e0b", l: "i" },
  { c: "#0d9488", l: "e" }, { c: "#0e1b3d", l: "r" },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden grid-bg">
      <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-[#fde7f1] blur-[120px] opacity-60" />
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#e0ecff] blur-[120px] opacity-70" />

      <div className="relative mx-auto max-w-[1240px] px-5 md:px-8 pt-32 pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div className="rise-in">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0e1b3d]/10 bg-white/70 px-4 py-2 text-[13px] font-semibold uppercase tracking-[0.14em] text-[#0e1b3d]">
              <Sparkles size={15} className="text-[#ec0f74]" />
              {company.since}
            </div>

            <h1 className="mt-6 font-display text-[46px] leading-[1.04] font-extrabold tracking-tight text-[#0e1b3d] md:text-[64px]">
              Revolutionizing{" "}
              <span>
                {rainbow.map((r, i) => (
                  <span key={i} style={{ color: r.c }}>{r.l}</span>
                ))}
              </span>{" "}
              Solutions{" "}
              <span className="text-[#8a93a8]">around the globe.</span>
            </h1>

            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-[#5b6478]">
              Premium reconditioned and brand-new production printers for print shops, enterprises and studios — backed by rapid PAN-India service and 24/7 field support.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/services" className="group inline-flex items-center gap-2 rounded-full bg-[#0e1b3d] px-7 py-3.5 text-[15px] font-semibold text-white transition-transform hover:-translate-y-0.5">
                Explore Services
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-[#0e1b3d]/15 bg-white px-7 py-3.5 text-[15px] font-semibold text-[#0e1b3d] transition-colors hover:bg-[#0e1b3d]/5">
                Talk to Sales
              </Link>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
              {heroStats.map((s) => (
                <div key={s.label}>
                  <span className="mb-1 block h-1.5 w-1.5 rounded-full" style={{ background: s.dot }} />
                  <div className="font-display text-[30px] font-extrabold text-[#0e1b3d]">{s.value}</div>
                  <div className="text-[12px] uppercase tracking-wide text-[#8a93a8]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative rise-in" style={{ animationDelay: "0.15s" }}>
            <div className="overflow-hidden rounded-[28px] shadow-[0_30px_80px_rgba(14,27,61,0.18)]">
              <img src={heroImage} alt="Production printer" className="h-[520px] w-full object-cover" />
            </div>

            <div className="float-soft absolute -left-4 top-10 rounded-2xl bg-white px-5 py-4 shadow-[0_18px_50px_rgba(14,27,61,0.14)]">
              <div className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wider text-[#8a93a8]">
                <Activity size={13} className="text-[#0d9488]" /> Live fleet
              </div>
              <div className="mt-1 font-display text-2xl font-extrabold text-[#0e1b3d]">2,481</div>
              <div className="text-[12px] text-[#8a93a8]">machines running now</div>
            </div>

            <div className="float-soft absolute -right-2 bottom-10 rounded-2xl bg-white px-5 py-4 shadow-[0_18px_50px_rgba(14,27,61,0.14)]" style={{ animationDelay: "1.2s" }}>
              <div className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-wider text-[#8a93a8]">
                <CheckCircle2 size={13} className="text-[#2563eb]" /> Uptime SLA
              </div>
              <div className="mt-1 font-display text-2xl font-extrabold text-[#0e1b3d]">99.4%</div>
              <div className="text-[12px] text-[#8a93a8]">4-hour response guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
