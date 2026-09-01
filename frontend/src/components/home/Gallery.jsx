import React from "react";
import { galleryImages } from "../../mock";

const Gallery = () => {
  return (
    <section className="bg-[#fbf6ec] section-pad">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.2em] text-[#ec0f74]">In the field</p>
            <h2 className="max-w-2xl font-display text-[36px] leading-[1.1] font-extrabold text-[#0e1b3d] md:text-[46px]">
              Machines, print floors & our engineers at work.
            </h2>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {galleryImages.map((g, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl shadow-[0_14px_40px_rgba(14,27,61,0.08)] ${i === 0 ? "col-span-2 row-span-2" : ""}`}
            >
              <img
                src={g.src}
                alt={g.caption}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${i === 0 ? "h-full min-h-[220px] md:min-h-[440px]" : "h-[160px] md:h-[212px]"}`}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0e1b3d]/70 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-4 text-[13px] font-semibold text-white">{g.caption}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
