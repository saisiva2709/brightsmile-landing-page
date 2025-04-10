
import React from 'react';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';

const testimonials = [
  {
    quote: "I've been a patient at BrightSmile for years and couldn't be happier with the care I receive. The staff is friendly and professional, and Dr. Miller is simply the best!",
    name: "Sarah Johnson",
    designation: "Patient since 2018",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop"
  },
  {
    quote: "After years of dental anxiety, I finally found BrightSmile. Their gentle approach and modern techniques made my root canal painless. I actually look forward to my appointments now!",
    name: "Michael Chen",
    designation: "Patient since 2020",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop"
  },
  {
    quote: "The staff is incredible with children! My daughter used to be terrified of dentist visits, but now she actually asks when we can go back to BrightSmile. Their pediatric care is outstanding.",
    name: "Jessica Williams",
    designation: "Parent of Patient",
    src: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=500&auto=format&fit=crop"
  },
  {
    quote: "I had been putting off getting dental implants for years, but Dr. Miller and the team made the process so much easier than I expected. My smile has never looked better!",
    name: "Robert Thompson",
    designation: "Implant Patient",
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=500&auto=format&fit=crop"
  },
  {
    quote: "The transparent pricing and friendly staff make BrightSmile stand out from other dental offices. No hidden fees, and they worked with my insurance to maximize my benefits.",
    name: "Emma Rodriguez",
    designation: "New Patient",
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=500&auto=format&fit=crop"
  }
];

export function Testimonials() {
  return (
    <section className="w-full py-16 md:py-24 bg-dental-blue/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-dental-mint rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-dental-blue rounded-full opacity-30 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Patients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Hear from our satisfied patients about their experiences at BrightSmile Dental Care.
          </p>
        </div>

        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </div>
    </section>
  );
}
