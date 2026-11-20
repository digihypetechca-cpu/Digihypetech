import React, { useMemo, useState } from 'react';
import { ArrowRight, Calculator, Info } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';

const cadFormatter = new Intl.NumberFormat('en-CA', {
  style: 'currency',
  currency: 'CAD',
  maximumFractionDigits: 0,
});

export const CalculatorSection: React.FC = () => {
  const [missedCalls, setMissedCalls] = useState<number>(30);
  const [avgBookingValue, setAvgBookingValue] = useState<number>(500);
  const [conversionRate, setConversionRate] = useState<number>(30);

  const metrics = useMemo(() => {
    const rate = conversionRate / 100;
    const monthlyRevenue = Math.round(missedCalls * avgBookingValue * rate);
    const annualRevenue = monthlyRevenue * 12;
    const missedBookings = Math.round(missedCalls * rate * 10) / 10;
    return {
      monthlyRevenue,
      annualRevenue,
      missedBookings,
    };
  }, [missedCalls, avgBookingValue, conversionRate]);

  return (
    <section id="calculator" className="bg-white text-[#071426] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 lg:mb-14">
          <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#3987FF]">
            Missed-Call Revenue Estimator
          </p>
          <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-[#071426] [text-wrap:balance]">
            How Much Revenue Could You Be Missing?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#526174] leading-relaxed">
            Every unanswered enquiry represents a potential business opportunity. Estimate the
            possible value of missed calls using your own business figures.
          </p>
        </div>

        {/* Calculator Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Interactive Range Sliders */}
          <div className="lg:col-span-6 bg-[#F4F7FB] border border-[#DCE5EF] rounded-xl p-6 sm:p-8 flex flex-col justify-between space-y-8">
            <div className="space-y-7">
              {/* Slider 1: Missed calls per month */}
              <div>
                <div className="flex items-baseline justify-between gap-4 mb-3">
                  <label
                    htmlFor="calc-missed-calls"
                    className="text-sm font-semibold text-[#071426]"
                  >
                    Missed calls per month
                  </label>
                  <span className="font-mono-tabular text-lg font-bold text-[#3987FF]">
                    {missedCalls} calls
                  </span>
                </div>
                <input
                  id="calc-missed-calls"
                  type="range"
                  min={5}
                  max={200}
                  step={1}
                  value={missedCalls}
                  onChange={(e) => setMissedCalls(Number(e.target.value))}
                  className="dht-slider"
                />
                <div className="mt-2 flex justify-between text-xs font-mono-tabular text-[#526174]">
                  <span>5</span>
                  <span>200</span>
                </div>
              </div>

              {/* Slider 2: Average booking value */}
              <div>
                <div className="flex items-baseline justify-between gap-4 mb-3">
                  <label
                    htmlFor="calc-booking-value"
                    className="text-sm font-semibold text-[#071426]"
                  >
                    Average booking value (CAD)
                  </label>
                  <span className="font-mono-tabular text-lg font-bold text-[#3987FF]">
                    {cadFormatter.format(avgBookingValue)}
                  </span>
                </div>
                <input
                  id="calc-booking-value"
                  type="range"
                  min={100}
                  max={5000}
                  step={50}
                  value={avgBookingValue}
                  onChange={(e) => setAvgBookingValue(Number(e.target.value))}
                  className="dht-slider"
                />
                <div className="mt-2 flex justify-between text-xs font-mono-tabular text-[#526174]">
                  <span>$100</span>
                  <span>$5,000</span>
                </div>
              </div>

              {/* Slider 3: Estimated booking conversion rate */}
              <div>
                <div className="flex items-baseline justify-between gap-4 mb-3">
                  <label
                    htmlFor="calc-conversion-rate"
                    className="text-sm font-semibold text-[#071426]"
                  >
                    Estimated booking conversion rate
                  </label>
                  <span className="font-mono-tabular text-lg font-bold text-[#3987FF]">
                    {conversionRate}%
                  </span>
                </div>
                <input
                  id="calc-conversion-rate"
                  type="range"
                  min={5}
                  max={80}
                  step={1}
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="dht-slider"
                />
                <div className="mt-2 flex justify-between text-xs font-mono-tabular text-[#526174]">
                  <span>5%</span>
                  <span>80%</span>
                </div>
              </div>
            </div>

            {/* Quick Reset */}
            <div className="pt-4 border-t border-[#DCE5EF] flex items-center justify-between gap-4 text-xs text-[#526174]">
              <span>Adjust sliders to match your call volume.</span>
              <button
                type="button"
                onClick={() => {
                  setMissedCalls(30);
                  setAvgBookingValue(500);
                  setConversionRate(30);
                }}
                className="font-semibold text-[#071426] hover:text-[#3987FF] transition-colors whitespace-nowrap"
              >
                Reset defaults
              </button>
            </div>
          </div>

          {/* Right: Results Dashboard */}
          <div className="lg:col-span-6 bg-[#0B1930] text-white rounded-xl p-6 sm:p-8 flex flex-col justify-between border border-white/10">
            <div>
              <div className="flex items-center justify-between gap-4 pb-5 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <Calculator className="w-5 h-5 text-[#32D5E8]" aria-hidden="true" />
                  <span className="font-display font-bold text-base">
                    Estimated Opportunity Summary
                  </span>
                </div>
                <span className="font-mono-tabular text-xs text-slate-400">CAD</span>
              </div>

              <div className="mt-6 space-y-6">
                <div>
                  <p className="text-xs font-semibold tracking-wider uppercase text-slate-400">
                    Potential Missed Monthly Revenue
                  </p>
                  <p
                    aria-live="polite"
                    className="mt-1.5 font-mono-tabular font-bold text-3xl sm:text-4xl text-white"
                  >
                    {cadFormatter.format(metrics.monthlyRevenue)}
                    <span className="text-sm font-normal text-slate-400"> / mo</span>
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-5 border-t border-white/10">
                  <div>
                    <p className="text-xs font-semibold tracking-wider uppercase text-slate-400">
                      Potential Annual Revenue
                    </p>
                    <p className="mt-1.5 font-mono-tabular font-bold text-2xl text-[#32D5E8]">
                      {cadFormatter.format(metrics.annualRevenue)}
                      <span className="text-xs font-normal text-slate-400"> / yr</span>
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold tracking-wider uppercase text-slate-400">
                      Estimated Missed Bookings
                    </p>
                    <p className="mt-1.5 font-mono-tabular font-bold text-2xl text-white">
                      {metrics.missedBookings}
                      <span className="text-xs font-normal text-slate-400"> bookings / mo</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-5 pt-6 border-t border-white/10">
              <div className="flex items-start gap-2.5 text-xs text-slate-300 leading-relaxed">
                <Info className="w-4 h-4 text-[#32D5E8] mt-0.5 shrink-0" aria-hidden="true" />
                <p>
                  This calculator provides an illustrative estimate based on your inputs. It does
                  not represent guaranteed lost revenue or guaranteed results from automation.
                </p>
              </div>

              <a
                href={SITE_CONFIG.calBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-white bg-[#3987FF] hover:bg-[#2974EB] rounded-lg transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#32D5E8]"
              >
                <span>Find Out What Your Business Is Missing</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
