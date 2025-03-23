
import { useState, useEffect } from 'react';

const DisclaimerModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already agreed
    const hasAgreed = localStorage.getItem('disclaimerAgreed');
    
    if (!hasAgreed) {
      setIsOpen(true);
    }
  }, []);

  const handleAgree = () => {
    localStorage.setItem('disclaimerAgreed', 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
      <div className="relative w-full max-w-lg p-6 glass-card rounded-lg overflow-hidden animate-float">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyberpunk-neon-blue to-cyberpunk-neon-pink"></div>
        
        <h2 className="text-2xl font-bold mb-4 text-cyberpunk-vintage-cream">Important Disclaimer</h2>
        
        <div className="text-cyberpunk-vintage-cream/80 mb-6 space-y-3 text-sm">
          <p>
            The appraisals provided by this service are estimates and should not be considered definitive or legally binding valuations. For official appraisals needed for insurance, tax purposes, or high-value transactions, please consult a certified professional appraiser.
          </p>
          <p>
            By clicking "I Agree" below, you acknowledge that:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>This service is provided for informational and educational purposes only</li>
            <li>No guarantees are made regarding the accuracy of appraisals</li>
            <li>AI WEB TOOLS LLC is not liable for decisions made based on information provided</li>
            <li>You have read and understood our full disclaimer and terms of service</li>
          </ul>
        </div>
        
        <div className="flex justify-center">
          <button
            onClick={handleAgree}
            className="px-8 py-3 bg-gradient-to-r from-cyberpunk-neon-blue to-cyberpunk-neon-pink text-white font-semibold rounded-md hover:from-cyberpunk-neon-pink hover:to-cyberpunk-neon-blue transition-all duration-300"
          >
            I Agree
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerModal;
