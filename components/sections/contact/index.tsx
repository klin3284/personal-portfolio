"use client";

import { contactSchema } from "@schemas/contact";
import { z } from "zod";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { ThemeProvider } from "@mui/material/styles";
import theme from "@styles/themeProvider";
import Icon from "../../icons/index";

const Contact = () => {
  const [, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });
  const btn = document.querySelector("#btn");
  const btnText = document.querySelector("#btnText");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [id]: false,
    }));

    if (!btn || !btnText) {
      return;
    }
    btnText.innerHTML = "Submit";
    btn.classList.remove("active");
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
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitted(true);

      if (!btn || !btnText) {
        return;
      }
      btnText.innerHTML = "Thanks";
      btn.classList.add("active");
    } catch (e) {
      if (e instanceof z.ZodError) {
        const fieldErrors: { [key in "name" | "email" | "message"]: boolean } =
          { name: false, email: false, message: false };
        e.errors.forEach((error) => {
          const fieldName = error.path[0] as "name" | "email" | "message";
          fieldErrors[fieldName] = true;
        });
        setErrors(fieldErrors);
      }
    }
  };

  return (
    <div
      id="contactMe"
      className="flex flex-col rounded-2xl border-2 border-gray-600 pt-8 pb-4 px-12"
    >
      <div className="flex flex-row gap-2 items-start mb-1">
        <Icon name="Mail" size={26} />
        <h2 className="font-semibold text-xl">Get in touch with me!</h2>
      </div>
      <p className="text-gray-400 mb-6 text-lg">
        If you have any questions or just want to say hi, feel free to send me a
        message!
      </p>
      <ThemeProvider theme={theme}>
        <div className="flex w-full flex-col items-center">
          <div className="flex w-full gap-4">
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              className="flex-1"
            />
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              className="flex-1"
            />
          </div>
          <div className="w-full mt-4">
            <TextField
              id="message"
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              error={errors.message}
              className="w-full"
            />
          </div>
          <div className="flex flex-row mt-4 w-full">
            <p className="text-gray-400 italic text-sm">Powered by ResendApi</p>
            <button
              id="btn"
              className="submit-button ml-auto"
              onClick={handleSubmit}
            >
              <p id="btnText">Submit</p>
              <div className="check-box">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                  <path
                    fill="transparent"
                    d="M14.1 27.2l7.1 7.2 16.7-16.8"
                    style={{
                      strokeWidth: 8,
                      stroke: "#fff",
                      strokeDasharray: 34,
                      strokeDashoffset: 34,
                      strokeLinecap: "round",
                    }}
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default Contact;
