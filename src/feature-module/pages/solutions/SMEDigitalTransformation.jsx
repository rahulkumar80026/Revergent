import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  BarChart3,
  Workflow,
  Users,
  Laptop,
  Database,
  ShieldCheck,
  Zap,
  Layers,
  RefreshCw,
  Search,
  Code2,
  Cloud,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Settings,
  HelpCircle,
} from "lucide-react";

export default function SMEDigitalTransformation() {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      icon: <Workflow />,
      title: "Process Automation",
      desc: "Eliminate repetitive manual tasks with custom RPA (Robotic Process Automation) and smart workflows.",
    },
    {
      icon: <Database />,
      title: "Data Centralization",
      desc: "Connect your sales, inventory, and finance data into a single source of truth for better decision making.",
    },
    {
      icon: <Cloud />,
      title: "Cloud Migration",
      desc: "Moving legacy on-premise systems to secure, scalable cloud environments like AWS or Azure.",
    },
    {
      icon: <Laptop />,
      title: "Digital Workplace",
      desc: "Modernizing employee collaboration with integrated communication and project management tools.",
    },
    {
      icon: <ShieldCheck />,
      title: "Cybersecurity Audit",
      desc: "Protecting business-critical data with enterprise-grade security tailored for growing companies.",
    },
    {
      icon: <TrendingUp />,
      title: "Customer Portals",
      desc: "Building self-service digital platforms for your clients to increase satisfaction and reduce support load.",
    },
  ];

  const roadmapSteps = [
    {
      title: "Digital Maturity Audit",
      desc: "We analyze your current tech stack, identify bottlenecks, and map out a high-ROI digital roadmap.",
      icon: <Search className="text-[#2cc5d5]" />,
    },
    {
      title: "Legacy Modernization",
      desc: "Systematically upgrading or replacing outdated software with modern, API-first applications.",
      icon: <RefreshCw className="text-[#2cc5d5]" />,
    },
    {
      title: "Agile Implementation",
      desc: "Deploying solutions in phases to ensure business continuity and team adoption without overwhelming operations.",
      icon: <Zap className="text-[#2cc5d5]" />,
    },
  ];

  return (
    <div className="bg-[#f8fafc] text-[#021D59]">
      {/* --- HERO SECTION --- */}
      <section className="pt-18 px-6">
        <div className="custom-container mx-auto">
          <div className="relative rounded-[32px] overflow-hidden shadow-2xl bg-[#021D59] min-h-[500px] flex items-center">
            {/* Blueprint Grid Overlay */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `linear-gradient(#2cc5d5 1px, transparent 1px), linear-gradient(90deg, #2cc5d5 1px, transparent 1px)`,
                backgroundSize: "40px 40px",
              }}
            ></div>

            <div className="relative z-10 w-full grid md:grid-cols-2 items-center px-10 md:px-20 py-16 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="inline-block px-4 py-1 border border-[#2cc5d5]/30 rounded-full bg-[#2cc5d5]/10 text-[#2cc5d5] text-[10px] font-bold uppercase tracking-[0.4em] mb-6">
                  SME Scale-Up Program
                </div>
                <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter italic">
                  Legacy to <span className="text-[#2cc5d5]">Legendary.</span>
                </h1>
                <p className="text-blue-100/70 text-lg md:text-xl font-light mb-8 leading-relaxed">
                  We empower SMEs to compete with giants by modernizing their
                  technology, automating operations, and unlocking hidden data
                  value.
                </p>
                <button className="bg-[#2cc5d5] text-[#021D59] px-10 py-5 rounded-xl font-bold hover:bg-white transition-all">
                  Get My Transformation Roadmap
                </button>
              </motion.div>

              <div className="hidden md:flex justify-end">
                <div className="w-80 h-80 bg-[#2cc5d5]/5 rounded-full border border-[#2cc5d5]/20 flex items-center justify-center relative">
                  <div className="absolute inset-0 animate-pulse bg-[#2cc5d5]/10 rounded-full"></div>
                  <Rocket size={100} className="text-[#2cc5d5]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TRANSFORMATION PILLARS --- */}
      <section className="py-24 px-6">
        <div className="custom-container mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl font-bold mb-4 border-l-4 border-[#2cc5d5] pl-6 uppercase tracking-wider">
              The 6 Pillars of{" "}
              <span className="text-[#2cc5d5]">Modernization</span>
            </h2>
            <p className="text-gray-500 max-w-xl pl-10 text-lg">
              A holistic approach to turning your business into a digital-first
              organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border border-gray-100 overflow-hidden">
            {pillars.map((s, i) => (
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

      {/* --- TRANSFORMATION FRAMEWORK (DIAGRAM) --- */}
      <section className="py-24 bg-white">
        <div className="custom-container mx-auto px-6">
          <div className="bg-[#021D59] rounded-[48px] p-12 md:p-20 text-white overflow-hidden relative">
            <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-8">
                  How We <span className="text-[#2cc5d5]">Bridge the Gap</span>
                </h2>
                <div className="space-y-10">
                  {roadmapSteps.map((step, idx) => (
                    <div key={idx} className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                        {step.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                        <p className="text-blue-100/60 font-light text-sm">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
                <h3 className="text-center font-bold mb-10 text-[#2cc5d5] uppercase tracking-widest text-sm">
                  Target Operating Model
                </h3>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-center">
                    <div className="text-2xl font-bold text-[#2cc5d5]">40%</div>
                    <div className="text-[10px] uppercase text-gray-400">
                      OpEx Reduction
                    </div>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-center">
                    <div className="text-2xl font-bold text-[#2cc5d5]">
                      2.5x
                    </div>
                    <div className="text-[10px] uppercase text-gray-400">
                      Scaling Speed
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TECH ADOPTION --- */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="custom-container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold text-[#021D59] mb-6 tracking-tight italic">
                Low Friction <br />
                <span className="text-[#2cc5d5]">High Impact Tech.</span>
              </h2>
              <p className="text-gray-500 text-lg mb-8 font-light">
                We don't just throw complex tech at you. We select tools that
                your team will actually use and love.
              </p>
              <div className="space-y-4">
                {[
                  "No-Code/Low-Code Integration",
                  "SaaS Ecosystem Optimization",
                  "Mobile-First Operations",
                  "Real-time BI Dashboards",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 font-bold text-[#021D59]"
                  >
                    <CheckCircle2 size={18} className="text-[#2cc5d5]" /> {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {/* Tech Badge Grid */}
              {[
                "AWS",
                "Salesforce",
                "PowerBI",
                "SAP",
                "Monday.com",
                "Zapier",
              ].map((tool) => (
                <div
                  key={tool}
                  className="px-8 py-6 bg-white rounded-2xl shadow-sm border border-gray-100 font-black text-center text-gray-400 hover:text-[#021D59] hover:border-[#2cc5d5] transition-all cursor-default uppercase italic tracking-tighter"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 px-6 bg-[#021D59] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-8 italic">
            Your competitors are <br />
            going digital. Are you?
          </h2>
          <p className="text-xl text-blue-100/60 mb-12 font-light">
            Stop struggling with manual processes. Let's build a tech-enabled
            future for your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-[#2cc5d5] text-[#021D59] px-12 py-6 rounded-2xl font-black text-xl hover:scale-105 transition-all">
              Book a Strategy Call
            </button>
            <button className="bg-white/10 text-white border border-white/20 px-12 py-6 rounded-2xl font-black text-xl hover:bg-white/20 transition-all">
              View SME Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
