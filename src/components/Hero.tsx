
import React from 'react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  
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
                {t('hero.title')} <span className="text-teal-600">{t('header.subtitle')}</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 font-medium">
                {t('hero.subtitle')}
              </p>
            </div>
            
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t('hero.description')}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <button 
                onClick={scrollToContact}
                className="bg-teal-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-teal-700 transition-all duration-300 transform hover:scale-105"
              >
                {t('hero.requestDemo')}
              </button>
              <button className="border-2 border-teal-600 text-teal-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-teal-600 hover:text-white transition-all duration-300">
                {t('hero.buyNow')}
              </button>
            </div>
          </div>

          <div className="relative order-first lg:order-last">
            <div className="bg-gradient-to-br from-teal-100 to-blue-100 rounded-2xl p-4 sm:p-8">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" 
                alt="Professional conversation with XMRT Glasses providing real-time emotional insights"
                className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-xl shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 bg-white p-3 sm:p-4 rounded-xl shadow-lg">
              <div className="text-xs sm:text-sm text-gray-600">{t('hero.liveAnalysis')}</div>
              <div className="text-sm sm:text-lg font-semibold text-teal-600">{t('hero.confidence')}: 87%</div>
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
  const { t } = useTranslation();
  
  const testimonials = [
    {
      quote: t('testimonials.quote1'),
      author: t('testimonials.author1'),
      role: t('testimonials.role1')
    },
    {
      quote: t('testimonials.quote2'),
      author: t('testimonials.author2'),
      role: t('testimonials.role2')
    },
    {
      quote: t('testimonials.quote3'),
      author: t('testimonials.author3'),
      role: t('testimonials.role3')
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
