
import React from "react";

const FeatureCard = ({ icon: Icon, title, description }) => (
  // Updated card design for 'Pro Label' feel: subtle dark BG and neon glow on hover
  <div className="p-8 bg-[#e7f2ef] dark:bg-[#212040] border border-[#a1c2bd]/30 rounded-2xl shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(161,194,189,0.5)] transform cursor-pointer group">
    <Icon 
      className="w-12 h-12 text-[#a1c2bd] mb-6 transition-colors duration-500 group-hover:text-[#708993] dark:group-hover:text-[#a1c2bd]" 
      strokeWidth={2.5} 
    />
    <h3 className="text-xl font-bold text-[#19183b] dark:text-[#e7f2ef] mb-3">{title}</h3>
    <p className="text-sm text-[#708993] dark:text-[#708993] leading-relaxed">{description}</p>
  </div>
);

export default FeatureCard;