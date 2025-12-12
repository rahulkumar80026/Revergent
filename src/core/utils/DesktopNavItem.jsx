import React from "react";
import * as Lucide from "lucide-react";
import DesktopDropdownItem from "./DesktopDropdownItem";

const DesktopNavItem = ({ item }) => {
  const hasSubmenu = item.submenu && item.submenu.length > 0;

  // Custom SVG data URI for the small triangle arrow (filled triangle pointing down)
  const svgTriangleDataUri =
    "data:image/svg+xml,%3Csvg width='8' height='7' viewBox='0 0 8 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.75001 6.16581C4.41668 6.74316 3.58335 6.74316 3.25001 6.16581L1.00912 2.28447C0.628606 1.6254 1.22219 0.831226 1.96204 1.00954L3.79708 1.45183C3.93045 1.48397 4.06955 1.48397 4.20292 1.45183L6.03799 1.00954C6.77783 0.831224 7.37142 1.6254 6.9909 2.28447L4.75001 6.16581Z' fill='%23021D59'/%3E%3C/svg%3E%0A";

  // Tailwind classes to replicate the CSS behavior for the triangle arrow
  const customTriangleArrowClasses = `
    ml-1
    w-2 
    h-[7px]
    bg-center 
    bg-no-repeat 
    bg-[url('${svgTriangleDataUri}')]
    transition-transform 
    duration-300 
    group-hover:rotate-180
  `;

  // Render L2/Mega Menu
  const renderMegaMenu = (items) => (
    <div className="absolute left-1/2 -translate-x-1/2 mt-0 p-3 w-[580px] bg-white shadow-2xl rounded-xl border border-gray-100 hidden group-hover:block transition-all duration-300 transform opacity-0 group-hover:opacity-100 z-50">
      <ul className="grid grid-cols-2 gap-2">
        {items.map((subItem, subIndex) => (
          <DesktopDropdownItem key={subIndex} item={subItem} />
        ))}
      </ul>
    </div>
  );

  // Render Simple L2 Dropdown (for items with no icons or L3 nesting)
  const renderSimpleDropdown = (items) => (
    <ul className="absolute left-0 mt-0 w-64 bg-white shadow-xl rounded-lg border border-gray-100 hidden group-hover:block transition-all duration-300 transform opacity-0 group-hover:opacity-100 z-50">
      {items.map((subItem, subIndex) => (
        <li key={subIndex}>
          <a
            href={subItem.href}
            className="text-gray-700 block px-4 py-3 text-sm font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors duration-100 flex justify-between items-center rounded-lg"
          >
            {subItem.title}
          </a>
        </li>
      ))}
    </ul>
  );

  // Decide which type of menu to render (Mega Menu for Platforms/Solutions/Company/Resources, simple for others)
  const isMegaMenu =
    item.title === "Platforms" ||
    item.title === "Solutions" ||
    item.title === "Company" ||
    item.title === "Resources";

  return (
    <li className="group relative">
      <a
        href={item.href}
        className="text-[#021D59] font-regular text-sm tracking-wide flex items-center py-2 px-3 hover:text-[#15BDFF] transition-colors duration-150 rounded-lg"
      >
        {item.title}
        {hasSubmenu && (
          <>
            <Lucide.ChevronDown className="w-4 h-4 ml-1 transition-transform group-hover:rotate-180" />
            {/* <span className={customTriangleArrowClasses} aria-hidden="true" /> */}
          </>
        )}
      </a>

      {hasSubmenu &&
        (isMegaMenu
          ? renderMegaMenu(item.submenu)
          : renderSimpleDropdown(item.submenu))}
    </li>
  );
};

export default DesktopNavItem;
