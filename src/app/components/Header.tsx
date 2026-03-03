import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "../assets/images/iitklogo.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "program", label: "Program" },
    { id: "speakers", label: "Speakers" },
    { id: "organization-team", label: "Organization" },
    { id: "sponsors", label: "Sponsors" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      let currentSection = "home";

      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element && scrollPosition >= element.offsetTop) {
          currentSection = item.id;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const y =
        element.getBoundingClientRect().top +
        window.pageYOffset -
        offset;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center space-x-3"
          >
            <img
              src={logo}
              alt="IITK PRIME"
              className="h-10 sm:h-12 w-auto object-contain"
            />
            {/* <div className="flex flex-col leading-tight">
              <span className="font-bold text-lg sm:text-xl text-gray-900">
                IITK PRIME
              </span>
              <span className="text-xs text-[#800020] font-medium">
                Leadership 2026
              </span>
            </div> */}
          </button>

          {/* Desktop Navigation (ONLY large screens) */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 rounded-lg text-sm transition-all duration-200 whitespace-nowrap ${
                  activeSection === item.id
                    ? "bg-[#800020] text-white font-semibold shadow-md"
                    : "text-gray-700 hover:bg-gray-100 hover:text-[#800020] font-medium"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile / Tablet Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-900" />
            ) : (
              <Menu className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>

        {/* Mobile + Tablet Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 space-y-1 border-t border-gray-200">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg transition ${
                  activeSection === item.id
                    ? "bg-[#800020] text-white font-semibold"
                    : "text-gray-700 hover:bg-gray-100 hover:text-[#800020] font-medium"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
