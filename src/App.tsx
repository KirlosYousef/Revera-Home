import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { HowItWorks } from './components/HowItWorks';
import { WhoItsFor } from './components/WhoItsFor';
import { PrivacySection } from './components/PrivacySection';
import { PricingTeaser } from './components/PricingTeaser';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Terms } from './pages/Terms';

type Page = 'home' | 'privacy' | 'terms';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  if (currentPage === 'privacy') {
    return <PrivacyPolicy onNavigate={setCurrentPage} />;
  }

  if (currentPage === 'terms') {
    return <Terms onNavigate={setCurrentPage} />;
  }

  return (
    <div className="min-h-screen bg-white text-black">
      <Header onNavigate={setCurrentPage} />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <WhoItsFor />
        <PrivacySection onNavigate={setCurrentPage} />
        <PricingTeaser />
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}
