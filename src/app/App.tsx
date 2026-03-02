import { Header } from "./components/Header";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Program } from "./components/sections/Program";
import { Speakers } from "./components/sections/Speakers";
import { Contact } from "./components/sections/Contact";
import { Sponsors } from "./components/sections/Sponsors";
import { Footer } from "./components/Footer";
import { OrganizationTeam } from "./components/sections/OrganizationTeam";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Program />

        <Speakers />
        <OrganizationTeam />
        <Sponsors />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
