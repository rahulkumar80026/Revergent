import React, { useState } from "react";
import { Bot, X } from "lucide-react";
// Mock Lucide icons for single-file component structure
// const X = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>);
// const Bot = (props) => (<svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M7 16l4 4"/><path d="M17 16l-4 4"/></svg>);


const AIChatbot = ({ isDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Icon changes based on open state
  const icon = isOpen ? X : Bot;
  
  // Color palette variables
  const bgColor = 'bg-[#15bdff]'; // Soft Sage
  const iconColor = 'text-[#19183b]'; // Deep Navy
  const baseShadowColor = 'rgba(25, 24, 59, 0.3)'; // Deep Navy for shadow
  const pulseColor = 'rgba(161, 194, 189, 0.9)'; // Soft Sage for pulse

  return (
    <>
      {/* Floating Chat Button with Custom Pulse Animation */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          fixed bottom-6 right-6 z-[100] p-4 rounded-full ${bgColor} ${iconColor} 
          shadow-xl transition duration-300 transform hover:scale-110 active:scale-95
          chat-button-base-shadow
          ${isOpen ? 'ring-4 ring-[#19183b]/20' : 'animate-sage-ring-pulse'} 
        `}
        aria-label="Toggle AI Assistant"
      >
        {/* Lucide icon component is rendered here */}
        {React.createElement(icon, { className: "w-8 h-8 font-extrabold" })}
      </button>

      {/* Minimal Chat Modal */}
      <div 
        className={`
          fixed bottom-24 right-6 z-[99] w-full max-w-sm h-96 rounded-2xl shadow-2xl transition-all duration-500 ease-in-out
          ${!isDark ? 'bg-white border border-[#a1c2bd]' : 'bg-[#212040] border border-[#708993]'}
          ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-4 invisible'}
        `}
      >
        <div className={`p-4 font-semibold rounded-t-2xl ${!isDark ? 'bg-[#19183b] text-[#a1c2bd]' : 'bg-[#a1c2bd] text-[#19183b]'}`}>
          Revergent AI Assistant
        </div>
        <div className="p-4 h-full text-sm text-[#708993]">
          <p>Chat interface placeholder. How can I assist with next-gen systems?</p>
          <div className="absolute bottom-4 w-[calc(100%-2rem)]">
            <input type="text" placeholder="Ask a question..." className="w-full p-3 rounded-lg border border-[#a1c2bd]/50 bg-white dark:bg-[#19183b] text-[#19183b] dark:text-[#e7f2ef] focus:ring-2 focus:ring-[#a1c2bd] outline-none" />
          </div>
        </div>
      </div>
      
      {/* Global custom CSS for the AI Button Pulse Animation and Scrollbar */}
      <style>{`
        /* Custom Keyframes for the AI Button Pulse Animation 
          This simulates the standard pulse utility using box-shadow for a soft glow effect.
        */
        @keyframes subtle-pulse-sage {
            0% {
                box-shadow: 0 4px 12px ${baseShadowColor}, 0 0 0 0px ${pulseColor};
            }
            70% {
                box-shadow: 0 4px 12px ${baseShadowColor}, 0 0 0 16px rgba(161, 194, 189, 0);
            }
            100% {
                box-shadow: 0 4px 12px ${baseShadowColor}, 0 0 0 0px rgba(161, 194, 189, 0);
            }
        }

        /* Apply the custom animation class to the button */
        .animate-sage-ring-pulse {
            animation: subtle-pulse-sage 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        /* Ensure the button itself has the base shadow for depth when not pulsing */
        .chat-button-base-shadow {
            box-shadow: 0 4px 12px ${baseShadowColor};
        }
      `}</style>
    </>
  );
};

export default AIChatbot;


