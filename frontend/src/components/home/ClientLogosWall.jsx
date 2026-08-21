import React from "react";
import { clients, company } from "../../mock";

const ClientLogosWall = () => {
  return (
    <section className="bg-white section-pad">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.2em] text-[#ec0f74]">Our clients</p>
            <h2 className="max-w-2xl font-display text-[36px] leading-[1.1] font-extrabold text-[#0e1b3d] md:text-[46px]">
              Trusted by print floors everywhere.
            </h2>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed text-[#5b6478]">
            From boutique print shops to universities and enterprises — teams across four countries run on {company.name}.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {clients.map((c) => (
            <div
              key={c.name}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-black/[0.06] bg-white px-4 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_18px_44px_rgba(14,27,61,0.10)]"
            >
              <div
                className="flex h-14 w-14 items-center justify-center rounded-2xl font-display text-[18px] font-extrabold text-white shadow-sm"
                style={{ background: c.color }}
              >
                {c.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
              </div>
              <div>
                <div className="font-display text-[15px] font-bold leading-tight text-[#0e1b3d]">{c.name}</div>
                <div className="mt-0.5 text-[12px] text-[#8a93a8]">{c.place}</div>
              </div>
              <span className="rounded-full bg-[#fbf6ec] px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-[#5b6478]">
                {c.industry}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogosWall;
