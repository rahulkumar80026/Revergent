import React from "react";
import { Link } from "react-router-dom";
import {
  Code,
  Smartphone,
  Brain,
  Layers,
  Cloud,
  BarChart3,
  ArrowRight,
} from "lucide-react";

export default function ServicesOverview() {
  const servicesList = [
    {
      title: "Software Development",
      description: "Custom enterprise-grade software engineered for reliability, security, and massive scaling.",
      href: "/services/custom-software-development",
      icon: <Code size={32} />,
      points: [
        "Custom Web Applications",
        "SaaS Product Development",
        "Enterprise ERP / CRM Integrations",
        "Legacy Code Modernization",
      ],
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile apps featuring fluid UI/UX and robust offline-first APIs.",
      href: "/services/mobile-app-development",
      icon: <Smartphone size={32} />,
      points: [
        "iOS App Development",
        "Android App Development",
        "React Native & Flutter Apps",
        "App Store Submission & Optimization",
      ],
    },
    {
      title: "AI & Intelligent Automation",
      description: "Harness modern machine learning and intelligent agent workflows to streamline your business operations.",
      href: "/services/ai-automation",
      icon: <Brain size={32} />,
      points: [
        "Generative AI & LLM Integration",
        "Predictive Analytics & ML Models",
        "Conversational AI Chatbots",
        "Automated Workflows (RPA)",
      ],
    },
    {
      title: "Enterprise Business Systems",
      description: "End-to-end implementation and customization of digital backbones for growing organizations.",
      href: "/services/enterprise-systems",
      icon: <Layers size={32} />,
      points: [
        "Database Architecture & Migration",
        "ERP/CRM Custom Implementations",
        "B2B Operations Software",
        "System Interoperability & Syncing",
      ],
    },
    {
      title: "Cloud Engineering & DevOps",
      description: "Hardened, zero-downtime cloud infrastructure utilizing infrastructure-as-code and automated CI/CD.",
      href: "/services/cloud-devops",
      icon: <Cloud size={32} />,
      points: [
        "Kubernetes & Docker Containerization",
        "AWS, Azure, and GCP Migration",
        "Automated Deployment Pipelines",
        "Monitoring & Cloud Audits",
      ],
    },
    {
      title: "Growth & Digital Marketing",
      description: "Boost your online visibility, capture high-quality leads, and scale your digital brand footprint.",
      href: "/services/digital-marketing",
      icon: <BarChart3 size={32} />,
      points: [
        "Search Engine Optimization (SEO)",
        "Search Engine Marketing (SEM)",
        "PPC & Paid Acquisition",
        "Content & Brand Strategy",
      ],
    },
  ];

  return (
    <div className="bg-[#f8fafc] text-[#021D59] font-agrandir">
      {/* HERO SECTION */}
      <section className="pt-6 pb-10">
        <div className="custom-container mx-auto">
          <div className="relative rounded-[28px] overflow-hidden shadow-xl bg-[#021D59]">
            <img
              src="/assets/img/resources-desctop.png"
              className="w-full h-[320px] md:h-[380px] object-cover opacity-80"
              alt="Services Overview"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 bg-gradient-to-t from-[#021D59]/90 to-transparent">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Our Services
              </h1>
              <p className="max-w-2xl text-gray-200 text-sm md:text-base font-light">
                Revergent Technologies delivers scalable, secure, and modern engineering services designed to accelerate digital transformation and optimize business workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-12 px-6">
        <div className="custom-container mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 border-l-4 border-[#2cc5d5] pl-6 uppercase tracking-wider">
              Engineering Capabilities
            </h2>
            <p className="text-gray-500 max-w-xl pl-10">
              High-complexity engineering and digital strategy tailored for businesses that require reliability, performance, and scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-md border border-gray-100 p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="text-[#2cc5d5] mb-6 flex items-center justify-between">
                    <span className="p-3 bg-[#15BDFF1A] rounded-xl text-[#15BDFF]">
                      {service.icon}
                    </span>
                    <span className="text-gray-300 text-xs font-mono">0{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed font-light">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {service.points.map((pt, i) => (
                      <li key={i} className="flex items-center text-xs text-[#021D59]/80 font-light">
                        <span className="w-1.5 h-1.5 bg-[#2cc5d5] rounded-full mr-2" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={service.href}
                  className="inline-flex items-center gap-2 text-[#15BDFF] font-semibold text-sm hover:text-[#021D59] transition-colors group"
                >
                  Learn More
                  <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK LOGOS / BRANDING */}
      <section className="py-16 bg-white border-t border-b border-gray-100">
        <div className="custom-container mx-auto px-6 text-center">
          <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-10">
            Technology Stack We Build With
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-300">
            <span className="font-bold text-lg md:text-xl tracking-tighter italic">.NET CORE</span>
            <span className="font-bold text-lg md:text-xl tracking-tighter italic">REACT</span>
            <span className="font-bold text-lg md:text-xl tracking-tighter italic">AZURE</span>
            <span className="font-bold text-lg md:text-xl tracking-tighter italic">NODE.JS</span>
            <span className="font-bold text-lg md:text-xl tracking-tighter italic">KUBERNETES</span>
            <span className="font-bold text-lg md:text-xl tracking-tighter italic">AWS</span>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      {/* <section className="py-12 px-6 bg-[#021D59] text-white">
        <div className="max-w-5xl mx-auto py-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Ready to accelerate your growth?</h2>
            <p className="text-blue-100/60 text-sm font-light">
              Connect with our senior software engineers and technology consultants today.
            </p>
          </div>
          <Link
            to="/request-a-demo"
            className="bg-[#15BDFF] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#021D59] hover:border hover:border-white transition-all text-sm shadow-md"
          >
            Schedule a Strategy Session
          </Link>
        </div>
      </section> */}
    </div>
  );
}
