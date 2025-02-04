import React from 'react';
import Chatbot from '../components/Chatbot';

function Quote() {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Get a Quote</h2>
      <div className="max-w-2xl mx-auto">
        <Chatbot />
      </div>
    </div>
  );
}

export default Quote;