
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? 'py-2 sm:py-3 bg-cyberpunk-darker/95 backdrop-blur-lg shadow-lg' 
          : 'py-3 sm:py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center min-h-[48px]">
          <div className="flex flex-col min-w-0 flex-shrink">
            <a 
              href="https://chatgpt.com/g/g-67df6b32898c8191b8739cfad97e62d9-artwork-and-vintage-appraisal-gpt" 
              className="flex items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1 className="text-base sm:text-xl md:text-2xl font-bold shimmer-text truncate">
                Artwork and Vintage Appraisal GPT
              </h1>
            </a>
            <p className="text-[10px] sm:text-xs text-cyberpunk-vintage-cream/60">
              Presented by{' '}
              <a 
                href="https://aiwebtools.lovable.app/?via=aiwebtools" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyberpunk-neon-blue hover:text-cyberpunk-neon-pink transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                AiWebTools.Ai
              </a>
            </p>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 flex-shrink-0">
            <a 
              href="https://chatgpt.com/g/g-67df6b32898c8191b8739cfad97e62d9-artwork-and-vintage-appraisal-gpt" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm xl:text-base text-white hover:text-cyberpunk-neon-blue transition-colors duration-200 whitespace-nowrap"
            >
              Artwork Appraisal GPT
            </a>
            <a 
              href="https://antiqueappraisalgpt.lovable.app/?via=aiwebtools" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm xl:text-base text-white hover:text-cyberpunk-neon-blue transition-colors duration-200 whitespace-nowrap"
            >
              Antique Appraisal GPT
            </a>
            <a 
              href="#faq" 
              className="text-sm xl:text-base text-white hover:text-cyberpunk-neon-blue transition-colors duration-200"
            >
              FAQ
            </a>
            <a 
              href="#disclaimer" 
              className="text-sm xl:text-base text-white hover:text-cyberpunk-neon-blue transition-colors duration-200"
            >
              Disclaimer
            </a>
            <a 
              href="https://aiwebtools.lovable.app/?via=aiwebtools" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 glass-button rounded-md text-cyberpunk-neon-blue whitespace-nowrap"
            >
              More AI Tools
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden text-white focus:outline-none p-2 -mr-2 touch-manipulation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation - smooth slide */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-[500px] opacity-100 mt-4 pt-4 border-t border-white/10' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="flex flex-col space-y-3 pb-4">
            <li>
              <a 
                href="https://chatgpt.com/g/g-67df6b32898c8191b8739cfad97e62d9-artwork-and-vintage-appraisal-gpt" 
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-cyberpunk-deeper px-4 py-3 rounded-md shadow-md border border-cyberpunk-neon-blue/20 text-cyberpunk-gold shimmer-text font-semibold active:scale-[0.98] transition-all duration-150"
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
                className="block bg-cyberpunk-deeper px-4 py-3 rounded-md shadow-md border border-cyberpunk-neon-blue/20 text-cyberpunk-gold shimmer-text font-semibold active:scale-[0.98] transition-all duration-150"
                onClick={() => setIsMenuOpen(false)}
              >
                Antique & Collectables Appraisal GPT
              </a>
            </li>
            <li>
              <a 
                href="#faq" 
                className="block bg-cyberpunk-deeper px-4 py-3 rounded-md shadow-md border border-cyberpunk-neon-blue/20 text-cyberpunk-gold shimmer-text font-semibold active:scale-[0.98] transition-all duration-150"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
            </li>
            <li>
              <a 
                href="#disclaimer" 
                className="block bg-cyberpunk-deeper px-4 py-3 rounded-md shadow-md border border-cyberpunk-neon-blue/20 text-cyberpunk-gold shimmer-text font-semibold active:scale-[0.98] transition-all duration-150"
                onClick={() => setIsMenuOpen(false)}
              >
                Disclaimer
              </a>
            </li>
            <li>
              <a 
                href="https://aiwebtools.lovable.app/?via=aiwebtools" 
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-cyberpunk-darker px-4 py-3 rounded-md shadow-md border border-cyberpunk-neon-pink/30 text-cyberpunk-gold shimmer-text font-semibold active:scale-[0.98] transition-all duration-150"
                onClick={() => setIsMenuOpen(false)}
              >
                More AI Tools
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
