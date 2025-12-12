// import React, { useState, useEffect, useCallback } from "react";
// import { Moon, Sun, ChevronLeft, ChevronRight, Zap, Code, Cloud, ShieldCheck } from "lucide-react";
// import AnimatedCard from "./animatedCard";

// const DEEP_MIDNIGHT_BLUE = "#19183B";
// const NEAR_WHITE = "#E7F2EF";
// const SLATE_BLUE = "#708993"; 
// const CALM_MINT = "#A1C2BD"; 
// const DARK_MODE_BG_HERO = "#0F0E20"; 
// const LIGHT_MODE_BG_HERO = NEAR_WHITE;
// const LIGHTER_BLUE_ACCENT = "#8999A3"; 
// const WARM_ACCENT = "#FFB74D";
// const DARK_MODE_BACKGROUND = DEEP_MIDNIGHT_BLUE; 
// const LIGHT_MODE_BACKGROUND_SCROLLED = `${NEAR_WHITE}E6`;
// const DARK_MODE_BACKGROUND_SCROLLED = SLATE_BLUE;

// // Mock data for the 3-item carousel (using lucide-react components now for better React integration)
// // const CAROUSEL_ITEMS = [
// //   { 
// //     title: "AI-Powered Automation", 
// //     IconComponent: Zap,
// //     description: "Deploy and manage complex systems instantly with Autonomous DevOps engines, ensuring zero-downtime scalability.",
// //     color: "#6366f1" // Indigo
// //   },
// //   { 
// //     title: "Web3/Blockchain Solutions", 
// //     IconComponent: Code,
// //     description: "Secure, decentralized applications and tokenomics design for the future economy with immutable ledger technology.",
// //     color: "#f97316" // Orange
// //   },
// //   { 
// //     title: "Global Cloud Scale", 
// //     IconComponent: Cloud,
// //     description: "Achieve massive scalability and elasticity across major cloud providers (GCP, AWS, Azure) and hybrid environments.",
// //     color: "#10b981" // Emerald
// //   }
// // ];

// const CAROUSEL_ITEMS = [
//   {
//     title: "AI-Powered Automation",
//     IconComponent: Zap,
//     description:
//       "Boost efficiency with smart automation, adaptive CI/CD, and predictive insights that keep your systems ahead.",
//     color: "#6366f1" // Indigo
//   },
//   {
//     title: "Cloud Security & DevOps",
//     IconComponent: ShieldCheck,
//     description:
//       "Secure, automate, and scale your cloud infrastructure with modern DevOps practices and continuous delivery.",
//     color: "#f59e0b" // Amber
//   },
//   {
//     title: "Cloud Infrastructure",
//     IconComponent: Cloud,
//     description:
//       "Achieve global performance and uptime through scalable, cost-optimized cloud architecture on AWS, Azure, or GCP.",
//     color: "#10b981" // Emerald
//   },
//   {
//     title: "Enterprise Development",
//     IconComponent: Code,
//     description:
//       "Build custom ERP, CRM, POS, and desktop solutions tailored for performance, scalability, and growth.",
//     color: "#3b82f6" // Blue
//   }
// ];

// const ContentCarousel = ({ isDark }) => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const totalItems = CAROUSEL_ITEMS.length;

//     // Navigation functions
//     const handleNext = useCallback(() => {
//         setCurrentIndex((prev) => (prev + 1) % totalItems);
//     }, [totalItems]);

//     const handlePrev = useCallback(() => {
//         setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
//     }, [totalItems]);
    
//     // Auto-advance feature: Change item every 8 seconds
//     useEffect(() => {
//         const timer = setInterval(handleNext, 8000); 
//         return () => clearInterval(timer);
//     }, [handleNext]);

//     const currentItem = CAROUSEL_ITEMS[currentIndex];

//     // Card background color logic for the buttons
//     const buttonBg = isDark ? DEEP_MIDNIGHT_BLUE : NEAR_WHITE;
//     const buttonTextColor = isDark ? WARM_ACCENT : DEEP_MIDNIGHT_BLUE;

//     return (
//         <div className="relative w-full max-w-lg">
//             {/* The main Animated Card */}
//             <AnimatedCard isDark={isDark} item={currentItem} key={currentIndex} />

//             {/* Navigation Buttons (Hidden on very small screens for space) */}
//             {/* <button
//                 onClick={handlePrev}
//                 className="absolute top-1/2 left-[-15px] transform -translate-y-1/2 p-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95 hidden sm:block"
//                 style={{ backgroundColor: buttonBg, color: buttonTextColor }}
//                 aria-label="Previous service"
//             >
//                 <ChevronLeft className="w-6 h-6" />
//             </button>
//             <button
//                 onClick={handleNext}
//                 className="absolute top-1/2 right-[-15px] transform -translate-y-1/2 p-3 rounded-full shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95 hidden sm:block"
//                 style={{ backgroundColor: buttonBg, color: buttonTextColor }}
//                 aria-label="Next service"
//             >
//                 <ChevronRight className="w-6 h-6" />
//             </button> */}

