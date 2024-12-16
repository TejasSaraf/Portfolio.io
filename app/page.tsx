import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Experience from "./components/Experience";

export default function Home() {
  return (
    <>
      <div className="main">
        <Navbar />
        <Profile />
        <About />
        <Experience />
      </div>
    </>
  );
}
