import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Server,
  Smartphone,
  Tablet,
  Cpu,
  Layers,
  ShieldCheck,
  Zap,
  Search,
  Layout,
  Code2,
  TestTube2,
  Rocket,
  RefreshCw,
  ChevronRight,
  Apple,
  PlayCircle,
  Globe,
  DatabaseIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function MobileAppDevelopment() {
  const [activeStep, setActiveStep] = useState(0);

  const capabilities = [
    {
      icon: <Apple />,
      title: "iOS Development",
      desc: "High-performance Swift and Objective-C apps optimized for the entire Apple ecosystem (iPhone, iPad, Watch).",
    },
    {
      icon: <PlayCircle />,
      title: "Android Development",
      desc: "Robust Kotlin and Java applications built for diverse hardware configurations and screen sizes.",
    },
    {
      icon: <Layers />,
      title: "Cross-Platform",
      desc: "Efficient React Native and Flutter solutions that deliver native-like performance with a single codebase.",
    },
    {
      icon: <Layout />,
      title: "Mobile UI/UX",
      desc: "User-centric interface design focused on micro-interactions, accessibility, and high conversion rates.",
    },
    {
      icon: <Cpu />,
      title: "IoT & Wearables",
      desc: "Connecting mobile devices with smart hardware and wearables for a seamless connected experience.",
    },
    {
      icon: <ShieldCheck />,
      title: "Secure M-Commerce",
      desc: "PCI-compliant payment integrations and biometrically secured mobile shopping experiences.",
    },
  ];

  const stack = [
    {
      category: "Frontend Frameworks",
      icon: <Smartphone className="text-[#2cc5d5]" size={24} />,
      tools: [
        "React Native",
        "Flutter",
        "Swift (iOS)",
        "Kotlin (Android)",
        "Ionic",
      ],
    },
    {
      category: "Backend & API",
      icon: <Server className="text-[#2cc5d5]" size={24} />,
      tools: [
        "Node.js",
        "Python (Django)",
        ".NET Core",
        "GraphQL",
        "REST APIs",
      ],
    },
    {
      category: "Cloud & Database",
      icon: <DatabaseIcon className="text-[#2cc5d5]" size={24} />,
      tools: ["Firebase", "PostgreSQL", "MongoDB", "AWS Amplify", "Azure"],
    },
  ];

  const mobileSteps = [
    {
      num: "01",
      title: "Product Strategy",
      icon: <Search size={20} />,
      desc: "Defining the MVP features, target audience personas, and choosing between Native vs. Cross-platform tech stack.",
    },
    {
      num: "02",
      title: "Wireframing",
      icon: <Layout size={20} />,
      desc: "Creating low-fidelity blueprints to map out user journeys and core app interactions before visual design.",
    },
    {
      num: "03",
      title: "App Development",
      icon: <Code2 size={20} />,
      desc: "Building the front-end and integrating robust APIs using Agile methodology with 2-week sprint cycles.",
    },
    {
      num: "04",
      title: "Multi-Device QA",
      icon: <TestTube2 size={20} />,
      desc: "Rigorous testing across 50+ real iOS and Android devices to ensure zero crashes and fluid performance.",
    },
    {
      num: "05",
      title: "Store Submission",
      icon: <Rocket size={20} />,
      desc: "Handling the complex App Store (Apple) and Play Store (Google) submission process and compliance checks.",
    },
    {
      num: "06",
      title: "Growth & Updates",
      icon: <RefreshCw size={20} />,
      desc: "Analyzing user behavior post-launch and rolling out feature updates to keep users engaged and retained.",
    },
  ];

  return (
    <div className="bg-[#f8fafc] text-[#021D59]">
      {/* --- HERO SECTION --- */}
      <section className="pt-18 px-6">
        <div className="custom-container mx-auto">
          <div className="relative rounded-[28px] overflow-hidden shadow-2xl bg-[#021D59]">
            {/* Background Image with Overlay */}
            <img
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=2070"
              className="w-full h-[500px] object-cover opacity-40"
              alt="Mobile Development"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#021D59] via-[#021D59]/60 to-transparent"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="px-4 py-1 border border-[#2cc5d5]/40 rounded-full bg-[#2cc5d5]/10 text-[#2cc5d5] text-[10px] font-bold uppercase tracking-[0.3em] mb-6"
              >
                Next-Gen Mobile Solutions
              </motion.div> */}

              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
              >
                Mobile First.{" "}
                <span className="text-[#2cc5d5]">User Always.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="max-w-2xl text-blue-100/80 text-lg md:text-xl font-light"
              >
                We engineer world-class mobile experiences that live in your
                users' pockets. From Native iOS to high-performance Flutter
                apps.
              </motion.p>

              {/* <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-10 flex gap-4"
              >
                <button className="bg-[#2cc5d5] text-[#021D59] px-8 py-4 rounded-xl font-bold hover:bg-white transition-all shadow-lg">
                  Get Started
                </button>
                <button className="bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all">
                  View Portfolio
                </button>
              </motion.div> */}
            </div>
          </div>
        </div>
      </section>

      {/* --- MOBILE EXPERTISE GRID --- */}
      <section className="py-24 px-6">
        <div className="custom-container mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl font-bold mb-6 border-l-4 border-[#2cc5d5] pl-6 uppercase tracking-wider">
              Mobile Expertise
            </h2>
            <p className="text-gray-500 max-w-2xl pl-10 text-lg">
              We leverage cutting-edge frameworks to deliver apps that are
              secure, scalable, and obsessively designed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border border-gray-200 shadow-sm">
            {capabilities.map((s, i) => (
              <div
                key={i}
                className="p-12 bg-white border border-gray-50 hover:bg-[#021D59] group transition-all duration-500 relative overflow-hidden"
              >
                <div className="text-[#2cc5d5] mb-8 group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300">
                  {React.cloneElement(s.icon, { size: 44, strokeWidth: 1.2 })}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-500 group-hover:text-blue-100/70 transition-colors leading-relaxed">
                  {s.desc}
                </p>
                {/* Subtle numbering effect on hover */}
                <span className="absolute bottom-6 right-8 text-8xl font-black text-gray-50 opacity-0 group-hover:opacity-5 transition-opacity">
                  0{i + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MOBILE WORKFLOW (STICKY SIDEBAR) --- */}
      <section className="py-24 bg-[#f1f5f9] relative">
        <div className="custom-container mx-auto px-6 lg:px-0">
          <div className="flex flex-col md:flex-row gap-20 items-start">
            {/* Left: Progress Sidebar */}
            <div className="w-full md:w-1/3 sticky top-32">
              <div className="mb-10">
                <span className="text-[#2cc5d5] font-bold tracking-[0.2em] text-xs uppercase">
                  Process
                </span>
                <h2 className="text-4xl font-bold mt-2 text-[#021D59]">
                  How We Build <br />
                  For <span className="text-[#2cc5d5]">Mobile</span>
                </h2>
              </div>

              <div className="space-y-3">
                {mobileSteps.map((step, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveStep(i)}
                    className={`w-full flex items-center justify-between p-5 rounded-xl transition-all ${
                      activeStep === i
                        ? "bg-[#021D59] text-white shadow-xl translate-x-4"
                        : "bg-white/50 text-gray-500 hover:bg-white"
                    }`}
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
                      className={`${activeStep === i ? "opacity-100" : "opacity-0"}`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Step Details Card */}
            <div className="w-full md:w-2/3">
              <div className="bg-[#021D59] rounded-[32px] p-10 md:p-20 text-white relative overflow-hidden shadow-2xl min-h-[500px] flex flex-col justify-center">
                {/* Visual Background Decoration */}
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#2cc5d5]/10 rounded-full blur-[80px]"></div>

                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-[#2cc5d5] mb-10">
                    {mobileSteps[activeStep].icon}
                    <span className="font-mono text-sm tracking-widest uppercase">
                      Phase {mobileSteps[activeStep].num}
                    </span>
                  </div>

                  <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                    {mobileSteps[activeStep].title}
                  </h3>

                  <p className="text-xl md:text-2xl text-blue-100/70 leading-relaxed mb-12 font-light">
                    {mobileSteps[activeStep].desc}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-10 border-t border-white/10">
                    <div>
                      <h4 className="text-[#2cc5d5] text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
                        Key Deliverables
                      </h4>
                      <ul className="text-sm space-y-2 text-white/80">
                        <li className="flex items-center gap-2 font-medium">
                          <div className="w-1 h-1 bg-[#2cc5d5] rounded-full"></div>
                          {activeStep === 4
                            ? "App Store Meta-data"
                            : "Technical Prototypes"}
                        </li>
                        <li className="flex items-center gap-2 font-medium">
                          <div className="w-1 h-1 bg-[#2cc5d5] rounded-full"></div>
                          User Flow Documentation
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[#2cc5d5] text-[10px] font-bold uppercase tracking-[0.2em] mb-3">
                        Target Platform
                      </h4>
                      <div className="flex gap-4 opacity-70">
                        <Apple size={20} /> <PlayCircle size={20} />{" "}
                        <Globe size={20} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TECH STACK PILLS --- */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2cc5d5]/5 rounded-full blur-3xl -mr-48 -mt-48"></div>

        <div className="custom-container mx-auto px-6">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-[#021D59] mb-4"
            >
              The <span className="text-[#2cc5d5]">Revergent</span> Tech
              Ecosystem
            </motion.h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              We use industry-leading technologies to ensure your mobile
              application is secure, lightning-fast, and built for millions of
              users.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {stack.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative p-8 rounded-[24px] bg-[#f8fafc] border border-gray-100 hover:border-[#2cc5d5]/30 hover:shadow-2xl hover:shadow-[#2cc5d5]/10 transition-all duration-500 group"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:bg-[#021D59] transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#021D59] uppercase tracking-wider">
                    {item.category}
                  </h3>
                </div>

                {/* Tools List */}
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

                {/* Subtle Decorative Line */}
                <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#2cc5d5]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </motion.div>
            ))}
          </div>

          {/* Feature Highlights beneath the stack */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-100 pt-12">
            {[
              {
                label: "Performance",
                value: "60 FPS Native",
                icon: <Zap size={18} />,
              },
              {
                label: "Security",
                value: "AES-256 Auth",
                icon: <ShieldCheck size={18} />,
              },
              {
                label: "Deployment",
                value: "CI/CD Ready",
                icon: <Globe size={18} />,
              },
              {
                label: "Support",
                value: "24/7 SLA",
                icon: <RefreshCw size={18} />,
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center md:text-left md:items-start"
              >
                <div className="text-[#2cc5d5] mb-2">{feature.icon}</div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  {feature.label}
                </span>
                <span className="text-[#021D59] font-bold">
                  {feature.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-24 px-6 bg-[#021D59] text-white">
        <div className="max-w-5xl mx-auto border-t border-b border-white/10 py-16 flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Have an app idea?
            </h2>
            <p className="text-blue-100/60 text-lg">
              Let's build a mobile solution that ranks high, performs better,
              and scales infinitely.
            </p>
          </div>
          <Link
           to="/request-a-demo"
           className="bg-[#2cc5d5] text-[#021D59] px-10 py-5 rounded-lg font-bold hover:scale-105 transition shadow-2xl">
            Book a Strategy Session
          </Link>
        </div>
      </section>
    </div>
  );
}
