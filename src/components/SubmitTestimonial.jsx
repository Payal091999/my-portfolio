import { useState } from 'react';

export default function SubmitTestimonial() {
  const [form, setForm] = useState({ name: '', message: '', email: '' });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const old = JSON.parse(localStorage.getItem('testimonials') || '[]');
    localStorage.setItem('testimonials', JSON.stringify([form, ...old]));
    setSuccess(true);
  };

  return success ? (
    <div className="p-6 text-green-600 text-center">Thanks for your testimonial!</div>
  ) : (
    <form onSubmit={handleSubmit} className="p-6 max-w-md mx-auto space-y-4">
      <input name="name" onChange={handleChange} required placeholder="Your name" className="w-full p-2 border rounded" />
      <input name="email" onChange={handleChange} required placeholder="Your email" className="w-full p-2 border rounded" />
      <textarea name="message" onChange={handleChange} required placeholder="Your message" className="w-full p-2 border rounded" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
}
