// import React from "react";  
// import PortfolioCard from "./portfolioCard";

// const Portfolio = ({ isDark }) => {
//   const sectionBg = isDark ? "bg-gray-900" : "bg-white";
//   const textPrimary = isDark ? "text-gray-100" : "text-gray-900";
//   const textSecondary = isDark ? "text-gray-400" : "text-gray-500";

//   return (
//     <section
//       id="portfolio"
//       className={`py-24 ${sectionBg} transition duration-300`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className={`text-4xl font-extrabold ${textPrimary} sm:text-5xl`}>
//             Engineered Solutions in Action
//           </h2>
//           <p className={`mt-4 text-xl ${textSecondary} max-w-3xl mx-auto`}>
//             A glance at the high-impact projects we've recently delivered for
//             our partners.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           <PortfolioCard
//             title="AI-Driven Data Platform"
//             tags={["Gemini", "Python/ML", "BigQuery", "Next.js"]}
//             description="Developed a high-volume data analytics platform with predictive AI functionality."
//             imagePlaceholder="bg-indigo-700/50"
//             isDark={isDark}
//           />
//           <PortfolioCard
//             title="Real-Time Trading Interface"
//             tags={["React/TS", "WebSockets", "AWS Lambda"]}
//             description="Built a low-latency, real-time trading dashboard for financial experts."
//             imagePlaceholder="bg-teal-700/50"
//             isDark={isDark}
//           />
//           <PortfolioCard
//             title="Global SaaS CRM"
//             tags={["Next.js", "Node.js", "PostgreSQL", "Cloud Run"]}
//             description="A scalable customer relationship management system deployed globally on managed cloud infrastructure."
//             imagePlaceholder="bg-pink-700/50"
//             isDark={isDark}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Portfolio;

import React from "react";  
import PortfolioCard from "./portfolioCard";

// --- NEW COLOR PALETTE ---
const DEEP_MIDNIGHT_BLUE = "#19183B";
const NEAR_WHITE = "#E7F2EF";
const SLATE_BLUE = "#708993";
// -------------------------

const Portfolio = ({ isDark }) => {
  const sectionBg = isDark ? DEEP_MIDNIGHT_BLUE : NEAR_WHITE;
  const textPrimary = isDark ? NEAR_WHITE : DEEP_MIDNIGHT_BLUE;
  const textSecondary = isDark ? SLATE_BLUE : SLATE_BLUE;

  return (
    <section
      id="portfolio"
      className={`py-24 transition duration-300`}
      style={{ backgroundColor: sectionBg }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-extrabold sm:text-5xl`} style={{ color: textPrimary }}>
            Engineered Solutions in Action
          </h2>
          <p className={`mt-4 text-xl max-w-3xl mx-auto`} style={{ color: textSecondary }}>
            A glance at the high-impact projects we've recently delivered for
            our partners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <PortfolioCard
            title="AI-Driven Data Platform"
            tags={["Gemini", "Python/ML", "BigQuery", "Next.js"]}
            description="Developed a high-volume data analytics platform with predictive AI functionality."
            imagePlaceholder="bg-blue-700/50" // Updated to a matching blue shade
            isDark={isDark}
          />
          <PortfolioCard
            title="Real-Time Trading Interface"
            tags={["React/TS", "WebSockets", "AWS Lambda"]}
            description="Built a low-latency, real-time trading dashboard for financial experts."
            imagePlaceholder="bg-cyan-700/50" // Updated to a cool cyan
            isDark={isDark}
          />
          <PortfolioCard
            title="Global SaaS CRM"
            tags={["Next.js", "Node.js", "PostgreSQL", "Cloud Run"]}
            description="A scalable customer relationship management system deployed globally on managed cloud infrastructure."
            imagePlaceholder="bg-fuchsia-700/50" // Updated to a complementary pink/fuchsia
            isDark={isDark}
          />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;