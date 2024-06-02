
import Contact from "@components/sections/Contact";
import Hero from "@components/Hero";
import About from "@components/sections/About";
import Experiences from "@components/sections/Experiences";
import Projects from "@components/sections/Projects";
import Skills from "@components/sections/Skills";
import SocialBar from "@/components/SocialBar";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center pt-12">
      <Hero />
      <div className="w-30">
        <SocialBar />
      </div>
      <About />
      <Skills />
      <Experiences />
      <Projects />
      <Contact />
    </main>
  );
}
