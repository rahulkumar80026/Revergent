import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  TrendingUp, Target, MousePointer2, Megaphone, BarChart3, 
  Share2, Search, Mail, PieChart, Zap, Globe, 
  ChevronRight, Users, MessageSquare, Rocket
} from "lucide-react";

export default function DigitalMarketing() {
  const [activeStep, setActiveStep] = useState(0);

  const capabilities = [
    {
      icon: <Target />,
      title: "Performance Marketing",
      desc: "Data-driven ad campaigns across Google, Meta, and LinkedIn designed for maximum ROI and lead generation.",
    },
    {
      icon: <Search />,
      title: "Enterprise SEO",
      desc: "Dominating search rankings through technical optimization, content strategy, and high-authority backlink profiles.",
    },
    {
      icon: <Megaphone />,
      title: "Social Strategy",
      desc: "Building brand equity through organic storytelling and community management across global social platforms.",
    },
    {
      icon: <Mail />,
      title: "Lifecycle Marketing",
      desc: "Automated email and SMS funnels that nurture leads and turn one-time buyers into lifelong brand advocates.",
    },
    {
      icon: <BarChart3 />,
      title: "Conversion (CRO)",
      desc: "Scientific A/B testing and heatmapping to ensure every visitor on your site has the highest chance of converting.",
    },
    {
      icon: <PieChart />,
      title: "Marketing Analytics",
      desc: "Custom attribution models and dashboards that track the exact journey from first click to final sale.",
    },
  ];

  const marketingSteps = [
    {
      num: "01",
      title: "Market Audit",
      icon: <Search size={20} />,
      desc: "Analyzing competitor landscape, keyword gaps, and your current conversion tracking infrastructure.",
    },
    {
      num: "02",
      title: "Funnel Strategy",
      icon: <Target size={20} />,
      desc: "Mapping the customer journey from awareness to intent, ensuring no touchpoint is left unoptimized.",
    },
    {
      num: "03",
      title: "Creative Engine",
      icon: <Zap size={20} />,
      desc: "Developing high-impact visual assets and persuasive copy that resonates with your specific target personas.",
    },
    {
      num: "04",
      title: "Campaign Launch",
      icon: <Rocket size={20} />,
      desc: "Deploying multi-channel campaigns with granular audience targeting and real-time budget management.",
    },
    {
      num: "05",
      title: "Optimization",
      icon: <TrendingUp size={20} />,
      desc: "Continuous A/B testing of creatives and landing pages to lower Customer Acquisition Cost (CAC) over time.",
    },
    {
      num: "06",
      title: "Scale & Report",
      icon: <BarChart3 size={20} />,
      desc: "Increasing spend on winning channels and providing transparent, ROI-focused monthly performance reports.",
    },
  ];

  const techStack = [
    {
      label: "Ad Platforms",
      icon: <Megaphone className="text-[#2cc5d5]" size={24} />,
      tools: ["Google Ads", "Meta Ads", "LinkedIn Ads", "TikTok Ads", "Amazon Advertising"]
    },
    {
      label: "Analytics & Data",
      icon: <BarChart3 className="text-[#2cc5d5]" size={24} />,
      tools: ["Google Analytics 4", "Hotjar", "Mixpanel", "HubSpot", "Segment"]
    },
    {
      label: "Marketing Tech",
      icon: <Zap className="text-[#2cc5d5]" size={24} />,
      tools: ["Klaviyo", "Salesforce", "SEMrush", "Zapier", "Mailchimp"]
    }
  ];

  return (
    <div className="bg-[#f8fafc] text-[#021D59]">
      
      {/* --- HERO SECTION --- */}
      <section className="py-18 px-6">
        <div className="custom-container mx-auto">
          <div className="relative rounded-[32px] overflow-hidden shadow-2xl bg-[#021D59] min-h-[420px] flex items-center">
            {/* Visual Marketing Pattern */}
            <div className="absolute inset-0 opacity-10" 
              style={{ 
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232cc5d5' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` 
              }}>
            </div>
            
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070" 
              className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-screen"
              alt="Digital Growth"
            />
            
            <div className="relative z-10 w-full flex flex-col items-center justify-center text-center text-white px-6">
              {/* <motion.div 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                className="px-4 py-1 border border-[#2cc5d5]/40 rounded-full bg-[#2cc5d5]/10 text-[#2cc5d5] text-[10px] font-bold uppercase tracking-[0.5em] mb-8"
              >
                Growth-Driven Methodology
              </motion.div> */}
              
              <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight">
                Scale Your <span className="text-[#2cc5d5]">Impact.</span>
              </h1>

              <p className="max-w-2xl text-blue-100/80 text-lg md:text-xl font-light mb-10 leading-relaxed">
                We combine creative storytelling with rigorous data science to 
                acquire, engage, and retain your most valuable customers.
              </p>

              {/* <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-[#2cc5d5] text-[#021D59] px-10 py-5 rounded-xl font-bold hover:bg-white transition-all shadow-xl shadow-[#2cc5d5]/20">
                  Grow My Brand
                </button>
                <button className="bg-white/10 backdrop-blur-md border border-white/20 px-10 py-5 rounded-xl font-bold hover:bg-white/20 transition-all">
                  View Case Studies
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* --- GROWTH STATS (NEW FOR MARKETING) --- */}
      <section className="py-12 bg-[#021D59]">
        <div className="custom-container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Ad Spend Managed", value: "$0.5M+" },
              { label: "Avg. ROAS", value: "4.8x" },
              { label: "Leads Generated", value: "1M+" },
              { label: "Growth Rate", value: "10%" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-[#2cc5d5] text-3xl md:text-4xl font-black mb-1">{stat.value}</div>
                <div className="text-blue-100/50 text-xs font-bold uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CAPABILITIES GRID --- */}
      <section className="py-24 px-6">
        <div className="custom-container mx-auto">
          <div className="mb-20 text-center md:text-left">
            <h2 className="text-4xl font-bold mb-4 border-l-4 border-[#2cc5d5] pl-6 uppercase tracking-wider">Growth Solutions</h2>
            <p className="text-gray-500 max-w-xl pl-10 text-lg">Hyper-targeted marketing for businesses that demand measurable results.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0 border border-gray-100 overflow-hidden">
            {capabilities.map((s, i) => (
              <div key={i} className="p-12 bg-white border border-gray-50 hover:bg-[#021D59] group transition-all duration-500">
                <div className="text-[#2cc5d5] mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all">
                  {React.cloneElement(s.icon, { size: 40, strokeWidth: 1.5 })}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">{s.title}</h3>
                <p className="text-gray-500 group-hover:text-blue-100/70 transition-colors leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MARKETING WORKFLOW --- */}
      <section className="py-24 bg-[#f1f5f9] relative">
        <div className="custom-container mx-auto px-6 lg:px-0">
          <div className="flex flex-col md:flex-row gap-20 items-start">
            
            <div className="w-full md:w-1/3 sticky top-32">
              <h2 className="text-4xl font-bold mb-8 text-[#021D59]">The Growth <br/><span className="text-[#2cc5d5]">Loop</span></h2>
              <div className="space-y-3">
                {marketingSteps.map((step, i) => (
                  <button key={i} onClick={() => setActiveStep(i)}
                    className={`w-full flex items-center justify-between p-5 rounded-xl transition-all ${activeStep === i ? 'bg-[#021D59] text-white shadow-xl translate-x-4' : 'bg-white/50 text-gray-500 hover:bg-white'}`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`font-mono text-sm ${activeStep === i ? 'text-[#2cc5d5]' : 'text-gray-300'}`}>{step.num}</span>
                      <span className="font-bold uppercase tracking-tight text-sm italic">{step.title}</span>
                    </div>
                    <ChevronRight size={16} className={activeStep === i ? 'opacity-100' : 'opacity-0'} />
                  </button>
                ))}
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <div className="bg-[#021D59] rounded-[32px] p-10 md:p-20 text-white relative overflow-hidden shadow-2xl min-h-[500px] flex flex-col justify-center">
                <motion.div key={activeStep} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                  <div className="w-16 h-16 bg-[#2cc5d5]/10 border border-[#2cc5d5]/30 rounded-2xl flex items-center justify-center text-[#2cc5d5] mb-10">
                    {marketingSteps[activeStep].icon}
                  </div>
                  <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">{marketingSteps[activeStep].title}</h3>
                  <p className="text-xl md:text-2xl text-blue-100/70 leading-relaxed mb-12 font-light">{marketingSteps[activeStep].desc}</p>
                  
                  <div className="grid grid-cols-2 gap-8 pt-10 border-t border-white/10">
                    <div>
                      <h4 className="text-[#2cc5d5] text-[10px] font-bold uppercase tracking-[0.2em] mb-2">Key Metric</h4>
                      <p className="text-sm font-medium">ROI Optimization</p>
                    </div>
                    <div>
                      <h4 className="text-[#2cc5d5] text-[10px] font-bold uppercase tracking-[0.2em] mb-2">Output</h4>
                      <p className="text-sm font-medium">Performance Dashboard</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- STANDARDIZED TECH STACK --- */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2cc5d5]/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="custom-container mx-auto px-6 text-center">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-[#021D59] mb-4">The <span className="text-[#2cc5d5]">Marketing</span> Stack</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">We use best-in-class analytics and advertising technology to give your brand a technical edge.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {techStack.map((item, idx) => (
              <motion.div key={idx} whileHover={{ y: -5 }} className="relative p-8 rounded-[24px] bg-[#f8fafc] border border-gray-100 hover:border-[#2cc5d5]/30 hover:shadow-2xl hover:shadow-[#2cc5d5]/10 transition-all duration-500 group">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:bg-[#021D59] group-hover:text-[#2cc5d5] transition-all">
                     {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#021D59] uppercase tracking-wider">{item.label}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.tools.map((tool, i) => (
                    <span key={i} className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-semibold text-gray-600 hover:text-[#2cc5d5] hover:border-[#2cc5d5] transition-all cursor-default">{tool}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-100 pt-12">
            {[
              { label: "Transparency", value: "Real-time Reporting", icon: <BarChart3 size={18}/> },
              { label: "Reach", value: "Global Channels", icon: <Globe size={18}/> },
              { label: "Targeting", value: "AI Audience Sync", icon: <Users size={18}/> },
              { label: "Strategy", value: "Omnichannel", icon: <Share2 size={18}/> }
            ].map((f, i) => (
              <div key={i} className="flex flex-col items-center text-center md:text-left md:items-start">
                <div className="text-[#2cc5d5] mb-2">{f.icon}</div>
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{f.label}</span>
                <span className="text-[#021D59] font-bold">{f.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CTA --- */}
      <section className="py-24 px-6 bg-[#021D59] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 italic">Ready to outgrow your competition?</h2>
          <p className="text-xl text-blue-100/60 mb-12 max-w-2xl mx-auto">Stop guessing. Start growing. Let our performance marketing team build your data-driven growth engine.</p>
          <button className="bg-[#2cc5d5] text-[#021D59] px-12 py-6 rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-2xl shadow-[#2cc5d5]/20">
            Get My Free Audit
          </button>
        </div>
      </section>
    </div>
  );
}