
import React from 'react';
import { COUPLE_NAMES } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="hero relative h-screen w-full flex items-center justify-center overflow-hidden"
    style={{
      backgroundColor: '#a4c0b1'
    }}>
      {/* bg-gold-pattern */}
      {/* Optional: Add an image overlay if the user wants an image instead of just pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{ 
          backgroundImage: "url('./images/flower-pattern_medium.png')",
          backgroundRepeat: "repeat",
          backgroundPosition: "left top",
          backgroundSize: "1000px"
        }}
      />
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ 
          backgroundImage: "url('./images/wildflowers_small.png')",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "center bottom -150px",
          backgroundSize: "946px"
        }}
      />
      
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <span className="sans-serif-text text-lg md:text-xl text-secondary mb-4 block uppercase text-white">
          Welcome to our celebration
        </span>
        <h1 className="text-6xl md:text-9xl text-white mt-9 mb-10 drop-shadow-sm leading-tight">
          {/* font-black  */}
          {COUPLE_NAMES.bride} 
          {/* <br className="md:hidden" /> */}
          <span className="text-accent"> & </span> 
          {/* <br className="md:hidden" /> */}
          {COUPLE_NAMES.groom}
        </h1>
        {/* <div className="h-px w-32 bg-accent mx-auto mb-8"></div> */}
        <p className="sans-serif-text text-lg md:text-xl text-secondary uppercase text-white">
          {/* italic */}
          July 18th, 2026 ♡ Lillibrooke Manor
          {/* • */}
        </p>
        
        <div className='flex gap-6 mt-12 justify-center flex-wrap'>
          <a 
            href="#rsvp" 
            className="btn inline-block px-10 py-4 bg-gray-900 text-white rounded-full hover:bg-accent transition-colors duration-300 font-medium tracking-widest text-sm uppercase"
          >
            RSVP by the 30th April
          </a>
          <a 
            href="#faq" 
            className="btn inline-block px-10 py-4 bg-gray-900 text-white rounded-full hover:bg-accent transition-colors duration-300 font-medium tracking-widest text-sm uppercase"
          >
            All the info
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
