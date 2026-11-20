import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';

const NAV_LINKS = [
  { label: 'Solutions', href: '#solutions' },
  { label: 'Voice Agents', href: '#voice-agents' },
  { label: 'Industries', href: '#industries' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-200 ${
        scrolled || mobileOpen
          ? 'bg-[#071426]/92 backdrop-blur-md border-b border-white/10'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 lg:h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Single-line Brand Mark */}
        <a
          href="#home"
          onClick={() => setMobileOpen(false)}
          className="inline-flex items-center gap-3 text-white font-display font-bold text-xl tracking-tight whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#32D5E8] rounded"
        >
          <span className="h-10 w-14 rounded-lg bg-white px-1.5 py-1 inline-flex items-center justify-center shrink-0 shadow-sm ring-1 ring-white/25">
            {!logoError ? (
              <img
                src={SITE_CONFIG.logoPath}
                alt="DigiHypeTech brand emblem"
                referrerPolicy="no-referrer"
                onError={() => setLogoError(true)}
                className="w-full h-full object-contain"
              />
            ) : (
              <span className="text-[#071426] font-display font-extrabold text-sm">DH</span>
            )}
          </span>
          <span>
            DigiHype<span className="text-[#32D5E8]">Tech</span>
          </span>
        </a>

        {/* Zone 2: Desktop Single-Line Navigation */}
        <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors whitespace-nowrap shrink-0 py-1 border-b border-transparent hover:border-[#32D5E8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#32D5E8] rounded-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Single Primary Action + Mobile Menu Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={SITE_CONFIG.calBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-[#3987FF] hover:bg-[#2974EB] rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#32D5E8]"
          >
            Book a Strategy Call
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-slate-200 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-[#32D5E8]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="lg:hidden bg-[#071426] border-t border-white/10 px-4 pt-3 pb-6 space-y-1"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-3 py-3 text-base font-medium text-slate-200 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-white/10">
            <a
              href={SITE_CONFIG.calBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center w-full px-4 py-3 text-sm font-semibold text-white bg-[#3987FF] hover:bg-[#2974EB] rounded-lg transition-colors"
            >
              Book a Strategy Call
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};
