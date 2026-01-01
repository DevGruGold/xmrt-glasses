import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, Check, ExternalLink, Sparkles, Clock, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PreOrder = () => {
  const { t } = useTranslation();
  const { addItem } = useCart();

  const tiers = [
    {
      id: 'early-bird',
      name: t('preorder.earlyBird.title'),
      price: 399,
      originalPrice: 499,
      badge: t('preorder.earlyBird.badge'),
      features: [
        t('preorder.earlyBird.feature1'),
        t('preorder.earlyBird.feature2'),
        t('preorder.earlyBird.feature3'),
        t('preorder.earlyBird.feature4'),
      ],
      popular: false,
    },
    {
      id: 'pro-bundle',
      name: t('preorder.proBundle.title'),
      price: 499,
      originalPrice: 649,
      badge: t('preorder.proBundle.badge'),
      features: [
        t('preorder.proBundle.feature1'),
        t('preorder.proBundle.feature2'),
        t('preorder.proBundle.feature3'),
        t('preorder.proBundle.feature4'),
        t('preorder.proBundle.feature5'),
      ],
      popular: true,
    },
    {
      id: 'enterprise-pack',
      name: t('preorder.enterprise.title'),
      price: 1499,
      originalPrice: 1999,
      badge: t('preorder.enterprise.badge'),
      features: [
        t('preorder.enterprise.feature1'),
        t('preorder.enterprise.feature2'),
        t('preorder.enterprise.feature3'),
        t('preorder.enterprise.feature4'),
        t('preorder.enterprise.feature5'),
      ],
      popular: false,
    },
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleAddToCart = (tier: typeof tiers[0]) => {
    addItem({
      id: tier.id,
      name: tier.name,
      price: tier.price,
      originalPrice: tier.originalPrice,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section with Kickstarter Badge */}
        <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              {t('preorder.backHome')}
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-[#05CE78] text-white px-4 py-2 rounded-full text-sm font-semibold">
                  <Sparkles className="w-4 h-4" />
                  {t('preorder.kickstarterBadge')}
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  {t('preorder.title')}
                </h1>
                
                <p className="text-lg sm:text-xl text-gray-300">
                  {t('preorder.description')}
                </p>

                <div className="flex flex-wrap gap-6 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#05CE78]" />
                    {t('preorder.limitedTime')}
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-[#05CE78]" />
                    {t('preorder.guarantee')}
                  </div>
                </div>

                <a
                  href="https://www.kickstarter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#05CE78] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#04b56a] transition-all duration-300 transform hover:scale-105"
                >
                  {t('preorder.backOnKickstarter')}
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>

              {/* Video Section */}
              <div className="relative">
                <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
                  <video
                    controls
                    poster="/placeholder.svg"
                    className="w-full aspect-video"
                  >
                    <source src="/videos/XMRT_Glasses_Kickstarter_Final.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-[#05CE78] text-white px-4 py-2 rounded-lg font-semibold text-sm">
                  {t('preorder.watchCampaign')}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                {t('preorder.chooseTier')}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {t('preorder.tierDescription')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  className={`bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 relative ${
                    tier.popular ? 'ring-2 ring-teal-600' : ''
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        {t('preorder.mostPopular')}
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <span className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                      {tier.badge}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900">{tier.name}</h3>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-teal-600">
                        {formatPrice(tier.price)}
                      </span>
                      <span className="text-gray-400 line-through">
                        {formatPrice(tier.originalPrice)}
                      </span>
                    </div>
                    <p className="text-green-600 text-sm font-medium mt-1">
                      {t('preorder.save')} {formatPrice(tier.originalPrice - tier.price)}
                    </p>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleAddToCart(tier)}
                    className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                      tier.popular
                        ? 'bg-teal-600 text-white hover:bg-teal-700'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                    }`}
                  >
                    {t('preorder.addToCart')}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-500">
              <div className="flex items-center gap-2">
                <img
                  src="https://ksr-static.imgix.net/tq0sfld-kickstarter-logo-green.png"
                  alt="Kickstarter"
                  className="h-8"
                />
              </div>
              <div className="text-center">
                <p className="font-semibold text-gray-900">{t('preorder.backedBy')}</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PreOrder;
