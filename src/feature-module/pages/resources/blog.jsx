// import { useState } from "react";

// const resources = [
//   {
//     id: 1,
//     title: "Building Scalable Digital Platforms for the Future",
//     date: "Jan 14, 2026",
//     image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
//   },
//   {
//     id: 2,
//     title: "The Future of Enterprise Software in a Digital World",
//     date: "Jan 12, 2026",
//     image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
//   },
// ];

// export default function Blog() {
//   const [visible, setVisible] = useState(4);

//   const loadMore = () => {
//     setVisible((prev) => prev + 2);
//   };

//   return (
//     <div className="pt-18 bg-[#f7f9fc] min-h-screen">
//       {/* Banner */}
//       <section className="px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="relative rounded-[28px] overflow-hidden shadow-lg">
//             <img
//               src="/assets/img/resources-desctop.png"
//               className="w-full h-[390px] object-cover bg-[#021D59]"
//             />

//             <div className="absolute inset-0 flex items-center justify-center">
//               <h1 className="text-white text-[60px] font-light tracking-wide">
//                 Blog
//               </h1>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Category Tabs */}

//       <section className="mt-10 px-6">
//         <div className="max-w-6xl mx-auto flex flex-wrap gap-4 justify-center">
//           {[
//             "All",
//             "eBooks",
//             "Videos",
//             "Whitepapers",
//             "Case Studies",
//             "Datasheets",
//             "Solution Briefs",
//             "Blog",
//           ].map((item, i) => (
//             <button
//               key={i}
//               className={`px-5 py-2 rounded-full text-sm border transition
//               ${
//                 item === "Blog"
//                   ? "bg-[#0b1d4d] text-white"
//                   : "bg-white text-gray-600 hover:bg-gray-100"
//               }`}
//             >
//               {item}
//             </button>
//           ))}
//         </div>
//       </section>

//       {/* Sort */}

//       <div className="max-w-6xl mx-auto mt-10 px-6 flex justify-end">
//         <button className="flex items-center gap-2 text-[#0b1d4d] font-medium">
//           ↕ Sort
//         </button>
//       </div>

//       {/* Blog Grid */}

//       <section className="py-12 px-6">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
//           {resources.slice(0, visible).map((post) => (
//             <div
//               key={post.id}
//               className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-5 flex gap-5 hover:-translate-y-1"
//             >
//               <div className="relative w-[130px] flex-shrink-0">
//                 <span className="absolute top-2 left-2 bg-[#e6f7fb] text-[#2cc5d5] text-xs px-2 py-1 rounded">
//                   Blog
//                 </span>

//                 <img
//                   src={post.image}
//                   className="rounded-xl w-full h-[160px] object-cover"
//                 />
//               </div>

//               <div className="flex flex-col justify-between">
//                 <h3 className="text-[#0b1d4d] font-semibold text-lg leading-snug hover:text-[#2cc5d5] cursor-pointer">
//                   {post.title}
//                 </h3>

//                 <p className="text-gray-400 text-sm mt-4">
//                   Posted on {post.date} in Blog
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Load More */}

