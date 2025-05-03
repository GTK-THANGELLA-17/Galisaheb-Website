import React from 'react';
import { Phone, MessageCircle, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-sm uppercase tracking-wider text-teal-600 font-semibold">Contact Us</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4">
                Get In Touch
              </h3>
              
              <p className="mt-6 text-gray-600">
                Have questions or ready to schedule your massage or physiotherapy session? 
                Reach out to D. Galisaheb directly through any of these channels.
              </p>
              
              <div className="mt-10 space-y-6">
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="bg-teal-100 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-teal-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Phone</h4>
                    <a href="tel:9441230736" className="text-gray-600 hover:text-teal-600 transition mt-1 block">
                      9441230736
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Available during business hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="bg-teal-100 p-3 rounded-full">
                      <MessageCircle className="h-6 w-6 text-teal-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">WhatsApp</h4>
                    <a 
                      href="https://wa.me/919441230736" 
                      className="text-gray-600 hover:text-teal-600 transition mt-1 block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Send a message
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Quick responses during business hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="bg-teal-100 p-3 rounded-full">
                      <Clock className="h-6 w-6 text-teal-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Business Hours</h4>
                    <p className="text-gray-600 mt-1">Monday - Saturday: 6:00 PM - 10:00 PM</p>
                    <p className="text-gray-600">Sunday: 5:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 md:pl-12">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h4 className="text-xl font-bold text-gray-800 mb-6">Quick Contact</h4>
                
                <div className="space-y-6">
                  <div className="group">
                    <label htmlFor="quick-name" className="block text-gray-700 font-medium mb-2 group-hover:text-teal-600 transition-colors">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="quick-name"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="group">
                    <label htmlFor="quick-phone" className="block text-gray-700 font-medium mb-2 group-hover:text-teal-600 transition-colors">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="quick-phone"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300"
                      placeholder="Your phone number"
                    />
                  </div>
                  
                  <div className="group">
                    <label htmlFor="quick-message" className="block text-gray-700 font-medium mb-2 group-hover:text-teal-600 transition-colors">
                      Message
                    </label>
                    <textarea
                      id="quick-message"
                      rows={4}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  
                  <button
                    type="button"
                    className="w-full py-3 bg-teal-600 text-white rounded-lg font-medium hover:bg-teal-700 transition transform hover:scale-[1.02] active:scale-[0.98] duration-300"
                    onClick={() => alert("Message received! We'll get back to you shortly.")}
                  >
                    Send Message
                  </button>
                  
                  <p className="text-sm text-gray-500 text-center mt-4">
                    Or call directly: <a href="tel:9441230736" className="text-teal-600 font-semibold hover:text-teal-700 transition-colors">9441230736</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;