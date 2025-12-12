import React from "react";
import Icon from "./Icon";

const ServiceCard = ({ iconPath, title, description, isDark }) => {
  const cardBg = isDark
    ? "bg-gray-800 border-gray-700"
    : "bg-white border-transparent";
  const textPrimary = isDark ? "text-gray-100" : "text-gray-800";
  const textSecondary = isDark ? "text-gray-400" : "text-gray-500";

  return (
    <div
      className={`p-8 rounded-2xl shadow-xl transition duration-500 hover:shadow-2xl hover:border-indigo-500/70 border-2 ${cardBg}`}
    >
      <div className="p-4 inline-flex rounded-full bg-indigo-50 text-indigo-600 mb-6 shadow-md dark:bg-indigo-900 dark:text-indigo-300">
        <Icon path={iconPath} className="w-8 h-8" />
      </div>
      <h3 className={`text-xl font-bold ${textPrimary} mb-3`}>{title}</h3>
      <p className={textSecondary}>{description}</p>
      <a
        href="#contact"
        className="mt-4 inline-flex items-center text-indigo-500 font-semibold hover:underline"
      >
        Start Consultation
      </a>
    </div>
  );
};

export default ServiceCard;
