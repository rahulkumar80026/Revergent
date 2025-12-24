import React, { useState } from "react";

const AboutUs = ({ isDark }) => {
  const [activeTimeline, setActiveTimeline] = useState(null);
  const [hoveredTeam, setHoveredTeam] = useState(null);

  const DEEP_MIDNIGHT_BLUE = "#19183B";
const NEAR_WHITE = "#E7F2EF";
const SLATE_BLUE = "#708993";
const CALM_MINT = "#A1C2BD";

  const sectionBg = isDark ? "#0F0E20" : NEAR_WHITE;
  const textPrimary = isDark ? NEAR_WHITE : DEEP_MIDNIGHT_BLUE;
  const textSecondary = isDark ? CALM_MINT : SLATE_BLUE;
  const cardBg = isDark ? "#1E293B" : "white";

  const timeline = [
    {
      year: "2018",
      title: "The Beginning",
      desc: "Founded with a vision to revolutionize software development",
      milestone: "Founded",
    },
    {
      year: "2019",
      title: "First Enterprise Client",
      desc: "Secured our first Fortune 500 partnership",
      milestone: "10+ Clients",
    },
    {
      year: "2020",
      title: "AI Innovation",
      desc: "Launched our proprietary AI platform",
      milestone: "50+ Clients",
    },
    {
      year: "2021",
      title: "Global Expansion",
      desc: "Opened offices in 5 countries",
      milestone: "200+ Clients",
    },
    {
      year: "2022",
      title: "Web3 Pioneer",
      desc: "Became leading Web3 solutions provider",
      milestone: "500+ Clients",
    },
    {
      year: "2023",
      title: "Industry Leader",
      desc: "Recognized as Top 10 Tech Company",
      milestone: "1000+ Clients",
    },
    {
      year: "2024",
      title: "Future Forward",
      desc: "Launching next-gen autonomous systems",
      milestone: "2000+ Clients",
    },
  ];

  const team = [
    {
      name: "Alex Rivera",
      role: "CEO & Founder",
      expertise: "AI & Strategy",
      image: "👨‍💼",
      quote: "Building the future, one line at a time",
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      expertise: "Cloud Architecture",
      image: "👩‍💻",
      quote: "Innovation through elegant engineering",
    },
    {
      name: "Marcus Johnson",
      role: "Head of AI",
      expertise: "Machine Learning",
      image: "🧑‍🔬",
      quote: "Teaching machines to think differently",
    },
    {
      name: "Priya Sharma",
      role: "Head of Web3",
      expertise: "Blockchain",
      image: "👩‍🚀",
      quote: "Decentralizing the digital world",
    },
    {
      name: "David Kim",
      role: "Head of DevOps",
      expertise: "Infrastructure",
      image: "👨‍🔧",
      quote: "Automate everything, optimize always",
    },
    {
      name: "Emily Watson",
      role: "Head of Design",
      expertise: "UX/UI",
      image: "👩‍🎨",
      quote: "Design is not just what it looks like",
    },
  ];

  const values = [
    {
      icon: "🚀",
      title: "Innovation First",
      desc: "We push boundaries and challenge the status quo",
    },
    {
      icon: "🤝",
      title: "Client-Centric",
      desc: "Your success is our success",
    },
    {
      icon: "💡",
      title: "Continuous Learning",
      desc: "Stay ahead in the ever-evolving tech landscape",
    },
    {
      icon: "🌍",
      title: "Global Impact",
      desc: "Building solutions that change the world",
    },
    {
      icon: "🔒",
      title: "Security Focused",
      desc: "Enterprise-grade security in everything we build",
    },
    {
      icon: "⚡",
      title: "Speed & Quality",
      desc: "Fast delivery without compromising excellence",
    },
  ];

  const stats = [
    {
      value: "2000+",
      label: "Happy Clients",
      gradient: `linear-gradient(135deg, ${DEEP_MIDNIGHT_BLUE}, ${SLATE_BLUE})`,
    },
    {
      value: "5000+",
      label: "Projects Delivered",
      gradient: `linear-gradient(135deg, ${SLATE_BLUE}, ${CALM_MINT})`,
    },
    {
      value: "98%",
      label: "Satisfaction Rate",
      gradient: `linear-gradient(135deg, ${CALM_MINT}, ${DEEP_MIDNIGHT_BLUE})`,
    },
    {
      value: "24/7",
      label: "Support Available",
      gradient: `linear-gradient(135deg, ${DEEP_MIDNIGHT_BLUE}dd, ${SLATE_BLUE})`,
    },
    {
      value: "15+",
      label: "Countries Served",
      gradient: `linear-gradient(135deg, ${SLATE_BLUE}, ${CALM_MINT})`,
    },
    {
      value: "$50M+",
      label: "Value Delivered",
      gradient: `linear-gradient(135deg, ${CALM_MINT}, ${DEEP_MIDNIGHT_BLUE})`,
    },
  ];

  return (
    <div
      className="min-h-screen transition-colors duration-700"
      style={{ backgroundColor: sectionBg }}
    >
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full filter blur-3xl opacity-20 animate-pulse"
          style={{
            background: `radial-gradient(circle, ${CALM_MINT}99, transparent)`,
            animationDuration: "10s",
          }}
        />
        <div
          className="absolute bottom-0 left-0 w-[900px] h-[900px] rounded-full filter blur-3xl opacity-20 animate-pulse"
          style={{
            background: `radial-gradient(circle, ${DEEP_MIDNIGHT_BLUE}88, ${SLATE_BLUE}66, transparent)`,
            animationDuration: "12s",
            animationDelay: "3s",
          }}
        />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle, ${
              isDark ? SLATE_BLUE : CALM_MINT
            } 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20 md:py-32">
            {/* Back Button */}
            <button
              className="group mb-8 inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300"
              style={{
                backgroundColor: isDark ? `${SLATE_BLUE}44` : `${CALM_MINT}44`,
                color: textPrimary,
                border: `2px solid ${isDark ? SLATE_BLUE : CALM_MINT}`,
              }}
              onClick={() => window.history.back()}
            >
              <span className="transition-transform duration-300 group-hover:-translate-x-1">
                ←
              </span>
              Back to Home
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <div className="relative inline-block mb-6">
                  <div
                    className="absolute inset-0 filter blur-3xl opacity-60 animate-pulse"
                    style={{
                      background: `linear-gradient(135deg, ${DEEP_MIDNIGHT_BLUE}, ${CALM_MINT})`,
                      animationDuration: "4s",
                    }}
                  />
                  <h1
                    className="relative text-5xl md:text-7xl font-black"
                    style={{ color: textPrimary }}
                  >
                    About{" "}
                    <span
                      className="text-transparent bg-clip-text"
                      style={{
                        backgroundImage: `linear-gradient(135deg, ${DEEP_MIDNIGHT_BLUE}, ${SLATE_BLUE}, ${CALM_MINT})`,
                      }}
                    >
                      Revergent
                    </span>
                  </h1>
                </div>

                <p
                  className="text-xl md:text-2xl mb-8 leading-relaxed"
                  style={{ color: textSecondary }}
                >
                  We're not just another tech company. We're a team of
                  passionate innovators, engineers, and visionaries building the
                  future of software.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    "Mission-Driven Excellence",
                    "Cutting-Edge Technology",
                    "Global Impact",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 group cursor-pointer"
                    >
                      <div
                        className="w-3 h-3 rounded-full animate-pulse"
                        style={{
                          backgroundColor: DEEP_MIDNIGHT_BLUE,
                          animationDelay: `${idx * 0.3}s`,
                        }}
                      />
                      <span
                        className="text-lg font-semibold transition-all duration-300 group-hover:translate-x-2"
                        style={{ color: textPrimary }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white transition-all duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${DEEP_MIDNIGHT_BLUE}, ${SLATE_BLUE})`,
                    boxShadow: `0 10px 30px -10px ${DEEP_MIDNIGHT_BLUE}`,
                  }}
                >
                  Join Our Team
                  <span className="transition-transform duration-300 group-hover:translate-x-2">
                    →
                  </span>
                </button>
              </div>

              {/* Right Visual - 3D Card */}
              <div className="relative">
                <div
                  className="relative rounded-3xl overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${SLATE_BLUE}88, ${DEEP_MIDNIGHT_BLUE}dd)`,
                    padding: "40px",
                    boxShadow: `0 40px 80px -20px rgba(25, 24, 59, 0.5)`,
                  }}
                >
                  {/* Floating Elements */}
                  <div className="space-y-6">
                    {[
                      { icon: "🚀", label: "Innovation", value: "100%" },
                      { icon: "💡", label: "Creativity", value: "100%" },
                      { icon: "🎯", label: "Precision", value: "100%" },
                      { icon: "⚡", label: "Speed", value: "100%" },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-6 rounded-2xl backdrop-blur-lg transition-all duration-300 hover:scale-105"
                        style={{
                          backgroundColor: isDark
                            ? `${DEEP_MIDNIGHT_BLUE}88`
                            : "white",
                          border: `2px solid ${
                            isDark ? SLATE_BLUE : CALM_MINT
                          }`,
                          animation: `slideIn 0.8s ease-out ${idx * 0.2}s both`,
                        }}
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-4xl">{item.icon}</span>
                          <span
                            className="text-xl font-bold"
                            style={{ color: textPrimary }}
                          >
                            {item.label}
                          </span>
                        </div>
                        <span
                          className="text-2xl font-black"
                          style={{ color: CALM_MINT }}
                        >
                          {item.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Floating Orbs */}
                  <div
                    className="absolute -top-10 -right-10 w-40 h-40 rounded-full filter blur-2xl opacity-60 animate-pulse"
                    style={{
                      background: `radial-gradient(circle, ${CALM_MINT}, transparent)`,
                      animationDuration: "3s",
                    }}
                  />
                  <div
                    className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full filter blur-2xl opacity-60 animate-pulse"
                    style={{
                      background: `radial-gradient(circle, ${DEEP_MIDNIGHT_BLUE}, transparent)`,
                      animationDuration: "4s",
                      animationDelay: "1s",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-2xl p-6 text-center transition-all duration-500 hover:scale-110 cursor-pointer"
                  style={{
                    background: stat.gradient,
                    boxShadow: `0 10px 30px -10px rgba(25, 24, 59, 0.3)`,
                    animation: `fadeIn 0.8s ease-out ${idx * 0.1}s both`,
                  }}
                >
                  {/* Shine Effect */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background:
                        "linear-gradient(45deg, transparent, rgba(255,255,255,0.2), transparent)",
                      animation: "shine 2s infinite",
                    }}
                  />

                  <div className="relative z-10">
                    <div className="text-3xl md:text-4xl font-black text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm font-semibold text-white opacity-90">
                      {stat.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story - Timeline */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="text-center mb-16">
              <h2
                className="text-4xl md:text-5xl font-black mb-4"
                style={{ color: textPrimary }}
              >
                Our{" "}
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${DEEP_MIDNIGHT_BLUE}, ${CALM_MINT})`,
                  }}
                >
                  Journey
                </span>
              </h2>
              <p className="text-xl" style={{ color: textSecondary }}>
                7 years of innovation, growth, and impact
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Center Line */}
              <div
                className="absolute left-1/2 top-0 bottom-0 w-1 -ml-0.5"
                style={{
                  background: `linear-gradient(to bottom, ${DEEP_MIDNIGHT_BLUE}, ${SLATE_BLUE}, ${CALM_MINT})`,
                  opacity: 0.3,
                }}
              />

              <div className="space-y-12">
                {timeline.map((item, idx) => (
                  <div
                    key={idx}
                    className={`relative flex items-center ${
                      idx % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                    onMouseEnter={() => setActiveTimeline(idx)}
                    onMouseLeave={() => setActiveTimeline(null)}
                    style={{
                      animation: `fadeIn 0.8s ease-out ${idx * 0.2}s both`,
                    }}
                  >
                    {/* Content */}
                    <div
                      className={`w-5/12 ${
                        idx % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                      }`}
                    >
                      <div
                        className="inline-block rounded-2xl p-6 transition-all duration-500 cursor-pointer"
                        style={{
                          backgroundColor: cardBg,
                          border: `2px solid ${
                            activeTimeline === idx
                              ? DEEP_MIDNIGHT_BLUE
                              : isDark
                              ? SLATE_BLUE + "44"
                              : CALM_MINT + "44"
                          }`,
                          transform:
                            activeTimeline === idx ? "scale(1.05)" : "scale(1)",
                          boxShadow:
                            activeTimeline === idx
                              ? `0 20px 40px -10px rgba(25, 24, 59, 0.4)`
                              : `0 10px 20px -10px rgba(25, 24, 59, 0.2)`,
                        }}
                      >
                        <div
                          className="text-sm font-bold uppercase tracking-wider mb-2"
                          style={{
                            color:
                              activeTimeline === idx
                                ? "transparent"
                                : SLATE_BLUE,
                            backgroundImage:
                              activeTimeline === idx
                                ? `linear-gradient(135deg, ${DEEP_MIDNIGHT_BLUE}, ${CALM_MINT})`
                                : "none",
                            backgroundClip:
                              activeTimeline === idx ? "text" : "unset",
                            WebkitBackgroundClip:
                              activeTimeline === idx ? "text" : "unset",
                          }}
                        >
                          {item.milestone}
                        </div>
                        <h3
                          className="text-2xl font-black mb-2"
                          style={{ color: textPrimary }}
                        >
                          {item.title}
                        </h3>
                        <p className="text-sm" style={{ color: textSecondary }}>
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    {/* Center Year Badge */}
                    <div className="w-2/12 flex justify-center">
                      <div
                        className="relative w-24 h-24 rounded-full flex items-center justify-center font-black text-2xl text-white transition-all duration-500"
                        style={{
                          background:
                            activeTimeline === idx
                              ? `linear-gradient(135deg, ${DEEP_MIDNIGHT_BLUE}, ${CALM_MINT})`
                              : `linear-gradient(135deg, ${SLATE_BLUE}, ${DEEP_MIDNIGHT_BLUE})`,
                          boxShadow:
                            activeTimeline === idx
                              ? `0 0 40px ${CALM_MINT}88`
                              : `0 0 20px rgba(25, 24, 59, 0.3)`,
                          transform:
                            activeTimeline === idx ? "scale(1.2)" : "scale(1)",
                        }}
                      >
                        {item.year}

                        {/* Pulse Ring */}
                        {activeTimeline === idx && (
                          <div
                            className="absolute inset-0 rounded-full animate-ping"
                            style={{
                              border: `2px solid ${CALM_MINT}`,
                              animationDuration: "2s",
                            }}
                          />
                        )}
                      </div>
                    </div>

                    {/* Empty Space */}
                    <div className="w-5/12" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="text-center mb-16">
              <h2
                className="text-4xl md:text-5xl font-black mb-4"
                style={{ color: textPrimary }}
              >
                Meet Our{" "}
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${DEEP_MIDNIGHT_BLUE}, ${CALM_MINT})`,
                  }}
                >
                  Leaders
                </span>
              </h2>
              <p className="text-xl" style={{ color: textSecondary }}>
                Visionaries driving innovation forward
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {team.map((member, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredTeam(idx)}
                  onMouseLeave={() => setHoveredTeam(null)}
                  className="group relative"
                  style={{
                    animation: `fadeIn 0.8s ease-out ${idx * 0.1}s both`,
                  }}
                >
                  {/* Glow */}
                  <div
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 filter blur-xl"
                    style={{
                      background: `linear-gradient(135deg, ${DEEP_MIDNIGHT_BLUE}, ${CALM_MINT})`,
                    }}
                  />

                  {/* Card */}
                  <div
                    className="relative rounded-3xl overflow-hidden transition-all duration-500"
                    style={{
                      backgroundColor: cardBg,
                      border: `2px solid ${
                        hoveredTeam === idx
                          ? DEEP_MIDNIGHT_BLUE
                          : isDark
                          ? SLATE_BLUE + "44"
                          : CALM_MINT + "44"
                      }`,
                      transform:
                        hoveredTeam === idx
                          ? "translateY(-8px) scale(1.02)"
                          : "translateY(0)",
                      boxShadow:
                        hoveredTeam === idx
                          ? `0 30px 60px -15px rgba(25, 24, 59, 0.4)`
                          : `0 10px 30px -10px rgba(25, 24, 59, 0.2)`,
                    }}
                  >
                    {/* Top Section */}
                    <div
                      className="relative p-8 text-center"
                      style={{
                        background:
                          hoveredTeam === idx
                            ? `linear-gradient(135deg, ${SLATE_BLUE}88, ${DEEP_MIDNIGHT_BLUE}dd)`
                            : `linear-gradient(135deg, ${SLATE_BLUE}44, ${DEEP_MIDNIGHT_BLUE}66)`,
                      }}
                    >
                      <div
                        className="text-8xl mb-4 transition-all duration-500"
                        style={{
                          transform:
                            hoveredTeam === idx
                              ? "scale(1.2) rotate(5deg)"
                              : "scale(1)",
                          filter:
                            hoveredTeam === idx
                              ? `drop-shadow(0 0 30px ${CALM_MINT})`
                              : "none",
                        }}
                      >
                        {member.image}
                      </div>

                      <h3
                        className="text-2xl font-black mb-1"
                        style={{ color: NEAR_WHITE }}
                      >
                        {member.name}
                      </h3>
                      <p
                        className="text-sm font-semibold mb-2"
                        style={{ color: CALM_MINT }}
                      >
                        {member.role}
                      </p>
                      <div
                        className="inline-block px-4 py-1 rounded-full text-xs font-bold"
                        style={{
                          backgroundColor: DEEP_MIDNIGHT_BLUE,
                          color: NEAR_WHITE,
                        }}
                      >
                        {member.expertise}
                      </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="p-6">
                      <div className="flex items-start gap-2">
                        <span className="text-2xl opacity-50">"</span>
                        <p
                          className="text-sm italic flex-1"
                          style={{ color: textSecondary }}
                        >
                          {member.quote}
                        </p>
                        <span className="text-2xl opacity-50">"</span>
                      </div>

                      {/* Social Links */}
                      <div className="flex justify-center gap-4 mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {["💼", "🐦", "📧"].map((icon, i) => (
                          <button
                            key={i}
                            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                            style={{
                              backgroundColor: isDark ? SLATE_BLUE : CALM_MINT,
                              color: textPrimary,
                            }}
                          >
                            {icon}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="text-center mb-16">
              <h2
                className="text-4xl md:text-5xl font-black mb-4"
                style={{ color: textPrimary }}
              >
                Our{" "}
                <span
                  className="text-transparent bg-clip-text"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${DEEP_MIDNIGHT_BLUE}, ${CALM_MINT})`,
                  }}
                >
                  Values
                </span>
              </h2>
              <p className="text-xl" style={{ color: textSecondary }}>
                Principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-2xl p-8 transition-all duration-500 hover:scale-105 cursor-pointer"
                  style={{
                    backgroundColor: cardBg,
                    border: `2px solid ${
                      isDark ? SLATE_BLUE + "44" : CALM_MINT + "44"
                    }`,
                    boxShadow: `0 10px 30px -10px rgba(25, 24, 59, 0.2)`,
                    animation: `fadeIn 0.8s ease-out ${idx * 0.1}s both`,
                  }}
                >
                  {/* Animated gradient on hover */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `linear-gradient(135deg, ${CALM_MINT}15, ${SLATE_BLUE}15)`,
                    }}
                  />

                  <div className="relative z-10">
                    <div className="text-5xl mb-4 transition-all duration-500 group-hover:scale-110">
                      {value.icon}
                    </div>
                    <h3
                      className="text-xl font-black mb-3"
                      style={{ color: textPrimary }}
                    >
                      {value.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: textSecondary }}
                    >
                      {value.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div
              className="relative rounded-3xl p-12 md:p-20 text-center overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${DEEP_MIDNIGHT_BLUE}, ${SLATE_BLUE})`,
              }}
            >
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle, ${CALM_MINT} 2px, transparent 2px)`,
                  backgroundSize: "40px 40px",
                  animation: "drift 30s linear infinite",
                }}
              />

              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                  Ready to Build the Future?
                </h2>
                <p className="text-xl mb-8" style={{ color: CALM_MINT }}>
                  Join our team of innovators and make an impact
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    className="group inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold transition-all duration-300"
                    style={{
                      backgroundColor: NEAR_WHITE,
                      color: DEEP_MIDNIGHT_BLUE,
                      boxShadow: `0 20px 40px -10px ${DEEP_MIDNIGHT_BLUE}`,
                    }}
                  >
                    View Open Positions
                    <span className="transition-transform duration-300 group-hover:translate-x-2">
                      →
                    </span>
                  </button>
                  <button
                    className="group inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold text-white transition-all duration-300"
                    style={{
                      backgroundColor: "transparent",
                      border: `2px solid ${NEAR_WHITE}`,
                    }}
                  >
                    Contact Us
                    <span className="transition-transform duration-300 group-hover:translate-x-2">
                      →
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }

        @keyframes drift {
          from { transform: translate(0, 0); }
          to { transform: translate(30px, 30px); }
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes shine {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default AboutUs;
