
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What types of items can be appraised?",
    answer: "Our AI system can appraise a wide range of items including paintings, sculptures, antique furniture, vintage collectibles, jewelry, watches, coins, stamps, rare books, porcelain, glassware, vintage electronics, musical instruments, and more from various eras and regions worldwide."
  },
  {
    question: "How accurate are the appraisals?",
    answer: "While our AI provides detailed and researched valuations based on current market data, these should be considered estimates. For high-value items or insurance purposes, we recommend also consulting with a certified in-person appraiser."
  },
  {
    question: "What information should I provide for the best results?",
    answer: "For optimal results, upload clear photos of your item from multiple angles, including any signatures, marks, or labels. Provide any known details such as age, origin, artist information, maker's marks, serial numbers, dimensions, materials, and condition issues."
  },
  {
    question: "How does the pricing breakdown work?",
    answer: "We provide three valuation scenarios: best-case (optimal market conditions and buyers), average market value (typical selling price), and worst-case (quick sale, poor condition, or unfavorable market). These valuations factor in condition, rarity, provenance, and current market demand."
  },
  {
    question: "Can I download my appraisal report?",
    answer: "Yes, our system automatically organizes all provided information and images into a formatted document that you can download for your records, insurance purposes, or potential sales."
  },
  {
    question: "Is my data private and secure?",
    answer: "We take data privacy seriously. Information about your items is used solely for the purpose of providing appraisal services and is not shared with third parties. Please refer to our privacy policy for more details."
  },
  {
    question: "What if I need additional information after receiving my appraisal?",
    answer: "You can continue the conversation with our AI after your initial appraisal. Ask follow-up questions about historical context, comparable items, or request additional research on specific aspects of your item."
  },
  {
    question: "Can this replace a certified appraiser?",
    answer: "While our AI provides valuable information and estimates, it should not replace a certified professional appraiser for insurance, tax purposes, or high-value items where legal documentation is required."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl md:text-4xl font-bold mb-4 cyberpunk-border pb-2">
            <span className="text-gradient">Frequently Asked Questions</span>
          </h2>
          <p className="text-lg text-cyberpunk-vintage-cream/70 max-w-3xl mx-auto">
            Everything you need to know about our AI-powered appraisal service
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="glass-card rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 flex justify-between items-center text-left focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg font-medium text-cyberpunk-vintage-cream">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-cyberpunk-neon-blue transition-transform duration-300 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`} 
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}
              >
                <div className="px-6 text-cyberpunk-vintage-cream/70">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-cyberpunk-vintage-cream/70 mb-6">
            Still have questions? Get in touch with us
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="tel:4758008096" 
              className="px-6 py-3 glass-button rounded-md text-cyberpunk-neon-blue hover:text-white hover:bg-cyberpunk-neon-blue/20 transition-all duration-300"
            >
              (475) 800-8096
            </a>
            <a 
              href="mailto:Contact@ai-webtools.com" 
              className="px-6 py-3 glass-button rounded-md text-cyberpunk-neon-pink hover:text-white hover:bg-cyberpunk-neon-pink/20 transition-all duration-300"
            >
              Contact@ai-webtools.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
