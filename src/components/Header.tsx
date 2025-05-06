import React from 'react';
import { Award, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <header className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-teal-100/30 rounded-bl-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-full md:w-1/2 h-1/2 bg-blue-100/30 rounded-tr-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-6 py-16 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
             
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Professional <span className="text-teal-600">Massage</span> & <span className="text-teal-600">Physiotherapy</span>
              </h2>
              <p className="mt-6 text-xl text-gray-600">
                Expert therapeutic services by D.Galisaheb, available at our center or at your home. 
                Exclusive services for men.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <motion.a 
                  href="#booking" 
                  className="px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-500 text-white rounded-full font-medium hover:shadow-lg transition transform hover:-translate-y-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Your Session
                </motion.a>
                <motion.a 
                  href="tel:9441230736" 
                  className="px-8 py-4 flex items-center justify-center border-2 border-teal-600 text-teal-600 rounded-full font-medium hover:bg-teal-50 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Phone size={18} className="mr-2" />
                  <span>9441230736</span>
                </motion.a>
              </div>
              
              <div className="mt-8 text-gray-600">
                <p className="font-medium">Business Hours:</p>
                <p>Mon-Sat: 6:00 PM - 10:00 PM</p>
                <p>Sun: 5:00 AM - 10:00 PM</p>
              </div>
            </motion.div>
          </div>
          
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img 
                src="/images/image1.jpg" 
                alt="Therapeutic Massage" 
                className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </motion.div>
            <motion.div 
              className="relative mt-12"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <img 
                src="/images/image2.jpg" 
                alt="Professional Physiotherapy" 
                className="rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;