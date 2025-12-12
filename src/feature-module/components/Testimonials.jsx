import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Award, Play } from 'lucide-react';

const Testimonials = ({ isDark }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO',
      company: 'Tech Innovators Inc',
      image: '👩‍💼',
      rating: 5,
      text: 'Working with this team has been transformative for our business. Their innovative solutions and dedication to excellence have exceeded all our expectations. The AI-powered tools they developed have increased our efficiency by 300%.',
      project: 'AI Dashboard Platform',
      color: '#5f8296'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      company: 'Global Solutions Ltd',
      image: '👨‍💻',
      rating: 5,
      text: 'Exceptional service and cutting-edge technology! The team delivered a scalable cloud infrastructure that handles millions of requests daily. Their expertise in DevOps and microservices architecture is unmatched.',
      project: 'Cloud Infrastructure',
      color: '#a8c0bc'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Product Manager',
      company: 'Digital Dynamics',
      image: '👩‍🔬',
      rating: 5,
      text: 'The mobile app they created for us has received outstanding reviews from our users. The UI/UX design is intuitive and beautiful. Our user engagement has increased by 250% since launch.',
      project: 'Mobile App Development',
      color: '#5f8296'
    },
    {
      name: 'David Park',
      role: 'Founder',
      company: 'Future Finance Corp',
      image: '👨‍💼',
      rating: 5,
      text: 'Their blockchain solution revolutionized our payment processing system. The security features and transaction speed are phenomenal. We\'ve processed over $100M in transactions without a single issue.',
      project: 'Blockchain Payment System',
      color: '#a8c0bc'
    },
    {
      name: 'Lisa Anderson',
      role: 'Director',
      company: 'Smart Healthcare',
      image: '👩‍⚕️',
      rating: 5,
      text: 'The telemedicine platform they built has helped us reach thousands of patients. The video conferencing quality and patient management system are world-class. A truly life-changing project.',
      project: 'Telemedicine Platform',
      color: '#5f8296'
    }
  ];

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(false);
      }, 500);
    }
  };

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setIsAnimating(false);
      }, 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const current = testimonials[currentIndex];

  return (
    <section className="relative py-24 overflow-hidden" style={{ backgroundColor: isDark ? '#1a1d3a' : '#e8f0ef' }}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl" style={{ 
          backgroundColor: current.color,
          animation: 'float 8s ease-in-out infinite'
        }}></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-3xl" style={{ 
          backgroundColor: current.color === '#5f8296' ? '#a8c0bc' : '#5f8296',
          animation: 'float 10s ease-in-out infinite reverse'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6" style={{ 
            backgroundColor: isDark ? 'rgba(95, 130, 150, 0.1)' : 'rgba(95, 130, 150, 0.2)',
            borderColor: isDark ? 'rgba(95, 130, 150, 0.3)' : 'rgba(95, 130, 150, 0.4)',
            animation: 'slideDown 0.6s ease-out'
          }}>
            <Award className="w-4 h-4" style={{ color: '#5f8296' }} />
            <span className="text-sm font-medium" style={{ color: isDark ? '#a8c0bc' : '#5f8296' }}>Client Success Stories</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: isDark ? '#ffffff' : '#1a1d3a' }}>
            What Our Clients{' '}
            <span style={{ 
              background: 'linear-gradient(to right, #5f8296, #a8c0bc)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Say About Us
            </span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: isDark ? '#a8c0bc' : '#5f8296' }}>
            Real stories from real clients who achieved extraordinary results
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-5xl mx-auto mb-12">
          <div 
            className={`relative p-10 md:p-16 rounded-3xl backdrop-blur-xl border transition-all duration-500 ${isAnimating ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}
            style={{
              backgroundColor: isDark ? 'rgba(95, 130, 150, 0.1)' : 'rgba(255, 255, 255, 0.95)',
              borderColor: current.color,
              boxShadow: `0 30px 80px ${current.color}40`
            }}
          >
            {/* Quote Icon */}
            <div className="absolute -top-8 left-12 w-16 h-16 rounded-2xl flex items-center justify-center" style={{
              background: `linear-gradient(135deg, ${current.color}, ${current.color}cc)`
            }}>
              <Quote className="w-8 h-8 text-white" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20" style={{ backgroundColor: current.color }}></div>

            {/* Content */}
            <div className="relative">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-current" style={{ 
                    color: '#a8c0bc',
                    animation: `starPop ${0.5 + i * 0.1}s ease-out`
                  }} />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-2xl md:text-3xl font-medium mb-8 leading-relaxed" style={{ 
                color: isDark ? '#ffffff' : '#1a1d3a',
                fontStyle: 'italic'
              }}>
                "{current.text}"
              </p>

              {/* Client Info */}
              <div className="flex items-center justify-between flex-wrap gap-6">
                <div className="flex items-center gap-4">
                  <div className="text-6xl">{current.image}</div>
                  <div>
                    <h4 className="text-2xl font-bold" style={{ color: isDark ? '#ffffff' : '#1a1d3a' }}>{current.name}</h4>
                    <p className="text-lg" style={{ color: current.color }}>{current.role} at {current.company}</p>
                  </div>
                </div>
                
                {/* Project Badge */}
                <div className="px-6 py-3 rounded-xl border backdrop-blur-sm" style={{
                  backgroundColor: isDark ? 'rgba(95, 130, 150, 0.2)' : 'rgba(255, 255, 255, 0.8)',
                  borderColor: current.color
                }}>
                  <div className="flex items-center gap-2">
                    <Play className="w-4 h-4" style={{ color: current.color }} />
                    <span className="font-semibold" style={{ color: isDark ? '#a8c0bc' : '#1a1d3a' }}>{current.project}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border"
              style={{
                backgroundColor: isDark ? 'rgba(95, 130, 150, 0.2)' : 'rgba(255, 255, 255, 0.9)',
                borderColor: current.color,
                color: current.color
              }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              style={{
                background: `linear-gradient(135deg, ${current.color}, ${current.color === '#5f8296' ? '#a8c0bc' : '#5f8296'})`,
                color: '#ffffff'
              }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex justify-center gap-3 flex-wrap">
          {testimonials.map((testimonial, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (!isAnimating && idx !== currentIndex) {
                  setIsAnimating(true);
                  setTimeout(() => {
                    setCurrentIndex(idx);
                    setIsAnimating(false);
                  }, 500);
                }
              }}
              className="relative transition-all duration-300 hover:scale-110"
              style={{
                opacity: idx === currentIndex ? 1 : 0.5,
                transform: idx === currentIndex ? 'scale(1.2)' : 'scale(1)'
              }}
            >
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-3xl border-4 transition-all" style={{
                borderColor: idx === currentIndex ? testimonial.color : 'transparent',
                backgroundColor: isDark ? 'rgba(95, 130, 150, 0.2)' : 'rgba(255, 255, 255, 0.9)'
              }}>
                {testimonial.image}
              </div>
              {idx === currentIndex && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full" style={{ backgroundColor: testimonial.color }}></div>
              )}
            </button>
          ))}
        </div>

        {/* Video Testimonials Section */}
        <div className="mt-24">
          <h3 className="text-4xl font-bold text-center mb-12" style={{ color: isDark ? '#ffffff' : '#1a1d3a' }}>
            Watch Their Stories
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-2xl backdrop-blur-xl border transition-all duration-500 hover:scale-105 group cursor-pointer"
                style={{
                  backgroundColor: isDark ? 'rgba(95, 130, 150, 0.1)' : 'rgba(255, 255, 255, 0.9)',
                  borderColor: testimonial.color,
                  animation: `slideUp ${0.8 + idx * 0.1}s ease-out`
                }}
              >
                <div className="aspect-video rounded-xl mb-4 flex items-center justify-center relative overflow-hidden" style={{
                  background: `linear-gradient(135deg, ${testimonial.color}40, ${testimonial.color}20)`
                }}>
                  <div className="text-6xl group-hover:scale-110 transition-transform duration-300">{testimonial.image}</div>
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: testimonial.color }}>
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                </div>
                <h4 className="text-lg font-bold mb-1" style={{ color: isDark ? '#ffffff' : '#1a1d3a' }}>{testimonial.name}</h4>
                <p className="text-sm" style={{ color: isDark ? '#a8c0bc' : '#5f8296' }}>{testimonial.company}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -30px) rotate(120deg); }
          66% { transform: translate(-20px, 20px) rotate(240deg); }
        }
        @keyframes starPop {
          0% { transform: scale(0) rotate(-180deg); }
          50% { transform: scale(1.2) rotate(10deg); }
          100% { transform: scale(1) rotate(0deg); }
        }
        @keyframes slideUp {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideDown {
          from { 
            opacity: 0;
            transform: translateY(-20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;