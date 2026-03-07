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
    <header className="relative w-full sticky top-0 z-50 bg-white border-b border-[#EBEEF5] shadow-sm">
      <div className="custom-container">
        <div className="flex items-center justify-between h-[50px] lg:h-20">
          <h1 className="sr-only">Revergent Technologies</h1>
          {/* LEFT: LOGO + NAV */}
          <div className="flex items-center gap-4">
            <CompLogo className="w-28 md:w-32 lg:w-60" />

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
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate("/request-a-demo")}
              className="hidden lg:inline-flex items-center justify-center px-5 py-2 rounded-[14px] bg-[#15BDFF] text-white text-sm shadow-md hover:bg-[#021D59] transition-all"
            >
              Request a Demo
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 rounded-full text-gray-700 hover:bg-gray-100 transition"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU PANEL */}
      <div
        className={`fixed top-0 right-0 h-[calc(100vh-50px)] w-full bg-white z-40 lg:hidden
          transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Top Action Bar */}
        <div className="flex items-center justify-between px-5 py-5 border-b">
          <button
            onClick={() => {
              navigate("/request-a-demo");
              closeMobileMenu();
            }}
            className="px-4 py-2 text-sm font-medium leading-[1.3] text-[#021D59] border border-[#021D59] rounded-[9.28px] active:bg-[#15bdff33]"
          >
            Request a Demo
          </button>

          <button onClick={closeMobileMenu}>
            <X size={30} className="text-[#021D59]" />
          </button>
        </div>

        {/* Scrollable Menu */}
        <div className="max-h-[75vh] overflow-y-auto px-5 py-3">
          <ul className="divide-y">
            {menuData.map((item, index) => (
              <MobileMenuItem
                key={index}
                item={item}
                level={1}
                closeMenu={closeMobileMenu}
                isLast={index === menuData.length - 1}
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
        />
      )}
    </header>
  );
};

export default Header;
