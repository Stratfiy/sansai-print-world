import React, { useState } from "react";
import * as Icons from "lucide-react";
import { Clock } from "lucide-react";
import { toast } from "sonner";
import { contactChannels, interestOptions } from "../mock";
import { createEnquiry } from "../lib/api";

const inputCls =
  "w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-[15px] text-[#0e1b3d] outline-none transition-colors focus:border-[#0e1b3d] placeholder:text-[#9aa2b4]";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", interest: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.interest) {
      toast.error("Please fill all required fields.");
      return;
    }
    setSubmitting(true);
    try {
      await createEnquiry(form);
      toast.success("Enquiry sent! We’ll get back within 24 hours.");
      setForm({ name: "", company: "", email: "", phone: "", interest: "", message: "" });
    } catch (err) {
      toast.error("Something went wrong. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main>
      <section className="relative overflow-hidden grid-bg pt-36 pb-16">
        <div className="pointer-events-none absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-[#e0ecff] blur-[120px] opacity-70" />
        <div className="relative mx-auto max-w-[1240px] px-5 md:px-8">
          <p className="mb-4 text-[13px] font-bold uppercase tracking-[0.2em] text-[#ec0f74]">Contact</p>
          <h1 className="max-w-3xl font-display text-[40px] leading-[1.08] font-extrabold text-[#0e1b3d] md:text-[58px]">
            Let’s design your print stack.
          </h1>
          <p className="mt-6 max-w-2xl text-[18px] leading-relaxed text-[#5b6478]">
            Tell us your volume, paper stock and workflow. We’ll come back within 24 hours with two shortlisted machines and a tailored plan.
          </p>
        </div>
      </section>

      <section className="bg-white pb-24">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Channels */}
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                {contactChannels.map((c) => {
                  const Icon = Icons[c.icon] || Icons.Box;
                  return (
                    <a
                      key={c.label}
                      href={c.href}
                      className="block rounded-2xl border border-black/[0.06] bg-[#fbf6ec] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(14,27,61,0.08)]"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white">
                        <Icon size={20} className="text-[#ec0f74]" />
                      </div>
                      <div className="mt-4 text-[13px] font-semibold uppercase tracking-wider text-[#8a93a8]">{c.label}</div>
                      <div className="mt-1 text-[15px] font-medium leading-snug text-[#0e1b3d]">{c.value}</div>
                    </a>
                  );
                })}
              </div>
              <div className="rounded-2xl border border-black/[0.06] bg-[#0e1b3d] p-6 text-white">
                <div className="flex items-center gap-2 text-[13px] font-semibold uppercase tracking-wider text-white/50">
                  <Clock size={15} className="text-[#ff5ea3]" /> Response SLA
                </div>
                <div className="mt-2 font-display text-[26px] font-extrabold">Under 24 hours</div>
                <div className="mt-1 text-[14px] text-white/60">Mon–Sat, 9am–7pm IST. Priority support 24/7.</div>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-2xl border border-black/[0.06] bg-white p-8 shadow-[0_20px_50px_rgba(14,27,61,0.06)]">
              <form onSubmit={submit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-[14px] font-medium text-[#0e1b3d]">Full name *</label>
                    <input className={inputCls} value={form.name} onChange={set("name")} placeholder="Your name" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[14px] font-medium text-[#0e1b3d]">Company</label>
                    <input className={inputCls} value={form.company} onChange={set("company")} placeholder="Company name" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[14px] font-medium text-[#0e1b3d]">Email *</label>
                    <input type="email" className={inputCls} value={form.email} onChange={set("email")} placeholder="you@company.com" />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-[14px] font-medium text-[#0e1b3d]">Phone *</label>
                    <input className={inputCls} value={form.phone} onChange={set("phone")} placeholder="+91 …" />
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-[14px] font-medium text-[#0e1b3d]">I’m interested in *</label>
                  <select className={inputCls} value={form.interest} onChange={set("interest")}>
                    <option value="">Choose an option</option>
                    {interestOptions.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="mb-1.5 block text-[14px] font-medium text-[#0e1b3d]">Tell us about your requirement</label>
                  <textarea rows={4} className={inputCls} value={form.message} onChange={set("message")} placeholder="Monthly volume, paper stock, current setup…" />
                </div>
                <button type="submit" disabled={submitting} className="w-full rounded-full bg-[#0e1b3d] px-7 py-3.5 text-[15px] font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-[#1b2b52] disabled:opacity-60 disabled:hover:translate-y-0">
                  {submitting ? "Sending…" : "Send enquiry"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
