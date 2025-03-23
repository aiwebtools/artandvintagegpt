
import { Camera, DollarSign, History, FileText, Search, Award } from 'lucide-react';

const features = [
  {
    icon: <Camera className="w-8 h-8 text-cyberpunk-neon-blue" />,
    title: "Image-Based Analysis",
    description: "Upload photos of your items for detailed visual examination by our advanced AI system.",
  },
  {
    icon: <DollarSign className="w-8 h-8 text-cyberpunk-neon-pink" />,
    title: "Complete Valuation Breakdown",
    description: "Receive best-case, average, and worst-case pricing scenarios based on current market data.",
  },
  {
    icon: <History className="w-8 h-8 text-cyberpunk-gold" />,
    title: "Rich Historical Context",
    description: "Uncover the fascinating stories and historical significance behind your treasured items.",
  },
  {
    icon: <Search className="w-8 h-8 text-cyberpunk-neon-blue" />,
    title: "Market Research",
    description: "Benefit from extensive web research that compares similar items and analyzes current market trends.",
  },
  {
    icon: <FileText className="w-8 h-8 text-cyberpunk-neon-pink" />,
    title: "Downloadable Reports",
    description: "Receive comprehensive, neatly formatted documents with all information about your item.",
  },
  {
    icon: <Award className="w-8 h-8 text-cyberpunk-gold" />,
    title: "Expert Guidance",
    description: "Get professional insights on condition assessment, rarity factors, and market demand.",
  },
];

const Features = () => {
  return (
    <section id="how-it-works" className="py-20 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl md:text-4xl font-bold mb-4 cyberpunk-border pb-2">
            <span className="text-gradient">How It Works</span>
          </h2>
          <p className="text-lg text-cyberpunk-vintage-cream/70 max-w-3xl mx-auto">
            Our AI-powered appraisal system combines cutting-edge technology with extensive art and antique expertise to deliver accurate valuations and rich insights.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card rounded-lg p-6 hover:translate-y-[-5px] transition-all duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-cyberpunk-vintage-cream">{feature.title}</h3>
              <p className="text-cyberpunk-vintage-cream/70">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-cyberpunk-vintage-cream">The Appraisal Process</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="relative glass-card p-6 rounded-lg">
              <div className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full bg-cyberpunk-neon-blue text-white font-bold">1</div>
              <h4 className="text-lg font-medium mb-2 text-cyberpunk-neon-blue">Upload Image</h4>
              <p className="text-sm text-cyberpunk-vintage-cream/70">
                Simply upload a clear photo of your artwork or vintage item.
              </p>
            </div>
            
            <div className="relative glass-card p-6 rounded-lg">
              <div className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full bg-cyberpunk-neon-pink text-white font-bold">2</div>
              <h4 className="text-lg font-medium mb-2 text-cyberpunk-neon-pink">Provide Details</h4>
              <p className="text-sm text-cyberpunk-vintage-cream/70">
                Share any markings, serial numbers, or identifying information.
              </p>
            </div>
            
            <div className="relative glass-card p-6 rounded-lg">
              <div className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full bg-cyberpunk-gold text-white font-bold">3</div>
              <h4 className="text-lg font-medium mb-2 text-cyberpunk-gold">AI Analysis</h4>
              <p className="text-sm text-cyberpunk-vintage-cream/70">
                Our AI performs image analysis and market research.
              </p>
            </div>
            
            <div className="relative glass-card p-6 rounded-lg">
              <div className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full bg-cyberpunk-neon-blue text-white font-bold">4</div>
              <h4 className="text-lg font-medium mb-2 text-cyberpunk-neon-blue">Get Results</h4>
              <p className="text-sm text-cyberpunk-vintage-cream/70">
                Receive your comprehensive appraisal with valuation and history.
              </p>
            </div>
          </div>
          
          <a 
            href="https://chatgpt.com/g/g-67df6b32898c8191b8739cfad97e62d9-artwork-and-vintage-appraisal-gpt"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-12 px-8 py-3 bg-gradient-to-r from-cyberpunk-neon-blue to-cyberpunk-neon-pink text-white font-semibold rounded-md hover:from-cyberpunk-neon-pink hover:to-cyberpunk-neon-blue transition-all duration-300"
          >
            Try It Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
