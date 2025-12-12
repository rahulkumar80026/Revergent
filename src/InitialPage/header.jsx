import { useState } from "react";
import { menuData } from "../core/json/menuData";
import DesktopNavItem from "../core/utils/DesktopNavItem";
import CompLogo from "../feature-module/company/compLogo";
import MobileMenuItem from "../core/utils/MobileMenuItem";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b border-[#EBEEF5] shadow-sm">
      <div className="custom-container">
        <div className="flex items-center justify-between h-20">
          {/* LEFT: LOGO + NAV */}
          <div className="flex items-center gap-4">
            {/* Logo */}
            <CompLogo className="w-32 md:w-36 lg:w-50" />

            {/* Desktop Nav */}
            <nav className="hidden lg:block ml-20 xl:ml-28 2xl:ml-36">
              <ul className="flex items-center gap-2">
                {menuData.map((item, index) => (
                  <DesktopNavItem key={index} item={item} />
                ))}
              </ul>
            </nav>
          </div>

          {/* RIGHT: CTA + Mobile Toggle */}
          <div className="flex items-center gap-6">
            {/* CTA */}
            <button
              onClick={() => navigate("/request-a-demo")}
              className=" hidden lg:inline-flex items-center justify-center px-5 py-2 rounded-[14px] bg-[#15BDFF] text-white text-sm shadow-md hover:bg-[#021D59] transition-all "
            >
              Request a Demo
            </button>

            {/* Mobile Icon */}
            <button
              className="lg:hidden p-2 rounded-full text-gray-700 hover:bg-gray-100 transition"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU PANEL */}
      <div
        className={`fixed inset-0 bg-white z-40 lg:hidden transition-transform duration-300
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="pt-20 px-6">
          <button
            onClick={() => navigate("/RequestDemo")}
            className="w-full px-5 py-3 rounded-full text-white bg-[#15BDFF] hover:bg-[#021D59] shadow-md"
          >
            Request a Demo
          </button>

          <ul className="mt-6 divide-y divide-gray-200">
            {menuData.map((item, index) => (
              <MobileMenuItem
                key={index}
                item={item}
                level={1}
                closeMenu={closeMobileMenu}
              />
            ))}
          </ul>
        </div>
      </div>

      {/* Dim Background */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 lg:hidden"
          onClick={closeMobileMenu}
        ></div>
      )}
    </header>
  );
};

export default Header;
