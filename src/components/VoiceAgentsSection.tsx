import React, { useEffect, useState } from 'react';
import {
  ArrowRight,
  CalendarCheck,
  Pause,
  PhoneCall,
  Play,
  RotateCcw,
  User,
} from 'lucide-react';
import { SITE_CONFIG, VOICE_CAPABILITIES, VOICE_SCENARIOS } from '../data/siteData';

const RING_WAVE_BARS = [18, 34, 52, 28, 60, 44, 24, 56, 48, 30, 62, 36, 22, 46];

export const VoiceAgentsSection: React.FC = () => {
  const [scenarioId, setScenarioId] = useState<string>(VOICE_SCENARIOS[0].id);
  const [visibleLines, setVisibleLines] = useState<number>(3);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const scenario =
    VOICE_SCENARIOS.find((item) => item.id === scenarioId) ?? VOICE_SCENARIOS[0];

  useEffect(() => {
    if (!isPlaying) return;
    if (visibleLines >= scenario.transcript.length) {
      setIsPlaying(false);
      return;
    }
    const timer = window.setTimeout(() => {
      setVisibleLines((prev) => Math.min(prev + 1, scenario.transcript.length));
    }, 1500);
    return () => window.clearTimeout(timer);
  }, [isPlaying, visibleLines, scenario.transcript.length]);

  const handleSelectScenario = (id: string) => {
    setScenarioId(id);
    setVisibleLines(3);
    setIsPlaying(false);
  };

  const handleTogglePlay = () => {
    if (visibleLines >= scenario.transcript.length) {
      setVisibleLines(1);
      setIsPlaying(true);
      return;
    }
    setIsPlaying((prev) => !prev);
  };

  const handleRestart = () => {
    setVisibleLines(1);
    setIsPlaying(true);
  };

  const isBookingComplete = visibleLines >= scenario.transcript.length;

  return (
    <section id="voice-agents" className="bg-[#0B1930] text-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Value Narrative & 8 Core Capabilities */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#32D5E8]">
              Your AI Workforce
            </p>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-white [text-wrap:balance]">
              Never Let Another Important Call Go Unanswered.
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Your customers expect quick responses. Our AI voice agents help your business answer
              incoming calls, qualify enquiries, schedule appointments, and follow up with
              prospects — even when your team is busy.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 pt-4 border-t border-white/10">
              {VOICE_CAPABILITIES.map((cap) => (
                <div key={cap.title}>
                  <h3 className="font-display font-bold text-sm text-white">{cap.title}</h3>
                  <p className="mt-1 text-xs text-slate-400 leading-relaxed">{cap.detail}</p>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <a
                href={SITE_CONFIG.calBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#3987FF] hover:bg-[#2974EB] rounded-lg transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#32D5E8]"
              >
                <span>Experience AI Voice Automation</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Visual Voice Agent Demonstration */}
          <div className="lg:col-span-7">
            <div className="rounded-xl bg-[#071426] border border-white/12 overflow-hidden shadow-2xl">
              {/* Top Bar + Honest Visual Demo Disclosure */}
              <div className="px-5 py-4 bg-[#10243D] border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold text-[#32D5E8] tracking-wide">
                    Interactive Visual Demo · Simulated Call Flow
                  </p>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Select an industry script below to step through a sample call interaction.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleTogglePlay}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#3987FF] hover:bg-[#2974EB] rounded-md transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#32D5E8]"
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Pause Demo</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>
                          {isBookingComplete ? 'Replay Demo' : 'Play Call Flow'}
                        </span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleRestart}
                    aria-label="Restart simulated call flow"
                    className="inline-flex items-center justify-center w-8 h-8 rounded-md text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors focus-visible:outline-2 focus-visible:outline-[#32D5E8]"
                  >
                    <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              </div>

              {/* Industry Scenario Switcher */}
              <div
                role="tablist"
                aria-label="Voice agent industry demonstrations"
                className="flex items-center gap-1 p-2 bg-[#0B1930] border-b border-white/10 overflow-x-auto"
              >
                {VOICE_SCENARIOS.map((item) => {
                  const active = item.id === scenario.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => handleSelectScenario(item.id)}
                      className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#32D5E8] ${
                        active
                          ? 'bg-[#3987FF] text-white'
                          : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>

              {/* Circular Voice Visualizer & Waveform */}
              <div className="p-5 sm:p-6 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 flex items-center justify-center shrink-0">
                    <span
                      aria-hidden="true"
                      className={`absolute inset-0 rounded-full border border-[#32D5E8]/45 ${
                        isPlaying ? 'dht-voice-ring' : ''
                      }`}
                    />
                    <span className="w-11 h-11 rounded-full bg-[#10243D] border border-[#3987FF]/50 flex items-center justify-center text-[#32D5E8]">
                      <PhoneCall className="w-5 h-5" aria-hidden="true" />
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{scenario.callerLabel}</p>
                    <p className="text-xs font-mono-tabular text-slate-400">
                      {scenario.callerNumber} ·{' '}
                      {isPlaying
                        ? 'Simulated call advancing'
                        : isBookingComplete
                        ? 'Simulation complete'
                        : 'Simulated visual state'}
                    </p>
                  </div>
                </div>

                {/* Sound Waveform */}
                <div
                  aria-hidden="true"
                  className="flex items-center gap-1.5 h-10 px-3.5 rounded-lg bg-[#0B1930] border border-white/10 self-start sm:self-auto"
                >
                  {RING_WAVE_BARS.map((height, idx) => (
                    <span
                      key={idx}
                      className={`w-1 rounded-full bg-gradient-to-t from-[#3987FF] to-[#32D5E8] ${
                        isPlaying ? 'dht-wave-bar' : 'opacity-65'
                      }`}
                      style={{
                        height: `${Math.round(height * 0.4)}px`,
                        animationDelay: `${idx * 65}ms`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Split Body: Transcript + Extracted Customer Record */}
              <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-white/10">
                {/* Conversation Transcript */}
                <div className="md:col-span-7 p-5 sm:p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="text-[11px] font-semibold tracking-wider uppercase text-slate-400">
                      Sample Conversation Transcript
                    </p>
                    <span className="text-[11px] font-mono-tabular text-slate-400">
                      {visibleLines}/{scenario.transcript.length} turns
                    </span>
                  </div>

                  <div className="space-y-3">
                    {scenario.transcript.slice(0, visibleLines).map((line, i) => {
                      const isAgent = line.speaker === 'AI Agent';
                      return (
                        <div
                          key={i}
                          className={`rounded-lg px-3.5 py-2.5 text-xs leading-relaxed border ${
                            isAgent
                              ? 'bg-[#10243D]/70 border-[#3987FF]/25 text-slate-100'
                              : 'bg-[#0B1930] border-white/10 text-slate-300'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <span
                              className={`font-semibold ${
                                isAgent ? 'text-[#32D5E8]' : 'text-slate-300'
                              }`}
                            >
                              {line.speaker}
                            </span>
                            <span className="font-mono-tabular text-[11px] text-slate-500">
                              {line.time}
                            </span>
                          </div>
                          <p>{line.text}</p>
                        </div>
                      );
                    })}
                  </div>

                  {!isBookingComplete && !isPlaying && (
                    <button
                      type="button"
                      onClick={() =>
                        setVisibleLines((prev) =>
                          Math.min(prev + 1, scenario.transcript.length)
                        )
                      }
                      className="text-xs font-semibold text-[#32D5E8] hover:text-white transition-colors pt-1"
                    >
                      + Advance next conversation turn
                    </button>
                  )}
                </div>

                {/* Captured Customer Info & Appointment Confirmation */}
                <div className="md:col-span-5 p-5 sm:p-6 bg-[#0B1930]/60 space-y-4">
                  <div className="flex items-center gap-2 text-[11px] font-semibold tracking-wider uppercase text-slate-400">
                    <User className="w-3.5 h-3.5 text-[#32D5E8]" aria-hidden="true" />
                    <span>Structured Intake Output</span>
                  </div>

                  <dl className="space-y-3 text-xs">
                    <div>
                      <dt className="text-slate-400">Contact</dt>
                      <dd className="mt-0.5 font-semibold text-white">
                        {scenario.capturedRecord.name}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-slate-400">Enquiry Type</dt>
                      <dd className="mt-0.5 text-slate-200">
                        {scenario.capturedRecord.requestType}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-slate-400">Context Captured</dt>
                      <dd className="mt-0.5 text-slate-200">
                        {visibleLines >= 3
                          ? scenario.capturedRecord.locationOrDetail
                          : 'Collecting caller details...'}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-slate-400">Destination</dt>
                      <dd className="mt-0.5 text-slate-200">
                        {scenario.capturedRecord.crmTarget}
                      </dd>
                    </div>
                  </dl>

                  <div className="pt-3 border-t border-white/10">
                    <div className="flex items-start gap-2.5">
                      <CalendarCheck
                        className={`w-4 h-4 mt-0.5 shrink-0 ${
                          isBookingComplete ? 'text-[#32D5E8]' : 'text-slate-500'
                        }`}
                        aria-hidden="true"
                      />
                      <div>
                        <p className="text-[11px] uppercase tracking-wider text-slate-400">
                          Appointment Status
                        </p>
                        <p
                          className={`mt-0.5 text-xs font-semibold ${
                            isBookingComplete ? 'text-[#32D5E8]' : 'text-slate-300'
                          }`}
                        >
                          {isBookingComplete
                            ? `Confirmed · ${scenario.capturedRecord.bookedSlot}`
                            : 'Pending caller confirmation'}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
