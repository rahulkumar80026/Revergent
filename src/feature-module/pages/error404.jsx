import React from "react";
import image1 from "../../../assets/img/group-16664-1.png";
import image2 from "../../../assets/img/group-16664-1-1.png"; //Tab
import image3 from "../../../assets/img/group-16664-2.png"; //Mobile

const Error404 = () => {
  return (
    <section className="w-full">
      <div className="relative flex flex-col justify-center items-center text-center min-h-[calc(100vh-200px)] py-20 px-4 overflow-hidden ">
        {/* MObile BACKGROUND */}
        <div
          className="absolute inset-0 bg-no-repeat bg-center bg-cover md:hidden"
          style={{
            backgroundImage: `url(${image3})`,
          }}
        ></div>

        {/* TABLET BACKGROUND */}
        <div
          className="absolute inset-0 hidden md:block lg:hidden bg-no-repeat bg-center bg-cover"
          style={{
            backgroundImage: `url(${image2})`,
          }}
        ></div>

        {/* DESKTOP BACKGROUND */}
        <div
          className="absolute inset-0 hidden lg:block bg-no-repeat bg-center bg-cover"
          style={{
            backgroundImage: `url(${image1})`,
          }}
        ></div>

        {/* DARK OVERLAY (same as Evergent) */}
        <div className="absolute inset-0 bg-white/10 "></div>

        {/* COLOR BLOBS ON TOP (Evergent style) */}
        {/* <div className="absolute top-[35%] left-[-12%] w-[550px] h-[350px] bg-[#15BDFF] rounded-[50%] opacity-85"></div>
      <div className="absolute top-[45%] left-[20%] w-[650px] h-[420px] bg-[#21D4A5] rounded-[55%] opacity-85"></div>
      <div className="absolute top-[50%] right-[-10%] w-[600px] h-[380px] bg-[#15BDFF] rounded-[60%] opacity-85"></div> */}

        {/* MAIN CONTENT */}
        <div className="relative z-10 flex flex-col items-center max-w-[90%]">
          <h2 className="text-[#021D59] font-semibold mb-2 text-[36px] sm:text-[42px] md:text-[50px] lg:text-[56px]">
            Whoops!
          </h2>

          <p className="text-[#021D59] mb-8 text-[20px] sm:text-[24px] md:text-[30px]">
            Something went wrong...
          </p>

          {/* LARGE 404 */}
          <h1 className="font-bold leading-none text-white drop-shadow-2xl mb-10 text-[120px] sm:text-[180px] md:text-[250px] lg:text-[300px]">
            404
          </h1>

          {/* BUTTON */}
          <button className=" bg-white text-[#021D59] px-8 py-3 rounded-xl font-medium shadow-lg border hover:bg-[#021D59] hover:text-white transition-all text-[14px] sm:text-[16px]">
            Take Me Back
          </button>
        </div>
      </div>
    </section>
  );
};

export default Error404;
