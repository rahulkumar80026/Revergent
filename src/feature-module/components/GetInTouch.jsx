import { useState } from "react";

// export default function GetInTouch() {
//   const [form, setForm] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     jobTitle: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(form);
//   };

//   return (
//     <div className="bg-[#f6f8fc]">
//       {/* HERO */}

//       <section className="relative h-[420px]">
//         <img
//           src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
//           className="absolute w-full h-full object-cover"
//         />

//         <div className="absolute inset-0 bg-[#0b1d4d]/80"></div>

//         <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
//           <h1 className="text-white text-5xl font-semibold">Get in touch</h1>
//         </div>
//       </section>

//       {/* CONTENT */}

//       <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16">
//         {/* LEFT CONTENT */}

//         <div>
//           <h2 className="text-4xl font-semibold text-[#0b1d4d] mb-6">
//             The freedom to evolve is at your fingertips.
//           </h2>

//           <p className="text-gray-500 text-lg leading-relaxed">
//             Our team at Revergent Technologies is ready to help you explore
//             innovative digital solutions, scalable software platforms and
//             enterprise technology services.
//             <br />
//             <br />
//             Whether you have a project idea, partnership opportunity or career
//             inquiry, feel free to reach out.
//           </p>
//         </div>

//         {/* FORM */}

//         <div className="bg-white p-10 rounded-2xl shadow-xl">
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* ROW */}

//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label className="text-sm text-gray-600">First Name *</label>

//                 <input
//                   type="text"
//                   name="firstName"
//                   onChange={handleChange}
//                   className="w-full border rounded-full px-5 py-3 mt-1 focus:ring-2 focus:ring-[#2cc5d5]"
//                 />
//               </div>

//               <div>
//                 <label className="text-sm text-gray-600">Last Name</label>

//                 <input
//                   type="text"
//                   name="lastName"
//                   onChange={handleChange}
//                   className="w-full border rounded-full px-5 py-3 mt-1 focus:ring-2 focus:ring-[#2cc5d5]"
//                 />
//               </div>
//             </div>

//             {/* ROW */}

//             <div className="grid grid-cols-2 gap-4">
//               <div>
//                 <label className="text-sm text-gray-600">Email *</label>

//                 <input
//                   type="email"
//                   name="email"
//                   onChange={handleChange}
//                   className="w-full border rounded-full px-5 py-3 mt-1 focus:ring-2 focus:ring-[#2cc5d5]"
//                 />
//               </div>

//               <div>
//                 <label className="text-sm text-gray-600">Phone</label>

//                 <input
//                   type="text"
//                   name="phone"
//                   onChange={handleChange}
//                   className="w-full border rounded-full px-5 py-3 mt-1 focus:ring-2 focus:ring-[#2cc5d5]"
//                 />
//               </div>
//             </div>

//             {/* JOB */}

//             <div>
//               <label className="text-sm text-gray-600">Job Title</label>

//               <input
//                 type="text"
//                 name="jobTitle"
//                 onChange={handleChange}
//                 className="w-full border rounded-full px-5 py-3 mt-1 focus:ring-2 focus:ring-[#2cc5d5]"
//               />
//             </div>

//             {/* MESSAGE */}

//             <div>
//               <label className="text-sm text-gray-600">Message</label>

//               <textarea
//                 rows="4"
//                 name="message"
//                 onChange={handleChange}
//                 className="w-full border rounded-2xl px-5 py-3 mt-1 focus:ring-2 focus:ring-[#2cc5d5]"
//               ></textarea>
//             </div>

//             {/* BUTTON */}

//             <button
//               type="submit"
//               className="bg-[#2cc5d5] text-white px-7 py-3 rounded-full hover:scale-105 transition"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </section>
//     </div>
//   );
// }

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    jobTitle: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-[#f6f8fc] overflow-hidden">
      {/* HERO */}

      <section className="relative h-[460px]">
        <img
          src="https://evergent.com/wp-content/uploads/2022/09/group-17253.png"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient overlay */}

        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1d4d]/90 via-[#0b1d4d]/70 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
          <h1 className="text-white text-5xl md:text-6xl font-semibold">
            Get in touch
          </h1>
        </div>
      </section>

      {/* CONTENT */}

      <section className="max-w-7xl mx-auto px-6 pb-20 relative">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* LEFT TEXT */}

          <div className="pt-28">
            <h2 className="text-4xl font-semibold text-[#0b1d4d] mb-6 leading-tight">
              Transform ideas into powerful digital solutions.
            </h2>

            <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
              Revergent Technologies partners with startups and enterprises to
              design, develop, and scale modern software platforms. Our team
              combines deep engineering expertise with innovative thinking to
              deliver reliable and future-ready technology.
              <br />
              <br />
              Have a project in mind or want to explore new opportunities?
              Connect with our team and let's create something remarkable
              together.
            </p>
          </div>

          {/* FORM CARD */}

          <div className="relative">
            <div className="bg-white p-10 rounded-3xl shadow-[0_30px_70px_rgba(0,0,0,0.15)] -mt-52 backdrop-blur">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* FIRST NAME */}

                <div>
                  <label className="block text-sm text-[#021D59] mb-1">
                    First Name *
                  </label>

                  <input
                    type="text"
                    name="firstname"
                    required
                    value={formData.firstname}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#2cc5d5] focus:outline-none"
                  />
                </div>

                {/* LAST NAME */}

                <div>
                  <label className="block text-sm text-gray-700 mb-1">
                    Last Name *
                  </label>

                  <input
                    type="text"
                    name="lastname"
                    required
                    value={formData.lastname}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#2cc5d5] focus:outline-none"
                  />
                </div>

                {/* PHONE */}
                <div>
                  <label className="block text-sm text-[#021D59] mb-1">
                    Phone Number *
                  </label>

                  <input
                    type="text"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#2cc5d5] focus:outline-none"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="block text-sm text-[#021D59] mb-1">
                    Email *
                  </label>

                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#2cc5d5] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#021D59] mb-1">
                    Job Title *
                  </label>

                  <input
                    type="text"
                    name="organization"
                    required
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#2cc5d5] focus:outline-none"
                  />
                </div>
                {/* MESSAGE */}
                <div>
                  <label className="block text-sm text-[#021D59] mb-1">
                    Message *
                  </label>

                  <textarea
                    name="message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#2cc5d5] focus:outline-none"
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
                  className="
                  bg-[#0dcaf0]
                  hover:bg-[#021D59]
                  text-white
                  font-medium
                  px-8
                  py-3
                  rounded-lg
                  mt-3
                  transition"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
