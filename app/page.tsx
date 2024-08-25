import Contact from "@components/sections/Contact";
import Hero from "@components/hero";
import About from "@components/sections/About";
import Projects from "@components/sections/Projects";
import ScrollToTopButton from "@components/ui/ScrollToTopButton";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center pt-12">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <ScrollToTopButton />
    </main>
  );
}
