
import React, { useState } from 'react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Wedding FAQs</h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-4"></div>
          <p className="serif-text italic text-secondary text-lg">Everything you need to know.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className="border-b border-gray-100 pb-4"
            >
              <button
                className="w-full flex justify-between items-center text-left py-4 group focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-xl font-medium text-gray-900 group-hover:text-accent transition-colors">
                  {faq.question}
                </span>
                <span className={`text-2xl transform transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <p className="serif-text text-gray-600 pb-4 pr-12">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
