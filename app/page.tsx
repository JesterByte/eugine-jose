import Hero from "./sections/Hero";
import Highlights from "./sections/Highlights";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Recognition from "./sections/Recognition";

export default function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <About />
      <Projects />
      <Experience />
      <Recognition />
      <Skills />
      <Contact />
    </>
  );
}
