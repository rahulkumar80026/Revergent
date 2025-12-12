
import React from 'react';
// import PrimaryButton from './PrimaryButton';

// --- NEW COLOR PALETTE ---
const DEEP_MIDNIGHT_BLUE = "#19183B";
const NEAR_WHITE = "#E7F2EF";
const SLATE_BLUE = "#708993";
const CALM_MINT = "#A1C2BD";
const DARK_MODE_CARD_BG = "#222543"; // Slightly lighter blue for card background
// -------------------------

const Careers = ({ isDark }) => {
    const sectionBg = isDark ? DEEP_MIDNIGHT_BLUE : NEAR_WHITE;
    const textPrimary = isDark ? NEAR_WHITE : DEEP_MIDNIGHT_BLUE;
    const textSecondary = isDark ? SLATE_BLUE : SLATE_BLUE;
    const cardBg = isDark ? DARK_MODE_CARD_BG : CALM_MINT;
    const tagBg = isDark ? SLATE_BLUE : SLATE_BLUE; // Slate Blue for tag background
    const tagText = isDark ? NEAR_WHITE : DEEP_MIDNIGHT_BLUE; // High contrast text for tags

    const jobRoles = [
        { title: "Senior AI Engineer (Gemini)", tags: ['Python', 'LLMs', 'GCP'], location: 'Remote/Bangalore' },
        { title: "Full Stack Architect (React/Node)", tags: ['Next.js', 'Microservices', 'AWS'], location: 'Hybrid/Pune' },
        { title: "Cloud & DevOps Specialist", tags: ['Kubernetes', 'Terraform', 'CI/CD'], location: 'Remote' },
    ];

    return (
        <section id="careers" className={`py-24 transition duration-300 border-t`} style={{ backgroundColor: sectionBg, borderColor: SLATE_BLUE, paddingTop: "160px", }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className={`text-4xl font-extrabold sm:text-5xl`} style={{ color: textPrimary }}>Join the Revolution: Engineer the Future</h2>
                    <p className={`mt-4 text-xl max-w-3xl mx-auto`} style={{ color: textSecondary }}>
                        We are actively looking for elite engineers who are passionate about scale, intelligence, and modern methodologies.
                    </p>
                </div>

                <div className="space-y-6 max-w-4xl mx-auto">
                    {jobRoles.map((job, index) => (
                        <div key={index} className={`flex flex-col md:flex-row items-center justify-between p-6 rounded-xl shadow-xl hover:shadow-2xl transition duration-500 border hover:border-indigo-500/50`} style={{ backgroundColor: cardBg, borderColor: isDark ? SLATE_BLUE : CALM_MINT }}>
                            <div>
                                <h3 className={`text-xl font-bold mb-1`} style={{ color: textPrimary }}>{job.title}</h3>
                                <p className={`text-sm mb-3`} style={{ color: textSecondary }}>{job.location}</p>
                                <div className="flex flex-wrap gap-2">
                                    {job.tags.map(tag => (
                                        <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full shadow-sm" style={{ backgroundColor: tagBg, color: tagText }}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
{/*                             <PrimaryButton className="mt-4 md:mt-0 md:ml-6" isPrimary={false}>
                                Apply Now
                            </PrimaryButton> */}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
export default Careers;