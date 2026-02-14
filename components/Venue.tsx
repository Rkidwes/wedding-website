
import React from 'react';
import { VENUE_DETAILS } from '../constants';

const Venue: React.FC = () => {
  return (
    <section className="py-16 md:py-24 text-white relative" style={{
      backgroundColor: '#a4c0b1'
    }}>
      <div 
        className="absolute z- inset-0 pointer-events-none opacity-60 z-[-1]"
        style={{ 
          backgroundImage: "url('/images/flower-pattern_medium.png')",
          backgroundRepeat: "repeat",
          backgroundPosition: "left top",
          backgroundSize: "1000px"
        }}
      />
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center text-center lg:text-left">
        <div>
          <span className="text-accent uppercase font-bold text-sm mb-8 block tracking-[0.35em]">The Venue</span>
          <h2 className="text-5xl md:text-6xl mb-8 leading-tight">{VENUE_DETAILS.name}</h2>
          <p className="text-xl sans-serif-text text-white mb-8 max-w-lg leading-relaxed mx-auto lg:mx-0">
            Nestled in the heart of Berkshire, surrounded by 15 acres of enchanting English countryside, we hope you agree that this exquisite 15th‑century estate will provide a breathtaking backdrop for us to say 'I do'.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4 justify-center lg:justify-start">
              {/* <div className="w-6 h-6 mt-1 flex-shrink-0 text-accent">
                <svg fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
              </div> */}
              <div className=" tracking-widest">
                <div className='flex items-center gap-2 justify-center lg:justify-start mb-1'>
                  <div className="w-6 h-6 flex-shrink-0 text-accent">
                    <svg fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>
                  </div>
                  
                  <p className="font-bold text-lg">Location</p>
                </div>
                <p className="text-lg lg:left-[32px] relative">{VENUE_DETAILS.address}</p>
              </div>
            </div>
            
            {/* <div className="flex items-start gap-4">
              <div className="w-6 h-6 mt-1 flex-shrink-0 text-accent">
                <svg fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Directions</h4>
                <p className="text-gray-400 max-w-md">{VENUE_DETAILS.directions}</p>
              </div>
            </div> */}
          </div>
        </div>
        
        <div className="h-[500px] w-full bg-gray-800 rounded-2xl overflow-hidden shadow-2xl relative">
          <img 
            src="/images/main_barn.jpg" 
            alt="Venue" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="p-8 bg-white text-gray-900 rounded-lg shadow-xl text-center">
                <p className="font-bold">Lillibrooke Manor</p>
                <p className="text-sm text-gray-500 mb-4">Berkshire, England</p>
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=SL6+3AD`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn inline-block px-6 py-2 bg-gray-900 text-white text-sm font-bold uppercase tracking-wider rounded hover:bg-accent transition-colors"
                >
                  Get Directions
                </a>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Venue;
