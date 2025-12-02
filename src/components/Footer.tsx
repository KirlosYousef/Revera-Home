type Page = 'home' | 'privacy' | 'terms';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="support" className="border-t border-black bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <p>Revera AI</p>
            <p className="mt-1">© {currentYear}</p>
          </div>
          
          <div className="flex flex-wrap gap-6">
            <button 
              onClick={() => onNavigate('privacy')}
              className="hover:opacity-50 transition-opacity"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => onNavigate('terms')}
              className="hover:opacity-50 transition-opacity"
            >
              Terms & Conditions
            </button>
            <a 
              href="mailto:hello@kirlosyousef.com"
              className="hover:opacity-50 transition-opacity"
            >
              Contact support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
