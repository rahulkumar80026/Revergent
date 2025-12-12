import React from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden min-h-[530px] flex items-center justify-center bg-[#7584F4]">
      {/* Floating Animations */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }
        @keyframes float2 {
          0% { transform: translateY(0px); }
          50% { transform: translateY(14px); }
          100% { transform: translateY(0px); }
        }
        .float { animation: float 6s ease-in-out infinite; }
        .float2 { animation: float2 7s ease-in-out infinite; }
      `}</style>

      {/* BIG NAVY BLOB */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div
          className="absolute"
          style={{
            width: "110%",
            height: "135%",
            borderRadius: "35% 65% 60% 40% / 45% 30% 70% 55%",
            top: "52%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        {/* BACKGROUND SVG CONTROLLED HEIGHT */}
        <div className="absolute h-full overflow-hidden">
          <img
            src="https://evergent.com/wp-content/uploads/revslider/homepage-main-1-1-11072025/colored-bg.svg"
            alt=""
            className="object-cover object-top"
          />
        </div>
      </div>

      {/* Square Outline (top-left) */}
      <div className="absolute top-[-6%] left-[17%]">
        <img
          src="https://evergent.com/wp-content/uploads/revslider/homepage-main-1-1-11072025/dotted-icon.svg"
          alt=""
        />
      </div>

      <div className="absolute top-[18%] left-[33%] float">
        <div className="w-12 h-12 border-4 border-purple-200/70 rounded-md rotate-[20deg]"></div>
      </div>

      {/* Receipt (top-right) */}
      <div className="absolute top-[1%] right-[14.5%]">
        <div>
          <img
            src="https://evergent.com/wp-content/uploads/revslider/homepage-main-1-1-11072025/paper-icon.svg"
            alt=""
          />
        </div>
        {/* <div className="w-28 h-36 bg-white shadow-2xl rounded-md p-3">
          <div className="space-y-2">
            <div className="h-2 bg-emerald-300 rounded"></div>
            <div className="h-2 bg-emerald-300 rounded w-4/5"></div>
            <div className="h-2 bg-emerald-300 rounded w-3/5"></div>
            <div className="h-2 bg-emerald-300 rounded"></div>
            <div className="h-2 bg-emerald-300 rounded w-2/3"></div>
          </div>
        </div> */}
      </div>

      {/* Dollar Floating Icon */}
      <div className="absolute bottom-[4%] right-[13.5%]">
        <img
          src="https://evergent.com/wp-content/uploads/revslider/homepage-main-1-1-11072025/dollar.svg"
          alt=""
        />
        {/* <div className="relative">
          <div className="w-24 h-24 bg-gradient-to-br from-cyan-300 to-cyan-400 rounded-full shadow-2xl flex items-center justify-center border-4 border-white/50">
            <span className="text-4xl font-bold text-cyan-900">$</span>
          </div>

          // dotted halo
          <div className="absolute inset-0 -z-10 flex items-center justify-center">
            <div className="w-32 h-32 border-2 border-dotted border-white/30 rounded-full"></div>
          </div> 
         </div> */}
      </div>

      <div className="absolute bottom-[0%] left-[20.5%] float2">
        <img
          src="https://evergent.com/wp-content/uploads/revslider/homepage-main-1-1-11072025/violet-vector.svg"
          alt=""
        />
      </div>

      {/* Credit Card (Bottom-left) */}
      <div className="absolute bottom-[5%] left-[17%] float2">
        {/* <div className="w-40 h-28 bg-gradient-to-br from-purple-300 to-purple-500 rounded-xl shadow-xl rotate-[-15deg] relative">
          <div className="absolute top-3 left-3 w-14 h-10 bg-yellow-300/80 rounded"></div>
          <div className="absolute bottom-3 left-3 right-3 space-y-2">
            <div className="h-1.5 bg-white/40 rounded"></div>
            <div className="h-1.5 bg-white/40 rounded w-3/4"></div>
          </div>
        </div> */}
        <div>
          <img
            src="https://evergent.com/wp-content/uploads/revslider/homepage-main-1-1-11072025/card.svg"
            alt=""
          />
        </div>
      </div>
      <div className="relative z-10 text-white text-center mx-auto max-w-[1100px] pt-[46px]">
        {/* Top Small Line */}
        <p className="mb-[75px] text-[18px] leading-[26px] font-normal">
          We craft modern software that brings clarity, efficiency, and
          long-term value to your business.
        </p>

        {/* Main Heading (2 lines exactly) */}
        <h1 className="text-[36px] leading-[42px] sm:text-[44px] sm:leading-[50px] md:text-[48px] md:leading-[54px] lg:text-[50px] lg:leading-[60px] tracking-[-0.2px] mx-auto text-center">
          Thoughtfully Engineered Software & AI Solutions for a Smarter Tomorrow
        </h1>

        {/* Subtitle */}
        <p className="mt-[60px] mb-[38px] text-[20px] leading-[28px] font-normal opacity-90">
          AI Engineering | Custom Software | Automation
        </p>

        {/* Button */}
        {/* <button className="bg-[#00df9d] hover:bg-[#00c88a] text-white font-semibold text-[18px] leading-[22px] px-[50px] py-[14px] rounded-[10px] shadow-xl transition-all duration-300 hover:scale-105">
          Let’s Build Something Meaningful
        </button> */}
        <button className="bg-[#00df9d] hover:bg-[#00c88a] text-white font-medium text-[16px] leading-[20px] px-[36px] py-[12px] rounded-[8px] shadow-lg transition-all duration-300 hover:scale-105">
          Let’s Build Something Meaningful
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
