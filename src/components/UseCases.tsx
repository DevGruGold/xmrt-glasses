
import React from 'react';
import { Briefcase, Handshake, Users, Presentation, Network, Heart } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const UseCases = () => {
  const { t } = useTranslation();
  
  const useCases = [
    {
      icon: <Briefcase className="w-12 h-12" />,
      title: t('useCases.sales.title'),
      description: t('useCases.sales.description')
    },
    {
      icon: <Handshake className="w-12 h-12" />,
      title: t('useCases.negotiations.title'),
      description: t('useCases.negotiations.description')
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: t('useCases.interviews.title'),
      description: t('useCases.interviews.description')
    },
    {
      icon: <Presentation className="w-12 h-12" />,
      title: t('useCases.presentations.title'),
      description: t('useCases.presentations.description')
    },
    {
      icon: <Network className="w-12 h-12" />,
      title: t('useCases.networking.title'),
      description: t('useCases.networking.description')
    },
    {
      icon: <Heart className="w-12 h-12" />,
      title: t('useCases.therapy.title'),
      description: t('useCases.therapy.description')
    }
  ];

  return (
    <section id="use-cases" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('useCases.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('useCases.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="text-teal-600 mb-6 flex justify-center">
                {useCase.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                {useCase.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-center">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
