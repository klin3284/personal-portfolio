"use client";

import React from "react";
import Section from "@components/sections";
import ContactForm from "./contactForm";
import LinkGrid from "./linkGrid";

const Contact = () => (
  <Section id="contactMe">
    <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 md:gap-8">
      <div className="w-11/12 lg:w-7/12 lg:order-2">
        <ContactForm />
      </div>
      <div className="w-11/12 lg:w-5/12 lg:order-1">
        <LinkGrid />
      </div>
    </div>
  </Section>
);

export default Contact;
