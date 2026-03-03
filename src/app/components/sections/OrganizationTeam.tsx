import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Globe } from "lucide-react";

import nitinsir from "../../assets/images/nitinsir.jpeg";
import ameykakre from "../../assets/images/ameykakre.jpeg";
import chandansaha from "../../assets/images/chandansaha.jpeg";
import somitra from "../../assets/images/somitra.jpg";
import jitendra from "../../assets/images/jitendra.jpeg";

export function OrganizationTeam() {

  const organizingCommittee = [
    {
      name: "Prof. Nitin Saxena",
      title: "Dean, WSAIS",
      company: "IIT Kanpur",
      image: nitinsir,
      website: "https://www.iitk.ac.in/dr-nitin-saxena",
    },
    {
      name: "Prof. Amey Karkare",
      title: "Dean, DORA",
      company: "IIT Kanpur",
      image: ameykakre,
      website: "https://www.iitk.ac.in/dr-amey-karkare",
    },
  ];

  const trackChairs = [
    {
      name: "Prof. Chandan Saha",
      title: "Professor",
      company: "IISc Bangalore",
      image: chandansaha,
      website: "https://eecs.iisc.ac.in/people/chandan-saha/",
    },
    {
      name: "Prof. Somitra K Sanadhya",
      title: "C3iHub",
      company: "IIT Kanpur",
      image: somitra,
      website: "https://iitk.ac.in/somitra-kumar-sanadhya",
    },
    {
      name: "Prof. Jitendra K Bera",
      title: "Dean of Faculty Affairs",
      company: "IIT Kanpur",
      image: jitendra,
      website: "https://www.iitk.ac.in/jitendra-k-bera",
    },
  ];

  return (
    <section id="organization-team" className="py-20 bg-white">

      {/* Header */}
      <div className="bg-gradient-to-br from-[#800020] via-black to-black text-white py-16 mb-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Organization
        </h2>
        {/* <p className="text-gray-200 max-w-3xl mx-auto">
          Leadership guiding the vision and academic sessions of the conclave.
        </p> */}
      </div>

      {/* Organizing Committee */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Organizing Committee
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {organizingCommittee.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#800020] p-6 text-center hover:-translate-y-2"
            >
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg mb-5 group-hover:scale-110 transition">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <h3 className="font-bold text-gray-900 group-hover:text-[#800020]">
                {member.name}
              </h3>

              <p className="text-xs font-semibold text-[#800020] uppercase mt-1">
                {member.title}
              </p>

              <p className="text-gray-600 text-xs mt-2">
                {member.company}
              </p>

              <a
                href={member.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-xs text-gray-700 hover:text-[#800020]"
              >
                <Globe className="w-4 h-4" />
                View Profile
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Track Chairs */}
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Track Chairs
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {trackChairs.map((chair, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#800020] p-6 text-center hover:-translate-y-2"
            >
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg mb-5 group-hover:scale-110 transition">
                <ImageWithFallback
                  src={chair.image}
                  alt={chair.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <h3 className="font-bold text-gray-900 group-hover:text-[#800020]">
                {chair.name}
              </h3>

              <p className="text-xs font-semibold text-[#800020] uppercase mt-1">
                {chair.title}
              </p>

              <p className="text-gray-600 text-xs mt-2">
                {chair.company}
              </p>

              <a
                href={chair.website}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-xs text-gray-700 hover:text-[#800020]"
              >
                <Globe className="w-4 h-4" />
                View Profile
              </a>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
