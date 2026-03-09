import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Bot,
  Database,
  Workflow,
  Brain,
  Shield,
  Sparkles,
  BarChart,
  Zap,
  ChevronRight,
  Binary,
  Microchip,
} from "lucide-react";

export default function AIIntelligentAutomation() {
  const services = [
    {
      icon: <Brain size={32} />,
      title: "AI Powered Solutions",
      desc: "Build intelligent systems powered by machine learning and advanced neural networks.",
    },
    {
      icon: <Bot size={32} />,
      title: "Process Automation",
      desc: "Automate repetitive enterprise tasks using RPA and intelligent decision engines.",
    },
    {
      icon: <BarChart size={32} />,
      title: "Predictive Analytics",
      desc: "Leverage data insights and models to forecast trends and make smarter decisions.",
    },
    {
      icon: <Database size={32} />,
      title: "Data Intelligence",
      desc: "Transform fragmented data into strategic assets using AI-driven ingestion.",
    },
    {
      icon: <Workflow size={32} />,
      title: "Intelligent Workflows",
      desc: "Optimize complex operations with self-learning automated workflow logic.",
    },
    {
      icon: <Shield size={32} />,
      title: "AI Trust & Security",
      desc: "Secure, compliant, and ethical AI deployment for regulated enterprise environments.",
    },
  ];

  const useCases = [
    { title: "Customer Support Automation", icon: <Bot size={18} /> },
    { title: "AI Chatbots & Virtual Assistants", icon: <Sparkles size={18} /> },
    { title: "Smart Data Processing", icon: <Binary size={18} /> },
    { title: "Predictive Business Insights", icon: <Zap size={18} /> },
    { title: "Automated Document Processing", icon: <Database size={18} /> },
    { title: "AI Powered Recommendations", icon: <Microchip size={18} /> },
  ];

  return (
    <div className="bg-[#f8fafc] text-[#021D59] selection:bg-[#2cc5d5] selection:text-white">
      {/* --- PREMIUM HERO --- */}
      <section className="pt-18 px-6">
        <div className="custom-container mx-auto">
          <div className="relative rounded-[32px] overflow-hidden shadow-2xl bg-[#021D59] min-h-[450px] flex items-center">
            {/* Animated Grid Background */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `radial-gradient(#2cc5d5 1px, transparent 1px)`,
                backgroundSize: "30px 30px",
              }}
            ></div>

            <img
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2000"
              className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50"
              alt="AI Automation"
            />

            <div className="relative z-10 w-full flex flex-col items-center justify-center text-center text-white px-6">
              {/* <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-6 px-4 py-1 border border-[#2cc5d5]/30 rounded-full bg-[#2cc5d5]/10 text-[#2cc5d5] text-[10px] font-bold uppercase tracking-[0.4em]"
              >
                Intelligence at Scale
              </motion.div> */}

              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
                AI & <span className="text-[#2cc5d5]">Intelligent</span> <br />{" "}
                Automation
              </h1>

              <p className="max-w-2xl text-blue-100/70 text-lg md:text-xl font-light leading-relaxed">
                Revergent Technologies empowers enterprises with Cognitive
                Computing and RPA to redefine efficiency and unlock hidden
                growth opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CAPABILITIES (MODERN CARDS) --- */}
      <section className="py-24 px-6">
        <div className="custom-container mx-auto">
          <div className="mb-20 text-center md:text-left md:flex items-end justify-between">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold mb-4 border-l-4 border-[#2cc5d5] pl-6 uppercase tracking-wider text-[#021D59]">
                Cognitive Capabilities
              </h2>
              <p className="text-gray-500 pl-7 text-lg">
                We bridge the gap between human expertise and machine speed.
              </p>
            </div>
            <div className="hidden md:block h-[1px] flex-1 bg-gray-200 ml-10 mb-4 opacity-50"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border border-gray-100 overflow-hidden">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-12 border border-gray-50 hover:bg-[#021D59] group transition-all duration-500 relative"
              >
                <div className="text-[#2cc5d5] mb-8 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-[#021D59] mb-4 group-hover:text-white transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-500 group-hover:text-blue-100/60 leading-relaxed">
                  {service.desc}
                </p>

                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-10 text-[#2cc5d5]">
                  <Sparkles size={40} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- USE CASES (INTERACTIVE TILES) --- */}
      <section className="bg-white py-24 px-6 relative overflow-hidden">
        {/* Decorative blur */}
        <div className="absolute -left-20 top-0 w-64 h-64 bg-[#2cc5d5]/5 rounded-full blur-[100px]"></div>

        <div className="custom-container mx-auto">
          <h2 className="text-4xl font-bold text-[#021D59] mb-16 text-center">
            Strategic Use Cases
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {useCases.map((item, index) => (
              <motion.div
                whileHover={{ scale: 1.02 }}
                key={index}
                className="p-8 border border-gray-100 rounded-2xl flex items-center gap-5 hover:border-[#2cc5d5] hover:shadow-lg transition-all cursor-default bg-[#fcfdfe]"
              >
                <div className="w-12 h-12 rounded-full bg-[#e8f9fb] text-[#2cc5d5] flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <p className="text-[#021D59] font-bold text-lg leading-tight">
                  {item.title}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TECH STACK (ARCHITECTURAL VIEW) --- */}
      <section className="py-24 px-6 bg-[#f1f5f9]">
        <div className="custom-container mx-auto text-center">
          <h2 className="text-sm font-bold text-[#2cc5d5] uppercase tracking-[0.4em] mb-16">
            The AI Stack
          </h2>

          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {[
              "Python",
              "TensorFlow",
              "PyTorch",
              "OpenAI (GPT-4)",
              "LangChain",
              "Azure AI",
              "AWS SageMaker",
              "Power Automate",
              "HuggingFace",
              "Nvidia CUDA",
              "Pandas",
            ].map((tech, index) => (
              <span
                key={index}
                className="bg-white border border-gray-200 text-[#021D59] px-8 py-4 rounded-xl font-bold text-sm shadow-sm hover:shadow-md hover:border-[#2cc5d5] transition-all cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-20"></div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto bg-[#021D59] rounded-[40px] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#2cc5d5]/10 rounded-full blur-3xl -mr-32 -mt-32"></div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8 relative z-10 italic">
            Ready to Automate?
          </h2>
          <p className="text-xl text-blue-100/60 mb-12 max-w-2xl mx-auto relative z-10">
            Let's identify the bottlenecks in your business and deploy
            intelligent solutions that fix them.
          </p>
          <button className="bg-[#2cc5d5] text-[#021D59] px-12 py-5 rounded-[24px] font-bold text-xl hover:bg-white transition-all shadow-xl flex items-center gap-3 mx-auto">
            Book AI Consultation <ChevronRight size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
