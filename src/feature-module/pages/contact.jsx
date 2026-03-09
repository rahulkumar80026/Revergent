// import { useState } from "react";
// import {
//   Moon,
//   Sun,
//   ArrowRight,
//   Zap,
//   TrendingUp,
//   Cpu,
//   Code,
//   Globe,
//   Layers,
//   TrendingUp as TrendIcon,
//   Shield,
//   Server,
//   Repeat,
//   Terminal,
//   AlertTriangle,
//   Home,
//   Mail,
//   Phone,
//   MapPin,
//   Sparkles,
//   Send,
//   Rocket,
//   Check,
// } from "lucide-react";

// const Contact = ({ isDark }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     company: "",
//     message: "",
//     service: "general",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSuccess, setIsSuccess] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     setTimeout(() => {
//       setIsSubmitting(false);
//       setIsSuccess(true);
//       setFormData({
//         name: "",
//         email: "",
//         company: "",
//         message: "",
//         service: "general",
//       });

//       setTimeout(() => setIsSuccess(false), 3000);
//     }, 2000);
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const contactInfo = [
//     { icon: Mail, text: "info@revergenttech.com", label: "Email" },
//     { icon: Phone, text: "+91 81024 45228", label: "Phone" },
//     { icon: MapPin, text: "Greater Noida West, Uttar Pradesh, IN", label: "Location" },
//   ];

//   const services = [
//     { value: "general", label: "General Inquiry" },
//     { value: "ai", label: "AI Solutions" },
//     { value: "web", label: "Web Development" },
//     { value: "mobile", label: "Mobile Apps" },
//     { value: "consulting", label: "Tech Consulting" },
//   ];

//   return (
//     <section
//       className="relative py-24 overflow-hidden"
//       style={{ backgroundColor: isDark ? "#1a1d3a" : "#e8f0ef" }}
//     >
//       {/* Animated Background */}
//       <div className="absolute inset-0 overflow-hidden opacity-20">
//         <div
//           className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
//           style={{ backgroundColor: "#5f8296" }}
//         ></div>
//         <div
//           className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
//           style={{ backgroundColor: "#a8c0bc", animationDelay: "1s" }}
//         ></div>
//       </div>

//       <div className="container mx-auto px-4 relative z-10">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div
//             className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-4"
//             style={{
//               backgroundColor: isDark
//                 ? "rgba(95, 130, 150, 0.1)"
//                 : "rgba(95, 130, 150, 0.2)",
//               borderColor: isDark
//                 ? "rgba(95, 130, 150, 0.3)"
//                 : "rgba(95, 130, 150, 0.4)",
//             }}
//           >
//             <Sparkles className="w-4 h-4" style={{ color: "#5f8296" }} />
//             <span
//               className="text-sm font-medium"
//               style={{ color: isDark ? "#a8c0bc" : "#5f8296" }}
//             >
//               Get In Touch
//             </span>
//           </div>
//           <h2
//             className="text-5xl md:text-6xl font-bold mb-6"
//             style={{ color: isDark ? "#ffffff" : "#1a1d3a" }}
//           >
//             Let's Build Something{" "}
//             <span
//               style={{
//                 background: "linear-gradient(to right, #5f8296, #a8c0bc)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//               }}
//             >
//               Amazing
//             </span>
//           </h2>
//           <p
//             className="text-xl max-w-2xl mx-auto"
//             style={{ color: isDark ? "#a8c0bc" : "#5f8296" }}
//           >
//             Transform your ideas into reality with cutting-edge technology
//             solutions
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
//           {/* Contact Form */}
//           <div
//             className="relative rounded-2xl p-8 border backdrop-blur-xl"
//             style={{
//               backgroundColor: isDark
//                 ? "rgba(95, 130, 150, 0.1)"
//                 : "rgba(255, 255, 255, 0.9)",
//               borderColor: isDark
//                 ? "rgba(95, 130, 150, 0.3)"
//                 : "rgba(95, 130, 150, 0.2)",
//             }}
//           >
//             <div
//               className="absolute -top-6 -right-6 w-32 h-32 rounded-full blur-2xl opacity-30"
//               style={{
//                 background:
//                   "linear-gradient(to bottom right, #5f8296, #a8c0bc)",
//               }}
//             ></div>

//             <form onSubmit={handleSubmit} className="space-y-6 relative">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div className="group">
//                   <label
//                     className="block text-sm font-medium mb-2"
//                     style={{ color: isDark ? "#a8c0bc" : "#1a1d3a" }}
//                   >
//                     Your Name *
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 rounded-xl transition-all duration-300 border-2 focus:outline-none"
//                     style={{
//                       backgroundColor: isDark
//                         ? "rgba(95, 130, 150, 0.2)"
//                         : "rgba(255, 255, 255, 0.8)",
//                       borderColor: isDark
//                         ? "rgba(95, 130, 150, 0.4)"
//                         : "rgba(95, 130, 150, 0.3)",
//                       color: isDark ? "#ffffff" : "#1a1d3a",
//                     }}
//                     placeholder="John Doe"
//                   />
//                 </div>

//                 <div className="group">
//                   <label
//                     className="block text-sm font-medium mb-2"
//                     style={{ color: isDark ? "#a8c0bc" : "#1a1d3a" }}
//                   >
//                     Email Address *
//                   </label>
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 rounded-xl transition-all duration-300 border-2 focus:outline-none"
//                     style={{
//                       backgroundColor: isDark
//                         ? "rgba(95, 130, 150, 0.2)"
//                         : "rgba(255, 255, 255, 0.8)",
//                       borderColor: isDark
//                         ? "rgba(95, 130, 150, 0.4)"
//                         : "rgba(95, 130, 150, 0.3)",
//                       color: isDark ? "#ffffff" : "#1a1d3a",
//                     }}
//                     placeholder="john@example.com"
//                   />
//                 </div>
//               </div>

//               <div>
//                 <label
//                   className="block text-sm font-medium mb-2"
//                   style={{ color: isDark ? "#a8c0bc" : "#1a1d3a" }}
//                 >
//                   Company Name
//                 </label>
//                 <input
//                   type="text"
//                   name="company"
//                   value={formData.company}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 rounded-xl transition-all duration-300 border-2 focus:outline-none"
//                   style={{
//                     backgroundColor: isDark
//                       ? "rgba(95, 130, 150, 0.2)"
//                       : "rgba(255, 255, 255, 0.8)",
//                     borderColor: isDark
//                       ? "rgba(95, 130, 150, 0.4)"
//                       : "rgba(95, 130, 150, 0.3)",
//                     color: isDark ? "#ffffff" : "#1a1d3a",
//                   }}
//                   placeholder="Your Company"
//                 />
//               </div>

//               <div>
//                 <label
//                   className="block text-sm font-medium mb-2"
//                   style={{ color: isDark ? "#a8c0bc" : "#1a1d3a" }}
//                 >
//                   Service Interested In
//                 </label>
//                 <select
//                   name="service"
//                   value={formData.service}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 rounded-xl transition-all duration-300 border-2 focus:outline-none"
//                   style={{
//                     backgroundColor: isDark
//                       ? "rgba(95, 130, 150, 0.2)"
//                       : "rgba(255, 255, 255, 0.8)",
//                     borderColor: isDark
//                       ? "rgba(95, 130, 150, 0.4)"
//                       : "rgba(95, 130, 150, 0.3)",
//                     color: isDark ? "#ffffff" : "#1a1d3a",
//                   }}
//                 >
//                   {services.map((service) => (
//                     <option key={service.value} value={service.value}>
//                       {service.label}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div>
//                 <label
//                   className="block text-sm font-medium mb-2"
//                   style={{ color: isDark ? "#a8c0bc" : "#1a1d3a" }}
//                 >
//                   Your Message *
//                 </label>
//                 <textarea
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   rows={6}
//                   className="w-full px-4 py-3 rounded-xl transition-all duration-300 resize-none border-2 focus:outline-none"
//                   style={{
//                     backgroundColor: isDark
//                       ? "rgba(95, 130, 150, 0.2)"
//                       : "rgba(255, 255, 255, 0.8)",
//                     borderColor: isDark
//                       ? "rgba(95, 130, 150, 0.4)"
//                       : "rgba(95, 130, 150, 0.3)",
//                     color: isDark ? "#ffffff" : "#1a1d3a",
//                   }}
//                   placeholder="Tell us about your project..."
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={isSubmitting || isSuccess}
//                 className="w-full group relative overflow-hidden text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
//                 style={{
//                   background: "linear-gradient(to right, #5f8296, #a8c0bc)",
//                   boxShadow: isDark
//                     ? "0 10px 40px rgba(95, 130, 150, 0.3)"
//                     : "0 10px 40px rgba(95, 130, 150, 0.2)",
//                 }}
//               >
//                 <span className="relative z-10 flex items-center justify-center gap-2">
//                   {isSuccess ? (
//                     <>
//                       <Check className="w-5 h-5" />
//                       Message Sent Successfully!
//                     </>
//                   ) : isSubmitting ? (
//                     <>
//                       <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                       Sending...
//                     </>
//                   ) : (
//                     <>
//                       Send Message
//                       <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                     </>
//                   )}
//                 </span>
//               </button>
//             </form>
//           </div>

//           {/* Contact Info */}
//           <div className="space-y-8">
//             {/* Contact Cards */}
//             <div className="space-y-4">
//               {contactInfo.map((item, idx) => {
//                 const Icon = item.icon;
//                 return (
//                   <div
//                     key={idx}
//                     className="group p-6 rounded-2xl transition-all duration-300 hover:scale-105 border backdrop-blur-xl"
//                     style={{
//                       backgroundColor: isDark
//                         ? "rgba(95, 130, 150, 0.1)"
//                         : "rgba(255, 255, 255, 0.9)",
//                       borderColor: isDark
//                         ? "rgba(95, 130, 150, 0.3)"
//                         : "rgba(95, 130, 150, 0.2)",
//                     }}
//                   >
//                     <div className="flex items-center gap-4">
//                       <div
//                         className="w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
//                         style={{
//                           background:
//                             "linear-gradient(to bottom right, #5f8296, #a8c0bc)",
//                         }}
//                       >
//                         <Icon className="w-6 h-6 text-white" />
//                       </div>
//                       <div>
//                         <p
//                           className="text-sm font-medium"
//                           style={{ color: isDark ? "#a8c0bc" : "#5f8296" }}
//                         >
//                           {item.label}
//                         </p>
//                         <p
//                           className="text-lg font-semibold"
//                           style={{ color: isDark ? "#ffffff" : "#1a1d3a" }}
//                         >
//                           {item.text}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Why Choose Us */}
//             <div
//               className="p-8 rounded-2xl border"
//               style={{
//                 background: isDark
//                   ? "linear-gradient(to bottom right, rgba(95, 130, 150, 0.2), rgba(168, 192, 188, 0.1))"
//                   : "linear-gradient(to bottom right, rgba(168, 192, 188, 0.3), rgba(255, 255, 255, 0.8))",
//                 borderColor: isDark
//                   ? "rgba(95, 130, 150, 0.3)"
//                   : "rgba(95, 130, 150, 0.2)",
//               }}
//             >
//               <h3
//                 className="text-2xl font-bold mb-6"
//                 style={{ color: isDark ? "#ffffff" : "#1a1d3a" }}
//               >
//                 Why Work With Us?
//               </h3>
//               <div className="space-y-4">
//                 {[
//                   { icon: Rocket, text: "Fast Response Time" },
//                   { icon: Zap, text: "Cutting-Edge Solutions" },
//                   { icon: Code, text: "Expert Development Team" },
//                   { icon: Check, text: "100% Client Satisfaction" },
//                 ].map((item, idx) => {
//                   const Icon = item.icon;
//                   return (
//                     <div key={idx} className="flex items-center gap-3">
//                       <div
//                         className="w-10 h-10 rounded-lg flex items-center justify-center"
//                         style={{
//                           background:
//                             "linear-gradient(to bottom right, #5f8296, #a8c0bc)",
//                         }}
//                       >
//                         <Icon className="w-5 h-5 text-white" />
//                       </div>
//                       <span
//                         className="font-medium"
//                         style={{ color: isDark ? "#a8c0bc" : "#1a1d3a" }}
//                       >
//                         {item.text}
//                       </span>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
// import { useState } from "react";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     firstname: "",
//     lastname: "",
//     email: "",
//     phone: "",
//     subscribers: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <div className="contact-us">
//       {/* HERO SECTION */}

//       <div className="relative h-[420px]">
//         <img
//           src="https://evergent.com/wp-content/uploads/2022/09/group-17253.png"
//           alt="banner"
//           className="absolute w-full h-full object-cover"
//         />

//         <div className="absolute inset-0 bg-[#0d2b63]/70"></div>

//         <div className="max-w-7xl mx-auto px-6 relative h-full flex items-center">
//           <h1 className="text-white text-5xl font-semibold">Contact Us</h1>
//         </div>
//       </div>

//       {/* CONTENT SECTION */}

//       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 -mt-32 relative z-10 pb-20">
//         {/* LEFT CONTENT */}

//         <div>
//           <h2 className="text-4xl font-semibold text-[#1a1d3a] mb-6">
//             The freedom to evolve is at your fingertips.
//           </h2>

//           <p className="text-lg text-gray-600 leading-relaxed">
//             Our knowledgeable sales and support teams are standing by to answer
//             your questions and provide any assistance. Get in touch!
//           </p>
//         </div>

//         {/* FORM CARD */}

//         <div className="bg-white shadow-2xl rounded-3xl p-10">
//           <form onSubmit={handleSubmit} className="space-y-5">
//             {/* First Name */}

//             <div>
//               <label
//                 htmlFor="firstname"
//                 className="block text-sm font-medium text-gray-700 mb-1"
//               >
//                 First Name *
//               </label>

//               <input
//                 type="text"
//                 id="firstname"
//                 name="firstname"
//                 required
//                 value={formData.firstname}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#2cc5d5] focus:outline-none"
//               />
//             </div>

//             {/* Last Name */}

//             <div>
//               <label
//                 htmlFor="lastname"
//                 className="block text-sm font-medium text-gray-700 mb-1"
//               >
//                 Last Name *
//               </label>

//               <input
//                 type="text"
//                 id="lastname"
//                 name="lastname"
//                 required
//                 value={formData.lastname}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#2cc5d5] focus:outline-none"
//               />
//             </div>

//             {/* Email */}

//             <div>
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-medium text-gray-700 mb-1"
//               >
//                 Business Email *
//               </label>

//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 required
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#2cc5d5] focus:outline-none"
//               />
//             </div>

//             {/* Phone */}

//             <div>
//               <label
//                 htmlFor="phone"
//                 className="block text-sm font-medium text-gray-700 mb-1"
//               >
//                 Phone Number *
//               </label>

//               <input
//                 type="text"
//                 id="phone"
//                 name="phone"
//                 required
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#2cc5d5] focus:outline-none"
//               />
//             </div>

//             {/* Subscribers */}

//             <div>
//               <label
//                 htmlFor="subscribers"
//                 className="block text-sm font-medium text-gray-700 mb-1"
//               >
//                 Number of Subscribers *
//               </label>

//               <select
//                 id="subscribers"
//                 name="subscribers"
//                 required
//                 value={formData.subscribers}
//                 onChange={handleChange}
//                 className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#2cc5d5] focus:outline-none"
//               >
//                 <option value="">Select</option>
//                 <option value="<250000">&lt;250,000</option>
//                 <option value="250001-500000">250,001 - 500,000</option>
//                 <option value="500001-1000000">500,001 - 1,000,000</option>
//                 <option value=">1000000">&gt;1,000,000</option>
//               </select>
//             </div>

//             {/* Message */}

//             <div>
//               <label
//                 htmlFor="message"
//                 className="block text-sm font-medium text-gray-700 mb-1"
//               >
//                 Message *
//               </label>

//               <textarea
//                 id="message"
//                 name="message"
//                 required
//                 value={formData.message}
//                 onChange={handleChange}
//                 rows="4"
//                 className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#2cc5d5] focus:outline-none"
//               />
//             </div>

//             {/* Checkbox */}

//             <div className="flex items-start gap-2">
//               <input type="checkbox" id="consent" className="mt-1" />

//               <label htmlFor="consent" className="text-sm text-gray-600">
//                 I agree to receive other communications.
//               </label>
//             </div>

//             {/* Submit */}

//             <button
//               type="submit"
//               className="bg-[#2cc5d5] hover:bg-[#22a9b7] text-white px-8 py-3 rounded-full font-semibold transition"
//             >
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

// import { useState } from "react";

// const Contact = () => {

// const [formData,setFormData]=useState({
// firstname:"",
// lastname:"",
// email:"",
// phone:"",
// subscribers:"",
// message:""
// })

// const handleChange=(e)=>{
// setFormData({
// ...formData,
// [e.target.name]:e.target.value
// })
// }

// return(

// <div className="contact-us">

// {/* HERO BANNER */}

// <div className="relative h-[420px]">

// <img
// src="https://evergent.com/wp-content/uploads/2022/09/group-17253.png"
// className="absolute inset-0 w-full h-full object-cover"
// />

// <div className="absolute inset-0 bg-[#0d2b63]/75"></div>

// <div className="max-w-7xl mx-auto px-6 relative h-full flex items-center">

// <h1 className="text-white text-5xl font-semibold">
// Contact Us
// </h1>

// </div>

// </div>

// {/* MAIN SECTION */}

// <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 relative pb-24">

// {/* LEFT CONTENT */}

// <div className="pt-32">

// <h2 className="text-4xl font-semibold text-[#1a1d3a] mb-6 leading-snug">

// The freedom to evolve is at your fingertips.

// </h2>

// <p className="text-lg text-gray-600 leading-relaxed max-w-lg">

// Our knowledgeable sales and support teams are standing by to answer your
// questions and provide any assistance. Get in touch!

// </p>

// </div>

// {/* FORM CARD */}

// <div className="-mt-40 relative z-10">

// <div className="bg-white shadow-[0_20px_60px_rgba(0,0,0,0.18)] rounded-3xl p-10 w-full max-w-lg ml-auto">

// <form className="space-y-4">

// {/* First Name */}

// <div>

// <label className="block text-sm text-gray-700 mb-1">
// First Name *
// </label>

// <input
// type="text"
// name="firstname"
// value={formData.firstname}
// onChange={handleChange}
// className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#2cc5d5] focus:outline-none"
// />

// </div>

// {/* Last Name */}

// <div>

// <label className="block text-sm text-gray-700 mb-1">
// Last Name *
// </label>

// <input
// type="text"
// name="lastname"
// value={formData.lastname}
// onChange={handleChange}
// className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#2cc5d5] focus:outline-none"
// />

// </div>

// {/* Email */}

// <div>

// <label className="block text-sm text-gray-700 mb-1">
// Business Email *
// </label>

// <input
// type="email"
// name="email"
// value={formData.email}
// onChange={handleChange}
// className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#2cc5d5] focus:outline-none"
// />

// </div>

// {/* Phone */}

// <div>

// <label className="block text-sm text-gray-700 mb-1">
// Phone Number *
// </label>

// <input
// type="text"
// name="phone"
// value={formData.phone}
// onChange={handleChange}
// className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#2cc5d5] focus:outline-none"
// />

// </div>

// {/* Subscribers */}

// <div>

// <label className="block text-sm text-gray-700 mb-1">
// Number of Subscribers *
// </label>

// <select
// name="subscribers"
// value={formData.subscribers}
// onChange={handleChange}
// className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#2cc5d5] focus:outline-none"
// >

// <option value="">Select</option>
// <option value="<250000">&lt;250,000</option>
// <option value="250001-500000">250,001 - 500,000</option>
// <option value="500001-1000000">500,001 - 1,000,000</option>
// <option value=">1000000">&gt;1,000,000</option>

// </select>

// </div>

// {/* Message */}

// <div>

// <label className="block text-sm text-gray-700 mb-1">
// Message *
// </label>

// <textarea
// name="message"
// rows="4"
// value={formData.message}
// onChange={handleChange}
// className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#2cc5d5] focus:outline-none"
// />

// </div>

// {/* Consent */}

// <div className="flex gap-2 items-start mt-3">

// <input type="checkbox" className="mt-1"/>

// <p className="text-sm text-gray-600">

// I agree to receive other communications from Revergent.

// </p>

// </div>

// {/* Submit */}

// <button
// className="
// bg-[#2cc5d5]
// hover:bg-[#23aab8]
// text-white
// font-semibold
// px-8
// py-3
// rounded-full
// mt-3
// transition
// "
// >

// Submit

// </button>

// </form>

// </div>

// </div>

// </div>

// </div>

// )

// }

// export default Contact

import { useState } from "react";
import { MapPin, Mail, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    subscribers: "",
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
    <div className="w-full">
      {/* HERO SECTION */}

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

          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
            At Revergent Technologies, we specialize in building intelligent
            software solutions that empower businesses to grow faster and
            operate smarter. Whether you're looking to modernize your systems,
            build scalable applications, integrate AI, or accelerate digital
            transformation, our experienced team is ready to help.
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
                <span>info@revergenttech.com</span>
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

              {/* <div>
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
              </div> */}

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
                  Business Email *
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
                  Organization *
                </label>

                <input
                  type="text"
                  name="organization"
                  required
                  value={formData.lastname}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#2cc5d5] focus:outline-none"
                />
              </div>

              {/* SUBSCRIBERS */}
              {/* <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Number of Subscribers *
                </label>

                <select
                  name="subscribers"
                  required
                  value={formData.subscribers}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#2cc5d5] focus:outline-none"
                >
                  <option value="">Select</option>
                  <option value="<250000">&lt;250,000</option>
                  <option value="250001-500000">250,001 - 500,000</option>
                  <option value="500001-1000000">500,001 - 1,000,000</option>
                  <option value=">1000000">&gt;1,000,000</option>
                </select>
              </div>  */}

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
