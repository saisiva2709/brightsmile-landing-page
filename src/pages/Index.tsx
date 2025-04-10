
import React, { useEffect } from 'react';
import { NavBar } from '@/components/NavBar';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { AboutSection } from '@/components/AboutSection';
import { Testimonials } from '@/components/Testimonials';
import { FAQSection } from '@/components/FAQSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Add scroll animation to elements with reveal class
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <NavBar />
      <Hero />
      <Services />
      <AboutSection />
      <Testimonials />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
