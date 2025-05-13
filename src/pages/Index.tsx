
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import BookingForm from "@/components/BookingForm";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import HealthTips from "@/components/HealthTips";
import { useTheme } from "@/hooks/use-theme";

const Index = () => {
  // Using the theme hook to ensure theme is applied
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.scroll-reveal');
      
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add('active');
        } else {
          reveals[i].classList.remove('active');
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once on mount to handle initial items in view
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <main className={`min-h-screen bg-background text-foreground font-nunito`}>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <HealthTips />
      <BookingForm />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
