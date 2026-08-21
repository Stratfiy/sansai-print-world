import React from "react";
import { Star } from "lucide-react";
import { testimonials } from "../../mock";

const Testimonials = () => {
  return (
    <section className="bg-[#fbf6ec] section-pad">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.2em] text-[#ec0f74]">Loved by clients</p>
        <h2 className="max-w-xl font-display text-[36px] leading-[1.1] font-extrabold text-[#0e1b3d] md:text-[46px]">
          Stories from the print floor.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-2xl border border-black/[0.06] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(14,27,61,0.08)]"
            >
              <div className="flex gap-1">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} size={17} className="text-[#f59e0b]" fill="#f59e0b" />
                ))}
              </div>
              <p className="mt-5 text-[17px] leading-relaxed text-[#0e1b3d]">“{t.quote}”</p>
              <div className="mt-6 flex items-center gap-3 border-t border-black/[0.06] pt-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#2563eb] to-[#ec0f74] font-display text-[15px] font-bold text-white">
                  {t.name.split(" ").map((w) => w[0]).join("")}
                </div>
                <div>
                  <div className="font-display text-[15px] font-semibold text-[#0e1b3d]">{t.name}</div>
                  <div className="text-[13px] text-[#8a93a8]">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
