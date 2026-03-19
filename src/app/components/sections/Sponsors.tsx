import cdis from "../../assets/images/cdis.png";
import c3ihub from "../../assets/images/c3ihub.jpeg";
// import airawat from "../../assets/images/airawat.jpeg";
import wsais from "../../assets/images/wsais.png";
import siic from "../../assets/images/siic.png";
import dora from "../../assets/images/dora.png";
import kss from "../../assets/images/kotak.jpeg";
import newarf from "../../assets/images/newarf.png";


export function Sponsors() {
  const sponsors = [
    { name: "WSAIS IIT Kanpur", logo: wsais },
    { name: "CDIS IIT Kanpur", logo: cdis },
    { name: "C3iHub IIT Kanpur", logo: c3ihub },
    { name: "Airawat Research Foundation", logo: newarf },
    { name: "FIRST IIT Kanpur", logo: siic },
    { name: "KSS IIT Kanpur", logo: kss },
    { name: "DORA IIT Kanpur", logo: dora },
  ];

  return (
    <section id="sponsors" className="py-20 bg-white">

      {/* Gradient Header */}
      <div className="bg-gradient-to-br from-[#800020] via-black to-black text-white py-16 mb-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Our Sponsors
        </h2>
        <p className="text-gray-200 max-w-3xl mx-auto">
          The IITK PRIME Leadership Conclave is supported by the following institutions.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* First Row - 4 Sponsors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch mb-8">
          {sponsors.slice(0, 4).map((sponsor, index) => (
            <div
              key={index}
              className="group relative bg-white border border-[#800020]/20 rounded-2xl p-6 flex flex-col items-center justify-between hover:border-[#800020]/50 hover:shadow-lg transition-all duration-300 overflow-hidden min-h-[11rem]"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#800020] to-[#ff9999]" />

              {/* Logo */}
              <div className="flex-1 flex items-center justify-center w-full py-2">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-h-20 w-full object-contain"
                />
              </div>

              {/* Divider */}
              <div className="w-10 h-0.5 bg-[#800020]/25 rounded-full my-2" />

              {/* Name */}
              <p className="text-xs font-bold text-gray-700 text-center group-hover:text-[#800020] transition-colors duration-300 leading-snug">
                {sponsor.name}
              </p>
            </div>
          ))}
        </div>

        {/* Second Row - 3 Sponsors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-stretch max-w-4xl mx-auto">
          {sponsors.slice(4).map((sponsor, index) => (
            <div
              key={index}
              className="group relative bg-white border border-[#800020]/20 rounded-2xl p-6 flex flex-col items-center justify-between hover:border-[#800020]/50 hover:shadow-lg transition-all duration-300 overflow-hidden min-h-[11rem]"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#800020] to-[#ff9999]" />

              {/* Logo */}
              <div className="flex-1 flex items-center justify-center w-full py-2">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-h-20 w-full object-contain"
                />
              </div>

              {/* Divider */}
              <div className="w-10 h-0.5 bg-[#800020]/25 rounded-full my-2" />

              {/* Name */}
              <p className="text-xs font-bold text-gray-700 text-center group-hover:text-[#800020] transition-colors duration-300 leading-snug">
                {sponsor.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}