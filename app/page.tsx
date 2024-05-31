import Image from "next/image";
import Hero from "@components/Hero";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center overflow-hidden mx-auto sm:px-10 px-5 w-screen h-screen">
      <Hero/>
    </main>
  );
}
