import React, { useState } from 'react';

/**
 * PLUG-AND-PLAY RSVP SUBMISSION
 * 1. Sign up for a free account at Formspree.io or Getform.io
 * 2. Create a new form and copy your unique endpoint URL
 * 3. Paste that URL into the FORM_ENDPOINT constant below
 */
const FORM_ENDPOINT = "https://api.web3forms.com/submit"; // Web3Forms endpoint

interface GuestEntry {
  firstName: string;
  lastName: string;
  dietary: string;
}

const RSVPForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // State for dynamic guest list
  const [guests, setGuests] = useState<GuestEntry[]>([
    { firstName: '', lastName: '', dietary: '' }
  ]);
  const [email, setEmail] = useState('');
  const [attendance, setAttendance] = useState('Accepting');

  // 🔒 Honeypot field (bots will often fill this)
  const [website, setWebsite] = useState(''); // must remain empty for humans

  const resetForm = () => {
    setGuests([{ firstName: '', lastName: '', dietary: '' }]);
    setEmail('');
    setAttendance('Accepting');
    setSubmitted(false);
    setError(null);
    setWebsite('');
  };

  const addGuest = () => {
    setGuests([...guests, { firstName: '', lastName: '', dietary: '' }]);
  };

  const removeGuest = (index: number) => {
    if (guests.length > 1) {
      const newGuests = [...guests];
      newGuests.splice(index, 1);
      setGuests(newGuests);
    }
  };

  const updateGuest = (index: number, field: keyof GuestEntry, value: string) => {
    const newGuests = [...guests];
    newGuests[index][field] = value;
    setGuests(newGuests);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // 🪤 Honeypot check — if filled, treat as spam and bail out silently
    if (website.trim().length > 0) {
      // Option A (recommended): pretend success so bots don't retry
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
      }, 300);
      return;

      // Option B: just drop it quietly (uncomment to use)
      // setLoading(false);
      // return;
    }

  const flatGuests: Record<string, string> = {};
    guests.forEach((g, i) => {
      const n = i + 1;
      flatGuests[`Guest ${n} - First Name`] = g.firstName || '';
      flatGuests[`Guest ${n} - Last Name`]  = g.lastName  || '';
      flatGuests[`Guest ${n} - Dietary`]    = g.dietary   || '';
    });


    const payload = {
      access_key: "bc2338b4-228b-4209-ac1b-997e546c8ae2", // Web3Forms access key
      email,
      attendance,
      guestCount: guests.length,
      ...flatGuests,
      // Send the honeypot field too (empty for humans; populated for bots)
      website
    };

    if (!FORM_ENDPOINT) {
      console.log("No FORM_ENDPOINT configured. Simulating submission:", payload);
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
      }, 1500);
      return;
    }

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error("Failed to send RSVP.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section id="rsvp" className="py-16 md:py-24 relative" style={{
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
        <div className="max-w-xl mx-auto bg-white p-12 rounded-3xl text-center animate-in fade-in zoom-in duration-500">
          <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
          </div>
          <h2 className="text-5xl mb-4">Thank You!</h2>
          <p className="sans-serif-text text-gray-600 text-lg">Your response has been recorded and if you're coming,we can't wait to see you there!</p>
          <button 
            onClick={resetForm} 
            className="mt-8 text-sm text-accent underline hover:text-gray-900 transition-colors uppercase font-bold tracking-widest"
          >
            Submit another RSVP
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-16 md:py-24 px-6 relative" style={{
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
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-3xl shadow-2xl border-accent">
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl mb-4">Will you join us?</h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-4"></div>
          <p className="sans-serif-text text-secondary text-lg">Please RSVP by April 30th, 2026.</p>
        </div>

        {error && (
          <div className="mb-8 p-4 bg-red-50 text-red-600 rounded-lg text-sm text-center font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-10">
          {/* 🪤 Honeypot input (hidden from users & assistive tech) */}
          <div aria-hidden="true" className="hidden">
            <label htmlFor="website">Website New</label>
            <input
              id="website"
              name="website"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-10 border-b border-gray-300">
            <div>
              <label className="block text-xs uppercase tracking-widest font-bold text-gray-600 mb-4">Attending?</label>
              <div className="flex gap-4">
                <label className="flex-1 cursor-pointer group">
                  <input 
                    type="radio" 
                    name="attendance" 
                    value="Accepting" 
                    className="hidden peer" 
                    checked={attendance === 'Accepting'}
                    onChange={() => setAttendance('Accepting')}
                  />
                  <div className="min-h-[60px] flex items-center justify-center p-4 text-center border-2 border-gray-300 rounded-xl peer-checked:border-gray-900 peer-checked:bg-gray-900 peer-checked:text-white transition-all font-bold text-[12px] uppercase tracking-widest group-hover:border-accent/30">
                    Happily Accepting
                  </div>
                </label>
                <label className="flex-1 cursor-pointer group">
                  <input 
                    type="radio" 
                    name="attendance" 
                    value="Declining" 
                    className="hidden peer"
                    checked={attendance === 'Declining'}
                    onChange={() => setAttendance('Declining')}
                  />
                  <div className="min-h-[60px] flex items-center justify-center p-4 text-center border-2 border-gray-300 rounded-xl peer-checked:border-gray-900 peer-checked:bg-gray-900 peer-checked:text-white transition-all font-bold text-[12px] uppercase tracking-widest group-hover:border-accent/30">
                    Regretfully Declining
                  </div>
                </label>
              </div>
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest font-bold text-gray-600 mb-4">Contact Email</label>
              <input 
                required
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-50 p-4 rounded-xl focus:ring-2 focus:ring-accent transition-all outline-none border border-gray-300 placeholder-gray-500"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="space-y-8">
            <h3 className="text-4xl md:text-5xl text-gray-900 flex items-center gap-4">
              Guest List
              <span className="h-px flex-1 bg-gray-100"></span>
            </h3>
            
            <div className="space-y-6">
              {guests.map((guest, index) => (
                <div key={index} className="relative bg-gray-50 p-6 rounded-2xl border border-gray-300">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[12px] font-black uppercase tracking-widest text-gray-600">Guest {index + 1}</span>
                    {index > 0 && (
                      <button type="button" onClick={() => removeGuest(index)} className="text-gray-400 hover:text-red-500 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                      </button>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <input required type="text" value={guest.firstName} onChange={(e) => updateGuest(index, 'firstName', e.target.value)} className="w-full bg-white border border-gray-300 p-3 rounded-lg text-md placeholder-gray-500" placeholder="First Name" />
                    <input required type="text" value={guest.lastName} onChange={(e) => updateGuest(index, 'lastName', e.target.value)} className="w-full bg-white border border-gray-300 p-3 rounded-lg text-md placeholder-gray-500" placeholder="Last Name" />
                  </div>
                  <input type="text" value={guest.dietary} onChange={(e) => updateGuest(index, 'dietary', e.target.value)} className="w-full bg-white border border-gray-300 p-3 rounded-lg text-md placeholder-gray-500" placeholder="Dietary Requirements" />
                </div>
              ))}
            </div>

            <button type="button" onClick={addGuest} className="flex items-center gap-3 text-accent hover:text-gray-900 transition-colors py-2 group">
              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:rotate-90 transition-all">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
              </div>
              <span className="text-sm font-bold uppercase tracking-widest">Add Another Guest</span>
            </button>
          </div>

          <button type="submit" disabled={loading} className="btn w-full py-5 bg-gray-900 text-white transition-all font-bold uppercase disabled:opacity-50 active:scale-95">
            {loading ? 'Processing...' : 'Confirm RSVP'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default RSVPForm;