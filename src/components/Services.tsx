
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";

interface Service {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services: Service[] = [
    {
      title: "Checkups & Cleaning",
      description: "Regular checkups and professional cleaning to maintain optimal oral health and prevent dental issues.",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-dental-accent">
          <path d="m8 2 1.5 1.5"></path>
          <path d="M14.5 3.5 16 2"></path>
          <path d="M8 22v-2.87"></path>
          <path d="M16 22v-1.5"></path>
          <path d="M12 22v-4.5"></path>
          <path d="M10.5 13.5V17"></path>
          <path d="M13.5 13.5V19"></path>
          <path d="m2 9.5 3.5.5"></path>
          <path d="m18.5 10 3.5-.5"></path>
          <path d="M2.5 14 6 13.5"></path>
          <path d="m18 13.5 3.5.5"></path>
          <path d="M6.5 8C5 9.5 5 13 5 13.5"></path>
          <path d="M5 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
          <path d="M19 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
          <path d="M12 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path>
          <path d="M12 13.5c-1.5.5-4 1.5-4 1.5"></path>
          <path d="M12 13.5c1.5.5 4 1.5 4 1.5"></path>
          <path d="M16 13.5c1.5-3 .5-7.5-2-9.5"></path>
          <path d="M8 13.5c-1.5-3-.5-7.5 2-9.5"></path>
        </svg>
      )
    },
    {
      title: "Root Canals",
      description: "Advanced treatment to save severely infected teeth and relieve pain by removing damaged pulp.",
      image: "https://images.unsplash.com/photo-1606811971689-23dfddce3e95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-dental-accent">
          <path d="M12 6c-3 0-4.5 1.5-4.5 4.5 0 3 .75 7.5-1.5 10.5 0 0 4.5 0 6-3"></path>
          <path d="M12 6c3 0 4.5 1.5 4.5 4.5 0 3-.75 7.5 1.5 10.5 0 0-4.5 0-6-3"></path>
          <path d="M12 3v3"></path>
        </svg>
      )
    },
    {
      title: "Braces & Aligners",
      description: "Modern orthodontic solutions to straighten teeth and correct bite issues for a beautiful smile.",
      image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-dental-accent">
          <path d="m7 19 1-4"></path>
          <path d="m17 19-1-4"></path>
          <path d="M3 5v4h18V5"></path>
          <path d="M3 9a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5"></path>
        </svg>
      )
    },
    {
      title: "Teeth Whitening",
      description: "Professional whitening treatments that safely and effectively enhance your smile's brightness.",
      image: "https://images.unsplash.com/photo-1606265752439-1f18756aa8ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-dental-accent">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M8 12a4 4 0 0 1 8 0"></path>
        </svg>
      )
    },
    {
      title: "Dental Implants",
      description: "Permanent tooth replacement solutions that look, feel and function just like natural teeth.",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-dental-accent">
          <path d="M12 5.5a1.5 1.5 0 1 0-3 0v13a1.5 1.5 0 0 0 3 0z"></path>
          <path d="M16.5 7a1.5 1.5 0 1 0-3 0v11a1.5 1.5 0 0 0 3 0z"></path>
          <path d="M8 17v.5a1.5 1.5 0 0 0 3 0v-9"></path>
          <path d="M20 17v.5a1.5 1.5 0 0 0 3 0V14a9 9 0 0 0-18 0v3.5a1.5 1.5 0 0 0 3 0V17"></path>
        </svg>
      )
    },
    {
      title: "Pediatric Dentistry",
      description: "Specialized, gentle dental care for children in a friendly environment that makes dental visits fun.",
      image: "https://images.unsplash.com/photo-1601003217786-dd98982fc90c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-dental-accent">
          <path d="M9 12.8C7.5 14 7 16.4 7 20h10"></path>
          <path d="M22 20H2"></path>
          <path d="M7 9c0-3.5 1.6-5 3.6-5 1.2 0 2.4 1 2.4 3"></path>
          <path d="M13 11c0 1.5 1.6 2 3 2 1.8 0 3-1 3-3.5S18 7 16.8 7c-.9 0-1.8.5-2.3 1.3"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of dental services to meet all your oral health needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="rounded-2xl overflow-hidden shadow-md relative h-64 group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 p-6 flex flex-col items-center justify-center bg-gradient-to-b from-transparent via-transparent to-black/50 z-10">
                <div className="p-3 bg-white rounded-full mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              </div>
              <img
                src={service.image}
                alt={service.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dental-accent/90 to-dental-dark/80 translate-y-full group-hover:translate-y-0 transition-transform duration-300 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-semibold mb-2 text-white">{service.title}</h3>
                <p className="text-white/90">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
