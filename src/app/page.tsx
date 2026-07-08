import About from "@/components/About";
import Contact from "@/components/Contact";
import Contributions from "@/components/Contributions";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Project from "@/components/Project";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Project />
      <Contributions />
      <Experience />
      <Contact />
    </div>
  );
}
