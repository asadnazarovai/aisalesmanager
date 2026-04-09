import { LangProvider } from '@/contexts/LangContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import HeroSection from '@/components/HeroSection';
import TodaySection from '@/components/TodaySection';
import ProblemsSection from '@/components/ProblemsSection';
import SolutionSection from '@/components/SolutionSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import ChatDemo from '@/components/ChatDemo';
import ResultsSection from '@/components/ResultsSection';
import CasesSection from '@/components/CasesSection';
import PricingSection from '@/components/PricingSection';
import CTASection from '@/components/CTASection';

const Index = () => {
  return (
    <LangProvider>
      <div className="min-h-screen bg-background">
        <LanguageSwitcher />
        <HeroSection />
        <TodaySection />
        <ProblemsSection />
        <SolutionSection />
        <HowItWorksSection />
        <div className="py-4 bg-secondary/50">
          <div className="container">
            <ChatDemo />
          </div>
        </div>
        <ResultsSection />
        <CasesSection />
        <PricingSection />
        <CTASection />
      </div>
    </LangProvider>
  );
};

export default Index;
