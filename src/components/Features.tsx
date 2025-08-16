
import React from 'react';
import { Eye, Headphones, Globe, Glasses, Shield, Battery, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Features = () => {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: t('features.realTime.title'),
      description: t('features.realTime.description')
    },
    {
      icon: <Eye className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: t('features.expressions.title'),
      description: t('features.expressions.description')
    },
    {
      icon: <Headphones className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: t('features.bodyLanguage.title'),
      description: t('features.bodyLanguage.description')
    },
    {
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: t('features.privacy.title'),
      description: t('features.privacy.description')
    },
    {
      icon: <Battery className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: t('features.battery.title'),
      description: t('features.battery.description')
    },
    {
      icon: <Globe className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: t('features.integration.title'),
      description: t('features.integration.description')
    }
  ];

  return (
    <section id="features" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            {t('features.title')}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {t('features.subtitle')}
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
