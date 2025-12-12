
const Button = ({ children, onClick, primary = true, className = '' }) => (
  <button
    onClick={onClick}
    className={`
      px-6 py-3 rounded-xl font-semibold transition-all duration-300 ease-in-out shadow-lg
      ${
        primary
          // --- Primary Button Styles ---
          ? // Light Mode: Soft Sage BG, Deep Navy Text. Hover: Muted Blue-Gray BG, White Text.
            "bg-[#a1c2bd] text-[#19183b] hover:bg-[#708993] hover:text-white" +
            // Dark Mode: Soft Sage BG, Deep Navy Text. Hover: Pale Mint BG, Deep Navy Text. (Always high visibility)
            " dark:bg-[#a1c2bd] dark:text-[#19183b] dark:hover:bg-[#e7f2ef] dark:hover:text-[#19183b]"
          
          // --- Secondary Button Styles (Outlined) ---
          : // Light Mode: Soft Sage Border/Text. Hover: Soft Sage BG, Deep Navy Text.
            "border-2 border-[#a1c2bd] text-[#a1c2bd] hover:bg-[#a1c2bd] hover:text-[#19183b]" +
            // Dark Mode: Muted Blue-Gray Border/Text. Hover: Dark Navy Card BG, Pale Mint Text. (Subtle and Pro)
            " dark:border-[#708993] dark:text-[#708993] dark:hover:bg-[#212040] dark:hover:text-[#e7f2ef]"
      }
      ${className}
    `}
  >
    {children}
  </button>
);

export default Button;