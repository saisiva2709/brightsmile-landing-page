
import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Timer, Wallet, ThumbsUp } from 'lucide-react';

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function Feature({ title, description, icon }: FeatureProps) {
  return (
    <motion.div 
      className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-dental-blue/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="h-14 w-14 rounded-full bg-dental-blue flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </motion.div>
  );
}

export function AboutSection() {
  const features = [
    {
      title: "Expert & Caring Staff",
      description: "Our team of experienced professionals is dedicated to providing personalized, compassionate care.",
      icon: <UserCheck className="h-6 w-6 text-dental-accent" />
    },
    {
      title: "Painless Modern Techniques",
      description: "Using the latest dental technology and techniques to ensure comfortable, minimally invasive treatments.",
      icon: <Timer className="h-6 w-6 text-dental-accent" />
    },
    {
      title: "Transparent Pricing",
      description: "No surprises with our clear pricing policy. We explain all costs before treatment begins.",
      icon: <Wallet className="h-6 w-6 text-dental-accent" />
    },
    {
      title: "Trusted by 10,000+ Patients",
      description: "Join thousands of satisfied patients who trust us with their dental health and smiles.",
      icon: <ThumbsUp className="h-6 w-6 text-dental-accent" />
    }
  ];

  return (
    <section id="about" className="w-full py-16 md:py-24 bg-dental-mint/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose BrightSmile</h2>
            <p className="text-lg text-muted-foreground mb-6">
              At BrightSmile Dental Care, we believe in providing exceptional dental care that goes beyond just treating teeth. Our mission is to create a positive dental experience that prioritizes your comfort and well-being.
            </p>
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-dental-blue rounded-full opacity-20 blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?q=80&w=1000" 
                alt="Dental clinic staff" 
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </motion.div>
          
          <div className="lg:w-1/2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Feature 
                  key={index} 
                  title={feature.title} 
                  description={feature.description} 
                  icon={feature.icon} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
