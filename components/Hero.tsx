
import React from 'react';
import { COUPLE_NAMES } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="hero relative h-screen w-full flex items-center justify-center overflow-hidden bg-gold-pattern">
      {/* Optional: Add an image overlay if the user wants an image instead of just pattern */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ 
          backgroundImage: `url('https://picsum.photos/1920/1080?wedding')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <span className="serif-text italic text-lg md:text-2xl text-secondary mb-4 block tracking-widest uppercase">
          Welcome to our celebration
        </span>
        <h1 className="text-6xl md:text-9xl font-black text-gray-900 mb-6 drop-shadow-sm leading-tight">
          {COUPLE_NAMES.bride} <br className="md:hidden" />
          <span className="text-accent">&</span> <br className="md:hidden" />
          {COUPLE_NAMES.groom}
        </h1>
        <div className="h-px w-32 bg-accent mx-auto mb-8"></div>
        <p className="serif-text text-xl md:text-3xl text-secondary italic tracking-wide">
          September 20th, 2025 • Napa Valley
        </p>
        
        <a 
          href="#rsvp" 
          className="mt-12 inline-block px-10 py-4 bg-gray-900 text-white rounded-full hover:bg-accent transition-colors duration-300 font-medium tracking-widest text-sm uppercase"
        >
          RSVP Now
        </a>
      </div>
    </section>
  );
};

export default Hero;
