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
    <section className="w-full bg-white py-7 overflow-hidden">
      <p class="text-center text-[16px] font-[400] leading-[1.43] text-[#021D59] mb-6 z-[100] relative font-['Helvetica']">
        Trusted by global leaders
      </p>

      <div className="overflow-hidden">
        <div className="flex gap-12 animate-logo-scroll whitespace-nowrap">
          {/* First Loop */}
          {logos.map((src, index) => (
            <img
              key={index}
              src={src}
              alt="logo"
              className="h-12 w-auto object-contain opacity-90 hover:opacity-100 transition"
            />
          ))}

          {/* Second Loop — for seamless infinite scroll */}
          {logos.map((src, index) => (
            <img
              key={index + logos.length}
              src={src}
              alt="logo"
              className="h-12 w-auto object-contain opacity-90 hover:opacity-100 transition"
            />
          ))}
        </div>
      </div>

      {/* Animation Speed: EXACTLY Evergent (78 seconds) */}
      <style>{`
        @keyframes logo-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-logo-scroll {
          animation: logo-scroll 78s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TrustedBy;
