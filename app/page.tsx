import Contact from "@components/sections/contact";
import Hero from "@components/sections/hero";
import About from "@components/sections/about";
import Projects from "@components/sections/projects";
import Footer from "@components/layout/footer";
import ScrollToTopButton from "@components/layout/scrollToTopButton";
import CursorGradient from "@components/layout/cursorGradient";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center pt-12 px-8 2xl:px-0">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <ScrollToTopButton />
      <CursorGradient />
    </main>
  );
}
