import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FileText, Download, Lock, ArrowRight, Search, 
  BookOpen, Cpu, Globe, Zap 
} from "lucide-react";

export default function Whitepapers() {
  const [searchTerm, setSearchTerm] = useState("");

  const papers = [
    {
      title: "The 2026 Enterprise AI Roadmap",
      category: "Artificial Intelligence",
      pages: "24 Pages",
      date: "March 2026",
      desc: "A comprehensive guide for CTOs to implement generative AI and LLMs within secure enterprise architectures.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      highlight: "Includes ROI Framework"
    },
    {
      title: "Zero-Trust Cloud Security",
      category: "Cloud & DevOps",
      pages: "18 Pages",
      date: "Feb 2026",
      desc: "Strategies for securing multi-cloud environments against evolving cyber threats using automated IAM policies.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800",
      highlight: "SOC2 Compliance focus"
    },
    {
      title: "The Future of Mobile Fintech",
      category: "Mobile Engineering",
      pages: "32 Pages",
      date: "Jan 2026",
      desc: "Deep dive into biometrics, blockchain integration, and high-velocity transaction handling in modern neo-banking.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
      highlight: "User Growth Analysis"
    },
    {
      title: "Scaling ERP with Microservices",
      category: "Enterprise Systems",
      pages: "15 Pages",
      date: "Dec 2025",
      desc: "How to decouple legacy monolithic systems into scalable, cloud-native microservices without operational downtime.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      highlight: "Case Study Included"
    }
  ];

  const filteredPapers = papers.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#f8fafc] min-h-screen text-[#021D59]">
      
      {/* --- PREMIUM HERO --- */}
      <section className="pt-24 pb-16 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-5 pointer-events-none">
           <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(#021D59 1px, transparent 1px)`, backgroundSize: '40px 40px' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          {/* <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-1 border border-[#2cc5d5]/30 rounded-full bg-[#2cc5d5]/5 text-[#2cc5d5] text-[10px] font-bold uppercase tracking-[0.4em] mb-8"
          >
            <BookOpen size={12} /> Knowledge Hub
          </motion.div> */}
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter italic">
            Strategic <span className="text-[#2cc5d5]">Insights.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-500 text-lg md:text-xl font-light leading-relaxed">
            Download our research-backed whitepapers on emerging technologies 
            and digital transformation strategies.
          </p>

          {/* --- SEARCH BAR --- */}
          <div className="mt-12 max-w-xl mx-auto relative group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#2cc5d5] transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="Search by topic or technology..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-16 pr-8 py-5 rounded-2xl bg-white shadow-xl shadow-gray-200/50 border border-transparent focus:border-[#2cc5d5] outline-none transition-all font-medium"
            />
          </div>
        </div>
      </section>

      {/* --- WHITEPAPER GRID --- */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredPapers.map((paper, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="group relative bg-white rounded-[32px] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 flex flex-col md:flex-row"
              >
                {/* Visual Cover */}
                <div className="w-full md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                  <img 
                    src={paper.image} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    alt={paper.title} 
                  />
                  <div className="absolute inset-0 bg-[#021D59]/40 group-hover:bg-[#021D59]/20 transition-colors"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-lg text-[10px] font-black text-[#021D59] uppercase">
                      {paper.category}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="w-full md:w-3/5 p-8 flex flex-col justify-between bg-white">
                  <div>
                    <div className="flex items-center gap-3 text-gray-400 text-[10px] font-bold uppercase tracking-widest mb-4">
                      <span>{paper.date}</span>
                      <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                      <span>{paper.pages}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-[#2cc5d5] transition-colors">{paper.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 font-light">
                      {paper.desc}
                    </p>
                    <div className="inline-flex items-center gap-2 text-[#2cc5d5] text-[10px] font-bold uppercase mb-8">
                      <Zap size={14} /> {paper.highlight}
                    </div>
                  </div>

                  <button className="flex items-center justify-between w-full p-4 bg-[#f8fafc] group-hover:bg-[#021D59] rounded-xl transition-all group/btn">
                    <span className="font-bold text-sm group-hover:text-white transition-colors flex items-center gap-2">
                      <Download size={16} /> Download Paper
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-[#021D59] group-hover/btn:translate-x-1 transition-transform">
                      <ArrowRight size={16} />
                    </div>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- NEWSLETTER CAPTURE --- */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-[#021D59] rounded-[40px] p-12 md:p-20 text-center text-white relative overflow-hidden">
          <div className="absolute bottom-0 right-0 p-10 opacity-10">
            <FileText size={200} />
          </div>
          
          <h2 className="text-4xl font-bold mb-6">Stay ahead of the curve.</h2>
          <p className="text-blue-100/60 mb-10 max-w-xl mx-auto">Get notified whenever we release a new technical deep-dive or industry report.</p>
          
          <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto relative z-10">
            <input 
              type="email" 
              placeholder="Enter your work email" 
              className="flex-1 px-8 py-5 rounded-2xl bg-white/10 border border-white/20 outline-none focus:border-[#2cc5d5] transition-all"
            />
            <button className="bg-[#2cc5d5] text-[#021D59] px-8 py-5 rounded-2xl font-bold hover:bg-white transition-all whitespace-nowrap">
              Join the Vault
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}