import { useState, useEffect } from 'react';
import emailjs from 'emailjs-com';

export default function AdminPanel() {
  const [email, setEmail] = useState('');
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('testimonials') || '[]');
    setTestimonials(data);
  }, []);

  const sendInvite = () => {
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
      to_email: email,
      submit_url: 'http://localhost:5173/submit', // or your deployed URL
    }, 'YOUR_USER_ID')
    .then(() => alert("Invite sent"))
    .catch((err) => alert("Failed: " + err.text));
  };

  const deleteTestimonial = (index) => {
    const updated = testimonials.filter((_, i) => i !== index);
    localStorage.setItem('testimonials', JSON.stringify(updated));
    setTestimonials(updated);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="User email" className="p-2 border rounded mr-2" />
        <button onClick={sendInvite} className="bg-green-500 text-white px-4 py-2 rounded">Send Invite</button>
      </div>
      <div className="grid gap-4">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white p-4 rounded shadow">
            <p className="italic text-gray-600">"{t.message}"</p>
            <p className="mt-2 font-semibold">{t.name}</p>
            <button onClick={() => deleteTestimonial(i)} className="text-sm text-red-500 mt-2">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
