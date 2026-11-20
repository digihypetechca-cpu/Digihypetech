import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SolutionsSection } from './components/SolutionsSection';
import { VoiceAgentsSection } from './components/VoiceAgentsSection';
import { IndustriesSection } from './components/IndustriesSection';
import { ProcessSection } from './components/ProcessSection';
import { IntegrationsSection } from './components/IntegrationsSection';
import { CalculatorSection } from './components/CalculatorSection';
import { WhyUsAndFaqSection } from './components/WhyUsAndFaqSection';
import { FinalCtaAndContact } from './components/FinalCtaAndContact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#071426]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2 focus:bg-[#3987FF] focus:text-white focus:rounded-lg focus:text-sm focus:font-semibold"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content" className="flex-1">
        <HeroSection />
        <SolutionsSection />
        <VoiceAgentsSection />
        <IndustriesSection />
        <ProcessSection />
        <IntegrationsSection />
        <CalculatorSection />
        <WhyUsAndFaqSection />
        <FinalCtaAndContact />
      </main>

      <Footer />
    </div>
  );
}
