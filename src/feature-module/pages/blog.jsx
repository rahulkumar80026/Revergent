import { useState } from "react";

const resources = [
  {
    id: 1,
    title: "Building Scalable Digital Platforms for the Future",
    date: "Jan 14, 2026",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  },
  {
    id: 2,
    title: "The Future of Enterprise Software in a Digital World",
    date: "Jan 12, 2026",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  },
];

export default function Blog() {
  const [visible, setVisible] = useState(4);

  const loadMore = () => {
    setVisible((prev) => prev + 2);
  };

  return (
    <div className="pt-18 bg-[#f7f9fc] min-h-screen">
      {/* Banner */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[28px] overflow-hidden shadow-lg">
            <img
              src="/assets/img/resources-desctop.png"
              className="w-full h-[390px] object-cover bg-[#021D59]"
            />

            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="text-white text-[60px] font-light tracking-wide">
                Blog
              </h1>
            </div>
          </div>
        </div>
      </section>
      {/* Category Tabs */}

      <section className="mt-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-4 justify-center">
          {[
            "All",
            "eBooks",
            "Videos",
            "Whitepapers",
            "Case Studies",
            "Datasheets",
            "Solution Briefs",
            "Blog",
          ].map((item, i) => (
            <button
              key={i}
              className={`px-5 py-2 rounded-full text-sm border transition
              ${
                item === "Blog"
                  ? "bg-[#0b1d4d] text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      {/* Sort */}

      <div className="max-w-6xl mx-auto mt-10 px-6 flex justify-end">
        <button className="flex items-center gap-2 text-[#0b1d4d] font-medium">
          ↕ Sort
        </button>
      </div>

      {/* Blog Grid */}

      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {resources.slice(0, visible).map((post) => (
            <div
              key={post.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-5 flex gap-5 hover:-translate-y-1"
            >
              <div className="relative w-[130px] flex-shrink-0">
                <span className="absolute top-2 left-2 bg-[#e6f7fb] text-[#2cc5d5] text-xs px-2 py-1 rounded">
                  Blog
                </span>

                <img
                  src={post.image}
                  className="rounded-xl w-full h-[160px] object-cover"
                />
              </div>

              <div className="flex flex-col justify-between">
                <h3 className="text-[#0b1d4d] font-semibold text-lg leading-snug hover:text-[#2cc5d5] cursor-pointer">
                  {post.title}
                </h3>

                <p className="text-gray-400 text-sm mt-4">
                  Posted on {post.date} in Blog
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Load More */}

      {visible < resources.length && (
        <div className="text-center pb-20">
          <button
            onClick={loadMore}
            className="bg-[#0b1d4d] text-white px-8 py-3 rounded-xl hover:scale-105 transition"
          >
            Show me more
          </button>
        </div>
      )}
    </div>
  );
}
