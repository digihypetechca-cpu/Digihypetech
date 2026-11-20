export const SITE_CONFIG = {
  brandName: 'DigiHypeTech',
  email: 'hello@digihypetech.ca',
  phoneDisplay: '(204) 800-0335',
  phoneHref: 'tel:+12048000335',
  location: 'Montreal, Quebec, Canada',
  calBookingUrl: 'https://cal.com/digihypetech/30min',
  logoPath: './assets/aistudio/logo_emblem.png',
  fullLogoPath: './assets/aistudio/logo_full.png',
};

export interface VoiceScenario {
  id: string;
  label: string;
  callerLabel: string;
  callerNumber: string;
  agentGreeting: string;
  transcript: {
    speaker: 'AI Agent' | 'Caller';
    text: string;
    time: string;
  }[];
  capturedRecord: {
    name: string;
    requestType: string;
    locationOrDetail: string;
    priority: string;
    crmTarget: string;
    bookedSlot: string;
  };
}

export const VOICE_SCENARIOS: VoiceScenario[] = [
  {
    id: 'hvac',
    label: 'HVAC & Plumbing',
    callerLabel: 'Incoming Service Call',
    callerNumber: '+1 (514) 555-0148',
    agentGreeting: 'Good afternoon, Northline Heating & Cooling. How can I help you today?',
    transcript: [
      {
        speaker: 'AI Agent',
        text: 'Good afternoon, Northline Heating & Cooling. Are you calling about a new service request or an existing appointment?',
        time: '00:02',
      },
      {
        speaker: 'Caller',
        text: 'Our furnace stopped blowing warm air this morning and it is getting cold inside.',
        time: '00:08',
      },
      {
        speaker: 'AI Agent',
        text: 'I can help get a technician scheduled right away. Could I get your service address and best callback number?',
        time: '00:14',
      },
      {
        speaker: 'Caller',
        text: 'Sure, 412 Rue Saint-Paul Ouest in Montreal, and you can reach me at this number.',
        time: '00:21',
      },
      {
        speaker: 'AI Agent',
        text: 'Thank you. I have an urgent dispatch window open today between 2:00 PM and 4:00 PM. Shall I reserve that for you?',
        time: '00:28',
      },
    ],
    capturedRecord: {
      name: 'Marc-Antoine Tremblay',
      requestType: 'No-Heat Furnace Diagnostic',
      locationOrDetail: '412 Rue Saint-Paul Ouest, Montreal',
      priority: 'Same-Day Dispatch',
      crmTarget: 'Service CRM + Calendar',
      bookedSlot: 'Today · 2:00 PM – 4:00 PM',
    },
  },
  {
    id: 'dental',
    label: 'Dental Clinic',
    callerLabel: 'Patient Scheduling Call',
    callerNumber: '+1 (438) 555-0192',
    agentGreeting: 'Thank you for calling Westmount Dental Care. How may I assist you?',
    transcript: [
      {
        speaker: 'AI Agent',
        text: 'Thank you for calling Westmount Dental Care. Would you like to book, reschedule, or ask about clinic hours?',
        time: '00:02',
      },
      {
        speaker: 'Caller',
        text: 'I need to book a routine hygiene cleaning sometime next Tuesday afternoon.',
        time: '00:07',
      },
      {
        speaker: 'AI Agent',
        text: 'We have openings next Tuesday at 1:30 PM and 3:15 PM. Are you a returning patient with us?',
        time: '00:13',
      },
      {
        speaker: 'Caller',
        text: 'Yes, my name is Claire Gagnon. Let us do 3:15 PM.',
        time: '00:19',
      },
      {
        speaker: 'AI Agent',
        text: 'Perfect, Claire. I have reserved Tuesday at 3:15 PM and queued an SMS confirmation.',
        time: '00:25',
      },
    ],
    capturedRecord: {
      name: 'Claire Gagnon',
      requestType: 'Routine Hygiene Cleaning',
      locationOrDetail: 'Returning Patient · Non-Clinical Booking',
      priority: 'Standard Scheduling',
      crmTarget: 'Clinic Calendar + SMS',
      bookedSlot: 'Next Tuesday · 3:15 PM',
    },
  },
  {
    id: 'legal',
    label: 'Law Firm',
    callerLabel: 'Prospective Client Intake',
    callerNumber: '+1 (204) 555-0174',
    agentGreeting: 'Good morning, Sterling & Partners Law. How can I direct your enquiry?',
    transcript: [
      {
        speaker: 'AI Agent',
        text: 'Good morning, Sterling & Partners Law. Are you calling to schedule an initial consultation or reach an existing file?',
        time: '00:02',
      },
      {
        speaker: 'Caller',
        text: 'I need to speak with someone regarding a commercial lease review for our retail space.',
        time: '00:09',
      },
      {
        speaker: 'AI Agent',
        text: 'I can connect your details with our commercial real estate team and book an intake call. May I take your name and email?',
        time: '00:15',
      },
      {
        speaker: 'Caller',
        text: 'David Chen, dchen@prairieretail.ca. Tomorrow morning works best.',
        time: '00:22',
      },
      {
        speaker: 'AI Agent',
        text: 'Thank you, David. I have booked a 30-minute consultation for tomorrow at 10:00 AM and routed your intake summary.',
        time: '00:29',
      },
    ],
    capturedRecord: {
      name: 'David Chen',
      requestType: 'Commercial Lease Review',
      locationOrDetail: 'dchen@prairieretail.ca',
      priority: 'Commercial Practice Group',
      crmTarget: 'Law CRM + Intake Queue',
      bookedSlot: 'Tomorrow · 10:00 AM',
    },
  },
];

