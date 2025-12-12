import React from "react";

const NotFoundPage = () => {
  return (
    <section className="w-full">
      <div className="min-h-[calc(100vh-200px)] relative flex flex-col justify-between items-center text-center py-[100px]">
        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://evergent.com/wp-content/uploads/2022/08/group-16664-1.png')",
          }}
        ></div>

        {/* DARK OVERLAY (same as Evergent) */}
        <div className="absolute inset-0 bg-white/10 "></div>

        {/* COLOR BLOBS ON TOP (Evergent style) */}
        {/* <div className="absolute top-[35%] left-[-12%] w-[550px] h-[350px] bg-[#15BDFF] rounded-[50%] opacity-85"></div>
      <div className="absolute top-[45%] left-[20%] w-[650px] h-[420px] bg-[#21D4A5] rounded-[55%] opacity-85"></div>
      <div className="absolute top-[50%] right-[-10%] w-[600px] h-[380px] bg-[#15BDFF] rounded-[60%] opacity-85"></div> */}

        {/* MAIN CONTENT */}
        <div className="relative z-10 flex flex-col items-center px-6">
          <h2 className="text-[#021D59] text-[50px] font-semibold mb-2">
            Whoops!
          </h2>

          <p className="text-[#021D59] text-[30px] mb-8">
            Something went wrong...
          </p>

          {/* LARGE 404 */}
          <h1 className="text-[150px] md:text-[300px] font-bold leading-none text-white drop-shadow-2xl mb-10">
            404
          </h1>

          {/* BUTTON */}
          <button className=" bg-white text-[#021D59] px-10 py-3 rounded-xl font-medium text-[16px] shadow-lg hover:shadow-xl transition-all border hover:bg-[#021D59] hover:text-white">
            Take Me Back
          </button>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
