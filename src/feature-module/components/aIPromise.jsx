// import React from "react";
// import AICard from "./aICard";  

// const AIPromise = ({ isDark }) => {
//   const sectionBg = isDark ? "bg-gray-800" : "bg-indigo-50";
//   const textPrimary = isDark ? "text-gray-100" : "text-gray-900";
//   const textSecondary = isDark ? "text-gray-400" : "text-gray-600";

//   const aiCards = [
//     {
//       title: "Intelligent Automation",
//       description:
//         "Automating complex workflows and decision-making processes using custom-trained AI agents.",
//       iconPath: "M4 6h16M4 10h16M4 14h16M4 18h16",
//     },
//     {
//       title: "Predictive Analytics",
//       description:
//         "Leveraging machine learning for precise forecasting of market trends, user behavior, and operational needs.",
//       iconPath: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z",
//     },
//     {
//       title: "Conversational Interfaces",
//       description:
//         "Developing advanced, contextual chatbots and voice assistants for superior user support.",
//       iconPath:
//         "M8 10h.01M12 10h.01M16 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
//     },
//   ];

//   return (
//     <section
//       id="ai-promise"
//       className={`py-24 ${sectionBg} transition duration-300 border-t ${
//         isDark ? "border-gray-700" : "border-indigo-100"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <span className="text-sm font-semibold text-indigo-600 uppercase tracking-widest bg-indigo-100 dark:bg-indigo-900 dark:text-indigo-300 py-1 px-3 rounded-full mb-4 inline-block shadow-inner">
//             Intelligence Integration
//           </span>
//           <h2 className={`text-4xl font-extrabold ${textPrimary} sm:text-5xl`}>
//             The AI-First Approach: Powered by Gemini
//           </h2>
//           <p className={`mt-4 text-xl ${textSecondary} max-w-4xl mx-auto`}>
//             We integrate advanced generative AI models, including Google's
//             Gemini, directly into your business processes, transforming data
//             into actionable intelligence.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {aiCards.map((card, index) => (
//             <AICard key={index} {...card} isDark={isDark} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AIPromise;

// import React from "react";
// import AICard from "./aICard";  

// // --- NEW COLOR PALETTE ---
// const DEEP_MIDNIGHT_BLUE = "#19183B";
// const NEAR_WHITE = "#E7F2EF";
// const SLATE_BLUE = "#708993";
// const CALM_MINT = "#A1C2BD";
// const DARK_MODE_BG_ACCENT = "#222543"; // Slightly lighter blue for dark mode accent background
// const LIGHT_MODE_BG_ACCENT = CALM_MINT; // Calm Mint for light mode accent background
// // -------------------------

// const AIPromise = ({ isDark }) => {
//   const sectionBg = isDark ? DARK_MODE_BG_ACCENT : LIGHT_MODE_BG_ACCENT;
//   const textPrimary = isDark ? NEAR_WHITE : DEEP_MIDNIGHT_BLUE;
//   const textSecondary = isDark ? SLATE_BLUE : DEEP_MIDNIGHT_BLUE;
//   const badgeBg = isDark ? DEEP_MIDNIGHT_BLUE : DEEP_MIDNIGHT_BLUE; // Deep Blue for badge background
//   const badgeText = isDark ? CALM_MINT : NEAR_WHITE; // Mint/Near White for badge text

//   const aiCards = [
//     {
//       title: "Intelligent Automation",
//       description:
//         "Automating complex workflows and decision-making processes using custom-trained AI agents.",
//       iconPath: "M4 6h16M4 10h16M4 14h16M4 18h16",
//     },
//     {
//       title: "Predictive Analytics",
//       description:
//         "Leveraging machine learning for precise forecasting of market trends, user behavior, and operational needs.",
//       iconPath: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z",
//     },
//     {
//       title: "Conversational Interfaces",
//       description:
//         "Developing advanced, contextual chatbots and voice assistants for superior user support.",
//       iconPath:
//         "M8 10h.01M12 10h.01M16 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
//     },
//   ];

