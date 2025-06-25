
import React from 'react';
import { Eye, Headphones, Globe, Glasses, Shield } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Eye className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Real-time Facial Expression & Body Language Analysis",
      description: "Advanced AI algorithms analyze micro-expressions and body language cues in milliseconds, providing instant insights into emotional states."
    },
    {
      icon: <Headphones className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Discreet Audio & Visual Coaching Prompts",
      description: "Receive subtle audio cues or HUD overlay notifications that guide your responses without disrupting natural conversation flow."
    },
    {
      icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Multilingual Support",
      description: "Works seamlessly across cultures with support for English, Spanish, and expanding language capabilities for global professionals."
    },
    {
      icon: <Glasses className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Stylish & Portable Smart Glasses",
      description: "Lightweight, professional design that looks like premium eyewear while housing cutting-edge technology. Comfortable for all-day wear."
    },
    {
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Cloud-based AI with Privacy-First Options",
      description: "Secure cloud processing with optional local processing modes. Your data stays private with enterprise-grade encryption."
    }
  ];

  return (
    <section id="features" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Powerful Features for Professional Excellence
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            XMRT Glasses combine advanced AI, sleek hardware, and intuitive software to give you unprecedented insight into human communication.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 sm:p-8 rounded-2xl hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="text-teal-600 mb-3 sm:mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
