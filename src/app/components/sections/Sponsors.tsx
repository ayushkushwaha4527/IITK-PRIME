import cdis from "../../assets/images/cdis.png";
import c3ihub from "../../assets/images/c3ihub.jpeg";
import airawat from "../../assets/images/airawat.jpeg";
import wsais from "../../assets/images/wsais.png";
import siic from "../../assets/images/siic.png";
import dora from "../../assets/images/dora.png";
import kss from "../../assets/images/kotak.jpeg";

export function Sponsors() {
  const sponsors = [
    { name: "WSAIS IIT Kanpur", logo: wsais },
    { name: "CDIS IIT Kanpur", logo: cdis },
    { name: "C3iHub IIT Kanpur", logo: c3ihub },
    { name: "Airawat Research Foundation", logo: airawat },
    { name: "FIRST IIT Kanpur", logo: siic },
    { name: "KSS IIT Kanpur", logo: kss },
    { name: "DORA IIT Kanpur", logo: dora },
  ];

  return (
    <section id="sponsors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Sponsors
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            The IITK PRIME Leadership Conclave is supported by the following institutions
          </p>
        </div>

        {/* First Row - 4 Sponsors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center mb-8">
          {sponsors.slice(0, 4).map((sponsor, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center hover:border-[#800020] hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-h-20 w-full object-contain mb-4"
              />
              <p className="text-sm font-bold text-gray-900 text-center">
                {sponsor.name}
              </p>
            </div>
          ))}
        </div>

        {/* Second Row - 3 Sponsors (Responsive + Centered) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center max-w-4xl mx-auto">
          {sponsors.slice(4).map((sponsor, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-2xl p-6 flex flex-col items-center justify-center hover:border-[#800020] hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-h-20 w-full object-contain mb-4"
              />
              <p className="text-sm font-bold text-gray-900 text-center">
                {sponsor.name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
