import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topbar from "./feature-module/components/topbar";
import Header from "./feature-module/components/header";

import Hero from "./feature-module/components/hero";
import TrustedBy from "./feature-module/components/TrustedBy";
import WhyEvergentSection from "./feature-module/components/WhyEvergentSection";
import UseCasesSection from "./feature-module/components/UseCasesSection";

import BusinessSidekick from "./feature-module/components/BusinessSidekick/BusinessSidekick";

import AboutUs from "./feature-module/components/pages/about";
import Contact from "./feature-module/components/pages/contact";
import Careers from "./feature-module/components/pages/career";
import NotFoundPage from "./feature-module/components/NotFoundPage";
import Footer from "./feature-module/components/pages/footer";
import AIChatbot from "./feature-module/components/aIChatbot";
import CookieConsentBanner from "./feature-module/components/CookieConsentBanner";
import { COOKIE_KEY } from "../environment";
import ScrollToTop from "./core/common/ScrollToTop";
import BigIdeasSection from "./feature-module/components/BigIdeasSection";
import NextStepSection from "./feature-module/components/NextStepSection";

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const [cookieConsentStatus, setCookieConsentStatus] = useState(
    localStorage.getItem(COOKIE_KEY)
  );

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  // const handleConsentAction = (accepted) => {
  //   // This state change happens AFTER the banner slide-out animation starts
  //   setCookieConsentStatus(accepted ? "accepted" : "declined");
  // };

  // const mainBg = isDark ? "bg-gray-900" : "bg-white";

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50 font-agrandir">
        <Topbar />
        <Header />

        <Routes>
          {/* HOME PAGE */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <TrustedBy />
                <WhyEvergentSection />
                <UseCasesSection />
                <BusinessSidekick />
                <BigIdeasSection />
                <NextStepSection />
              </>
            }
          />
          {/* ALL SOLUTIONS PAGE */}
          <Route path="/solutions" element={<AboutUs isDark={isDark} />} />
          <Route path="/about" element={<AboutUs isDark={isDark} />} />
          <Route path="/contact" element={<Contact isDark={isDark} />} />
          <Route path="/careers" element={<Careers isDark={isDark} />} />
          <Route path="*" element={<NotFoundPage isDark={isDark} />} />
        </Routes>

        <Footer isDark={isDark} />
        <AIChatbot isDark={isDark} />
        {/* <CookieConsentBanner
          isDark={isDark}
          onConsentAction={handleConsentAction}
        /> */}
      </div>
    </Router>
  );
};

export default App;
