import Header from "./components/Header";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <section>
      <Header />
      <Navbar/>
      <About />
      <Technologies />
      <Projects />
      <Contact/>
      <Footer/>
    </section>
  );
}
