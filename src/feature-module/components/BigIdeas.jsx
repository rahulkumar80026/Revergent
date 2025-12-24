import React from "react";
import Button from "../../core/common/Button";
import img1 from "../../assets/img/customer-retention-whitempaper-thumbnail-161x217.png";
import img2 from "../../assets/img/aha-case-study-thumbnail-1-161x217.png";
import img3 from "../../assets/img/cap-essentials-161x217.png";

const data = [
  {
    title: "Improving Customer Retention: Practical Strategies to Reduce Churn",
    excerpt:
      "A clear guide to understanding why customers leave—and the steps you can take today to strengthen long-term loyalty.",
    badge: "Whitepaper",
    img: img1,
    link: "https://revergent.in/",
  },
  {
    title:
      "Upgrading Platform Capability: A Practical Look at Scalable Transformation",
    excerpt:
      "How one team rebuilt their platform for faster performance, better customer experience, and long-term stability.",
    badge: "Case Study",
    img: img2,
    link: "https://revergent.in/",
  },
  {
    title: "AI-Driven Churn Control: A Smarter Approach to Customer Retention",
    excerpt:
      "See how AI can help predict risk, personalize engagement, and reduce churn before it impacts your bottom line.",
    badge: "Solution Briefs",
    img: img3,
    link: "https://revergent.in/",
  },
];

const badgeColors = {
  Whitepaper: "#15BDFF",
  "Case Study": "#A748FF",
  "Solution Briefs": "#0066FF",
};

const DotStrip = () => (
  <svg
    width="215"
    height="20"
    viewBox="0 0 215 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="my-3"
  >
    <rect width="215" height="20" fill="transparent" />
    <g clipPath="url(#clip0)">
      {[...Array(9).keys()].map((i) => (
        <circle
          key={i}
          cx={i * 24 + 10}
          cy="10"
          r="8"
          fill={
            [
              "#B748FF",
              "#A357FF",
              "#8F65FF",
              "#7A74FF",
              "#6683FF",
              "#5291FF",
              "#3EA0FF",
              "#29AEFF",
              "#15BDFF",
            ][i]
          }
        />
      ))}
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="215" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const BigIdeasCard = ({ item, index }) => (
  <div className="big-card w-full max-w-[535px] bg-white rounded-2xl shadow-xl p-6 relative transition-all duration-500 hover:-translate-y-2">
    <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
      <div className="flex-1">
        <p className="text-[20px] sm:text-[22px] font-normal text-[#021D59] leading-[26px] mb-3">
          <a href={item.link} className="hover:text-blue-600">
            {item.title}
          </a>
        </p>

        <DotStrip />

        <p className="text-[#4A5C80] text-[14px] sm:text-[15px] leading-[22px]">
          {item.excerpt}
        </p>
      </div>

      <div className="flex flex-col items-center w-full sm:w-auto">
        <a href={item.link}>
          <img
            src={item.img}
            alt="resource"
            className="w-full max-w-[161px] sm:w-[161px] h-auto rounded-lg"
          />
        </a>

        <p
          className="absolute top-3 right-3 sm:right-[-22px] z-[3] text-white text-[12px] sm:text-[13px] px-[10px] py-[8px] rounded-[10px] min-w-[75px] text-center"
          style={{
            backgroundColor: index === 0 ? "#5DDDA3" : badgeColors[item.badge],
          }}
        >
          {item.badge}
        </p>
      </div>
    </div>
  </div>
);

const BigIdeas = () => {
  return (
    <section className="bg-white relative pb-20 lg:pb-10">
      {/* GRADIENT BEHIND BUTTON (starts early) */}
      <div className="absolute w-full h-[180px] bg-gradient-to-b from-white via-[#F4FAFF] to-[#E9F4FF] top-[520px] /* perfect placement */ -z-10"></div>

      <div className="custom-container big-ideas__container relative z-10">
        <h2 className="text-center text-[34px] text-[#021D59] font-semibold mb-2">
          Insights That Help You Move Faster
        </h2>
        <p className="text-center text-[#4A5C80] text-[16px] mb-12">
          Ideas become powerful when they guide smarter decisions. Explore
          resources built to support your next move.
        </p>

        <div className="flex flex-wrap justify-center items-start gap-10 big-ideas__items">
          <div className="flex flex-wrap justify-center gap-10">
            <BigIdeasCard item={data[0]} />
            <BigIdeasCard item={data[1]} />
          </div>

          <div className="w-full flex justify-center">
            <BigIdeasCard item={data[2]} />
          </div>
        </div>

        <div className="text-center mt-12 lg:mt-20">
          <Button>More Resources</Button>
        </div>
      </div>
    </section>
  );
};

export default BigIdeas;
