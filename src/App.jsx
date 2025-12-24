import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topbar from "./InitialPage/topbar";
import Header from "./InitialPage/header";

import Hero from "./feature-module/components/hero";
import TrustedBy from "./feature-module/components/TrustedBy";
import WhyRevergentSection from "./feature-module/components/WhyRevergent";
import UseCases from "./feature-module/components/UseCases";

import BusinessSidekick from "./feature-module/components/BusinessSidekick/BusinessSidekick";

import AboutUs from "./feature-module/pages/about";
import Contact from "./feature-module/pages/contact";
import Careers from "./feature-module/pages/career";
import NotFoundPage from "./feature-module/pages/error404";
import Footer from "./feature-module/pages/footer";
import AIChatbot from "./feature-module/components/ai/aIChatbot";
import CookieConsentBanner from "./feature-module/components/CookieConsentBanner";
import { COOKIE_KEY } from "../environment";
import ScrollToTop from "./core/common/ScrollToTop";
import BigIdeas from "./feature-module/components/BigIdeas";
import NextStep from "./feature-module/components/NextStep";
import RequestDemo from "./feature-module/components/RequestDemo";
import Error404 from "./feature-module/pages/error404";

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

  // This state change happens AFTER the banner slide-out animation starts
  const handleConsentAction = (accepted) => setCookieConsentStatus(accepted ? "accepted" : "declined");

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
                <WhyRevergentSection />
                <UseCases />
                <BusinessSidekick />
                <BigIdeas />
                <NextStep />
              </>
            }
          />
          <Route path="/request-a-demo" element={<RequestDemo />} />
          <Route path="/solutions" element={<AboutUs isDark={isDark} />} />
          <Route path="/about" element={<AboutUs isDark={isDark} />} />
          <Route path="/contact" element={<Contact isDark={isDark} />} />
          <Route path="/careers" element={<Careers isDark={isDark} />} />
          <Route path="*" element={<Error404 />} />
        </Routes>

        <Footer />
        <AIChatbot />
        <CookieConsentBanner onConsentAction={handleConsentAction} />
      </div>
    </Router>
  );
};

export default App;
