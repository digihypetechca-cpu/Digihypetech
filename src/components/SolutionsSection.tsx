import React, { useState } from 'react';
import { ArrowUpRight, Check, Network, Workflow } from 'lucide-react';
import { CORE_SOLUTIONS } from '../data/siteData';
import studioImg from '../assets/images/real_engineering_workspace_1795204156762.jpg';

export const SolutionsSection: React.FC = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="solutions" className="bg-[#F4F7FB] text-[#071426] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header + Engineering Studio Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#3987FF]">
              What We Do
            </p>
            <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-[#071426] [text-wrap:balance]">
              Technology That Takes Work Off Your Team.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#526174] leading-relaxed">
              We design intelligent automation systems that reduce repetitive work, improve customer
              communication, and connect the software your business already relies on.
            </p>
          </div>

          <div className="lg:col-span-6">
            <figure className="rounded-xl overflow-hidden border border-[#DCE5EF] bg-[#0B1930] aspect-video relative">
              {!imgError ? (
                <img
                  src={studioImg}
                  alt="DigiHypeTech automation engineers collaborating in Montreal"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#071426] to-[#10243D] text-slate-300 text-sm font-medium">
                  Practical AI Automation &amp; Systems Architecture · Montreal
                </div>
              )}
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#071426]/85 via-[#071426]/40 to-transparent px-5 py-3.5 text-xs font-medium text-slate-100">
                Practical AI architecture &amp; workflow engineering · Montreal, QC
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Two Core Service Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {CORE_SOLUTIONS.map((service, idx) => {
            const Icon = idx === 0 ? Workflow : Network;
            return (
              <article
                key={service.index}
                className="bg-white border border-[#DCE5EF] rounded-xl p-8 sm:p-10 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 pb-6 border-b border-[#DCE5EF]">
                    <div className="flex items-center gap-3.5">
                      <div className="w-11 h-11 rounded-lg bg-[#071426] text-[#32D5E8] flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold tracking-[0.12em] uppercase text-[#3987FF]">
                          {service.index}. {service.eyebrow}
                        </p>
                      </div>
                    </div>
                  </div>

                  <h3 className="mt-6 font-display font-bold text-2xl text-[#071426] tracking-tight [text-wrap:balance]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-base text-[#526174] leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="mt-7 space-y-3 border-t border-[#DCE5EF] pt-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm text-[#071426]">
                        <Check
                          className="w-4 h-4 text-[#3987FF] mt-0.5 shrink-0"
                          aria-hidden="true"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-[#DCE5EF]">
                  <a
                    href={service.ctaHref}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#071426] hover:text-[#3987FF] transition-colors whitespace-nowrap"
                  >
                    <span>{service.ctaLabel}</span>
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
