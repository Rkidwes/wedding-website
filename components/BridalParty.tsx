
import React from 'react';
import { BRIDAL_PARTY } from '../constants';

const BridalParty: React.FC = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl mb-4">Our bridal party</h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-4"></div>
          <p className="sans-serif-text text-secondary text-lg max-w-[80ch] mx-auto">Both Varvara and Wesley are lucky to be surrounded by incredible groups of amazing friends and special people. Unfortunately they cannot all stand directly at their side on the day so here are the few they've picked to represent everyone special in their lives.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {BRIDAL_PARTY.map((member) => (
            <div key={member.id} className="group relative">
              <div className="aspect-[4/4] overflow-hidden rounded-lg mb-6 shadow-lg">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className={`${member.position} w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110`}
                />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-accent font-medium uppercase text-xs mb-3">{member.role}</p>
                {/* <p className="text-gray-600 sans-serif-text px-8 line-clamp-2">{member.description}</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BridalParty;
