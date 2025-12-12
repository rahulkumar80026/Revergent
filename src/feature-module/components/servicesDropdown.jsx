import { useRef, useState } from "react";
import Icon from "./Icon";

const ServicesDropdown = ({ isDark }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const services = [
    {
      name: "Custom Software (Bespoke)",
      href: "#services",
      iconPath:
        "M9.75 17L19 20M10 17C10 13.9 12.5 11.4 15.6 11.4M6 10C6 7.8 4.2 6 2 6",
    },
    {
      name: "AI/ML Integration (Gemini)",
      href: "#ai-promise",
      iconPath: "M13 10V3L4 14h7v7l9-11h-7z",
    },
    {
      name: "CI/CD & DevOps (Automation)",
      href: "#pipeline",
      iconPath: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
    },
    {
      name: "Modern Web Apps (SPA/PWA)",
      href: "#services",
      iconPath:
        "M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z",
    },
  ];

  const openDropdown = () => setIsOpen(true);
  const closeDropdown = () => setIsOpen(false);

  const baseClass = isDark
    ? "text-gray-300 hover:text-indigo-400"
    : "text-gray-600 hover:text-indigo-600";
  const menuBg = isDark ? "bg-gray-800" : "bg-white";
  const itemHover = isDark ? "hover:bg-gray-700" : "hover:bg-indigo-50";
  const itemText = isDark ? "text-gray-200" : "text-gray-800";

  return (
    <div
      ref={dropdownRef}
      className="relative z-50 hidden md:block"
      onMouseEnter={openDropdown}
      onMouseLeave={closeDropdown}
    >
      <button
        className={`${baseClass} font-medium transition duration-300 flex items-center space-x-1 p-2 rounded-lg`}
      >
        <span>Services</span>
        <Icon
          path={isOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
          className="w-4 h-4"
        />
      </button>

      {isOpen && (
        <div
          className={`absolute left-1/2 -translate-x-1/2 mt-3 w-72 rounded-xl shadow-2xl ${menuBg} ring-1 ring-black ring-opacity-5 transition-all duration-300 ease-out origin-top`}
        >
          <div
            className="py-2"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="services-menu"
          >
            {services.map((service) => (
              <a
                key={service.name}
                href={service.href}
                onClick={closeDropdown}
                className={`flex items-center space-x-4 px-4 py-3 transition duration-150 ${itemHover} group`}
                role="menuitem"
              >
                <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300">
                  <Icon path={service.iconPath} className="w-5 h-5" />
                </div>

                <span
                  className={`text-sm font-semibold ${itemText} group-hover:text-indigo-500`}
                >
                  {service.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default ServicesDropdown;
