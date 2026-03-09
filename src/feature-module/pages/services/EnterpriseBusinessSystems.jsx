import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Building2, LineChart, ShieldCheck, Factory, Users, 
  BarChart3, Database, Globe, Zap, Settings, 
  Search, Layout, Code2, TestTube2, Rocket, RefreshCw,
  ChevronRight, Server, Layers
} from "lucide-react";

export default function EnterpriseBusinessSystems() {
  const [activeStep, setActiveStep] = useState(0);

  const capabilities = [
    {
      icon: <Building2 />,
      title: "ERP Solutions",
      desc: "Integrated enterprise resource planning systems that unify finance, HR, and operations into a single source of truth.",
    },
    {
      icon: <Users />,
      title: "Custom CRM",
      desc: "Advanced customer relationship management platforms designed to scale sales and automate marketing workflows.",
    },
    {
      icon: <Factory />,
      title: "Supply Chain",
      desc: "Real-time visibility into logistics, inventory management, and vendor coordination with AI-driven forecasting.",
    },
    {
      icon: <LineChart />,
      title: "Business Intel",
      desc: "Deep analytics dashboards that transform raw enterprise data into actionable executive insights.",
    },
    {
      icon: <ShieldCheck />,
      title: "Compliance & Risk",
      desc: "Built-in governance and risk management tools to ensure global compliance (GDPR, SOC2, HIPAA).",
    },
    {
      icon: <Database />,
      title: "Legacy Migration",
      desc: "Safe and seamless transition of legacy on-premise data to modern, cloud-native enterprise architectures.",
    },
  ];

  const ebsSteps = [
    {
      num: "01",
      title: "Business Audit",
      icon: <Search size={20} />,
      desc: "Identifying operational bottlenecks and auditing current legacy systems to define a modern digital roadmap.",
    },
    {
      num: "02",
      title: "Architecture Design",
      icon: <Layers size={20} />,
      desc: "Mapping data flows and designing a scalable system architecture that integrates with your existing tech ecosystem.",
    },
    {
      num: "03",
      title: "Core Build",
      icon: <Code2 size={20} />,
      desc: "Modular development of enterprise modules (Finance, HR, Logistics) using high-security coding standards.",
    },
    {
      num: "04",
      title: "Integration & Testing",
      icon: <Zap size={20} />,
      desc: "Connecting third-party APIs and conducting stress tests to ensure the system handles enterprise-scale loads.",
    },
    {
      num: "05",
      title: "Global Deployment",
      icon: <Globe size={20} />,
      desc: "Phased rollout across departments with multi-region cloud deployment and employee training programs.",
    },
    {
      num: "06",
      title: "Managed Evolution",
      icon: <Settings size={20} />,
      desc: "24/7 technical support, security patching, and iterative feature updates to stay ahead of market changes.",
    },
  ];

  const techStack = [
    {
      label: "Backend Core",
      icon: <Server className="text-[#2cc5d5]" size={24} />,
      tools: [".NET 8", "Java Spring", "Node.js", "Python", "Go"]
    },
    {
      label: "Data Architecture",
      icon: <Database className="text-[#2cc5d5]" size={24} />,
      tools: ["PostgreSQL", "Oracle DB", "Redis", "Snowflake", "SAP Hana"]
    },
    {
      label: "Cloud & Security",
      icon: <ShieldCheck className="text-[#2cc5d5]" size={24} />,
      tools: ["Azure", "AWS", "Kubernetes", "Okta", "Vault"]
    }
  ];

  return (
    <div className="bg-[#f8fafc] text-[#021D59]">
      
      {/* --- HERO SECTION --- */}
      <section className="pt-18 px-6">
        <div className="custom-container mx-auto">
          <div className="relative rounded-[32px] overflow-hidden shadow-2xl bg-[#021D59]">
            {/* Subtle Tech Pattern & Image */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `radial-gradient(#2cc5d5 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000" 
              className="w-full h-[450px] object-cover opacity-30 mix-blend-luminosity"
              alt="Enterprise Systems"
            />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
              <motion.div 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="px-4 py-1 border border-[#2cc5d5]/30 rounded-full bg-[#2cc5d5]/10 text-[#2cc5d5] text-[10px] font-bold uppercase tracking-[0.4em] mb-8"
              >
                Scalable Operation Systems
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-[1.1]">
                Enterprise <span className="text-[#2cc5d5]">Logic.</span> <br /> 
                Simplified Execution.
              </h1>

              <p className="max-w-3xl text-blue-100/70 text-lg md:text-xl font-light mb-10">
                Architecting robust digital foundations that power global businesses. 
                From complex ERPs to high-velocity data systems.
              </p>

              <button className="bg-[#2cc5d5] text-[#021D59] px-10 py-5 rounded-xl font-bold hover:bg-white transition-all shadow-xl shadow-[#2cc5d5]/10">
                Request System Audit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- CAPABILITIES GRID --- */}
      <section className="py-24 px-6">
        <div className="custom-container mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl font-bold mb-4 border-l-4 border-[#2cc5d5] pl-6 uppercase tracking-wider">Solutions Ecosystem</h2>
            <p className="text-gray-500 max-w-xl pl-10 text-lg">Integrated digital infrastructure for the modern enterprise.</p>
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

      {/* --- WORKFLOW (STICKY NAVIGATION) --- */}
      <section className="py-24 bg-[#f1f5f9] relative">
        <div className="custom-container mx-auto px-6 lg:px-0">
          <div className="flex flex-col md:flex-row gap-20 items-start">
            
            <div className="w-full md:w-1/3 sticky top-32">
              <h2 className="text-4xl font-bold mb-8 text-[#021D59]">The EBS <br/><span className="text-[#2cc5d5]">Blueprint</span></h2>
              <div className="space-y-3">
                {ebsSteps.map((step, i) => (
                  <button key={i} onClick={() => setActiveStep(i)}
                    className={`w-full flex items-center justify-between p-5 rounded-xl transition-all ${activeStep === i ? 'bg-[#021D59] text-white shadow-xl translate-x-4' : 'bg-white/50 text-gray-500 hover:bg-white'}`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`font-mono text-sm ${activeStep === i ? 'text-[#2cc5d5]' : 'text-gray-300'}`}>{step.num}</span>
                      <span className="font-bold uppercase tracking-tight text-sm italic">{step.title}</span>
                    </div>
                    <ChevronRight size={16} className={activeStep === i ? 'opacity-100' : 'opacity-0'} />
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <div className="bg-[#021D59] rounded-[32px] p-10 md:p-20 text-white relative overflow-hidden shadow-2xl min-h-[500px] flex flex-col justify-center">
                <motion.div key={activeStep} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
                  <div className="w-16 h-16 bg-[#2cc5d5]/10 border border-[#2cc5d5]/30 rounded-2xl flex items-center justify-center text-[#2cc5d5] mb-10">
                    {ebsSteps[activeStep].icon}
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">{ebsSteps[activeStep].title}</h3>
                  <p className="text-xl md:text-2xl text-blue-100/70 leading-relaxed mb-12 font-light">{ebsSteps[activeStep].desc}</p>
                  
                  <div className="grid grid-cols-2 gap-8 pt-10 border-t border-white/10">
                    <div>
                      <h4 className="text-[#2cc5d5] text-[10px] font-bold uppercase tracking-[0.2em] mb-2">Focus Area</h4>
                      <p className="text-sm font-medium">Enterprise Integration</p>
                    </div>
                    <div>
                      <h4 className="text-[#2cc5d5] text-[10px] font-bold uppercase tracking-[0.2em] mb-2">Standard</h4>
                      <p className="text-sm font-medium">ISO/IEC 27001 Compliant</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- STANDARDIZED TECH STACK (REVERGENT DESIGN) --- */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2cc5d5]/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="custom-container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#021D59] mb-4">The <span className="text-[#2cc5d5]">Revergent</span> Enterprise Stack</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">We leverage hardened, enterprise-grade technologies to ensure your systems are unbreakable and highly performant.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {techStack.map((item, idx) => (
              <motion.div key={idx} whileHover={{ y: -5 }} className="relative p-8 rounded-[24px] bg-[#f8fafc] border border-gray-100 hover:border-[#2cc5d5]/30 hover:shadow-2xl hover:shadow-[#2cc5d5]/10 transition-all duration-500 group">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:bg-[#021D59] transition-all">
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

          {/* Consistent Trust Indicators */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-100 pt-12">
            {[
              { label: "Stability", value: "99.9% Uptime SLA", icon: <ShieldCheck size={18}/> },
              { label: "Scalability", value: "Elastic Growth", icon: <Zap size={18}/> },
              { label: "Compliance", value: "Global Standard", icon: <Globe size={18}/> },
              { label: "Architecture", value: "Microservices", icon: <Layers size={18}/> }
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

      {/* --- CTA --- */}
      <section className="py-24 px-6 bg-[#021D59] text-white">
        <div className="max-w-5xl mx-auto border-t border-b border-white/10 py-16 flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <h2 className="text-4xl font-bold mb-4 italic">Digitize Your Business.</h2>
            <p className="text-blue-100/60 text-lg">Speak with our enterprise architects about custom ERP/CRM solutions.</p>
          </div>
          <button className="bg-[#2cc5d5] text-[#021D59] px-10 py-5 rounded-lg font-bold hover:scale-105 transition shadow-2xl shadow-[#2cc5d5]/20">
            Consult Now
          </button>
        </div>
      </section>
    </div>
  );
}