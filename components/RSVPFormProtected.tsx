
import React, { useState } from 'react';

const FORM_ENDPOINT = ""; 
const PASSPHRASE = "kohsamui";

interface GuestEntry {
  firstName: string;
  lastName: string;
  dietary: string;
}

const RSVPFormProtected: React.FC = () => {
  const [isLocked, setIsLocked] = useState(true);
  const [passphraseInput, setPassphraseInput] = useState("");
  const [passError, setPassError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [guests, setGuests] = useState<GuestEntry[]>([
    { firstName: '', lastName: '', dietary: '' }
  ]);
  const [email, setEmail] = useState('');
  const [attendance, setAttendance] = useState('Accepting');

  const resetForm = () => {
    setGuests([{ firstName: '', lastName: '', dietary: '' }]);
    setEmail('');
    setAttendance('Accepting');
    setSubmitted(false);
    setError(null);
  };

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (passphraseInput.toLowerCase().trim() === PASSPHRASE) {
      setIsLocked(false);
      setPassError(false);
    } else {
      setPassError(true);
      setPassphraseInput("");
    }
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

    const payload = {
      email,
      attendance,
      guestCount: guests.length,
      guests: guests
    };

    if (!FORM_ENDPOINT) {
      console.log("Protected Form Simulation:", payload);
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
        throw new Error("Submission failed.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="rsvp-protected-section" className="py-24 bg-gray-50 min-h-[700px] flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-30"></div>
      
      <div className="w-full max-w-4xl mx-auto px-4 relative z-10">
        
        {isLocked ? (
          <div className="max-w-md mx-auto bg-white p-10 md:p-14 rounded-[2.5rem] shadow-2xl border border-gray-100 text-center animate-in fade-in duration-700">
            <div className="w-20 h-20 bg-accent/5 text-accent rounded-full flex items-center justify-center mx-auto mb-8 ring-8 ring-accent/5">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
            </div>
            <h2 className="text-4xl mb-6 font-black tracking-tight text-gray-900 uppercase">Guest Portal</h2>
            <p className="sans-serif-text italic text-gray-500 mb-8 leading-relaxed">Enter the location where we got engaged.</p>

            {passError && (
              <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] animate-in fade-in duration-300">
                Incorrect passphrase. Try again.
              </div>
            )}

            <form onSubmit={handleUnlock} className="space-y-6">
              <input 
                type="text" 
                value={passphraseInput}
                onChange={(e) => { setPassphraseInput(e.target.value); setPassError(false); }}
                placeholder="Where was it?..."
                className={`w-full bg-gray-50 border-2 ${passError ? 'border-red-200' : 'border-gray-100 focus:border-accent focus:ring-4 focus:ring-accent/5'} p-5 rounded-2xl text-center outline-none transition-all font-medium text-lg`}
              />
              <button type="submit" className="w-full py-5 bg-gray-900 text-white rounded-2xl hover:bg-accent transition-all font-black uppercase tracking-[0.3em] text-xs shadow-xl">
                Access RSVP
              </button>
            </form>
            
            <div className="mt-12 pt-8 border-t border-gray-50">
              <p className="text-[10px] text-gray-400 uppercase tracking-[0.4em] font-bold">Hint: Ko _ s _ _ _ _</p>
            </div>
          </div>

        ) : submitted ? (
          <div className="max-w-xl mx-auto bg-white p-12 md:p-16 rounded-[3rem] shadow-2xl text-center border border-gray-100 animate-in fade-in duration-700">
            <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            </div>
            <h2 className="text-5xl mb-6 font-black tracking-tighter italic">Thank You!</h2>
            <p className="sans-serif-text italic text-gray-600 text-xl">Your response has been secured.</p>
            <button onClick={resetForm} className="mt-8 text-sm text-accent underline hover:text-gray-900 transition-colors uppercase font-black tracking-[0.2em]">Submit another RSVP</button>
          </div>

        ) : (
          <div className="bg-white p-8 md:p-20 rounded-[3rem] shadow-2xl border border-gray-100 animate-in fade-in duration-1000">
            <div className="text-center mb-16">
              <div className="inline-block mb-6 px-4 py-1.5 bg-accent/10 rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-accent">Invitation Unlocked</div>
              <h2 className="text-5xl md:text-6xl mb-6 font-black italic tracking-tighter">The Guest List</h2>
              <div className="h-1 w-20 bg-accent mx-auto mb-6"></div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 pb-12 border-b border-gray-50">
                <div className="space-y-4">
                  <label className="block text-[10px] uppercase tracking-[0.3em] font-black text-gray-400">Attending?</label>
                  <div className="flex gap-4">
                    <label className="flex-1 cursor-pointer group">
                      <input type="radio" name="p-attendance" value="Accepting" className="hidden peer" checked={attendance === 'Accepting'} onChange={() => setAttendance('Accepting')} />
                      <div className="min-h-[70px] flex items-center justify-center p-5 text-center border-2 border-gray-100 rounded-2xl peer-checked:border-gray-900 peer-checked:bg-gray-900 peer-checked:text-white transition-all font-black text-[10px] uppercase tracking-widest group-hover:border-accent/30">Yes</div>
                    </label>
                    <label className="flex-1 cursor-pointer group">
                      <input type="radio" name="p-attendance" value="Declining" className="hidden peer" checked={attendance === 'Declining'} onChange={() => setAttendance('Declining')} />
                      <div className="min-h-[70px] flex items-center justify-center p-5 text-center border-2 border-gray-100 rounded-2xl peer-checked:border-gray-900 peer-checked:bg-gray-900 peer-checked:text-white transition-all font-black text-[10px] uppercase tracking-widest group-hover:border-accent/30">No</div>
                    </label>
                  </div>
                </div>
                <div className="space-y-4">
                  <label className="block text-[10px] uppercase tracking-[0.3em] font-black text-gray-400">Email Address</label>
                  <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-gray-50 border-2 border-gray-50 p-5 rounded-2xl focus:bg-white focus:border-accent/20 outline-none transition-all font-medium" placeholder="hello@example.com" />
                </div>
              </div>

              <div className="space-y-10">
                <div className="flex items-center gap-6"><h3 className="text-xs font-black text-gray-900 uppercase tracking-[0.4em] italic">Guests</h3><div className="h-px w-full bg-gray-100"></div></div>
                <div className="space-y-8">
                  {guests.map((guest, index) => (
                    <div key={index} className="relative bg-gray-50/30 p-8 rounded-3xl border border-gray-100">
                      <div className="flex justify-between items-center mb-8">
                        <span className="text-[10px] font-black uppercase tracking-[0.5em] text-accent">Guest {index + 1}</span>
                        {index > 0 && (
                          <button type="button" onClick={() => removeGuest(index)} className="text-gray-300 hover:text-red-500 transition-all"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></button>
                        )}
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <input required type="text" value={guest.firstName} onChange={(e) => updateGuest(index, 'firstName', e.target.value)} className="w-full bg-white border border-gray-100 p-4 rounded-xl text-sm" placeholder="First Name" />
                        <input required type="text" value={guest.lastName} onChange={(e) => updateGuest(index, 'lastName', e.target.value)} className="w-full bg-white border border-gray-100 p-4 rounded-xl text-sm" placeholder="Last Name" />
                      </div>
                      <textarea rows={2} value={guest.dietary} onChange={(e) => updateGuest(index, 'dietary', e.target.value)} className="w-full bg-white border border-gray-100 p-4 rounded-xl text-sm" placeholder="Dietary Requirements"></textarea>
                    </div>
                  ))}
                </div>
                <button type="button" onClick={addGuest} className="flex items-center gap-4 text-accent hover:text-gray-900 transition-all group py-2">
                  <div className="w-10 h-10 rounded-full bg-accent/5 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all ring-1 ring-accent/10"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg></div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em]">Add Guest</span>
                </button>
              </div>

              <button type="submit" disabled={loading} className="w-full py-6 bg-gray-900 text-white rounded-[1.5rem] hover:bg-accent transition-all font-black uppercase tracking-[0.4em] text-xs shadow-2xl disabled:opacity-50">
                {loading ? 'Submitting...' : 'Submit RSVP'}
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default RSVPFormProtected;
