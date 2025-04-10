
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { 
  Smile, ShieldCheck, Stethoscope, Sparkles, 
  Workflow, Baby, HeartPulse, Scissors 
} from 'lucide-react';

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  bgClass: string;
}

function ServiceCard({ title, description, icon, bgClass }: ServiceProps) {
  return (
    <motion.div
      className={`rounded-2xl overflow-hidden shadow-lg relative group ${bgClass} h-64 flex flex-col items-center justify-center p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="p-4 bg-white rounded-full mb-4 shadow-md group-hover:bg-dental-accent group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      
      <h3 className="text-xl font-playfair font-semibold mb-2 group-hover:text-dental-accent transition-colors duration-300">{title}</h3>
      
      <p className="text-sm text-gray-700">{description}</p>
    </motion.div>
  );
}

export function Services() {
  const services: ServiceProps[] = [
    {
      title: "Checkups & Cleaning",
      description: "Regular checkups and professional cleaning to maintain optimal oral health and prevent dental issues.",
      icon: <ShieldCheck className="h-8 w-8 text-dental-accent group-hover:text-white transition-colors duration-300" />,
      bgClass: "bg-gradient-to-br from-dental-blue/20 to-white"
    },
    {
      title: "Root Canals",
      description: "Advanced treatment to save severely infected teeth and relieve pain by removing damaged pulp.",
      icon: <Stethoscope className="h-8 w-8 text-dental-accent group-hover:text-white transition-colors duration-300" />,
      bgClass: "bg-gradient-to-br from-dental-mint to-white"
    },
    {
      title: "Braces & Aligners",
      description: "Modern orthodontic solutions to straighten teeth and correct bite issues for a beautiful smile.",
      icon: <Workflow className="h-8 w-8 text-dental-accent group-hover:text-white transition-colors duration-300" />,
      bgClass: "bg-gradient-to-br from-dental-blue/20 to-white"
    },
    {
      title: "Teeth Whitening",
      description: "Professional whitening treatments that safely and effectively enhance your smile's brightness.",
      icon: <Sparkles className="h-8 w-8 text-dental-accent group-hover:text-white transition-colors duration-300" />,
      bgClass: "bg-gradient-to-br from-dental-mint to-white"
    },
    {
      title: "Dental Implants",
      description: "Permanent tooth replacement solutions that look, feel and function just like natural teeth.",
      icon: <Smile className="h-8 w-8 text-dental-accent group-hover:text-white transition-colors duration-300" />,
      bgClass: "bg-gradient-to-br from-dental-blue/20 to-white"
    },
    {
      title: "Pediatric Dentistry",
      description: "Specialized, gentle dental care for children in a friendly environment that makes dental visits fun.",
      icon: <Baby className="h-8 w-8 text-dental-accent group-hover:text-white transition-colors duration-300" />,
      bgClass: "bg-gradient-to-br from-dental-mint to-white"
    }
  ];

  return (
    <section id="services" className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-playfair font-bold mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto font-montserrat"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            We offer a comprehensive range of dental services to meet all your oral health needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              bgClass={service.bgClass}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
