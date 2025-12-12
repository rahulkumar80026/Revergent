import { useState, useEffect } from "react";
import Lottie from "lottie-react";

const IconLottie = ({ url, className }) => {
  const [data, setData] = useState(
    typeof url === "object" ? url : null   // Detect local JSON
  );

  useEffect(() => {
    // If file is already a JSON object, no fetching required
    if (typeof url === "object") return;

    // For remote JSON URLs only
    fetch(url)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Lottie Load Error:", err));
  }, [url]);

  if (!data) return <div className="h-[90px] w-[90px]"></div>;

  return <Lottie animationData={data} loop autoplay className={className} />;
};

export default IconLottie;
