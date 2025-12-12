import React from "react";

const Tabs = ({ items = [], active, onChange }) => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 mb-[70px]">
      {items.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          aria-pressed={active === tab.id}
          className={`px-6 py-3 rounded-lg text-sm md:text-base font-medium transition-shadow duration-200
            ${active === tab.id
              ? "bg-[#22b4ff] text-white shadow-md"
              : "bg-[#f3f4f6] text-[#0b2b4b] hover:bg-[#e9eefb]"}
          `}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
