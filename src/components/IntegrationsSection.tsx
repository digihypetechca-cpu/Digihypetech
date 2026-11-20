import React, { useState } from 'react';
import { INTEGRATIONS, IntegrationId, IntegrationPlatform } from '../data/siteData';

type CategoryFilter = 'All' | IntegrationPlatform['category'];

const CATEGORIES: CategoryFilter[] = [
  'All',
  'Voice & Telephony',
  'Automation & Data',
  'CRM & Scheduling',
];

const IntegrationBrandLogo: React.FC<{ id: IntegrationId; name: string }> = ({ id, name }) => {
  switch (id) {
    case 'retell':
      return (
        <svg viewBox="0 0 40 40" className="w-8 h-8" aria-label={`${name} logo`}>
          <rect width="40" height="40" rx="9" fill="#0F172A" />
          <path
            d="M12 28V12h8.5c3.6 0 6 2 6 5.2 0 2.5-1.5 4.2-3.9 4.8L27.5 28h-4.4l-4.2-5.4h-3V28H12zm3.9-8.6h4.2c1.6 0 2.5-.8 2.5-2.1s-.9-2.1-2.5-2.1h-4.2v4.2z"
            fill="#FFFFFF"
          />
          <circle cx="30" cy="13" r="3" fill="#32D5E8" />
        </svg>
      );

    case 'twilio':
      return (
        <svg viewBox="0 0 40 40" className="w-8 h-8" aria-label={`${name} logo`}>
          <circle cx="20" cy="20" r="16" fill="none" stroke="#F22F46" strokeWidth="3.5" />
          <circle cx="15.2" cy="15.2" r="2.7" fill="#F22F46" />
          <circle cx="24.8" cy="15.2" r="2.7" fill="#F22F46" />
          <circle cx="15.2" cy="24.8" r="2.7" fill="#F22F46" />
          <circle cx="24.8" cy="24.8" r="2.7" fill="#F22F46" />
        </svg>
      );

    case 'elevenlabs':
      return (
        <svg viewBox="0 0 40 40" className="w-8 h-8" aria-label={`${name} logo`}>
          <rect width="40" height="40" rx="9" fill="#111827" />
          <rect x="13" y="10" width="4.5" height="20" rx="1" fill="#FFFFFF" />
          <rect x="22.5" y="10" width="4.5" height="20" rx="1" fill="#FFFFFF" />
        </svg>
      );

    case 'n8n':
      return (
        <svg viewBox="0 0 40 40" className="w-8 h-8" aria-label={`${name} logo`}>
          <path
            d="M11 20h7m0 0l5.5-7h5.5m-11 7l5.5 7h5.5"
            stroke="#EA4B71"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle cx="9" cy="20" r="3.4" fill="#EA4B71" />
          <circle cx="18" cy="20" r="3.4" fill="#EA4B71" />
          <circle cx="30" cy="13" r="3.4" fill="#EA4B71" />
          <circle cx="30" cy="27" r="3.4" fill="#EA4B71" />
        </svg>
      );

    case 'make':
      return (
        <svg viewBox="0 0 40 40" className="w-8 h-8" aria-label={`${name} logo`}>
          <rect
            x="7"
            y="11"
            width="6"
            height="19"
            rx="1.8"
            transform="rotate(-14 10 20.5)"
            fill="#C084FC"
          />
          <rect
            x="17"
            y="10"
            width="6"
            height="20"
            rx="1.8"
            transform="rotate(-6 20 20)"
            fill="#9333EA"
          />
          <rect x="27" y="10" width="6" height="20" rx="1.8" fill="#6D28D9" />
        </svg>
      );

    case 'zapier':
      return (
        <svg viewBox="0 0 40 40" className="w-8 h-8" aria-label={`${name} logo`}>
          <g stroke="#FF4F00" strokeWidth="3.2" strokeLinecap="round">
            <line x1="20" y1="6" x2="20" y2="15" />
            <line x1="20" y1="25" x2="20" y2="34" />
            <line x1="6" y1="20" x2="15" y2="20" />
            <line x1="25" y1="20" x2="34" y2="20" />
            <line x1="10.1" y1="10.1" x2="16.5" y2="16.5" />
            <line x1="23.5" y1="23.5" x2="29.9" y2="29.9" />
            <line x1="29.9" y1="10.1" x2="23.5" y2="16.5" />
            <line x1="16.5" y1="23.5" x2="10.1" y2="29.9" />
          </g>
        </svg>
      );

    case 'hubspot':
      return (
        <svg viewBox="0 0 40 40" className="w-8 h-8" aria-label={`${name} logo`}>
          <path
            d="M24 14.5V9.5m0 0a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm-9 8.5l-5.5-3.2m0 0a2.2 2.2 0 10-3-3.2 2.2 2.2 0 003 3.2zm14.5 9.5l5.2 3"
            stroke="#FF7A59"
            strokeWidth="2.6"
            strokeLinecap="round"
            fill="none"
          />
          <circle cx="24" cy="22" r="6.2" fill="none" stroke="#FF7A59" strokeWidth="3.2" />
          <circle cx="14" cy="14" r="2.8" fill="#FF7A59" />
          <circle cx="24" cy="8.5" r="2.6" fill="#FF7A59" />
          <circle cx="31.5" cy="29.5" r="2.6" fill="#FF7A59" />
        </svg>
      );

    case 'gohighlevel':
      return (
        <svg viewBox="0 0 40 40" className="w-8 h-8" aria-label={`${name} logo`}>
          <path d="M9 28V19l4-4v13H9z" fill="#3987FF" />
          <path d="M17.5 28V14l4-4v18h-4z" fill="#32D5E8" />
          <path d="M26 28V10l4-4v22h-4z" fill="#22C55E" />
        </svg>
      );

    case 'salesforce':
      return (
        <svg viewBox="0 0 40 40" className="w-8 h-8" aria-label={`${name} logo`}>
          <path
            d="M16.5 13.5c1.5-2.1 4-3.5 6.8-3.5 4.2 0 7.7 3.1 8.3 7.1 2.7.8 4.7 3.3 4.7 6.2 0 3.6-2.9 6.5-6.5 6.5H11.5C7.9 29.8 5 26.9 5 23.3c0-3.2 2.3-5.9 5.3-6.4.6-2.7 3-4.7 5.9-4.7.1 0 .2.6.3 1.3z"
            fill="#00A1E0"
          />
        </svg>
      );

    case 'gcal':
      return (
        <svg viewBox="0 0 40 40" className="w-8 h-8" aria-label={`${name} logo`}>
          <rect x="7" y="7" width="26" height="26" rx="4" fill="#FFFFFF" />
          <path d="M7 11a4 4 0 014-4h18a4 4 0 014 4v4H7v-4z" fill="#4285F4" />
          <path d="M27 33h2a4 4 0 004-4v-2h-6v6z" fill="#EA4335" />
          <path d="M7 27v2a4 4 0 004 4h2v-6H7z" fill="#34A853" />
          <rect x="13" y="27" width="14" height="6" fill="#FBBC05" />
          <text
            x="20"
            y="24.5"
            textAnchor="middle"
            fontSize="10.5"
            fontWeight="700"
            fontFamily="Inter, sans-serif"
            fill="#1F2937"
          >
            31
          </text>
        </svg>
      );
  }
};

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

        {/* 10-Platform Logo Grid (5x2 on desktop, 2x5 on mobile) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {filteredPlatforms.map((platform) => (
            <div
              key={platform.id}
              className="rounded-xl bg-[#0B1930] border border-white/10 p-5 flex items-center gap-3.5 transition-colors duration-200 hover:border-[#32D5E8]/45 hover:bg-[#10243D]"
            >
              <div className="w-11 h-11 rounded-lg bg-[#071426] border border-white/10 flex items-center justify-center shrink-0">
                <IntegrationBrandLogo id={platform.id} name={platform.name} />
              </div>
              <div className="min-w-0">
                <p className="font-display font-bold text-sm text-white leading-snug truncate">
                  {platform.name}
                </p>
                <p className="mt-0.5 text-[11px] text-slate-400 truncate">{platform.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Honest Compatibility & Custom API Statement */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4 text-xs sm:text-sm text-slate-400">
          <p>
            Also compatible with Airtable, Pipedrive, Cal.com, and Microsoft Outlook — specific
            integrations are scoped and verified per client environment.
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
