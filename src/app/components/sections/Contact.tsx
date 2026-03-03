import { Mail, MapPin, Sun, CloudSun } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50">

      {/* Header */}
      <div className="bg-gradient-to-br from-[#800020] via-black to-black text-white py-16 mb-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Contact
        </h2>
        <p className="text-gray-200 max-w-3xl mx-auto">
          Get in touch with us for any queries regarding the conclave.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* Contact Info */}
        <div>
          <h3 className="text-3xl mb-6 font-bold text-gray-900">
            Get in Touch
          </h3>

          <div className="space-y-6">

            {/* Email */}
            <div className="flex items-start gap-4 p-4 bg-white rounded-xl border-2 border-gray-200">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#800020]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 sm:w-7 sm:h-7 text-[#800020]" />
              </div>
              <div>
                <p className="font-bold text-gray-900">Email</p>
                <p className="text-gray-700">
                  iitkprimeleadership@gmail.com
                </p>
              </div>
            </div>

            {/* Location */}
            {/* <div className="flex items-start gap-4 p-4 bg-white rounded-xl border-2 border-gray-200">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#800020]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 sm:w-7 sm:h-7 text-[#800020]" />
              </div>
              <div>
                <p className="font-bold text-gray-900">Location</p>
                <p className="text-gray-700">
                  Lucknow, Uttar Pradesh
                </p>
              </div>
            </div> */}

          </div>
        </div>

        {/* Weather */}
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-6">
            Lucknow Weather Averages (21–23 March)
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              {
                date: "21 Mar",
                desc: "Mostly Sunny",
                high: "32°C",
                low: "20°C",
                icon: <Sun className="w-5 h-5 text-yellow-500" />,
              },
              {
                date: "22 Mar",
                desc: "Sunny & Warm",
                high: "33°C",
                low: "19°C",
                icon: <CloudSun className="w-5 h-5 text-yellow-500" />,
              },
              {
                date: "23 Mar",
                desc: "Warm & Dry",
                high: "31°C",
                low: "20°C",
                icon: <Sun className="w-5 h-5 text-yellow-500" />,
              },
            ].map((day, i) => (
              <div
                key={i}
                className="flex flex-col items-center p-4 bg-gray-50 rounded-xl border"
              >
                <span className="text-xs font-bold text-gray-500 mb-2">
                  {day.date}
                </span>
                <div className="mb-2">{day.icon}</div>
                <p className="text-sm font-bold text-gray-900">
                  {day.high} <span className="text-gray-400">/ {day.low}</span>
                </p>
                <p className="text-xs text-gray-500">{day.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
