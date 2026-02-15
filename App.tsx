
import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import BridalParty from './components/BridalParty';
import FAQ from './components/FAQ';
import Venue from './components/Venue';
import Gallery from './components/Gallery';
import Accommodation from './components/Accommodation';
import RSVPForm from './components/RSVPForm';
// import RSVPFormProtected from './components/RSVPFormProtected';
// import WeddingAssistant from './components/WeddingAssistant';

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle hash navigation on initial page load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Wait for content to render and animations to settle
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 500); // Delay to allow reveal animations to complete
    }
  }, []);

  const navLinks: { name: string; href: string; highlight?: boolean }[] = [
    { name: 'Home', href: '#home' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Bridal Party', href: '#bridal-party' },
    { name: 'Venue', href: '#venue' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Stay', href: '#accommodation' },
    { name: 'RSVP', href: '#rsvp' },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation Header */}
      <nav className={`sans-serif-font fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm h-20' : 'bg-transparent h-24'
      }`}>
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <a 
            href="#home" 
            className={`text-xl font-500 uppercase flex items-center gap-1 transition-colors duration-500 ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
            style={{ color: isScrolled ? undefined : '#ffffff' }}
          >
            v<img 
                src="/images/wildflower20.png" 
                style={{ width: '15px'}}
              />w
            {/* V<span className="text-accent">&</span>W */}
            {/* <img 
                src="/images/monogram.png" 
                style={{ width: '60px'}}
              /> */}
          </a>

          {/* Desktop Nav */}
          {/*  text-gray-500 */}
          <div className="hidden md:flex gap-8 text-[12px] font-normal uppercase tracking-[0.35em]">
            {navLinks.map(link => (
              <a 
                key={link.name}
                href={link.href} 
                className={`nav-link ${isScrolled ? 'text-gray-900' : 'text-white'}`}
                style={{ color: isScrolled ? undefined : '#ffffff' }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          {/* text-gray-900 */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{ color: '#ffffff' }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div className={`fixed inset-0 z-50 bg-white transition-transform duration-200 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="p-8 flex flex-col h-full">
          <div className="flex justify-between items-center mb-8">
             {/* <span className="text-xl font-black uppercase">Menu</span> */}

              <a href="#home" className={`text-xl font-500 uppercase flex items-center gap-1 transition-colors duration-500 text-gray-900`}>
            v<img 
                src="/images/wildflower20.png" 
                style={{ width: '15px'}}
              />w
            {/* V<span className="text-accent">&</span>W */}
            {/* <img 
                src="/images/monogram.png" 
                style={{ width: '60px'}}
              /> */}
          </a>

             <button onClick={() => setIsMobileMenuOpen(false)}>
               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
             </button>
          </div>
          <div className="flex flex-col gap-8 text-2xl font-black uppercase text-gray-900">
            {navLinks.map(link => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="mt-auto text-center border-t pt-8">
            <p className="sans-serif-text text-gray-400">July 18th, 2026</p>
          </div>
        </div>
      </div>

      <main>
        <div id="home">
          <Hero />
        </div>
        <Countdown />
        <section id="faq">
          <FAQ />
        </section>
        <section id="bridal-party">
          <BridalParty />
        </section>
        <section id="venue">
          <Venue />
        </section>
        <Gallery />
        <section id="accommodation">
          <Accommodation />
        </section>
        
        {/* Option 1: Standard RSVP */}
        {/* <div className="py-10 bg-gray-100 text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-400">Option 1: Standard Public Form</p>
        </div> */}
        <RSVPForm />

        {/* Option 2: Passphrase Protected RSVP */}
        {/* <div className="py-10 bg-gray-100 text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-gray-400">Option 2: Passphrase Protected Form</p>
        </div>
        <RSVPFormProtected /> */}
      </main>

      <footer className="py-20 bg-white text-center border-t border-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <p className="sans-serif-text text-secondary mb-6 text-lg">We can't wait to see you on the 18th!</p>
          <p className="text-4xl md:text-5xl mb-12 tracking-tight script-text">Love Varvara & Wesley</p>
          <div className="flex justify-center gap-8 mb-12 text-[10px] font-bold uppercase text-gray-400">
             <a href="#home">Top</a>
             <a href="#venue">Venue</a>
             <a href="#rsvp">RSVP</a>
          </div>
          <div className="text-[10px] uppercase tracking-[0.3em] text-gray-300">
            &copy; 2026 Varvara & Wesley Wedding ♡ Handcrafted for our Guests
          </div>
        </div>
      </footer>

      {/* <WeddingAssistant /> */}
    </div>
  );
};

export default App;
