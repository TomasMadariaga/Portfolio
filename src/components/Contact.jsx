import { useState, useRef } from "react";
import { SubmitButton } from "./Buttons";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const send_email = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "tomas_service",
        "tomas_template",
        form.current,
        "1H8C7Lp67IQImgSJu"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="relative p-5 rounded-lg max-w-96 m-auto w-full flex flex-col gap-5">
      <h2 className="font-bold text-2xl text-military-green text-center">Contact Me</h2>
        <form ref={form} onSubmit={send_email}>
          <div className="mb-5 text-gray-700">
            <label htmlFor="name" className="block mb-1 text-white font-bold">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border-none rounded-md bg-gray-300"
            />
          </div>
          <div className="mb-5 text-gray-700">
            <label htmlFor="email" className="block mb-1 text-white font-bold">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border-none rounded-md bg-gray-300"
            />
          </div>
          <div className="mb-5 text-gray-700">
            <label
              htmlFor="message"
              className="block mb-1 text-white font-bold"
            >
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border-none rounded-md h-24 bg-gray-300"
            />
          </div>
          <a
            className="no-underline"
            type="submit"
            href="mailTo:tomasmadariaga360@gmail.com"
          >
            <SubmitButton />
          </a>
        </form>
    </div>
  );
};
