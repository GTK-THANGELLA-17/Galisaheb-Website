import React from 'react';
import { PhoneCall } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-teal-50 to-blue-50">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-teal-100/30 rounded-bl-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-full md:w-1/2 h-1/2 bg-blue-100/30 rounded-tr-[100px]"></div>
      </div>
      
      <div className="container mx-auto px-6 py-16 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight animate-fade-in-up">
              Star Sports <span className="text-teal-600">Massage</span> Den
            </h1>
            <p className="mt-6 text-xl text-gray-600 animate-fade-in-up animation-delay-200">
              Professional therapeutic services by D. Galisaheb, available at our center or at your home. 
              Exclusive services for men.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up animation-delay-300">
              <a 
                href="#booking" 
                className="px-8 py-4 bg-teal-600 text-white rounded-full font-medium hover:bg-teal-700 transition transform hover:scale-105 shadow-lg"
              >
                Book Session
              </a>
              <a 
                href="tel:9441230736" 
                className="px-8 py-4 flex items-center justify-center border-2 border-teal-600 text-teal-600 rounded-full font-medium hover:bg-teal-50 transition transform hover:scale-105"
              >
                <PhoneCall size={18} className="mr-2" />
                <span>9441230736</span>
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-teal-200 rounded-full blur-3xl opacity-20 transform -rotate-6"></div>
              <img 
                src="https://images.pexels.com/photos/6234633/pexels-photo-6234633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Professional Sports Massage" 
                className="relative z-10 w-full h-auto rounded-3xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;