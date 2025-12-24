import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import logo_1 from "../../../assets/img/comp/logo_white.png";

const Footer = () => {
  // Links updated for Revergent Technologies specialization
  const footerLinks = [
    {
      title: "Company",
      links: ["Home", "About Us", "Our Process", "Careers"],
    },
    {
      title: "Core Services",
      links: [
        "Custom Software Development",
        "AI & Machine Learning",
        "Enterprise Automation",
        "Cloud Transformation",
      ],
    },
    {
      title: "Expertise",
      links: ["Product Strategy", "UX/UI Design", "Data Engineering", "Legacy Modernization"],
    },
    {
      title: "Resources",
      links: ["Case Studies", "Whitepapers", "Tech Blog", "Press Kit"],
    },
    {
      title: "Support & Legal",
      links: ["Contact Us", "Privacy Policy", "Terms of Service", "Sitemap"],
    },
  ];

  return (
    <footer className="bg-[#021D59] text-white text-sm pt-14 pb-10">
      <div className="max-w-[1300px] mx-auto px-6">
        {/* GRID LAYOUT */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 border-b border-white/10 pb-12">
          
          {/* LOGO COLUMN */}
          <div className="col-span-2 lg:col-span-1">
            <img src={logo_1} alt="Revergent Logo" className="h-[32px] mb-4" />
            <p className="text-[13px] text-white/70 leading-relaxed">
              Engineering smarter tomorrows through thoughtful software and AI solutions.
            </p>
            <p className="text-[13px] text-white/60 mt-4 italic">
              © Revergent Technologies.
            </p>
          </div>

          {/* LINK COLUMNS */}
          {footerLinks.map((col, i) => (
            <div key={i} className="flex flex-col space-y-3">
              <h5 className="font-semibold text-white/50 uppercase text-[11px] tracking-wider mb-2">
                {col.title}
              </h5>
              {col.links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-white/85 hover:text-[#00df9d] transition-colors duration-300 text-[14px]"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* BOTTOM ROW: Socials & Disclaimer */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 space-y-4 md:space-y-0">
          <div className="text-[12px] text-white/50">
            Headquartered in Noida INDIA | Global Delivery
          </div>
          
          <div className="flex space-x-4">
            {/* X Icon */}
            <a
              href="#"
              aria-label="Follow us on X"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 
                         hover:bg-[#00df9d] hover:border-[#00df9d] transition-all duration-300 group"
            >
              <FontAwesomeIcon icon={faXTwitter} className="w-4 h-4 text-white group-hover:text-[#021D59]" />
            </a>

            {/* LinkedIn Icon */}
            <a
              href="#"
              aria-label="Follow us on LinkedIn"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 
                         hover:bg-[#00df9d] hover:border-[#00df9d] transition-all duration-300 group"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="w-4 h-4 text-white group-hover:text-[#021D59]"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;