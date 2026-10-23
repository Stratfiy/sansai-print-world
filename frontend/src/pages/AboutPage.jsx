import React from "react";
import { Link } from "react-router-dom";
import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";
import { heroStats, milestones, values, storyImage } from "../mock";

const PageHead = ({ label, title, sub }) => (
  <section className="relative overflow-hidden grid-bg pt-36 pb-16">
    <div className="pointer-events-none absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-[#e0ecff] blur-[120px] opacity-70" />
    <div className="relative mx-auto max-w-[1240px] px-5 md:px-8">
      <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.2em] text-[#ec0f74]">{label}</p>
      <h1 className="max-w-4xl font-display text-[40px] leading-[1.08] font-extrabold text-[#0e1b3d] md:text-[58px]">{title}</h1>
      <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-[#5b6478]">{sub}</p>
    </div>
  </section>
);

const AboutPage = () => {
  return (
    <main>
      <PageHead
        label="About us"
        title="Eight years of powering the world’s print floors."
        sub="From a boutique importer of reconditioned photocopiers to a multi-country supplier of premium production machines — built one uptime hour at a time."
      />

      <section className="bg-white pb-16">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8">
          <div className="grid grid-cols-2 gap-6 rounded-2xl border border-black/[0.06] bg-[#fbf6ec] p-8 md:grid-cols-4">
            {heroStats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-[34px] font-extrabold text-[#0e1b3d]">{s.value}</div>
                <div className="text-[13px] uppercase tracking-wide text-[#8a93a8]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pb-20">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.2em] text-[#ec0f74]">Our story</p>
              <h2 className="font-display text-[32px] leading-[1.12] font-extrabold text-[#0e1b3d] md:text-[40px]">
                Built by print operators, for print operators.
              </h2>
            </div>
            <div className="space-y-5 text-[16px] leading-relaxed text-[#5b6478]">
              <p>Founded in 2024
                in Chennai, Sansai Print World began by importing certified reconditioned photocopiers from Japan and Europe — machines rebuilt to factory spec and delivered with warranty.</p>
              <p>Today, we serve print shops, publishers, universities and enterprises across four countries with a mixed fleet of brand-new and reconditioned production printers, backed by a service network that resolves 92% of tickets within 4 hours.</p>
              <p>Our philosophy is simple: the machine matters less than the uptime it delivers. Everything we do — sourcing, servicing, training — protects the operator who has to hit tomorrow’s deadline.</p>
            </div>
          </div>

          <div className="mt-14 overflow-hidden rounded-[28px] shadow-[0_28px_70px_rgba(14,27,61,0.14)]">
            <img src={storyImage} alt="Technician operating a production photocopier" className="h-[300px] w-full object-cover md:h-[420px]" />
          </div>
        </div>
      </section>

      <section className="bg-[#fbf6ec] section-pad">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8">
          <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.2em] text-[#ec0f74]">Milestones</p>
          <h2 className="font-display text-[32px] leading-[1.12] font-extrabold text-[#0e1b3d] md:text-[44px]">A journey in eight chapters.</h2>
          <div className="mt-12 space-y-0">
            {milestones.map((m, i) => (
              <div key={m.year} className="grid grid-cols-[80px_1fr] gap-6 border-l-2 border-[#0e1b3d]/10 pl-8 pb-10 relative md:grid-cols-[120px_1fr]">
                <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-[#ec0f74]" />
                <div className="font-display text-[24px] font-extrabold text-[#2563eb]">{m.year}</div>
                <div>
                  <h3 className="font-display text-[20px] font-bold text-[#0e1b3d]">{m.title}</h3>
                  <p className="mt-1.5 max-w-xl text-[15px] leading-relaxed text-[#5b6478]">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section-pad">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8">
          <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.2em] text-[#ec0f74]">What we stand for</p>
          <h2 className="font-display text-[32px] leading-[1.12] font-extrabold text-[#0e1b3d] md:text-[44px]">Four values, non-negotiable.</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => {
              const Icon = Icons[v.icon] || Icons.Box;
              return (
                <div key={v.title} className="rounded-2xl border border-black/[0.06] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(14,27,61,0.08)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e8f0ff]">
                    <Icon size={22} className="text-[#2563eb]" />
                  </div>
                  <h3 className="mt-5 font-display text-[19px] font-bold text-[#0e1b3d]">{v.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#5b6478]">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white pb-24">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8">
          <div className="rounded-[28px] bg-[#0e1b3d] px-8 py-14 text-center md:px-16">
            <h2 className="mx-auto max-w-xl font-display text-[28px] leading-[1.15] font-extrabold text-white md:text-[38px]">Ready to partner with us?</h2>
            <p className="mx-auto mt-4 max-w-lg text-[16px] text-white/60">Talk to our advisors and design your print infrastructure.</p>
            <Link to="/contact" className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-[#0e1b3d] transition-transform hover:-translate-y-0.5">
              Start the Conversation <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
