import React from "react";
import { useNavigate } from "react-router-dom";

const Pos = () => {
  const navigate = useNavigate();

  return (
    <main className="bg-white">
      {/* ================= HERO ================= */}
      <section className="bg-[#021D59] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Enterprise-Grade POS System for Modern Businesses
            </h1>
            <p className="mt-6 text-lg text-blue-100">
              A cloud-native Point of Sale platform designed for scalability,
              speed, and seamless omnichannel operations.
            </p>

            <div className="mt-6 flex flex-wrap gap-6 text-sm text-blue-100/80">
              <span>✔ Multi-location Ready</span>
              <span>✔ Offline Billing</span>
              <span>✔ Enterprise Security</span>
              <span>✔ API-first</span>
            </div>

            <div className="mt-8 flex gap-4">
              <button
                onClick={() => navigate("/request-a-demo")}
                className="bg-[#15BDFF] text-[#021D59] px-6 py-3 rounded-lg font-medium hover:bg-white transition"
              >
                Request a Demo
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#021D59] transition"
              >
                Talk to Sales
              </button>
            </div>
          </div>

          <div className="hidden md:block">
            {/* Placeholder for product visual */}
            <div className="h-[360px] bg-white/10 rounded-xl" />
          </div>
        </div>
      </section>

      {/* ================= WHAT IS POS ================= */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#021D59]">
            What is Revergent POS?
          </h2>
          <p className="mt-6 text-gray-600 text-lg">
            Revergent POS is a unified commerce platform that enables businesses
            to manage in-store, online, and mobile sales from a single system —
            with real-time inventory, payments, and analytics.
          </p>
        </div>
      </section>

      {/* ================= KEY FEATURES ================= */}
      <section className="bg-[#F7F9FC] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#021D59]">
            Core Capabilities
          </h2>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Cloud-Native Architecture",
                desc: "Highly available, scalable POS built for multi-location enterprises.",
              },
              {
                title: "Omnichannel Sales",
                desc: "Unified experience across retail, web, mobile, and kiosks.",
              },
              {
                title: "Real-Time Inventory",
                desc: "Live stock updates across all stores and warehouses.",
              },
              {
                title: "Advanced Payments",
                desc: "Supports cards, wallets, UPI, split payments, refunds, and offline mode.",
              },
              {
                title: "Role-Based Access",
                desc: "Granular permissions for staff, managers, and admins.",
              },
              {
                title: "Analytics & Reporting",
                desc: "Sales trends, customer behavior, and performance dashboards.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-8 border border-[#E6E9F0]"
              >
                <h3 className="text-lg font-semibold text-[#021D59]">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          {/* ================= PAYMENTS & CHECKOUT ================= */}
          <section className="py-20">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl font-bold text-[#021D59] text-center">
                Advanced Payments & Checkout Engine
              </h2>
              <p className="mt-4 text-center text-gray-600 max-w-3xl mx-auto">
                Designed to handle high-volume enterprise transactions with
                speed, reliability, and compliance.
              </p>

              <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {[
                  {
                    title: "Multiple Payment Modes",
                    desc: "Cards, UPI, wallets, net banking, cash, gift cards, and split payments.",
                  },
                  {
                    title: "Offline Billing",
                    desc: "Continue billing even during internet outages. Auto-sync when online.",
                  },
                  {
                    title: "Fast Checkout",
                    desc: "Optimized checkout flows with sub-second transaction processing.",
                  },
                  {
                    title: "Refunds & Adjustments",
                    desc: "Full and partial refunds, exchanges, and order adjustments.",
                  },
                  {
                    title: "Tax & Compliance",
                    desc: "GST/VAT ready with tax rules based on location and product.",
                  },
                  {
                    title: "Payment Reconciliation",
                    desc: "Daily settlement reports and mismatch detection.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white border border-[#E6E9F0] rounded-xl p-8"
                  >
                    <h3 className="font-semibold text-[#021D59]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ================= INTEGRATIONS ================= */}
          <section className="bg-[#F7F9FC] py-20">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl font-bold text-[#021D59] text-center">
                Integrations & Extensibility
              </h2>

              <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {[
                  {
                    title: "ERP & Accounting",
                    desc: "Integrates with ERP, accounting, and finance systems.",
                  },
                  {
                    title: "E-commerce Platforms",
                    desc: "Sync with Shopify, custom storefronts, and marketplaces.",
                  },
                  {
                    title: "CRM & Loyalty",
                    desc: "Unified customer profiles, loyalty points, and offers.",
                  },
                  {
                    title: "Warehouse & Supply Chain",
                    desc: "Real-time inventory sync across warehouses and stores.",
                  },
                  {
                    title: "Open APIs",
                    desc: "REST & webhook APIs for custom integrations.",
                  },
                  {
                    title: "Third-Party Services",
                    desc: "Payments, SMS, email, analytics, and tax services.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white border border-[#E6E9F0] rounded-xl p-8"
                  >
                    <h3 className="font-semibold text-[#021D59]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* ================= USE CASES ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#021D59]">
            Built for Multiple Industries
          </h2>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Retail & Supermarkets",
              "Restaurants & Cafes",
              "D2C & Brand Stores",
              "Pharmacies & Healthcare",
            ].map((useCase, i) => (
              <div
                key={i}
                className="border border-[#E6E9F0] rounded-lg p-6 text-center"
              >
                <p className="font-medium text-[#021D59]">{useCase}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ARCHITECTURE ================= */}
      <section className="bg-[#021D59] text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">
            Secure, Scalable & Future-Ready Architecture
          </h2>
          <p className="mt-6 text-blue-100 text-lg">
            Built using microservices, APIs, and cloud infrastructure to support
            rapid growth and seamless integrations.
          </p>
        </div>
      </section>

      {/* ================= SECURITY ================= */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#021D59] text-center">
            Enterprise-Grade Security
          </h2>

          <ul className="mt-10 max-w-3xl mx-auto space-y-4 text-gray-700 text-lg">
            <li>• PCI-DSS compliant payment processing</li>
            <li>• Encrypted data at rest and in transit</li>
            <li>• Role-based access and permissions</li>
            <li>• Centralized audit logs and monitoring</li>
            <li>• Secure cloud infrastructure with backups</li>
          </ul>
        </div>
      </section>
      {/* ================= ARCHITECTURE ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#021D59]">
            Enterprise-Ready Architecture
          </h2>
          <p className="mt-4 text-center text-gray-600 max-w-3xl mx-auto">
            Designed using microservices and API-first principles to ensure
            reliability, scalability, and performance.
          </p>

          <div className="mt-16 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <ul className="space-y-4 text-gray-700">
                <li>• Cloud-native microservices architecture</li>
                <li>• Central admin & reporting layer</li>
                <li>• Secure payment gateway abstraction</li>
                <li>• Offline-first store devices</li>
                <li>• Real-time sync & message queues</li>
              </ul>
            </div>

            <div className="bg-[#F7F9FC] border border-[#E6E9F0] rounded-xl p-8 text-center">
              <p className="text-gray-400 italic">
                [Architecture Diagram Placeholder]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRODUCT DEMO ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#021D59]">
            See Revergent POS in Action
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            From billing to inventory and analytics, everything works seamlessly
            from a single platform.
          </p>
        </div>
      </section>

      {/* ================= PRICING & PLANS ================= */}
      <section className="py-24 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#021D59]">
            Flexible Plans for Every Scale
          </h2>
          <p className="mt-4 text-center text-gray-600 max-w-3xl mx-auto">
            Whether you operate a single outlet or hundreds of stores, Revergent
            POS scales with your business.
          </p>

          <div className="mt-16 grid md:grid-cols-3 gap-10">
            {/* STARTER */}
            <div className="bg-white border border-[#E6E9F0] rounded-xl p-8">
              <h3 className="text-lg font-semibold text-[#021D59]">Starter</h3>
              <p className="mt-2 text-gray-500 text-sm">
                Best for small stores
              </p>

              <ul className="mt-6 space-y-3 text-gray-700 text-sm">
                <li>• Single store POS</li>
                <li>• Billing & inventory</li>
                <li>• Standard reports</li>
                <li>• Email support</li>
              </ul>

              <button className="mt-8 w-full border border-[#021D59] text-[#021D59] py-3 rounded-lg font-medium hover:bg-[#021D59] hover:text-white transition">
                Contact Sales
              </button>
            </div>

            {/* GROWTH */}
            <div className="bg-[#021D59] text-white rounded-xl p-8 scale-105 shadow-lg">
              <h3 className="text-lg font-semibold">Growth</h3>
              <p className="mt-2 text-blue-100 text-sm">
                For multi-location brands
              </p>

              <ul className="mt-6 space-y-3 text-blue-100 text-sm">
                <li>• Multi-store management</li>
                <li>• Central inventory & pricing</li>
                <li>• Offline billing</li>
                <li>• Advanced analytics</li>
              </ul>

              <button className="mt-8 w-full bg-[#15BDFF] text-[#021D59] py-3 rounded-lg font-semibold hover:bg-white transition">
                Request Demo
              </button>
            </div>

            {/* ENTERPRISE */}
            <div className="bg-white border border-[#E6E9F0] rounded-xl p-8">
              <h3 className="text-lg font-semibold text-[#021D59]">
                Enterprise
              </h3>
              <p className="mt-2 text-gray-500 text-sm">Custom & large-scale</p>

              <ul className="mt-6 space-y-3 text-gray-700 text-sm">
                <li>• Unlimited locations</li>
                <li>• Custom integrations</li>
                <li>• SLA & dedicated support</li>
                <li>• On-prem / hybrid options</li>
              </ul>

              <button className="mt-8 w-full border border-[#021D59] text-[#021D59] py-3 rounded-lg font-medium hover:bg-[#021D59] hover:text-white transition">
                Talk to Experts
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-[#15BDFF] py-20 text-center">
        <h2 className="text-3xl font-bold text-[#021D59]">
          Ready to Replace Legacy POS Systems?
        </h2>
        <p className="mt-4 text-[#021D59]/80 max-w-2xl mx-auto">
          Talk to our experts and see how Revergent POS can scale with your
          business across stores, channels, and regions.
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

export default Pos;
