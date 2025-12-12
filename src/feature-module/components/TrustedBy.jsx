import React from "react";

const TrustedBy = () => {
  const logos = [
    "https://evergent.com/wp-content/uploads/2022/09/logo-scroll-item-20.png",
    "https://evergent.com/wp-content/uploads/2022/09/frame-17275.png",
    "https://evergent.com/wp-content/uploads/2024/12/nba-logo.svg",
    "https://evergent.com/wp-content/uploads/2022/09/frame-17270.png",
    "https://evergent.com/wp-content/uploads/2022/09/frame-17269.png",
    "https://evergent.com/wp-content/uploads/2022/09/frame-17279.png",
    "https://evergent.com/wp-content/uploads/2022/09/logo-scroll-item-17.png",
    "https://evergent.com/wp-content/uploads/2022/09/logo-scroll-item-18.png",
    "https://evergent.com/wp-content/uploads/2022/09/logo-scroll-item-1.png",
    "https://evergent.com/wp-content/uploads/2022/09/logo-scroll-item-3.png",
    "https://evergent.com/wp-content/uploads/2022/09/logo-scroll-item-4.png",
    "https://evergent.com/wp-content/uploads/2022/09/logo-scroll-item-5.png",
    "https://evergent.com/wp-content/uploads/2022/09/logo-scroll-item-6.png",
    "https://evergent.com/wp-content/uploads/2022/09/frame-17267.png",
    "https://evergent.com/wp-content/uploads/2022/09/logo-scroll-item-8.png",
    "https://evergent.com/wp-content/uploads/2024/12/scale-capital.png",
    "https://evergent.com/wp-content/uploads/2022/09/logo-scroll-item-7.png",
    "https://evergent.com/wp-content/uploads/2022/09/logo-scroll-item-9.png",
    "https://evergent.com/wp-content/uploads/2022/09/logo-scroll-item-11.png",
    "https://evergent.com/wp-content/uploads/2022/09/logo-scroll-item-12.png",
    "https://evergent.com/wp-content/uploads/2022/09/logo-scroll-item-13.png",
    "https://evergent.com/wp-content/uploads/2022/09/logo-scroll-item-15.png",
    "https://evergent.com/wp-content/uploads/2022/09/logo-scroll-item-16.png",
    "https://evergent.com/wp-content/uploads/2023/02/ballysports.png",
    "https://evergent.com/wp-content/uploads/2023/06/mobeus.png",
    "https://evergent.com/wp-content/uploads/2023/02/yes-network.png",
    "https://evergent.com/wp-content/uploads/2023/11/britbox.png",
    "https://evergent.com/wp-content/uploads/2023/11/etv.png",
    "https://evergent.com/wp-content/uploads/2023/11/go3.png",
    "https://evergent.com/wp-content/uploads/2023/11/msg-network.png",
    "https://evergent.com/wp-content/uploads/2024/12/one-31.svg",
    "https://evergent.com/wp-content/uploads/2024/12/njio.svg",
    "https://evergent.com/wp-content/uploads/2024/12/trt.svg",
    "https://evergent.com/wp-content/uploads/2024/12/tv-asahi.svg",
    "https://evergent.com/wp-content/uploads/2024/12/ooredoo.svg",
    "https://evergent.com/wp-content/uploads/2024/12/1001.svg",
    "https://evergent.com/wp-content/uploads/2024/12/gs-logo-1.svg",
    "https://evergent.com/wp-content/uploads/2024/12/exxcen.svg",
    "https://evergent.com/wp-content/uploads/2025/01/astro.svg",
  ];

  return (
    <section className="w-full bg-white py-8 sm:py-10 overflow-hidden relative">
      {/* TITLE */}
      <p className="text-center text-[14px] sm:text-[16px] text-[#021D59] mb-6 font-[400] relative z-[10]">
        Trusted by global leaders
      </p>

      {/* FADE EFFECTS */}
      <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white to-transparent pointer-events-none z-[5]" />
      <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white to-transparent pointer-events-none z-[5]" />

      {/* SCROLLING WRAPPER */}
      <div className="overflow-hidden">
        <div
          className="flex whitespace-nowrap gap-6 sm:gap-10 md:gap-12 animate-logo-scroll hover:animate-pause"
        >
          {/* Loop 1 */}
          {logos.map((src, index) => (
            <img
              key={index}
              src={src}
              alt="logo"
              className="
                h-8 sm:h-10 md:h-12 lg:h-12 
                w-auto object-contain 
                opacity-90 hover:opacity-100 
                transition
              "
            />
          ))}

          {/* Loop 2 for infinite scroll */}
          {logos.map((src, index) => (
            <img
              key={index + logos.length}
              src={src}
              alt="logo"
              className="
                h-8 sm:h-10 md:h-12 lg:h-12 
                w-auto object-contain 
                opacity-90 hover:opacity-100 
                transition
              "
            />
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes logo-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .animate-logo-scroll {
            animation: logo-scroll 20s linear infinite;
          }

          /* Pause on hover */
          .animate-logo-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </section>
  );
};

export default TrustedBy;
