import "./App.css";
import Nav from "./components/Nav";
import LandingSection from "./components/LandingSection";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import AchievmentSection from "./components/AchievmentSection";
import ContactSection from "./components/ContactSection";
import TeamSection from "./components/TeamSection";

function App() {
  return (
    <div className="App">
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
  );
}

export default App;
