import React from "react";
import { useNavigate } from "react-router-dom";

const AiAutomationSuite = () => {
  const navigate = useNavigate();

  return (
    <main className="bg-white text-slate-900">

      {/* ================= HERO ================= */}
      <section className="bg-[#021D59] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <span className="inline-block mb-4 text-xs tracking-widest uppercase text-[#15BDFF] font-semibold">
              AI Automation Suite
            </span>

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Automate Operations. <br /> Accelerate Intelligence.
            </h1>

            <p className="mt-6 text-lg text-blue-100 max-w-xl">
              A unified AI automation platform that streamlines workflows,
              eliminates manual effort, and enables data-driven decisions
              across your organization.
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">
              <button
                onClick={() => navigate("/request-a-demo")}
                className="bg-[#15BDFF] text-[#021D59] px-6 py-3 rounded-lg font-medium hover:bg-white transition"
              >
                Request Demo
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#021D59] transition"
              >
                Talk to AI Experts
              </button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="hidden md:block">
            <div className="h-[360px] bg-white/10 rounded-xl border border-white/10 flex items-center justify-center text-blue-100 italic">
              [AI Automation Dashboard – Workflows, Insights & Models]
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT IS AI AUTOMATION ================= */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#021D59]">
            What is the AI Automation Suite?
          </h2>
          <p className="mt-6 text-gray-600 text-lg">
            The AI Automation Suite combines machine learning, rule-based
            automation, and system integrations to automate business processes,
            analyze data, and take intelligent actions in real time.
          </p>
        </div>
      </section>

      {/* ================= CORE CAPABILITIES ================= */}
      <section className="bg-[#F7F9FC] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#021D59]">
            Core Capabilities
          </h2>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Workflow Automation",
                desc: "Automate repetitive tasks across CRM, ERP, HR, Finance, and Operations."
              },
              {
                title: "AI Decision Engines",
                desc: "ML-powered models that analyze data and trigger actions automatically."
              },
              {
                title: "Predictive Analytics",
                desc: "Forecast demand, churn, sales, and operational risks using AI models."
              },
              {
                title: "Conversational AI",
                desc: "AI chatbots and voice assistants for sales, support, and internal teams."
              },
              {
                title: "Document Intelligence",
                desc: "Extract, classify, and process data from invoices, forms, and contracts."
              },
              {
                title: "System Integrations",
                desc: "Seamless integration with CRM, POS, ERP, payment systems, and APIs."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-8 border border-[#E6E9F0]"
              >
                <h3 className="text-lg font-semibold text-[#021D59]">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= USE CASES ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#021D59]">
            Industry Use Cases
          </h2>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Sales & Lead Automation",
              "Customer Support Automation",
              "Finance & Invoice Processing",
              "HR & Recruitment Automation",
              "Supply Chain Optimization",
              "Marketing Personalization",
              "Fraud Detection",
              "Predictive Maintenance"
            ].map((useCase, i) => (
              <div
                key={i}
                className="border border-[#E6E9F0] rounded-lg p-6 text-center"
              >
                <p className="font-medium text-[#021D59]">
                  {useCase}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ARCHITECTURE ================= */}
      <section className="bg-[#021D59] text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">
            AI-First, Enterprise-Ready Architecture
          </h2>

          <p className="mt-6 text-blue-100 text-lg max-w-3xl mx-auto">
            Designed with modular microservices, scalable ML pipelines, and
            secure cloud infrastructure to support enterprise workloads.
          </p>

          <div className="mt-10 bg-white/10 rounded-xl p-10 text-blue-100 italic">
            [Architecture Diagram – Data Sources → AI Models → Automation Engine → Integrations]
          </div>
        </div>
      </section>

      {/* ================= SECURITY & COMPLIANCE ================= */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#021D59]">
            Security & Compliance
          </h2>

          <ul className="mt-10 max-w-3xl mx-auto space-y-4 text-gray-700 text-left">
            <li>• Role-based access control and audit logs</li>
            <li>• Encrypted data pipelines and secure APIs</li>
            <li>• GDPR-ready and enterprise compliance support</li>
            <li>• Model monitoring and explainability</li>
          </ul>
        </div>
      </section>

      {/* ================= PRICING ================= */}
      <section className="bg-[#F7F9FC] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#021D59]">
            Flexible Pricing & Deployment
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Pricing varies based on automation complexity, AI models,
            integrations, and deployment (cloud or on-premise).
          </p>

          <div className="mt-10 flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => navigate("/contact")}
              className="bg-[#021D59] text-white px-8 py-4 rounded-lg font-medium hover:bg-black transition"
            >
              Get Custom Quote
            </button>
            <button
              onClick={() => navigate("/request-a-demo")}
              className="border border-[#021D59] px-8 py-4 rounded-lg font-medium hover:bg-[#021D59] hover:text-white transition"
            >
              Request Demo
            </button>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-[#15BDFF] py-20 text-center">
        <h2 className="text-3xl font-bold text-[#021D59]">
          Transform Your Business with AI Automation
        </h2>
        <p className="mt-4 text-[#021D59]/80">
          Automate smarter, scale faster, and make data-driven decisions with
          our AI Automation Suite.
        </p>

        <button
          onClick={() => navigate("/request-a-demo")}
          className="mt-8 bg-[#021D59] text-white px-8 py-4 rounded-lg font-medium hover:bg-black transition"
        >
          Request a Demo
        </button>
      </section>

    </main>
  );
};

export default AiAutomationSuite;