export const TRUST_STRIP_ITEMS = [
  {
    title: '24/7 AI-Powered Availability',
    description: 'Answer inbound enquiries after hours, on weekends, and during peak call volume.',
  },
  {
    title: 'Intelligent Workflow Automation',
    description: 'Eliminate repetitive manual follow-ups, intake notes, and data entry.',
  },
  {
    title: 'Connected Business Systems',
    description: 'Keep calendars, CRMs, and notification channels aligned automatically.',
  },
  {
    title: 'Human Oversight When Needed',
    description: 'Clear escalation rules route urgent or sensitive enquiries straight to your staff.',
  },
];

export const CORE_SOLUTIONS = [
  {
    index: '01',
    eyebrow: 'AI Automation',
    title: 'Automate the Work That Slows You Down.',
    description:
      'From customer communication to document processing, we build intelligent systems that handle repetitive processes and help your team work more efficiently.',
    features: [
      'AI Voice Calling Agents',
      'Automated Customer Follow-Ups',
      'Appointment Booking and Reminders',
      'Email and Document Processing',
      'Lead Capture and Qualification',
      'CRM Automation',
      'Reporting and Data Workflows',
    ],
    ctaLabel: 'Explore AI Automation',
    ctaHref: '#voice-agents',
  },
  {
    index: '02',
    eyebrow: 'AI Integration',
    title: 'Make Your Existing Software Work Smarter.',
    description:
      'Connect AI capabilities with your existing business applications. Build connected workflows that allow information to move between systems without unnecessary manual work.',
    features: [
      'CRM Integrations',
      'AI-Powered Business Assistants',
      'API Integrations',
      'Document Knowledge Assistants',
      'E-commerce Integrations',
      'Accounting and Business Software Connections',
      'Custom Workflow Development',
    ],
    ctaLabel: 'Explore AI Integrations',
    ctaHref: '#integrations',
  },
];

export const VOICE_CAPABILITIES = [
  {
    title: 'Inbound AI Receptionists',
    detail: 'Greet callers immediately with natural, brand-aligned conversation.',
  },
  {
    title: 'Outbound AI Calling Agents',
    detail: 'Confirm upcoming appointments and follow up on submitted web enquiries.',
  },
  {
    title: 'Lead Qualification',
    detail: 'Collect job scope, service area, and timeline before a call reaches your team.',
  },
  {
    title: 'Appointment Scheduling',
    detail: 'Check calendar availability and book confirmed slots without back-and-forth.',
  },
  {
    title: 'Customer Follow-Ups',
    detail: 'Trigger timely SMS or email follow-ups right after an enquiry concludes.',
  },
  {
    title: 'Missed-Call Recovery',
    detail: 'Respond quickly when lines are busy so opportunities do not go elsewhere.',
  },
  {
    title: 'After-Hours Call Handling',
    detail: 'Capture evening and weekend requests and route urgent calls cleanly.',
  },
  {
    title: 'Call Summaries & Transcripts',
    detail: 'Deliver structured call notes and full transcripts directly to your inbox or CRM.',
  },
];

export const INDUSTRIES = [
  {
    id: 'hvac',
    name: 'HVAC & Plumbing',
    description:
      'Capture urgent dispatch requests and seasonal maintenance bookings even while technicians are on the road.',
    benefits: [
      'Answer emergency and routine enquiries and capture service addresses',
      'Qualify job requests and route urgent calls to the on-call human contact',
      'Schedule routine inspections and maintenance appointments automatically',
    ],
  },
  {
    id: 'dental',
    name: 'Dental Clinics',
    description:
      'Reduce front-desk bottlenecks during busy clinic hours while keeping patient scheduling organized.',
    benefits: [
      'Handle routine appointment bookings, rescheduling, and reminders',
      'Answer approved clinic FAQs on hours, parking, and accepted plans',
      'Route clinical questions directly to trained dental staff',
    ],
  },
  {
    id: 'law',
    name: 'Law Firms',
    description:
      'Provide a responsive, structured intake experience for prospective clients seeking legal consultations.',
    benefits: [
      'Capture prospective client contact information and matter type',
      'Route enquiries to the relevant practice group or intake coordinator',
      'Schedule initial consultations and log structured intake summaries',
    ],
  },
  {
    id: 'pharmacy',
    name: 'Pharmacies',
    description:
      'Take routine administrative calls off the counter so pharmacists can focus on patient care.',
    benefits: [
      'Answer routine administrative enquiries and opening-hours questions',
      'Route prescription-related requests directly to pharmacy staff',
      'Assist with approved customer communication without giving medical advice',
    ],
  },
  {
    id: 'fitness',
    name: 'Fitness & Wellness',
    description:
      'Respond promptly to membership enquiries and trial session requests before interest cools off.',
    benefits: [
      'Respond to membership questions and schedule introductory trial sessions',
      'Follow up with prospective members after initial web or phone enquiries',
      'Send automated class and appointment reminders to reduce no-shows',
    ],
  },
  {
    id: 'professional',
    name: 'Professional Services',
    description:
      'Keep client onboarding, consultation booking, and CRM updates moving smoothly across your practice.',
    benefits: [
      'Capture new leads and qualify project scope or service needs',
      'Book discovery consultations directly into advisor calendars',
      'Connect intake records with your CRM and operational tools',
    ],
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Discover',
    description:
      'We understand your business processes, identify repetitive tasks, and pinpoint where automation can deliver meaningful operational value.',
  },
  {
    step: '02',
    title: 'Design & Pilot',
    description:
      'We design a practical solution and build a focused pilot so you can evaluate its behaviour before committing to a full deployment.',
  },
  {
    step: '03',
    title: 'Build & Integrate',
    description:
      'We develop your automation, connect the required software systems, and implement clear approvals, logging, and error handling.',
  },
  {
    step: '04',
    title: 'Monitor & Improve',
    description:
      'We support the deployed system, review real operational edge cases, and refine workflows as your business evolves.',
  },
];

