import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { company } from "../../mock";

const CTASection = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div
          className="relative overflow-hidden rounded-[32px] px-8 py-16 text-center md:px-16 md:py-20"
          style={{ background: "linear-gradient(135deg, #0e1b3d 0%, #16336b 55%, #0e1b3d 100%)" }}
        >
          <div className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-[#2563eb]/25 blur-[100px]" />
          <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-[#ec0f74]/20 blur-[100px]" />
          <div className="relative">
            <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.2em] text-[#ff5ea3]">Ready to print?</p>
            <h2 className="mx-auto max-w-2xl font-display text-[32px] leading-[1.12] font-extrabold text-white md:text-[44px]">
              Get a same-day quote tailored to your volume.
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-semibold text-[#0e1b3d] transition-transform hover:-translate-y-0.5">
                Request Quote <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a href={`tel:${company.phoneRaw}`} className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-white/10">
                <Phone size={16} className="text-[#ff5ea3]" /> Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
