
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-cyberpunk-darker/80 backdrop-blur-lg shadow-lg' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a 
            href="https://chatgpt.com/g/g-67df6b32898c8191b8739cfad97e62d9-artwork-and-vintage-appraisal-gpt" 
            className="flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex flex-col">
              <h1 className="text-xl md:text-2xl font-bold shimmer-text">
                Artwork and Vintage Appraisal GPT
              </h1>
              <p className="text-xs text-cyberpunk-vintage-cream/60">
                Presented by <span className="text-cyberpunk-neon-blue hover:text-cyberpunk-neon-pink transition-colors">
                  <a 
                    href="https://aiwebtools.lovable.app/?via=aiwebtools" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    AiWebTools.Ai
                  </a>
                </span>
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a 
              href="https://chatgpt.com/g/g-67df6b32898c8191b8739cfad97e62d9-artwork-and-vintage-appraisal-gpt" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyberpunk-neon-blue transition-colors duration-200"
            >
              Artwork and Vintage Appraisal GPT
            </a>
            <a 
              href="https://antiqueappraisalgpt.lovable.app/?via=aiwebtools" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-cyberpunk-neon-blue transition-colors duration-200"
            >
              Antique & Collectables Appraisal GPT
            </a>
            <a 
              href="#faq" 
              className="text-white hover:text-cyberpunk-neon-blue transition-colors duration-200"
            >
              FAQ
            </a>
            <a 
              href="#disclaimer" 
              className="text-white hover:text-cyberpunk-neon-blue transition-colors duration-200"
            >
              Disclaimer
            </a>
            <a 
              href="https://aiwebtools.lovable.app/?via=aiwebtools" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 glass-button rounded-md text-cyberpunk-neon-blue"
            >
              More AI Tools
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-white/10">
            <ul className="flex flex-col space-y-4">
              <li>
                <a 
                  href="https://chatgpt.com/g/g-67df6b32898c8191b8739cfad97e62d9-artwork-and-vintage-appraisal-gpt" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-cyberpunk-deeper px-4 py-3 rounded-md shadow-md border border-cyberpunk-neon-blue/20 text-cyberpunk-gold shimmer-text font-semibold hover:bg-cyberpunk-deep-purple/80 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Artwork and Vintage Appraisal GPT
                </a>
              </li>
              <li>
                <a 
                  href="https://antiqueappraisalgpt.lovable.app/?via=aiwebtools" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-cyberpunk-deeper px-4 py-3 rounded-md shadow-md border border-cyberpunk-neon-blue/20 text-cyberpunk-gold shimmer-text font-semibold hover:bg-cyberpunk-deep-purple/80 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Antique & Collectables Appraisal GPT
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  className="block bg-cyberpunk-deeper px-4 py-3 rounded-md shadow-md border border-cyberpunk-neon-blue/20 text-cyberpunk-gold shimmer-text font-semibold hover:bg-cyberpunk-deep-purple/80 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </a>
              </li>
              <li>
                <a 
                  href="#disclaimer" 
                  className="block bg-cyberpunk-deeper px-4 py-3 rounded-md shadow-md border border-cyberpunk-neon-blue/20 text-cyberpunk-gold shimmer-text font-semibold hover:bg-cyberpunk-deep-purple/80 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Disclaimer
                </a>
              </li>
              <li>
                <a 
                  href="https://www.aiwebtools.ai" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-cyberpunk-darker px-4 py-3 rounded-md shadow-md border border-cyberpunk-neon-pink/30 text-cyberpunk-gold shimmer-text font-semibold hover:bg-cyberpunk-deep-purple/80 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  More AI Tools
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
