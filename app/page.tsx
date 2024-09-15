import Contact from "@components/sections/contact";
import Hero from "@components/sections/hero";
import About from "@components/sections/about";
import Projects from "@components/sections/projects";
import Footer from "@components/layout/footer";
import ScrollToTopButton from "@components/layout/scrollToTopButton";
import CursorGradient from "@components/layout/cursorGradient";
import Navbar from "@components/layout/navbar";

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="flex flex-col items-center justify-center pt-12 px-8 2xl:px-0">
        <Hero />
        <About />
        <Projects />
        <ScrollToTopButton />
        <CursorGradient />
      </div>
    </main>
  );
}
