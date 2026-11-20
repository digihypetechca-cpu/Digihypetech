import React, { useState } from 'react';
import {
  ArrowRight,
  Calendar,
  Check,
  Copy,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react';
import { SITE_CONFIG } from '../data/siteData';
import ctaNetworkImg from '../assets/images/hero_ai_network_1795203645785.jpg';

// Optional: Configure a static form endpoint (e.g. Formspree / Web3Forms) to enable direct HTTP POST.
// When empty, the form validates inputs and prepares a pre-filled email draft + clipboard copy.
const FORM_ENDPOINT = '';

interface FormState {
  fullName: string;
  email: string;
  company: string;
  phone: string;
  industry: string;
  automationGoal: string;
  message: string;
}

const INITIAL_FORM: FormState = {
  fullName: '',
  email: '',
  company: '',
  phone: '',
  industry: 'HVAC & Plumbing',
  automationGoal: 'AI Voice Calling Agent',
  message: '',
};

export const FinalCtaAndContact: React.FC = () => {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [preparedMailto, setPreparedMailto] = useState<string | null>(null);
  const [preparedSummary, setPreparedSummary] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const validate = (): boolean => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.fullName.trim()) {
      nextErrors.fullName = 'Please enter your full name.';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email.trim())) {
      nextErrors.email = 'Please enter a valid business email address.';
    }
    if (!form.company.trim()) {
      nextErrors.company = 'Please enter your company name.';
    }
    if (form.phone.trim() && form.phone.replace(/\D/g, '').length < 7) {
      nextErrors.phone = 'Please enter a valid phone number or leave blank.';
    }
    if (!form.message.trim() || form.message.trim().length < 10) {
      nextErrors.message = 'Please describe what you would like to automate (at least 10 characters).';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const buildSummary = () => {
    return [
      `Name: ${form.fullName.trim()}`,
      `Business Email: ${form.email.trim()}`,
      `Company: ${form.company.trim()}`,
      `Phone: ${form.phone.trim() || 'Not provided'}`,
      `Industry: ${form.industry}`,
      `Automation Focus: ${form.automationGoal}`,
      '',
      'Details:',
      form.message.trim(),
    ].join('\n');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);
    setSubmitSuccess(false);

    if (!validate()) return;

    const summary = buildSummary();
    const subject = encodeURIComponent(
      `DigiHypeTech Enquiry — ${form.company.trim()} (${form.automationGoal})`
    );
    const body = encodeURIComponent(summary);
    const mailtoHref = `mailto:${SITE_CONFIG.email}?subject=${subject}&body=${body}`;

    if (FORM_ENDPOINT) {
      setSubmitting(true);
      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(form),
        });
        if (!res.ok) {
          throw new Error('Submission request failed');
        }
        setSubmitSuccess(true);
        setForm(INITIAL_FORM);
      } catch {
        setSubmitError(
          'Unable to send automatically right now. Please use the prepared email draft below.'
        );
        setPreparedSummary(summary);
        setPreparedMailto(mailtoHref);
      } finally {
        setSubmitting(false);
      }
      return;
    }

    // Honest static-site email draft preparation
    setPreparedSummary(summary);
    setPreparedMailto(mailtoHref);
    window.location.href = mailtoHref;
  };

  const handleCopySummary = async () => {
    if (!preparedSummary) return;
    try {
      await navigator.clipboard.writeText(preparedSummary);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <>
      {/* 13. Final Call-to-Action */}
      <section className="relative bg-[#071426] text-white py-20 lg:py-24 overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <img
            src={ctaNetworkImg}
            alt=""
            loading="lazy"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-25"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(70% 80% at 50% 50%, rgba(7, 20, 38, 0.68) 0%, rgba(7, 20, 38, 0.95) 100%)',
            }}
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#32D5E8]">
            Get Started
          </p>
          <h2 className="mt-3 font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white [text-wrap:balance]">
            Ready to Put AI to Work for Your Business?
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Let&apos;s identify the repetitive tasks, missed opportunities, and disconnected
            processes that are holding your business back. We&apos;ll help you determine where
            intelligent automation makes sense.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={SITE_CONFIG.calBookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-white bg-[#3987FF] hover:bg-[#2974EB] rounded-lg transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#32D5E8]"
            >
              <span>Book Your Free 30-Minute Strategy Call</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>

            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm sm:text-base font-semibold text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded-lg transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#32D5E8]"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              <span>Email Our Team</span>
            </a>
          </div>
        </div>
      </section>

      {/* 14. Contact Section */}
      <section id="contact" className="bg-white text-[#071426] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Direct Details */}
            <div className="lg:col-span-5 space-y-6">
              <p className="text-xs font-semibold tracking-[0.16em] uppercase text-[#3987FF]">
                Contact Us
              </p>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-[#071426] [text-wrap:balance]">
                Let&apos;s Talk About Your Business.
              </h2>
              <p className="text-base text-[#526174] leading-relaxed">
                Tell us about your operational challenges and what you would like to automate. Our
                team will help you explore practical AI solutions.
              </p>

              <dl className="pt-6 border-t border-[#DCE5EF] space-y-5">
                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#F4F7FB] border border-[#DCE5EF] flex items-center justify-center text-[#3987FF] shrink-0">
                    <Mail className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-[#526174]">
                      Email
                    </dt>
                    <dd className="mt-0.5 text-sm font-semibold text-[#071426]">
                      <a
                        href={`mailto:${SITE_CONFIG.email}`}
                        className="hover:text-[#3987FF] transition-colors"
                      >
                        {SITE_CONFIG.email}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#F4F7FB] border border-[#DCE5EF] flex items-center justify-center text-[#3987FF] shrink-0">
                    <Phone className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-[#526174]">
                      Phone
                    </dt>
                    <dd className="mt-0.5 text-sm font-semibold text-[#071426] font-mono-tabular">
                      <a
                        href={SITE_CONFIG.phoneHref}
                        className="hover:text-[#3987FF] transition-colors"
                      >
                        {SITE_CONFIG.phoneDisplay}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#F4F7FB] border border-[#DCE5EF] flex items-center justify-center text-[#3987FF] shrink-0">
                    <MapPin className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-[#526174]">
                      Location
                    </dt>
                    <dd className="mt-0.5 text-sm font-semibold text-[#071426]">
                      {SITE_CONFIG.location}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-lg bg-[#F4F7FB] border border-[#DCE5EF] flex items-center justify-center text-[#3987FF] shrink-0">
                    <Calendar className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-[#526174]">
                      Strategy Call
                    </dt>
                    <dd className="mt-0.5 text-sm font-semibold text-[#3987FF]">
                      <a
                        href={SITE_CONFIG.calBookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        Book a 30-minute consultation on Cal.com →
                      </a>
                    </dd>
                  </div>
                </div>
              </dl>
            </div>

            {/* Right Column: Validated Enquiry Form */}
            <div className="lg:col-span-7 bg-[#F4F7FB] border border-[#DCE5EF] rounded-xl p-6 sm:p-8">
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold text-[#071426] mb-1.5"
                    >
                      Full Name <span className="text-[#3987FF]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={form.fullName}
                      onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                      placeholder="Alex Tremblay"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#DCE5EF] rounded-lg text-[#071426] focus:outline-none focus:border-[#3987FF] focus:ring-2 focus:ring-[#3987FF]/20"
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold text-[#071426] mb-1.5"
                    >
                      Business Email <span className="text-[#3987FF]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="alex@company.ca"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#DCE5EF] rounded-lg text-[#071426] focus:outline-none focus:border-[#3987FF] focus:ring-2 focus:ring-[#3987FF]/20"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-company"
                      className="block text-xs font-semibold text-[#071426] mb-1.5"
                    >
                      Company Name <span className="text-[#3987FF]">*</span>
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      required
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="Northline Services Inc."
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#DCE5EF] rounded-lg text-[#071426] focus:outline-none focus:border-[#3987FF] focus:ring-2 focus:ring-[#3987FF]/20"
                    />
                    {errors.company && (
                      <p className="mt-1 text-xs text-red-600">{errors.company}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-semibold text-[#071426] mb-1.5"
                    >
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="(514) 555-0190"
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#DCE5EF] rounded-lg text-[#071426] focus:outline-none focus:border-[#3987FF] focus:ring-2 focus:ring-[#3987FF]/20"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-industry"
                      className="block text-xs font-semibold text-[#071426] mb-1.5"
                    >
                      Industry
                    </label>
                    <select
                      id="contact-industry"
                      value={form.industry}
                      onChange={(e) => setForm({ ...form, industry: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#DCE5EF] rounded-lg text-[#071426] focus:outline-none focus:border-[#3987FF] focus:ring-2 focus:ring-[#3987FF]/20"
                    >
                      <option value="HVAC & Plumbing">HVAC &amp; Plumbing</option>
                      <option value="Dental Clinic">Dental Clinic</option>
                      <option value="Law Firm">Law Firm</option>
                      <option value="Pharmacy">Pharmacy</option>
                      <option value="Fitness & Wellness">Fitness &amp; Wellness</option>
                      <option value="Professional Services">Professional Services</option>
                      <option value="Other">Other Industry</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-goal"
                      className="block text-xs font-semibold text-[#071426] mb-1.5"
                    >
                      What would you like to automate?
                    </label>
                    <select
                      id="contact-goal"
                      value={form.automationGoal}
                      onChange={(e) => setForm({ ...form, automationGoal: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#DCE5EF] rounded-lg text-[#071426] focus:outline-none focus:border-[#3987FF] focus:ring-2 focus:ring-[#3987FF]/20"
                    >
                      <option value="AI Voice Calling Agent">AI Voice Calling Agent</option>
                      <option value="Missed-Call Recovery">Missed-Call Recovery</option>
                      <option value="CRM & Calendar Integration">CRM &amp; Calendar Integration</option>
                      <option value="Workflow & Document Automation">
                        Workflow &amp; Document Automation
                      </option>
                      <option value="Custom AI Solution">Custom AI Solution</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-semibold text-[#071426] mb-1.5"
                  >
                    Message <span className="text-[#3987FF]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Share a brief overview of your current call volume, software tools, or manual bottlenecks..."
                    className="w-full px-3.5 py-2.5 text-sm bg-white border border-[#DCE5EF] rounded-lg text-[#071426] focus:outline-none focus:border-[#3987FF] focus:ring-2 focus:ring-[#3987FF]/20"
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-600">{errors.message}</p>
                  )}
                </div>

                {submitError && (
                  <p className="text-xs text-red-700 bg-red-50 border border-red-200 rounded-lg px-3.5 py-2.5">
                    {submitError}
                  </p>
                )}

                {submitSuccess && (
                  <p className="text-xs text-[#071426] bg-white border border-[#3987FF]/40 rounded-lg px-3.5 py-2.5">
                    Your enquiry has been submitted to our team.
                  </p>
                )}

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#3987FF] hover:bg-[#2974EB] disabled:opacity-60 rounded-lg transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3987FF]"
                  >
                    <Send className="w-4 h-4" aria-hidden="true" />
                    <span>{submitting ? 'Sending...' : 'Submit Enquiry'}</span>
                  </button>
                  <p className="text-xs text-[#526174]">
                    Prepares an email to{' '}
                    <span className="font-medium text-[#071426]">{SITE_CONFIG.email}</span>
                  </p>
                </div>
              </form>

              {/* Honest Prepared Email Draft Fallback Panel */}
              {preparedMailto && (
                <div className="mt-6 bg-white border border-[#DCE5EF] rounded-lg p-4 space-y-3">
                  <p className="text-xs font-semibold text-[#071426]">
                    Enquiry Draft Ready for Your Email Client
                  </p>
                  <p className="text-xs text-[#526174] leading-relaxed">
                    Because this site runs statically without storing form data on a server, your
                    browser opens your default email app with the details below pre-filled. You can
                    also copy the summary directly or book on Cal.com.
                  </p>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <a
                      href={preparedMailto}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-[#071426] hover:bg-[#10243D] rounded-md transition-colors"
                    >
                      <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Open Email Client</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleCopySummary}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#071426] bg-[#F4F7FB] hover:bg-[#DCE5EF]/60 border border-[#DCE5EF] rounded-md transition-colors"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#3987FF]" aria-hidden="true" />
                          <span>Copied Summary</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Copy Enquiry Summary</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
