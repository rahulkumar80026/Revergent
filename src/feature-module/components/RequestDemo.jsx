import React from "react";
import emailjs from "@emailjs/browser";

const RequestDemo = () => {
  const sendEmail = (e) => {
    console.log("Form submitted");
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          alert("Message Sent Successfully");
          e.target.reset();
        },
        (error) => {
          console.log(error);
          alert("Failed to send message");
        },
      );
  };

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
          <form className="space-y-5" onSubmit={sendEmail}>
            {/* Input */}
            <div>
              <label className="text-[#021D59] text-[14px]">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#15BDFF] outline-none"
                required
              />
            </div>

            <div>
              <label className="text-[#021D59] text-[14px]">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="phone"
                className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#15BDFF] focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="text-[#021D59] text-[14px]">
                Business Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#15BDFF] focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="text-[#021D59] text-[14px]">
                Organization <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="organization"
                className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#15BDFF] focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="text-[#021D59] text-[14px]">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                rows="3"
                name="message"
                className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#15BDFF] focus:outline-none"
                required
              ></textarea>
            </div>

            {/* Checkbox */}
            <div className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4" required />
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
