import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <TechStack />
      <Testimonials />
      <Contact />
    </main>
  );
}