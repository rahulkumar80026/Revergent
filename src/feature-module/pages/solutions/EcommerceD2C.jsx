import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  ShoppingBag, Zap, Globe, BarChart3, Users, 
  Truck, ShieldCheck, Smartphone, Heart, 
  Search, Layers, Code2, Database, ChevronRight,
  Settings, Share2, CreditCard, Box,
  LayoutGrid,
  TrendingUp
} from "lucide-react";

export default function EcommerceD2C() {
  const [activeStep, setActiveStep] = useState(0);

  const capabilities = [
    {
      icon: <Zap />,
      title: "Headless Commerce",
      desc: "Decouple your frontend from the backend for lightning-fast load speeds and total design freedom.",
    },
    {
      icon: <Users />,
      title: "D2C Personalization",
      desc: "AI-driven product recommendations and dynamic pricing based on individual user behavior.",
    },
    {
      icon: <Box />,
      title: "Subscription Models",
      desc: "Recurring revenue engines with automated billing, dunning management, and customer portals.",
    },
    {
      icon: <Truck />,
      title: "Logistics Sync",
      desc: "Real-time integration with 3PL providers, automated manifesting, and live tracking updates.",
    },
    {
      icon: <Share2 />,
      title: "Social Commerce",
      desc: "Seamless checkout experiences integrated directly within Instagram, TikTok, and Pinterest.",
    },
    {
      icon: <BarChart3 />,
      title: "LTV Analytics",
      desc: "Deep-dive dashboards tracking Customer Acquisition Cost (CAC) vs. Lifetime Value (LTV).",
    },
  ];

  const d2cSteps = [
    {
      num: "01",
      title: "Brand Discovery",
      icon: <Search size={20} />,
      desc: "Auditing your current conversion rate, site speed, and customer drop-off points in the funnel.",
    },
    {
      num: "02",
      title: "Storefront UX",
      icon: <LayoutGrid size={20} />,
      desc: "Crafting a high-conversion mobile-first UI that reflects your brand's unique identity and story.",
    },
    {
      num: "03",
      title: "API First Build",
      icon: <Code2 size={20} />,
      desc: "Developing a robust backend using Shopify Plus, Magento, or Custom Headless (Next.js) frameworks.",
    },
    {
      num: "04",
      title: "Checkout Hardening",
      icon: <CreditCard size={20} />,
      desc: "Optimizing the payment flow to reduce cart abandonment with one-click checkout and local gateways.",
    },
    {
      num: "05",
      title: "Marketing Stack",
      icon: <Settings size={20} />,
      desc: "Integrating GA4, Meta Pixel, and Klaviyo to ensure 100% data attribution from day one.",
    },
    {
      num: "06",
      title: "Scaling Phase",
      icon: <TrendingUp size={20} />,
      desc: "Server stress testing for high-traffic sale events (Black Friday) and global CDN deployment.",
    },
  ];

  const techStack = [
    {
      label: "Platforms & Frontend",
      icon: <Smartphone className="text-[#2cc5d5]" size={24} />,
      tools: ["Next.js", "Shopify Plus", "Tailwind CSS", "React", "Vue.js"]
    },
    {
      label: "Backend & Data",
      icon: <Database className="text-[#2cc5d5]" size={24} />,
      tools: ["Node.js", "GraphQL", "PostgreSQL", "Sanity CMS", "Algolia"]
    },
    {
      label: "Growth & Ops",
      icon: <BarChart3 className="text-[#2cc5d5]" size={24} />,
      tools: ["Klaviyo", "Gorgias", "Hotjar", "ShipStation", "Stripe"]
    }
  ];

  return (
    <div className="bg-[#f8fafc] text-[#021D59]">
      
      {/* --- HERO SECTION --- */}
      <section className="pt-18 px-6">
        <div className="custom-container mx-auto">
          <div className="relative rounded-[32px] overflow-hidden shadow-2xl bg-[#021D59] min-h-[500px] flex items-center">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14z' fill='%232cc5d5' fill-opacity='0.2'/%3E%3C/svg%3E")` }}></div>
            <img
              src="https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=2000" 
              className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
              alt="D2C Ecommerce"
            />
            
            <div className="relative z-10 w-full flex flex-col items-center justify-center text-center text-white px-6">
              <motion.div 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="px-4 py-1 border border-[#2cc5d5]/30 rounded-full bg-[#2cc5d5]/10 text-[#2cc5d5] text-[10px] font-bold uppercase tracking-[0.4em] mb-8"
              >
                Conversion-Optimized Commerce
              </motion.div>
              
              <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter">
                Scale Your <span className="text-[#2cc5d5]">Store.</span> <br /> 
                Own Your Data.
              </h1>

              <p className="max-w-3xl text-blue-100/70 text-lg md:text-xl font-light mb-10">
                We build high-velocity D2C storefronts that combine 
                premium brand aesthetics with enterprise-grade engineering.
              </p>

              <button className="bg-[#2cc5d5] text-[#021D59] px-10 py-5 rounded-2xl font-bold hover:bg-white transition-all shadow-xl shadow-[#2cc5d5]/20">
                Launch My Brand
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- CAPABILITIES GRID --- */}
      <section className="py-24 px-6">
        <div className="custom-container mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl font-bold mb-4 border-l-4 border-[#2cc5d5] pl-6 uppercase tracking-wider">The D2C Playbook</h2>
            <p className="text-gray-500 max-w-xl pl-10 text-lg">Modern tools for modern brands to thrive in a competitive marketplace.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border border-gray-100 overflow-hidden">
            {capabilities.map((s, i) => (
              <div key={i} className="p-12 bg-white border border-gray-50 hover:bg-[#021D59] group transition-all duration-500">
                <div className="text-[#2cc5d5] mb-8 group-hover:scale-110 transition-transform">
                  {React.cloneElement(s.icon, { size: 40, strokeWidth: 1.5 })}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">{s.title}</h3>
                <p className="text-gray-500 group-hover:text-blue-100/70 transition-colors leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- D2C ARCHITECTURE SECTION --- */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="custom-container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-[#021D59] mb-4 uppercase tracking-tighter italic">Modern Headless Commerce Architecture</h2>
                <p className="text-gray-500 max-w-2xl mx-auto">Scaling D2C brands by separating the presentation layer from the commerce logic.</p>
            </div>
            <div className="relative p-12 bg-[#f8fafc] rounded-[48px] border border-gray-100 shadow-inner">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
                    <div className="space-y-4">
                        <div className="p-5 bg-white rounded-xl shadow-sm border-l-4 border-[#2cc5d5]">
                            <h4 className="font-black text-[10px] text-[#2cc5d5] uppercase tracking-[0.2em] mb-1">Storefront</h4>
                            <p className="text-sm font-bold text-[#021D59]">Next.js / Progressive Web App</p>
                        </div>
                        <div className="p-5 bg-white rounded-xl shadow-sm border-l-4 border-gray-200">
                            <h4 className="font-black text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-1">API Layer</h4>
                            <p className="text-sm font-bold text-[#021D59]">GraphQL Federation</p>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <div className="w-48 h-48 bg-[#021D59] rounded-full flex items-center justify-center text-white shadow-2xl relative">
                            <div className="absolute inset-0 rounded-full border-2 border-[#2cc5d5] animate-pulse opacity-20"></div>
                            <ShoppingBag size={48} className="text-[#2cc5d5]" />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div className="p-5 bg-white rounded-xl shadow-sm border-r-4 border-[#2cc5d5]">
                            <h4 className="font-black text-[10px] text-[#2cc5d5] uppercase tracking-[0.2em] mb-1 text-right">Commerce Engine</h4>
                            <p className="text-sm font-bold text-[#021D59] text-right">Shopify Plus / Medusa</p>
                        </div>
                        <div className="p-5 bg-white rounded-xl shadow-sm border-r-4 border-gray-200">
                            <h4 className="font-black text-[10px] text-gray-400 uppercase tracking-[0.2em] mb-1 text-right">Customer Data</h4>
                            <p className="text-sm font-bold text-[#021D59] text-right">CDP / Klaviyo Sync</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- STANDARDIZED TECH STACK --- */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="custom-container mx-auto px-6 text-center">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-[#021D59] mb-4">The D2C <span className="text-[#2cc5d5]">Stack</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Enterprise tools tailored for high-growth direct-to-consumer brands.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {techStack.map((item, idx) => (
              <motion.div key={idx} whileHover={{ y: -5 }} className="relative p-8 rounded-[24px] bg-[#f8fafc] border border-gray-100 hover:border-[#2cc5d5]/30 hover:shadow-2xl transition-all duration-500 group">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:bg-[#021D59] group-hover:text-[#2cc5d5] transition-all">
                     {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#021D59] uppercase tracking-wider">{item.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.tools.map((tool, i) => (
                    <span key={i} className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-gray-600 hover:text-[#2cc5d5] hover:border-[#2cc5d5] transition-all cursor-default">{tool}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-100 pt-12">
            {[
              { label: "Speed", value: "Sub-2s Load Time", icon: <Zap size={18}/> },
              { label: "Checkout", value: "3-Step Conversion", icon: <CreditCard size={18}/> },
              { label: "Global", value: "Multi-Currency", icon: <Globe size={18}/> },
              { label: "Trust", value: "PCI Level 1", icon: <ShieldCheck size={18}/> }
            ].map((f, i) => (
              <div key={i} className="flex flex-col items-center text-center md:text-left md:items-start">
                <div className="text-[#2cc5d5] mb-2">{f.icon}</div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{f.label}</span>
                <span className="text-[#021D59] font-bold">{f.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 px-6 bg-[#021D59] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 italic">Don't just sell. Scale.</h2>
          <p className="text-xl text-blue-100/60 mb-12 max-w-2xl mx-auto">Get a high-performance D2C ecosystem that converts visitors into loyal brand advocates.</p>
          <button className="bg-[#2cc5d5] text-[#021D59] px-12 py-6 rounded-2xl font-black text-xl hover:bg-white transition-all shadow-xl">
            Audit My Store
          </button>
        </div>
      </section>
    </div>
  );
}