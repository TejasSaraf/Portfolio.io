import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Patent from "./components/Patent";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="main">
        <Navbar />
        <Profile />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Patent />
        <Footer />
      </div>
    </>
  );
}
