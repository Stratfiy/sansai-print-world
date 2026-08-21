import React, { useState, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { company } from "../mock";

// wa.me needs the number without '+' or spaces
const WA_NUMBER = company.phoneRaw.replace(/[^0-9]/g, "");

const WhatsAppWidget = () => {
  const [open, setOpen] = useState(false);
  const [bump, setBump] = useState(false);

  // gentle attention bump on first load
  useEffect(() => {
    const t = setTimeout(() => setBump(true), 1500);
    const t2 = setTimeout(() => setBump(false), 4000);
    return () => {
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, []);

  const send = (msg) => {
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const defaultMsg = `Hi ${company.contactPerson}, I'm interested in Sansai Print World's photocopier solutions. Please share more details.`;

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3">
      {open && (
        <div className="w-[300px] overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-[0_24px_60px_rgba(14,27,61,0.22)]">
          <div className="flex items-center gap-3 bg-[#075E54] px-4 py-3.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
              <MessageCircle size={20} className="text-white" fill="#fff" />
            </div>
            <div className="leading-tight">
              <div className="font-display text-[15px] font-bold text-white">{company.contactPerson}</div>
              <div className="text-[12px] text-white/70">{company.contactRole} · Typically replies fast</div>
            </div>
            <button onClick={() => setOpen(false)} className="ml-auto text-white/80 hover:text-white" aria-label="Close">
              <X size={18} />
            </button>
          </div>

          <div className="bg-[#ECE5DD] px-4 py-5" style={{ backgroundImage: "radial-gradient(rgba(0,0,0,0.03) 1px, transparent 1px)", backgroundSize: "14px 14px" }}>
            <div className="max-w-[85%] rounded-xl rounded-tl-none bg-white px-3.5 py-2.5 text-[13px] leading-relaxed text-[#0e1b3d] shadow-sm">
              Hi there! 👋 How can we help with your printing needs today?
            </div>
          </div>

          <div className="px-3 py-3">
            <button
              onClick={() => send(defaultMsg)}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-[14px] font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              <Send size={15} /> Start chat on WhatsApp
            </button>
            <p className="mt-2 text-center text-[11px] text-[#8a93a8]">{company.phone}</p>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Chat on WhatsApp"
        className={`relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.45)] transition-transform hover:scale-105 ${bump ? "animate-bounce" : ""}`}
      >
        {!open && <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 [animation:radar-pulse_2.5s_ease-out_infinite]" />}
        {open ? <X size={26} className="relative" /> : <MessageCircle size={28} className="relative" fill="#fff" />}
      </button>
    </div>
  );
};

export default WhatsAppWidget;
