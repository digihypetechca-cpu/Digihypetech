import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS, WHY_CHOOSE_ITEMS } from '../data/siteData';

export const WhyUsAndFaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="about" className="bg-[#F4F7FB] text-[#071426] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Why Choose DigiHypeTech */}
        <div>
          <div className="max-w-2xl mb-12 lg:mb-14">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#3987FF]">
              Why Choose DigiHypeTech
            </p>
            <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-[#071426] [text-wrap:balance]">
              Practical AI. Real Business Thinking.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#526174] leading-relaxed">
              We focus on transparent engineering, measurable operational fit, and systems your
              team can actually rely on day to day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_ITEMS.map((item) => (
              <article
                key={item.number}
                className="bg-white border border-[#DCE5EF] rounded-xl p-7 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono-tabular text-xs font-semibold text-[#3987FF]">
                    {item.number}
                  </span>
                  <h3 className="mt-3 font-display font-bold text-lg text-[#071426] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-[#526174] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}

            {/* Quiet 6th Grid Card: Canadian Focus Summary */}
            <article className="bg-[#071426] text-white rounded-xl p-7 flex flex-col justify-between border border-[#071426]">
              <div>
                <span className="font-mono-tabular text-xs font-semibold text-[#32D5E8]">
                  Canada-Based
                </span>
                <h3 className="mt-3 font-display font-bold text-lg text-white tracking-tight">
                  Built in Montreal for Canadian Businesses
                </h3>
                <p className="mt-2.5 text-sm text-slate-300 leading-relaxed">
                  Direct collaboration with our engineering team on discovery, pilot testing, and
                  ongoing refinement—no layers of agency account handoffs.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-white/10">
                <a
                  href="#contact"
                  className="text-xs font-semibold text-[#32D5E8] hover:text-white transition-colors"
                >
                  Start a conversation →
                </a>
              </div>
            </article>
          </div>
        </div>

        {/* Focused 5-Question Practical FAQ */}
        <div className="pt-14 border-t border-[#DCE5EF] grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#3987FF]">
              Common Questions
            </p>
            <h2 className="mt-3 font-display font-extrabold text-2xl sm:text-3xl tracking-tight text-[#071426] [text-wrap:balance]">
              Clear Answers Before We Build.
            </h2>
            <p className="mt-3 text-sm text-[#526174] leading-relaxed">
              Practical details on pilots, human escalation, software compatibility, and ownership.
            </p>
          </div>

          <div className="lg:col-span-8 divide-y divide-[#DCE5EF] border-y border-[#DCE5EF] bg-white rounded-xl overflow-hidden">
            {FAQ_ITEMS.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={faq.question} className="px-6">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full py-5 flex items-center justify-between gap-4 text-left focus-visible:outline-2 focus-visible:outline-[#3987FF]"
                  >
                    <span className="font-display font-bold text-base text-[#071426]">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#526174] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#3987FF]' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                  {isOpen && (
                    <div className="pb-5 pr-8 text-sm text-[#526174] leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
