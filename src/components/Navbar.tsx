import { useState, useEffect } from "react";
import { Menu, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";

const menuItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "booking", label: "Booking" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
  { id: "health-tips", label: "Health Tips" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isLightModeAndNotScrolled = theme === "light" && !isScrolled;

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white dark:bg-gray-900/80 shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className={`text-2xl font-bold ${
            isLightModeAndNotScrolled ? "text-white" : theme === "light" ? "text-black" : "text-white"
          }`}
        >
          D. Galisaheb
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          {menuItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`text-lg font-medium ${
                isLightModeAndNotScrolled ? "text-white" : theme === "light" ? "text-black" : "text-white"
              } hover:text-gray-300 transition-colors`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Theme Toggle and Mobile Menu Button */}
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className={`${
              isLightModeAndNotScrolled ? "text-white" : theme === "light" ? "text-black" : "text-white"
            }`}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 transition-transform hover:rotate-45" />
            ) : (
              <Moon className="h-5 w-5 transition-transform hover:-rotate-45" />
            )}
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className={`md:hidden ${
              isLightModeAndNotScrolled ? "text-white" : theme === "light" ? "text-black" : "text-white"
            }`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-50 transition-transform transform ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div
          className={`bg-white dark:bg-gray-900 h-full p-6 flex flex-col items-center space-y-6 ${
            theme === "light" ? "text-black" : "text-white"
          }`}
        >
          <Button
            variant="ghost"
            className="absolute top-4 right-4 text-white"
            onClick={toggleMobileMenu}
            aria-label="Close mobile menu"
          >
            ✕
          </Button>

          {/* Mobile Menu Items */}
          {menuItems.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => {
                scrollToSection(id);
                setMobileMenuOpen(false);
              }}
              className="text-xl font-medium capitalize hover:text-gray-300 transition-colors"
            >
              {label}
            </button>
          ))}

          {/* Book Now Button */}
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
