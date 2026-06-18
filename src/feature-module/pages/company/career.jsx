// import React from 'react';
// // import PrimaryButton from './PrimaryButton';

// // --- NEW COLOR PALETTE ---
// const DEEP_MIDNIGHT_BLUE = "#19183B";
// const NEAR_WHITE = "#E7F2EF";
// const SLATE_BLUE = "#708993";
// const CALM_MINT = "#A1C2BD";
// const DARK_MODE_CARD_BG = "#222543"; // Slightly lighter blue for card background
// // -------------------------

// const Careers = ({ isDark }) => {
//     const sectionBg = isDark ? DEEP_MIDNIGHT_BLUE : NEAR_WHITE;
//     const textPrimary = isDark ? NEAR_WHITE : DEEP_MIDNIGHT_BLUE;
//     const textSecondary = isDark ? SLATE_BLUE : SLATE_BLUE;
//     const cardBg = isDark ? DARK_MODE_CARD_BG : CALM_MINT;
//     const tagBg = isDark ? SLATE_BLUE : SLATE_BLUE; // Slate Blue for tag background
//     const tagText = isDark ? NEAR_WHITE : DEEP_MIDNIGHT_BLUE; // High contrast text for tags

//     const jobRoles = [
//         { title: "Senior AI Engineer (Gemini)", tags: ['Python', 'LLMs', 'GCP'], location: 'Remote/Bangalore' },
//         { title: "Full Stack Architect (React/Node)", tags: ['Next.js', 'Microservices', 'AWS'], location: 'Hybrid/Pune' },
//         { title: "Cloud & DevOps Specialist", tags: ['Kubernetes', 'Terraform', 'CI/CD'], location: 'Remote' },
//     ];

//     return (
//         <section id="careers" className={`py-24 transition duration-300 border-t`} style={{ backgroundColor: sectionBg, borderColor: SLATE_BLUE, paddingTop: "160px", }}>
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="text-center mb-16">
//                     <h2 className={`text-4xl font-extrabold sm:text-5xl`} style={{ color: textPrimary }}>Join the Revolution: Engineer the Future</h2>
//                     <p className={`mt-4 text-xl max-w-3xl mx-auto`} style={{ color: textSecondary }}>
//                         We are actively looking for elite engineers who are passionate about scale, intelligence, and modern methodologies.
//                     </p>
//                 </div>

//                 <div className="space-y-6 max-w-4xl mx-auto">
//                     {jobRoles.map((job, index) => (
//                         <div key={index} className={`flex flex-col md:flex-row items-center justify-between p-6 rounded-xl shadow-xl hover:shadow-2xl transition duration-500 border hover:border-indigo-500/50`} style={{ backgroundColor: cardBg, borderColor: isDark ? SLATE_BLUE : CALM_MINT }}>
//                             <div>
//                                 <h3 className={`text-xl font-bold mb-1`} style={{ color: textPrimary }}>{job.title}</h3>
//                                 <p className={`text-sm mb-3`} style={{ color: textSecondary }}>{job.location}</p>
//                                 <div className="flex flex-wrap gap-2">
//                                     {job.tags.map(tag => (
//                                         <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full shadow-sm" style={{ backgroundColor: tagBg, color: tagText }}>
//                                             {tag}
//                                         </span>
//                                     ))}
//                                 </div>
//                             </div>
// {/*                             <PrimaryButton className="mt-4 md:mt-0 md:ml-6" isPrimary={false}>
//                                 Apply Now
//                             </PrimaryButton> */}
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }
// export default Careers;

