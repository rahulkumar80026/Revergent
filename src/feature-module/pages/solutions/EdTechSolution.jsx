import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  BookOpen, Video, GraduationCap, Users, Brain, 
  BarChart3, Globe, ShieldCheck, Zap, Laptop,
  Search, Code2, Database, LayoutGrid, ChevronRight,
  MonitorPlay, Award, PenTool
} from "lucide-react";

export default function EdTechSolution() {
  const [activeStep, setActiveStep] = useState(0);

  const capabilities = [
    {
      icon: <MonitorPlay />,
      title: "LMS Development",
      desc: "Custom-built Learning Management Systems with SCORM compliance and seamless course authoring tools.",
    },
    {
      icon: <Brain />,
      title: "AI-Personalized Learning",
      desc: "Adaptive learning algorithms that adjust content difficulty based on individual student performance.",
    },
    {
      icon: <Video />,
      title: "Live Virtual Classrooms",
      desc: "Low-latency interactive video streaming with integrated whiteboards, polls, and breakout rooms.",
    },
    {
      icon: <Award />,
      title: "Gamification Engines",
      desc: "Boost engagement with badges, leaderboards, and experience-point systems tailored to your curriculum.",
    },
    {
      icon: <ShieldCheck />,
      title: "Secure Online Exams",
      desc: "AI-proctored assessment tools with lockdown browser integration and anti-cheat mechanisms.",
    },
    {
      icon: <BarChart3 />,
      title: "Learning Analytics",
      desc: "Deep insights into student progress, completion rates, and instructor effectiveness via custom dashboards.",
    },
  ];

  const edtechSteps = [
    {
      num: "01",
      title: "Pedagogy Audit",
      icon: <Search size={20} />,
      desc: "Understanding the learning objectives, target demographic, and content delivery requirements.",
    },
    {
      num: "02",
      title: "UX for Learners",
      icon: <PenTool size={20} />,
      desc: "Designing an intuitive, distraction-free interface optimized for both K-12 and professional learners.",
    },
    {
      num: "03",
      title: "Platform Core",
      icon: <Code2 size={20} />,
      desc: "Developing the robust backend infrastructure to handle thousands of concurrent video streams and user sessions.",
    },
    {
      num: "04",
      title: "Content Integration",
      icon: <Database size={20} />,
      desc: "Setting up secure CDN delivery for video content and integrating third-party educational resources.",
    },
    {
      num: "05",
      title: "Mobile Learning",
      icon: <Laptop size={20} />,
      desc: "Deploying native Android and iOS apps with offline-mode capabilities for learning on the go.",
    },
    {
      num: "06",
      title: "Analytics Sync",
      icon: <BarChart3 size={20} />,
      desc: "Integrating xAPI or LRS to track complex learning behaviors beyond just course completions.",
    },
  ];

  const techStack = [
    {
      label: "Streaming & Frontend",
      icon: <Video className="text-[#2cc5d5]" size={24} />,
      tools: ["WebRTC", "Next.js", "HLS Streaming", "React Native", "Socket.io"]
    },
    {
      label: "Backend & AI",
      icon: <Brain className="text-[#2cc5d5]" size={24} />,
      tools: ["Python (Django)", "Node.js", "OpenAI API", "PostgreSQL", "Redis"]
    },
    {
      label: "Infrastructure",
      icon: <Globe className="text-[#2cc5d5]" size={24} />,
      tools: ["AWS MediaConvert", "CloudFront CDN", "Mux Video", "Docker", "S3"]
    }
  ];

  return (
    <div className="bg-[#f8fafc] text-[#021D59]">
      
      {/* --- HERO SECTION --- */}
      <section className="pt-18 px-6">
        <div className="custom-container mx-auto">
          <div className="relative rounded-[32px] overflow-hidden shadow-2xl bg-[#021D59] min-h-[500px] flex items-center">
            {/* Abstract Educational Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `radial-gradient(#2cc5d5 2px, transparent 2px)`, backgroundSize: '30px 30px' }}></div>
            <img
              src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=2000" 
              className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity"
              alt="EdTech Platform"
            />
            
            <div className="relative z-10 w-full flex flex-col items-center justify-center text-center text-white px-6">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                className="px-4 py-1 border border-[#2cc5d5]/30 rounded-full bg-[#2cc5d5]/10 text-[#2cc5d5] text-[10px] font-bold uppercase tracking-[0.4em] mb-8"
              >
                Scalable Learning Ecosystems
              </motion.div>
              
              <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter">
                Engineer <span className="text-[#2cc5d5]">Knowledge.</span> <br /> 
                Impact Millions.
              </h1>

              <p className="max-w-3xl text-blue-100/70 text-lg md:text-xl font-light mb-10 leading-relaxed">
                We build high-performance EdTech platforms that combine seamless 
                video delivery with AI-driven pedagogical insights.
              </p>

              <div className="flex gap-4">
                <button className="bg-[#2cc5d5] text-[#021D59] px-10 py-5 rounded-xl font-bold hover:bg-white transition-all shadow-xl shadow-[#2cc5d5]/20">
                  Build My Platform
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
              <h2 className="text-4xl font-bold mb-4 border-l-4 border-[#2cc5d5] pl-6 uppercase tracking-wider">EdTech Modules</h2>
              <p className="text-gray-500 pl-10 text-lg">Robust features designed to enhance both teaching and learning experiences.</p>
            </div>
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

      {/* --- EDTECH ARCHITECTURE (ADVANCED) --- */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="custom-container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#021D59] mb-4 uppercase tracking-tighter italic">High-Concurrency Learning Architecture</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Optimized for low-latency video and massive concurrent student sessions.</p>
          </div>

          

          <div className="relative p-12 bg-[#f8fafc] rounded-[48px] border border-gray-100 shadow-inner mt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-8 bg-white rounded-3xl shadow-sm border-b-4 border-[#2cc5d5]">
                <div className="text-[#2cc5d5] flex justify-center mb-4"><Zap size={32} /></div>
                <h4 className="font-bold mb-2">Edge Delivery</h4>
                <p className="text-xs text-gray-500">Global CDN ensures video lessons load instantly regardless of student location.</p>
              </div>
              <div className="p-8 bg-[#021D59] rounded-3xl shadow-xl text-white transform md:scale-110">
                <div className="text-[#2cc5d5] flex justify-center mb-4"><Brain size={32} /></div>
                <h4 className="font-bold mb-2">AI Proctoring</h4>
                <p className="text-xs text-blue-100/60">Real-time behavior analysis during exams to ensure high-stakes academic integrity.</p>
              </div>
              <div className="p-8 bg-white rounded-3xl shadow-sm border-b-4 border-[#2cc5d5]">
                <div className="text-[#2cc5d5] flex justify-center mb-4"><Database size={32} /></div>
                <h4 className="font-bold mb-2">xAPI Integration</h4>
                <p className="text-xs text-gray-500">Tracking micro-learning moments across different devices and platforms.</p>
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
              <h2 className="text-4xl font-bold mb-8 text-[#021D59]">Platform <br/><span className="text-[#2cc5d5]">Evolution</span></h2>
              <div className="space-y-3">
                {edtechSteps.map((step, i) => (
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
                    {edtechSteps[activeStep].icon}
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">{edtechSteps[activeStep].title}</h3>
                  <p className="text-xl md:text-2xl text-blue-100/70 leading-relaxed mb-12 font-light">{edtechSteps[activeStep].desc}</p>
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- TECH STACK --- */}
      <section className="py-24 bg-white">
        <div className="custom-container mx-auto px-6 text-center">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-[#021D59] mb-4">Educational <span className="text-[#2cc5d5]">Toolkit</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto">We leverage industry-leading technologies to ensure your platform is accessible, fast, and secure.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {techStack.map((item, idx) => (
              <motion.div key={idx} whileHover={{ y: -5 }} className="relative p-8 rounded-[24px] bg-[#f8fafc] border border-gray-100 hover:border-[#2cc5d5]/30 hover:shadow-2xl text-left transition-all duration-500 group">
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
              { label: "Scalability", value: "100k+ Concurrent Users", icon: <Users size={18}/> },
              { label: "Compliance", value: "FERPA / GDPR Ready", icon: <ShieldCheck size={18}/> },
              { label: "Availability", value: "99.9% Uptime SLA", icon: <Zap size={18}/> },
              { label: "Global Reach", value: "Multi-Language Support", icon: <Globe size={18}/> }
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
          <h2 className="text-4xl md:text-6xl font-bold mb-8 italic">Ready to transform education?</h2>
          <p className="text-xl text-blue-100/60 mb-12 max-w-2xl mx-auto">Let's build a learning experience that empowers students and instructors globally.</p>
          <button className="bg-[#2cc5d5] text-[#021D59] px-12 py-6 rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-2xl">
            Start Your EdTech Project
          </button>
        </div>
      </section>
    </div>
  );
}