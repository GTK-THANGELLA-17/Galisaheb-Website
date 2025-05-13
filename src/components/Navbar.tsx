import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 dark:bg-gray-900/95 shadow-md backdrop-blur-sm py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        <a 
          href="#" 
          className="flex items-center space-x-2"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          {/* Brand Name - Pure black in light mode, white in dark mode */}
          <span className="text-2xl font-bold text-black dark:text-white">
            D. Galisaheb
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {["home", "about", "services", "booking", "testimonials", "contact", "health-tips"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={cn(
                "font-medium capitalize transition-colors",
                isScrolled ? "text-black dark:text-white" : "text-black dark:text-gray-200",
                "hover:text-brand-700 dark:hover:text-brand-400"
              )}
            >
              {item === "health-tips" ? "Health Tips" : item}
            </button>
          ))}
        </div>

        {/* Theme toggle and Mobile Menu Button */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="text-black dark:text-white"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 transition-transform hover:rotate-45" />
            ) : (
              <Moon className="h-5 w-5 transition-transform hover:-rotate-45" />
            )}
          </Button>
          
          <Button
            variant="ghost"
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 z-50 bg-background/95 dark:bg-gray-900/95 backdrop-blur-sm md:hidden flex flex-col items-center justify-center space-y-8 transform transition-transform duration-300 ease-in-out",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <Button
            variant="ghost"
            className="absolute top-4 right-4"
            onClick={toggleMobileMenu}
          >
            ✕
          </Button>
          {["home", "about", "services", "booking", "testimonials", "contact", "health-tips"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-xl font-medium capitalize hover:text-brand-700 dark:text-white dark:hover:text-brand-400 transition-colors"
            >
              {item === "health-tips" ? "Health Tips" : item}
            </button>
          ))}
          <Button 
            variant="default" 
            className="bg-brand-700 hover:bg-brand-800 text-white"
            onClick={() => {
              scrollToSection("booking");
              setMobileMenuOpen(false);
            }}
          >
            Book Now
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
