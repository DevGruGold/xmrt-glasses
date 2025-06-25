
import React from 'react';
import { Eye, Brain, Headphones } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: <Eye className="w-16 h-16" />,
      title: "Glasses Capture Subtle Emotional Cues",
      description: "High-resolution cameras and sensors discretely capture facial expressions, micro-expressions, and body language in real-time.",
      step: "01"
    },
    {
      icon: <Brain className="w-16 h-16" />,
      title: "AI Analyzes and Interprets in Real Time",
      description: "Advanced machine learning algorithms process visual data instantly, identifying emotional states, stress levels, and communication patterns.",
      step: "02"
    },
    {
      icon: <Headphones className="w-16 h-16" />,
      title: "User Receives Discreet Coaching",
      description: "Get personalized insights through subtle audio prompts or visual overlays, helping you respond appropriately and build better connections.",
      step: "03"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How XMRT Glasses Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three simple steps to transform your professional communications with AI-powered emotional intelligence.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="bg-gradient-to-br from-teal-100 to-blue-100 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-8">
                  <div className="text-teal-600">
                    {step.icon}
                  </div>
                </div>
                
                <div className="absolute -top-4 -right-4 bg-teal-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                  {step.step}
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          {/* Connection Lines */}
          <div className="hidden md:block absolute top-16 left-1/4 right-1/4">
            <div className="border-t-2 border-dashed border-teal-300 relative">
              <div className="absolute top-0 left-1/3 w-4 h-4 bg-teal-300 rounded-full -mt-2"></div>
              <div className="absolute top-0 right-1/3 w-4 h-4 bg-teal-300 rounded-full -mt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
