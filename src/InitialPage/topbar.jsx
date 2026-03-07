import React from "react";

const TopBar = () => {
  // Custom colors derived from the image and user reference
  const buttonCyanRef = "#15BDFF"; // From user's HTML reference
  const darkerBlue = "#140c34"; // Background color
  const abstractPurple = "#4f2896"; // Abstract shape color
  const micPurple = "#8e50b5"; // Approximate color for the mic icon background

  return (
    <div
      className="relative w-full h-13 flex items-center justify-center overflow-hidden text-white py-1"
      style={{ backgroundColor: darkerBlue }}
    >
      {/* NOTE: The original background image (hellobar-bg.svg) cannot be loaded here. 
        We are using CSS shapes (below) as the closest visual approximation of the abstract design.
      */}

      {/* --- Abstract Background Shapes (Kept for visual design matching the screenshot) --- */}
      {/* Left Large Swoop (Darker Blue/Purple) */}
      <div
        className="absolute left-0 top-0 h-full w-[200px] opacity-50 blur-3xl transform -skew-x-[20deg] origin-top-left"
        style={{ backgroundColor: abstractPurple }}
      ></div>

      {/* Left Medium Blob (Cyan Blue) */}
      <div
        className="absolute left-[120px] top-[-50px] w-48 h-48 rounded-full opacity-40 blur-3xl"
        style={{ backgroundColor: buttonCyanRef }}
      ></div>

      {/* Right Circular Outline and Fill */}
      <div
        className="absolute right-[-20px] top-1/2 w-48 h-48 border-[10px] rounded-full opacity-10"
        style={{ borderColor: abstractPurple, transform: "translateY(-50%)" }}
      ></div>
      <div
        className="absolute right-[50px] top-1/2 w-8 h-8 rounded-full opacity-20"
        style={{
          backgroundColor: abstractPurple,
          transform: "translateY(-50%)",
        }}
      ></div>

      {/* --- Content (Text, Button, and Icon) - Corresponds to the inner d-flex --- */}
      <div className="relative z-10 flex items-center space-x-3">
        {/* Text: Reduced from text-xl to text-lg */}
        <div className="hidden md:block">
          <p className="text-white font-normal text-lg" style={{ margin: 0 }}>
            Where human ambition becomes intelligent possibility
          </p>
        </div>

        {/* Button: Reduced padding from py-3 to py-2, and text size to text-sm */}
        <a
          href="https://revergent.in/"
          className="ml-3 px-4 py-2 rounded-full text-white font-normal text-sm shadow-xl transition duration-300 hover:opacity-90 flex items-center justify-center"
          style={{
            backgroundColor: buttonCyanRef,
            whiteSpace: "nowrap",
          }}
        >
          Explore What’s Possible With Us
        </a>

        {/* Mic Icon: Reduced size from w-10 h-10 to w-8 h-8 */}
        <div
          className="ml-3 flex items-center justify-center w-8 h-8 rounded-full cursor-pointer transition duration-300 hover:opacity-80"
          style={{
            backgroundColor: micPurple,
            boxShadow: "0 0 10px rgba(142, 80, 181, 0.7)",
          }}
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 11a7 7 0 01-7 7v0m-7-7a7 7 0 017-7m-7 7h14m-14 0c0 4.254 3.791 7 8 7v0h-1m1-7v0m7 0c0-4.254-3.791-7-8-7v0h1"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};
export default TopBar;
