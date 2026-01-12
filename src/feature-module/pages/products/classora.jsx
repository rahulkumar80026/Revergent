import React from "react";
import { useNavigate } from "react-router-dom";

const Classora = () => {
  const navigate = useNavigate();

  return (
    <main className="bg-white text-slate-900">
      
      {/* ================= HERO ================= */}
      <section className="bg-[#021D59] text-white">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <span className="inline-block mb-4 text-xs tracking-widest uppercase text-[#15BDFF] font-semibold">
              Institute Management System
            </span>

            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              One Platform to Run <br /> Your Entire Institution
            </h1>

            <p className="mt-6 text-lg text-blue-100 max-w-xl">
              Classora is a modern, cloud-based institute management system
              designed to digitize academics, administration, finance,
              communication, and reporting — all in one place.
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
                Talk to Sales
              </button>
            </div>
          </div>

          {/* Product visual placeholder */}
          <div className="hidden md:block">
            <div className="h-[360px] bg-white/10 rounded-xl border border-white/10 flex items-center justify-center text-blue-100 italic">
              [Classora Dashboard Screenshot]
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT IS CLASSORA ================= */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#021D59]">
            What is Classora?
          </h2>
          <p className="mt-6 text-gray-600 text-lg">
            Classora is an end-to-end Institute Management System (IMS) that helps
            educational organizations streamline admissions, academics, faculty
            management, fees, examinations, and parent-student communication
            through a single unified platform.
          </p>
        </div>
      </section>

      {/* ================= CORE MODULES ================= */}
      <section className="bg-[#F7F9FC] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#021D59]">
            Core Modules
          </h2>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                title: "Admissions & Enrollment",
                desc: "Online applications, document verification, merit lists, and student onboarding."
              },
              {
                title: "Academic Management",
                desc: "Classes, batches, subjects, timetables, attendance, and syllabus tracking."
              },
              {
                title: "Faculty & Staff",
                desc: "Teacher profiles, roles, workload, attendance, and payroll integrations."
              },
              {
                title: "Fees & Finance",
                desc: "Fee structures, installments, online payments, receipts, and accounting exports."
              },
              {
                title: "Exams & Assessments",
                desc: "Exam scheduling, grading, report cards, transcripts, and analytics."
              },
              {
                title: "Communication Hub",
                desc: "SMS, email, app notifications for parents, students, and staff."
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

      {/* ================= WHO IT IS FOR ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[#021D59]">
            Built for All Types of Institutions
          </h2>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Schools & K-12 Institutions",
              "Colleges & Universities",
              "Coaching & Test Prep Centers",
              "Training Institutes & Academies"
            ].map((item, i) => (
              <div
                key={i}
                className="border border-[#E6E9F0] rounded-lg p-6 text-center"
              >
                <p className="font-medium text-[#021D59]">
                  {item}
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
            Secure & Scalable Architecture
          </h2>
          <p className="mt-6 text-blue-100 text-lg max-w-3xl mx-auto">
            Classora is built on a modern cloud-native architecture using
            microservices and APIs to ensure high availability, performance,
            and data security.
          </p>

          <div className="mt-10 bg-white/10 rounded-xl p-10 text-blue-100 italic">
            [Classora System Architecture Diagram Placeholder]
          </div>
        </div>
      </section>

      {/* ================= SECURITY & COMPLIANCE ================= */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#021D59] text-center">
            Security & Compliance
          </h2>

          <ul className="mt-10 max-w-3xl mx-auto space-y-4 text-gray-700">
            <li>• Role-based access control (Admin, Faculty, Student, Parent)</li>
            <li>• Secure authentication & encrypted data storage</li>
            <li>• Regular backups & audit logs</li>
            <li>• Compliance-ready for institutional data policies</li>
          </ul>
        </div>
      </section>

      {/* ================= PRICING ================= */}
      <section className="bg-[#F7F9FC] py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-[#021D59]">
            Flexible Pricing for Every Institution
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            Pricing depends on number of students, modules, and deployment model.
          </p>

          <div className="mt-10">
            <button
              onClick={() => navigate("/contact")}
              className="bg-[#021D59] text-white px-8 py-4 rounded-lg font-medium hover:bg-black transition"
            >
              Get Custom Pricing
            </button>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-[#15BDFF] py-20 text-center">
        <h2 className="text-3xl font-bold text-[#021D59]">
          Transform Your Institution with Classora
        </h2>
        <p className="mt-4 text-[#021D59]/80">
          Digitize operations, improve outcomes, and scale confidently.
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

export default Classora;
