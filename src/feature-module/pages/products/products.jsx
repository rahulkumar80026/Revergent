import React from "react";
import { Link } from "react-router-dom";
import {
  Users,
  ShoppingCart,
  BookOpen,
  ArrowRight,
} from "lucide-react";

export default function ProductsOverview() {
  const productsList = [
    {
      title: "Revergent Cloud CRM",
      description: "A secure, custom sales pipeline CRM tailored for real estate, logistics, retail, and B2B client management. Convert more leads and sync workflow actions.",
      href: "/products/cloud-crm",
      icon: <Users size={32} />,
      points: [
        "Interactive Sales Pipelines",
        "Lead Capture & Scoring",
        "Task Management & Reminders",
        "Analytics Reports & Performance Insights",
      ],
    },
    {
      title: "Revergent POS System",
      description: "Scale physical retail storefront billing and checkout. Features offline database capability, instant invoice prints, and central stock control.",
      href: "/products/pos",
      icon: <ShoppingCart size={32} />,
      points: [
        "Ultra-Fast Checkout Interface",
        "Multi-Store Stock Tracking",
        "Barcode Scanning Integration",
        "Detailed Purchase & Sale Reports",
      ],
    },
    {
      title: "Revergent Classora (IMS)",
      description: "A complete School & Academic Institution Management Software. Standardizes fee collection, student enrollments, exam entries, and scheduling.",
      href: "/products/classora",
      icon: <BookOpen size={32} />,
      points: [
        "Student & Staff Profiles",
        "Automated Fee Ledger Generation",
        "Exams & Marksheet Creator",
        "Class Timetable & Attendance System",
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
              alt="Products Overview"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 bg-gradient-to-t from-[#021D59]/90 to-transparent">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Our Products
              </h1>
              <p className="max-w-2xl text-gray-200 text-sm md:text-base font-light">
                Enterprise-grade, highly customizable platforms engineered to streamline your operations, secure customer data, and accelerate growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS LIST GRID */}
      <section className="py-12 px-6">
        <div className="custom-container mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 border-l-4 border-[#2cc5d5] pl-6 uppercase tracking-wider">
              Core Platforms
            </h2>
            <p className="text-gray-500 max-w-xl pl-10">
              Ready-to-deploy platforms engineered with customization hooks to seamlessly plug into your specific workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsList.map((prod, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="text-[#2cc5d5] mb-6 flex items-center justify-between">
                    <span className="p-3 bg-[#15BDFF1A] rounded-xl text-[#15BDFF]">
                      {prod.icon}
                    </span>
                    <span className="text-gray-300 text-xs font-mono">0{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{prod.title}</h3>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed font-light">
                    {prod.description}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {prod.points.map((pt, i) => (
                      <li key={i} className="flex items-center text-xs text-[#021D59]/80 font-light">
                        <span className="w-1.5 h-1.5 bg-[#2cc5d5] rounded-full mr-2" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={prod.href}
                  className="inline-flex items-center gap-2 text-[#15BDFF] font-semibold text-sm hover:text-[#021D59] transition-colors group"
                >
                  Explore Product
                  <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-12 px-6 bg-[#021D59] text-white">
        <div className="max-w-5xl mx-auto py-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Want a custom feature or integration?</h2>
            <p className="text-blue-100/60 text-sm font-light">
              Our engineering team specializes in adapting our products to your exact enterprise ecosystem.
            </p>
          </div>
          <Link
            to="/request-a-demo"
            className="bg-[#15BDFF] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#021D59] hover:border hover:border-white transition-all text-sm shadow-md"
          >
            Request a Product Demo
          </Link>
        </div>
      </section>
    </div>
  );
}
