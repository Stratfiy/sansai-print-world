import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import { navLinks, company, services } from "../mock";

const Footer = () => {
  return (
    <footer className="bg-[#0e1b3d] text-white">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="mb-5"><Logo dark /></div>
            <p className="max-w-xs text-[15px] leading-relaxed text-white/60">
              Premium reconditioned and brand-new production printers, backed by rapid PAN-India service and 24/7 field support.
            </p>
            <p className="mt-5 text-[13px] uppercase tracking-[0.18em] text-white/40">{company.since}</p>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white/50">Company</h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-[15px] text-white/75 transition-colors hover:text-white">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white/50">Services</h4>
            <ul className="space-y-3">
              {services.slice(0, 5).map((s) => (
                <li key={s.num}>
                  <Link to="/services" className="text-[15px] text-white/75 transition-colors hover:text-white">{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-white/50">Get in touch</h4>
            <ul className="space-y-4">
              <li>
                <a href={`tel:${company.phoneRaw}`} className="flex items-center gap-3 text-[15px] text-white/75 hover:text-white">
                  <Phone size={16} className="text-[#ec0f74]" /> {company.phone}
                </a>
              </li>
              <li>
                <a href={`tel:${company.phone2Raw}`} className="flex items-center gap-3 text-[15px] text-white/75 hover:text-white">
                  <Phone size={16} className="text-[#ec0f74]" /> {company.phone2}
                </a>
              </li>
              <li>
                <a href={`mailto:${company.email}`} className="flex items-center gap-3 text-[15px] text-white/75 hover:text-white">
                  <Mail size={16} className="text-[#ec0f74]" /> {company.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-[15px] text-white/75">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#ec0f74]" /> {company.address}
              </li>
            </ul>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-white px-5 py-2.5 text-[14px] font-semibold text-[#0e1b3d] transition-transform hover:-translate-y-0.5">
              Request Quote <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-[14px] text-white/50">© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p className="text-[14px] text-white/50">Chennai · Vijayawada · Dubai · Kuala Lumpur · Singapore</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
