import React from 'react';
import glossaryTerms from '../data/glossary';

function Glossary() {
  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Glossary</h2>
      <div className="space-y-4">
        {glossaryTerms.map((item, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-2">{item.term}</h3>
            <p className="text-gray-700">{item.definition}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Glossary;