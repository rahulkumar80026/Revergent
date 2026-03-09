/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Code,
  Cloud,
  Cpu,
  Database,
  Workflow,
  Shield,
  Search,
  PenTool,
  Terminal,
  Layers,
  Activity,
  Rocket,
  ChevronRight,
  Globe,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function RevergentSoftwareDevelopment() {
  const [activeStep, setActiveStep] = useState(0);
  const services = [
    {
      icon: <Code />,
      title: "Enterprise Software",
      desc: "Custom-built, high-performance platforms engineered for massive scale and zero downtime.",
    },
    {
      icon: <Cloud />,
      title: "Cloud-Native Apps",
      desc: "Modern microservices architecture deployed on AWS/Azure with automated CI/CD pipelines.",
    },
    {
      icon: <Cpu />,
      title: "Intelligent Systems",
      desc: "Advanced AI integration and predictive analytics to turn your data into a strategic asset.",
    },
    {
      icon: <Database />,
      title: "Enterprise API",
      desc: "Secure, documented, and scalable API layers for seamless ecosystem integration.",
    },
    {
      icon: <Workflow />,
      title: "Automation Engines",
      desc: "Robotic process automation and custom workflows that eliminate operational bottlenecks.",
    },
    {
      icon: <Shield />,
      title: "Security First",
      desc: "Encryption at rest, SOC2 compliance standards, and hardened infrastructure architecture.",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Discovery",
      icon: <Search size={20} />,
      desc: "Technical audit, stakeholder interviews, and deep market analysis to define the roadmap.",
    },
    {
      num: "02",
      title: "Architecture",
      icon: <Layers size={20} />,
      desc: "Defining the tech stack, data models, and high-level system design for future scalability.",
    },
    {
      num: "03",
      title: "UI/UX Design",
      icon: <PenTool size={20} />,
      desc: "Prototyping intuitive user flows that prioritize performance and accessibility.",
    },
    {
      num: "04",
      title: "Agile Build",
      icon: <Terminal size={20} />,
      desc: "Iterative development sprints with continuous testing and collaborative feedback loops.",
    },
    {
      num: "05",
      title: "Quality Assurance",
      icon: <Activity size={20} />,
      desc: "End-to-end testing, security penetration audits, and load balancing stress tests.",
    },
    {
      num: "06",
      title: "Ship & Scale",
      icon: <Rocket size={20} />,
      desc: "Production rollout with 24/7 monitoring, cloud optimization, and ongoing evolution.",
    },
  ];

  return (
    <div className="bg-[#f8fafc] text-[#021D59]">
      {/* --- ENTERPRISE HERO --- */}

      {/* <section className="pt-20 px-6">
        <div className="custom-container mx-auto">
          <div className="relative overflow-hidden rounded-[28px] shadow-xl">
            <img
              src="/assets/img/resources-desctop.png"
              className="w-full h-[500px] object-cover"
            />

            <div className="absolute inset-0 bg-[#021D59]/80 flex flex-col justify-center items-center text-center px-6">
              <h1 className="text-5xl md:text-6xl font-semibold text-white mb-6">
                Custom Software Development
              </h1>

              <p className="text-gray-200 max-w-3xl text-lg leading-relaxed">
                Revergent Technologies builds scalable, secure and
                high-performance software solutions designed to accelerate
                digital transformation and enable businesses to innovate faster.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <section className="pt-18 px-6">
        <div className="custom-container mx-auto">
          <div className="relative rounded-[28px] overflow-hidden shadow-xl bg-[#021D59]">
            <img
              src="/assets/img/resources-desctop.png"
              className="w-full h-[430px] object-cover opacity-80"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
              <h1 className="text-5xl font-semibold mb-4">
                Custom Software Development
              </h1>

              <p className="max-w-2xl text-gray-200">
                Revergent Technologies delivers scalable, secure and
                future-ready custom software solutions designed to accelerate
                digital transformation and business growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CAPABILITIES (GRID LOOK) --- */}
      <section className="py-24 px-6">
        <div className="custom-container mx-auto">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-4 border-l-4 border-[#2cc5d5] pl-6 uppercase tracking-wider">
              Our Capabilities
            </h2>
            <p className="text-gray-500 max-w-xl pl-10">
              High-complexity engineering for businesses that require
              reliability at scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border border-gray-200">
            {services.map((s, i) => (
              <div
                key={i}
                className="p-10 bg-white border border-gray-100 hover:bg-[#021D59] group transition-all duration-300"
              >
                <div className="text-[#2cc5d5] mb-6 group-hover:scale-110 transition-transform duration-300">
                  {React.cloneElement(s.icon, { size: 40, strokeWidth: 1.5 })}
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-white transition-colors">
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

      {/* --- DEVELOPMENT PROCESS (REVERGENT STYLE) --- */}
      <section className="py-24 bg-[#f1f5f9] relative">
        <div className="custom-container mx-auto px-6 lg:px-0">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            {/* Left Side: Sticky Progress Navigation */}
            <div className="w-full md:w-1/3 sticky top-32">
              <h2 className="text-4xl font-bold mb-8 text-[#021D59]">
                The Revergent <br />
                <span className="text-[#2cc5d5]">Workflow</span>
              </h2>
              <div className="space-y-2">
                {steps.map((step, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className={`w-full flex items-center gap-4 p-4 rounded-lg transition-all ${activeStep === i ? "bg-white shadow-md border-l-4 border-[#2cc5d5]" : "opacity-50 hover:opacity-100"}`}
                  >
                    <span
                      className={`text-sm font-mono ${activeStep === i ? "text-[#2cc5d5]" : "text-gray-400"}`}
                    >
                      {step.num}
                    </span>
                    <span className="font-bold uppercase tracking-tight text-sm">
                      {step.title}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side: Step Details Detail */}
            <div className="w-full md:w-2/3">
              <div className="bg-[#021D59] rounded-2xl p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
                {/* Decorative Element */}
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  {steps[activeStep].icon &&
                    React.cloneElement(steps[activeStep].icon, { size: 120 })}
                </div>

                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="w-12 h-12 bg-[#2cc5d5] rounded-lg flex items-center justify-center mb-8">
                    {steps[activeStep].icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-6">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-xl text-blue-100/70 leading-relaxed mb-10">
                    {steps[activeStep].desc}
                  </p>

                  <div className="grid grid-cols-2 gap-6 pt-10 border-t border-white/10">
                    <div>
                      <p className="text-[#2cc5d5] text-xs font-bold uppercase tracking-widest mb-2">
                        Primary Output
                      </p>
                      <p className="text-sm font-medium">
                        Technical Specification Docs
                      </p>
                    </div>
                    <div>
                      <p className="text-[#2cc5d5] text-xs font-bold uppercase tracking-widest mb-2">
                        Stakeholders
                      </p>
                      <p className="text-sm font-medium">
                        PMs, Architects, Client Leads
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="mt-8 flex justify-between items-center text-gray-400 text-sm font-mono">
                <span>PHASE {activeStep + 1} / 06</span>
                <div className="flex gap-2">
                  <div
                    className={`w-12 h-1 rounded-full ${activeStep >= 0 ? "bg-[#2cc5d5]" : "bg-gray-200"}`}
                  ></div>
                  <div
                    className={`w-12 h-1 rounded-full ${activeStep >= 3 ? "bg-[#2cc5d5]" : "bg-gray-200"}`}
                  ></div>
                  <div
                    className={`w-12 h-1 rounded-full ${activeStep === 5 ? "bg-[#2cc5d5]" : "bg-gray-200"}`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TECHNOLOGY TRUST (MONOCHROME) --- */}
      <section className="py-20 bg-white">
        <div className="custom-container mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all">
            <span className="font-bold text-2xl tracking-tighter italic">
              .NET CORE
            </span>
            <span className="font-bold text-2xl tracking-tighter italic">
              REACT
            </span>
            <span className="font-bold text-2xl tracking-tighter italic">
              AZURE
            </span>
            <span className="font-bold text-2xl tracking-tighter italic">
              NODE.JS
            </span>
            <span className="font-bold text-2xl tracking-tighter italic">
              KUBERNETES
            </span>
            <span className="font-bold text-2xl tracking-tighter italic">
              AWS
            </span>
          </div>
        </div>
      </section>

      {/* --- CTA (SHARP & DARK) --- */}
      <section className="py-24 px-6 bg-[#021D59] text-white">
        <div className="max-w-5xl mx-auto border-t border-b border-white/10 py-16 flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Start your transformation.
            </h2>
            <p className="text-blue-100/60 text-lg">
              Discuss your project with our senior software architects today.
            </p>
          </div>
          <Link
            to="/request-a-demo"
            className="bg-[#2cc5d5] text-[#021D59] px-10 py-5 rounded-lg font-bold hover:scale-105 transition shadow-2xl"
          >
            Book Discovery Call
          </Link>
        </div>
      </section>
    </div>
  );
}
