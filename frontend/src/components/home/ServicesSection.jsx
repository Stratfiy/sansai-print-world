import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { services } from "../../mock";
import { ServiceCard } from "./ServiceCard";

const ServicesSection = () => {
  return (
    <section className="bg-white section-pad">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.2em] text-[#ec0f74]">What we do</p>
            <h2 className="max-w-2xl font-display text-[36px] leading-[1.1] font-extrabold text-[#0e1b3d] md:text-[46px]">
              End-to-end print infrastructure, handled.
            </h2>
          </div>
          <Link to="/services" className="group inline-flex items-center gap-2 text-[15px] font-semibold text-[#0e1b3d]">
            All services
            <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <ServiceCard key={s.num} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
