
import { ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-cyberpunk-darker/80 pt-20 pb-10">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      {/* Small disclaimer notice */}
      <div className="container mx-auto px-4 mb-8">
        <div className="text-center">
          <p className="text-cyberpunk-vintage-cream/60 text-sm">
            <strong>Notice:</strong> This service is provided for informational, educational, and research purposes only.
          </p>
        </div>
      </div>
      
      <div id="disclaimer" className="container mx-auto px-4 mb-16">
        <div className="text-center mb-10">
          <h2 className="inline-block text-3xl md:text-4xl font-bold mb-4 cyberpunk-border pb-2">
            <span className="text-gradient">Legal Disclaimer</span>
          </h2>
        </div>
        
        <div className="glass-card rounded-lg p-8 max-w-4xl mx-auto">
          <p className="text-cyberpunk-vintage-cream/70 text-sm mb-4">
            <strong>Appraisal Accuracy:</strong> The appraisals provided by Artwork and Vintage Appraisal GPT are estimates based on AI analysis, market research, and available data. These valuations should not be considered definitive or legally binding. For official appraisals needed for insurance, tax purposes, or high-value transactions, we recommend consulting a certified professional appraiser.
          </p>
          <p className="text-cyberpunk-vintage-cream/70 text-sm mb-4">
            <strong>No Guarantees:</strong> AI WEB TOOLS LLC makes no guarantees regarding the accuracy, completeness, or reliability of appraisals provided. Market values can fluctuate based on numerous factors including economic conditions, auction results, buyer interest, and item condition.
          </p>
          <p className="text-cyberpunk-vintage-cream/70 text-sm mb-4">
            <strong>Limitation of Liability:</strong> AI WEB TOOLS LLC and its affiliates are not liable for any decisions, financial or otherwise, made based on information provided by this service. By using this service, you agree to hold harmless AI WEB TOOLS LLC and its affiliates from any claims, damages, or losses arising from your use of the information provided.
          </p>
          <p className="text-cyberpunk-vintage-cream/70 text-sm mb-4">
            <strong>Image Analysis Limitations:</strong> Our AI's analysis is dependent on the quality of images provided and visible details. We cannot guarantee identification of items that have poor-quality images, significantly damaged markings, or otherwise obscured identifying features.
          </p>
          <p className="text-cyberpunk-vintage-cream/70 text-sm">
            <strong>Educational Purpose:</strong> This service is provided primarily for educational and informational purposes, not as a substitute for professional authentication or certification services.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-cyberpunk-vintage-cream">
              Artwork and Vintage Appraisal GPT
            </h3>
            <p className="text-cyberpunk-vintage-cream/70 mb-4">
              Professional AI-powered appraisals for your artwork and vintage treasures.
            </p>
            <div className="flex space-x-4">
              <a 
                href="mailto:Contact@ai-webtools.com" 
                className="text-cyberpunk-neon-blue hover:text-cyberpunk-neon-pink transition-colors"
              >
                Contact@ai-webtools.com
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-cyberpunk-vintage-cream">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://chatgpt.com/g/g-67df6b32898c8191b8739cfad97e62d9-artwork-and-vintage-appraisal-gpt" 
                  className="text-cyberpunk-vintage-cream/70 hover:text-cyberpunk-neon-blue flex items-center transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Artwork and Vintage Appraisal GPT
                </a>
              </li>
              <li>
                <a 
                  href="https://antiqueappraisalgpt.lovable.app/?via=aiwebtools" 
                  className="text-cyberpunk-vintage-cream/70 hover:text-cyberpunk-neon-blue flex items-center transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Antique & Collectables Appraisal GPT
                </a>
              </li>
              <li>
                <a 
                  href="#faq" 
                  className="text-cyberpunk-vintage-cream/70 hover:text-cyberpunk-neon-blue flex items-center transition-colors"
                >
                  <ChevronRight className="w-4 h-4 mr-2" />
                  FAQ
                </a>
              </li>
              <li>
                <a 
                  href="#disclaimer" 
                  className="text-cyberpunk-vintage-cream/70 hover:text-cyberpunk-neon-blue flex items-center transition-colors"
                >
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-cyberpunk-vintage-cream">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-cyberpunk-neon-blue mr-2">Phone:</span>
                <a 
                  href="tel:4758008096" 
                  className="text-cyberpunk-vintage-cream/70 hover:text-cyberpunk-neon-blue transition-colors"
                >
                  (475) 800-8096
                </a>
              </li>
              <li className="flex items-start">
                <span className="text-cyberpunk-neon-blue mr-2">Email:</span>
                <a 
                  href="mailto:Contact@ai-webtools.com" 
                  className="text-cyberpunk-vintage-cream/70 hover:text-cyberpunk-neon-blue transition-colors"
                >
                  Contact@ai-webtools.com
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-cyberpunk-vintage-cream">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/" 
                  className="text-cyberpunk-vintage-cream/70 hover:text-cyberpunk-neon-blue flex items-center transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.lovable.app/disclaimers" 
                  className="text-cyberpunk-vintage-cream/70 hover:text-cyberpunk-neon-blue flex items-center transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-cyberpunk-vintage-cream/60 text-sm mb-4 md:mb-0">
            © 2025 <a href="https://aiwebtools.lovable.app/?via=aiwebtools" className="hover:text-cyberpunk-neon-blue transition-colors" target="_blank" rel="noopener noreferrer">AI WEB TOOLS LLC</a> All rights reserved.
          </p>
          
          <a 
            href="https://aiwebtools.lovable.app/?via=aiwebtools" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyberpunk-neon-blue to-cyberpunk-neon-pink rounded-full text-white text-sm font-semibold hover:from-cyberpunk-neon-pink hover:to-cyberpunk-neon-blue transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            More AI Tools
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
