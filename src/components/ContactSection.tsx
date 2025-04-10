
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have questions or ready to schedule your visit? Contact us today and take the first step towards a healthier, brighter smile.
            </p>
            
            <div className="mb-8">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">Clinic Location</h3>
                <div className="h-64 rounded-xl overflow-hidden shadow-md mb-4">
                  {/* Replace with actual Google Maps embed */}
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059353029!2d-74.25986307806123!3d40.69714941680757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1618429475825!5m2!1sen!2s" 
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    allowFullScreen={true} 
                    loading="lazy"
                    title="BrightSmile Dental Care location"
                  ></iframe>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="w-5 h-5 mr-2 text-dental-accent" />
                  <span>123 Smile Street, New York, NY 10001</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-2">Contact Information</h3>
                <div className="flex items-center text-muted-foreground">
                  <Phone className="w-5 h-5 mr-2 text-dental-accent" />
                  <a href="tel:+1234567890" className="hover:text-dental-accent">+1 (234) 567-890</a>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Mail className="w-5 h-5 mr-2 text-dental-accent" />
                  <a href="mailto:info@brightsmile.com" className="hover:text-dental-accent">info@brightsmile.com</a>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <MessageSquare className="w-5 h-5 mr-2 text-dental-accent" />
                  <a href="https://wa.me/1234567890" className="hover:text-dental-accent">WhatsApp Chat</a>
                </div>
                <div className="flex items-start text-muted-foreground">
                  <Clock className="w-5 h-5 mr-2 mt-0.5 text-dental-accent" />
                  <div>
                    <p>Monday - Friday: 8:00 AM - 7:00 PM</p>
                    <p>Saturday: 9:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            id="appointment"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-dental-blue/10 rounded-2xl p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Book an Appointment</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block font-medium">
                      Full Name
                    </label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="block font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block font-medium">
                      Phone
                    </label>
                    <Input id="phone" placeholder="(123) 456-7890" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="date" className="block font-medium">
                      Preferred Date
                    </label>
                    <Input id="date" type="date" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="service" className="block font-medium">
                    Service
                  </label>
                  <select 
                    id="service"
                    className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-dental-accent/50"
                    required
                  >
                    <option value="">Select a Service</option>
                    <option value="checkup">Checkup & Cleaning</option>
                    <option value="rootcanal">Root Canal</option>
                    <option value="braces">Braces & Aligners</option>
                    <option value="whitening">Teeth Whitening</option>
                    <option value="implants">Dental Implants</option>
                    <option value="pediatric">Pediatric Dentistry</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="block font-medium">
                    Message (Optional)
                  </label>
                  <Textarea id="message" placeholder="Let us know if you have any special requests or questions" />
                </div>
                <Button type="submit" className="w-full bg-dental-accent hover:bg-dental-accent/90 text-white">
                  Schedule My Visit
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
