
import { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import FAQ from '../components/FAQ';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import DisclaimerModal from '../components/DisclaimerModal';

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "Artwork and Vintage Appraisal GPT - Professional AI Appraisals";
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <DisclaimerModal />
      <Header />
      <Hero />
      <Features />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