//             {/* Pagination Dots */}
//             <div className="flex justify-center space-x-2 mt-6">
//                 {CAROUSEL_ITEMS.map((_, index) => (
//                     <button
//                         key={index}
//                         onClick={() => setCurrentIndex(index)}
//                         className={`w-3 h-3 rounded-full transition-all duration-300`}
//                         style={{
//                             // backgroundColor: index === currentIndex ? WARM_ACCENT : SLATE_BLUE,
//                             backgroundColor: index === currentIndex 
//                                 ? (isDark ? WARM_ACCENT : CALM_MINT)
//                                 : SLATE_BLUE,
//                             opacity: index === currentIndex ? 1 : 0.4
//                         }}
//                         aria-label={`Go to slide ${index + 1}`}
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ContentCarousel;

import React from 'react';
import { CALM_CYAN, DEEP_MIDNIGHT_BLUE } from '../styles/colors';

// ➡️ Individual Card Component (The items that slide in the carousel)
const CarouselCard = ({ title, description, icon, accentColor }) => {
    return (
        <div 
            className="p-6 h-full rounded-xl shadow-2xl transition-all duration-300 transform border-t-4"
            style={{ 
                // Dark Background for contrast with Hero text
                backgroundColor: DEEP_MIDNIGHT_BLUE, 
                borderColor: accentColor,
            }}
        >
            <div className="text-3xl mb-4" style={{ color: accentColor }}>
                {icon} {/* Example: Icon like "🤖" or "☁️" */}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-sm text-gray-400">{description}</p>
        </div>
    );
};

// ➡️ Main Carousel Component
const ContentCarousel = ({ isDark }) => {
    
    const ACCENT_COLOR = CALM_CYAN;

    // 💡 Dummy Data for the Carousel
    const carouselItems = [
        { title: "AI-Powered Automation", description: "Deploy self-learning algorithms for end-to-end business process optimization.", icon: "🤖" },
        { title: "NextGen Cloud Arch.", description: "Migration and managed services for resilient, multi-cloud infrastructure.", icon: "☁️" },
        { title: "Decentralized Finance", description: "Building secure, scalable blockchain and Web3 solutions for enterprise.", icon: "🔗" },
        { title: "Cyber Resilience", description: "Comprehensive threat detection and defense mechanisms for mission-critical data.", icon: "🛡️" },
    ];

    return (
        <div className="relative w-full max-w-md h-96">
            
            {/* 1. Stacking Effect Container */}
            <div className="relative w-full h-full">
                
                {/* 2. Background Stacked Cards (Fixed for visual depth) */}
                <div 
                    className="absolute w-full h-full p-4 rounded-xl -rotate-3" 
                    style={{ 
                        backgroundColor: isDark ? 'rgba(40, 40, 60, 0.7)' : 'rgba(200, 200, 200, 0.5)', 
                        transform: 'translateY(-10px) translateX(-5px) rotate(-3deg)',
                        zIndex: 5,
                    }}
                />
                <div 
                    className="absolute w-full h-full p-4 rounded-xl rotate-1" 
                    style={{ 
                        backgroundColor: isDark ? 'rgba(50, 50, 80, 0.8)' : 'rgba(220, 220, 220, 0.7)', 
                        transform: 'translateY(-5px) translateX(5px) rotate(1deg)',
                        zIndex: 10,
                    }}
                />
                
                {/* 3. The Main Sliding/Active Card */}
                {/* NOTE: Here, you would replace the static display with a proper carousel library 
                  (e.g., react-slick, swiper) that iterates through carouselItems.
                  For simplicity, we show the first item as the active one.
                */}
                <div className="absolute w-full h-full z-20">
                    <CarouselCard 
                        title={carouselItems[0].title} 
                        description={carouselItems[0].description} 
                        icon={carouselItems[0].icon} 
                        accentColor={ACCENT_COLOR}
                    />
                </div>

            </div>
            
            {/* 4. Simple Navigation Dots (Placeholder for actual carousel controls) */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
                <span className={`w-2.5 h-2.5 rounded-full`} style={{backgroundColor: ACCENT_COLOR}} />
                <span className={`w-2.5 h-2.5 rounded-full bg-gray-600`} />
                <span className={`w-2.5 h-2.5 rounded-full bg-gray-600`} />
            </div>

        </div>
    );
};

export default ContentCarousel;