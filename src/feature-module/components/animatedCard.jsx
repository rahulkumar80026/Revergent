import React, { useState, useEffect } from "react";
import {
  Moon,
  Sun,
  ChevronLeft,
  ChevronRight,
  Zap,
  Code,
  Cloud,
} from "lucide-react";
import PrimaryButton from "./PrimaryButton";
import Icon from "./Icon";

const DEEP_MIDNIGHT_BLUE = "#19183B";
const NEAR_WHITE = "#E7F2EF";
const SLATE_BLUE = "#708993";
const CALM_MINT = "#A1C2BD";
const DARK_MODE_BG_HERO = "#0F0E20";
const LIGHT_MODE_BG_HERO = NEAR_WHITE;
const LIGHTER_BLUE_ACCENT = "#8999A3";
const WARM_ACCENT = "#FFB74D";
const DARK_MODE_BACKGROUND = DEEP_MIDNIGHT_BLUE;
const LIGHT_MODE_BACKGROUND_SCROLLED = `${NEAR_WHITE}E6`;
const DARK_MODE_BACKGROUND_SCROLLED = SLATE_BLUE;

const AnimatedCard = ({ isDark, item }) => {
  // Colors for the abstract glow/gradient
  const glowColor = isDark ? WARM_ACCENT : DEEP_MIDNIGHT_BLUE;
  const textColor = isDark ? NEAR_WHITE : DEEP_MIDNIGHT_BLUE;
  const secondaryColor = isDark ? CALM_MINT : SLATE_BLUE;

  // Use a key change to force re-render and trigger transition when content changes
  // This provides a smooth fade between carousel items
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Fade in when item changes
    setVisible(false);
    const timeout = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(timeout);
  }, [item]);

  // Icon component from item data
  const IconComponent = item.IconComponent;

  const GlobalStyles = () => (
    <style>
      {`
        @keyframes rotateGradient {
            0% { 
                background-position: 0% 0%; 
                transform: rotate(0deg) scale(1.1);
            }
            25% { 
                background-position: 50% 100%; 
                transform: rotate(10deg) scale(1.05);
            }
            50% { 
                background-position: 100% 50%; 
                transform: rotate(0deg) scale(1.1);
            }
            75% { 
                background-position: 50% 0%; 
                transform: rotate(-10deg) scale(1.05);
            }
            100% { 
                background-position: 0% 0%; 
                transform: rotate(0deg) scale(1.1);
            }
        }
        `}
    </style>
  );

  return (
    <>
      <GlobalStyles />
      <div
        className="relative w-full p-1.5 rounded-3xl overflow-hidden shadow-2xl transition duration-500 hover:shadow-indigo-500/50"
        style={{
          // Outer shell for the subtle glow border
          background: `linear-gradient(45deg, ${glowColor} 0%, ${SLATE_BLUE} 100%)`,
        }}
      >
        {/* Inner Content Container */}
        <div
          className="relative p-8 h-96 rounded-[1.3rem] flex flex-col justify-center text-center transition duration-500"
          style={{
            backgroundColor: isDark ? DARK_MODE_BG_HERO : LIGHT_MODE_BG_HERO,
          }}
        >
          {/* Rotating Abstract Background (Blob/Gradient) */}
          <div
            className="absolute inset-0 z-0 opacity-20"
            style={{
              background: `radial-gradient(circle at center, ${glowColor} 0%, transparent 70%)`,
              backgroundSize: "200% 200%",
              animation: "rotateGradient 30s ease infinite",
              filter: "blur(50px)",
            }}
          />

          {/* Content - Fade transition */}
          <div
            className={`relative z-10 transition-opacity duration-700 ${
              visible ? "opacity-100" : "opacity-0"
            }`}
          >
            <Icon
              // Using the IconComponent from the item data
              children={IconComponent}
              className="w-16 h-16 mx-auto mb-4 p-2 rounded-full transform hover:scale-110 transition-transform"
              style={{ color: glowColor, border: `2px solid ${glowColor}` }}
            />

            <h3
              // RESPONSIVE CHANGE: text-2xl on mobile, text-3xl on md/larger screens.
              className={`text-2xl md:text-3xl font-bold mb-3`}
              style={{ color: textColor }}
            >
              {item.title}
            </h3>
            <p
              // RESPONSIVE CHANGE: text-base on mobile, text-xl on md/larger screens.
              className={`text-base md:text-xl font-medium mb-8`}
              style={{ color: secondaryColor }}
            >
              {item.description}
            </p>
            <PrimaryButton href="#ai-platform" className="mt-4 mx-auto">
              Learn More
            </PrimaryButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimatedCard;
