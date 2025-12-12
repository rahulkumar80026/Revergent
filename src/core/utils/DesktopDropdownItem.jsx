import React from "react";
import * as Lucide from "lucide-react";
import DesktopDropdownItem from "./DesktopDropdownItem";

const DesktopNavItem = ({ item }) => {
  const hasSubmenu = item.submenu && item.submenu.length > 0;

  const renderMegaMenu = (sections) => (
    <div
      className="
        absolute left-1/2 -translate-x-1/2 
        mt-0 pt-6 pb-8 px-8
        w-[980px]
        bg-white 
        border border-gray-100 
        rounded-xl 
        shadow-[0_12px_40px_rgba(0,0,0,0.08)]
        
        opacity-0 invisible 
        group-hover:opacity-100 group-hover:visible 
        transition-all duration-200 ease-out
        z-[9999]
      "
    >
      <div className="grid grid-cols-5 gap-10">
        {sections.map((section, index) => (
          <div key={index} className="space-y-2">
            {/* SECTION TITLE */}
            <p className="text-[11px] font-semibold uppercase text-[#15BDFF] tracking-wide mb-3">
              {section.section}
            </p>

            {/* SECTION ITEMS */}
            <ul className="space-y-[6px]">
              {section.items.map((s, i) => (
                <li key={i}>
                  <a
                    href={s.href}
                    className="
                      text-[14px] text-[#021D59] 
                      hover:text-[#15BDFF]
                      transition-colors duration-150
                      block
                    "
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <li className="group relative">
      {/* NAV ITEM */}
      <a
        href={item.href}
        className="
          text-[#021D59] text-[15px] 
          py-2 px-4 
          font-medium 
          flex items-center 
          hover:text-[#15BDFF] 
          transition-colors duration-150
        "
      >
        {item.title}

        {hasSubmenu && (
          <Lucide.ChevronDown className="w-4 h-4 ml-1 transition-transform duration-200 group-hover:rotate-180" />
        )}
      </a>

      {/* SHOW MEGA MENU */}
      {hasSubmenu && renderMegaMenu(item.submenu)}
    </li>
  );
};

export default DesktopNavItem;
