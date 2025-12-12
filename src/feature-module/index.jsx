import AIChatbot from "../components/AIChatbot";
import AIPromise from "../components/AIPromise";
import Careers from "../components/career";
import Contact from "../components/Contact";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import PipelineVisualization from "./PipelineVisualization";
import Testimonials from "./Testimonials";

const MainPage = ({ isDark, setIsDark }) => {
  return (
    <div>
      {/* Header (Sticky Navigation) */}
      <Header isDark={isDark} setIsDark={setIsDark} />

      <main>
        {/* Hero Section */}
        <Hero isDark={isDark} />

        {/* Testimonials (New Feature) */}
        <Testimonials isDark={isDark} />

        {/* CI/CD Pipeline Visualization (NEW ADVANCED FEATURE) */}
        <PipelineVisualization id="pipeline" isDark={isDark} />

        {/* Services Section */}
        <Services isDark={isDark} />

        {/* AI Promise Section */}
        <AIPromise isDark={isDark} />

        {/* Portfolio / Case Studies Section */}
        <Portfolio isDark={isDark} />

        {/* Careers Section (New Feature) */}
        <Careers isDark={isDark} />

        {/* Contact Form Section */}
        <Contact isDark={isDark} />
      </main>

      {/* Footer */}
      <Footer isDark={isDark} />

      {/* Floating AI Chatbot (Using minimal placeholder for space) */}
      <AIChatbot isDark={isDark} />

      {/* Global custom CSS for scrollbar */}
      <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: ${isDark ? "#1f2937" : "#f1f1f1"};
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: ${isDark ? "#4b5563" : "#888"};
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: ${isDark ? "#6b7280" : "#555"};
                }
            `}</style>
    </div>
  );
};

export default MainPage;
