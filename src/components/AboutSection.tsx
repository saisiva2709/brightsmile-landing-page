
import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Timer, Wallet, ThumbsUp } from 'lucide-react';

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function Feature({
  title,
  description,
  icon
}: FeatureProps) {
  return (
    <motion.div 
      className="flex flex-col p-6 bg-white rounded-xl shadow-sm border border-dental-blue/10 h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex items-center mb-4">
        <div className="h-12 w-12 rounded-full bg-dental-blue flex items-center justify-center mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-montserrat font-semibold">{title}</h3>
      </div>
      <p className="text-muted-foreground font-montserrat">{description}</p>
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
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">Why Choose BrightSmile</h2>
          <p className="text-lg text-muted-foreground font-montserrat">
            At BrightSmile Dental Care, we believe in providing exceptional dental care that goes beyond just treating teeth. 
            Our mission is to create a positive dental experience that prioritizes your comfort and well-being.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Feature 
              key={index} 
              title={feature.title} 
              description={feature.description} 
              icon={feature.icon} 
            />
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="py-8 px-6 bg-white rounded-xl shadow-lg border border-dental-blue/10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-playfair font-bold mb-4">Ready to experience the BrightSmile difference?</h3>
            <p className="text-muted-foreground mb-6 font-montserrat">
              Schedule your first appointment today and see why so many patients choose us for their dental care.
            </p>
            <a 
              href="#appointment" 
              className="inline-block bg-dental-accent text-white font-medium px-6 py-3 rounded-md hover:bg-dental-accent/80 transition-colors"
            >
              Book Your Visit
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
