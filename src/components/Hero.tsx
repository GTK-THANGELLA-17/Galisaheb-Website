
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Hero = () => {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById("booking");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-brand-800 dark:bg-gray-900 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519824145371-296894a0daa9?q=80&w=1920')] dark:bg-[url('https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1920')] bg-cover bg-center opacity-40 animate-fade-in"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-900/70 via-brand-800/70 to-brand-700/70 dark:from-gray-900/90 dark:via-gray-800/80 dark:to-gray-800/70"></div>
      </div>
      
      <div className="container relative z-10 mt-16">
        <div className="max-w-3xl scroll-reveal">
          <span className="inline-block mb-4 text-gold-400 font-semibold tracking-wider uppercase border-l-4 border-gold-400 pl-2 animate-pulse">
            Star Sports Massage Den
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-shadow">
            Professional Massage & <span className="text-brand-300">Physiotherapy</span> for Men
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
            Expert care by D. Galisaheb — at our center or right at your doorstep. Experience premium wellness services designed exclusively for men.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className={cn(
                "bg-brand-600 hover:bg-brand-700 text-white border-2 border-transparent",
                "transition-all duration-300 font-medium text-base hover:scale-105"
              )}
              onClick={scrollToBooking}
            >
              Book Your Session
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className={cn(
                "bg-transparent hover:bg-white/10 text-white border-2 border-white/70 hover:border-white",
                "transition-all duration-300 font-medium text-base hover:scale-105"
              )}
            >
              <a href="tel:9441230736">Call: 9441230736</a>
            </Button>
          </div>
        </div>

        {/* Floating Images */}
        <div className="hidden md:block absolute right-10 top-1/4 w-64 h-48 rounded-lg overflow-hidden shadow-2xl transform rotate-3 opacity-0 animate-[fade-in_1s_0.5s_ease-out_forwards]">
          <img 
            src="/deep tissue massage.jpg" 
            alt="Sports Massage" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="hidden md:block absolute right-40 bottom-1/4 w-48 h-64 rounded-lg overflow-hidden shadow-2xl transform -rotate-6 opacity-0 animate-[fade-in_1s_0.8s_ease-out_forwards]">
          <img 
            src="/massage 3.jpg" 
            alt="Physiotherapy" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-white/70 text-sm mb-2">Scroll Down</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/70">
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
