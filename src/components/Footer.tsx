
import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="w-full bg-dental-dark text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">BrightSmile Dental</h3>
            <p className="text-gray-300 mb-4">
              Providing quality dental care with a gentle touch. Your smile is our priority.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Checkups & Cleaning</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Root Canals</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Braces & Aligners</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Teeth Whitening</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <address className="not-italic text-gray-300">
              <p>123 Smile Street</p>
              <p>New York, NY 10001</p>
              <p className="mt-2">Phone: <a href="tel:+1234567890" className="hover:text-white">+1 (234) 567-890</a></p>
              <p>Email: <a href="mailto:info@brightsmile.com" className="hover:text-white">info@brightsmile.com</a></p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 mt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} BrightSmile Dental Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
