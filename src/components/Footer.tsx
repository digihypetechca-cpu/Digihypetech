import React, { useState } from 'react';
import { SITE_CONFIG } from '../data/siteData';

export const Footer: React.FC = () => {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="bg-[#071426] text-slate-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#home"
              className="inline-flex items-center gap-2.5 text-white font-display font-bold text-lg tracking-tight"
            >
              <span className="w-8 h-8 rounded-md bg-white overflow-hidden inline-flex items-center justify-center shrink-0 border border-white/20">
                {!logoError ? (
                  <img
                    src={SITE_CONFIG.logoPath}
                    alt="DigiHypeTech logo"
                    referrerPolicy="no-referrer"
                    onError={() => setLogoError(true)}
                    className="w-full h-full object-cover object-[50%_18%] scale-125"
                  />
                ) : (
                  <span className="text-[#071426] font-display font-extrabold text-sm">D</span>
                )}
              </span>
              <span>DigiHypeTech</span>
            </a>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              We build and maintain intelligent AI automation and integrations that take repetitive
              work off your team and connect the systems your business already uses.
            </p>
          </div>

          {/* Column 1: Explore */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="font-display font-bold text-xs tracking-[0.14em] uppercase text-white">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#industries" className="hover:text-white transition-colors">
                  Industries
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Solutions */}
          <div className="md:col-span-2 space-y-3">
            <h3 className="font-display font-bold text-xs tracking-[0.14em] uppercase text-white">
              Solutions
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#voice-agents" className="hover:text-white transition-colors">
                  AI Voice Agents
                </a>
              </li>
              <li>
                <a href="#solutions" className="hover:text-white transition-colors">
                  Workflow Automation
                </a>
              </li>
              <li>
                <a href="#integrations" className="hover:text-white transition-colors">
                  AI Integration
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-white transition-colors">
                  Missed-Call Calculator
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Get in Touch */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="font-display font-bold text-xs tracking-[0.14em] uppercase text-white">
              Get in Touch
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE_CONFIG.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE_CONFIG.phoneHref}
                  className="font-mono-tabular hover:text-white transition-colors"
                >
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </li>
              <li className="text-slate-400">{SITE_CONFIG.location}</li>
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

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>Copyright © 2026 DigiHypeTech. All rights reserved.</p>
          <p>Montreal, Quebec, Canada</p>
        </div>
      </div>
    </footer>
  );
};
