import { MapPin, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Contact = () => {
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
    <div className="w-full">
      <div className="relative h-[420px]">
        <img
          src="https://evergent.com/wp-content/uploads/2022/09/group-17253.png"
          className="absolute w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-[#0d2b63]/75"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-0 relative h-full flex items-center">
          <div>
            <h1 className="text-white text-5xl font-semibold mb-4">
              Contact Us
            </h1>

            <p className="text-gray-200 text-lg max-w-xl">
              Have an idea, project, or digital transformation goal? Connect
              with Revergent Technologies and let our experts turn your vision
              into scalable technology solutions.
            </p>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}

      <div className="max-w-7xl mx-auto px-6 lg:px-0 grid lg:grid-cols-2 gap-20 relative pb-28">
        {/* LEFT CONTENT */}

        <div className="pt-36">
          <h2 className="text-4xl font-semibold text-[#1a1d3a] mb-6 leading-snug">
            Innovation Starts with a Conversation
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg font-light">
            At Revergent Technologies, we specialize in building intelligent
            software solutions that empower businesses to grow faster and
            operate smarter. Whether you're looking to modernize legacy IT systems,
            build high-performance mobile applications, deploy custom AI models,
            or accelerate your overall digital strategy, our engineering team is here to guide you. We offer end-to-end consulting services spanning from architectural design to post-launch product iterations. Check out our <Link to="/company/about" className="text-[#2cc5d5] hover:underline font-normal">About Us page</Link> to learn more about our company background and client success stories, or view our core <Link to="/services/custom-software-development" className="text-[#2cc5d5] hover:underline font-normal">software engineering services</Link>.
          </p>

          {/* WHY CHOOSE US */}

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-[#1a1d3a]">
              Why Choose Revergent Technologies
            </h3>

            <ul className="space-y-2 text-gray-600">
              <li>✔ Enterprise-grade software solutions</li>
              <li>✔ AI-powered innovation</li>
              <li>✔ Scalable cloud architecture</li>
              <li>✔ Fast development & deployment</li>
              <li>✔ Dedicated technology experts</li>
              <li>✔ Long-term technology partnership</li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div className="mt-10">
            <h3 className="text-xl font-semibold text-[#1a1d3a] mb-4">
              Contact Information
            </h3>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-600">
                <MapPin className="text-[#2cc5d5]" size={18} />
                <span>Greater Noida West, Uttar Pradesh, India</span>
              </div>

              <div className="flex items-center gap-3 text-gray-600">
                <Mail className="text-[#2cc5d5]" size={18} />
                <span>info@revergent.in</span>
              </div>

              <div className="flex items-center gap-3 text-gray-600 outline-none">
                <Phone className="text-[#2cc5d5]" size={18} />
                <span>+91 81024 45228</span>
              </div>
            </div>
          </div>
          <div className="mt-12 grid gap-6">
            {/* LOCATION */}

            {/* <div className="flex items-start gap-4 p-5 rounded-xl border border-gray-200 hover:shadow-md transition">

<div className="bg-[#e6f9fb] p-3 rounded-lg">

<MapPin className="text-[#2cc5d5]" size={22} />

</div>

<div>

<h4 className="font-semibold text-[#1a1d3a]">
Location
</h4>

<p className="text-gray-600">
Greater Noida West, Uttar Pradesh, India
</p>

</div>

</div> */}

            {/* EMAIL */}

            {/* <div className="flex items-start gap-4 p-5 rounded-xl border border-gray-200 hover:shadow-md transition">

<div className="bg-[#e6f9fb] p-3 rounded-lg">

<Mail className="text-[#2cc5d5]" size={22} />

</div>

<div>

<h4 className="font-semibold text-[#1a1d3a]">
Email
</h4>

<p className="text-gray-600">
info@revergenttech.com
</p>

</div>

</div> */}

            {/* PHONE */}

            {/* <div className="flex items-start gap-4 p-5 rounded-xl border border-gray-200 hover:shadow-md transition">

<div className="bg-[#e6f9fb] p-3 rounded-lg">

<Phone className="text-[#2cc5d5]" size={22} />

</div>

<div>

<h4 className="font-semibold text-[#1a1d3a]">
Phone
</h4>

<p className="text-gray-600">
+91 81024 45228
</p>

</div>

</div> */}
          </div>
        </div>

        {/* CONTACT FORM */}

        <div className="-mt-40 relative z-10">
          <div className="bg-white shadow-[0_20px_60px_rgba(0,0,0,0.18)] rounded-3xl p-10 w-full max-w-lg ml-auto">
            <h3 className="text-2xl font-semibold text-[#1a1d3a] mb-2">
              Start Your Project With Us
            </h3>

            <p className="text-gray-500 mb-6">
              Tell us about your project requirements and our team will get back
              to you shortly.
            </p>

            <form onSubmit={sendEmail} className="space-y-4">
              <div>
                <label className="block text-sm text-[#021D59] mb-1">
                  Name <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  name="name"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#2cc5d5] focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-[#021D59] mb-1">
                  Phone Number <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  name="phone"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#2cc5d5] focus:outline-none"
                  required
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-sm text-[#021D59] mb-1">
                  Business Email <span className="text-red-500">*</span>
                </label>

                <input
                  type="email"
                  name="email"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#2cc5d5] focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-[#021D59] mb-1">
                  Organization <span className="text-red-500">*</span>
                </label>

                <input
                  type="text"
                  name="organization"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#2cc5d5] focus:outline-none"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-[#021D59] mb-1">
                  Message <span className="text-red-500">*</span>
                </label>

                <textarea
                  name="message"
                  rows="4"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#2cc5d5] focus:outline-none"
                  required
                />
              </div>

              {/* CONSENT */}
              <div className="flex gap-2 items-start mt-3">
                <input type="checkbox" required className="mt-1" />

                <p className="text-sm text-[#021D59]">
                  I agree to receive other communications from Revergent
                  Technologies.
                </p>
              </div>

              {/* SUBMIT */}

              <button
                type="submit"
                // className="w-full bg-[#15BDFF] hover:bg-[#021D59] text-white py-3 rounded-lg font-medium transition-all"
                className="bg-[#0dcaf0] hover:bg-[#021D59] text-white font-medium px-8 py-3 rounded-lg mt-3 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* CTA SECTION */}

      <div className="bg-[#0d2b63] py-16">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-white text-3xl font-semibold mb-4">
            Ready to Transform Your Business with Technology?
          </h2>

          <p className="text-gray-300 mb-6">
            Partner with Revergent Technologies to build innovative solutions
            that scale with your business.
          </p>

          <button className="bg-[#00df9d] hover:bg-[#23aab8] text-white px-8 py-3 rounded-[9.28px] font-mediam transition">
            Request a Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
