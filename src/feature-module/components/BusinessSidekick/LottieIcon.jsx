// components/BusinessSidekick/LottieIcon.jsx
import { useEffect, useState } from "react";
import Lottie from "lottie-react";

const LottieIcon = ({ url, className = "" }) => {
  const [data, setData] = useState(typeof url === "object" ? url : null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!url) return;
    // If url already an object (imported JSON), use it
    if (typeof url === "object") {
      setData(url);
      return;
    }

    // If string: try fetch
    let mounted = true;
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Lottie fetch failed");
        return res.json();
      })
      .then((json) => {
        if (mounted) setData(json);
      })
      .catch((err) => {
        console.error("Lottie load error:", err);
        if (mounted) setError(true);
      });
    return () => {
      mounted = false;
    };
  }, [url]);

  if (error) return <div className={className} />; // show empty box on error

  if (!data) return <div className={className} />;

  return <Lottie animationData={data} loop autoplay className={className} />;
};

export default LottieIcon;
