import React, { useState } from 'react';
import { SITE_CONFIG } from '../data/siteData';

export const Footer: React.FC = () => {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="bg-[#071426] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#home"
              className="inline-flex items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#32D5E8] rounded-lg"
            >
              {!logoError ? (
                <span className="bg-white rounded-lg p-2 inline-flex items-center justify-center shadow-sm ring-1 ring-white/15">
                  <img
                    src={SITE_CONFIG.fullLogoPath}
                    alt="DigiHypeTech — AI Automation Service Provider"
                    referrerPolicy="no-referrer"
                    onError={() => setLogoError(true)}
                    className="w-28 sm:w-32 h-auto object-contain"
                  />
                </span>
              ) : (
                <span className="text-white font-display font-bold text-xl tracking-tight">
                  DigiHype<span className="text-[#32D5E8]">Tech</span>
                </span>
              )}
            </a>

            <p className="text-sm text-slate-200 leading-relaxed max-w-sm">
              We build and maintain intelligent AI automation and integrations that take repetitive
              work off your team and connect the systems your business already uses.
            </p>
          </div>

          {/* Column 1: Explore */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="font-display font-bold text-xs tracking-[0.14em] uppercase text-[#32D5E8]">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="text-white hover:text-[#32D5E8] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-white hover:text-[#32D5E8] transition-colors">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#industries" className="text-white hover:text-[#32D5E8] transition-colors">
                  Industries
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-white hover:text-[#32D5E8] transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white hover:text-[#32D5E8] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="font-display font-bold text-xs tracking-[0.14em] uppercase text-[#32D5E8]">
              Solutions
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#voice-agents"
                  className="text-white hover:text-[#32D5E8] transition-colors"
                >
                  AI Voice Agents
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-white hover:text-[#32D5E8] transition-colors">
                  Workflow Automation
                </a>
              </li>
              <li>
                <a
                  href="#integrations"
                  className="text-white hover:text-[#32D5E8] transition-colors"
                >
                  AI Integration
                </a>
              </li>
              <li>
                <a
                  href="#calculator"
                  className="text-white hover:text-[#32D5E8] transition-colors"
                >
                  Missed-Call Calculator
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Get in Touch */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="font-display font-bold text-xs tracking-[0.14em] uppercase text-[#32D5E8]">
              Get in Touch
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-white hover:text-[#32D5E8] transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.phoneHref}
                  className="font-mono-tabular text-white hover:text-[#32D5E8] transition-colors"
                >
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </li>
              <li className="text-white">{SITE_CONFIG.location}</li>
              <li className="pt-1">
                <a
                  href={SITE_CONFIG.calBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#32D5E8] hover:text-white font-semibold transition-colors"
                >
                  Book a Strategy Call →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <p>Copyright © 2026 DigiHypeTech. All rights reserved.</p>
          <p>Montreal, Quebec, Canada</p>
        </div>
      </div>
    </footer>
  );
};
