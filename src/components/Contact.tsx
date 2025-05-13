
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-2 px-4 py-1 rounded-full bg-brand-100 text-brand-800 dark:bg-brand-900/30 dark:text-brand-300 font-medium text-sm uppercase tracking-wider">
            Contact Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Have questions about our services? Need to schedule an appointment? 
            Contact us today and we'll be happy to assist you.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center mt-1">
                    <span className="text-brand-700 dark:text-brand-300">📱</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Phone Number</div>
                    <a href="tel:9441230736" className="text-brand-700 dark:text-brand-400 hover:underline">9441230736</a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center mt-1">
                    <span className="text-brand-700 dark:text-brand-300">✉️</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Email</div>
                    <a href="mailto:galisa9441230736@gmail.com" className="text-brand-700 dark:text-brand-400 hover:underline">
                      galisa9441230736@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center mt-1">
                    <span className="text-brand-700 dark:text-brand-300">📍</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Location</div>
                    <address className="not-italic text-gray-600 dark:text-gray-300">
                      12-225, VV Nagar, P & T Colony,<br />
                      Dilsukhnagar, Hyderabad,<br />
                      Telangana 500060
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center mt-1">
                    <span className="text-brand-700 dark:text-brand-300">⏰</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">Business Hours</div>
                    <div className="text-gray-600 dark:text-gray-300">
                      <div>Monday to Saturday: 6:00 PM – 10:00 PM</div>
                      <div>Sunday: 5:00 AM – 10:00 PM</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="h-10 w-10 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center mt-1">
                    <span className="text-brand-700 dark:text-brand-300">💬</span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white">WhatsApp</div>
                    <a 
                      href="https://wa.me/919441230736" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-brand-700 dark:text-brand-400 hover:underline"
                    >
                      Send Message
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1">
                        <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="h-full w-full rounded-xl overflow-hidden shadow-lg">
                <iframe
                  title="Star Sports Massage Den Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.3214381713126!2d78.52557147020204!3d17.359105840133105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb988ce9e3bfd7%3A0x4de02018beb3ee62!2s12-225%2C%20VV%20Nagar%2C%20P%20%26%20T%20Colony%2C%20Dilsukhnagar%2C%20Hyderabad%2C%20Telangana%20500060!5e0!3m2!1sen!2sin!4v1699345678901!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              
              <div className="mt-6 text-center">
  <a 
    href="https://www.google.com/maps/dir/?api=1&origin=My+Location&destination=17.3590841,78.5280822" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <Button variant="outline" className="border-brand-200 text-brand-800 hover:bg-brand-50 dark:border-brand-800 dark:text-brand-300 dark:hover:bg-brand-900/30">
      Get Directions
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 ml-1">
        <path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd" />
      </svg>
    </Button>
  </a>
</div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
