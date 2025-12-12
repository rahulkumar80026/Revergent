
import { Moon, Sun, ArrowRight, Zap, TrendingUp, Cpu, Code, Globe } from 'lucide-react';
import FeatureCard from './FeatureCard';
import SectionTitle from './SectionTitle';

const Features = () => {
  const featuresData = [
    { icon: Cpu, title: 'AI-Driven Optimization', description: 'Harness the power of autonomous learning models to predict and optimize system performance in real-time, reducing latency and cost.' },
    { icon: Code, title: 'Decentralized Architecture', description: 'Building resilient, fault-tolerant systems using distributed ledger and edge computing for maximum security and uptime.' },
    { icon: TrendingUp, title: 'Scalability by Design', description: 'Infrastructure designed for exponential growth, enabling seamless scaling from small pilot projects to enterprise-level global deployments.' },
    { icon: Zap, title: 'Hyper-Fast Processing', description: 'Leveraging low-latency frameworks and quantum-resistant algorithms to achieve processing speeds previously unattainable.' },
  ];

  return (
    <section id="platform" className="py-24 md:py-32 bg-[#e7f2ef] dark:bg-[#19183b] transition-colors duration-500">
      <SectionTitle
        title="Core Capabilities"
        subtitle="The Next Level of Tech"
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuresData.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;