//       {visible < resources.length && (
//         <div className="text-center pb-20">
//           <button
//             onClick={loadMore}
//             className="bg-[#0b1d4d] text-white px-8 py-3 rounded-xl hover:scale-105 transition"
//           >
//             Show me more
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  Calendar,
  Clock,
  ArrowUpRight,
  ChevronRight,
  Tag,
  BookOpen,
  Share2,
} from "lucide-react";

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "AI & Insights",
    "Engineering",
    "Digital Growth",
    "Cloud",
  ];

  const posts = [
    {
      title: "How Generative AI is Rewiring Enterprise Workflows",
      excerpt:
        "Beyond the hype: A practical guide to integrating LLMs into your existing business architecture safely.",
      author: "Sarah Chen",
      date: "March 5, 2026",
      readTime: "8 min read",
      category: "AI & Insights",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
      featured: true,
    },
    {
      title: "Moving Beyond Microservices: The Case for Moduliths",
      excerpt:
        "Why some of the world's biggest tech teams are reconsidering their distributed systems strategy in 2026.",
      author: "Alex Rivera",
      date: "Feb 28, 2026",
      readTime: "12 min read",
      category: "Engineering",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "The Death of Third-Party Cookies: What Now?",
      excerpt:
        "How to build a robust first-party data strategy that preserves user privacy while driving high-intent growth.",
      author: "David Miller",
      date: "Feb 20, 2026",
      readTime: "6 min read",
      category: "Digital Growth",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Serverless vs Kubernetes: Choosing Your Scale",
      excerpt:
        "A technical comparison of orchestration layers for startups vs established enterprises.",
      author: "Priya Sharma",
      date: "Feb 15, 2026",
      readTime: "10 min read",
      category: "Cloud",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    },
  ];

  const filteredPosts =
    activeCategory === "All"
      ? posts
      : posts.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-[#f8fafc] min-h-screen text-[#021D59]">
      {/* --- BLOG HERO (FEATURED POST) --- */}
      <section className="pt-24 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
              The <span className="text-[#2cc5d5]">Revergent</span> Journal.
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl">
              Expert perspectives on the intersection of engineering, design,
              and business growth.
            </p>
          </div>

          {/* Featured Post Card */}
          {posts
            .filter((p) => p.featured)
            .map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative group rounded-[40px] overflow-hidden bg-[#021D59] flex flex-col lg:flex-row shadow-2xl"
              >
                <div className="lg:w-1/2 h-[400px] lg:h-auto overflow-hidden">
                  <img
                    src={post.image}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                    alt={post.title}
                  />
                </div>
                <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center text-white">
                  <span className="text-[#2cc5d5] text-xs font-bold uppercase tracking-[0.3em] mb-6 inline-block">
                    Featured Insight
                  </span>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight group-hover:text-[#2cc5d5] transition-colors cursor-pointer">
                    {post.title}
                  </h2>
                  <p className="text-blue-100/60 text-lg mb-8 font-light line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-6 mb-10 text-sm text-blue-100/40 font-medium">
                    <span className="flex items-center gap-2">
                      <Calendar size={14} /> {post.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock size={14} /> {post.readTime}
                    </span>
                  </div>
                  <button className="flex items-center gap-3 text-white font-bold group/btn">
                    Read Full Article{" "}
                    <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover/btn:bg-[#2cc5d5] group-hover/btn:border-[#2cc5d5] transition-all">
                      <ArrowUpRight size={18} />
                    </div>
                  </button>
                </div>
              </motion.div>
            ))}
        </div>
      </section>

      {/* --- CATEGORY NAV & SEARCH --- */}
      <section className="sticky top-20 z-40 bg-[#f8fafc]/90 backdrop-blur-md border-y border-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeCategory === cat ? "bg-[#021D59] text-white shadow-lg" : "bg-white text-gray-500 border border-gray-200 hover:border-[#2cc5d5]"}`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-72">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white border border-gray-100 focus:border-[#2cc5d5] outline-none text-sm transition-all shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* --- BLOG GRID --- */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredPosts
              .filter((p) => !p.featured)
              .map((post, idx) => (
                <motion.article
                  key={idx}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="group flex flex-col bg-white rounded-[32px] overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={post.image}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      alt={post.title}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-1 bg-white/95 backdrop-blur-md rounded-lg text-[10px] font-black text-[#021D59] uppercase shadow-sm">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 bg-gray-200 rounded-full"></span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-[#2cc5d5] transition-colors line-clamp-2 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-gray-500 text-sm font-light mb-8 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                      <span className="text-xs font-bold text-[#021D59]">
                        By {post.author}
                      </span>
                      <div className="flex items-center gap-2 text-[#2cc5d5] font-bold text-xs uppercase group-hover:translate-x-1 transition-transform">
                        Read More <ChevronRight size={14} />
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
          </div>
        </div>
      </section>

      {/* --- NEWSLETTER SECTION --- */}
      <section className="py-24 px-6 bg-[#021D59] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#2cc5d5]/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="w-16 h-16 bg-[#2cc5d5]/10 border border-[#2cc5d5]/30 rounded-2xl flex items-center justify-center text-[#2cc5d5] mx-auto mb-8">
            <BookOpen size={30} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 italic">
            Inbox full of insights.
          </h2>
          <p className="text-blue-100/60 text-lg mb-10 max-w-xl mx-auto font-light">
            Join 5,000+ technology leaders who receive our bi-weekly deep dives
            into the future of business engineering.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Your work email"
              className="flex-1 px-8 py-5 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-[#2cc5d5] transition-all"
            />
            <button className="bg-[#2cc5d5] text-[#021D59] px-10 py-5 rounded-2xl font-black hover:bg-white transition-all shadow-xl shadow-[#2cc5d5]/20">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
