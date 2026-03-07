import React from "react";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-white text-[#0F172A]">
      {/* ================= HERO ================= */}
      <section className="w-full py-16">
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-[28px] shadow-xl">
            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad"
              alt="City"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F4B]/95 via-[#102A63]/90 to-[#1E3A8A]/80" />

            {/* Content */}
            <div className="relative z-10 px-10 py-20 md:px-16 max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-light text-white leading-tight mb-6">
                The Power is in <br /> Your Hands
              </h1>

              <p className="text-base md:text-lg text-white/90 leading-relaxed">
                We exist so you can win at your own game. Service providers
                operate in rapidly changing ecosystems with shifting customer
                demands. We enable you to onboard swiftly, retain seamlessly,
                and improve perpetually.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTRO ================= */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Who We Are</h2>
          <p className="text-lg text-[#64748B] leading-relaxed">
            Revergent is a global technology company helping enterprises
            simplify complexity, accelerate innovation, and unlock growth
            through scalable, cloud-native platforms.
          </p>
        </div>
      </section>

      {/* ================= CLIENT IMPACT ================= */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          <div className="grid grid-cols-12">
            {/* COUNT */}
            <div className="col-span-12 md:col-span-5 flex flex-col justify-center">
              <div className="text-[120px] md:text-[180px] font-extrabold leading-none text-transparent stroke-blue font-kanit">
                180
              </div>
            </div>

            {/* LINE + LABEL */}
            <div className="col-span-12 md:col-span-7 flex items-center gap-6 self-end">
              <div className="flex-1 h-px bg-[#021D59]" />
              <span className="text-xl font-medium text-[#021D59]">
                Countries
              </span>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            <div className="flex items-center gap-6">
              <span className="text-xl font-medium text-[#021D59]">
                End Users
              </span>
              <div className="flex-1 h-px bg-[#021D59]" />
            </div>

            <div className="text-[120px] md:text-[160px] font-extrabold leading-none text-transparent stroke-green text-right ">
              990M+
            </div>
          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            <div className="text-[120px] md:text-[160px] font-extrabold leading-none text-transparent stroke-purple font-kanit">
              42
            </div>

            <div className="flex items-center gap-6">
              <div className="flex-1 h-px bg-[#021D59]" />
              <span className="text-xl font-medium text-[#021D59]">
                Partners
              </span>
            </div>
          </div>
        </div>

        {/* Decorative shapes (subtle) */}
        <div className="absolute top-20 left-10 w-16 h-16 rounded-xl bg-[#15BDFF]/10 rotate-12" />
        <div className="absolute bottom-20 right-16 w-20 h-20 rounded-xl bg-[#22C55E]/10 -rotate-12" />
        {/* Decorative shapes (subtle, optional but matches Evergent) */}
        <div className="absolute top-40 left-20 w-14 h-14 border border-dashed border-[#94A3B8] rotate-12 rounded-xl opacity-40" />
        <div className="absolute bottom-40 right-32 w-20 h-20 bg-[#38BDF8]/10 rounded-2xl rotate-12" />
        <div className="absolute bottom-24 right-1/4 w-10 h-10 bg-[#C084FC]/20 rounded-full" />
      </section>

      {/* ================= STATS ================= */}
      <section className="bg-[#F8FAFC] py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { value: "180+", label: "Countries Served" },
            { value: "990M+", label: "End Users Supported" },
            { value: "40+", label: "Global Partners" },
            { value: "3200+", label: "Enterprise Events Delivered" },
          ].map((item, i) => (
            <div key={i}>
              <div className="text-3xl font-semibold text-[#021D59]">
                {item.value}
              </div>
              <div className="text-sm mt-1 text-[#64748B]">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHAT WE DO ================= */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-8">What We Do</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <p className="text-[#64748B] leading-relaxed">
              We deliver modular, cloud-native platforms that enable enterprises
              to manage the entire customer lifecycle — from onboarding and
              monetization to retention and growth.
            </p>

            <p className="text-[#64748B] leading-relaxed">
              Our solutions are designed to scale globally, adapt quickly, and
              integrate seamlessly with existing ecosystems, ensuring long-term
              value and operational efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* ================= LEADERSHIP ================= */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-12">Leadership</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Alex Rivera", role: "Chief Executive Officer" },
              { name: "Sarah Chen", role: "Chief Technology Officer" },
              { name: "Marcus Johnson", role: "Head of AI & Data" },
              { name: "Priya Sharma", role: "Head of Web3 Platforms" },
              { name: "David Kim", role: "Head of Cloud & DevOps" },
              { name: "Emily Watson", role: "Head of Design" },
            ].map((leader, i) => (
              <div
                key={i}
                className="bg-white border border-[#E5E7EB] rounded-lg p-6"
              >
                <h3 className="text-lg font-medium">{leader.name}</h3>
                <p className="text-sm text-[#64748B] mt-1">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6 text-center border-t border-[#E5E7EB] pt-20">
          <h2 className="text-3xl font-semibold mb-4">Ready to Transform?</h2>
          <p className="text-lg text-[#64748B] mb-8">
            Discover how Revergent can help you move faster, scale smarter, and
            stay ahead.
          </p>

          <button
            onClick={() => navigate("/request-a-demo")}
            className="
              px-8 py-3 rounded-md text-white font-medium
              bg-[#15BDFF]
              active:bg-[#15bdff33]
            "
          >
            Request a Demo
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
