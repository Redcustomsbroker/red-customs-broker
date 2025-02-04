import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

function Home() {
  const { t } = useTranslation();

  return (
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="bg-red-custom text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">{t('welcome')}</h1>
          <p className="text-xl mb-8">Your trusted freight forwarding partner.</p>
          <button className="bg-light-green text-black px-6 py-3 rounded-full font-semibold hover:bg-green-400 transition duration-300">
            Get a Quote
          </button>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Tracking</h3>
            <p>Track your shipments in real-time.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Quotes</h3>
            <p>Get instant freight quotes.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Support</h3>
            <p>24/7 customer support.</p>
          </div>
        </div>
      </div>
    </div>
</motion.div>
  );
}

export default Home;