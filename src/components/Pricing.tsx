import React from 'react';
import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  const navigate = useNavigate();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goToPreOrder = () => {
    navigate('/pre-order');
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your professional needs. All plans include our core AI analysis features and ongoing support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Hardware Kit */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Hardware Kit</h3>
              <div className="text-4xl font-bold text-teal-600 mb-2">$499</div>
              <p className="text-gray-600">One-time purchase</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">XMRT Smart Glasses</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Charging Case & Cable</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Quick Start Guide</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">1-Year Hardware Warranty</span>
              </li>
            </ul>

            <button 
              onClick={goToPreOrder}
              className="w-full bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
            >
              Buy Now
            </button>
          </div>

          {/* Pro Subscription */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 ring-2 ring-teal-600 relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Most Popular
              </span>
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro App Subscription</h3>
              <div className="text-4xl font-bold text-teal-600 mb-2">$29</div>
              <p className="text-gray-600">per month</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Real-time AI Analysis</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Audio & Visual Coaching</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Session Analytics & Reports</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Cloud Storage & Sync</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Priority Support</span>
              </li>
            </ul>

            <button 
              onClick={goToPreOrder}
              className="w-full bg-teal-600 text-white py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
            >
              Get Started
            </button>
          </div>

          {/* Enterprise */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <div className="text-4xl font-bold text-teal-600 mb-2">Custom</div>
              <p className="text-gray-600">Contact us</p>
            </div>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <Check className="w-5 h-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Volume Hardware Discounts</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Custom AI Training</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">On-Premise Deployment</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Advanced Analytics Dashboard</span>
              </li>
              <li className="flex items-start">
                <Check className="w-5 h-5 text-teal-600 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Dedicated Support Team</span>
              </li>
            </ul>

            <button 
              onClick={scrollToContact}
              className="w-full border-2 border-teal-600 text-teal-600 py-3 rounded-lg font-semibold hover:bg-teal-600 hover:text-white transition-colors"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
