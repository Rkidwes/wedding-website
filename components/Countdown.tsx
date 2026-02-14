
import React, { useState, useEffect } from 'react';
import { WEDDING_DATE } from '../constants';
import { TimeLeft } from '../types';

const Countdown: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +WEDDING_DATE - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const TimerBox = ({ label, value }: { label: string, value: number }) => (
    <div className="flex flex-col items-center px-4 md:px-8 border-r border-gray-200 last:border-0">
      <span className="text-4xl md:text-6xl font-black text-gray-900">{value.toString().padStart(2, '0')}</span>
      <span className="text-xs md:text-sm uppercase tracking-widest text-secondary mt-2">{label}</span>
    </div>
  );

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-5xl md:text-6xl mb-12 text-gray-800">We're counting down the days...</h2>
        <div className="flex justify-center flex-wrap gap-y-8">
          <TimerBox label="Days" value={timeLeft.days} />
          <TimerBox label="Hours" value={timeLeft.hours} />
          <TimerBox label="Minutes" value={timeLeft.minutes} />
          <TimerBox label="Seconds" value={timeLeft.seconds} />
        </div>
      </div>
    </section>
  );
};

export default Countdown;
