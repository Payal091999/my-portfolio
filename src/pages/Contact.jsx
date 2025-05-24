// src/pages/Contact.jsx
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.user_name.value.trim();
    const email = form.current.user_email.value.trim();
    const subject = form.current.subject.value.trim();
    const message = form.current.message.value.trim();

    // Basic validation
    if (!name || !email || !subject || !message) {
      toast.error('❌ Please fill in all required fields.');
      return;
    }

    setIsSending(true);

    emailjs
      .sendForm('service_70nvqfd', 'template_wwbo0xa', form.current, 'tcgM5l3eaPs5HHFt2')
      .then(() => {
        toast.success('✅ Message sent successfully!');
        form.current.reset();

        // Google Analytics event tracking
        if (window.gtag) {
          window.gtag('event', 'contact_form_submission', {
            name,
            email,
            subject,
            event_category: 'Contact',
            event_label: 'Contact Page'
          });
        }
      })
      .catch(() => {
        toast.error('❌ Failed to send message.');
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
        <input
          type="text"
          name="user_phone"
          placeholder="Your Phone Number"
          className="border p-3 rounded-lg"
        />
        <input
          type="text"
          name="user_company"
          placeholder="Company or Organization"
          className="border p-3 rounded-lg"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
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

        {/* ✅ Hidden date field with formatted timestamp */}
        <input
          type="hidden"
          name="date"
          value={new Date().toLocaleString('en-IN', {
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
          })}
        />

        <button
          type="submit"
          disabled={isSending}
          className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
        >
          {isSending ? 'Sending...' : 'Send Message'}
        </button>
      </motion.form>

      {/* Toast Container for notifications */}
      <ToastContainer position="top-center" />
    </section>
  );
}
