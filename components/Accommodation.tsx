
import React from 'react';
import { PRIMARY_ACCOMMODATION, ALTERNATIVE_ACCOMMODATIONS } from '../constants';

const Accommodation: React.FC = () => {
  return (
    <section id="accommodation" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl mb-4">Where to stay</h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-4"></div>
          <p className="sans-serif-text text-secondary text-lg max-w-[80ch] mx-auto">There is lots of accomodation around the venue at all different price points, however we've listed a few options for your convenience, from simple to a little bit more luxury.</p>
        </div>

        {/* Primary Accommodation Highlight */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-20 border border-gray-100">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/3 p-8 md:p-16">
              <span className="inline-block py-1 bg-accent/10 text-accent rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                Limited Discounted Rate
              </span>
              <h3 className="text-4xl text-gray-900 mb-4 relative left-[-0.3em]">{PRIMARY_ACCOMMODATION.name}</h3>
              <p className="text-accent uppercase tracking-widest text-sm font-bold mb-6">
                {/* {PRIMARY_ACCOMM_TYPE(PRIMARY_ACCOMMODATION.type)} •  */}
                {PRIMARY_ACCOMMODATION.distance}
              </p>
              <p className="text-gray-600 sans-serif-text text-lg mb-8 leading-relaxed max-w-2xl">
                {PRIMARY_ACCOMMODATION.description}
              </p>
              <a 
                href={PRIMARY_ACCOMMODATION.website} 
                className="mt-auto inline-block text-gray-900 font-bold border-b-2 border-accent/30 hover:border-accent transition-all uppercase tracking-widest text-[12px] pb-1"
              >
                View Hotel
              </a>
              {/* <div className="bg-gray-50 p-6 rounded-2xl border border-dashed border-accent/40 inline-flex flex-col sm:flex-row items-center gap-6">
                <div className="text-center sm:text-left">
                  <p className="text-xs uppercase tracking-[0.2em] font-bold text-gray-400 mb-1">Use Discount Code</p>
                  <p className="text-2xl font-black text-gray-900 tracking-wider">{PRIMARY_ACCOMMODATION.discountCode}</p>
                </div>
                <div className="h-px w-full sm:h-12 sm:w-px bg-gray-200"></div>
                <div className="text-center">
                  <p className="text-[10px] uppercase tracking-widest font-bold text-gray-400 mb-3">Or Scan to Book</p>
                  <div className="bg-white p-2 rounded-lg shadow-sm border border-gray-100">
                    <img src={PRIMARY_ACCOMMODATION.qrCodeUrl} alt="Booking QR Code" className="w-24 h-24" />
                  </div>
                </div>
              </div> */}
            </div>
            <div className="lg:w-1/3 bg-gray-100 relative min-h-[300px]">
              <img 
                src="/images/hampton-hilton.webp" 
                alt={PRIMARY_ACCOMMODATION.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Alternative Venues */}
        <div className="text-center mb-12">
          <h3 className="text-4xl md:text-5xl text-gray-900 mb-4">Alternative venues nearby</h3>
          <p className="sans-serif-text text-gray-500 mt-3">Other options in the local area. <a style={{ textDecoration: "underline", textUnderlineOffset: "3px"}} href="https://www.google.com/maps/search/Hotels/@51.5170527,-0.7598731,14z?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D" target="_blank">Click here</a> to see many more on Google Maps.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ALTERNATIVE_ACCOMMODATIONS.map((place, index) => (
            <div key={index} className="bg-white p-10 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gray-50 flex items-center justify-center rounded-full mb-6 group-hover:bg-accent/10 transition-colors">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m4 0h1m-5 10h1m4 0h1m-5-4h1m4 0h1"></path></svg>
              </div>
              <h4 className="text-4xl text-gray-900 mb-2 leading-[1.4em]"><span dangerouslySetInnerHTML={{ __html: place.name }} /></h4>
              {/* {place.type} •  */}
              <p className="text-accent uppercase tracking-widest text-[10px] font-bold mb-4">{place.distance}</p>
              <p className="text-gray-500 text-sm sans-serif-text mb-8">{place.description}</p>
              <a 
                target="_blank"
                href={place.website} 
                className="mt-auto inline-block text-gray-900 font-bold border-b-2 border-accent/30 hover:border-accent transition-all uppercase tracking-widest text-[12px] pb-1"
              >
                View Hotel
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Simple helper to avoid TS issues if not using the full type in a quick way
function PRIMARY_ACCOMM_TYPE(type: string) {
  return type;
}

export default Accommodation;
