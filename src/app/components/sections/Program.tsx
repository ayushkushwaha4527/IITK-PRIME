import { Clock, MapPin, User } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

const nameToSlug = (name: string) =>
  name
    .toLowerCase()
    .replace(/^(prof\.|dr\.|sri|cmde)\s+/i, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

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
          title:
            "Short Talks - Title: Manindra as I know him (10 minutes each)",
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
          trackChair: " Prof. Somitra K Sanadhya (WSAIS/C3i, IITK)",
          speakers: [
            "Prof. Krishnamurty Subramanian – Economic leadership during once in a century crisis",
            "Sri V Umashankar – To be announced",
            "Dr. Bhartendu K Gairola – Need for building self reliance in core technology- Role of IITK",
          ],
          description:
            "Translating Research to Impact. 3 Speakers – 20 minutes each.",
          type: "talk",
          location: "Main Hall",
        },
        {
          time: "10:30 AM – 11:30 AM",
          title: "Short Talks (12 minutes each)",
          speakers: [
            "Dr. Prem Chand – Applying Translational Leadership to Solve India's Hard Problems with Personal Real-Life Examples",
            "Dr. Gulshan Rai – Evolving technological complexities impact on institutions like IITs",
            "Dr. Tanima Hajra – Story of C3iHub: Building Indigenous Cybersecurity Capability",
            "Prof. Nisheeth Srivastava – Scaling agility: notes from the CDIS trenches",
            "Sri Anurag Singh – From Lab Excellence to Societal Impact",
          ],
          type: "talk",
          location: "Main Hall",
        },
        {
          time: "11:30 AM – 12:00 PM",
          title: "Tea Break",
          type: "break",
          location: "Foyer",
        },
        {
          time: "12:00 PM – 1:00 PM",
          title: "Afternoon Session – Institution Building",
          trackChair: "Prof. Jitendra K Bera (CHM/DoFA, IITK)",
          speakers: [
            "Prof. Vijay Raghavan – Birthing, Building and Breaking Institutions: Lessons From the Past for the Present and the Future",
            // "Prof. Kamakoti – Education for Viksit Bharat 2047",
            "Prof. Vinod K Singh – The Craft of Academic Leadership",
          ],
          description:
            "Institutional & Administrative Leadership. 2 Speakers – 30 minutes each.",
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
          title: "Talks",
          speakers: [
            "Prof. Ajit Chaturvedi – To be announced",
            "Prof. Surender Baswana – The Art of Listening",
          ],
          description: "2 Speakers – 30 minutes each.",
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
          title: "Festschrift Event for Prof. Manindra Agrawal – Reminiscences",
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

  const getCardStyle = (type: string) => {
    switch (type) {
      case "talk":
        return {
          card: "bg-white border border-gray-100 border-l-4 border-l-[#800020] shadow-sm hover:shadow-md",
          badge: "bg-white text-gray-700 border border-gray-300",
          dot: "bg-[#800020]",
          titleColor: "text-gray-900",
          trackChairBg: "bg-[#800020]/5 border-b border-[#800020]/10",
          speakerRowBg: "hover:bg-gray-50",
          speakerIndex: "bg-[#800020]/10 text-[#800020]",
        };
      case "break":
        return {
          card: "bg-rose-50 border border-rose-100 border-l-4 border-l-[#ff9999] shadow-sm hover:shadow-md",
          badge: "bg-[#800020] text-white",
          dot: "bg-[#ff9999]",
          titleColor: "text-[#800020]",
          trackChairBg: "bg-[#800020]/5 border-b border-[#800020]/10",
          speakerRowBg: "hover:bg-rose-100/40",
          speakerIndex: "bg-[#800020]/10 text-[#800020]",
        };
      default:
        return {
          card: "bg-gray-50 border border-gray-200 border-l-4 border-l-gray-300 shadow-sm hover:shadow-md",
          badge: "bg-gray-700 text-white",
          dot: "bg-gray-300",
          titleColor: "text-gray-800",
          trackChairBg: "bg-gray-100 border-b border-gray-200",
          speakerRowBg: "hover:bg-gray-100",
          speakerIndex: "bg-gray-200 text-gray-600",
        };
    }
  };

  return (
    <section id="program" className="bg-gray-50">
      {/* ── Header ── */}
      <div className="bg-gradient-to-br from-[#800020] via-black to-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl mb-4 font-bold">
            Program & Schedule
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl leading-relaxed">
            Two days packed with discussions, panels, and networking.
          </p>
        </div>
      </div>

      <div className="py-10">
        {/* ── Legend ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="flex flex-wrap gap-6 justify-center bg-white p-5 rounded-2xl shadow-md border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-[#800020] rounded-sm" />
              <span className="font-semibold text-gray-900 text-sm">Talk</span>
            </div>
            <div className="w-px h-5 bg-gray-200 self-center hidden sm:block" />
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-[#ff9999] rounded-sm" />
              <span className="font-semibold text-[#800020] text-sm">
                Break
              </span>
            </div>
            <div className="w-px h-5 bg-gray-200 self-center hidden sm:block" />
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 bg-gray-300 rounded-sm" />
              <span className="font-semibold text-gray-900 text-sm">
                General
              </span>
            </div>
          </div>
        </div>

        {/* ── Schedule ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="day1" className="w-full">
            {/* Tab switcher — segmented control */}
            <TabsList className="flex w-fit mx-auto mb-6 bg-white border border-gray-300 rounded-lg shadow-sm overflow-hidden p-0 h-auto gap-0">
              <TabsTrigger
                value="day1"
                className="px-12 py-2.5 text-sm font-bold transition-all duration-200 rounded-none border-r border-gray-300 data-[state=active]:bg-[#800020] data-[state=active]:text-white text-gray-600 hover:bg-gray-50"
              >
                Day 1
              </TabsTrigger>
              <TabsTrigger
                value="day2"
                className="px-12 py-2.5 text-sm font-bold transition-all duration-200 rounded-none data-[state=active]:bg-[#800020] data-[state=active]:text-white text-gray-600 hover:bg-gray-50"
              >
                Day 2
              </TabsTrigger>
            </TabsList>

            {days.map((day, dayIndex) => (
              <TabsContent
                key={dayIndex}
                value={`day${dayIndex + 1}`}
                className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
              >
                {/* Day heading strip */}
                <div className="bg-gradient-to-r from-[#800020]/10 to-transparent border-b border-[#800020]/10 px-6 py-5 text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {day.day}
                  </h3>
                  <p className="text-base text-gray-500 mt-0.5">
                    {day.date}, 2026
                  </p>
                </div>

                {/* Timeline */}
                <div className="relative p-6">
                  <div className="absolute left-11 top-6 bottom-6 w-0.5 bg-gradient-to-b from-[#800020]/40 via-gray-200 to-gray-100 hidden lg:block" />

                  <div className="space-y-4">
                    {day.schedule.map((session, sessionIndex) => {
                      const styles = getCardStyle(session.type);
                      const hasSpeakers =
                        session.speakers && session.speakers.length > 0;
                      const hasTrackChair = !!session.trackChair;
                      const hasDescription = !!session.description;

                      return (
                        <div key={sessionIndex} className="relative lg:pl-14">
                          {/* Timeline dot */}
                          <div
                            className={`absolute left-[14px] top-6 w-3.5 h-3.5 rounded-full border-2 border-white shadow-md hidden lg:block ${styles.dot}`}
                          />

                          {/* ── Session Card ── */}
                          <div
                            className={`${styles.card} rounded-2xl transition-shadow duration-200 overflow-hidden`}
                          >
                            {/* Card Header */}
                            <div className="px-5 pt-4 pb-3 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                              <div className="flex-1 min-w-0">
                                {/* Time & Location */}
                                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-2.5">
                                  <div className="flex items-center gap-1.5 text-[#800020]">
                                    <Clock className="w-4 h-4 flex-shrink-0" />
                                    <span className="font-bold text-[13px]">
                                      {session.time}
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-1 text-gray-400">
                                    <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                                    <span className="text-sm font-medium">
                                      {session.location}
                                    </span>
                                  </div>
                                </div>

                                {/* Session Title */}
                                <h4
                                  className={`text-lg md:text-xl font-bold leading-snug ${styles.titleColor}`}
                                >
                                  {session.title}
                                </h4>
                              </div>

                              {/* Type Badge */}
                              <div className="flex-shrink-0 self-start">
                                <span
                                  className={`inline-block px-3.5 py-1 rounded-full text-xs font-bold capitalize tracking-wide ${styles.badge}`}
                                >
                                  {session.type}
                                </span>
                              </div>
                            </div>

                            {/* ── Sub-section: Track Chair ── */}
                            {hasTrackChair && (
                              <div
                                className={`mx-5 mb-0 rounded-t-lg ${styles.trackChairBg} px-4 py-2.5 flex items-center gap-2`}
                              >
                                <User className="w-3.5 h-3.5 text-[#800020] flex-shrink-0" />
                                <span className="text-xs font-bold text-[#800020] uppercase tracking-widest mr-2">
                                  Track Chair
                                </span>
                                <span className="text-sm font-semibold text-gray-700">
                                  {session.trackChair}
                                </span>
                              </div>
                            )}

                            {/* ── Sub-section: Speakers ── */}
                            {hasSpeakers && (
                              <div
                                className={`mx-5 mb-0 border border-gray-100 rounded-b-lg ${hasTrackChair ? "rounded-t-none border-t-0" : "rounded-t-lg"} overflow-hidden`}
                              >
                                <div className="bg-gray-50 px-4 py-2 border-b border-gray-100">
                                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                                    Speakers
                                  </span>
                                </div>

                                {session.speakers!.map((speaker, i) => {
                                  const [name, ...talkParts] =
                                    speaker.split(" – ");
                                  const talk = talkParts.join(" – ");
                                  return (
                                    <div
                                      key={i}
                                      className={`flex items-start gap-3 px-4 py-2.5 ${styles.speakerRowBg} transition-colors ${
                                        i < session.speakers!.length - 1
                                          ? "border-b border-gray-100"
                                          : ""
                                      }`}
                                    >
                                      <span
                                        className={`flex-shrink-0 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center mt-0.5 ${styles.speakerIndex}`}
                                      >
                                        {i + 1}
                                      </span>
                                      <div className="flex-1 min-w-0">
                                        <a
                                          href={`#speaker-${nameToSlug(name)}`}
                                          onClick={(e) => {
                                            e.preventDefault();
                                            const el = document.getElementById(
                                              `speaker-${nameToSlug(name)}`,
                                            );
                                            if (el) {
                                              el.scrollIntoView({
                                                behavior: "smooth",
                                                block: "center",
                                              });
                                              el.classList.add(
                                                "ring-2",
                                                "ring-[#800020]",
                                                "ring-offset-2",
                                              );
                                              setTimeout(
                                                () =>
                                                  el.classList.remove(
                                                    "ring-2",
                                                    "ring-[#800020]",
                                                    "ring-offset-2",
                                                  ),
                                                2000,
                                              );
                                            }
                                          }}
                                          className="font-semibold text-sm text-gray-900 hover:text-[#800020] hover:underline underline-offset-2 cursor-pointer transition-colors duration-150"
                                        >
                                          {name}
                                        </a>
                                        {talk && (
                                          <>
                                            <span className="text-gray-300 mx-1">
                                              —
                                            </span>
                                            <span className="text-sm text-gray-500 italic">
                                              {talk}
                                            </span>
                                          </>
                                        )}
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            )}

                            {/* ── Description footer ── */}
                            {hasDescription && (
                              <div className="mx-5 mt-3 mb-5 flex items-start gap-2">
                                <div className="mt-1 w-1 h-1 rounded-full bg-[#800020]/40 flex-shrink-0" />
                                <p className="text-sm text-gray-500 italic leading-relaxed">
                                  {session.description}
                                </p>
                              </div>
                            )}

                            {!hasSpeakers &&
                              !hasTrackChair &&
                              !hasDescription && <div className="pb-2" />}
                            {(hasSpeakers || hasTrackChair) && (
                              <div className="pb-4" />
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
