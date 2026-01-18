
import React from 'react';
import { BRIDAL_PARTY } from '../constants';

const BridalParty: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Our Bridal Party</h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-4"></div>
          <p className="serif-text italic text-secondary text-lg">The ones who stand by our side.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {BRIDAL_PARTY.map((member) => (
            <div key={member.id} className="group relative">
              <div className="aspect-[4/4] overflow-hidden rounded-lg mb-6 shadow-lg">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-accent font-medium uppercase tracking-widest text-xs mb-3">{member.role}</p>
                <p className="text-gray-600 serif-text italic px-8 line-clamp-2">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BridalParty;
