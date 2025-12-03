import { Link } from 'react-router-dom';

export function Footer() {
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
            <Link 
              to="/privacy"
              className="hover:opacity-50 transition-opacity"
            >
              Privacy Policy
            </Link>
            <Link 
              to="/terms"
              className="hover:opacity-50 transition-opacity"
            >
              Terms & Conditions
            </Link>
            <Link 
              to="/contact"
              className="hover:opacity-50 transition-opacity"
            >
              Contact support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
