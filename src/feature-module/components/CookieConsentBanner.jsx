import React, { useState, useEffect } from "react";
import { COOKIE_KEY } from "../../../environment";

const CookieConsentBanner = ({ onConsentAction }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);

    if (consent !== "accepted" && consent !== "declined") {
      setVisible(true);
    }
  }, []);

  const handleAction = (status) => {
    localStorage.setItem(COOKIE_KEY, status);
    setVisible(false);
    onConsentAction?.(status === "accepted");
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t shadow-lg z-[999]">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        {/* Text Section */}
        <div className="text-gray-700 text-sm leading-relaxed max-w-3xl">
          <p>
            Revergent Technologies uses cookies to enhance your browsing
            experience, analyze website traffic, and improve our services.
            Cookies help us understand how visitors interact with our website
            and allow us to remember your preferences.
            {/* see our{" "}
             <a
              href="/privacy-policy"
              className="text-blue-600 underline font-medium"
            >
              Privacy Policy
            </a>
            . */}
          </p>

          <p className="mt-2">
            By clicking "Accept", you agree to the use of cookies as described
            in our Privacy Policy. You may decline cookies at any time, and your
            preference will be saved in your browser.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 shrink-0">
          <button
            onClick={() => handleAction("accepted")}
            className="px-7 py-2 rounded-[14px] border-1 border-[#15BDFF] bg-[#15BDFF] text-white text-lg shadow-md hover:bg-[#021D59] transition-all"
          >
            Accept
          </button>

          <button
            onClick={() => handleAction("declined")}
            className="px-7 py-2 rounded-[14px] border border-[#021D59] text-[#021D59] font-lg hover:text-white hover:bg-[#021D59] transition"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
