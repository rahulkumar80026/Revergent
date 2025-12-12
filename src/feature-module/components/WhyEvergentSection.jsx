import React from "react";

const WhyEvergentSection = () => {
  return (
    <section className="relative w-full bg-white pt-24 pb-40 overflow-hidden">
      {/* MAIN PARAGRAPH */}
      <div className="max-w-[900px] mx-auto text-center px-6 mb-24">
        <p className="text-[#021D59] text-[24px] leading-[34px] font-normal">
          Revergent Technologies helps businesses grow with solutions that adapt
          as their needs evolve. Whether you’re improving workflows, reducing
          operational complexity, or building new digital capabilities, our
          customizable platforms and engineering expertise support you at every
          step.
        </p>
      </div>

      {/* LEFT DECOR SHAPES */}
      <div className="absolute left-[12%] top-[38%] hidden md:block opacity-60">
        <div className="w-[140px] h-[140px] border-[3px] border-dashed border-[#bfc9ff] rounded-2xl rotate-[8deg]"></div>
      </div>

      <div className="absolute left-[20%] top-[50%] hidden md:block opacity-40">
        <div className="w-[55px] h-[55px] bg-[#e8f5ff] rounded-md rotate-12"></div>
      </div>

      {/* RIGHT DECOR SHAPE */}
      <div className="absolute right-[14%] top-[24%] hidden md:block opacity-50">
        <div className="w-[150px] h-[150px] border-[3px] border-[#c9b5ff] rounded-3xl"></div>
      </div>

      <div className="absolute right-[22%] top-[53%] hidden md:block opacity-40">
        <div className="w-[55px] h-[55px] border-[2px] border-dashed border-[#d0d0e7] rotate-12 rounded-md"></div>
      </div>

      {/* LEFT MULTI-COLOR HEXAGON STACK */}
      <div className="absolute left-[14%] bottom-[20%] hidden md:flex flex-col items-center gap-4">
        <div className="w-[110px] h-[110px] bg-[#7c5dfb] rounded-2xl rotate-[15deg]"></div>
        <div className="w-[90px] h-[90px] bg-[#4fa2ff] rounded-2xl rotate-[12deg]"></div>
        <div className="w-[70px] h-[70px] bg-[#66cfff] rounded-2xl rotate-[8deg]"></div>
      </div>

      {/* TESTIMONIAL CONTAINER */}
      <div className="max-w-[800px] mx-auto px-6">
        {/* QUOTE BOX */}
        <div className="bg-white shadow-none">
          {/* QUOTE ICON */}
          <div className="text-[#8ca3c9] text-[50px] mb-4 leading-none">“</div>

          {/* QUOTE TEXT */}
          <p className="text-[#021D59] text-[18px] leading-[28px] mb-6">
            “In the past few years, we’ve scaled faster than ever. Revergent
            played a key role in helping us modernize our systems, streamline
            critical operations, and launch new features without disrupting our
            users. Their team understood our challenges deeply and delivered
            solutions that performed from day one.”
          </p>

          {/* PRODUCT + INDUSTRY ROW */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <p className="text-[#6f7ca9] text-[14px]">Products Used</p>
              <p className="text-[#021D59] text-[15px] font-medium">
                Custom Software Development | AI Automation Suite
              </p>
            </div>

            <div>
              <p className="text-[#6f7ca9] text-[14px]">Industry</p>
              <p className="text-[#021D59] text-[15px] font-medium">
                Digital Media & Technology
              </p>
            </div>
          </div>

          {/* LOGO + AUTHOR NAME */}
          <div className="flex items-center gap-4 mb-10">
            <img
              src="https://logos-world.net/wp-content/uploads/2025/02/OneStream-Symbol.png"
              alt="logo"
              className="h-10 object-contain"
            />
            <p className="text-[#021D59] text-[15px] font-medium">
              Amit Verma, Head of Technology, StreamOne Media
            </p>
          </div>

          {/* ARROWS (Navigation) */}
          <div className="flex items-center justify-center gap-8 text-[#001d5c] text-[26px] cursor-pointer">
            <span className="hover:opacity-60 transition">&larr;</span>
            <span className="hover:opacity-60 transition">&rarr;</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyEvergentSection;
