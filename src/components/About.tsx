
import { cn } from "@/lib/utils";

const About = () => {
  return (
    <section id="about" className="bg-white py-16 md:py-24">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-100 rounded-full -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gold-100 rounded-full -z-10"></div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/Recovery Therapy.jpg" 
                alt="D. Galisaheb - Massage Therapist" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <div>
            <div className="inline-block mb-2 px-4 py-1 rounded-full bg-brand-100 text-brand-800 font-medium text-sm uppercase tracking-wider">
              About Us
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Meet Your Expert Therapist</h2>
            <h3 className="text-xl md:text-2xl font-semibold mb-4 text-brand-700">D. Galisaheb</h3>
            
            <div className="space-y-4">
              <p className="text-gray-700">
                With over 4 years of specialized experience in sports massage and physiotherapy, D. Galisaheb has established himself as an expert in men's wellness and therapeutic treatments.
              </p>
              
              <p className="text-gray-700">
                Combining traditional techniques with modern methods, his approach addresses a wide range of conditions including chronic pain, sports injuries, postural correction, and stress relief.
              </p>
              
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className={cn(
                  "p-4 rounded-lg bg-gray-50 border border-gray-100",
                  "transition-all duration-300 hover:shadow-md"
                )}>
                  <div className="text-brand-600 font-bold text-lg mb-1">4+ Years</div>
                  <div className="text-gray-600 text-sm">Professional Experience</div>
                </div>
                
                <div className={cn(
                  "p-4 rounded-lg bg-gray-50 border border-gray-100",
                  "transition-all duration-300 hover:shadow-md"
                )}>
                  <div className="text-brand-600 font-bold text-lg mb-1">Men's Health</div>
                  <div className="text-gray-600 text-sm">Specialized Focus</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
