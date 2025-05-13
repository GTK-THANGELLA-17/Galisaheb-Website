
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const services = [
  {
    id: "sports-massage",
    title: "Sports Massage",
    description: "Targeted therapy for athletes and active individuals to improve performance, prevent injuries, and enhance recovery.",
    icon: "🏆"
  },
  {
    id: "deep-tissue",
    title: "Deep Tissue Massage",
    description: "Intense pressure massage targeting the deeper layers of muscle to relieve chronic tension and pain.",
    icon: "💪"
  },
  {
    id: "recovery-therapy",
    title: "Recovery Therapy",
    description: "Specialized treatments to accelerate healing after injuries, surgeries, or intense physical activity.",
    icon: "🔄"
  },
  {
    id: "therapeutic-massage",
    title: "Therapeutic Massage",
    description: "Customized massage techniques to address specific health concerns and promote overall wellness.",
    icon: "✨"
  },
  {
    id: "posture-correction",
    title: "Posture Correction",
    description: "Treatment and guidance to improve alignment, reduce pain, and prevent future issues related to poor posture.",
    icon: "⬆️"
  },
  {
    id: "stress-relief",
    title: "Stress Relief",
    description: "Relaxing massage techniques designed to reduce stress, anxiety, and promote mental wellbeing.",
    icon: "🧠"
  }
];

const Services = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
   <section id="services" className="bg-gray-50 dark:bg-gray-900 py-16 md:py-24">
  <div className="container">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <div className="inline-block mb-2 px-4 py-1 rounded-full bg-brand-100 dark:bg-brand-900 text-brand-800 dark:text-brand-200 font-medium text-sm uppercase tracking-wider">
        Our Services
      </div>
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
        Professional Wellness Services
      </h2>
      <p className="text-gray-600 dark:text-gray-300">
        Exclusively for men, our specialized massage and physiotherapy services 
        are available both at our center and through convenient home visits.
      </p>
    </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className={cn(
                "bg-white rounded-lg p-6 shadow-sm border border-gray-100",
                "hover:shadow-md transition-all duration-300"
              )}
            >
              <div className="text-4xl mb-4 bg-brand-50 h-16 w-16 flex items-center justify-center rounded-lg">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="mb-6 text-gray-600 flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-600"></div>
              <span>Exclusively for Men</span>
            </div>
            <div className="hidden md:block border-l h-4 border-gray-300 mx-2"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-brand-600"></div>
              <span>Center & Home Service Available</span>
            </div>
          </div>
          <Button 
            size="lg" 
            className="bg-brand-700 hover:bg-brand-800"
            onClick={scrollToBooking}
          >
            Book a Session
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
