import React from "react";
import { useNavigate } from "react-router-dom";

const Crm = () => {
  const navigate = useNavigate();

  return (
    <main className="bg-white text-slate-900">

      {/* ================= HERO ================= */}
      <section className="bg-[#021D59] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <span className="inline-block mb-4 text-xs tracking-widest uppercase text-[#15BDFF] font-semibold">
              CRM Solutions
            </span>

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              CRM Built for Growth-Driven <br /> Businesses
            </h1>

            <p className="mt-6 text-lg text-blue-100 max-w-xl">
              From high-volume real estate sales pipelines to fully customized
              CRM systems, we design, build, and scale CRMs that convert leads
              into long-term customers.
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
                Talk to Experts
              </button>
            </div>
          </div>

          {/* Product Visual Placeholder */}
          <div className="hidden md:block">
            <div className="h-[360px] bg-white/10 rounded-xl border border-white/10 flex items-center justify-center text-blue-100 italic">
              [CRM Dashboard – Leads, Pipeline & Analytics]
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT WE OFFER ================= */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#021D59]">
            CRM That Fits Your Business — Not the Other Way Around
          </h2>
          <p className="mt-6 text-gray-600 text-lg">
            We deliver industry-specific CRM solutions as well as fully
            customized CRM platforms tailored to your workflows, sales
            processes, and integrations.
          </p>
        </div>
      </section>

      {/* ================= REAL ESTATE CRM ================= */}
      <section className="bg-[#F7F9FC] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#021D59]">
            Real Estate CRM
          </h2>

          <p className="mt-4 text-center text-gray-600 max-w-3xl mx-auto">
            Designed for developers, brokers, channel partners, and real estate
            sales teams managing thousands of leads across multiple projects.
          </p>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Lead Capture & Distribution",
                desc: "Auto-capture leads from portals, ads, websites, WhatsApp, and assign them intelligently."
              },
              {
                title: "Sales Pipeline Management",
                desc: "Track site visits, follow-ups, negotiations, bookings, and closures in real time."
              },
              {
                title: "Channel Partner Management",
                desc: "Manage brokers, commissions, performance, and approvals from a single dashboard."
              },
              {
                title: "Automated Follow-ups",
                desc: "SMS, email, WhatsApp automation with reminders and AI-based lead prioritization."
              },
              {
                title: "Inventory & Unit Mapping",
                desc: "Real-time unit availability, pricing slabs, and booking status."
              },
              {
                title: "Sales Analytics & Forecasting",
                desc: "Conversion ratios, team performance, revenue forecasting, and funnel insights."
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

      {/* ================= CUSTOM CRM DEVELOPMENT ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#021D59]">
            Custom CRM Development
          </h2>

          <p className="mt-4 text-center text-gray-600 max-w-3xl mx-auto">
            When off-the-shelf CRMs don’t work, we build custom CRM systems
            aligned exactly to your business logic, integrations, and scale.
          </p>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Workflow-Driven Design",
                desc: "CRM built around your internal sales, support, or operations processes."
              },
              {
                title: "Third-Party Integrations",
                desc: "ERP, accounting, marketing tools, payment gateways, telephony, and APIs."
              },
              {
                title: "Role-Based Dashboards",
                desc: "Separate views for sales, managers, leadership, and operations teams."
              },
              {
                title: "Scalable Architecture",
                desc: "Cloud-native, API-first architecture designed for growth and performance."
              },
              {
                title: "Automation & AI",
                desc: "Lead scoring, task automation, notifications, and predictive insights."
              },
              {
                title: "Data Security & Compliance",
                desc: "Enterprise-grade security, audit logs, and access controls."
              }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#F7F9FC] rounded-xl p-8 border border-[#E6E9F0]"
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

      {/* ================= ARCHITECTURE ================= */}
      <section className="bg-[#021D59] text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">
            Enterprise-Ready Architecture
          </h2>
          <p className="mt-6 text-blue-100 text-lg max-w-3xl mx-auto">
            Our CRM platforms are built using microservices, modern frontend
            frameworks, and scalable cloud infrastructure to support high data
            volume and concurrent users.
          </p>

          <div className="mt-10 bg-white/10 rounded-xl p-10 text-blue-100 italic">
            [CRM Architecture Diagram – Leads, Automation, Integrations, Analytics]
          </div>
        </div>
      </section>

      {/* ================= PRICING ================= */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#021D59]">
            Flexible Pricing Models
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Pricing depends on features, users, integrations, and deployment
            model (SaaS or custom enterprise).
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
          Build a CRM That Actually Works for You
        </h2>
        <p className="mt-4 text-[#021D59]/80">
          Whether real estate or custom enterprise workflows — we build CRM
          systems that scale with your business.
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

export default Crm;
