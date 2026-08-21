// Mock data for Sansai Print World clone (frontend-only)

export const company = {
  name: "Sansai Print World",
  phone: "+91 98765 43210",
  phoneRaw: "+919876543210",
  email: "info@sansaiprintworld.in",
  since: "Since 2017 · India · UAE · SG · MY",
};

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

export const heroStats = [
  { value: "8+", label: "Years of Excellence", dot: "#2563eb" },
  { value: "2500+", label: "Machines Deployed", dot: "#ec0f74" },
  { value: "4", label: "Countries Served", dot: "#f59e0b" },
  { value: "24/7", label: "Support Coverage", dot: "#0e1b3d" },
];

export const brands = [
  "Xerox", "Ricoh", "Canon", "Konica Minolta", "Kyocera", "Sharp", "HP Indigo", "Toshiba",
];

export const services = [
  {
    num: "01", icon: "ShoppingBag", title: "Machine Sales",
    desc: "Purchase brand-new or expertly reconditioned photocopiers with full warranty and installation support.",
    points: ["Certified reconditioning", "OEM warranty", "Trade-in accepted"],
    tint: "#e8f0ff", iconColor: "#2563eb",
  },
  {
    num: "02", icon: "CalendarClock", title: "Flexible Rentals",
    desc: "Day, week, month or multi-year rental plans that scale with your business without long commitments.",
    points: ["Short & long-term", "No lock-in", "Free relocation"],
    tint: "#ffe8f2", iconColor: "#ec0f74",
  },
  {
    num: "03", icon: "Wrench", title: "Expert Installation",
    desc: "On-site installation by trained engineers with network setup, calibration and staff training.",
    points: ["Same-week setup", "Network integration", "Team training"],
    tint: "#fff3e0", iconColor: "#f59e0b",
  },
  {
    num: "04", icon: "ShieldCheck", title: "Proactive Maintenance",
    desc: "Scheduled visits, predictive diagnostics and remote monitoring to keep your fleet always ready.",
    points: ["SLA-backed", "Remote monitoring", "Preventive service"],
    tint: "#e6f7f4", iconColor: "#0d9488",
  },
  {
    num: "05", icon: "Zap", title: "Rapid Repairs",
    desc: "Field teams across India respond within hours with genuine parts and rapid resolution guarantees.",
    points: ["4-hour response", "PAN-India network", "Loaner machines"],
    tint: "#ffe8f2", iconColor: "#ec0f74",
  },
  {
    num: "06", icon: "Package", title: "Genuine Parts",
    desc: "Original toners, drums, rollers and consumables sourced directly from manufacturers.",
    points: ["OEM certified", "Bulk supply", "Auto-replenish"],
    tint: "#fff3e0", iconColor: "#f59e0b",
  },
];

export const industries = [
  { icon: "Printer", label: "Digital Print Shops", color: "#2563eb" },
  { icon: "GraduationCap", label: "Universities", color: "#ec0f74" },
  { icon: "Building2", label: "Corporate Offices", color: "#f59e0b" },
  { icon: "Landmark", label: "Government", color: "#0e1b3d" },
  { icon: "HeartPulse", label: "Healthcare", color: "#0d9488" },
  { icon: "BookOpen", label: "Publishers", color: "#ec0f74" },
];

export const countries = ["India", "UAE", "Malaysia", "Singapore", "Sri Lanka — coming soon"];

export const mapNodes = [
  { label: "Chennai HQ", top: "18%", left: "46%", primary: true },
  { label: "Singapore", top: "64%", left: "30%" },
  { label: "Dubai", top: "40%", left: "70%" },
  { label: "Kuala Lumpur", top: "78%", left: "58%" },
];

