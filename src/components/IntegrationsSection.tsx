import React, { useState } from 'react';
import { INTEGRATIONS, IntegrationPlatform } from '../data/siteData';

type CategoryFilter = 'All' | IntegrationPlatform['category'];

const CATEGORIES: CategoryFilter[] = [
  'All',
  'Voice & Telephony',
  'Automation & Data',
  'CRM & Scheduling',
];

export const IntegrationsSection: React.FC = () => {
  const [filter, setFilter] = useState<CategoryFilter>('All');

  const filteredPlatforms =
    filter === 'All'
      ? INTEGRATIONS
      : INTEGRATIONS.filter((item) => item.category === filter);

  return (
    <section id="integrations" className="bg-[#071426] text-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#32D5E8]">
              Technology &amp; Integrations
            </p>
            <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-white [text-wrap:balance]">
              Connected to the Tools You Already Use.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
              Your business does not need another disconnected application. We build automation
              that works with your existing technology wherever practical.
            </p>
          </div>

          {/* Interactive Category Filter */}
          <div
            role="tablist"
            aria-label="Filter supported technology platforms"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#0B1930] border border-white/10 rounded-lg self-start lg:self-auto"
          >
            {CATEGORIES.map((category) => {
              const active = filter === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(category)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#32D5E8] ${
                    active
                      ? 'bg-[#3987FF] text-white'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Integration Ecosystem Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {filteredPlatforms.map((platform) => (
            <div
              key={platform.name}
              className="rounded-xl bg-[#0B1930] border border-white/10 p-4 flex flex-col justify-between gap-3 transition-colors duration-200 hover:border-[#32D5E8]/45 hover:bg-[#10243D]"
            >
              <div className="w-10 h-10 rounded-lg bg-[#071426] border border-white/10 flex items-center justify-center font-mono-tabular text-xs font-semibold text-[#32D5E8]">
                {platform.abbr}
              </div>
              <div>
                <p className="font-display font-bold text-sm text-white leading-snug">
                  {platform.name}
                </p>
                <p className="mt-1 text-[11px] text-slate-400">{platform.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Honest Compatibility & Custom API Statement */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs sm:text-sm text-slate-400">
          <p>
            Supported technology examples shown above reflect platforms DigiHypeTech works with;
            specific integrations are scoped and verified per client environment.
          </p>
          <a
            href="#contact"
            className="text-[#32D5E8] hover:text-white font-semibold transition-colors whitespace-nowrap shrink-0"
          >
            Not seeing your software? Ask about custom API connections →
          </a>
        </div>
      </div>
    </section>
  );
};
