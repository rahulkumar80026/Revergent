const NextStepSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* TOP LIGHT GRADIENT AREA (Evergent style) */}
      <div className="w-full h-[340px] bg-gradient-to-b from-white via-[#F3F9FF] to-[#EAF4FF]"></div>

      {/* BACKGROUND IMAGE SECTION */}
      <div className="relative bg-[#0B0F63]">
        <img
          src="https://evergent.com/wp-content/themes/corppix/build/images/next-step-bg-hd.jpg"
          className="w-full object-cover"
        />

        {/* MAIN CONTENT OVER IMAGE */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1300px] px-6 py-20 flex justify-between">
          
          {/* LEFT SIDE TEXT */}
          <div className="text-white mt-[10px]">
            <h2 className="text-[48px] font-light leading-[54px]">
              Your Next Step is <br /> Right Here
            </h2>
          </div>

          {/* RIGHT FORM - OVERLAPPING UPPER AREA */}
          <div
            className="bg-white w-[470px] rounded-[22px] shadow-[0_20px_40px_rgba(0,0,0,0.15)] p-10 
                          absolute -top-[200px] right-0"
          >
            <h4 className="text-[#021D59] text-[18px] mb-6 font-medium">
              You can always leave us a message
            </h4>

            <div className="space-y-5">
              <input
                type="text"
                placeholder="Your name*"
                className="w-full border border-[#D8D8D8] rounded-[10px] px-4 py-3 text-[15px] 
                focus:ring-2 focus:ring-[#15BDFF] outline-none"
              />

              <input
                type="email"
                placeholder="What's your email?*"
                className="w-full border border-[#D8D8D8] rounded-[10px] px-4 py-3 text-[15px] 
                focus:ring-2 focus:ring-[#15BDFF] outline-none"
              />

              <textarea
                placeholder="Your Message"
                className="w-full h-[120px] border border-[#D8D8D8] rounded-[10px] px-4 py-3 
                text-[15px] focus:ring-2 focus:ring-[#15BDFF] outline-none resize-none"
              ></textarea>

              <div
                className="border border-[#D8D8D8] rounded-[10px] px-4 py-4 bg-[#F7F7F7] 
              text-gray-500 text-[15px]"
              >
                CAPTCHA HERE
              </div>

              <button
                className="w-full bg-[#15BDFF] hover:bg-[#0DA5E0] text-white py-[12px] 
              rounded-[10px] text-[16px] font-medium transition"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextStepSection;
