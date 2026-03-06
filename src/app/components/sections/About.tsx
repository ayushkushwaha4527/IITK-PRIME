import { useEffect, useState } from "react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { GraduationCap, Link2, Landmark } from "lucide-react";
import hayatRegency from "../../assets/images/hyatt.webp";
import iitkvideo from "../../assets/images/iitkvideo.mp4";

/* ---------------- Counter Component ---------------- */
function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = target / (duration / 16);

    const updateCounter = () => {
      start += increment;
      if (start < target) {
        setCount(Math.floor(start));
        requestAnimationFrame(updateCounter);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [target]);

  return <>{count}+</>;
}

/* ---------------- About Section ---------------- */

export function About() {
  const whatToExpect = [
    {
      icon: <GraduationCap className="w-8 h-8 text-[#800020]" />,
      title: "Research Leadership",
      description:
        "Origins of research excellence at IITK and global academic impact.",
    },
    {
      icon: <Link2 className="w-8 h-8 text-[#800020]" />,
      title: "Translational Leadership",
      description:
        "Bridging academic research with industry, policy, and real-world applications.",
    },
    {
      icon: <Landmark className="w-8 h-8 text-[#800020]" />,
      title: "Institution Building",
      description:
        "Leadership in academia, governance, and national capacity building.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#800020] via-black to-black text-white py-16 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl mb-6 font-bold">
            About the Conclave
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl leading-relaxed">
            A premier leadership conclave bringing together eminent academics,
            researchers, and institutional leaders to shape national and global
            impact.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl md:text-4xl mb-6 font-bold text-gray-900">
              Our Mission
            </h3>
            <p className="text-gray-700 mb-6 text-lg leading-relaxed">
              The IITK PRIME Leadership Conclave aims to bring together
              distinguished alumni, researchers, industry, and institutional
              leaders to discuss the evolving role of academic institutions in
              shaping national and global leadership.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              The event will focus on:
            </h3>

            <ul className="space-y-3 text-gray-700 text-lg">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#800020] rounded-full mt-2 mr-3"></span>
                Research excellence rooted in IIT Kanpur's academic traditions
              </li>

              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#800020] rounded-full mt-2 mr-3"></span>
                Translational leadership and societal impact
              </li>

              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#800020] rounded-full mt-2 mr-3"></span>
                Institution building and governance in emerging technologies
              </li>

              <li className="flex items-start">
                <span className="w-2 h-2 bg-[#800020] rounded-full mt-2 mr-3"></span>
                National service and global collaboration
              </li>
            </ul>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <video
              src={iitkvideo}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[500px] object-cover"
            />
          </div>
        </div>

        {/* ── What to Expect Cards ── */}
        <div className="mb-20">
          <h3 className="text-3xl md:text-4xl mb-12 text-center font-bold text-gray-900">
            What to Expect
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whatToExpect.map((item, i) => (
              <div
                key={i}
                className="group flex flex-col items-center text-center bg-white border border-[#800020]/20 rounded-2xl px-8 py-10 shadow-sm hover:shadow-lg hover:border-[#800020]/50 transition-all duration-300 relative overflow-hidden"
              >
                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#800020] to-[#ff9999]" />

                {/* Icon circle */}
                <div className="w-20 h-20 rounded-full bg-[#800020]/8 border border-[#800020]/20 flex items-center justify-center mb-6 group-hover:bg-[#800020]/15 transition-colors duration-300">
                  <span className="text-[#800020]">{item.icon}</span>
                </div>

                {/* Title */}
                <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#800020] transition-colors duration-300">
                  {item.title}
                </h4>

                {/* Divider */}
                <div className="w-10 h-0.5 bg-[#800020]/30 rounded-full mb-3" />

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-12 mb-20 border border-gray-200">
          <h3 className="text-3xl mb-12 text-center font-bold text-gray-900">
            Conclave by the Numbers
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-5xl md:text-6xl mb-3 font-bold text-[#800020]">
                <Counter target={80} />
              </div>
              <div className="text-gray-600 text-lg font-semibold">
                Distinguished Attendees
              </div>
            </div>

            <div className="text-center">
              <div className="text-5xl md:text-6xl mb-3 font-bold text-black">
                <Counter target={30} />
              </div>
              <div className="text-gray-600 text-lg font-semibold">
                Expert Speakers
              </div>
            </div>

            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-5xl md:text-6xl mb-3 font-bold text-[#800020]">
                <Counter target={5} />
              </div>
              <div className="text-gray-600 text-lg font-semibold">
                Sessions
              </div>
            </div>
          </div>
        </div>

        {/* Venue */}
        <div>
          <h3 className="text-3xl md:text-4xl mb-12 text-center font-bold text-gray-900">
            Conference Venue
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src={hayatRegency}
                alt="Hyatt Regency Lucknow"
                className="w-full h-[400px] object-cover"
              />
            </div>

            <div>
              <h4 className="text-2xl md:text-3xl mb-4 font-bold text-gray-900">
                Hyatt Regency Lucknow
              </h4>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                A premium full-service hotel located in the vibrant Vibhuti
                Khand area of Gomti Nagar, offering modern facilities and
                convenient access to business and cultural hubs of Lucknow.
              </p>

              <div className="space-y-3 text-gray-700">
                <p>
                  <span className="font-bold text-gray-900">Address:</span>{" "}
                  Vibhuti Khand, Gomti Nagar, Lucknow – 226010
                </p>
                <p>
                  <span className="font-bold text-gray-900">
                    Airport Distance:
                  </span>{" "}
                  ~25 km
                </p>
                <p>
                  <span className="font-bold text-gray-900">
                    Railway Station:
                  </span>{" "}
                  ~11 km
                </p>
                <a
                  href="https://maps.app.goo.gl/5sqUCkX3QKkdVjAL8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[#800020] hover:text-[#600018] font-semibold hover:underline transition-colors"
                >
                  View on Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
