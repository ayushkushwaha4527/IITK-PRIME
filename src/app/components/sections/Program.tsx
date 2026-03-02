import { Clock } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export function Program() {
  const days = [
    {
      date: "21st March",
      day: "Day 1",
      schedule: [
        {
          time: "2:00 PM onward",
          title: "Guest Arrival & Check-in",
          type: "general",
          location: "Hotel Lobby",
        },
        {
          time: "4:00 PM – 4:45 PM",
          title: "Registration Desk & Welcome Tea",
          type: "break",
          location: "Foyer",
        },
        {
          time: "4:45 PM – 5:00 PM",
          title: "Welcome Note / Context Setting",
          type: "general",
          location: "Main Hall",
        },
        {
          time: "5:00 PM – 6:00 PM",
          title: "Inaugural Session – Research Leadership",
          trackChair: "Prof. Chandan Saha (CSA, IISc)",
          speakers: [
            "Prof. Thomas Thierauf – Isomorphism Problems and Conjectures in Computational Complexity",
            "Dr. Neeraj Kayal – PRIMES is in P",
            "Prof. Ramprasad Saptharishi – Derandomization and Lower bounds in Algebraic Complexity",
            "Prof. Madhavan Mukund – Hybrid Systems",
          ],
          description:
            "Research Excellence with origins in IIT Kanpur. 4 Speakers – 15 min each.",
          type: "talk",
          location: "Main Hall",
        },

        {
          time: "6:00 PM – 7:00 PM",
          title: "Short Talks (10 minutes each)",
          speakers: [
            "Prof. Somenath Biswas",
            "Prof. V Vinay",
            "Prof. Meena Mahajan",
            "Prof. V Arvind",
            "Prof. Jaikumar Radhakrishnan",
          ],
          type: "talk",
          location: "Main Hall",
        },

        {
          time: "7:00 PM onward",
          title: "Mixer and Informal Networking",
          type: "general",
          location: "Foyer",
        },
        {
          time: "7:30 PM onward",
          title: "Welcome Dinner",
          type: "break",
          location: "Foyer",
        },
      ],
    },
    {
      date: "22nd March",
      day: "Day 2",
      schedule: [
        {
          time: "9:00 AM onward",
          title: "Registration Desk & Seating",
          type: "general",
          location: "Main Hall",
        },
        {
          time: "9:15 AM – 9:30 AM",
          title: "Welcome Note / Context Setting",
          type: "general",
          location: "Main Hall",
        },
        {
          time: "9:30 AM – 10:30 AM",
          title: "Morning Session – Translational Leadership",
          trackChair: "Track Chair: Prof. Somitra K Sanadhya (WSAIS/C3i, IITK)",
          speakers: [
            "Prof. Krishnamurty Subramanian – Economic leadership during once in a century crisis",
            "Sri V Umashankar – To be announced",
            "Prof. Rajat Moona – SCOSTA: An experience of translational work",
          ],
          description:
            "Translating Research to Impact. 3 Speakers – 20 minutes each.",
          type: "talk",
          location: "Main Hall",
        },

        {
          time: "10:30 AM – 11:30 AM",
          title: "Short Talks (10 minute each)",
          type: "talk",
          location: "Main Hall",
        },
        {
          time: "10:30 AM – 11:30 AM",
          title: "Short Talks (10 minute each)",
          speakers: [
            "Cmde Dr. Prem Chand – Applying Translational Leadership to Solve India's Hard Problems with Personal Real-Life Examples",
            "Dr. Bhartendu K Gairola – Need for building self reliance in core technology- Role of IITK",
            "Dr. Gulshan Rai – Evolving technological complexities impact on institutions like IITs",
            "Dr. Tanima Hajra – Story of C3iHub: Building Indigenous Cybersecurity Capability",
            "Prof. Nisheeth Srivastava – Scaling agility: notes from the CDIS trenches",
            "Sri Anurag Singh – From Lab Excellence to Societal Impact",
          ],
          type: "talk",
          location: "Main Hall",
        },

        {
          time: "12:00 PM – 1:00 PM",
          title: "Afternoon Session – Institution Building",
          trackChair: "Prof. Jitendra K Bera (CHM/DoFA, IITK)",
          speakers: [
            "Prof. Vijay Raghavan – Birthing, Building and Breaking Institutions: Lessons From the Past for the Present and the Future",
            "Prof. Kamakoti – Education for Viksit Bharat 2047",
            "Prof. Vinod K Singh – The Craft of Academic Leadership",
          ],
          description:
            "Institutional & Administrative Leadership. 3 Speakers – 20 minutes each.",
          type: "talk",
          location: "Main Hall",
        },

        {
          time: "1:15 PM – 2:15 PM",
          title: "Lunch",
          type: "break",
          location: "Dining Area",
        },
        {
          time: "2:30 PM – 3:30 PM",
          title: "Short Talks (10 minute each,Details - to be declared)",
          type: "talk",
          location: "Main Hall",
        },
        {
          time: "3:40 PM – 4:30 PM",
          title: "Fireside Chat with Prof. Manindra Agrawal",
          type: "talk",
          location: "Main Hall",
        },
        {
          time: "4:30 PM – 5:00 PM",
          title: "Tea Break",
          type: "break",
          location: "Foyer",
        },
        {
          time: "5:00 PM – 6:50 PM",
          title: "Festschrift Event – Reminiscences",
          type: "general",
          location: "Main Hall",
        },
        {
          time: "6:50 PM – 7:25 PM",
          title: "Prof. Manindra Agrawal's Felicitation",
          type: "general",
          location: "Main Hall",
        },
        {
          time: "7:25 PM – 7:30 PM",
          title: "Vote of Thanks & Closing",
          type: "general",
          location: "Main Hall",
        },
        {
          time: "7:30 PM onward",
          title: "Dinner",
          type: "break",
          location: "Dining Area",
        },
      ],
    },
  ];

 const getSessionColor = (type: string) => {
  switch (type) {
    case "talk":
      return "bg-[#800020]/5 border-l-4 border-[#800020]";
    case "break":
      return "bg-gray-50 border-l-4 border-[#ff9999]"; // lighter maroon
    default:
      return "bg-gray-50 border-l-4 border-gray-300";
  }
};



  return (
    <section id="program" className="py-20 bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#800020] via-black to-black text-white py-16 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl mb-6 font-bold">
            Program & Schedule
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl leading-relaxed">
            Two days packed with discussions, panels, and networking.
          </p>
        </div>
      </div>

      {/* Legend */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap gap-6 justify-center bg-white p-6 rounded-xl shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-[#800020] rounded"></div>
            <span className="font-semibold text-gray-900">Talk</span>
          </div>
          <div className="flex items-center gap-3">
            {/* Box color changed to Maroon */}
           <div className="w-4 h-4 bg-[#ff9999] rounded"></div>

            <span className="font-semibold text-[#800020]">Break</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-gray-300 rounded"></div>
            <span className="font-semibold text-gray-900">General</span>
          </div>
        </div>
      </div>

      {/* Schedule */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Tabs defaultValue="day1" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12 bg-gray-100 p-1 rounded-xl shadow-inner">
            <TabsTrigger
              value="day1"
              className="py-3 rounded-lg text-base font-semibold transition-all duration-300 data-[state=active]:bg-[#800020] data-[state=active]:text-white data-[state=active]:shadow-md text-gray-700 hover:bg-white"
            >
              Day 1
            </TabsTrigger>

            <TabsTrigger
              value="day2"
              className="py-3 rounded-lg text-base font-semibold transition-all duration-300 data-[state=active]:bg-[#800020] data-[state=active]:text-white data-[state=active]:shadow-md text-gray-700 hover:bg-white"
            >
              Day 2
            </TabsTrigger>
          </TabsList>

          {days.map((day, index) => (
            <TabsContent key={index} value={`day${index + 1}`}>
              <div className="mb-8 text-center">
                <h3 className="text-3xl md:text-4xl mb-2 font-bold text-gray-900">
                  {day.day}
                </h3>
                <p className="text-xl text-gray-600">{day.date}, 2026</p>
              </div>

              <div className="space-y-4">
                {day.schedule.map((session, sessionIndex) => (
                  <div
                    key={sessionIndex}
                    className={`${getSessionColor(
                      session.type,
                    )} p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow`}
                  >
                    <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 text-gray-700 mb-3">
                          <Clock className="w-5 h-5 text-[#800020]" />
                          {/* Text color changed to Maroon for Break */}
                          <span
                            className={`font-bold ${session.type === "break" ? "text-[#800020]" : "text-gray-900"}`}
                          >
                            {session.time}
                          </span>
                          <span className="text-gray-400">•</span>
                          <span
                            className={`font-semibold ${session.type === "break" ? "text-[#800020]" : ""}`}
                          >
                            {session.location}
                          </span>
                        </div>
                        {/* Title color changed to Maroon for Break */}
                        <h4
                          className={`text-xl md:text-2xl font-bold ${session.type === "break" ? "text-[#800020]" : "text-gray-900"}`}
                        >
                          {session.title}
                        </h4>
                        {session.trackChair && (
                          <p className="text-gray-800 mt-2 font-semibold">
                            Track Chair: {session.trackChair}
                          </p>
                        )}

                        {session.speakers && (
                          <div className="mt-3">
                            <p className="font-semibold text-gray-900 mb-1">
                              Speakers:
                            </p>
                            <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                              {session.speakers.map((prof, i) => (
                                <li key={i}>{prof}</li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {session.description && (
                          <p className="text-gray-600 mt-3 leading-relaxed">
                            {session.description}
                          </p>
                        )}
                      </div>

                      <div className="flex-shrink-0 self-start">
                        {/* Break badge now Maroon with white text */}
                        <span
                          className={`inline-block px-4 py-2 rounded-full text-sm font-semibold capitalize shadow-sm ${session.type === "break" ? "bg-[#800020] text-white" : "bg-white text-gray-900"}`}
                        >
                          {session.type}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
