
import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, Lightbulb } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
  const faqs = [
    {
      question: "How often should I visit the dentist?",
      answer: "Most patients should visit the dentist every six months for regular cleanings and check-ups. However, those with specific dental concerns may need more frequent visits as recommended by their dentist."
    },
    {
      question: "What should I do in a dental emergency?",
      answer: "For dental emergencies such as severe pain, swelling, bleeding, or a knocked-out tooth, contact our office immediately for emergency care. For knocked-out teeth, try to place it back in the socket without touching the root, or keep it in milk and see us within 30 minutes for the best chance of saving it."
    },
    {
      question: "Do you accept dental insurance?",
      answer: "Yes, we accept most major dental insurance plans. Our administrative team will work with you to maximize your benefits and provide clear information about any out-of-pocket expenses before treatment begins."
    },
    {
      question: "Are dental X-rays safe?",
      answer: "Dental X-rays involve very low radiation exposure and are considered very safe. We use digital X-rays which further reduce radiation exposure by up to 90% compared to traditional film X-rays. Protective equipment is always used for additional safety."
    },
    {
      question: "How can I improve my smile?",
      answer: "We offer numerous cosmetic dentistry options including professional teeth whitening, veneers, bonding, and orthodontic treatments like Invisalign. Schedule a consultation to discuss which options would work best to achieve your desired smile."
    }
  ];

  const dentalTips = [
    "Brush your teeth at least twice a day with fluoride toothpaste for two minutes each time.",
    "Floss daily to remove plaque from between teeth and under the gumline where toothbrushes can't reach.",
    "Replace your toothbrush every 3-4 months, or sooner if the bristles are frayed.",
    "Limit sugary foods and drinks, especially between meals, to reduce the risk of tooth decay.",
    "Stay hydrated with water to maintain healthy saliva flow, which helps protect your teeth."
  ];

  return (
    <section id="faqs" className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* FAQs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <HelpCircle className="h-8 w-8 text-dental-accent mr-3" />
              <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
            </div>
            
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
          
          {/* Dental Tips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-8">
              <Lightbulb className="h-8 w-8 text-dental-accent mr-3" />
              <h2 className="text-3xl font-bold">Dental Care Tips</h2>
            </div>
            
            <div className="bg-dental-mint/20 rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-6">Keep Your Smile Healthy Between Visits</h3>
              
              <ul className="space-y-4">
                {dentalTips.map((tip, index) => (
                  <motion.li 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-dental-accent text-white text-sm mr-3 flex-shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <span>{tip}</span>
                  </motion.li>
                ))}
              </ul>
              
              <div className="mt-8 p-4 bg-white rounded-lg shadow-sm border border-dental-blue/10">
                <p className="text-sm text-dental-dark font-medium">
                  Remember, preventive care is the best approach to dental health. 
                  Regular dental check-ups and good home care habits can help prevent most dental problems!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