export type IntegrationId =
  | 'retell'
  | 'twilio'
  | 'elevenlabs'
  | 'n8n'
  | 'make'
  | 'zapier'
  | 'hubspot'
  | 'gohighlevel'
  | 'salesforce'
  | 'gcal';

export interface IntegrationPlatform {
  id: IntegrationId;
  name: string;
  category: 'Voice & Telephony' | 'Automation & Data' | 'CRM & Scheduling';
}

export const INTEGRATIONS: IntegrationPlatform[] = [
  { id: 'retell', name: 'Retell AI', category: 'Voice & Telephony' },
  { id: 'twilio', name: 'Twilio', category: 'Voice & Telephony' },
  { id: 'elevenlabs', name: 'ElevenLabs', category: 'Voice & Telephony' },
  { id: 'n8n', name: 'n8n', category: 'Automation & Data' },
  { id: 'make', name: 'Make', category: 'Automation & Data' },
  { id: 'zapier', name: 'Zapier', category: 'Automation & Data' },
  { id: 'hubspot', name: 'HubSpot', category: 'CRM & Scheduling' },
  { id: 'gohighlevel', name: 'GoHighLevel', category: 'CRM & Scheduling' },
  { id: 'salesforce', name: 'Salesforce', category: 'CRM & Scheduling' },
  { id: 'gcal', name: 'Google Calendar', category: 'CRM & Scheduling' },
];

export const WHY_CHOOSE_ITEMS = [
  {
    number: '01',
    title: 'Built Around Your Operations',
    description:
      'We design solutions around your existing workflows and customer handoffs rather than forcing your team into a rigid generic template.',
  },
  {
    number: '02',
    title: 'Pilot Before Full Deployment',
    description:
      'Test and validate how the voice agent or workflow behaves on realistic scenarios before moving into broader production use.',
  },
  {
    number: '03',
    title: 'Your Systems, Connected',
    description:
      'Integrate automation with your existing calendars, CRMs, and communication tools wherever technically feasible.',
  },
  {
    number: '04',
    title: 'Transparent Development',
    description:
      'Know what is being built, how escalation rules work, where limitations apply, and what each workflow is designed to accomplish.',
  },
  {
    number: '05',
    title: 'You Own What We Build',
    description:
      'Where agreed in the project scope, you receive the custom code, workflow configurations, and operational documentation.',
  },
];

export const FAQ_ITEMS = [
  {
    question: 'How does the pilot process work before a full rollout?',
    answer:
      'We start by mapping a single high-impact workflow—such as after-hours call intake or missed-call recovery—and build a scoped pilot environment. Your team can test call routing, transcripts, and calendar updates before deciding to expand across the business.',
  },
  {
    question: 'Can AI voice agents transfer calls to a real person?',
    answer:
      'Yes. We configure explicit escalation and transfer rules. Urgent dispatches, complex customer requests, or clinical and legal questions that require human judgement can be routed directly to designated staff members or logged for immediate callback.',
  },
  {
    question: 'What if our current software is not listed in your integrations?',
    answer:
      'We assess your software stack during the Discover phase. If your CRM, dispatch tool, or calendar provides a REST API or webhook support, we can evaluate and build a custom integration as part of the project scope.',
  },
  {
    question: 'Do AI voice agents give medical or legal advice?',
    answer:
      'No. For regulated sectors such as pharmacies, dental clinics, and law firms, agents are strictly scoped to administrative tasks—answering approved hours/location questions, capturing intake details, scheduling consultations, and routing specialized enquiries to licensed staff.',
  },
  {
    question: 'Who owns the workflows and configurations once built?',
    answer:
      'Where agreed in the project scope, your business receives ownership of the custom code, workflow definitions, and system documentation so you are never locked into opaque black-box tooling.',
  },
];
