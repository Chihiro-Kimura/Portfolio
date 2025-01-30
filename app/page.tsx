import Hero from '@/components/Hero';
import About from '@/components/About';
import CoreValues from '@/components/CoreValues';
import Projects from '@/components/Projects';
import TechStack from '@/components/TechStack';
import Contact from '@/components/Contact';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="core-values">
          <CoreValues />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="tech-stack">
          <TechStack />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </>
  );
}
