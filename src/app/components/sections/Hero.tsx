import { Calendar, MapPin, Users } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Button } from "../ui/button";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1762968269894-1d7e1ce8894e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY29uZmVyZW5jZSUyMGF1ZGllbmNlfGVufDF8fHx8MTc3MjA4Nzc2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Conference venue"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#800020]/95 via-black/90 to-black/95"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto py-20">
        <div className="mb-10">
  <span className="inline-block px-8 py-3 bg-white/10 backdrop-blur-sm rounded-full text-lg md:text-xl font-bold tracking-wide uppercase border border-white/20">

            March 21-23, 2026
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl mb-8 leading-tight font-bold">
          IITK PRIME Leadership
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-[#ff6b8a] to-white">
            in Research, Translation & National Service
          </span>
        </h1>

        <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-4xl mx-auto leading-relaxed">
          A national leadership conclave bringing together academic and
          translation researchers, and industry leaders to discuss research
          excellence, innovation, translational impact, and institution building.
        </p>

        <div className="flex flex-wrap gap-6 justify-center mb-12 text-lg">
          {/* <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20">
            <Calendar className="w-6 h-6 text-[#ff6b8a]" />
            <span className="font-semibold">21–23 March 2026</span>
          </div> */}
          <div className="">
         <a
  href="https://maps.app.goo.gl/5sqUCkX3QKkdVjAL8"
  target="_blank"
  rel="noopener noreferrer"
  className="group flex items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl border border-white/20 hover:bg-white/20 hover:border-[#ff6b8a]/50 transition-all duration-300 shadow-lg"
>
  <div className="bg-[#ff6b8a]/20 p-2 rounded-lg group-hover:bg-[#ff6b8a]/30 transition-colors">
    <MapPin className="w-6 h-6 text-[#ff6b8a]" />
  </div>
  
  <div className="flex flex-col items-start">
    <span className="font-bold text-lg leading-tight">
      Hyatt Regency Lucknow
    </span>
    {/* <span className="text-xs text-gray-300 font-medium flex items-center gap-1 group-hover:text-white transition-colors">
      Click to view on Google Maps 
      <span className="group-hover:translate-x-1 transition-transform">→</span>
    </span> */}
  </div>
</a>

          </div>
          {/* <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg border border-white/20">
            <Users className="w-6 h-6 text-[#ff6b8a]" />
            <span className="font-semibold">Distinguished Leaders</span>
          </div> */}
        </div>

        {/* <div className="flex flex-wrap gap-4 justify-center">
          <Button
            size="lg"
            className="bg-[#800020] hover:bg-[#600018] text-white px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all"
            onClick={() => scrollToSection("program")}
          >
            View Program
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white hover:border-[#ff6b8a] px-8 py-6 text-lg font-semibold shadow-xl transition-all"
            onClick={() => scrollToSection("speakers")}
          >
            Meet Speakers
          </Button>
          
          
        </div> */}
        <div className="flex flex-wrap gap-4 justify-center">
  <Button
    size="lg"
    className="bg-[#800020] hover:bg-[#600018] text-white px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all"
    onClick={() => scrollToSection("program")}
  >
    View Program
  </Button>
  
  <Button
    size="lg"
    variant="outline"
    className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white hover:border-[#ff6b8a] px-8 py-6 text-lg font-semibold shadow-xl transition-all"
    onClick={() => scrollToSection("speakers")}
  >
    Meet Speakers
  </Button>

  {/* <Button
    size="lg"
    className="bg-white hover:bg-gray-100 text-[#800020] px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all border-2 border-white"
    onClick={() => window.open("#", "_blank")} // Replace "#" with your link later
  >
    Register Now
  </Button> */}
</div>
      </div>
    </section>
  );
}
