import Navbar from "./components/Navbar";
import Particle from "./components/particle.jsx";
import HomeSection from "./components/HomeSection";
import IntroSection from "./components/IntroSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="relative isolate min-h-screen flex flex-col font-poppins bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      <Particle />
      <Navbar />
      <main className="relative z-10 flex-1 pt-20 md:pt-24 p-4 md:p-10 space-y-16 w-full max-w-7xl mx-auto">
        <HomeSection />
        <IntroSection />
        <SkillsSection />
        <ProjectsSection />
        {/* <ContactSection /> */}
        <Footer />
      </main>
    </div>
  );
}

export default App;
