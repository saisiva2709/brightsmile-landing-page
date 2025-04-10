
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { PhoneCall, Calendar } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1606265752440-d8f17cec4bee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80"
        >
          <source src="/5356069-uhd_3840_2160_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>
      
      <div className="relative z-10 container mx-auto h-full flex items-center justify-center px-4">
        <div className="text-center max-w-3xl">
          <motion.h1 
            className="text-4xl md:text-6xl font-playfair font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Gentle Dental Care You Can Trust
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/90 mb-8 font-montserrat"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Experienced dentists. Modern care. Beautiful smiles.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button size="lg" className="bg-dental-accent hover:bg-dental-accent/80 text-white font-medium py-6">
              <Calendar className="mr-2 h-5 w-5" /> Book Appointment
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20 py-6">
              <PhoneCall className="mr-2 h-5 w-5" /> Call Now
            </Button>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{ duration: 1.5, delay: 0.8, repeat: Infinity }}
          >
            <div className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center">
              <div className="w-1.5 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
