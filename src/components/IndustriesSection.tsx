import React from 'react';
import {
  ArrowRight,
  Briefcase,
  Check,
  Dumbbell,
  Pill,
  Scale,
  Smile,
  Wrench,
} from 'lucide-react';
import { INDUSTRIES, SITE_CONFIG } from '../data/siteData';

const INDUSTRY_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  hvac: Wrench,
  dental: Smile,
  law: Scale,
  pharmacy: Pill,
  fitness: Dumbbell,
  professional: Briefcase,
};

export const IndustriesSection: React.FC = () => {
  return (
    <section id="industries" className="bg-white text-[#071426] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#3987FF]">
            Industries We Support
          </p>
          <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-[#071426] [text-wrap:balance]">
            AI Solutions Designed Around Your Industry.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#526174] leading-relaxed">
            Different industries have different operational challenges. We build automation around
            the way your business actually works.
          </p>
        </div>

        {/* 6 Industry Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {INDUSTRIES.map((industry) => {
            const Icon = INDUSTRY_ICONS[industry.id] ?? Briefcase;
            return (
              <article
                key={industry.id}
                className="bg-[#F4F7FB]/55 border border-[#DCE5EF] rounded-xl p-7 flex flex-col justify-between transition-colors duration-200 hover:bg-white hover:border-[#3987FF]/45"
              >
                <div>
                  <div className="w-11 h-11 rounded-lg bg-[#071426] text-[#32D5E8] flex items-center justify-center">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>

                  <h3 className="mt-5 font-display font-bold text-xl text-[#071426] tracking-tight">
                    {industry.name}
                  </h3>

                  <p className="mt-2.5 text-sm text-[#526174] leading-relaxed">
                    {industry.description}
                  </p>

                  <ul className="mt-6 pt-5 border-t border-[#DCE5EF] space-y-2.5">
                    {industry.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#071426] leading-relaxed"
                      >
                        <Check
                          className="w-4 h-4 text-[#3987FF] mt-0.5 shrink-0"
                          aria-hidden="true"
                        />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Industry Callout */}
        <div className="mt-12 pt-8 border-t border-[#DCE5EF] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-base font-medium text-[#071426]">
            Have a different industry? Let&apos;s discuss your automation needs.
          </p>
          <a
            href={SITE_CONFIG.calBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#3987FF] hover:text-[#2563EB] transition-colors whitespace-nowrap shrink-0"
          >
            <span>Discuss Your Workflow</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};
