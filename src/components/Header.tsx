import { Menu, X } from 'lucide-react';
import { useState } from 'react';

type Page = 'home' | 'privacy' | 'terms';

interface HeaderProps {
  onNavigate: (page: Page) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    // Check if we're on the home page by looking for the features section
    const isOnHomePage = document.getElementById('features') !== null;
    
    if (!isOnHomePage) {
      // Navigate to home first
      onNavigate('home');
      // Wait for the page to render, then scroll with retry logic
      const attemptScroll = (attempts = 0) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else if (attempts < 10) {
          // Retry up to 10 times (500ms total)
          setTimeout(() => attemptScroll(attempts + 1), 50);
        }
      };
      setTimeout(() => attemptScroll(), 100);
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-black">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => onNavigate('home')}
            className="text-xl"
          >
            Revera AI
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button onClick={() => scrollToSection('features')} className="hover:opacity-50 transition-opacity">
              Features
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="hover:opacity-50 transition-opacity">
              How it works
            </button>
            <button onClick={() => scrollToSection('pricing')} className="hover:opacity-50 transition-opacity">
              Pricing
            </button>
            <button onClick={() => scrollToSection('support')} className="hover:opacity-50 transition-opacity">
              Support
            </button>
            <button onClick={() => onNavigate('privacy')} className="hover:opacity-50 transition-opacity">
              Privacy
            </button>
            <button onClick={() => onNavigate('terms')} className="hover:opacity-50 transition-opacity">
              Terms
            </button>
            <a 
              href="https://apps.apple.com/us/app/id6748306699"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-2 rounded-2xl hover:opacity-80 transition-opacity inline-block"
            >
              Get Revera AI
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden flex flex-col gap-4 mt-6 pb-4 border-t border-black pt-4">
            <button onClick={() => scrollToSection('features')} className="text-left hover:opacity-50 transition-opacity">
              Features
            </button>
            <button onClick={() => scrollToSection('how-it-works')} className="text-left hover:opacity-50 transition-opacity">
              How it works
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-left hover:opacity-50 transition-opacity">
              Pricing
            </button>
            <button onClick={() => scrollToSection('support')} className="text-left hover:opacity-50 transition-opacity">
              Support
            </button>
            <button onClick={() => onNavigate('privacy')} className="text-left hover:opacity-50 transition-opacity">
              Privacy
            </button>
            <button onClick={() => onNavigate('terms')} className="text-left hover:opacity-50 transition-opacity">
              Terms
            </button>
            <a 
              href="https://apps.apple.com/us/app/id6748306699"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-3 rounded-2xl hover:opacity-80 transition-opacity inline-block text-center"
            >
              Get Revera AI
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
