import React, { useRef, useEffect, useState } from "react";

const SubTabs = ({ items = [], active, onChange }) => {
  const containerRef = useRef();
  const firstRender = useRef(true);

  const [underlineStyle, setUnderlineStyle] = useState({
    left: 0,
    width: 0,
  });

  // useEffect(() => {
  //   const container = containerRef.current;
  //   const activeBtn = container?.querySelector("[data-sub-active]");

  //   if (!activeBtn) return;

  //   const left = activeBtn.offsetLeft;
  //   const width = activeBtn.offsetWidth;
  //   setUnderlineStyle({ left, width });

  //   // Prevent auto-scroll on first render (page refresh)
  //   if (firstRender.current) {
  //     firstRender.current = false;
  //     return;
  //   }

  //   // Scroll only horizontally, avoid page vertical scroll
  //   activeBtn.scrollIntoView({
  //     behavior: "smooth",
  //     inline: "center",
  //     block: "nearest", 
  //   });
  // }, [active]);

  useEffect(() => {
  const timer = setTimeout(() => {
    const container = containerRef.current;
    const activeBtn = container?.querySelector("[data-sub-active]");

    if (!activeBtn) return;

    const left = activeBtn.offsetLeft;
    const width = activeBtn.offsetWidth;
    setUnderlineStyle({ left, width });

    if (!firstRender.current) {
      activeBtn.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }

    firstRender.current = false;
  }, 50); // delay allows full layout before measuring

  return () => clearTimeout(timer);
}, [active]);


  return (
    <div className="w-full bg-white">
      <div className="relative w-full mx-auto">

        {/* Gray bar */}
        <div className="absolute bottom-0 left-0 w-full h-[7px] bg-gray-200 rounded-md z-[1]" />

        {/* Underline */}
        <div
          className="absolute h-[7px] bg-[#00B6FF] rounded-md transition-all duration-300 z-[10]"
          style={{
            left: underlineStyle.left,
            width: underlineStyle.width,
            bottom: 0,
            boxShadow: "0px 4px 14px rgba(49, 197, 255, 0.7)",
          }}
        />

        {/* Tabs */}
        <div
          ref={containerRef}
          className="overflow-x-auto no-scrollbar relative z-[20]"
        >
          <div className="flex items-end">
            {items.map((label) => {
              const isActive = label === active;

              return (
                <button
                  key={label}
                  data-sub-active={isActive ? true : undefined}
                  onClick={() => onChange(label)}
                  className="
                    group relative
                    w-[110px] md:w-[130px]
                    pb-4 pt-2 px-1
                    flex flex-col justify-end items-center
                    transition-colors duration-200
                    shrink-0
                  "
                >
                  <span
                    className={`
                      text-[13px] md:text-[14px] text-center leading-[1.2]
                      ${isActive
                        ? "text-[#0F294D] font-bold"
                        : "text-[#5E6D82] font-medium hover:text-[#0F294D]"
                      }
                    `}
                  >
                    {label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubTabs;
