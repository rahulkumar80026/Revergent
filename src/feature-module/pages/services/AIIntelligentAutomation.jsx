import { Cpu, Bot, Database, Workflow, Brain, Shield } from "lucide-react";

export default function AIIntelligentAutomation() {
  const services = [
    {
      icon: <Brain size={32} />,
      title: "AI Powered Solutions",
      desc: "Build intelligent systems powered by machine learning and advanced analytics.",
    },
    {
      icon: <Bot size={32} />,
      title: "Business Process Automation",
      desc: "Automate repetitive business processes using AI and workflow automation.",
    },
    {
      icon: <Cpu size={32} />,
      title: "Predictive Analytics",
      desc: "Leverage data insights and predictive models to make smarter business decisions.",
    },
    {
      icon: <Database size={32} />,
      title: "Data Intelligence",
      desc: "Transform enterprise data into valuable insights using AI-driven analytics.",
    },
    {
      icon: <Workflow size={32} />,
      title: "Intelligent Workflows",
      desc: "Optimize operations with automated workflows and AI decision engines.",
    },
    {
      icon: <Shield size={32} />,
      title: "AI Security & Compliance",
      desc: "Ensure secure, compliant and scalable AI solutions for enterprise environments.",
    },
  ];

  const useCases = [
    "Customer Support Automation",
    "AI Chatbots & Virtual Assistants",
    "Smart Data Processing",
    "Predictive Business Insights",
    "Automated Document Processing",
    "AI Powered Recommendation Systems",
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
                AI & Intelligent Automation
              </h1>

              <p className="max-w-2xl text-gray-200">
                Revergent Technologies helps businesses unlock the power of
                Artificial Intelligence and intelligent automation to improve
                efficiency, reduce costs and drive innovation.
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
              AI Capabilities
            </h2>

            <p className="text-gray-500 max-w-2xl mx-auto">
              Our AI solutions help organizations automate processes, extract
              insights from data and build intelligent systems.
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

      {/* USE CASES */}

      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-[#0b1d4d] mb-16">
            Automation Use Cases
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {useCases.map((item, index) => (
              <div key={index} className="p-6 border rounded-xl">
                <p className="text-[#0b1d4d] font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-[#0b1d4d] mb-12">
            AI Technology Stack
          </h2>

          <div className="flex flex-wrap justify-center gap-6">
            {[
              "Python",
              "TensorFlow",
              "OpenAI",
              "LangChain",
              "Azure AI",
              "AWS AI",
              "Power Automate",
              "Google AI",
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
    </div>
  );
}
