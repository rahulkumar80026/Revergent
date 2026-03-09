import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight, Filter, Globe, BarChart3, Zap } from "lucide-react";

export default function CaseStudies() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "AI & Automation", "Cloud & DevOps", "Mobile Apps", "Enterprise"];

  const projects = [
    {
      title: "FinTech Revolution",
      category: "Mobile Apps",
      client: "Global Pay Inc.",
      result: "1.2M+ Active Users",
      desc: "Built a high-security neo-banking application with real-time cross-border settlements.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
      tags: ["React Native", "Node.js", "AWS"]
    },
    {
      title: "Predictive Supply Chain",
      category: "AI & Automation",
      client: "LogiLogix",
      result: "30% Cost Reduction",
      desc: "Implemented an AI-driven forecasting engine to optimize global inventory movement.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
      tags: ["Python", "TensorFlow", "Azure"]
    },
    {
      title: "Cloud Infrastructure Scale",
      category: "Cloud & DevOps",
      client: "StreamFlow",
      result: "99.99% Uptime",
      desc: "Migrated a legacy streaming platform to a multi-region Kubernetes architecture.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
      tags: ["Kubernetes", "Terraform", "GCP"]
    },
    {
        title: "Enterprise ERP 2.0",
        category: "Enterprise",
        client: "BuildCorp",
        result: "45% Efficiency Gain",
        desc: "Designed a custom ERP system to manage 500+ construction sites simultaneously.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
        tags: [".NET Core", "SQL Server", "Angular"]
      },
  ];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="bg-[#f8fafc] min-h-screen text-[#021D59]">
      
      {/* --- HERO SECTION --- */}
      <section className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* <motion.div 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1 border border-[#2cc5d5]/30 rounded-full bg-[#2cc5d5]/5 text-[#2cc5d5] text-[10px] font-bold uppercase tracking-[0.4em] mb-6"
          >
            Our Impact
          </motion.div> */}
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
            Case <span className="text-[#2cc5d5]">Studies.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-500 text-lg md:text-xl font-light">
            Real problems. Technical precision. Measurable business growth. 
            Explore how we transform enterprises.
          </p>
        </div>
      </section>

      {/* --- FILTER SYSTEM --- */}
      <section className="sticky top-20 z-40 bg-[#f8fafc]/80 backdrop-blur-md py-6 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                filter === cat 
                ? "bg-[#021D59] text-white shadow-lg" 
                : "bg-white text-gray-500 border border-gray-200 hover:border-[#2cc5d5]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* --- CASE STUDIES GRID --- */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  layout
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group cursor-pointer"
                >
                  <div className="relative rounded-[32px] overflow-hidden bg-white shadow-sm border border-gray-100 group-hover:shadow-2xl transition-all duration-500">
                    {/* Project Image */}
                    <div className="relative h-[350px] overflow-hidden">
                      <img 
                        src={project.image} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                        alt={project.title} 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#021D59] via-transparent to-transparent opacity-60"></div>
                      
                      {/* Floating Result Badge */}
                      <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-xl flex items-center gap-2">
                        {/* <Zap size={16} className="text-[#2cc5d5]" /> */}
                        <span className="text-xs font-black uppercase text-[#021D59]">{project.result}</span>
                      </div>

                      {/* Client Info Overlay */}
                      <div className="absolute bottom-8 left-8 text-white">
                        <p className="text-[#2cc5d5] text-[10px] font-bold uppercase tracking-widest mb-1">{project.client}</p>
                        <h3 className="text-3xl font-bold">{project.title}</h3>
                      </div>
                    </div>

                    {/* Content Detail */}
                    <div className="p-10">
                      <p className="text-gray-500 text-lg leading-relaxed mb-8 font-light">
                        {project.desc}
                      </p>
                      
                      <div className="flex items-center justify-between border-t border-gray-50 pt-8">
                        <div className="flex gap-2">
                          {project.tags.map(tag => (
                            <span key={tag} className="text-[10px] font-bold text-gray-400 border border-gray-100 px-3 py-1 rounded-md">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-[#2cc5d5] group-hover:border-[#2cc5d5] group-hover:text-white transition-all">
                          <ArrowRight size={20} />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* --- STATS STRIP --- */}
      <section className="bg-[#021D59] py-20">
        <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                    { label: "Successful Deliveries", value: "250+", icon: <Globe /> },
                    { label: "Client Retention Rate", value: "94%", icon: <BarChart3 /> },
                    { label: "Industries Served", value: "12+", icon: <Filter /> }
                ].map((s, i) => (
                    <div key={i} className="flex flex-col items-center text-center">
                        <div className="text-[#2cc5d5] mb-4 opacity-50">{s.icon}</div>
                        <div className="text-5xl font-black text-white mb-2">{s.value}</div>
                        <div className="text-blue-100/40 uppercase tracking-[0.3em] text-[10px] font-bold">{s.label}</div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">Have a challenge for us?</h2>
        <button className="bg-[#2cc5d5] text-[#021D59] px-12 py-5 rounded-full font-bold text-lg hover:scale-105 transition shadow-xl">
          Start Your Project
        </button>
      </section>
    </div>
  );
}