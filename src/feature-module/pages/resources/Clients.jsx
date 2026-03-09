import { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Award, TrendingUp, Users, Building2, Sparkles, ArrowRight, Play } from 'lucide-react';

// Valuable Clients Page
const Clients = ({ isDark }) => {
  const [activeTab, setActiveTab] = useState('all');
  const [hoveredClient, setHoveredClient] = useState(null);

  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients', color: '#5f8296' },
    { icon: Building2, value: '150+', label: 'Enterprise Partners', color: '#a8c0bc' },
    { icon: Award, value: '98%', label: 'Satisfaction Rate', color: '#5f8296' },
    { icon: TrendingUp, value: '300%', label: 'Growth Rate', color: '#a8c0bc' }
  ];

  const clients = [
    { name: 'Tech Innovators Inc', logo: '🚀', industry: 'Technology', projects: 45, rating: 5, color: '#5f8296' },
    { name: 'Global Solutions Ltd', logo: '🌍', industry: 'Consulting', projects: 38, rating: 5, color: '#a8c0bc' },
    { name: 'Digital Dynamics', logo: '💡', industry: 'Digital Marketing', projects: 52, rating: 4.9, color: '#5f8296' },
    { name: 'Future Finance Corp', logo: '💰', industry: 'Finance', projects: 29, rating: 5, color: '#a8c0bc' },
    { name: 'Smart Healthcare', logo: '🏥', industry: 'Healthcare', projects: 41, rating: 4.8, color: '#5f8296' },
    { name: 'Eco Energy Systems', logo: '⚡', industry: 'Energy', projects: 34, rating: 5, color: '#a8c0bc' },
    { name: 'Urban Retail Group', logo: '🛒', industry: 'Retail', projects: 47, rating: 4.9, color: '#5f8296' },
    { name: 'Edu Excellence', logo: '📚', industry: 'Education', projects: 36, rating: 5, color: '#a8c0bc' },
    { name: 'Travel Ventures', logo: '✈️', industry: 'Travel', projects: 28, rating: 4.8, color: '#5f8296' },
    { name: 'Media Masters', logo: '🎬', industry: 'Media', projects: 39, rating: 5, color: '#a8c0bc' },
    { name: 'Auto Innovations', logo: '🚗', industry: 'Automotive', projects: 32, rating: 4.9, color: '#5f8296' },
    { name: 'Cloud Networks', logo: '☁️', industry: 'Cloud Services', projects: 44, rating: 5, color: '#a8c0bc' }
  ];

  const industries = ['all', 'Technology', 'Finance', 'Healthcare', 'Retail', 'Energy'];

  const filteredClients = activeTab === 'all' 
    ? clients 
    : clients.filter(c => c.industry === activeTab);

  return (
    <section className="relative py-24 overflow-hidden" style={{ backgroundColor: isDark ? '#1a1d3a' : '#e8f0ef' }}>
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: '#5f8296' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: '#a8c0bc', animation: 'pulse 3s ease-in-out infinite' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6" style={{ 
            backgroundColor: isDark ? 'rgba(95, 130, 150, 0.1)' : 'rgba(95, 130, 150, 0.2)',
            borderColor: isDark ? 'rgba(95, 130, 150, 0.3)' : 'rgba(95, 130, 150, 0.4)',
            animation: 'slideDown 0.6s ease-out'
          }}>
            <Sparkles className="w-4 h-4" style={{ color: '#5f8296' }} />
            <span className="text-sm font-medium" style={{ color: isDark ? '#a8c0bc' : '#5f8296' }}>Our Valued Partners</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ 
            color: isDark ? '#ffffff' : '#1a1d3a',
            animation: 'slideUp 0.8s ease-out'
          }}>
            Trusted by{' '}
            <span style={{ 
              background: 'linear-gradient(to right, #5f8296, #a8c0bc)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Industry Leaders
            </span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ 
            color: isDark ? '#a8c0bc' : '#5f8296',
            animation: 'slideUp 1s ease-out'
          }}>
            Empowering businesses worldwide with innovative technology solutions that drive growth and success
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="relative p-6 rounded-2xl backdrop-blur-xl border transition-all duration-500 hover:scale-105 group"
                style={{
                  backgroundColor: isDark ? 'rgba(95, 130, 150, 0.1)' : 'rgba(255, 255, 255, 0.9)',
                  borderColor: isDark ? 'rgba(95, 130, 150, 0.3)' : 'rgba(95, 130, 150, 0.2)',
                  animation: `slideUp ${0.8 + idx * 0.1}s ease-out`
                }}
              >
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" style={{ backgroundColor: stat.color }}></div>
                <Icon className="w-10 h-10 mb-4" style={{ color: stat.color }} />
                <div className="text-4xl font-bold mb-2" style={{ color: isDark ? '#ffffff' : '#1a1d3a' }}>{stat.value}</div>
                <div className="text-sm font-medium" style={{ color: isDark ? '#a8c0bc' : '#5f8296' }}>{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {industries.map((industry, idx) => (
            <button
              key={industry}
              onClick={() => setActiveTab(industry)}
              className="px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: activeTab === industry 
                  ? (isDark ? '#5f8296' : '#5f8296')
                  : (isDark ? 'rgba(95, 130, 150, 0.1)' : 'rgba(255, 255, 255, 0.8)'),
                color: activeTab === industry ? '#ffffff' : (isDark ? '#a8c0bc' : '#5f8296'),
                border: `2px solid ${activeTab === industry ? '#5f8296' : (isDark ? 'rgba(95, 130, 150, 0.3)' : 'rgba(95, 130, 150, 0.2)')}`,
                animation: `slideDown ${0.5 + idx * 0.05}s ease-out`
              }}
            >
              {industry === 'all' ? 'All Industries' : industry}
            </button>
          ))}
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredClients.map((client, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredClient(idx)}
              onMouseLeave={() => setHoveredClient(null)}
              className="relative p-6 rounded-2xl backdrop-blur-xl border transition-all duration-500 hover:scale-105 group cursor-pointer"
              style={{
                backgroundColor: isDark ? 'rgba(95, 130, 150, 0.1)' : 'rgba(255, 255, 255, 0.9)',
                borderColor: hoveredClient === idx ? client.color : (isDark ? 'rgba(95, 130, 150, 0.3)' : 'rgba(95, 130, 150, 0.2)'),
                animation: `scaleIn ${0.5 + idx * 0.05}s ease-out`,
                boxShadow: hoveredClient === idx ? `0 20px 60px ${client.color}40` : 'none'
              }}
            >
              {/* Glow Effect */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{ 
                  background: `linear-gradient(135deg, ${client.color}20, transparent)`,
                  zIndex: -1
                }}
              ></div>

              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{client.logo}</div>
              <h3 className="text-xl font-bold mb-2" style={{ color: isDark ? '#ffffff' : '#1a1d3a' }}>{client.name}</h3>
              <p className="text-sm mb-3" style={{ color: isDark ? '#a8c0bc' : '#5f8296' }}>{client.industry}</p>
              
              <div className="flex items-center justify-between pt-3 border-t" style={{ borderColor: isDark ? 'rgba(95, 130, 150, 0.2)' : 'rgba(95, 130, 150, 0.15)' }}>
                <div>
                  <div className="text-2xl font-bold" style={{ color: client.color }}>{client.projects}</div>
                  <div className="text-xs" style={{ color: isDark ? '#a8c0bc' : '#5f8296' }}>Projects</div>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-current" style={{ color: '#a8c0bc' }} />
                  <span className="font-bold" style={{ color: isDark ? '#ffffff' : '#1a1d3a' }}>{client.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-block p-8 rounded-3xl backdrop-blur-xl border" style={{
            backgroundColor: isDark ? 'rgba(95, 130, 150, 0.1)' : 'rgba(255, 255, 255, 0.9)',
            borderColor: isDark ? 'rgba(95, 130, 150, 0.3)' : 'rgba(95, 130, 150, 0.2)'
          }}>
            <h3 className="text-3xl font-bold mb-4" style={{ color: isDark ? '#ffffff' : '#1a1d3a' }}>
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-lg mb-6 max-w-2xl" style={{ color: isDark ? '#a8c0bc' : '#5f8296' }}>
              Let's collaborate and create something extraordinary together
            </p>
            <button className="group px-8 py-4 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2 mx-auto" style={{
              background: 'linear-gradient(to right, #5f8296, #a8c0bc)',
              boxShadow: '0 10px 40px rgba(95, 130, 150, 0.3)'
            }}>
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
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
        @keyframes scaleIn {
          from { 
            opacity: 0;
            transform: scale(0.9);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default Clients