import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const MobileMenuItem = ({ item, level, closeMenu, isLast = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const showBorder = level === 1 && !isLast;
  const isActive = item.href && location.pathname == item.href;

  // Detect Services-style structure
  const isSectionGroup = item.section && item.items;

  const hasSubmenu =
    (item.submenu && item.submenu.length > 0) || isSectionGroup;

  // const paddingLeft = level === 1 ? "pl-13" : level === 2 ? "pl-8" : "pl-10";

  const padding =
    level === 1 ? "pl-7 pr-7" : level === 2 ? "pl-9 pr-9" : "pl-11 pr-11";

  // const textClasses =
  //   level === 1
  //     ? `text-[18px] ${
  //         isActive ? "font-bold text-[#021D59]" : "font-medium text-[#021D59]"
  //       }`
  //     : level === 2
  //     ? "text-[14px] font-medium text-gray-800"
  //     : "text-[13px] text-gray-700";

  const textClasses =
    level === 1
      ? `text-[19px] leading-[2]  ${
          isOpen ? "font-bold text-[#021D59]" : "font-medium text-[#021D59]"
        }`
      : level === 2
      ? `text-[14px] ${
          isOpen ? "font-semibold text-[#021D59]" : "font-medium text-[#021D59]"
        }`
      : `text-[13px] ${
          isOpen ? "font-semibold text-[#021D59]" : "text-gray-700"
        }`;

  // Final link
  if (!hasSubmenu && item.href) {
    return (
      <li className={padding}>
        <div className="border-b border-gray-100" />
        <Link
          to={item.href}
          onClick={closeMenu}
          className={`block py-3 ${textClasses}`}
        >
          {item.title}
        </Link>
      </li>
    );
  }

  return (
    <li className={showBorder ? "border-b border-[#15BDFF80]" : ""}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex justify-between items-center w-full py-5 ${padding}`}
      >
        <span className={textClasses}>{item.title || item.section}</span>
        <ChevronDown
          className={`w-6 h-6 text-[#021D59] transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <ul className="bg-[#F7F9FC]">
          {isSectionGroup &&
            item.items.map((subItem, index) => (
              <MobileMenuItem
                key={index}
                item={subItem}
                level={level + 1}
                closeMenu={closeMenu}
              />
            ))}

          {item.submenu &&
            item.submenu.map((subItem, index) => (
              <MobileMenuItem
                key={index}
                item={subItem}
                level={level + 1}
                closeMenu={closeMenu}
              />
            ))}
        </ul>
      )}
    </li>
  );
};

export default MobileMenuItem;
