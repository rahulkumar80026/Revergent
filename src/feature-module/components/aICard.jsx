import React from "react";
import Icon from "./Icon";

// const AICard = ({ iconPath, title, description, isDark }) => {
//   const cardBg = isDark
//     ? "bg-gray-900 border-indigo-700/50"
//     : "bg-white border-indigo-200";
//   const textPrimary = isDark ? "text-gray-100" : "text-gray-800";
//   const textSecondary = isDark ? "text-gray-400" : "text-gray-500";

//   return (
//     <div
//       className={`p-6 rounded-2xl shadow-xl transition duration-500 hover:shadow-2xl hover:shadow-indigo-500/30 border-2 ${cardBg}`}
//     >
//       <div className="p-3 inline-flex rounded-full bg-indigo-500 text-white mb-4 shadow-lg">
//         <Icon path={iconPath} className="w-6 h-6" />
//       </div>
//       <h3 className={`text-xl font-bold ${textPrimary} mb-2`}>{title}</h3>
//       <p className={textSecondary}>{description}</p>
//     </div>
//   );
// };

// const AICard = ({ title, description, isDark }) => (
//   <div 
//     className={`
//       p-8 rounded-2xl shadow-xl transition-all duration-500 transform 
//       hover:scale-[1.03] hover:shadow-2xl hover:border-r-4 hover:border-b-4
//       ${isDark 
//         ? 'bg-[#19183b] text-[#e7f2ef] border border-[#212040] hover:border-[#a1c2bd]' 
//         : 'bg-white text-[#19183b] border border-[#e7f2ef] hover:border-[#708993]'}
//     `}
//   >
//     <div className={`p-3 w-14 h-14 mb-4 rounded-lg flex items-center justify-center text-3xl font-bold bg-[#a1c2bd] text-[#19183b]`}>
//       <Icon className="w-7 h-7" />
//     </div>
//     <h3 className={`text-2xl font-bold mb-3 ${isDark ? 'text-[#e7f2ef]' : 'text-[#19183b]'}`}>{title}</h3>
//     <p className={`text-[#708993] text-base`}>{description}</p>
//   </div>
// );


// const AICard = ({ title, description, Icon, isDark }) => (
//   <div 
//     className={`
//       p-8 rounded-2xl shadow-xl transition-all duration-500 transform 
//       hover:scale-[1.03] hover:shadow-2xl hover:border-r-4 hover:border-b-4
//       ${!isDark // Light Mode
//         ? 'bg-white text-[#19183b] border border-[#e7f2ef] hover:border-[#708993]' 
//         : 'bg-[#19183b] text-[#e7f2ef] border border-[#212040] hover:border-[#a1c2bd]'}
//     `}
//   >
//     <div className={`p-3 w-14 h-14 mb-4 rounded-lg flex items-center justify-center text-3xl font-bold bg-[#a1c2bd] text-[#19183b]`}>
//       <Icon className="w-7 h-7" /> 
//     </div>
//     <h3 className={`text-2xl font-bold mb-3 ${!isDark ? 'text-[#19183b]' : 'text-[#e7f2ef]'}`}>{title}</h3>
//     <p className={`text-[#708993] text-base`}>{description}</p>
//   </div>
// );

const AICard = ({ title, description, Icon, isDark }) => (
  <div 
    className={`
      p-8 rounded-2xl shadow-xl transition-all duration-500 transform 
      hover:scale-[1.03] hover:shadow-2xl hover:border-r-4 hover:border-b-4
      ${!isDark // Light Mode
        ? 'bg-white text-[#19183b] border border-[#e7f2ef] hover:border-[#708993]' 
        : 'bg-[#19183b] text-[#e7f2ef] border border-[#212040] hover:border-[#a1c2bd]'}
    `}
  >
    <div className={`p-3 w-14 h-14 mb-4 rounded-lg flex items-center justify-center text-3xl font-bold bg-[#a1c2bd] text-[#19183b]`}>
      <Icon className="w-7 h-7" /> 
    </div>
    <h3 className={`text-2xl font-bold mb-3 ${!isDark ? 'text-[#19183b]' : 'text-[#e7f2ef]'}`}>{title}</h3>
    <p className={`text-[#708993] text-base`}>{description}</p>
  </div>
);
export default AICard;