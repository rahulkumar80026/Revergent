import { ChevronDown } from "lucide-react";
import { useState } from "react";

// --- Component 3: Recursive Mobile Menu Item (Handles up to 3 levels) ---
const MobileMenuItem = ({ item, level, closeMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasSubmenu = item.submenu && item.submenu.length > 0;

  const paddingLeft = level === 1 ? "pl-4" : level === 2 ? "pl-8" : "pl-10";
  const baseClasses = hasSubmenu
    ? "flex justify-between items-center w-full py-3 hover:bg-gray-100 transition-colors"
    : "block w-full py-3 hover:bg-gray-100 transition-colors";

  const textClasses =
    level === 1
      ? "text-lg font-bold"
      : level === 2
      ? "text-base font-semibold text-gray-800"
      : "text-sm font-medium text-gray-700";

  // If there's no submenu, it's a final link
  if (!hasSubmenu) {
    return (
      <li className={`border-b border-gray-100 ${paddingLeft}`}>
        <a
          href={item.href}
          className={`block ${textClasses}`}
          onClick={closeMenu}
        >
          {item.title}
        </a>
      </li>
    );
  }

  // Item with a submenu (toggle button)
  return (
    <li className={`border-b border-gray-100`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${baseClasses} ${paddingLeft}`}
      >
        <span className={textClasses}>{item.title}</span>
        {hasSubmenu && (
          <ChevronDown
            className={`w-4 h-4 text-gray-500 mr-4 transition-transform duration-200 ${
              isOpen ? "transform rotate-180" : ""
            }`}
          />
        )}
      </button>

      {isOpen && (
        <ul
          className={`transition-all duration-300 ${
            level === 1 ? "bg-gray-50" : "bg-gray-100"
          }`}
        >
          {item.submenu.map((subItem, index) => (
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
