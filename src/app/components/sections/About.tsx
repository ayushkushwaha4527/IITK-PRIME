import { useEffect, useState } from "react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
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
              distinguished alumni, researchers, industry leaders, and academic
              administrators to reflect on the evolving role of institutions in
              shaping leadership for society.
            </p>

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

          {/* <div className="rounded-2xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1657673985908-949e0d79cb48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt="Leadership conference"
              className="w-full h-[500px] object-cover"
            />
          </div> */}
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
