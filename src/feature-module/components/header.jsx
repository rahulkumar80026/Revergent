import { useState } from "react";
import { menuData } from "../../core/json/menuData";
import DesktopNavItem from "../../core/utils/DesktopNavItem";
import CompLogo from "../company/compLogo";
import MobileMenuItem from "../../core/utils/MobileMenuItem";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="w-full left-0 right-0 sticky top-0 z-50 bg-white shadow-lg border-b border-gray-100">
      <div className="custom-container">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <CompLogo className="w-32 lg:w-50" />

          {/* Right Section (Desktop Nav + Button + Mobile Toggle) */}
          <div className="flex items-center space-x-6">
            {/* Desktop Navigation (Hidden on mobile) */}
            <nav className="hidden lg:block mr-[129px]">
              <ul className="flex space-x-1">
                {menuData.map((item, index) => (
                  <DesktopNavItem key={index} item={item} />
                ))}
              </ul>
            </nav>

            {/* Request a Demo Button */}
            <a
              // href="https://evergent.com/request-a-demo"
              className="hidden lg:inline-flex items-center justify-center px-3.5 py-2 mr-0 border border-transparent text-sm rounded-[14px] text-white bg-[#15BDFF] hover:bg-[#021D59] transition-colors duration-200 shadow-md"
              onClick={() => navigate("/RequestDemo")}
            >
              Request a Demo
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              className="lg:hidden p-2 rounded-full text-gray-700 hover:bg-gray-100 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu Drawer */}
          <div
            className={`fixed inset-0 lg:hidden bg-white z-40 overflow-y-auto transform transition-transform duration-300 ease-in-out ${
              isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col h-full pt-16">
              <div className="px-4 py-4 space-y-2">
                <a
                  href="https://evergent.com/request-a-demo"
                  className="w-full inline-flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                  onClick={closeMobileMenu}
                >
                  Request a Demo
                </a>
              </div>
              <nav className="flex-grow">
                <ul className="divide-y divide-gray-200 border-t border-gray-200">
                  {menuData.map((item, index) => (
                    <MobileMenuItem
                      key={index}
                      item={item}
                      level={1}
                      closeMenu={closeMobileMenu}
                    />
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          {/* Background overlay for mobile menu */}
          {isMobileMenuOpen && (
            <div
              className="fixed inset-0 bg-black opacity-30 z-30 lg:hidden"
              onClick={closeMobileMenu}
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
