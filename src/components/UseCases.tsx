
import React from 'react';
import { Users, User, Briefcase, School, Newspaper } from 'lucide-react';

const UseCases = () => {
  const useCases = [
    {
      icon: <Users className="w-12 h-12" />,
      title: "Therapists & Counselors",
      description: "Enhance therapeutic relationships by detecting subtle emotional shifts and non-verbal cues that traditional observation might miss."
    },
    {
      icon: <User className="w-12 h-12" />,
      title: "Law Enforcement & Investigators",
      description: "Improve interview techniques and suspect assessment with real-time analysis of deception indicators and stress responses."
    },
    {
      icon: <Briefcase className="w-12 h-12" />,
      title: "Negotiators & Sales Professionals",
      description: "Close more deals by understanding client emotions, objections, and buying signals before they're verbally expressed."
    },
    {
      icon: <School className="w-12 h-12" />,
      title: "Educators & Social Workers",
      description: "Better support students and clients by recognizing emotional distress, engagement levels, and communication barriers."
    },
    {
      icon: <Newspaper className="w-12 h-12" />,
      title: "Journalists & Interviewers",
      description: "Conduct more effective interviews by reading subject comfort levels and identifying moments for deeper questioning."
    }
  ];

  return (
    <section id="use-cases" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Designed for Professional Excellence
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            XMRT Glasses empower professionals across industries to build stronger connections, make better decisions, and achieve superior outcomes.
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
