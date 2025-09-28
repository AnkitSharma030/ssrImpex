'use client'
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  console.log("Formdata is: ", formData);
  

  // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you can call an API to send the message (backend integration)
    setFormData({ name: "", email: "", message: "" }); // reset form
  };

  return (
    <section className="py-16 bg-gradient-to-r from-zinc-900 to-zinc-600 text-white">
      <div className="container mx-auto px-4 items-center">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="flex flex-col ">
          {/* Contact Info */}
          {/* <div className="md:w-1/2 mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
            <p className="mb-6">
              We&apos;re here to answer any questions you may have about our
              services.
            </p>
            <div className="mb-4 flex items-center">
              <svg
                className="w-5 h-5 mr-3 cursor-pointer"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Ludhiana</span>
            </div>
            <div className="mb-4 flex items-center">
              <svg
                className="w-5 h-5 mr-3 cursor-pointer"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <svg
                className="w-5 h-5 mr-3 cursor-pointer"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>info@sssrOverseas.com</span>
            </div>
          </div> */}

          {/* Contact Form */}
          <div className="md:w-1/2 md:pl-12">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-2 rounded bg-white text-black font-semibold"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-2 rounded bg-white text-black font-semibold"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-2 rounded bg-white text-black font-semibold"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-white text-zinc-900 px-6 py-2 rounded font-bold hover:bg-blue-100 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
