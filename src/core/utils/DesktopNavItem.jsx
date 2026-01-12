// import React from "react";
// import { ChevronDown } from "lucide-react";

// const DesktopNavItem = ({ item }) => {
//   const hasSubmenu = item.submenu && item.submenu.length > 0;

//   // Detect whether submenu uses "section + items" → Mega Menu (Services)
//   const isMegaMenu = hasSubmenu && item.submenu[0]?.section;

//   // ---------------------------------------------
//   // EVERGENT MEGA MENU (Services)
//   // ---------------------------------------------
//   const renderMegaMenu = (sections) => (
//     <div
//       className="
//         absolute left-1/2 -translate-x-1/2
//         w-[980px]
//         bg-white rounded-[14px]
//         border border-[#e6e9f0]
//         shadow-[0_16px_48px_rgba(0,0,0,0.12)]
//         pt-8 pb-10 px-10

//         opacity-0 invisible
//         group-hover:opacity-100 group-hover:visible
//         translate-y-4 group-hover:translate-y-2
//         transition-all duration-300 ease-out
//         z-[9999]
//       "
//     >
//       <div className="grid grid-cols-5 gap-10">
//         {sections.map((section, index) => (
//           <div key={index}>
//             {/* Section Label */}
//             <p className="text-[11px] uppercase font-semibold text-[#15BDFF] tracking-wide mb-4">
//               {section.section}
//             </p>

//             {/* Section Items */}
//             <ul className="space-y-2">
//               {section.items?.map((s, i) => (
//                 <li key={i}>
//                   <a
//                     href={s.href}
//                     className="
//                       block
//                       text-[14px] text-[#021D59]
//                       hover:text-[#15BDFF]
//                       transition-colors duration-150
//                     "
//                   >
//                     {s.title}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );

//   // ---------------------------------------------
//   // EVERGENT SIMPLE MENU (Solutions, Products, Resources, Company)
//   // ---------------------------------------------
//   //
//   const renderSimpleMenu = (items) => (
//     <ul
//       className="p-3 absolute left-0 w-64 bg-white rounded-[12px] border border-[#e6e9f0] shadow-[0_12px_32px_rgba(0,0,0,0.12)]
//       opacity-0 invisible
//       group-hover:opacity-100 group-hover:visible
//       translate-y-3 group-hover:translate-y-1
//       transition-all duration-200 ease-out
//       z-[9999]
//   "
//     >
//       {items.map((s, i) => (
//         <li key={i}>
//           <a
//             href={s.href}
//             className="
//               block px-4 py-2.5
//               text-[14px] text-[#021D59]
//               hover:bg-[#c7f6ff]

//               rounded-xl
//               transition-colors
//             "
//           >
//             {s.title}
//           </a>
//         </li>
//       ))}
//     </ul>
//   );

//   // ---------------------------------------------
//   // MAIN NAV ITEM (Evergent Style)
//   // ---------------------------------------------
//   return (
//     <li className="group relative">
//       <a
//         href={item.href}
//         className="
//           text-[#021D59]
//           text-[15px] font-medium
//           px-4 py-3
//           flex items-center
//           hover:text-[#15BDFF]
//           transition-colors duration-200
//         "
//       >
//         {item.title}

//         {hasSubmenu && (
//           <ChevronDown
//             className="
//               w-4 h-4 ml-1
//               transition-transform duration-200
//               group-hover:rotate-180
//             "
//           />
//         )}
//       </a>

//       {hasSubmenu &&
//         (isMegaMenu
//           ? renderMegaMenu(item.submenu)
//           : renderSimpleMenu(item.submenu))}
//     </li>
//   );
// };

// export default DesktopNavItem;

import React from "react";
import { ChevronDown } from "lucide-react";
import arrow from "../../assets/icon/arrow.svg";

const DesktopNavItem = ({ item }) => {
  const hasSubmenu = Array.isArray(item.submenu) && item.submenu.length > 0;
  const isMegaMenu = hasSubmenu && item.submenu[0]?.section;

  // ----------------------------------------------------------
  // EVERGENT MEGA MENU (Corrected to exact Evergent styling)
  // ----------------------------------------------------------
  const renderMegaMenu = (sections) => (
    <div
      className="
      absolute lg:left-1/2 lg:-translate-x-1/2

      left-1/2 -translate-x-1/2
      lg:translate-y-5 translate-y-4

      bg-white rounded-[14px]
      border border-[#E6E9F0]
      shadow-[0_22px_60px_rgba(0,0,0,0.12)]
      
      pt-10 pb-12 px-12

      opacity-0 invisible
      group-hover:opacity-100 group-hover:visible
      group-hover:translate-y-3
      transition-all duration-300 ease-out

      z-[9999]

      /* RESPONSIVE WIDTHS */
      w-[1100px]
      xl:w-[1000px]
      lg:w-[850px]
      md:w-[700px]
      sm:w-[90vw]
    "
    >
      <div
        className="
        grid gap-12

        /* DESKTOP → 4 columns */
        grid-cols-4

        /* MEDIUM → 3 columns */
        xl:grid-cols-4
        lg:grid-cols-3
        
        /* TABLET → 2 columns */
        md:grid-cols-2

        /* SMALL → 1 column */
        sm:grid-cols-1
      "
      >
        {sections.map((section, idx) => (
          <div key={idx}>
            <p className="text-[11px] uppercase font-bold text-[#5C6D88] mb-4 tracking-wide">
              {section.section}
            </p>

            <ul className="space-y-2">
              {section.items?.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="
                    block text-[15px]
                    text-[#021D59]
                    hover:text-[#15BDFF]
                    transition-colors duration-150
                  "
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );

  // ----------------------------------------------------------
  // EVERGENT SIMPLE MENU (Already Perfect — Only polish)
  // ----------------------------------------------------------
  const renderSimpleMenu = (items) => (
    <ul
      className="
        p-3 absolute left-0 w-64 bg-white rounded-[12px]
        border border-[#E6E9F0]
        shadow-[0_14px_40px_rgba(0,0,0,0.12)]
        
        opacity-0 invisible
        group-hover:opacity-100 group-hover:visible
        translate-y-4 group-hover:translate-y-2
        transition-all duration-200 ease-out

        z-[9999]
      "
    >
      {items.map((s, i) => (
        <li key={i}>
          <a
            href={s.href}
            className="
              block px-4 py-2.5
              text-[14px] text-[#021D59]
              hover:text-[#15BDFF]
              hover:bg-[#F4FAFF]
              rounded-lg
              transition-colors
            "
          >
            {s.title}
          </a>
        </li>
      ))}
    </ul>
  );

  // ----------------------------------------------------------
  // MAIN NAV ITEM (Evergent accurate)
  // ----------------------------------------------------------
  return (
    <li className="group relative">
      <a
        href={item.href}
        className="
          text-[#021D59]
          text-[15px] font-medium
          px-5 py-3
          flex items-center
          hover:text-[#15BDFF]
          transition-colors duration-200
        "
      >
        {item.title}

        {hasSubmenu && (
          <img
            className="w-3 h-2 ml-[2px] mb-[3px]
              transition-transform duration-300
              group-hover:rotate-180"
            src={arrow}
            alt=""
          />
        )}
      </a>

      {hasSubmenu &&
        (isMegaMenu
          ? renderMegaMenu(item.submenu)
          : renderSimpleMenu(item.submenu))}
    </li>
  );
};

export default DesktopNavItem;
