import React from "react";
import { Link } from "react-router-dom";
import {
  MessageSquare,
  FileText,
  BookOpen,
  ArrowRight,
} from "lucide-react";

export default function ResourcesOverview() {
  const resourcesList = [
    {
      title: "Tech Blog & Insights",
      description: "Read the latest articles, tutorials, software design best-practices, and AI developments written by our lead engineers.",
      href: "/resources/blog",
      icon: <MessageSquare size={32} />,
      points: [
        "React & Frontend Performance Tips",
        "AI Agent Implementation Guides",
        "Database Scaling Case Studies",
        "Engineering Best Practices",
      ],
    },
    {
      title: "Customer Case Studies",
      description: "Explore real-world case studies demonstrating how we helped global organizations migrate legacy software, secure databases, and scale operations.",
      href: "/resources/case-studies",
      icon: <FileText size={32} />,
      points: [
        "Cloud Migration Project Summaries",
        "ERP/CRM Business Impact Reports",
        "Client Success Statistics & ROI",
        "Technical Challenge Solutions",
      ],
    },
    {
      title: "Technology Whitepapers",
      description: "Download detailed technical papers exploring high-level architecture designs, cloud security standards, and automated pipelines.",
      href: "/resources/whitepapers",
      icon: <BookOpen size={32} />,
      points: [
        "SOC2 Compliance Infrastructure Guides",
        "Decentralized Data System Layouts",
        "AI Chatbot Conversational Accuracy",
        "Enterprise Architecture Blueprints",
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
              alt="Resources Overview"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 bg-gradient-to-t from-[#021D59]/90 to-transparent">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Resources & Insights
              </h1>
              <p className="max-w-2xl text-gray-200 text-sm md:text-base font-light">
                Discover tutorials, deep architectural case studies, and engineering briefs written by technical experts at Revergent Technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RESOURCES GRID */}
      <section className="py-12 px-6">
        <div className="custom-container mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 border-l-4 border-[#2cc5d5] pl-6 uppercase tracking-wider">
              Knowledge Hub
            </h2>
            <p className="text-gray-500 max-w-xl pl-10">
              Browse our guides, reports, and insights to learn how to simplify complexity and accelerate innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resourcesList.map((res, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="text-[#2cc5d5] mb-6 flex items-center justify-between">
                    <span className="p-3 bg-[#15BDFF1A] rounded-xl text-[#15BDFF]">
                      {res.icon}
                    </span>
                    <span className="text-gray-300 text-xs font-mono">0{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{res.title}</h3>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed font-light">
                    {res.description}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {res.points.map((pt, i) => (
                      <li key={i} className="flex items-center text-xs text-[#021D59]/80 font-light">
                        <span className="w-1.5 h-1.5 bg-[#2cc5d5] rounded-full mr-2" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={res.href}
                  className="inline-flex items-center gap-2 text-[#15BDFF] font-semibold text-sm hover:text-[#021D59] transition-colors group"
                >
                  View Resources
                  <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER-LIKE CTA */}
      <section className="py-12 px-6 bg-[#021D59] text-white">
        <div className="max-w-5xl mx-auto py-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Have a question for our team?</h2>
            <p className="text-blue-100/60 text-sm font-light">
              Reach out to learn more about our engineering procedures or collaborative research efforts.
            </p>
          </div>
          <Link
            to="/company/contact"
            className="bg-[#15BDFF] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#021D59] hover:border hover:border-white transition-all text-sm shadow-md"
          >
            Connect with Us
          </Link>
        </div>
      </section>
    </div>
  );
}
