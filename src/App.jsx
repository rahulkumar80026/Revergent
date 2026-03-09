import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Topbar from "./InitialPage/topbar";
import Header from "./InitialPage/header";

import Hero from "./feature-module/components/hero";
import TrustedBy from "./feature-module/components/TrustedBy";
import WhyRevergent from "./feature-module/components/WhyRevergent";
import UseCases from "./feature-module/components/UseCases";

import BusinessSidekick from "./feature-module/components/BusinessSidekick/BusinessSidekick";

import AboutUs from "./feature-module/pages/about";
import Contact from "./feature-module/pages/contact";
import Careers from "./feature-module/pages/career";
import Footer from "./feature-module/pages/footer";
import AIChatbot from "./feature-module/components/ai/aIChatbot";
import CookieConsentBanner from "./feature-module/components/CookieConsentBanner";
import { COOKIE_KEY } from "../environment";
import ScrollToTop from "./core/common/ScrollToTop";
import BigIdeas from "./feature-module/components/BigIdeas";
import NextStep from "./feature-module/components/NextStep";
import RequestDemo from "./feature-module/components/RequestDemo";
import Error404 from "./feature-module/pages/error404";
import Pos from "./feature-module/pages/products/pos";
import Classora from "./feature-module/pages/products/classora";
import Crm from "./feature-module/pages/products/crm";
import AiAutomationSuite from "./feature-module/pages/products/aiAutomationSuite";
import GetInTouch from "./feature-module/components/GetInTouch";
import Leadership from "./feature-module/pages/leader";
import Blog from "./feature-module/pages/blog";
import CustomSoftwareDevelopment from "./feature-module/pages/services/customSoftware";
import MobileAppDevelopment from "./feature-module/pages/services/MobileAppDevelopment";
import AIIntelligentAutomation from "./feature-module/pages/services/AIIntelligentAutomation";

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const [cookieConsentStatus, setCookieConsentStatus] = useState(
    localStorage.getItem(COOKIE_KEY),
  );

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  // This state change happens AFTER the banner slide-out animation starts
  const handleConsentAction = (accepted) =>
    setCookieConsentStatus(accepted ? "accepted" : "declined");

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
                <WhyRevergent />
                <UseCases />
                <BusinessSidekick />
                <BigIdeas />
                <NextStep />
              </>
            }
          />
          <Route path="/request-a-demo" element={<RequestDemo />} />
          <Route path="/products/pos" element={<Pos />} />
          <Route path="/products/classora" element={<Classora />} />
          <Route path="/products/cloud-crm" element={<Crm />} />
          <Route path="/products/ai-suite" element={<AiAutomationSuite />} />
          <Route
            path="/services/custom-software-development"
            element={<CustomSoftwareDevelopment />}
          />
          <Route
            path="/services/mobile-app-development"
            element={<MobileAppDevelopment />}
          />
          <Route
            path="/services/ai-automation"
            element={<AIIntelligentAutomation />}
          />
          <Route path="/resources/blog" element={<Blog />} />

          <Route path="/solutions" element={<AboutUs />} />
          <Route path="/company/about" element={<AboutUs />} />
          <Route path="/company/leadership" element={<Leadership />} />

          <Route path="/company/contact" element={<Contact />} />
          <Route path="/company/careers" element={<Careers />} />
          <Route path="/careers/get-in-touch" element={<GetInTouch />} />

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
