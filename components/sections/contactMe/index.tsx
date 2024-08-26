"use client";

import { contactSchema } from "@schemas/contact";
import { z } from "zod";
import React, { useState } from "react";
import Section from "../index";
import Icon from "../../icons/index";

const ContactText = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const copyToClipboard = () => {
    const emailAddress = process.env.PROFESSIONAL_EMAIL_ADDRESS ?? "";
    if (emailAddress !== "") {
      navigator.clipboard.writeText(emailAddress);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      contactSchema.parse(formData);
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // Sent Email Confirmation
      setFormData({ name: "", email: "", message: "" });
    } catch (e) {
      if (e instanceof z.ZodError) {
        // Handle validation errors
      } else {
        // Handle other errors
      }
    }
  };

  return (
    <div id="contactMe" className="flex flex-col items-center">
      <h2 className="font-bold text-xl mb-4">Get in touch with me!</h2>
      <div className="flex justify-between w-full md:w-3/4 lg:w-1/2 xl:w-3/4">
        <div className="w-full flex-col items-center">
          <textarea
            className="w-full h-12 border-2 border-gray-300 rounded-lg resize-none bg-gray-700 p-2 mb-4"
            placeholder="From"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <textarea
            className="w-full h-12 border-2 border-gray-300 rounded-lg resize-none bg-gray-700 p-2 mb-4"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            className="w-full h-32 border-2 border-gray-300 rounded-lg resize-none bg-gray-700 p-2 mb-4"
            placeholder="Enter your message here"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col items-center ml-4">
          <b
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
            onClick={copyToClipboard}
          >
            <Icon name="Clipboard" size={20} />
          </b>
          <b
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSubmit}
          >
            Send
          </b>
        </div>
      </div>
    </div>
  );
};

const Contact = () => (
  <Section id="contact" title="Contact Me">
    <ContactText />
  </Section>
);

export default Contact;
