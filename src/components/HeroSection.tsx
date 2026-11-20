import React, { useState } from 'react';
import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  Database,
  PhoneIncoming,
  UserCheck,
} from 'lucide-react';
import { SITE_CONFIG, TRUST_STRIP_ITEMS } from '../data/siteData';
import heroNetworkImg from '../assets/images/real_montreal_twilight_1795204156374.jpg';

type WorkflowStage = 'call' | 'qualify' | 'crm' | 'booked';

const STAGE_CONTENT: Record<
  WorkflowStage,
  {
    stepTitle: string;
    caller: string;
    intent: string;
    transcript: string;
    crmAction: string;
    appointment: string;
  }
> = {
  call: {
    stepTitle: '01. Incoming Call Answered',
    caller: 'M. Tremblay · Montreal, QC',
    intent: 'Furnace Diagnostic Enquiry',
    transcript: '"Hello, thank you for calling. Are you looking to book a service visit today?"',
    crmAction: 'Checking caller phone & service history',
    appointment: 'Scanning technician dispatch calendar',
  },
  qualify: {
    stepTitle: '02. Enquiry Qualified & Captured',
    caller: 'M. Tremblay · (514) 555-0148',
    intent: 'Same-Day Residential Service',
    transcript: '"Got it — 412 Rue Saint-Paul Ouest. Let me check our afternoon dispatch windows."',
    crmAction: 'Service address & issue type structured',
    appointment: 'Matching 2:00 PM – 4:00 PM availability',
  },
  crm: {
    stepTitle: '03. CRM & Calendar Updated',
    caller: 'M. Tremblay · Record Created',
    intent: 'Priority: Same-Day Heating',
    transcript: '"I have reserved today from 2:00 PM to 4:00 PM and logged your service notes."',
    crmAction: 'Contact, address & call transcript synced',
    appointment: 'Calendar invite & SMS summary queued',
  },
  booked: {
    stepTitle: '04. Workflow Completed',
    caller: 'M. Tremblay · Confirmed',
    intent: 'Confirmed Service Window',
    transcript: '"Your confirmation text is on the way. A technician will call 20 minutes prior."',
    crmAction: 'Assigned to Dispatch Queue · Owner notified',
    appointment: 'Today · 2:00 PM – 4:00 PM Confirmed',
  },
};

const WAVEFORM_HEIGHTS = [24, 48, 72, 42, 86, 60, 32, 78, 92, 54, 38, 68, 84, 46, 28, 62];

