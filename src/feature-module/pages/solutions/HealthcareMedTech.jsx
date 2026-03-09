import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Activity, ShieldCheck, HeartPulse, Stethoscope, 
  Database, Users, Globe, Zap, Microchip, 
  FileText, Search, Code2, ClipboardCheck, 
  MessageSquare, Video, Pill, BrainCircuit, Lock
} from "lucide-react";

export default function HealthcareMedTech() {
  const [activeStep, setActiveStep] = useState(0);

  const capabilities = [
    {
      icon: <HeartPulse />,
      title: "Telemedicine Hubs",
      desc: "HIPAA-compliant video consultation platforms with integrated scheduling and electronic prescriptions.",
    },
    {
      icon: <Database />,
      title: "EHR/EMR Systems",
      desc: "Interoperable health record management systems that unify patient data across departments.",
    },
    {
      icon: <BrainCircuit />,
      title: "AI Diagnostics",
      desc: "Machine learning models designed to assist clinicians in medical imaging analysis and predictive risk scoring.",
    },
    {
      icon: <Microchip />,
      title: "IoT Health Monitoring",
      desc: "Real-time patient monitoring via wearable integration and remote medical device data sync.",
    },
    {
      icon: <Lock />,
      title: "Health Data Security",
      desc: "End-to-end encryption and blockchain-based audit trails for sensitive patient information.",
    },
    {
      icon: <Pill />,
      title: "Pharmacy & Labs",
      desc: "Automated inventory management and LIS (Laboratory Information System) integrations.",
    },
  ];

  const healthcareSteps = [
    {
      num: "01",
      title: "Compliance Audit",
      icon: <ClipboardCheck size={20} />,
      desc: "Analyzing HIPAA, GDPR, or local healthcare regulations to ensure 100% legal and data compliance from day one.",
    },
    {
      num: "02",
      title: "Clinical Workflow",
      icon: <Search size={20} />,
      desc: "Mapping the patient journey from registration to recovery to eliminate administrative friction.",
    },
    {
      num: "03",
      title: "Interoperability build",
      icon: <Code2 size={20} />,
      desc: "Developing systems that communicate via HL7 and FHIR standards for seamless data exchange.",
    },
    {
      num: "04",
      title: "UI/UX for Clinicians",
      icon: <Activity size={20} />,
      desc: "Designing high-efficiency interfaces that reduce 'alert fatigue' and allow doctors to focus on patients.",
    },
    {
      num: "05",
      title: "Security Hardening",
      icon: <ShieldCheck size={20} />,
      desc: "Implementing multi-factor authentication, secure socket layers, and periodic penetration testing.",
    },
    {
      num: "06",
      title: "Scale & Support",
      icon: <Globe size={20} />,
      desc: "Cloud deployment on healthcare-specific instances (AWS GovCloud/Azure Health) with 24/7 technical monitoring.",
    },
  ];

  const techStack = [
    {
      label: "Interoperability",
      icon: <Zap className="text-[#2cc5d5]" size={24} />,
      tools: ["HL7 / FHIR", "DICOM", "Mirth Connect", "GraphQL", "REST APIs"]
    },
    {
      label: "Infrastructure",
      icon: <Database className="text-[#2cc5d5]" size={24} />,
      tools: ["AWS HealthLake", "Azure for Health", "Google Healthcare API", "PostgreSQL", "Redis"]
    },
    {
      label: "MedTech Frontends",
      icon: <Activity className="text-[#2cc5d5]" size={24} />,
      tools: ["React (Caregiver Portals)", "React Native (Patient Apps)", "WebRTC (Video)", "Three.js (3D Imaging)"]
    }
  ];

  return (
    <div className="bg-[#f8fafc] text-[#021D59]">
      
      {/* --- HERO SECTION --- */}
      <section className="pt-18 px-6">
        <div className="custom-container mx-auto">
          <div className="relative rounded-[32px] overflow-hidden shadow-2xl bg-[#021D59] min-h-[500px] flex items-center">
            {/* Clinical Pattern Overlay */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 10v20M10 20h20' stroke='%232cc5d5' stroke-width='1' fill='none'/%3E%3C/svg%3E")` }}></div>
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2000" 
              className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen"
              alt="Healthcare Technology"
            />
            
            <div className="relative z-10 w-full flex flex-col items-center justify-center text-center text-white px-6">
              <motion.div 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="px-4 py-1 border border-[#2cc5d5]/40 rounded-full bg-[#2cc5d5]/10 text-[#2cc5d5] text-[10px] font-bold uppercase tracking-[0.4em] mb-8"
              >
                HIPAA-Compliant MedTech
              </motion.div>
              
              <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter">
                Precision <span className="text-[#2cc5d5]">Health.</span> <br /> 
                Scalable Tech.
              </h1>

              <p className="max-w-3xl text-blue-100/70 text-lg md:text-xl font-light mb-10 leading-relaxed">
                We engineer mission-critical healthcare software that prioritizes 
                patient safety, data interoperability, and clinical efficiency.
              </p>

              <button className="bg-[#2cc5d5] text-[#021D59] px-10 py-5 rounded-xl font-bold hover:bg-white transition-all shadow-xl shadow-[#2cc5d5]/20">
                Discuss Your MedTech Idea
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- CAPABILITIES GRID --- */}
      <section className="py-24 px-6">
        <div className="custom-container mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl font-bold mb-4 border-l-4 border-[#2cc5d5] pl-6 uppercase tracking-wider">Clinical Solutions</h2>
            <p className="text-gray-500 max-w-xl pl-10 text-lg">Future-proof systems for hospitals, clinics, and MedTech startups.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border border-gray-100 shadow-sm rounded-[24px] overflow-hidden">
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

      {/* --- ADVANCED ARCHITECTURE SECTION --- */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="custom-container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#021D59] mb-4 uppercase tracking-tighter italic">Interoperable Health Architecture</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Seamlessly connecting patient portals, clinical EHRs, and laboratory data silos.</p>
          </div>

          

          <div className="relative p-10 bg-[#f8fafc] rounded-[48px] border border-gray-100 mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-6">
                <div className="w-12 h-12 bg-[#2cc5d5]/10 rounded-full flex items-center justify-center text-[#2cc5d5] mb-4"><ShieldCheck /></div>
                <h4 className="font-bold text-[#021D59] mb-2">HITRUST Ready</h4>
                <p className="text-[11px] text-gray-500">Architectures built for compliance with the highest healthcare security standards.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6 border-x border-gray-100">
                <div className="w-12 h-12 bg-[#2cc5d5]/10 rounded-full flex items-center justify-center text-[#2cc5d5] mb-4"><Zap /></div>
                <h4 className="font-bold text-[#021D59] mb-2">FHIR Standard</h4>
                <p className="text-[11px] text-gray-500">Fast Healthcare Interoperability Resources for modern, API-driven data exchange.</p>
              </div>
              <div className="flex flex-col items-center text-center p-6">
                <div className="w-12 h-12 bg-[#2cc5d5]/10 rounded-full flex items-center justify-center text-[#2cc5d5] mb-4"><Users /></div>
                <h4 className="font-bold text-[#021D59] mb-2">Patient-Centric</h4>
                <p className="text-[11px] text-gray-500">Designing every touchpoint to improve patient outcomes and practitioner experience.</p>
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
              <h2 className="text-4xl font-bold mb-8 text-[#021D59]">The Compliance <br/><span className="text-[#2cc5d5]">First Journey</span></h2>
              <div className="space-y-3">
                {healthcareSteps.map((step, i) => (
                  <button key={i} onClick={() => setActiveStep(i)}
                    className={`w-full flex items-center justify-between p-5 rounded-xl transition-all ${activeStep === i ? 'bg-[#021D59] text-white shadow-xl translate-x-4' : 'bg-white/50 text-gray-500 hover:bg-white'}`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`font-mono text-sm ${activeStep === i ? 'text-[#2cc5d5]' : 'text-gray-300'}`}>{step.num}</span>
                      <span className="font-bold uppercase tracking-tight text-sm italic">{step.title}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <div className="bg-[#021D59] rounded-[32px] p-10 md:p-20 text-white relative overflow-hidden shadow-2xl min-h-[500px] flex flex-col justify-center">
                <motion.div key={activeStep} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4 }}>
                  <div className="w-16 h-16 bg-[#2cc5d5]/10 border border-[#2cc5d5]/30 rounded-2xl flex items-center justify-center text-[#2cc5d5] mb-10">
                    {healthcareSteps[activeStep].icon}
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">{healthcareSteps[activeStep].title}</h3>
                  <p className="text-xl md:text-2xl text-blue-100/70 leading-relaxed mb-12 font-light">{healthcareSteps[activeStep].desc}</p>
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- TECH STACK --- */}
      <section className="py-24 bg-white">
        <div className="custom-container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#021D59] mb-16">Healthcare <span className="text-[#2cc5d5]">Foundations</span></h2>
          <div className="grid md:grid-cols-3 gap-8">
            {techStack.map((item, idx) => (
              <motion.div key={idx} whileHover={{ y: -5 }} className="relative p-8 rounded-[24px] bg-[#f8fafc] border border-gray-100 text-left transition-all duration-500 group">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:bg-[#021D59] group-hover:text-[#2cc5d5] transition-all">
                     {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#021D59] uppercase tracking-wider">{item.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.tools.map((tool, i) => (
                    <span key={i} className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-gray-600 hover:text-[#2cc5d5] hover:border-[#2cc5d5] transition-all">{tool}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 px-6 bg-[#021D59] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 italic">Technology that saves lives.</h2>
          <p className="text-xl text-blue-100/60 mb-12 max-w-2xl mx-auto">Whether it's a patient-facing app or a complex clinical engine, we build with medical-grade precision.</p>
          <button className="bg-[#2cc5d5] text-[#021D59] px-12 py-6 rounded-2xl font-black text-xl hover:scale-105 transition-transform">
            Start Your Health Project
          </button>
        </div>
      </section>
    </div>
  );
}