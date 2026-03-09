import { Smartphone, Code, Layers, Cpu, Shield, Workflow } from "lucide-react";

export default function MobileAppDevelopment() {
  const services = [
    {
      icon: <Smartphone size={32} />,
      title: "Native App Development",
      desc: "High-performance mobile applications for Android and iOS platforms.",
    },
    {
      icon: <Layers size={32} />,
      title: "Cross Platform Apps",
      desc: "Build scalable mobile apps using React Native and Flutter.",
    },
    {
      icon: <Code size={32} />,
      title: "Custom Mobile Solutions",
      desc: "Tailored mobile apps designed specifically for your business needs.",
    },
    {
      icon: <Cpu size={32} />,
      title: "AI & Smart Features",
      desc: "Integrate AI-powered features and automation into mobile applications.",
    },
    {
      icon: <Workflow size={32} />,
      title: "Backend Integration",
      desc: "Seamless integration with APIs, cloud platforms and enterprise systems.",
    },
    {
      icon: <Shield size={32} />,
      title: "Secure Mobile Architecture",
      desc: "Enterprise-grade security and performance optimization.",
    },
  ];

  const process = [
    "Product Discovery",
    "UI/UX Design",
    "App Development",
    "Testing & QA",
    "Deployment",
    "Support & Updates",
  ];

  return (
    <div className="bg-[#f7f9fc]">
      {/* HERO */}

      <section className="pt-18 px-6">
        <div className="custom-container mx-auto">
          <div className="relative rounded-[28px] overflow-hidden shadow-xl bg-[#021D59]">
            <img
              src="/assets/img/resources-desctop.png"
              className="w-full h-[400px] object-cover opacity-80"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
              <h1 className="text-5xl font-semibold mb-4">
                Mobile App Development
              </h1>

              <p className="max-w-2xl text-gray-200">
                Revergent Technologies builds powerful mobile applications that
                deliver seamless user experiences, scalable performance and
                modern digital capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-[#0b1d4d] mb-4">
              Mobile App Capabilities
            </h2>

            <p className="text-gray-500 max-w-2xl mx-auto">
              We develop scalable mobile applications that help businesses
              engage users, improve productivity and drive digital growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition hover:-translate-y-1"
              >
                <div className="text-[#2cc5d5] mb-4">{service.icon}</div>

                <h3 className="text-xl font-semibold text-[#0b1d4d] mb-2">
                  {service.title}
                </h3>

                <p className="text-gray-500">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEVELOPMENT PROCESS */}

      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-[#0b1d4d] mb-16">
            Our Mobile Development Process
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {process.map((step, index) => (
              <div key={index} className="p-6 border rounded-xl">
                <div className="text-3xl font-bold text-[#2cc5d5] mb-3">
                  0{index + 1}
                </div>

                <p className="text-[#0b1d4d] font-medium">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORMS */}

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-[#0b1d4d] mb-12">
            Platforms We Develop For
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold text-[#0b1d4d] mb-3">
                Android Apps
              </h3>

              <p className="text-gray-500">
                Custom Android applications built for performance and
                scalability across devices.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold text-[#0b1d4d] mb-3">
                iOS Apps
              </h3>

              <p className="text-gray-500">
                Premium iOS applications delivering smooth performance and
                intuitive user experiences.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md">
              <h3 className="text-xl font-semibold text-[#0b1d4d] mb-3">
                Cross Platform Apps
              </h3>

              <p className="text-gray-500">
                Develop once and deploy everywhere using modern cross-platform
                technologies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}

      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-[#0b1d4d] mb-12">
            Mobile Technology Stack
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              "React Native",
              "Flutter",
              "Kotlin",
              "Swift",
              "Firebase",
              "Node.js",
              ".NET Core",
              "AWS",
            ].map((tech, index) => (
              <span
                key={index}
                className="bg-[#e8f9fb] text-[#2cc5d5] px-6 py-2 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="bg-[#0b1d4d] py-24 text-center text-white">
        <h2 className="text-4xl font-semibold mb-6">
          Build Your Mobile App With Us
        </h2>

        <p className="max-w-xl mx-auto text-gray-300 mb-8">
          Partner with Revergent Technologies to build scalable and innovative
          mobile applications for your business.
        </p>

        <button className="bg-white text-[#0b1d4d] px-8 py-3 rounded-xl hover:scale-105 transition">
          Start Your App Project
        </button>
      </section>
    </div>
  );
}
