import { Code, Cloud, Cpu, Database, Workflow, Shield } from "lucide-react";

export default function CustomSoftwareDevelopment() {
  const services = [
    {
      icon: <Code size={32} />,
      title: "Enterprise Software",
      desc: "Custom enterprise platforms designed for scalability, security and performance.",
    },
    {
      icon: <Cloud size={32} />,
      title: "Cloud Applications",
      desc: "Cloud-native solutions built on modern infrastructure like AWS and Azure.",
    },
    {
      icon: <Cpu size={32} />,
      title: "AI & Intelligent Systems",
      desc: "AI-powered automation and analytics for smarter digital products.",
    },
    {
      icon: <Database size={32} />,
      title: "API & Integrations",
      desc: "Seamless integrations with third-party systems and enterprise APIs.",
    },
    {
      icon: <Workflow size={32} />,
      title: "Workflow Automation",
      desc: "Automate business processes with intelligent software systems.",
    },
    {
      icon: <Shield size={32} />,
      title: "Secure Architecture",
      desc: "Enterprise-grade security, compliance and high availability.",
    },
  ];

  const process = [
    "Discovery & Strategy",
    "Architecture Planning",
    "UI/UX Design",
    "Agile Development",
    "Testing & QA",
    "Deployment",
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
                Custom Software Development
              </h1>

              <p className="max-w-2xl text-gray-200">
                Revergent Technologies delivers scalable, secure and
                future-ready custom software solutions designed to accelerate
                digital transformation and business growth.
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
              Our Capabilities
            </h2>

            <p className="text-gray-500 max-w-2xl mx-auto">
              We build enterprise-grade software platforms tailored to your
              business requirements and digital strategy.
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
            Our Development Process
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

      {/* TECH STACK */}

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-[#0b1d4d] mb-12">
            Technology Stack
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              ".NET Core",
              "React",
              "Node.js",
              "SQL Server",
              "Azure",
              "AWS",
              "Docker",
              "Kubernetes",
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
          Let’s Build Your Next Digital Product
        </h2>

        <p className="max-w-xl mx-auto text-gray-300 mb-8">
          Partner with Revergent Technologies to create powerful custom software
          solutions tailored to your business.
        </p>

        <button className="bg-white text-[#0b1d4d] px-8 py-3 rounded-xl hover:scale-105 transition">
          Contact Our Team
        </button>
      </section>
    </div>
  );
}
