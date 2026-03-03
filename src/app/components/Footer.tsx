import logo1 from "../assets/images/wsais.png";
import logo2 from "../assets/images/iitkanpur.png";

export function Footer() {
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
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "program", label: "Program" },
    { id: "speakers", label: "Speakers" },
    { id: "organization-team", label: "Organization" }, // ✅ fixed
    { id: "sponsors", label: "Sponsors" },
    { id: "contact", label: "Contact" }, // ✅ added
  ];

  return (
    <footer id="footer" className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Branding + Logos */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-6 mb-6">
              <div className="bg-white p-3 rounded-lg shadow-md">
                <img src={logo1} alt="WSAIS" className="h-12 object-contain" />
              </div>

              <div className="bg-white p-3 rounded-lg shadow-md">
                <img
                  src={logo2}
                  alt="IIT Kanpur"
                  className="h-12 object-contain"
                />
              </div>
            </div>

            <h2 className="text-2xl font-semibold mb-3">
              IITK PRIME Leadership Conclave 2026
            </h2>

            <p className="text-gray-400 max-w-md leading-relaxed">
              Bringing together academic leaders, researchers, and innovators to
              discuss research excellence, translational leadership, and
              institution building.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white">
              Quick Links
            </h3>

            <div className="space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block text-gray-400 hover:text-[#800020] transition-colors duration-200 text-left font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div id="contact">
            <h3 className="font-semibold text-lg mb-6 text-white">
              Contact
            </h3>

            <div className="space-y-3 text-gray-400">
              <p>
                Email:{" "}
                <span className="hover:text-[#800020] transition-colors">
                  iitkprimeleadership@gmail.com
                </span>
              </p>

              {/* <p>Location: Lucknow, Uttar Pradesh</p> */}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm">
          © 2026 IITK PRIME Leadership Conclave. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
