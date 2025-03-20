import SocialBar from "@components/sections/hero/socialBar";
import React from "react";

const Footer = () => (
  <footer className="mt-14 md:mt-20 mb-32 lg:mb-20 w-full mx-auto max-w-7xl lg:px-10">
    <div className="flex flex-col lg:flex-row justify-between gap-6 items-center">
      <div className="order-2 lg:order-1">
        <p className="text-lg lg:text-xl">© 2024 Kenny Lin.</p>
      </div>
      <div className="order-1 lg:order-2">
        <SocialBar size={32} color="text-gray-600" />
      </div>
    </div>
    <div className="mt-2 text-center text-sm text-gray-500">
      Built with Next.js and Tailwind CSS, deployed with Vercel.
    </div>
  </footer>
);

export default Footer;
