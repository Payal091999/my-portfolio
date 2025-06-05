import { useEffect, useState } from 'react';
import PageTemplate from './PageTemplate';

export default function TestimonialsPage() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('testimonials') || '[]');
    setTestimonials(data);
  }, []);

  return (
    <PageTemplate title="Testimonials">
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-md">
                <p className="text-gray-600 italic">"{t.message}"</p>
                <div className="mt-4 font-semibold text-gray-800">– {t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTemplate>
  );
}