//   return (
//     <section
//       id="ai-promise"
//       className={`py-24 transition duration-300 border-t`}
//       style={{
//         backgroundColor: sectionBg,
//         borderColor: isDark ? SLATE_BLUE : CALM_MINT,
//       }}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <span
//             className="text-sm font-semibold uppercase tracking-widest py-1 px-3 rounded-full mb-4 inline-block shadow-inner"
//             style={{ backgroundColor: badgeBg, color: badgeText }}
//           >
//             Intelligence Integration
//           </span>
//           <h2 className={`text-4xl font-extrabold sm:text-5xl`} style={{ color: textPrimary }}>
//             The AI-First Approach: Powered by Gemini
//           </h2>
//           <p className={`mt-4 text-xl max-w-4xl mx-auto`} style={{ color: textSecondary }}>
//             We integrate advanced generative AI models, including Google's
//             Gemini, directly into your business processes, transforming data
//             into actionable intelligence.
//           </p>
//         </div>
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Assuming AICard props handle colors correctly based on isDark */}
//           {aiCards.map((card, index) => (
//             <AICard key={index} {...card} isDark={isDark} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AIPromise;

import React from 'react';
import AICard from "./aICard";
import { Moon, Sun, ArrowRight, Zap, TrendingUp, Cpu, Code, Globe, Layers, Shield, Server, Repeat, Terminal, AlertTriangle, Home, X, Bot, BarChart2, MessageCircle } from 'lucide-react';
import Button from './button';
import SectionTitle from './SectionTitle';


// export const AIPromise = () => {
//   const aiCards = [
//     {
//       Icon: Zap, // Zap icon for automation
//       title: "Intelligent Automation",
//       description: "Automating complex workflows and decision-making processes using custom-trained AI agents for efficiency.",
//     },
//     {
//       Icon: BarChart2, // BarChart2 icon for analytics
//       title: "Predictive Analytics",
//       description: "Leveraging machine learning for precise forecasting of market trends, user behavior, and operational needs.",
//     },
//     {
//       Icon: MessageCircle, // MessageCircle icon for conversational interfaces
//       title: "Conversational Interfaces",
//       description: "Developing advanced, contextual chatbots and voice assistants for superior user support and engagement.",
//     },
//   ];

//   return (
//     <section id="ai-promise" className="py-24 md:py-32 bg-[#e7f2ef] dark:bg-[#19183b] transition-colors duration-500">
//       <SectionTitle
//         title="AI-First: The Gemini Advantage"
//         subtitle="Intelligence Integration"
//       />
      
//       <div className="max-w-7xl mx-auto px-6 lg:px-8">
//         <p className="text-xl md:text-2xl text-[#708993] dark:text-[#708993] text-center max-w-4xl mx-auto mb-16">
//           We integrate advanced generative AI models, including Google's Gemini, directly into your business processes, transforming data into actionable intelligence.
//         </p>
        
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//           {aiCards.map((card, index) => (
//             // FIX: Removed the JSX block comment at the end of the element to resolve the compiler error.
//             <AICard key={index} {...card} isDark={false} /> 
//           ))}
//         </div>
        
//         <div className="text-center mt-16">
//           <Button primary={false} className="text-lg">
//             Request an AI Demo
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// };

const AIPromise = ({ isDark }) => {
  const aiCards = [
    {
      Icon: Zap, 
      title: "Intelligent Automation",
      description: "Automating complex workflows and decision-making processes using custom-trained AI agents for efficiency.",
    },
    {
      Icon: BarChart2, 
      title: "Predictive Analytics",
      description: "Leveraging machine learning for precise forecasting of market trends, user behavior, and operational needs.",
    },
    {
      Icon: MessageCircle, 
      title: "Conversational Interfaces",
      description: "Developing advanced, contextual chatbots and voice assistants for superior user support and engagement.",
    },
  ];

  return (
        <section className="relative py-24 overflow-hidden" style={{ backgroundColor: isDark ? '#1a1d3a' : '#e8f0ef' }}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: '#5f8296' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: '#a8c0bc', animation: 'pulse 3s ease-in-out infinite' }}></div>
      </div>

    {/* <section id="ai-promise" className={`py-24 md:py-32 ${!isDark ? 'bg-[#e7f2ef]' : 'bg-[#19183b]'} transition-colors duration-500`}> */}
      <SectionTitle
        title="AI-First: The Gemini Advantage"
        subtitle="Intelligence Integration"
        isDark={isDark}
      />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <p className="text-xl md:text-2xl text-[#708993] text-center max-w-4xl mx-auto mb-16">
          We integrate advanced generative AI models, including Google's Gemini, directly into your business processes, transforming data into actionable intelligence.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {aiCards.map((card, index) => (
            <AICard key={index} {...card} isDark={isDark} /> 
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button primary={false} className="text-lg">
            Request an AI Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AIPromise;