import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import logo_1 from "../../../assets/img/comp/logo_white.png";

const EvergentFooter = () => {
  const footerLinks = [
    ["Home", "About", "Careers"],
    [
      "Monetization Platform",
      "Royalty Management",
      "Captivate – AI-powered Churn Management",
    ],
    ["Evergent Go", "Partners", "Press Kit"],
    ["Leadership", "Contact Us", "Terms"],
    ["Support Portal", "Privacy Policy", "Evergent Sitemap"],
  ];

  return (
    <footer className="bg-[#021D59] text-white text-sm pt-14 pb-10">
      <div className="max-w-[1300px] mx-auto px-6">
        {/* GRID LAYOUT */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 border-b border-white/10 pb-10">
          {/* LOGO COLUMN */}
          <div className="col-span-2 lg:col-span-1">
            <img src={logo_1} alt="Revergent Logo" className="h-[32px] mb-3" />
            <p className="text-[13px] text-white/70">
              © Revergent Technologies.
            </p>
          </div>

          {/* LINK COLUMNS */}
          {footerLinks.map((column, i) => (
            <div key={i} className="space-y-2">
              {column.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-white/85 hover:text-white transition text-[14px]"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* SOCIAL ROW */}
        <div className="flex justify-end pt-6 space-x-4">
          {/* X Icon */}
          <a
            href="#"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-white/40 
                       hover:bg-white/15 transition"
          >
            <FontAwesomeIcon icon={faXTwitter} className="w-4 h-4 text-white" />
          </a>

          {/* LinkedIn Icon */}
          <a
            href="#"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-white/40 
                       hover:bg-white/15 transition"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="w-4 h-4 text-white"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default EvergentFooter;
