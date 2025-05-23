import React from "react";

export default function Contact() {
  return (
    <div className="p-10 text-center">
      <h2 className="text-3xl font-bold text-blue-600">Contact Me</h2>
      <p className="mt-4 text-gray-700">Feel free to reach out using the form below:</p>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="flex flex-col gap-4 mt-6 items-center"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="p-2 border rounded-md w-1/2"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="p-2 border rounded-md w-1/2"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          className="p-2 border rounded-md w-1/2"
        ></textarea>
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
        >
          ✉️ Send Message
        </button>
      </form>
    </div>
  );
}
