import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X } from "lucide-react";
import Logo from "./Logo";
import { navLinks, company } from "../mock";

const Navbar = () => {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-[0_4px_24px_rgba(14,27,61,0.06)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="flex h-[72px] items-center justify-between">
          <Link to="/" aria-label="Sansai Print World">
            <Logo />
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((l) => {
              const active = pathname === l.to;
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`rounded-full px-4 py-2 text-[15px] font-medium transition-colors ${
                    active ? "bg-[#0e1b3d] text-white" : "text-[#0e1b3d] hover:bg-[#0e1b3d]/5"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-5">
            <a href={`tel:${company.phoneRaw}`} className="flex items-center gap-2 text-[15px] font-semibold text-[#0e1b3d]">
              <Phone size={16} className="text-[#ec0f74]" />
              {company.phone}
            </a>
            <Link
              to="/contact"
              className="rounded-full bg-[#0e1b3d] px-5 py-2.5 text-[15px] font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-[#1b2b52]"
            >
              Get a Quote
            </Link>
          </div>

          <button className="md:hidden text-[#0e1b3d]" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-black/5 px-5 py-4">
          <div className="flex flex-col gap-1">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`rounded-lg px-4 py-3 text-[15px] font-medium ${
                  pathname === l.to ? "bg-[#0e1b3d] text-white" : "text-[#0e1b3d]"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/contact" className="mt-2 rounded-full bg-[#0e1b3d] px-5 py-3 text-center text-[15px] font-semibold text-white">
              Get a Quote
            </Link>
            <a href={`tel:${company.phoneRaw}`} className="mt-1 flex items-center justify-center gap-2 py-2 text-[15px] font-semibold text-[#0e1b3d]">
              <Phone size={16} className="text-[#ec0f74]" /> {company.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
