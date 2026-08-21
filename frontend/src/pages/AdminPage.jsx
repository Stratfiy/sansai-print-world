import React, { useEffect, useState, useCallback } from "react";
import { getEnquiries, updateEnquiryStatus } from "../lib/api";
import { Inbox, Mail, Phone, Building2, RefreshCw, Loader2 } from "lucide-react";
import { toast } from "sonner";

const statusStyles = {
  new: "bg-[#e8f0ff] text-[#2563eb]",
  contacted: "bg-[#fff3e0] text-[#c2760a]",
  closed: "bg-[#e6f7f4] text-[#0d9488]",
};
const nextStatus = { new: "contacted", contacted: "closed", closed: "new" };

const AdminPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await getEnquiries();
      setItems(data);
    } catch (e) {
      toast.error("Failed to load enquiries");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  const cycle = async (item) => {
    const ns = nextStatus[item.status] || "new";
    try {
      const { data } = await updateEnquiryStatus(item.id, ns);
      setItems((prev) => prev.map((i) => (i.id === item.id ? data : i)));
      toast.success(`Marked as ${ns}`);
    } catch (e) {
      toast.error("Update failed");
    }
  };

  const filtered = filter === "all" ? items : items.filter((i) => i.status === filter);
  const counts = {
    all: items.length,
    new: items.filter((i) => i.status === "new").length,
    contacted: items.filter((i) => i.status === "contacted").length,
    closed: items.filter((i) => i.status === "closed").length,
  };

  return (
    <main className="min-h-screen bg-[#fbf6ec] pt-28 pb-20">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0e1b3d]">
              <Inbox size={22} className="text-white" />
            </div>
            <div>
              <h1 className="font-display text-[26px] font-extrabold text-[#0e1b3d]">Enquiry Inbox</h1>
              <p className="text-[14px] text-[#5b6478]">Live leads submitted from the contact form.</p>
            </div>
          </div>
          <button
            onClick={load}
            className="inline-flex items-center gap-2 rounded-full border border-[#0e1b3d]/15 bg-white px-5 py-2.5 text-[14px] font-semibold text-[#0e1b3d] transition-colors hover:bg-[#0e1b3d]/5"
          >
            <RefreshCw size={16} /> Refresh
          </button>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {["all", "new", "contacted", "closed"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-4 py-2 text-[14px] font-semibold capitalize transition-colors ${
                filter === f ? "bg-[#0e1b3d] text-white" : "bg-white text-[#0e1b3d] border border-black/[0.06]"
              }`}
            >
              {f} <span className="opacity-60">({counts[f]})</span>
            </button>
          ))}
        </div>

        {loading ? (
          <div className="mt-16 flex items-center justify-center gap-2 text-[#5b6478]">
            <Loader2 size={20} className="animate-spin" /> Loading enquiries…
          </div>
        ) : filtered.length === 0 ? (
          <div className="mt-16 rounded-2xl border border-dashed border-black/10 bg-white py-20 text-center">
            <Inbox size={36} className="mx-auto text-[#c3cad8]" />
            <p className="mt-4 font-display text-[18px] font-semibold text-[#0e1b3d]">No enquiries yet</p>
            <p className="mt-1 text-[14px] text-[#8a93a8]">New leads from the contact form will appear here.</p>
          </div>
        ) : (
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {filtered.map((e) => (
              <div key={e.id} className="rounded-2xl border border-black/[0.06] bg-white p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-[18px] font-bold text-[#0e1b3d]">{e.name}</h3>
                    {e.company ? (
                      <p className="mt-0.5 flex items-center gap-1.5 text-[13px] text-[#8a93a8]">
                        <Building2 size={13} /> {e.company}
                      </p>
                    ) : null}
                  </div>
                  <button
                    onClick={() => cycle(e)}
                    className={`rounded-full px-3 py-1.5 text-[12px] font-bold uppercase tracking-wide ${statusStyles[e.status] || statusStyles.new}`}
                    title="Click to change status"
                  >
                    {e.status}
                  </button>
                </div>

                <span className="mt-4 inline-block rounded-full bg-[#fbf6ec] px-3 py-1 text-[12px] font-semibold text-[#0e1b3d]">
                  {e.interest}
                </span>

                {e.message ? (
                  <p className="mt-4 text-[14px] leading-relaxed text-[#5b6478]">{e.message}</p>
                ) : null}

                <div className="mt-5 flex flex-wrap gap-4 border-t border-black/[0.06] pt-4 text-[13px]">
                  <a href={`mailto:${e.email}`} className="flex items-center gap-1.5 font-medium text-[#0e1b3d] hover:text-[#ec0f74]">
                    <Mail size={14} className="text-[#ec0f74]" /> {e.email}
                  </a>
                  <a href={`tel:${e.phone}`} className="flex items-center gap-1.5 font-medium text-[#0e1b3d] hover:text-[#ec0f74]">
                    <Phone size={14} className="text-[#ec0f74]" /> {e.phone}
                  </a>
                </div>
                <p className="mt-3 text-[12px] text-[#a4abbb]">
                  {new Date(e.created_at).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" })}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default AdminPage;
