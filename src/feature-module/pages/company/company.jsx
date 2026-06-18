import React from "react";
import { Link } from "react-router-dom";
import {
  Info,
  Users,
  Briefcase,
  Mail,
  ArrowRight,
} from "lucide-react";

export default function CompanyOverview() {
  const companyLinks = [
    {
      title: "About Us",
      description: "Learn more about our mission, our philosophy of technical integrity, and our commitment to simplification and scalability.",
      href: "/company/about",
      icon: <Info size={32} />,
      points: [
        "Company Background & Mission",
        "Client Impact Statistics",
        "Technical Integrity & Philosophy",
        "Global Office Locations",
      ],
    },
    {
      title: "Leadership",
      description: "Meet the directors, architects, and product leads guiding our cross-functional engineering teams.",
      href: "/company/leadership",
      icon: <Users size={32} />,
      points: [
        "Leadership Bios & Values",
        "Executive Engineering Council",
        "Design & Cloud Strategy Directors",
        "Client Partnership Standards",
      ],
    },
    {
      title: "Careers",
      description: "Join our global teams of developers, creators, designers, and problem solvers building the future of software.",
      href: "/company/careers",
      icon: <Briefcase size={32} />,
      points: [
        "Current Job Openings",
        "Engineering & Team Culture",
        "Remote & Global Positions",
        "Submit Your Profile (Get in Touch)",
      ],
    },
    {
      title: "Contact Us",
      description: "Reach out to start a conversation, request consulting proposals, or speak with an enterprise technology specialist.",
      href: "/company/contact",
      icon: <Mail size={32} />,
      points: [
        "General Consultations",
        "Support & General Queries",
        "Request RFP / Proposals",
        "Ranchi & Noida Office Addresses",
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
              alt="Company Overview"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 bg-gradient-to-t from-[#021D59]/90 to-transparent">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Our Company
              </h1>
              <p className="max-w-2xl text-gray-200 text-sm md:text-base font-light">
                Engineering tomorrow’s software and digital systems with speed, precision, and focus on customer-centric design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY LINKS GRID */}
      <section className="py-12 px-6">
        <div className="custom-container mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 border-l-4 border-[#2cc5d5] pl-6 uppercase tracking-wider">
              Explore Revergent
            </h2>
            <p className="text-gray-500 max-w-xl pl-10">
              Get to know our teams, browse our openings, or speak with our directors to see how we can assist you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyLinks.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="text-[#2cc5d5] mb-6 flex items-center justify-between">
                    <span className="p-3 bg-[#15BDFF1A] rounded-xl text-[#15BDFF]">
                      {item.icon}
                    </span>
                    <span className="text-gray-300 text-xs font-mono">0{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-sm mb-6 leading-relaxed font-light">
                    {item.description}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {item.points.map((pt, i) => (
                      <li key={i} className="flex items-center text-xs text-[#021D59]/80 font-light">
                        <span className="w-1.5 h-1.5 bg-[#2cc5d5] rounded-full mr-2" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={item.href}
                  className="inline-flex items-center gap-2 text-[#15BDFF] font-semibold text-sm hover:text-[#021D59] transition-colors group"
                >
                  Visit Page
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
            <h2 className="text-3xl font-bold mb-2">Want to work with us?</h2>
            <p className="text-blue-100/60 text-sm font-light">
              Submit your project details or get in touch for custom B2B application partnerships.
            </p>
          </div>
          <Link
            to="/company/contact"
            className="bg-[#15BDFF] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#021D59] hover:border hover:border-white transition-all text-sm shadow-md"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
