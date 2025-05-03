import React from 'react';
import { MapPin } from 'lucide-react';

const Map: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="w-full md:w-2/5 mb-10 md:mb-0 md:pr-10">
              <h2 className="text-sm uppercase tracking-wider text-teal-600 font-semibold">Our Location</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4">
                Star Sports Massage Den
              </h3>
              
              <p className="mt-6 text-gray-600">
                Visit us at our center or opt for our convenient home service. We provide professional massage 
                therapy services exclusively for men, ensuring comfort and expert care.
              </p>
              
              <div className="mt-8 bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="bg-teal-100 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-teal-600" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Center Location</h4>
                    <p className="text-gray-600">
                      15/131, VV Nagar, P & T Colony,<br />
                      Dilsukhnagar, Hyderabad,<br />
                      Telangana 500060
                    </p>
                    <div className="mt-4 text-teal-600 font-semibold">
                      Call for appointments: 9441230736
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-3/5">
              <div className="rounded-xl overflow-hidden shadow-lg h-[400px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236.77360133540752!2d78.52802892336592!3d17.359150899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb988cc21bb505%3A0xa875f0c9ecedaac5!2s15%2F131%2C%20VV%20Nagar%2C%20P%20%26%20T%20Colony%2C%20Dilsukhnagar%2C%20Hyderabad%2C%20Telangana%20500060!5e0!3m2!1sen!2sin!4v1711354671303!5m2!1sen!2sin"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Star Sports Massage Den Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map;