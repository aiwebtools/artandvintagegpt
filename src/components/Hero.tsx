
import { useEffect, useRef } from 'react';
import { ArrowRight, UploadCloud, Search, Award } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!heroRef.current) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      const moveX = clientX / innerWidth - 0.5;
      const moveY = clientY / innerHeight - 0.5;
      
      const elements = heroRef.current?.querySelectorAll('.parallax-element');
      
      elements?.forEach((el) => {
        const speed = parseFloat((el as HTMLElement).dataset.speed || '5');
        const x = moveX * speed;
        const y = moveY * speed;
        
        (el as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="relative overflow-hidden pt-28 pb-16 md:pt-32 md:pb-24" ref={heroRef}>
      {/* Background elements */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-cyberpunk-deep-purple/20 rounded-full blur-3xl parallax-element" data-speed="3"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-cyberpunk-brown/20 rounded-full blur-3xl parallax-element" data-speed="2"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="flex-1 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-cyberpunk-vintage-cream">Discover the </span>
              <span className="shimmer-text">True Value</span>
              <span className="text-cyberpunk-vintage-cream"> of Your Art & Vintage Treasures</span>
            </h1>
            
            <p className="text-lg md:text-xl text-cyberpunk-vintage-cream/70 max-w-2xl mx-auto lg:mx-0">
              Professional appraisals with detailed historical context, market valuations, and fascinating stories behind your prized possessions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="https://chatgpt.com/g/g-67df6b32898c8191b8739cfad97e62d9-artwork-and-vintage-appraisal-gpt"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-cyberpunk-neon-blue to-cyberpunk-neon-pink text-white font-semibold rounded-md hover:from-cyberpunk-neon-pink hover:to-cyberpunk-neon-blue transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Get Your Appraisal Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#how-it-works"
                className="px-6 py-3 glass-button rounded-md flex items-center justify-center gap-2"
              >
                Learn How It Works
              </a>
            </div>
          </div>
          
          <div className="flex-1 max-w-xl">
            <div className="relative">
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyberpunk-neon-blue/40 to-cyberpunk-neon-pink/40 blur-xl animate-pulse-soft parallax-element" data-speed="1"></div>
              <div className="glass-card p-6 rounded-xl relative">
                <div className="absolute -top-3 -right-3 flex h-10 w-10 items-center justify-center rounded-full bg-cyberpunk-neon-pink parallax-element" data-speed="4">
                  <Award className="h-5 w-5 text-white" />
                </div>
                <div className="absolute -bottom-3 -left-3 flex h-10 w-10 items-center justify-center rounded-full bg-cyberpunk-neon-blue parallax-element" data-speed="4">
                  <Search className="h-5 w-5 text-white" />
                </div>
                
                <div className="relative w-full h-64 sm:h-80 mb-6 rounded-lg bg-cyberpunk-darker/60 overflow-hidden border border-white/10 group">
                  <img 
                    src="https://ideogram.ai/assets/image/lossless/response/Gyn0RfDSR_SHRDWC7neQaw" 
                    alt="Artwork and Vintage Appraisal" 
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyberpunk-darker/80 via-transparent to-transparent flex items-end justify-center p-4 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                    <span className="text-white text-sm font-medium">Click to explore our AI system</span>
                  </div>
                  <a
                    href="https://ideogram.ai/assets/image/lossless/response/Gyn0RfDSR_SHRDWC7neQaw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center bg-cyberpunk-darker/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <span className="px-4 py-2 bg-cyberpunk-neon-blue/80 rounded-md text-white font-medium">View Full Image</span>
                  </a>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-cyberpunk-vintage-cream">Get Started With Your Appraisal</h3>
                  <p className="text-cyberpunk-vintage-cream/70 text-sm">
                    Simply upload an image of your artwork or vintage item, provide any identifying details, and receive a comprehensive valuation.
                  </p>
                  <a 
                    href="https://chatgpt.com/g/g-67df6b32898c8191b8739cfad97e62d9-artwork-and-vintage-appraisal-gpt"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-md glass-button text-cyberpunk-neon-blue hover:text-white hover:bg-cyberpunk-neon-blue/20 transition-all duration-300"
                  >
                    <UploadCloud className="w-5 h-5" />
                    <span>Upload Your Item</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
