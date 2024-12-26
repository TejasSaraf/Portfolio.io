import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

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
      </div>
    </>
  );
}
