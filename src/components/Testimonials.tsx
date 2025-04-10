
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  name: string;
  image: string;
  quote: string;
  rating: number;
}

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const testimonials: Testimonial[] = [
    {
      name: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500",
      quote: "I've never felt so comfortable at a dental appointment. Dr. Miller and the entire team are fantastic! My teeth have never looked better.",
      rating: 5
    },
    {
      name: "Michael Chen",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=500",
      quote: "After years of dental anxiety, I finally found BrightSmile. Their gentle approach made my root canal painless. I'm actually looking forward to my next cleaning!",
      rating: 5
    },
    {
      name: "Jessica Williams",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500",
      quote: "The staff is incredible with children! My daughter used to be terrified of dentist visits, but now she actually asks when we can go back to BrightSmile.",
      rating: 5
    },
  ];

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

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

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="md:w-1/3 relative h-64 md:h-auto">
                <img 
                  src={testimonials[current].image} 
                  alt={testimonials[current].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6 md:hidden">
                  <div className="text-white">
                    <div className="flex mb-1">
                      {[...Array(testimonials[current].rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <h3 className="font-semibold">{testimonials[current].name}</h3>
                  </div>
                </div>
              </div>
              <div className="md:w-2/3 p-6 md:p-8">
                <div className="hidden md:flex mb-2">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-lg italic mb-4">"{testimonials[current].quote}"</blockquote>
                <p className="font-semibold hidden md:block">— {testimonials[current].name}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prev}
              className="p-2 rounded-full bg-white shadow-md hover:bg-dental-blue/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2 h-2 rounded-full transition-all ${current === index ? 'bg-dental-accent w-6' : 'bg-gray-300'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={next}
              className="p-2 rounded-full bg-white shadow-md hover:bg-dental-blue/10 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
