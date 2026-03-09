import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Cloud, CloudLightning, ShieldCheck, Terminal, Infinity, 
  Server, HardDrive, Cpu, Activity, Lock, 
  Search, Layers, Code2, Zap, Globe, Settings,
  ChevronRight, Database, Share2
} from "lucide-react";

export default function CloudDevOps() {
  const [activeStep, setActiveStep] = useState(0);

  const capabilities = [
    {
      icon: <Cloud />,
      title: "Cloud Migration",
      desc: "Seamless transition of on-premise workloads to AWS, Azure, or GCP with zero data loss and minimal downtime.",
    },
    {
      icon: <Infinity />,
      title: "CI/CD Pipelines",
      desc: "Automated build, test, and deployment workflows that reduce human error and accelerate release cycles.",
    },
    {
      icon: <Terminal />,
      title: "Infrastructure as Code",
      desc: "Managing cloud environments through code (Terraform/Ansible) for repeatable and version-controlled scaling.",
    },
    {
      icon: <ShieldCheck />,
      title: "DevSecOps",
      desc: "Integrating security audits and automated compliance checks directly into your development lifecycle.",
    },
    {
      icon: <Activity />,
      title: "Cloud Monitoring",
      desc: "24/7 observability with real-time logging, alerting, and performance optimization for complex clusters.",
    },
    {
      icon: <Share2 />,
      title: "Microservices & K8s",
      desc: "Architecting scalable containerized applications using Kubernetes for high availability and fault tolerance.",
    },
  ];

  const devOpsSteps = [
    {
      num: "01",
      title: "Cloud Audit",
      icon: <Search size={20} />,
      desc: "Analyzing current infrastructure costs, security gaps, and performance bottlenecks to plan the migration.",
    },
    {
      num: "02",
      title: "Arch Design",
      icon: <Layers size={20} />,
      desc: "Designing a multi-region, fault-tolerant cloud architecture that scales automatically with user demand.",
    },
    {
      num: "03",
      title: "IaC Scripting",
      icon: <Code2 size={20} />,
      desc: "Developing Terraform and Ansible scripts to provision infrastructure that is identical across Dev, Staging, and Prod.",
    },
    {
      num: "04",
      title: "Pipeline Setup",
      icon: <Zap size={20} />,
      desc: "Building robust CI/CD pipelines using GitHub Actions or Jenkins for automated unit testing and deployment.",
    },
    {
      num: "05",
      title: "Hardening",
      icon: <Lock size={20} />,
      desc: "Implementing IAM roles, VPC peering, and encryption layers to ensure your cloud is impenetrable.",
    },
    {
      num: "06",
      title: "Observability",
      icon: <Activity size={20} />,
      desc: "Setting up Prometheus and Grafana dashboards for 360-degree visibility into system health and costs.",
    },
  ];

  const techStack = [
    {
      label: "Cloud Providers",
      icon: <Cloud className="text-[#2cc5d5]" size={24} />,
      tools: ["AWS", "Microsoft Azure", "Google Cloud (GCP)", "DigitalOcean"]
    },
    {
      label: "DevOps Tools",
      icon: <Settings className="text-[#2cc5d5]" size={24} />,
      tools: ["Terraform", "Kubernetes", "Docker", "Jenkins", "Ansible"]
    },
    {
      label: "Monitoring & CI",
      icon: <Activity className="text-[#2cc5d5]" size={24} />,
      tools: ["Prometheus", "Grafana", "GitHub Actions", "Datadog", "Splunk"]
    }
  ];

  return (
    <div className="bg-[#f8fafc] text-[#021D59]">
      
      {/* --- HERO SECTION --- */}
      <section className="pt-18 px-6">
        <div className="custom-container mx-auto">
          <div className="relative rounded-[32px] overflow-hidden shadow-2xl bg-[#021D59] min-h-[480px] flex items-center">
            {/* Visual Dynamic Background */}
            <div className="absolute inset-0 opacity-30" style={{ backgroundImage: `linear-gradient(45deg, #021D59 25%, transparent 25%), linear-gradient(-45deg, #021D59 25%, transparent 25%)`, backgroundSize: '60px 60px' }}></div>
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
              className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
              alt="Cloud Engineering"
            />
            
            <div className="relative z-10 w-full flex flex-col items-center justify-center text-center text-white px-6">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
                className="px-4 py-1 border border-[#2cc5d5]/30 rounded-full bg-[#2cc5d5]/10 text-[#2cc5d5] text-[10px] font-bold uppercase tracking-[0.5em] mb-8"
              >
                High-Availability Infrastructure
              </motion.div>
              
              <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter">
                Cloud <span className="text-[#2cc5d5]">Engineered</span> <br /> 
                For Scale.
              </h1>

              <p className="max-w-2xl text-blue-100/70 text-lg md:text-xl font-light mb-10 leading-relaxed">
                We build the invisible engines that power the world's most resilient apps. 
                Automate your delivery. Secure your data. Scale infinitely.
              </p>

              <div className="flex gap-4">
                <button className="bg-[#2cc5d5] text-[#021D59] px-10 py-5 rounded-xl font-bold hover:bg-white transition-all shadow-xl shadow-[#2cc5d5]/20">
                  Modernize My Stack
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CAPABILITIES GRID --- */}
      <section className="py-24 px-6">
        <div className="custom-container mx-auto">
          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold mb-4 border-l-4 border-[#2cc5d5] pl-6 uppercase tracking-wider">Cloud Ecosystem</h2>
              <p className="text-gray-500 pl-10 text-lg">Robust DevOps engineering for teams that ship fast and don't break things.</p>
            </div>
            <div className="bg-[#e8f9fb] text-[#2cc5d5] px-6 py-3 rounded-full font-bold text-sm">
              99.99% Uptime Architecture
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border border-gray-100 shadow-sm rounded-[24px] overflow-hidden">
            {capabilities.map((s, i) => (
              <div key={i} className="p-12 bg-white border border-gray-50 hover:bg-[#021D59] group transition-all duration-500 relative">
                <div className="text-[#2cc5d5] mb-8 group-hover:scale-110 group-hover:-translate-y-2 transition-all">
                  {React.cloneElement(s.icon, { size: 40, strokeWidth: 1.5 })}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">{s.title}</h3>
                <p className="text-gray-500 group-hover:text-blue-100/70 transition-colors leading-relaxed">{s.desc}</p>
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-10 transition-opacity">
                  <Infinity size={60} className="text-[#2cc5d5]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- DEV OPS WORKFLOW (STICKY BLUEPRINT) --- */}
      <section className="py-24 bg-[#f1f5f9] relative">
        <div className="custom-container mx-auto px-6 lg:px-0">
          <div className="flex flex-col md:flex-row gap-20 items-start">
            
            <div className="w-full md:w-1/3 sticky top-32">
              <h2 className="text-4xl font-bold mb-8 text-[#021D59]">The DevOps <br/><span className="text-[#2cc5d5]">Lifecycle</span></h2>
              <div className="space-y-3">
                {devOpsSteps.map((step, i) => (
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
              <div className="bg-[#021D59] rounded-[32px] p-10 md:p-20 text-white relative overflow-hidden shadow-2xl min-h-[520px] flex flex-col justify-center">
                <div className="absolute top-0 right-0 p-10 opacity-5">
                  <Terminal size={200} />
                </div>
                
                <motion.div key={activeStep} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2cc5d5]/10 border border-[#2cc5d5]/30 rounded-lg text-[#2cc5d5] mb-10 font-mono text-xs tracking-widest uppercase">
                    Status: System_Ready
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">{devOpsSteps[activeStep].title}</h3>
                  <p className="text-xl md:text-2xl text-blue-100/70 leading-relaxed mb-12 font-light">{devOpsSteps[activeStep].desc}</p>
                  
                  <div className="grid grid-cols-2 gap-8 pt-10 border-t border-white/10">
                    <div>
                      <h4 className="text-[#2cc5d5] text-[10px] font-bold uppercase tracking-[0.2em] mb-2">Metric</h4>
                      <p className="text-sm font-medium">Auto-scaling enabled</p>
                    </div>
                    <div>
                      <h4 className="text-[#2cc5d5] text-[10px] font-bold uppercase tracking-[0.2em] mb-2">Security</h4>
                      <p className="text-sm font-medium">End-to-End Encryption</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- CONSISTENT TECH STACK --- */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2cc5d5]/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="custom-container mx-auto px-6 text-center">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-[#021D59] mb-4">Cloud Native <span className="text-[#2cc5d5]">Arsenal</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto">We use best-in-class cloud technologies to ensure your infrastructure is your biggest competitive advantage.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {techStack.map((item, idx) => (
              <motion.div key={idx} whileHover={{ y: -5 }} className="relative p-8 rounded-[24px] bg-[#f8fafc] border border-gray-100 hover:border-[#2cc5d5]/30 hover:shadow-2xl hover:shadow-[#2cc5d5]/10 transition-all duration-500 group text-left">
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
              { label: "Cost", value: "Cloud Savings", icon: <Database size={18}/> },
              { label: "Speed", value: "Instant Deploy", icon: <CloudLightning size={18}/> },
              { label: "Reliability", value: "Multi-Cloud Ready", icon: <Globe size={18}/> },
              { label: "Compliance", value: "Zero Trust", icon: <ShieldCheck size={18}/> }
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
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto bg-[#021D59] rounded-[40px] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#2cc5d5]/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Stop worrying about uptime.</h2>
          <p className="text-xl text-blue-100/60 mb-12 max-w-2xl mx-auto">Build a cloud infrastructure that manages itself. Let's start the blueprinting today.</p>
          <button className="bg-[#2cc5d5] text-[#021D59] px-12 py-5 rounded-full font-bold text-xl hover:bg-white transition-all shadow-xl">
            Book Cloud Strategy Call
          </button>
        </div>
      </section>
    </div>
  );
}