import React from 'react';
import { Phone, Mail, MapPin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold text-teal-400 mb-6">Star Sports Massage Den</h3>
            <p className="text-gray-300 mb-6">
              Professional massage and physiotherapy services delivered right to your doorstep.
            </p>
            <div className="flex items-center">
              <Heart className="w-5 h-5 text-teal-400 mr-2" />
              <p className="text-gray-300">Healing hands, healthier you</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-teal-400 transition">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-teal-400 transition">About</a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-teal-400 transition">Services</a>
              </li>
              <li>
                <a href="#booking" className="text-gray-300 hover:text-teal-400 transition">Book Now</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-teal-400 transition">Testimonials</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-teal-400 transition">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Business Hours</h4>
            <ul className="space-y-3">
              <li className="text-gray-300">Monday - Saturday:</li>
              <li className="text-teal-400">6:00 PM - 10:00 PM</li>
              <li className="text-gray-300">Sunday:</li>
              <li className="text-teal-400">5:00 AM - 10:00 PM</li>
              <li className="text-gray-300 mt-4">Available for:</li>
              <li className="text-gray-300">• Center Visits</li>
              <li className="text-gray-300">• Home Service</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-teal-400 mr-3 mt-1" />
                <div>
                  <p className="text-gray-300">Phone:</p>
                  <a href="tel:9441230736" className="text-white hover:text-teal-400 transition font-medium">9441230736</a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-teal-400 mr-3 mt-1" />
                <div>
                  <p className="text-gray-300">Center Location:</p>
                  <p className="text-white">15/131, VV Nagar, P & T Colony,<br />Dilsukhnagar, Hyderabad</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-teal-400 mr-3 mt-1" />
                <div>
                  <p className="text-gray-300">Email:</p>
                  <a href="mailto:galisa9441230736@gmail.com" className="text-white hover:text-teal-400 transition">galisa9441230736@gmail.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Star Sports Massage Den. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;