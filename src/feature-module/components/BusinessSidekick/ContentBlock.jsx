// components/BusinessSidekick/ContentPanel.jsx
import React from "react";
import LottieIcon from "./LottieIcon";
import Button from "../../../core/common/Button";

const ContentPanel = ({ data }) => {
  if (!data) return null;

  const { title, description, link, image, json } = data;

  console.log("json", json);
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16  pt-[70px] px-[60px] pb-[109px]">
      {/* Left text */}
      <div className="md:w-1/2 text-left">
        <h3 className="text-[#071947] font-agrandir text-[34px] md:text-[60px] leading-tight mb-[20px]">
          {title}
        </h3>

        <p className="text-[#43567a] text-[16px] md:text-[17px] leading-[28px] mb-[98px] max-w-[640px]">
          {description}
        </p>

        <Button>Learn more</Button>
      </div>

      {/* Right image or Lottie */}
      <div className="md:w-1/2 flex justify-center">
        {json ? (
          <div className="w-[360px] h-[360px]">
            <LottieIcon url={json} className="w-full h-full" />
          </div>
        ) : image ? (
          <img
            src={image}
            alt={title}
            className="w-[360px] h-[360px] object-contain"
            loading="lazy"
          />
        ) : (
          <div className="w-[360px] h-[360px] bg-gray-50" />
        )}
      </div>
    </div>
  );
};

export default ContentPanel;
