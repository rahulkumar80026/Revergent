import React from "react";

const RequestDemo = () => {
  return (
    <section className="w-full bg-white">
      {/* HERO SECTION */}
      <div className="relative w-full h-[360px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=2000"
          alt="Revergent Demo"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#021D59]/90 to-[#021D59]/50" />

        {/* Title */}
        <div className="absolute inset-0 flex items-center px-10 md:px-20">
          <h1 className="text-white text-[38px] md:text-[48px] font-semibold">
            Request a Demo
          </h1>
        </div>
      </div>

      {/* BODY SECTION */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* LEFT CONTENT */}
        <div>
          <p className="text-[#021D59] text-[18px] leading-[28px] mb-6">
            Take a quick walkthrough of Revergent’s modern software and AI
            solutions designed to accelerate your digital transformation.
          </p>

          <p className="text-[#4A5C80] text-[15px] leading-[24px]">
            In this personalized, one-on-one demo, a Revergent product expert
            will guide you through the right mix of tools—custom software,
            automation, mobile apps, and AI workflows—tailored to your business
            goals.
            <br />
            <br />
            Share your challenges, ask questions, and explore how we can help
            you build scalable systems with meaningful impact.
          </p>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white rounded-2xl shadow-[0_8px_28px_rgba(0,0,0,0.12)] p-8 w-full">
          <form className="space-y-5">
            {/* Input */}
            <div>
              <label className="text-[#021D59] text-[14px]">Name *</label>
              <input
                type="text"
                className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#15BDFF] outline-none"
              />
            </div>

            <div>
              <label className="text-[#021D59] text-[14px]">
                Phone Number *
              </label>
              <input
                type="text"
                className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#15BDFF]"
              />
            </div>
            <div>
              <label className="text-[#021D59] text-[14px]">Business Email *</label>
              <input
                type="email"
                className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#15BDFF]"
              />
            </div>
            <div>
              <label className="text-[#021D59] text-[14px]">Organization *</label>
              <input
                type="text"
                className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#15BDFF]"
              />
            </div>
            {/* <div>
              <label className="text-[#021D59] text-[14px]">
                Number of Users / Employees
              </label>
              <select className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#15BDFF]">
                <option>1 – 50</option>
                <option>51 – 200</option>
                <option>201 – 500</option>
                <option>500+</option>
              </select>
            </div> */}

            <div>
              <label className="text-[#021D59] text-[14px]">Message</label>
              <textarea
                rows="3"
                className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#15BDFF]"
              ></textarea>
            </div>

            {/* Checkbox */}
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" />
              <p className="text-[13px] text-[#4A5C80]">
                I agree to receive updates from Revergent.
              </p>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-[#15BDFF] hover:bg-[#021D59] text-white py-3 rounded-lg font-medium transition-all"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RequestDemo;
