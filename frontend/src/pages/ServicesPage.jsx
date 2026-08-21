import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Plus, Minus } from "lucide-react";
import { services, processSteps, faqs } from "../mock";
import { ServiceCard } from "../components/home/ServiceCard";

const ServicesPage = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <main>
      <section className="relative overflow-hidden grid-bg pt-36 pb-16">
        <div className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-[#fde7f1] blur-[120px] opacity-70" />
        <div className="relative mx-auto max-w-[1240px] px-5 md:px-8">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.2em] text-[#ec0f74]">Services</p>
          <h1 className="max-w-4xl font-display text-[40px] leading-[1.08] font-extrabold text-[#0e1b3d] md:text-[58px]">
            Everything your print floor needs. In one partner.
          </h1>
          <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-[#5b6478]">
            Six services stitched into one seamless experience — from selection and setup, to service and supply.
          </p>
        </div>
      </section>

      <section className="bg-white pb-20">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.num} s={s} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fbf6ec] section-pad">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8">
          <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.2em] text-[#ec0f74]">How we work</p>
          <h2 className="font-display text-[32px] leading-[1.12] font-extrabold text-[#0e1b3d] md:text-[44px]">A four-step engagement.</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((p) => (
              <div key={p.num} className="rounded-2xl border border-black/[0.06] bg-white p-7">
                <div className="font-display text-[40px] font-extrabold text-[#0e1b3d]/10">{p.num}</div>
                <h3 className="mt-2 font-display text-[20px] font-bold text-[#0e1b3d]">{p.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[#5b6478]">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white section-pad">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.2em] text-[#ec0f74]">FAQ</p>
              <h2 className="font-display text-[32px] leading-[1.12] font-extrabold text-[#0e1b3d] md:text-[44px]">Answers, before you ask.</h2>
            </div>
            <div className="divide-y divide-black/[0.08]">
              {faqs.map((f, i) => (
                <div key={i} className="py-5">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                    className="flex w-full items-center justify-between gap-4 text-left"
                  >
                    <span className="font-display text-[18px] font-semibold text-[#0e1b3d]">{f.q}</span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fbf6ec]">
                      {openFaq === i ? <Minus size={16} className="text-[#ec0f74]" /> : <Plus size={16} className="text-[#0e1b3d]" />}
                    </span>
                  </button>
                  <div className={`grid transition-all duration-300 ${openFaq === i ? "grid-rows-[1fr] pt-3" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <p className="max-w-2xl text-[15px] leading-relaxed text-[#5b6478]">{f.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 rounded-[28px] bg-[#0e1b3d] px-8 py-14 text-center md:px-16">
            <h2 className="mx-auto max-w-xl font-display text-[26px] leading-[1.15] font-extrabold text-white md:text-[34px]">Need a bespoke service plan?</h2>
            <p className="mx-auto mt-4 max-w-lg text-[16px] text-white/60">Our advisors will craft a package matching your uptime targets and workflow.</p>
            <Link to="/contact" className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-[#0e1b3d] transition-transform hover:-translate-y-0.5">
              Talk to an Advisor <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesPage;
