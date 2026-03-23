import { ImageWithFallback } from "../figma/ImageWithFallback";
import { Globe } from "lucide-react";

import thomas from "../../assets/images/thomas.jpeg";
import neeraj from "../../assets/images/neeraj.jpg";
import ramprasad from "../../assets/images/ramprasad.jpeg";
import madhvan from "../../assets/images/madhavan.jpg";
import somnathsir from "../../assets/images/somnathsir.jpeg";
import vinay from "../../assets/images/vinay.jpg";
import meenamahajan from "../../assets/images/meenamahajan.jpeg";
import varvind from "../../assets/images/varvind.jpeg";
import radhakrishna from "../../assets/images/radhakrishna.jpeg";
import subramanian from "../../assets/images/subramanian.jpeg";
// import umashankar from "../../assets/images/umashankar.jpeg";
//import rajatmoona from "../../assets/images/rajatmoona.jpeg";
import premchand from "../../assets/images/premchand.jpeg";
import gulshanrai from "../../assets/images/gulshanrai.jpeg";
import tanimahajra from "../../assets/images/tanimahajra.jpeg";
import nisheeth from "../../assets/images/nisitsir.jpeg";
import anuragsingh from "../../assets/images/anuragsingh.png";
import vijayraghvan from "../../assets/images/vijayraghvan.png";
// import kamakoti from "../../assets/images/kamakoti.jpeg";
import vinodk from "../../assets/images/vinodk.jpeg";
import bkgairola from "../../assets/images/bkgairola.jpg";
import surendraji from "../../assets/images/surendraji.jpeg";
import ajitji from "../../assets/images/ajitji.jpeg";


