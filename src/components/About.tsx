
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">
              About XMRT Solutions
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded by experts in artificial intelligence, psychology, and professional communication, 
              XMRT Solutions emerged from a simple observation: the most successful professionals excel 
              at reading people, not just data.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our interdisciplinary team combines cutting-edge AI research with deep understanding of 
              human psychology to create tools that enhance rather than replace human intuition. Based 
              in Costa Rica with a global vision, we're democratizing emotional intelligence for 
              professionals worldwide.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  To empower professionals with AI-enhanced emotional intelligence, fostering deeper 
                  connections and more effective communication in every interaction.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Our Vision</h3>
                <p className="text-gray-600">
                  A world where technology amplifies human empathy and understanding, creating more 
                  successful outcomes in therapy, law enforcement, business, and beyond.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-teal-100 to-blue-100 rounded-2xl p-8">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80" 
                alt="Team at work"
                className="w-full h-96 object-cover rounded-xl shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-sm text-gray-600">Headquartered in</div>
              <div className="text-xl font-semibold text-teal-600">Costa Rica</div>
              <div className="text-sm text-gray-600">Serving globally</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
