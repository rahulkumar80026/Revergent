import React from "react";
import { Link } from "react-router-dom";
import {
  ShoppingCart,
  ShoppingBag,
  GraduationCap,
  HeartPulse,
  Building,
  ArrowRight,
} from "lucide-react";

export default function SolutionsOverview() {
  const solutionsList = [
    {
      title: "Retail & POS",
      description: "Scale your retail business with unified point-of-sale solutions. Streamline multi-store billing, sync real-time stock levels, and build customer loyalty.",
      href: "/solutions/retail-pos",
      icon: <ShoppingCart size={32} />,
      points: [
        "Real-time Inventory Management",
        "Multi-Store Synchronization",
        "Loyalty & Customer Profiles",
        "Offline-capable Billing Systems",
      ],
    },
    {
      title: "E-commerce & D2C",
      description: "Accelerate direct-to-consumer sales with high-performance storefronts integrated with payment gateways, CRM tools, and fulfillment systems.",
      href: "/solutions/ecommerce-d2c",
      icon: <ShoppingBag size={32} />,
      points: [
        "Headless Commerce Architectures",
        "Payment Gateway Integrations",
        "Fulfillment & Shipping Sync",
        "High-Conversion UI Layouts",
      ],
    },
    {
      title: "Education (EdTech)",
      description: "Digital learning platforms, custom Learning Management Systems (LMS), and school portals built for high concurrency and robust student engagement.",
      href: "/solutions/edtech",
      icon: <GraduationCap size={32} />,
      points: [
        "LMS & virtual Classrooms",
        "Admissions & Fee Processing",
        "Parent-Teacher Portals",
        "Academic Analytics & Progress Tracker",
      ],
    },
    {
      title: "Healthcare",
      description: "HIPAA-compliant, highly secure medical software designed to streamline practice workflows and enhance client/patient interactions.",
      href: "/solutions/healthcare",
      icon: <HeartPulse size={32} />,
      points: [
        "EHR/EMR Integrations",
        "Patient Scheduling Systems",
        "Telemedicine & Secure Video Calls",
        "Medical Data Security & Audits",
      ],
    },
    {
      title: "SME Digital Transformation",
      description: "Empower small and medium businesses to modernise legacy workflows, deploy automated spreadsheets, and seamlessly migrate to cloud databases.",
      href: "/solutions/sme-digital-transformation",
      icon: <Building size={32} />,
      points: [
        "Workflow Automation & RPA",
        "Cloud Migration Assistance",
        "Collaboration Suite Setups",
        "Analytics & Dashboarding",
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
              alt="Solutions Overview"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 bg-gradient-to-t from-[#021D59]/90 to-transparent">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Our Solutions
              </h1>
              <p className="max-w-2xl text-gray-200 text-sm md:text-base font-light">
                Tailored industry-specific digital transformation platforms engineered to optimize workflows, scale operations, and drive growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS GRID */}
      <section className="py-12 px-6">
        <div className="custom-container mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 border-l-4 border-[#2cc5d5] pl-6 uppercase tracking-wider">
              Industry Focus Areas
            </h2>
            <p className="text-gray-500 max-w-xl pl-10">
              Transforming complex business challenges into sleek, high-performing digital systems built for tomorrow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionsList.map((sol, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="text-[#2cc5d5] mb-6 flex items-center justify-between">
                    <span className="p-3 bg-[#15BDFF1A] rounded-xl text-[#15BDFF]">
                      {sol.icon}
                    </span>
                    <span className="text-gray-300 text-xs font-mono">0{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{sol.title}</h3>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed font-light">
                    {sol.description}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {sol.points.map((pt, i) => (
                      <li key={i} className="flex items-center text-xs text-[#021D59]/80 font-light">
                        <span className="w-1.5 h-1.5 bg-[#2cc5d5] rounded-full mr-2" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={sol.href}
                  className="inline-flex items-center gap-2 text-[#15BDFF] font-semibold text-sm hover:text-[#021D59] transition-colors group"
                >
                  Explore Solution
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
            <h2 className="text-3xl font-bold mb-2">Have a specific requirement?</h2>
            <p className="text-blue-100/60 text-sm font-light">
              Speak with our industry experts to map out a solution customized for your business.
            </p>
          </div>
          <Link
            to="/company/contact"
            className="bg-[#15BDFF] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#021D59] hover:border hover:border-white transition-all text-sm shadow-md"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
