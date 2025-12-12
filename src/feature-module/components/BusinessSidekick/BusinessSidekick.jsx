// components/BusinessSidekick/BusinessSidekick.jsx
import { useEffect, useState } from "react";
import Tabs from "./Tabs";
import SubTabs from "./SubTabs";
import ContentPanel from "./ContentBlock";

import { contentData } from "./data/contentData";
import { subTabs } from "./data/subTabs";
import { mainTabs } from "./data/mainTabs";

const BusinessSidekick = () => {
  const [activeMain, setActiveMain] = useState("SoftwareDevelopment");
  const [activeSub, setActiveSub] = useState(subTabs["SoftwareDevelopment"][0]);

  // Keep activeSub in sync when activeMain changes
  useEffect(() => {
    const first = subTabs[activeMain]?.[0] ?? null;
    setActiveSub(first);
  }, [activeMain]);

  const data = contentData[activeSub];

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1440px] mx-auto px-[60px]">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="font-agrandir text-[#021D59] text-[30px] md:text-[34px] font-semibold">
            Build Better, Smarter Solutions — One Module at a Time
          </h2>
          <p className="mt-4 text-[#43567a] text-[15px] md:text-[16px] leading-[24px] max-w-[800px] mx-auto">
            {/* Evergent offers a portfolio of solutions equipped with a range of
            capabilities.
            <br />
            Choose an entire suite or mix and match modules based on your
            business goals. */}
            Our services are designed to work together seamlessly or stand
            strong on their own. Choose what you need today and scale into more
            advanced capabilities as your business grows.
          </p>
        </div>

        {/* Main Tabs */}
        <Tabs
          items={mainTabs}
          active={activeMain}
          onChange={(id) => setActiveMain(id)}
        />

        {/* Sub Tabs (thin row) */}
        <SubTabs
          items={subTabs[activeMain] || []}
          active={activeSub}
          onChange={(label) => setActiveSub(label)}
        />

        {/* Content */}
        {/* <div className="mt-10"> */}
        <ContentPanel data={data} />
        {/* </div> */}
      </div>
    </section>
  );
};

export default BusinessSidekick;
