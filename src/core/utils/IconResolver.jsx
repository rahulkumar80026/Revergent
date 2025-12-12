import * as Lucide from "lucide-react";

export const IconResolver = ({ name, className = "w-6 h-6 text-blue-500" }) => {
  const Icon = Lucide[name] || Lucide.Zap; // Fallback to Zap icon
  return <Icon className={className} />;
};
