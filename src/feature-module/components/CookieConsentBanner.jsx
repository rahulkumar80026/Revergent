import React, { useState, useEffect } from "react";
import { Settings2, X } from "lucide-react";
import { COOKIE_KEY } from "../../../environment";

// =========================================================
// 🎨 BRAND COLOR SYSTEM
// =========================================================
const DEEP_MIDNIGHT_BLUE = "#19183B";
const NEAR_WHITE = "#E7F2EF";
const SLATE_BLUE = "#708993";
const CALM_MINT = "#A1C2BD";
const DARK_MODE_BG = "#0F0E20";
const LIGHT_MODE_BG = NEAR_WHITE;
const WARM_ACCENT = "#FFB74D";
const MIDNIGHT_MINT_ACCENT = "#4A877E";

// =========================================================
// 🍪 Cookie Consent Banner
// =========================================================
const CookieConsentBanner = ({ isDark, onConsentAction }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const bgColor = isDark ? DARK_MODE_BG : LIGHT_MODE_BG;
  const textColor = isDark ? NEAR_WHITE : DEEP_MIDNIGHT_BLUE;
  const accent = isDark ? WARM_ACCENT : MIDNIGHT_MINT_ACCENT;
  const subtle = isDark ? CALM_MINT : SLATE_BLUE;

  // Handle first-time mount
  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_KEY);
    if (consent !== "accepted" && consent !== "declined") {
      setIsMounted(true);
      setTimeout(() => setIsVisible(true), 200);
    }
  }, []);

  // Handle actions
  const handleAction = (status) => {
    localStorage.setItem(COOKIE_KEY, status);
    setIsVisible(false);
    setTimeout(() => setIsMounted(false), 500);
    onConsentAction?.(status === "accepted");
  };

  if (!isMounted) return null;

  return (
    <div
      className={`fixed bottom-4 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:max-w-4xl z-[100] 
        rounded-2xl shadow-2xl border backdrop-blur-md px-6 py-5 transition-all duration-700
        ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
        }`}
      style={{
        background: isDark
          ? `linear-gradient(135deg, ${DEEP_MIDNIGHT_BLUE}, ${DARK_MODE_BG})`
          : `linear-gradient(135deg, ${NEAR_WHITE}, #ffffff)`,
        borderColor: isDark ? WARM_ACCENT + "33" : MIDNIGHT_MINT_ACCENT + "44",
      }}
    >
      {/* Top Row — Title + Close */}
      <div className="flex items-start justify-between mb-3">
        <h3
          className="text-lg font-semibold tracking-tight"
          style={{ color: accent }}
        >
          Cookie Preferences
        </h3>
        <button
          onClick={() => handleAction("declined")}
          className="p-1 rounded-full hover:opacity-80 transition-all"
          aria-label="Close cookie banner"
          style={{ color: subtle }}
        >
          <X size={18} />
        </button>
      </div>

      {/* Main Text */}
      <p
        className="text-sm md:text-base leading-relaxed mb-5"
        style={{ color: textColor }}
      >
        We use cookies to enhance your browsing experience, analyze site
        performance, and support our marketing efforts. By clicking{" "}
        <strong style={{ color: accent }}>“Accept All”</strong>, you consent to
        our use of cookies as outlined in our{" "}
        <a
          href="#privacy"
          className="underline font-medium hover:opacity-80 transition-opacity"
          style={{ color: accent }}
        >
          Privacy Policy
        </a>
        .
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row justify-end gap-3">
        <button
          onClick={() => {
            console.log("Open cookie settings modal");
            handleAction("settings");
          }}
          className="flex items-center justify-center px-4 py-2 rounded-lg font-semibold text-sm border transition-all hover:scale-[1.03]"
          style={{
            color: subtle,
            borderColor: subtle,
            backgroundColor: "transparent",
          }}
        >
          <Settings2 className="w-4 h-4 mr-2" />
          Manage Preferences
        </button>

        <button
          onClick={() => handleAction("declined")}
          className="px-5 py-2 rounded-lg font-semibold text-sm transition-all hover:scale-[1.03]"
          style={{
            backgroundColor: subtle,
            color: NEAR_WHITE,
            boxShadow: `0 4px 10px ${subtle}60`,
          }}
        >
          Reject All
        </button>

        <button
          onClick={() => handleAction("accepted")}
          className="px-5 py-2 rounded-lg font-semibold text-sm transition-all hover:scale-[1.05]"
          style={{
            backgroundColor: accent,
            color: DEEP_MIDNIGHT_BLUE,
            boxShadow: `0 4px 10px ${accent}70`,
          }}
        >
          Accept All
        </button>
      </div>
    </div>
  );
};

export default CookieConsentBanner;
