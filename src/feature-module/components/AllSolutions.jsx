import React, { useState } from "react";

// Color constants
const DEEP_MIDNIGHT_BLUE = "#19183B";
const NEAR_WHITE = "#E7F2EF";
const SLATE_BLUE = "#708993";
const CALM_MINT = "#A1C2BD";

const AllSolutions = ({ isDark }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredCard, setHoveredCard] = useState(null);

  const sectionBg = isDark ? "#0F0E20" : NEAR_WHITE;
  const textPrimary = isDark ? NEAR_WHITE : DEEP_MIDNIGHT_BLUE;
  const textSecondary = isDark ? CALM_MINT : SLATE_BLUE;
  const cardBg = isDark ? "#1E293B" : "white";

  const categories = [
    "All",
    "AI & ML",
    "Web3",
    "Cloud",
    "DevOps",
    "IoT",
    "Security",
  ];

  const allSolutions = [
    {
      category: "AI & ML",
      title: "AI-Powered Analytics",
      tagline: "Intelligence at Scale",
      description:
        "Transform data into decisions with real-time ML models, predictive analytics, and custom AI solutions.",
      icon: "🤖",
      badge: "Most Popular",
      pricing: "From $499/mo",
      features: [
        "Real-time Processing",
        "Predictive Models",
        "Custom Dashboards",
        "API Integration",
      ],
      stats: { accuracy: "95%", speed: "10x", clients: "500+" },
      gradient: `linear-gradient(135deg, ${DEEP_MIDNIGHT_BLUE}, ${SLATE_BLUE})`,
    },
    {
      category: "AI & ML",
      title: "Computer Vision Suite",
      tagline: "See the Future",
      description:
        "Advanced image recognition, object detection, and facial analysis powered by deep learning.",
      icon: "👁️",
      badge: "Enterprise",
      pricing: "Custom",
      features: [
        "Object Detection",
        "Facial Recognition",
        "OCR",
        "Video Analytics",
      ],
      stats: { accuracy: "98%", speed: "Real-time", clients: "200+" },
      gradient: `linear-gradient(135deg, ${SLATE_BLUE}, ${CALM_MINT})`,
    },
    {
      category: "AI & ML",
      title: "Natural Language AI",
      tagline: "Understand Context",
      description:
        "Build intelligent chatbots, sentiment analysis, and language translation with state-of-the-art NLP.",
      icon: "💬",
      badge: "AI-Powered",
      pricing: "From $799/mo",
      features: [
        "Chatbots",
        "Sentiment Analysis",
        "Translation",
        "Text Generation",
      ],
      stats: { accuracy: "96%", languages: "100+", clients: "350+" },
      gradient: `linear-gradient(135deg, ${CALM_MINT}, ${DEEP_MIDNIGHT_BLUE})`,
    },
    {
      category: "Web3",
      title: "Smart Contract Platform",
      tagline: "Code is Law",
      description:
        "Deploy secure, audited smart contracts on Ethereum, Polygon, and other EVM chains.",
      icon: "📜",
      badge: "Blockchain",
      pricing: "From $1,999",
      features: [
        "Multi-chain",
        "Auto-Audit",
        "Gas Optimization",
        "Upgradeable",
      ],
      stats: { contracts: "1000+", value: "$50M+", uptime: "99.9%" },
      gradient: `linear-gradient(135deg, ${DEEP_MIDNIGHT_BLUE}dd, ${SLATE_BLUE})`,
    },
    {
      category: "Web3",
      title: "DeFi Solutions",
      tagline: "Decentralized Finance",
      description:
        "Build lending protocols, DEXs, yield farming, and staking platforms on blockchain.",
      icon: "💰",
      badge: "DeFi",
      pricing: "Custom",
      features: ["Liquidity Pools", "Yield Farming", "Staking", "Governance"],
      stats: { tvl: "$100M+", apy: "up to 50%", users: "50K+" },
      gradient: `linear-gradient(135deg, ${SLATE_BLUE}, ${CALM_MINT})`,
    },
    {
      category: "Web3",
      title: "NFT Marketplace",
      tagline: "Digital Ownership",
      description:
        "Launch your own NFT marketplace with minting, trading, and royalty management.",
      icon: "🎨",
      badge: "Web3",
      pricing: "From $2,499",
      features: ["Minting Engine", "Marketplace", "Royalties", "Multi-chain"],
      stats: { nfts: "100K+", volume: "$10M+", chains: "5+" },
      gradient: `linear-gradient(135deg, ${CALM_MINT}, ${DEEP_MIDNIGHT_BLUE})`,
    },
    {
      category: "Cloud",
      title: "Cloud Infrastructure",
      tagline: "Scale Infinitely",
      description:
        "Multi-cloud deployment, auto-scaling, and infrastructure as code for modern applications.",
      icon: "☁️",
      badge: "Pro Performance",
      pricing: "Pay as you go",
      features: ["Auto-Scaling", "Multi-Cloud", "IaC", "Cost Optimization"],
      stats: { uptime: "99.99%", speed: "10x", savings: "40%" },
      gradient: `linear-gradient(135deg, ${DEEP_MIDNIGHT_BLUE}, ${SLATE_BLUE})`,
    },
    {
      category: "Cloud",
      title: "Serverless Platform",
      tagline: "Zero Management",
      description:
        "Deploy functions, APIs, and microservices without managing servers or infrastructure.",
      icon: "⚡",
      badge: "Serverless",
      pricing: "From $99/mo",
      features: ["Functions", "APIs", "Event-Driven", "Global CDN"],
      stats: { latency: "<50ms", scale: "Unlimited", uptime: "99.9%" },
      gradient: `linear-gradient(135deg, ${SLATE_BLUE}, ${CALM_MINT})`,
    },
    {
      category: "DevOps",
      title: "CI/CD Pipeline Pro",
      tagline: "Ship Faster",
      description:
        "Automated testing, deployment, and monitoring with intelligent rollback and canary releases.",
      icon: "🚀",
      badge: "DevOps",
      pricing: "From $299/mo",
      features: ["Auto-Deploy", "Testing", "Rollback", "Monitoring"],
      stats: { deploys: "1000+/day", time: "5min", success: "99%" },
      gradient: `linear-gradient(135deg, ${CALM_MINT}, ${DEEP_MIDNIGHT_BLUE})`,
    },
    {
      category: "DevOps",
      title: "Container Orchestration",
      tagline: "Kubernetes Made Easy",
      description:
        "Managed Kubernetes with auto-scaling, service mesh, and built-in observability.",
      icon: "🎯",
      badge: "K8s",
      pricing: "From $499/mo",
      features: ["Auto-Scale", "Service Mesh", "Monitoring", "Security"],
      stats: { pods: "10K+", uptime: "99.9%", clusters: "100+" },
      gradient: `linear-gradient(135deg, ${DEEP_MIDNIGHT_BLUE}dd, ${SLATE_BLUE})`,
    },
    {
      category: "IoT",
      title: "IoT Platform",
      tagline: "Connected Everything",
      description:
        "Connect, manage, and analyze data from millions of IoT devices in real-time.",
      icon: "📡",
      badge: "IoT",
      pricing: "From $399/mo",
      features: [
        "Device Management",
        "Real-time Data",
        "Analytics",
        "Edge Computing",
      ],
      stats: { devices: "1M+", latency: "<100ms", uptime: "99.9%" },
      gradient: `linear-gradient(135deg, ${SLATE_BLUE}, ${CALM_MINT})`,
    },
    {
      category: "Security",
      title: "Security Suite",
      tagline: "Fort Knox Level",
      description:
        "Enterprise-grade security with threat detection, penetration testing, and compliance.",
      icon: "🛡️",
      badge: "Security",
      pricing: "Custom",
      features: [
        "Threat Detection",
        "Pen Testing",
        "Compliance",
        "Incident Response",
      ],
      stats: { threats: "99.9% blocked", scans: "24/7", compliance: "100%" },
      gradient: `linear-gradient(135deg, ${CALM_MINT}, ${DEEP_MIDNIGHT_BLUE})`,
    },
  ];

  const filteredSolutions =
    selectedCategory === "All"
      ? allSolutions
      : allSolutions.filter((s) => s.category === selectedCategory);

  return (
    <div
      className="min-h-screen transition-colors duration-700"
      style={{ backgroundColor: sectionBg }}
    >
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full filter blur-3xl opacity-20 animate-pulse"
          style={{
            background: `radial-gradient(circle, ${CALM_MINT}88, transparent)`,
            animationDuration: "8s",
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[700px] h-[700px] rounded-full filter blur-3xl opacity-20 animate-pulse"
          style={{
            background: `radial-gradient(circle, ${DEEP_MIDNIGHT_BLUE}66, ${SLATE_BLUE}44, transparent)`,
            animationDuration: "10s",
            animationDelay: "2s",
          }}
        />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: isDark
              ? `linear-gradient(${SLATE_BLUE} 1px, transparent 1px), linear-gradient(90deg, ${SLATE_BLUE} 1px, transparent 1px)`
              : `linear-gradient(${CALM_MINT} 1px, transparent 1px), linear-gradient(90deg, ${CALM_MINT} 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Header */}
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20 md:py-32">
            <div className="text-center">
              {/* Back Button */}
              <button 
                className="group mb-8 inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300"
                style={{
                  backgroundColor: isDark ? `${SLATE_BLUE}44` : `${CALM_MINT}44`,
                  color: textPrimary,
                  border: `2px solid ${isDark ? SLATE_BLUE : CALM_MINT}`
                }}
                onClick={() => window.history.back()}
              >
                <span className="transition-transform duration-300 group-hover:-translate-x-1">←</span>
                Back to Home
              </button>
              {/* Title */}
              {/* <div className="relative inline-block mb-6">
                <div 
                  className="absolute inset-0 filter blur-2xl opacity-50 animate-pulse"
                  style={{
                    background: `linear-gradient(135deg, ${DEEP_MIDNIGHT_BLUE}, ${CALM_MINT})`,
                    animationDuration: '4s'
                  }}
                />
                <h1 
                  className="relative text-5xl md:text-7xl font-black mb-4"
                  style={{ color: textPrimary }}
                >
                  All <span
                    className="text-transparent bg-clip-text"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${DEEP_MIDNIGHT_BLUE}, ${SLATE_BLUE}, ${CALM_MINT})`
                    }}
                  >Solutions</span>
                </h1>
              </div> */}
              <div className="relative flex justify-center mb-6">
                <div className="relative inline-block">
                  <div
                    className="absolute inset-0 filter blur-2xl opacity-50 animate-pulse"
                    style={{
                      background: `linear-gradient(135deg, ${DEEP_MIDNIGHT_BLUE}, ${CALM_MINT})`,
                      animationDuration: "4s",
                    }}
                  />
                  <h1
                    className="relative text-5xl md:text-7xl font-black mb-4"
                    style={{ color: textPrimary }}
                  >
                    All{" "}
                    <span
                      className="text-transparent bg-clip-text"
                      style={{
                        backgroundImage: `linear-gradient(135deg, ${DEEP_MIDNIGHT_BLUE}, ${SLATE_BLUE}, ${CALM_MINT})`,
                      }}
                    >
                      Solutions
                    </span>
                  </h1>
                </div>
              </div>

              <p
                className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
                style={{ color: textSecondary }}
              >
                Explore our complete suite of cutting-edge technology solutions
                designed to transform your business
              </p>

              {/* Stats Bar */}
              <div className="flex flex-wrap justify-center gap-8 mb-12">
                {[
                  { label: "Solutions", value: allSolutions.length },
                  { label: "Categories", value: categories.length - 1 },
                  { label: "Happy Clients", value: "2000+" },
                ].map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div
                      className="text-3xl md:text-4xl font-black mb-1"
                      style={{
                        color: DEEP_MIDNIGHT_BLUE,
                        textShadow: `0 0 20px ${CALM_MINT}88`,
                      }}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="text-sm font-medium"
                      style={{ color: textSecondary }}
                    >
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div
          className="sticky top-0 z-40 backdrop-blur-xl border-b"
          style={{
            backgroundColor: isDark ? `${sectionBg}ee` : `${sectionBg}ee`,
            borderColor: isDark ? SLATE_BLUE + "44" : CALM_MINT + "44",
          }}
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-8 py-6">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className="relative px-6 py-3 rounded-full font-bold transition-all duration-300 overflow-hidden group"
                  style={{
                    backgroundColor:
                      selectedCategory === cat
                        ? DEEP_MIDNIGHT_BLUE
                        : isDark
                        ? `${SLATE_BLUE}33`
                        : `${CALM_MINT}33`,
                    color:
                      selectedCategory === cat ? NEAR_WHITE : textSecondary,
                    border: `2px solid ${
                      selectedCategory === cat
                        ? DEEP_MIDNIGHT_BLUE
                        : "transparent"
                    }`,
                    transform:
                      selectedCategory === cat ? "scale(1.05)" : "scale(1)",
                    boxShadow:
                      selectedCategory === cat
                        ? `0 8px 24px -8px ${DEEP_MIDNIGHT_BLUE}`
                        : "none",
                  }}
                >
                  {selectedCategory === cat && (
                    <div
                      className="absolute inset-0 opacity-50"
                      style={{
                        background: `linear-gradient(135deg, ${CALM_MINT}44, transparent)`,
                        animation: "shimmer 2s infinite",
                      }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Solutions Grid */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSolutions.map((solution, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative"
                style={{
                  animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`,
                }}
              >
                {/* Glow Effect */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 filter blur-xl"
                  style={{ background: solution.gradient }}
                />

                {/* Card */}
                <div
                  className="relative h-full rounded-3xl p-8 transition-all duration-500 overflow-hidden"
                  style={{
                    backgroundColor: cardBg,
                    border: `2px solid ${
                      hoveredCard === index
                        ? "transparent"
                        : isDark
                        ? SLATE_BLUE + "44"
                        : CALM_MINT + "44"
                    }`,
                    transform:
                      hoveredCard === index
                        ? "translateY(-12px) scale(1.02)"
                        : "translateY(0) scale(1)",
                    boxShadow:
                      hoveredCard === index
                        ? `0 40px 80px -20px rgba(25, 24, 59, 0.4)`
                        : `0 10px 30px -10px rgba(25, 24, 59, 0.2)`,
                  }}
                >
                  {/* Gradient Border on Hover */}
                  {hoveredCard === index && (
                    <div
                      className="absolute inset-0 rounded-3xl p-[2px]"
                      style={{ background: solution.gradient }}
                    >
                      <div
                        className="w-full h-full rounded-3xl"
                        style={{ backgroundColor: cardBg }}
                      />
                    </div>
                  )}

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className="text-5xl transition-all duration-500"
                        style={{
                          transform:
                            hoveredCard === index
                              ? "scale(1.2) rotate(10deg)"
                              : "scale(1)",
                          filter:
                            hoveredCard === index
                              ? `drop-shadow(0 0 20px ${CALM_MINT})`
                              : "none",
                        }}
                      >
                        {solution.icon}
                      </div>

                      <div className="relative">
                        <div
                          className="absolute inset-0 rounded-full filter blur opacity-60"
                          style={{ background: solution.gradient }}
                        />
                        <span
                          className="relative block text-xs font-bold px-3 py-1.5 rounded-full text-white uppercase"
                          style={{ background: solution.gradient }}
                        >
                          {solution.badge}
                        </span>
                      </div>
                    </div>

                    {/* Category */}
                    <div
                      className="text-xs font-bold uppercase tracking-wider mb-2"
                      style={{ color: SLATE_BLUE }}
                    >
                      {solution.category}
                    </div>

                    {/* Title & Tagline */}
                    <h3
                      className="text-2xl font-black mb-2"
                      style={{ color: textPrimary }}
                    >
                      {solution.title}
                    </h3>
                    <p
                      className="text-sm font-semibold mb-4"
                      style={{
                        color:
                          hoveredCard === index ? "transparent" : textSecondary,
                        backgroundImage:
                          hoveredCard === index ? solution.gradient : "none",
                        backgroundClip:
                          hoveredCard === index ? "text" : "unset",
                        WebkitBackgroundClip:
                          hoveredCard === index ? "text" : "unset",
                      }}
                    >
                      {solution.tagline}
                    </p>

                    {/* Description */}
                    <p
                      className="text-sm leading-relaxed mb-6"
                      style={{ color: textSecondary }}
                    >
                      {solution.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {solution.features.map((feature, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-center gap-2"
                          style={{
                            opacity: hoveredCard === index ? 1 : 0.7,
                            transform:
                              hoveredCard === index
                                ? "translateX(4px)"
                                : "translateX(0)",
                            transition: `all 0.3s ease ${fIdx * 50}ms`,
                          }}
                        >
                          <div
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: DEEP_MIDNIGHT_BLUE }}
                          />
                          <span
                            className="text-xs font-medium"
                            style={{ color: textSecondary }}
                          >
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {Object.entries(solution.stats).map(
                        ([key, value], sIdx) => (
                          <div
                            key={sIdx}
                            className="px-3 py-1.5 rounded-lg text-xs font-bold"
                            style={{
                              backgroundColor: isDark
                                ? `${SLATE_BLUE}33`
                                : `${CALM_MINT}33`,
                              color: textPrimary,
                            }}
                          >
                            {value}
                          </div>
                        )
                      )}
                    </div>

                    {/* Pricing & CTA */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div
                          className="text-xs font-medium mb-1"
                          style={{ color: textSecondary }}
                        >
                          Pricing
                        </div>
                        <div
                          className="text-lg font-black"
                          style={{ color: textPrimary }}
                        >
                          {solution.pricing}
                        </div>
                      </div>
                      <button
                        className="group/btn px-6 py-3 rounded-full font-bold text-white transition-all duration-300"
                        style={{ background: solution.gradient }}
                      >
                        <span className="flex items-center gap-2">
                          Learn More
                          <span className="transition-transform duration-300 group-hover/btn:translate-x-1">
                            →
                          </span>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
          <div
            className="relative rounded-3xl p-12 md:p-20 text-center overflow-hidden"
            style={{
              background: `linear-gradient(135deg, ${DEEP_MIDNIGHT_BLUE}, ${SLATE_BLUE})`,
            }}
          >
            {/* Animated Background Pattern */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle, ${CALM_MINT} 1px, transparent 1px)`,
                backgroundSize: "30px 30px",
                animation: "drift 20s linear infinite",
              }}
            />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Can't Find What You Need?
              </h2>
              <p className="text-xl mb-8" style={{ color: CALM_MINT }}>
                We create custom solutions tailored to your unique requirements
              </p>
              <button
                className="group inline-flex items-center gap-3 px-10 py-5 rounded-full font-bold transition-all duration-300"
                style={{
                  backgroundColor: NEAR_WHITE,
                  color: DEEP_MIDNIGHT_BLUE,
                  boxShadow: `0 20px 40px -10px ${DEEP_MIDNIGHT_BLUE}`,
                }}
              >
                Request Custom Solution
                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
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
      `}</style>
    </div>
  );
};

export default AllSolutions;
