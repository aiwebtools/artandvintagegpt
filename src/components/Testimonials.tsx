
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Art Collector",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    content: "I inherited a painting that had been in my family for generations but knew nothing about it. The appraisal not only revealed its substantial value but provided fascinating historical context about the artist and the era it was created. Incredibly detailed analysis!"
  },
  {
    name: "Michael Chen",
    role: "Antique Dealer",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    content: "As a professional dealer, I've used many appraisal services, but this AI tool stands out for its speed and accuracy. The market analysis is impressively thorough, and the price breakdowns help me make informed buying decisions. A game-changer for my business."
  },
  {
    name: "Emily Rodriguez",
    role: "Vintage Collector",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    content: "I was skeptical about an AI appraising my vintage watch collection, but I was blown away by the detailed assessment. It identified rare components I wasn't aware of and provided a comprehensive report I could download for insurance purposes. Highly recommend!"
  },
  {
    name: "David Thompson",
    role: "Estate Manager",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80",
    content: "Managing estate sales requires quick and reliable appraisals for numerous items. This tool has been invaluable, providing consistent valuations with excellent supporting information. The breakdown of best, average, and worst-case values helps set realistic expectations."
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay]);

  const handlePrevious = () => {
    setAutoplay(false);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setAutoplay(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl md:text-4xl font-bold mb-4 cyberpunk-border pb-2">
            <span className="text-gradient">What Our Users Say</span>
          </h2>
          <p className="text-lg text-cyberpunk-vintage-cream/70 max-w-3xl mx-auto">
            Discover how our AI appraisal tool has helped collectors, dealers, and enthusiasts worldwide
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-6 z-10">
            <button 
              onClick={handlePrevious}
              className="w-12 h-12 rounded-full glass-button flex items-center justify-center text-cyberpunk-neon-blue hover:text-white hover:bg-cyberpunk-neon-blue/20 transition-all duration-300 focus:outline-none"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div 
                  key={index}
                  className="w-full flex-shrink-0 px-6"
                >
                  <div className="glass-card rounded-lg p-8 h-full">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-cyberpunk-neon-blue">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-cyberpunk-vintage-cream">{testimonial.name}</h3>
                        <p className="text-cyberpunk-vintage-cream/70">{testimonial.role}</p>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-cyberpunk-gold text-cyberpunk-gold" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <blockquote className="text-cyberpunk-vintage-cream/80 italic">{testimonial.content}</blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-6 z-10">
            <button 
              onClick={handleNext}
              className="w-12 h-12 rounded-full glass-button flex items-center justify-center text-cyberpunk-neon-blue hover:text-white hover:bg-cyberpunk-neon-blue/20 transition-all duration-300 focus:outline-none"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 mx-1 rounded-full focus:outline-none transition-colors duration-300 ${
                index === activeIndex ? 'bg-cyberpunk-neon-blue' : 'bg-white/20'
              }`}
              onClick={() => {
                setAutoplay(false);
                setActiveIndex(index);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
