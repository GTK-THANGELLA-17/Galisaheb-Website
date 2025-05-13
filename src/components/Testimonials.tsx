import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "IT Professional",
    content: "Significant relief from lower back pain after just three sessions. D. Galisaheb's expertise in therapeutic massage has been life-changing for me.",
    image: "/smile.jpg"
  },
  {
    id: 2,
    name: "Sai",
    role: "Businessman",
    content: "Convenient home service and expert care. The personalized approach and professional service have made Star Sports Massage Den my go-to for wellness treatments.",
    image: "/smile.jpg"
  },
  {
    id: 3,
    name: "Kumar",
    role: "IT/Marathon Trainer",
    content: "Essential for training recovery and injury prevention. As a marathon trainer, I rely on these therapeutic sessions to stay in peak condition.",
    image: "/smile.jpg"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-brand-50 dark:bg-gray-900">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-2 px-4 py-1 rounded-full bg-brand-100 text-brand-800 font-medium text-sm uppercase tracking-wider">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Discover how our specialized massage and physiotherapy services have 
            helped men improve their wellness and quality of life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className={cn(
                "bg-white dark:bg-gray-800 rounded-lg p-6 shadow border border-gray-100 dark:border-gray-700",
                "transition-all duration-300 hover:shadow-lg"
              )}
            >
              <div className="mb-6">
                <div className="flex items-center gap-1 text-gold-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
              </div>
              
              <blockquote className="text-gray-700 dark:text-gray-300 mb-6">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full overflow-hidden">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="ml-3">
                  <div className="font-medium text-gray-900 dark:text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