const nameToSlug = (name: string) =>
  name
    .toLowerCase()
    .replace(/^(prof\.|dr\.|sri|cmde)\s+/i, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export function Speakers() {
  const speakers = [
    {
      name: "Prof. Thomas Thierauf",
      title: "Professor",
      company: "ULM University",
      image: thomas,
      website: "https://image.informatik.htw-aalen.de/~thierauf/",
    },
    {
      name: "Dr. Neeraj Kayal",
      title: "Researcher",
      company: "Microsoft Research India",
      image: neeraj,
      website: "https://www.microsoft.com/en-us/research/people/neeraka/",
    },
    {
      name: "Prof. Ramprasad Saptharishi",
      title: "Faculty",
      company: "TIFR Mumbai",
      image: ramprasad,
      website: "https://www.tcs.tifr.res.in/~ramprasad/pubs/",
    },
    {
      name: "Prof. Madhavan Mukund",
      title: "Director",
      company: "Chennai Mathematical Institute",
      image: madhvan,
      website: "https://www.cmi.ac.in/~madhavan/",
    },
    {
      name: "Prof. Somenath Biswas",
      title: "Professor (Retd.)",
      company: "IIT Kanpur",
      image: somnathsir,
      website: "https://www.cse.iitk.ac.in/users/sb/",
    },
    {
      name: "Prof. V. Vinay",
      title: "Chairman",
      company: "Jed-i Technologies",
      image: vinay,
      website: "https://in.linkedin.com/in/ainvvy",
    },
    {
      name: "Prof. Meena Mahajan",
      title: "Professor",
      company: "Institute Of Mathematical Sciences",
      image: meenamahajan,
      website: "https://en.wikipedia.org/wiki/Meena_Mahajan",
    },
    {
      name: "Prof. V. Arvind",
      title: "Professor",
      company: "Institute Of Mathematical Sciences",
      image: varvind,
      website: "https://www.imsc.res.in/~arvind/",
    },
    {
      name: "Prof. Jaikumar Radhakrishnan",
      title: "Professor",
      company: "ICTS-TIFR",
      image: radhakrishna,
      website: "https://www.icts.res.in/people/jaikumar-radhakrishnan1",
    },
    {
      name: "Prof. Krishnamurty Subramanian",
      title: "Professor of Finance",
      company: "ISB",
      image: subramanian,
      website:
        "https://www.isb.edu/faculty-and-research/faculty-directory/krishnamurthy-subramanian",
    },
    // {
    //   name: "Sri V. Umashankar",
    //   title: "Secretary",
    //   company: "MoRTH, GoI",
    //   image: umashankar,
    //   website: "https://thesecretariat.in/bureautrack/v-umashankar-01hy021301",
    // },
    // {
    //   name: "Prof. Rajat Moona",
    //   title: "Director",
    //   company: "IIT Gandhinagar",
    //   image: rajatmoona,
    //   website: "https://iitgn.ac.in/about/director",
    // },
    {
      name: "Dr. Prem Chand",
      title: "Co-Founder",
      company: "SecurWeave Research Labs Pvt Ltd.",
      image: premchand,
      website: "https://in.linkedin.com/in/dr-prem-chand-47669960",
    },
    {
      name: "Dr. Bhartendu K. Gairola",
      title: "Ex Director-General",
      company: "NIC",
      image: bkgairola,
      website: "#",
    },
    {
      name: "Dr. Gulshan Rai",
      title: "Cyber Security Expert",
      company: "Former NCSC",
      image: gulshanrai,
      website: "https://www.vifindia.org/author/Dr-Gulshan-Rai",
    },
    {
      name: "Dr. Tanima Hajra",
      title: "C3iHub",
      company: "IIT Kanpur",
      image: tanimahajra,
      website: "https://in.linkedin.com/in/tanima-hajra-11a7144b",
    },
    {
      name: "Prof. Nisheeth Srivastava",
      title: "Professor",
      company: "IIT Kanpur",
      image: nisheeth,
      website: "https://iitk.ac.in/nisheeth-srivastava",
    },
    {
      name: "Sri Anurag Singh",
      title: "CIO",
      company: "FIRST IIT Kanpur",
      image: anuragsingh,
      website: "https://www.linkedin.com/in/anurag-singh-8a1101/",
    },
    {
      name: "Prof. Vijay Raghavan",
      title: "Professor",
      company: "Former PSA",
      image: vijayraghvan,
      website: "https://www.ncbs.res.in/faculty/vijay",
    },
    // { name: "Prof. Kamakoti", title: "Director", company: "IIT Madras", image: kamakoti, website: "https://wsai.iitm.ac.in/management/kamakoti-veezhinathan" },
    {
      name: "Prof. Vinod K. Singh",
      title: "Institute Chair Professor",
      company: "IIT Kanpur",
      image: vinodk,
      website: "https://home.iitk.ac.in/~vinodks/",
    },
    {
      name: "Prof. Surender Baswana",
      title: "Professor",
      company: "IIT Kanpur",
      image: surendraji,
      website: "https://www.cse.iitk.ac.in/users/sbaswana/",
    },
    {
      name: "Prof. Ajit Chaturvedi",
      title: "Professor",
      company: "IIT Kanpur",
      image: ajitji,
      website: "https://www.iitk.ac.in/ajit-kumar-chaturvedi",
    },
  ];

  return (
    <section id="speakers" className="py-20 bg-white">
      <div className="bg-gradient-to-br from-[#800020] via-black to-black text-white py-16 mb-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Speakers</h2>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              id={`speaker-${nameToSlug(speaker.name)}`}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#800020] p-6 text-center hover:-translate-y-2 scroll-mt-24"
            >
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white shadow-lg mb-5">
                <ImageWithFallback
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <h3 className="font-bold text-gray-900 group-hover:text-[#800020]">
                {speaker.name}
              </h3>

              <p className="text-xs font-semibold text-[#800020] uppercase mt-1">
                {speaker.title}
              </p>

              <p className="text-gray-600 text-xs mt-2">{speaker.company}</p>

              {speaker.website !== "#" && (
                <a
                  href={speaker.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-xs text-gray-700 hover:text-[#800020]"
                >
                  <Globe className="w-4 h-4" />
                  View Profile
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