export const HeroSection: React.FC = () => {
  const [activeStage, setActiveStage] = useState<WorkflowStage>('booked');
  const current = STAGE_CONTENT[activeStage];

  return (
    <section
      id="home"
      className="relative bg-[#071426] text-white overflow-hidden pt-24 lg:pt-32"
    >
      {/* Architectural optical glass refraction backdrop + measured contrast scrim */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <img
          src={heroNetworkImg}
          alt=""
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-35"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(95deg, rgba(7, 20, 38, 0.94) 0%, rgba(7, 20, 38, 0.82) 50%, rgba(7, 20, 38, 0.68) 100%)',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Core Positioning & CTAs */}
          <div className="lg:col-span-6 space-y-7">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#32D5E8]">
              AI Automation · Voice Agents · Smart Integrations
            </p>

            <h1 className="font-display font-extrabold text-[clamp(2.25rem,4.2vw,3.65rem)] leading-[1.08] tracking-tight text-white [text-wrap:balance]">
              Your Business. Smarter. Faster. Automated.
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
              Stop losing opportunities to missed calls, repetitive tasks, and disconnected
              systems. DigiHypeTech builds intelligent AI agents and automated workflows that help
              your business respond faster, operate smarter, and grow without unnecessary
              complexity.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3.5 pt-1">
              <a
                href={SITE_CONFIG.calBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#3987FF] hover:bg-[#2974EB] rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#32D5E8]"
              >
                <span>Book a Free 30-Minute Strategy Call</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>

              <a
                href="#solutions"
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded-lg transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#32D5E8]"
              >
                Explore Our Solutions
              </a>
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-300">
              <span>Built Around Your Business</span>
              <span className="text-slate-600" aria-hidden="true">
                /
              </span>
              <span>Connected to Your Existing Tools</span>
              <span className="text-slate-600" aria-hidden="true">
                /
              </span>
              <span>Pilot Before Full Deployment</span>
            </div>
          </div>

          {/* Right Column: Interactive AI Business Operations Dashboard */}
          <div className="lg:col-span-6">
            <div className="rounded-xl bg-[#0B1930] border border-white/12 shadow-2xl overflow-hidden">
              {/* Dashboard Header Bar */}
              <div className="px-5 py-3.5 bg-[#10243D] border-b border-white/10 flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <p className="text-xs font-semibold tracking-wide text-[#32D5E8] truncate">
                    AI Operations Preview
                  </p>
                  <p className="text-xs text-slate-400 truncate">
                    Simulated voice-to-CRM workflow demonstration
                  </p>
                </div>
                <span className="text-[11px] font-mono-tabular text-slate-300 whitespace-nowrap shrink-0">
                  Visual Preview
                </span>
              </div>

              {/* Interactive Stage Selector */}
              <div
                role="tablist"
                aria-label="Workflow preview stages"
                className="grid grid-cols-4 border-b border-white/10 bg-[#071426]/60 text-xs"
              >
                {(
                  [
                    { id: 'call', label: '1. Answer' },
                    { id: 'qualify', label: '2. Qualify' },
                    { id: 'crm', label: '3. Sync CRM' },
                    { id: 'booked', label: '4. Booked' },
                  ] as const
                ).map((tab) => {
                  const selected = activeStage === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      onClick={() => setActiveStage(tab.id)}
                      className={`py-2.5 px-2 font-medium transition-colors whitespace-nowrap truncate border-b-2 focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#32D5E8] ${
                        selected
                          ? 'border-[#32D5E8] text-white bg-[#10243D]/70'
                          : 'border-transparent text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Dashboard Body */}
              <div className="p-5 sm:p-6 space-y-5">
                {/* Active Voice Call & Waveform */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-white/10">
                  <div className="flex items-center gap-3.5">
                    <div className="w-11 h-11 rounded-lg bg-[#3987FF]/15 border border-[#3987FF]/35 flex items-center justify-center text-[#32D5E8] shrink-0">
                      <PhoneIncoming className="w-5 h-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{current.stepTitle}</p>
                      <p className="text-xs text-slate-400">{current.caller}</p>
                    </div>
                  </div>

                  {/* Animated Voice Waveform */}
                  <div
                    aria-hidden="true"
                    className="flex items-center gap-1 h-9 px-3 rounded-lg bg-[#071426] border border-white/10 self-start sm:self-auto"
                  >
                    {WAVEFORM_HEIGHTS.map((height, idx) => (
                      <span
                        key={idx}
                        className="dht-wave-bar w-1 rounded-full bg-gradient-to-t from-[#3987FF] to-[#32D5E8]"
                        style={{
                          height: `${Math.max(22, Math.round(height * 0.34))}px`,
                          animationDelay: `${idx * 75}ms`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Transcript Snippet */}
                <div className="space-y-1.5">
                  <p className="text-[11px] font-semibold tracking-wider uppercase text-slate-400">
                    Voice Agent Transcript Sample
                  </p>
                  <p className="text-sm text-slate-200 leading-relaxed bg-[#071426]/70 border border-white/10 rounded-lg px-4 py-3">
                    {current.transcript}
                  </p>
                </div>

                {/* Connected System Outputs (Clean hairline list, no nested card soup) */}
                <div className="divide-y divide-white/10 border border-white/10 rounded-lg bg-[#071426]/50">
                  <div className="px-4 py-3 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5 text-xs text-slate-300">
                      <UserCheck className="w-4 h-4 text-[#32D5E8] shrink-0" aria-hidden="true" />
                      <span>Captured Intent</span>
                    </div>
                    <span className="text-xs font-medium text-white text-right">
                      {current.intent}
                    </span>
                  </div>

                  <div className="px-4 py-3 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5 text-xs text-slate-300">
                      <Database className="w-4 h-4 text-[#3987FF] shrink-0" aria-hidden="true" />
                      <span>CRM Automation</span>
                    </div>
                    <span className="text-xs font-medium text-slate-200 text-right">
                      {current.crmAction}
                    </span>
                  </div>

                  <div className="px-4 py-3 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5 text-xs text-slate-300">
                      <CalendarCheck
                        className="w-4 h-4 text-[#32D5E8] shrink-0"
                        aria-hidden="true"
                      />
                      <span>Scheduling</span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#32D5E8] text-right">
                      {activeStage === 'booked' && (
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      )}
                      <span>{current.appointment}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full-Width 4-Column Trust & Value Strip */}
      <div className="relative border-t border-white/10 bg-[#0B1930]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {TRUST_STRIP_ITEMS.map((item) => (
              <div key={item.title} className="py-6 sm:px-6 first:sm:pl-0 last:sm:pr-0">
                <h2 className="font-display font-bold text-sm text-white tracking-tight">
                  {item.title}
                </h2>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