import { useState } from "react";
import { Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Careers() {
  const navigate = useNavigate();
  const jobs = [
    {
      title: "Frontend Developer",
      location: "Greater Noida, India",
      category: "Engineering",
    },
    {
      title: ".NET Backend Developer",
      location: "Remote / India",
      category: "Engineering",
    },
    {
      title: "UI/UX Designer",
      location: "Greater Noida, India",
      category: "Design",
    },
    {
      title: "React Developer",
      location: "Remote",
      category: "Engineering",
    },
  ];

  // eslint-disable-next-line no-unused-vars
  const [search, setSearch] = useState("");

  // eslint-disable-next-line no-unused-vars
  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="bg-white">
      {/* HERO SECTION */}

      <section className="custom-container mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-[#0b1d4d] to-[#1a2f7a] rounded-3xl p-16 text-white shadow-xl">
          <h1 className="text-5xl font-semibold leading-tight mb-6">
            Big Ideas Require <br /> Big Talent
          </h1>

          <p className="max-w-xl text-lg text-gray-200 mb-8 font-light">
            At Revergent Technologies we build advanced digital solutions, cloud
            platforms and enterprise software used by businesses across
            industries. Join a team that is shaping the future of technology. We collaborate globally to implement robust systems using modern tools like React, cloud orchestration, and database scaling. To learn about our capabilities, check out our <Link to="/services/custom-software-development" className="text-[#2cc5d5] hover:underline font-normal">custom software services</Link> or read our recent <Link to="/resources/case-studies" className="text-[#2cc5d5] hover:underline font-normal">customer case studies</Link>.
          </p>

          <button
            onClick={() =>
              document
                .getElementById("open-positions")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="bg-white text-[#0b1d4d] px-6 py-3 rounded-xl font-medium hover:scale-105 transition"
          >
            See Open Positions
          </button>
        </div>
      </section>

      {/* CULTURE SECTION */}

      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl font-semibold text-[#0b1d4d] mb-4">
          Our Culture & Values
        </h2>

        <p className="text-gray-500 max-w-2xl mx-auto mb-14">
          Our culture is built on innovation, collaboration and continuous
          learning. We empower people to build the technologies that shape
          tomorrow.
        </p>

        <div className="grid md:grid-cols-2 gap-14 items-center">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692"
            className="rounded-3xl"
          />

          <div className="text-left">
            <h3 className="text-2xl font-semibold text-[#0b1d4d] mb-4">
              Innovation Driven
            </h3>

            <p className="text-gray-600 mb-6">
              We encourage experimentation and innovation. Our engineers and
              designers build scalable solutions using modern technologies
              including React, Cloud Infrastructure, AI integrations and
              enterprise APIs.
            </p>

            <h3 className="text-2xl font-semibold text-[#0b1d4d] mb-4">
              Global Collaboration
            </h3>

            <p className="text-gray-600">
              Our teams collaborate across countries and industries to solve
              complex problems and deliver world-class digital products.
            </p>
          </div>
        </div>
      </section>

      {/* VIDEO SECTION */}

      <section className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-semibold text-[#0b1d4d] mb-10">
          Life at Revergent
        </h2>

        <div className="relative rounded-3xl overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
            className="w-full"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white p-5 rounded-full shadow-lg hover:scale-110 transition">
              ▶
            </button>
          </div>
        </div>

        <p className="text-gray-600 mt-6 max-w-xl mx-auto">
          "We're proud to be engineers, designers and innovators. Revergent is a
          place where ideas turn into real world technology products."
        </p>
      </section>
      {/* OPEN POSITIONS */}

      <section
        id="open-positions"
        className="py-28 bg-gradient-to-b from-[#f8fbff] to-white"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}

          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-[#0b1d4d] mb-4">
              Open Positions
            </h2>

            <p className="text-gray-500 max-w-2xl mx-auto">
              Join Revergent Technologies and help build scalable digital
              products, cloud platforms and enterprise applications used by
              businesses worldwide.
            </p>
          </div>

          {/* Search */}

          <div className="max-w-xl mx-auto mb-16">
            <div className="relative">
              <input
                type="text"
                placeholder="Search jobs, skills, or roles..."
                className="
                    w-full
                    rounded-2xl
                    border
                    px-6
                    py-4
                    shadow-sm
                    focus:ring-2
                    focus:ring-[#2cc5d5]
                    outline-none"
              />
            </div>
          </div>

          {/* Job Cards */}

          <div className="grid md:grid-cols-2 gap-8">
            {/* CARD */}

            <div className="group bg-white rounded-2xl border p-7 hover:shadow-2xl transition duration-300">
              <div className="flex justify-between items-start mb-5">
                <div>
                  <h3 className="text-xl font-semibold text-[#0b1d4d] group-hover:text-[#2cc5d5] transition">
                    Frontend Developer
                  </h3>

                  <p className="text-sm text-gray-400 mt-1">
                    Engineering • Full Time
                  </p>
                </div>

                <span className="text-sm bg-[#e6fbfd] text-[#2cc5d5] px-3 py-1 rounded-full">
                  Remote
                </span>
              </div>

              <p className="text-gray-500 mb-6">
                Build modern web interfaces using React, Tailwind CSS and
                scalable APIs to deliver high performance digital experiences.
              </p>

              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-400">
                  India • Remote Friendly
                </div>

                <button
                  className="
                    bg-[#2cc5d5]
                    text-white
                    px-5
                    py-2
                    rounded-lg
                    group-hover:scale-105
                    transition"
                >
                  Apply
                </button>
              </div>
            </div>

            {/* CARD */}

            <div className="group bg-white rounded-2xl border p-7 hover:shadow-2xl transition duration-300">
              <div className="flex justify-between items-start mb-5">
                <div>
                  <h3 className="text-xl font-semibold text-[#0b1d4d] group-hover:text-[#2cc5d5] transition">
                    .NET Backend Developer
                  </h3>

                  <p className="text-sm text-gray-400 mt-1">
                    Engineering • Full Time
                  </p>
                </div>

                <span className="text-sm bg-[#e6fbfd] text-[#2cc5d5] px-3 py-1 rounded-full">
                  India
                </span>
              </div>

              <p className="text-gray-500 mb-6">
                Design scalable backend systems and enterprise APIs using .NET
                Core and modern cloud architecture.
              </p>

              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-400">
                  Greater Noida / Remote
                </div>

                <button
                  className="
                    bg-[#2cc5d5]
                    text-white
                    px-5
                    py-2
                    rounded-lg
                    group-hover:scale-105
                    transition"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative bg-[#0b1d4d] text-white rounded-3xl p-14 overflow-hidden shadow-xl">
            {/* Content */}

            <div className="relative z-10 max-w-xl text-left">
              <h2 className="text-3xl font-semibold mb-4">
                Build the Future with Revergent
              </h2>

              <p className="text-gray-300 mb-8 font-light">
                We’re always looking for talented engineers, designers, and
                problem solvers who are passionate about building innovative
                technology. If you don't see a position that matches your
                skills, share your profile with us — the right opportunity might
                be just around the corner. Submit your profile by visiting our <Link to="/careers/get-in-touch" className="text-cyan-300 hover:underline font-normal">careers get in touch page</Link>, or reach out via our general <Link to="/company/contact" className="text-cyan-300 hover:underline font-normal">contact team</Link>.
              </p>

              <button
                className="bg-white text-[#0b1d4d] px-6 py-3 rounded-xl font-medium hover:scale-105 transition"
                onClick={() => navigate("/careers/get-in-touch")}
              >
                Get in touch
              </button>
            </div>

            {/* Background Shapes */}

            <div className="absolute bottom-0 right-0 flex gap-6 opacity-90">
              <div className="w-40 h-40 bg-gradient-to-r from-cyan-600 to-teal-400 rounded-lg blur-sm"></div>

              <div className="w-40 h-40 bg-gradient-to-r from-cyan-400 to-teal-400 rounded-lg blur-sm"></div>

              <div className="w-32 h-32 bg-gradient-to-r from-teal-400 to-green-400 rounded-xl blur-xl"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
