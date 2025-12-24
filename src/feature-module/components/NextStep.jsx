import React from "react";

const NextStep = () => {
  return (
    <section className="relative w-full">
      {/* 1. TOP GRADIENT (Desktop Only) */}
      <div className="hidden lg:block w-full h-[340px] bg-gradient-to-b from-white via-[#F3F9FF] to-[#EAF4FF]"></div>

      {/* 2. MAIN SECTION WITH BACKGROUND */}
      <div
        className="relative w-full min-h-[900px] lg:min-h-[490px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://evergent.com/wp-content/themes/corppix/build/images/next-step-bg-hd.jpg')`,
          backgroundColor: "#0B0F63",
        }}
      >
        {/* Dark Overlay for better text visibility on mobile */}
        <div className="absolute inset-0 bg-[#0B0F63]/40 lg:hidden"></div>

        {/* 3. CONTENT CONTAINER */}
        <div className="relative max-w-[1300px] mx-auto px-6 pt-16 lg:pt-24 h-full">
          <div className="flex flex-col lg:flex-row lg:justify-between items-start">
            {/* LEFT SIDE TEXT */}
            <div className="text-white w-full lg:w-1/2 mb-12 lg:mb-0">
              <h2 className="text-[36px] md:text-[42px] lg:text-[62px] font-light leading-tight lg:leading-[70px] text-center lg:text-left">
                Your Next Step is <br className="hidden lg:block" /> Right Here
              </h2>
            </div>

            {/* 4. THE FORM (Evergent Screenshot Match) */}
            <div
              className="bg-white w-full lg:w-[470px] rounded-[22px] shadow-[0_20px_40px_rgba(0,0,0,0.3)] 
                         p-8 md:p-10 lg:absolute lg:-top-[220px] lg:right-6 z-20"
            >
              <h4 className="text-[#021D59] text-[20px] md:text-[22px] mb-8 font-medium text-center">
                You can always leave us a message
              </h4>

              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your name*"
                  className="w-full border border-[#D8D8D8] rounded-[10px] px-5 py-4 text-[16px] outline-none focus:ring-1 focus:ring-[#15BDFF]"
                />

                <input
                  type="email"
                  placeholder="What's your email?*"
                  className="w-full border border-[#D8D8D8] rounded-[10px] px-5 py-4 text-[16px] outline-none focus:ring-1 focus:ring-[#15BDFF]"
                />

                <textarea
                  placeholder="Your Message"
                  className="w-full h-[130px] border border-[#D8D8D8] rounded-[10px] px-5 py-4 text-[16px] outline-none resize-none focus:ring-1 focus:ring-[#15BDFF]"
                ></textarea>

                <div className="pt-2">
                  <p className="text-[#021D59] text-[15px] font-medium mb-2">
                    Please verify your request. *
                  </p>
                  <div className="border border-[#D8D8D8] rounded-[4px] p-3 bg-[#F9F9F9] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        className="w-6 h-6 rounded border-gray-300"
                      />
                      <span className="text-[14px] text-gray-600 font-medium">
                        I'm not a robot
                      </span>
                    </div>
                    <img
                      src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                      alt="captcha"
                      className="w-8 opacity-80"
                    />
                  </div>
                </div>

                <button className="w-full bg-[#15BDFF] hover:bg-[#021D59] text-white py-3 rounded-lg font-medium transition-all mt-4 tracking-wider shadow-md active:scale-[0.98]">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextStep;
