import Contact from "@components/sections/contactMe";
import Hero from "@/components/sections/hero";
import About from "@components/sections/about";
import Projects from "@components/sections/projects";
import ScrollToTopButton from "@components/layout/scrollToTopButton";

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
