import React from 'react';
import { Compass, FlaskConical, LineChart, Wrench } from 'lucide-react';
import { PROCESS_STEPS } from '../data/siteData';

const STEP_ICONS = [Compass, FlaskConical, Wrench, LineChart];

export const ProcessSection: React.FC = () => {
  return (
    <section id="how-it-works" className="bg-[#F4F7FB] text-[#071426] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14 lg:mb-16">
          <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#3987FF]">
            How It Works
          </p>
          <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-[#071426] [text-wrap:balance]">
            From Business Challenge to Intelligent Automation.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#526174] leading-relaxed">
            A structured four-step engineering approach designed to validate real operational value
            before broad rollout.
          </p>
        </div>

        {/* Connected 4-Step Timeline */}
        <div className="relative">
          {/* Desktop horizontal connector rail */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-7 left-8 right-8 h-px bg-[#DCE5EF]"
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((item, idx) => {
              const Icon = STEP_ICONS[idx] ?? Compass;
              return (
                <div key={item.step} className="relative flex lg:flex-col gap-5 lg:gap-6">
                  {/* Mobile vertical rail */}
                  {idx < PROCESS_STEPS.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="lg:hidden absolute left-7 top-14 bottom-[-2rem] w-px bg-[#DCE5EF]"
                    />
                  )}

                  {/* Step Node */}
                  <div className="relative z-10 w-14 h-14 rounded-xl bg-white border border-[#DCE5EF] flex items-center justify-center text-[#071426] shrink-0">
                    <Icon className="w-5 h-5 text-[#3987FF]" aria-hidden="true" />
                  </div>

                  {/* Step Content */}
                  <div className="bg-white border border-[#DCE5EF] rounded-xl p-6 flex-1">
                    <p className="font-mono-tabular text-xs font-semibold text-[#3987FF] tracking-wider">
                      Step {item.step}
                    </p>
                    <h3 className="mt-2 font-display font-bold text-lg text-[#071426] tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-[#526174] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
