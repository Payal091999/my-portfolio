import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

export default function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.user_name.value.trim();
    const email = form.current.user_email.value.trim();
    const message = form.current.message.value.trim();

    // Basic validation
    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    setIsSending(true);

    emailjs
      .sendForm('service_70nvqfd', 'template_wwbo0xa', form.current, 'tcgM5l3eaPs5HHFt2')
      .then(() => {
        alert('Message sent!');
        form.current.reset();
      })
      .catch(() => {
        alert('Failed to send message.');
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section className="py-20 px-4 max-w-xl mx-auto">
      <motion.h2
        className="text-3xl font-bold text-blue-600 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h2>

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="border p-3 rounded-lg"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="border p-3 rounded-lg"
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          className="border p-3 rounded-lg"
        />
        <button
          type="submit"
          disabled={isSending}
          className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
        >
          {isSending ? 'Sending...' : 'Send Message'}
        </button>
      </motion.form>
    </section>
  );
}
