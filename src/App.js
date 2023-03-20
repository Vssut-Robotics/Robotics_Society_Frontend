import "./App.css";
import Nav from "./components/Nav";
import LandingSection from "./components/LandingSection";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import AchievmentSection from "./components/AchievmentSection";
import ContactSection from "./components/ContactSection";
import TeamSection from "./components/TeamSection";
import Particle from "./components/Particle";



function App() {
  return (
    <div className="App">
      <div className="div1">
        <Particle />
      </div>
      <div className="div2">
        <div className="navbar">
          <Nav />
        </div>
        <div className="section">
          <LandingSection />
          <AboutSection />
          <ProjectSection />
          <AchievmentSection />
          <TeamSection />
          <ContactSection />
        </div>
      </div>
    </div>
  );
}

export default App;
