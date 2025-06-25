import React from 'react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-16 sm:pt-20 pb-12 sm:pb-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                XMRT <span className="text-teal-600">Glasses</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 font-medium">
                Real-Time Emotional Insight. Empower Every Conversation.
              </p>
            </div>
            
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Break through communication barriers with AI-powered smart glasses that read facial expressions, 
              body language, and emotional cues in real time. Transform how you connect, negotiate, and build 
              relationships in your professional life.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <button 
                onClick={scrollToContact}
                className="bg-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-teal-700 transition-all duration-300 transform hover:scale-105"
              >
                Request a Demo
              </button>
              <button className="border-2 border-teal-600 text-teal-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-teal-600 hover:text-white transition-all duration-300">
                Buy Now
              </button>
            </div>
          </div>

          <div className="relative order-first lg:order-last">
            <div className="bg-gradient-to-br from-teal-100 to-blue-100 rounded-2xl p-4 sm:p-8">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80" 
                alt="Professional using XMRT Glasses"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-xl shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 bg-white p-3 sm:p-4 rounded-xl shadow-lg">
              <div className="text-xs sm:text-sm text-gray-600">Live Analysis</div>
              <div className="text-sm sm:text-lg font-semibold text-teal-600">Confidence: 87%</div>
            </div>
          </div>
        </div>

        {/* Testimonials Slider */}
        <div className="mt-16 sm:mt-20">
          <h3 className="text-xl sm:text-2xl font-bold text-center text-gray-900 mb-8 sm:mb-12">
            Trusted by Professionals
          </h3>
          <TestimonialSlider />
        </div>
      </div>
    </section>
  );
};

const TestimonialSlider = () => {
  const testimonials = [
    {
      quote: "XMRT Glasses have transformed my therapy sessions. I can now pick up on subtle emotional cues I might have missed before.",
      author: "Dr. Sarah Chen",
      role: "Clinical Therapist"
    },
    {
      quote: "As a detective, reading people is crucial. These glasses give me an edge in interviews and interrogations.",
      author: "Detective Mike Rodriguez",
      role: "Law Enforcement"
    },
    {
      quote: "My negotiation success rate increased by 40% after using XMRT. The real-time insights are game-changing.",
      author: "Jennifer Park",
      role: "Corporate Negotiator"
    }
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative bg-white rounded-2xl p-6 sm:p-8 shadow-lg max-w-4xl mx-auto">
      <div className="text-center">
        <p className="text-base sm:text-lg text-gray-700 italic mb-4 sm:mb-6">
          "{testimonials[currentIndex].quote}"
        </p>
        <div className="text-teal-600 font-semibold text-sm sm:text-base">
          {testimonials[currentIndex].author}
        </div>
        <div className="text-gray-500 text-sm">
          {testimonials[currentIndex].role}
        </div>
      </div>
      
      <div className="flex justify-center mt-4 sm:mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-teal-600' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
