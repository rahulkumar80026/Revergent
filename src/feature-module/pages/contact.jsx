import { useState } from "react";
import {
  Moon,
  Sun,
  ArrowRight,
  Zap,
  TrendingUp,
  Cpu,
  Code,
  Globe,
  Layers,
  TrendingUp as TrendIcon,
  Shield,
  Server,
  Repeat,
  Terminal,
  AlertTriangle,
  Home,
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Send,
  Rocket,
  Check,
} from "lucide-react";

const Contact = ({ isDark }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    service: "general",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
        service: "general",
      });

      setTimeout(() => setIsSuccess(false), 3000);
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: Mail, text: "contact@techcompany.com", label: "Email" },
    { icon: Phone, text: "+1 (555) 123-4567", label: "Phone" },
    { icon: MapPin, text: "Ghaziabad, Uttar Pradesh, IN", label: "Location" },
  ];

  const services = [
    { value: "general", label: "General Inquiry" },
    { value: "ai", label: "AI Solutions" },
    { value: "web", label: "Web Development" },
    { value: "mobile", label: "Mobile Apps" },
    { value: "consulting", label: "Tech Consulting" },
  ];

  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ backgroundColor: isDark ? "#1a1d3a" : "#e8f0ef" }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
          style={{ backgroundColor: "#5f8296" }}
        ></div>
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
          style={{ backgroundColor: "#a8c0bc", animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-4"
            style={{
              backgroundColor: isDark
                ? "rgba(95, 130, 150, 0.1)"
                : "rgba(95, 130, 150, 0.2)",
              borderColor: isDark
                ? "rgba(95, 130, 150, 0.3)"
                : "rgba(95, 130, 150, 0.4)",
            }}
          >
            <Sparkles className="w-4 h-4" style={{ color: "#5f8296" }} />
            <span
              className="text-sm font-medium"
              style={{ color: isDark ? "#a8c0bc" : "#5f8296" }}
            >
              Get In Touch
            </span>
          </div>
          <h2
            className="text-5xl md:text-6xl font-bold mb-6"
            style={{ color: isDark ? "#ffffff" : "#1a1d3a" }}
          >
            Let's Build Something{" "}
            <span
              style={{
                background: "linear-gradient(to right, #5f8296, #a8c0bc)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Amazing
            </span>
          </h2>
          <p
            className="text-xl max-w-2xl mx-auto"
            style={{ color: isDark ? "#a8c0bc" : "#5f8296" }}
          >
            Transform your ideas into reality with cutting-edge technology
            solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Form */}
          <div
            className="relative rounded-2xl p-8 border backdrop-blur-xl"
            style={{
              backgroundColor: isDark
                ? "rgba(95, 130, 150, 0.1)"
                : "rgba(255, 255, 255, 0.9)",
              borderColor: isDark
                ? "rgba(95, 130, 150, 0.3)"
                : "rgba(95, 130, 150, 0.2)",
            }}
          >
            <div
              className="absolute -top-6 -right-6 w-32 h-32 rounded-full blur-2xl opacity-30"
              style={{
                background:
                  "linear-gradient(to bottom right, #5f8296, #a8c0bc)",
              }}
            ></div>

            <form onSubmit={handleSubmit} className="space-y-6 relative">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group">
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: isDark ? "#a8c0bc" : "#1a1d3a" }}
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl transition-all duration-300 border-2 focus:outline-none"
                    style={{
                      backgroundColor: isDark
                        ? "rgba(95, 130, 150, 0.2)"
                        : "rgba(255, 255, 255, 0.8)",
                      borderColor: isDark
                        ? "rgba(95, 130, 150, 0.4)"
                        : "rgba(95, 130, 150, 0.3)",
                      color: isDark ? "#ffffff" : "#1a1d3a",
                    }}
                    placeholder="John Doe"
                  />
                </div>

                <div className="group">
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: isDark ? "#a8c0bc" : "#1a1d3a" }}
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl transition-all duration-300 border-2 focus:outline-none"
                    style={{
                      backgroundColor: isDark
                        ? "rgba(95, 130, 150, 0.2)"
                        : "rgba(255, 255, 255, 0.8)",
                      borderColor: isDark
                        ? "rgba(95, 130, 150, 0.4)"
                        : "rgba(95, 130, 150, 0.3)",
                      color: isDark ? "#ffffff" : "#1a1d3a",
                    }}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: isDark ? "#a8c0bc" : "#1a1d3a" }}
                >
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl transition-all duration-300 border-2 focus:outline-none"
                  style={{
                    backgroundColor: isDark
                      ? "rgba(95, 130, 150, 0.2)"
                      : "rgba(255, 255, 255, 0.8)",
                    borderColor: isDark
                      ? "rgba(95, 130, 150, 0.4)"
                      : "rgba(95, 130, 150, 0.3)",
                    color: isDark ? "#ffffff" : "#1a1d3a",
                  }}
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: isDark ? "#a8c0bc" : "#1a1d3a" }}
                >
                  Service Interested In
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl transition-all duration-300 border-2 focus:outline-none"
                  style={{
                    backgroundColor: isDark
                      ? "rgba(95, 130, 150, 0.2)"
                      : "rgba(255, 255, 255, 0.8)",
                    borderColor: isDark
                      ? "rgba(95, 130, 150, 0.4)"
                      : "rgba(95, 130, 150, 0.3)",
                    color: isDark ? "#ffffff" : "#1a1d3a",
                  }}
                >
                  {services.map((service) => (
                    <option key={service.value} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: isDark ? "#a8c0bc" : "#1a1d3a" }}
                >
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl transition-all duration-300 resize-none border-2 focus:outline-none"
                  style={{
                    backgroundColor: isDark
                      ? "rgba(95, 130, 150, 0.2)"
                      : "rgba(255, 255, 255, 0.8)",
                    borderColor: isDark
                      ? "rgba(95, 130, 150, 0.4)"
                      : "rgba(95, 130, 150, 0.3)",
                    color: isDark ? "#ffffff" : "#1a1d3a",
                  }}
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className="w-full group relative overflow-hidden text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: "linear-gradient(to right, #5f8296, #a8c0bc)",
                  boxShadow: isDark
                    ? "0 10px 40px rgba(95, 130, 150, 0.3)"
                    : "0 10px 40px rgba(95, 130, 150, 0.2)",
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSuccess ? (
                    <>
                      <Check className="w-5 h-5" />
                      Message Sent Successfully!
                    </>
                  ) : isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="group p-6 rounded-2xl transition-all duration-300 hover:scale-105 border backdrop-blur-xl"
                    style={{
                      backgroundColor: isDark
                        ? "rgba(95, 130, 150, 0.1)"
                        : "rgba(255, 255, 255, 0.9)",
                      borderColor: isDark
                        ? "rgba(95, 130, 150, 0.3)"
                        : "rgba(95, 130, 150, 0.2)",
                    }}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                        style={{
                          background:
                            "linear-gradient(to bottom right, #5f8296, #a8c0bc)",
                        }}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p
                          className="text-sm font-medium"
                          style={{ color: isDark ? "#a8c0bc" : "#5f8296" }}
                        >
                          {item.label}
                        </p>
                        <p
                          className="text-lg font-semibold"
                          style={{ color: isDark ? "#ffffff" : "#1a1d3a" }}
                        >
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Why Choose Us */}
            <div
              className="p-8 rounded-2xl border"
              style={{
                background: isDark
                  ? "linear-gradient(to bottom right, rgba(95, 130, 150, 0.2), rgba(168, 192, 188, 0.1))"
                  : "linear-gradient(to bottom right, rgba(168, 192, 188, 0.3), rgba(255, 255, 255, 0.8))",
                borderColor: isDark
                  ? "rgba(95, 130, 150, 0.3)"
                  : "rgba(95, 130, 150, 0.2)",
              }}
            >
              <h3
                className="text-2xl font-bold mb-6"
                style={{ color: isDark ? "#ffffff" : "#1a1d3a" }}
              >
                Why Work With Us?
              </h3>
              <div className="space-y-4">
                {[
                  { icon: Rocket, text: "Fast Response Time" },
                  { icon: Zap, text: "Cutting-Edge Solutions" },
                  { icon: Code, text: "Expert Development Team" },
                  { icon: Check, text: "100% Client Satisfaction" },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{
                          background:
                            "linear-gradient(to bottom right, #5f8296, #a8c0bc)",
                        }}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <span
                        className="font-medium"
                        style={{ color: isDark ? "#a8c0bc" : "#1a1d3a" }}
                      >
                        {item.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