export const testimonials = [
  {
    quote: "Sansai has been our reliable partner for 5 years. Their Xerox fleet keeps our production shop running non-stop.",
    name: "Arun Prakash", role: "Director, RapidPrint Chennai",
  },
  {
    quote: "The 24/7 support is real. Any issue is resolved within hours. Our campus prints have never been smoother.",
    name: "Meera Iyer", role: "IT Head, Coastal University",
  },
  {
    quote: "Rental flexibility helped us scale during peak seasons. Genuinely business-friendly terms.",
    name: "Vikram Reddy", role: "Owner, PrintHub Vijayawada",
  },
  {
    quote: "Cross-border service and export documentation was seamless. Highly recommend for international buyers.",
    name: "Farhan Ali", role: "Ops Manager, Dubai Print Co.",
  },
];

export const processSteps = [
  { num: "01", title: "Discovery", desc: "We understand your volume, paper stock and use case in a 20-min call." },
  { num: "02", title: "Recommendation", desc: "Custom proposal comparing 2–3 machines suited to your workflow." },
  { num: "03", title: "Deployment", desc: "Same-week delivery, installation, calibration and operator training." },
  { num: "04", title: "Partnership", desc: "Ongoing maintenance, monthly usage reports and proactive optimization." },
];

export const faqs = [
  { q: "Do you offer trial periods for rental machines?", a: "Yes. We offer 7-day trial periods on most rental machines so you can validate output quality and workflow fit before committing." },
  { q: "What is the typical delivery time?", a: "For in-stock models we deliver and install within the same week. Custom configurations typically ship within 10–14 days." },
  { q: "Do you provide operator training?", a: "Absolutely. Every deployment includes on-site operator training, calibration and a quick-reference guide for your team." },
  { q: "Are the reconditioned machines reliable?", a: "Every reconditioned machine passes 120+ QA checkpoints, is rebuilt to factory spec, and ships with a full warranty." },
  { q: "Which brands do you support?", a: "We supply and service Xerox, Ricoh, Canon, Konica Minolta, Kyocera, Sharp, HP Indigo and Toshiba." },
];

export const milestones = [
  { year: "2017", title: "Founded", desc: "Started importing reconditioned photocopiers to India from Japan and Europe." },
  { year: "2019", title: "PAN-India Reach", desc: "Expanded service network across 15+ Indian cities with rapid-response teams." },
  { year: "2021", title: "Global Exports", desc: "Started exporting to UAE, Malaysia and Singapore with certified installations." },
  { year: "2024", title: "Brand-New Range", desc: "Launched brand-new lineup with Xerox, Ricoh, Canon and Konica-Minolta partnerships." },
  { year: "2025", title: "Smart Fleet", desc: "Rolled out IoT-connected fleet with remote diagnostics and predictive maintenance." },
];

export const values = [
  { icon: "ShieldCheck", title: "Reliability first", desc: "Every machine goes through 120+ QA checkpoints before it ships." },
  { icon: "Compass", title: "Guidance over sales", desc: "We recommend the right fit for your volume — not the priciest option." },
  { icon: "Award", title: "Certified excellence", desc: "ISO 9001-aligned processes and OEM-trained technicians." },
  { icon: "Handshake", title: "Partnership mindset", desc: "We treat every client as a long-term partner, not a transaction." },
];

export const contactChannels = [
  { icon: "Phone", label: "Call us", value: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: "Mail", label: "Email", value: "info@sansaiprintworld.in", href: "mailto:info@sansaiprintworld.in" },
  { icon: "MapPin", label: "Chennai HQ", value: "15, Anna Salai, Nandanam, Chennai, Tamil Nadu 600035", href: "#" },
  { icon: "MapPin", label: "Vijayawada", value: "42, MG Road, Governorpet, Vijayawada, Andhra Pradesh 520002", href: "#" },
];

export const interestOptions = [
  "Buying a machine", "Renting a machine", "Service & maintenance",
  "Genuine parts & consumables", "Something else",
];

export const heroImage = "https://images.unsplash.com/photo-1503694978374-8a2fa686963a?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200";
