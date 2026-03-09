import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  CreditCard,
  BarChart3,
  Users,
  Smartphone,
  Package,
  Truck,
  ShieldCheck,
  Zap,
  Globe,
  Search,
  Layers,
  Code2,
  Settings,
  ChevronRight,
  Database,
  LayoutGrid,
  HardDrive,
  Server,
} from "lucide-react";

export default function RetailPOS() {
  const [activeStep, setActiveStep] = useState(0);

  const capabilities = [
    {
      icon: <LayoutGrid />,
      title: "Omnichannel POS",
      desc: "Unify your physical stores and e-commerce into a single dashboard with real-time sync.",
    },
    {
      icon: <Package />,
      title: "Smart Inventory",
      desc: "AI-driven stock alerts, automated reordering, and multi-location warehouse management.",
    },
    {
      icon: <CreditCard />,
      title: "Contactless Payments",
      desc: "Integrated support for NFC, QR codes, Apple Pay, and all major global credit cards.",
    },
    {
      icon: <Users />,
      title: "Loyalty Engines",
      desc: "Custom CRM modules to track customer behavior, reward points, and personalized marketing.",
    },
    {
      icon: <BarChart3 />,
      title: "Advanced Analytics",
      desc: "Heatmaps, peak-hour sales reports, and employee performance tracking in real-time.",
    },
    {
      icon: <Smartphone />,
      title: "Mobile Checkout",
      desc: "Turn any tablet or smartphone into a checkout terminal to reduce long queues.",
    },
  ];

  const posSteps = [
    {
      num: "01",
      title: "Store Audit",
      icon: <Search size={20} />,
      desc: "Evaluating your current hardware, network stability, and transaction volume to design the right architecture.",
    },
    {
      num: "02",
      title: "Custom UI/UX",
      icon: <Code2 size={20} />,
      desc: "Designing a high-speed interface that cashiers can master in minutes, reducing checkout errors.",
    },
    {
      num: "03",
      title: "Core Integration",
      icon: <Database size={20} />,
      desc: "Connecting the POS with your existing ERP, accounting software (Quickbooks/Xero), and E-commerce APIs.",
    },
    {
      num: "04",
      title: "Security Hardening",
      icon: <ShieldCheck size={20} />,
      desc: "Implementing PCI-DSS compliance, end-to-end encryption, and offline-mode capabilities.",
    },
    {
      num: "05",
      title: "Hardware Sync",
      icon: <HardDrive size={20} />,
      desc: "Configuring thermal printers, barcode scanners, cash drawers, and customer-facing displays.",
    },
    {
      num: "06",
      title: "Go-Live Support",
      icon: <Zap size={20} />,
      desc: "On-site training and 24/7 technical support to ensure your store never misses a sale.",
    },
  ];

  const techStack = [
    {
      label: "Frontend & Mobile",
      icon: <Smartphone className="text-[#2cc5d5]" size={24} />,
      tools: ["React Native", "Flutter", "Swift", "Electron", "Tailwind"],
    },
    {
      label: "Backend & Sync",
      icon: <Settings className="text-[#2cc5d5]" size={24} />,
      tools: ["Node.js", "Go", "Redis (Real-time)", "GraphQL", "PostgreSQL"],
    },
    {
      label: "Cloud & Security",
      icon: <ShieldCheck className="text-[#2cc5d5]" size={24} />,
      tools: ["AWS IoT", "Azure", "Stripe API", "Adyen", "Firebase"],
    },
  ];

  return (
    <div className="bg-[#f8fafc] text-[#021D59]">
      {/* --- HERO SECTION --- */}
      <section className="pt-18 px-6">
        <div className="custom-container mx-auto">
          <div className="relative rounded-[32px] overflow-hidden shadow-2xl bg-[#021D59] min-h-[500px] flex items-center">
            {/* Visual Background */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `radial-gradient(#2cc5d5 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            ></div>
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=2000"
              className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
              alt="Retail POS Solution"
            />

            <div className="relative z-10 w-full flex flex-col items-center justify-center text-center text-white px-6">
              {/* <motion.div 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="px-4 py-1 border border-[#2cc5d5]/30 rounded-full bg-[#2cc5d5]/10 text-[#2cc5d5] text-[10px] font-bold uppercase tracking-[0.4em] mb-8"
              >
                Next-Gen Retail Infrastructure
              </motion.div> */}

              <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter italic">
                Sell <span className="text-[#2cc5d5]">Faster.</span> <br />
                Grow Smarter.
              </h1>

              <p className="max-w-3xl text-blue-100/70 text-lg md:text-xl font-light mb-10">
                Custom POS systems that go beyond checkout. We build integrated
                retail ecosystems that manage inventory, customers, and sales in
                one place.
              </p>

              <button className="bg-[#2cc5d5] text-[#021D59] px-10 py-5 rounded-2xl font-bold hover:bg-white transition-all shadow-xl shadow-[#2cc5d5]/20">
                Request a Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- CAPABILITIES GRID --- */}
      <section className="py-24 px-6">
        <div className="custom-container mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-4xl font-bold mb-4">
              Retail Feature <span className="text-[#2cc5d5]">Cloud</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">
              Everything you need to run a high-volume modern retail business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border border-gray-100 overflow-hidden">
            {capabilities.map((s, i) => (
              <div
                key={i}
                className="p-12 bg-white border border-gray-50 hover:bg-[#021D59] group transition-all duration-500"
              >
                <div className="text-[#2cc5d5] mb-8 group-hover:scale-110 transition-transform">
                  {React.cloneElement(s.icon, { size: 40, strokeWidth: 1.5 })}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-500 group-hover:text-blue-100/70 transition-colors leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- POS ARCHITECTURE (DIAGRAM ALTERNATIVE) --- */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="custom-container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#021D59] mb-4 uppercase tracking-tighter">
              Unified POS Ecosystem Architecture
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              How we synchronize your physical footprint with digital
              intelligence in real-time.
            </p>
          </div>

          <div className="relative p-10 md:p-16 bg-[#f8fafc] rounded-lg border border-gray-100 shadow-inner overflow-hidden">
            {/* Decorative Grid Background */}
            {/* <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage: `linear-gradient(#2cc5d5 0.5px, transparent 0.5px), linear-gradient(90deg, #2cc5d5 0.5px, transparent 0.5px)`,
                backgroundSize: "30px 30px",
              }}
            ></div> */}

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Level 1: Edge Hardware (The Store) */}
              <div className="w-full lg:w-1/4 space-y-6">
                <div className="p-6 bg-white rounded-2xl shadow-sm border-l-4 border-[#2cc5d5] hover:shadow-md transition-all">
                  <h4 className="font-bold text-[#021D59] text-sm mb-2 uppercase tracking-widest">
                    Edge Layer
                  </h4>
                  <ul className="text-xs text-gray-500 space-y-2">
                    <li className="flex items-center gap-2 font-semibold">
                      <Smartphone size={14} /> Mobile Terminals
                    </li>
                    <li className="flex items-center gap-2 font-semibold">
                      <HardDrive size={14} /> IoT Receipt Printers
                    </li>
                    <li className="flex items-center gap-2 font-semibold">
                      <Zap size={14} /> NFC Payment Hubs
                    </li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="inline-block px-3 py-1 bg-[#2cc5d5]/10 text-[#2cc5d5] rounded-full text-[10px] font-bold">
                    LOCAL SYNC
                  </div>
                </div>
              </div>

              {/* Level 2: The Core (Data Flow) */}
              <div className="hidden lg:block w-1/4 relative">
                {/* Animated Arrows/Lines represent the data flow */}
                <motion.div
                  animate={{ x: [0, 20, 0] }}
                  transition={{ repeat: Infinity, duration: 3 }}
                  className="h-1 bg-gradient-to-r from-[#2cc5d5] to-[#021D59] rounded-full relative"
                >
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[9px] font-black text-gray-400 uppercase tracking-widest">
                    Real-time API (gRPC)
                  </div>
                </motion.div>
              </div>

              {/* Level 3: Cloud Logic (The Brain) */}
              <div className="w-full lg:w-1/3 text-center">
                <div className="relative p-10 bg-[#021D59] rounded-full w-64 h-64 mx-auto flex items-center justify-center shadow-2xl border-4 border-[#2cc5d5]/20 group">
                  <div className="absolute inset-0 rounded-full border border-[#2cc5d5]/30 animate-ping opacity-20"></div>
                  <div className="text-white text-center">
                    <Server size={48} className="mx-auto mb-4 text-[#2cc5d5]" />
                    <h4 className="font-bold text-lg leading-tight uppercase tracking-tighter">
                      REVERGENT
                      <br />
                      CORE ENGINE
                    </h4>
                  </div>
                </div>
              </div>

              {/* Level 4: External Integrations */}
              <div className="w-full lg:w-1/4 space-y-6">
                <div className="p-6 bg-white rounded-2xl shadow-sm border-r-4 border-[#021D59] hover:shadow-md transition-all">
                  <h4 className="font-bold text-[#021D59] text-sm mb-4 uppercase tracking-widest">
                    External Nodes
                  </h4>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-2 bg-gray-50 rounded-lg text-[9px] font-bold text-center border border-gray-100 uppercase italic">
                      ERP Sync
                    </div>
                    <div className="p-2 bg-gray-50 rounded-lg text-[9px] font-bold text-center border border-gray-100 uppercase italic">
                      E-Com (API)
                    </div>
                    <div className="p-2 bg-gray-50 rounded-lg text-[9px] font-bold text-center border border-gray-100 uppercase italic">
                      Tax Engine
                    </div>
                    <div className="p-2 bg-gray-50 rounded-lg text-[9px] font-bold text-center border border-gray-100 uppercase italic">
                      BI Dashboard
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="inline-block px-3 py-1 bg-[#021D59]/10 text-[#021D59] rounded-full text-[10px] font-bold italic underline">
                    SECURE ENDPOINT
                  </div>
                </div>
              </div>
            </div>

            {/* Diagram Footer Description */}
            <div className="mt-16 pt-8 border-t border-gray-200/50 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              <div>
                <span className="text-[#2cc5d5] font-black text-xs uppercase tracking-[0.2em] block mb-2">
                  High Availability
                </span>
                <p className="text-[11px] text-gray-500 leading-relaxed font-medium">
                  Fault-tolerant architecture ensures system continues to
                  process sales even during ISP outages via local edge caching.
                </p>
              </div>
              <div>
                <span className="text-[#2cc5d5] font-black text-xs uppercase tracking-[0.2em] block mb-2">
                  Secure Transactions
                </span>
                <p className="text-[11px] text-gray-500 leading-relaxed font-medium">
                  End-to-end TLS 1.3 encryption with Tokenized payment
                  processing, ensuring zero sensitive data resides on local
                  hardware.
                </p>
              </div>
              <div>
                <span className="text-[#2cc5d5] font-black text-xs uppercase tracking-[0.2em] block mb-2">
                  Instant Scaling
                </span>
                <p className="text-[11px] text-gray-500 leading-relaxed font-medium">
                  Kubernetes-driven backend that auto-scales based on concurrent
                  store transactions during peak holiday seasons.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* --- WORKFLOW (STICKY) --- */}
      <section className="py-24 bg-[#f1f5f9] relative">
        <div className="custom-container mx-auto px-6 lg:px-0">
          <div className="flex flex-col md:flex-row gap-20 items-start">
            <div className="w-full md:w-1/3 sticky top-32">
              <h2 className="text-4xl font-bold mb-8 text-[#021D59]">
                Deployment <br />
                <span className="text-[#2cc5d5]">Blueprint</span>
              </h2>
              <div className="space-y-3">
                {posSteps.map((step, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className={`w-full flex items-center justify-between p-5 rounded-xl transition-all ${activeStep === i ? "bg-[#021D59] text-white shadow-xl translate-x-4" : "bg-white/50 text-gray-500 hover:bg-white"}`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`font-mono text-sm ${activeStep === i ? "text-[#2cc5d5]" : "text-gray-300"}`}
                      >
                        {step.num}
                      </span>
                      <span className="font-bold uppercase tracking-tight text-sm italic">
                        {step.title}
                      </span>
                    </div>
                    <ChevronRight
                      size={16}
                      className={activeStep === i ? "opacity-100" : "opacity-0"}
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <div className="bg-[#021D59] rounded-[32px] p-10 md:p-20 text-white relative overflow-hidden shadow-2xl min-h-[500px] flex flex-col justify-center">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="w-16 h-16 bg-[#2cc5d5]/10 border border-[#2cc5d5]/30 rounded-2xl flex items-center justify-center text-[#2cc5d5] mb-10">
                    {posSteps[activeStep].icon}
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                    {posSteps[activeStep].title}
                  </h3>
                  <p className="text-xl md:text-2xl text-blue-100/70 leading-relaxed mb-12 font-light">
                    {posSteps[activeStep].desc}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- STANDARDIZED TECH STACK --- */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="custom-container mx-auto px-6 text-center">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-[#021D59] mb-4">
              Retail Tech <span className="text-[#2cc5d5]">Core</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Hardened technologies designed for 24/7 retail operations and
              absolute data integrity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {techStack.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="relative p-8 rounded-[24px] bg-[#f8fafc] border border-gray-100 hover:border-[#2cc5d5]/30 hover:shadow-2xl text-left transition-all duration-500 group"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:bg-[#021D59] group-hover:text-[#2cc5d5] transition-all">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#021D59] uppercase tracking-wider">
                    {item.label}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-gray-600 hover:text-[#2cc5d5] hover:border-[#2cc5d5] transition-all cursor-default"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-100 pt-12">
            {[
              {
                label: "Stability",
                value: "Offline-First Sync",
                icon: <Database size={18} />,
              },
              {
                label: "Performance",
                value: "Sub-1s Checkout",
                icon: <Zap size={18} />,
              },
              {
                label: "Compliance",
                value: "PCI-DSS Level 1",
                icon: <ShieldCheck size={18} />,
              },
              {
                label: "Coverage",
                value: "Omnichannel Ready",
                icon: <Globe size={18} />,
              },
            ].map((f, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center md:text-left md:items-start"
              >
                <div className="text-[#2cc5d5] mb-2">{f.icon}</div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  {f.label}
                </span>
                <span className="text-[#021D59] font-bold">{f.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 px-6 bg-[#021D59] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 italic">
            Ready to modernize your store?
          </h2>
          <p className="text-xl text-blue-100/60 mb-12 max-w-2xl mx-auto">
            Get a custom-built POS solution that scales from a single boutique
            to a global chain.
          </p>
          <button className="bg-[#2cc5d5] text-[#021D59] px-12 py-6 rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-2xl">
            Schedule a POS Audit
          </button>
        </div>
      </section>
    </div>
  );
}
