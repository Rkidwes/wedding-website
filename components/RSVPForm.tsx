import React, { useState } from 'react';

/**
 * PLUG-AND-PLAY RSVP SUBMISSION
 * 1. Sign up for a free account at Formspree.io or Getform.io
 * 2. Create a new form and copy your unique endpoint URL
 * 3. Paste that URL into the FORM_ENDPOINT constant below
 */
const FORM_ENDPOINT = "https://api.web3forms.com/submit"; // Web3Forms endpoint
const USE_WEB3FORMS_IN_DEV = false; // Set to true to test with real API in development

interface GuestEntry {
  firstName: string;
  lastName: string;
  attending: string;
  dietary: string;
  requests: string;
}

const RSVPForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // State for dynamic guest list
  const [guests, setGuests] = useState<GuestEntry[]>([
    { firstName: '', lastName: '', attending: 'Accepting', dietary: '', requests: '' }
  ]);
  const [email, setEmail] = useState('');

  // 🔒 Honeypot field (bots will often fill this)
  const [website, setWebsite] = useState(''); // must remain empty for humans

  const resetForm = () => {
    setGuests([{ firstName: '', lastName: '', attending: 'Accepting', dietary: '', requests: '' }]);
    setEmail('');
    setSubmitted(false);
    setError(null);
    setWebsite('');
  };

  const addGuest = () => {
    setGuests([...guests, { firstName: '', lastName: '', attending: 'Accepting', dietary: '', requests: '' }]);
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
    // Pretend success so bots don't retry
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 300);
    return;
  }

  // Build a readable, 2‑column “pseudo‑table” as a multi-line string.
  // Web3Forms will convert \n to <br> in the email, so you get one row per line. [3](https://feedback.web3forms.com/updates/p/new-lessbrgreater-tag-support-for-new-lines)
  const guests_table = guests
    .map((g) => {
      const fullName = `${g.firstName} ${g.lastName}`.trim();
      const status = g.attending === 'Accepting' ? 'Attending' : 'Not Attending';
      const diet = g.dietary?.trim() || "None";
      const req = g.requests?.trim() || "None";
      return `${fullName} | ${status} | Dietary: ${diet} | Requests: ${req}`;
    })
    .join("\n");

  const payload = {
    // access_key: "INVALID_KEY_FOR_TESTING_12345", // Web3Forms access key - TEMPORARILY INVALID FOR TESTING
    access_key: "bc2338b4-228b-4209-ac1b-997e546c8ae2", // Web3Forms access key - REPLACE WITH YOUR ACTUAL KEY
    email,
    guest_count: guests.length,
    attending_count: guests.filter(g => g.attending === 'Accepting').length,
    declining_count: guests.filter(g => g.attending === 'Declining').length,
    // 👇 human-friendly view in your inbox (one line per person)
    guests_table
    // Note: intentionally NOT sending `website` (honeypot) or raw `guests` array.
  };

  // Check if we're in development mode and web3forms is disabled
  const isDev = import.meta.env.DEV;
  const shouldSimulate = isDev && !USE_WEB3FORMS_IN_DEV;

  if (!FORM_ENDPOINT || shouldSimulate) {
    console.log("Simulating submission (dev mode):", payload);
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
        Accept: "application/json",
        "Content-Type": "application/json",
      },
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

  // Single section with conditional content inside
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

      {/* Success State - Thank You Message */}
      {submitted ? (
        <div className="max-w-xl mx-auto bg-white p-12 rounded-3xl text-center">
          <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          <h2 className="text-5xl mb-4">Thank You!</h2>
          <p className="sans-serif-text text-gray-600 text-lg">Your response has been recorded and if you're coming, we can't wait to see you there!</p>
          <button 
            onClick={resetForm} 
            className="mt-8 text-sm text-accent underline hover:text-gray-900 transition-colors uppercase font-bold tracking-widest"
          >
            Submit another RSVP
          </button>
        </div>
      ) : (
        /* Form State */
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 pb-10 border-b border-gray-300 items-center">
            {/* <div>
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
            </div> */}
            {/* <div> */}
              <label className="block text-xs uppercase tracking-widest font-bold text-gray-600">Contact Email</label>
              <input 
                required
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-gray-50 p-4 rounded-xl focus:ring-2 focus:ring-accent transition-all outline-none border border-gray-300 placeholder-gray-500 col-start-1 row-start-2"
                placeholder="your@email.com"
              />
            {/* </div> */}
          </div>

          <div className="space-y-8">
            {/* <h3 className="text-4xl md:text-5xl text-gray-900 flex items-center gap-4">
              Guest List
              <span className="h-px flex-1 bg-gray-100"></span>
            </h3> */}
            
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
                  
                  <div className="mb-6">
                    <label className="block text-xs uppercase tracking-widest font-bold text-gray-600 mb-3">Attending?</label>
                    <div className="flex gap-6">
                      <label className="flex-1 cursor-pointer group attending accepting">
                        <input 
                          type="radio" 
                          name={`attendance-${index}`}
                          value="Accepting" 
                          className="hidden peer" 
                          checked={guest.attending === 'Accepting'}
                          onChange={() => updateGuest(index, 'attending', 'Accepting')}
                        />
                        {/* min-h-[50px] flex items-center justify-center p-3 text-center border-2 border-gray-300 rounded-xl peer-checked:border-gray-900 peer-checked:bg-gray-900 peer-checked:text-white transition-all font-bold text-[11px] uppercase tracking-widest group-hover:border-accent/30 */}
                        <div className="text-gray-600">
                          Happily Accepting
                        </div>
                      </label>
                      <label className="flex-1 cursor-pointer group attending declining">
                        <input 
                          type="radio" 
                          name={`attendance-${index}`}
                          value="Declining" 
                          className="hidden peer"
                          checked={guest.attending === 'Declining'}
                          onChange={() => updateGuest(index, 'attending', 'Declining')}
                        />
                        <div className="text-gray-600">
                          Regretfully Declining
                        </div>
                      </label>
                    </div>
                  </div>
                  
                  <input type="text" value={guest.dietary} onChange={(e) => updateGuest(index, 'dietary', e.target.value)} className="w-full bg-white border border-gray-300 p-3 rounded-lg text-md placeholder-gray-500 mb-4" placeholder="Dietary Requirements" />
                  
                  {/* Wrapper div with grid to make textarea stretch to placeholder text height */}
                  <div className="grid" style={{ gridTemplateColumns: '1fr' }}>
                    {/* Placeholder text that sets the height */}
                    <div 
                      className="p-3 text-md text-gray-500 pointer-events-none whitespace-pre-wrap"
                      style={{ 
                        gridArea: '1 / 1 / 2 / 2',
                        // visibility: guest.requests ? 'hidden' : 'visible'
                      }}
                    >
                      {guest.requests ? guest.requests : `We want all of our guests to have a fun time so if there is a song or songs that will guarantee to get you dancing, or anything else that might ensure you have a great night please let us know here.\n\n`}
                      
                    </div>
                    {/* Textarea overlaying the placeholder */}
                    <textarea 
                      value={guest.requests} 
                      onChange={(e) => updateGuest(index, 'requests', e.target.value)} 
                      className="w-full bg-white border border-gray-300 p-3 rounded-lg text-md resize-y placeholder-gray-500"
                      placeholder='We want all of our guests to have a fun time so if there is a song or songs that will guarantee to get you dancing, or anything else that might ensure you have a great night please let us know here.'
                      style={{ 
                        gridArea: '1 / 1 / 2 / 2',
                        minHeight: '100%'
                      }}
                    />
                  </div>
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

          <small className='text-center block'>If you're having trouble with this form, please don't hesitate to give one of us a call.</small>
        </form>
        </div>
      )}
    </section>
  );
};

export default RSVPForm;