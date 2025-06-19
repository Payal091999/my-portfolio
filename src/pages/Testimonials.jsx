import React from 'react';
import PageTemplate from '../components/PageTemplate';
import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      content: "Payal is an excellent developer with great attention to detail. She delivered our project ahead of schedule and exceeded our expectations.",
      name: "Sarah Johnson",
      role: "CEO at TechCorp"
    },
    {
      content: "I was impressed with Payal's problem-solving skills and her ability to work independently. She's a great addition to any team.",
      name: "Mike Thompson",
      role: "Project Manager at WebDev Solutions"
    },
    {
      content: "Payal's technical skills are top-notch, and she's always willing to learn new technologies. Highly recommend!",
      name: "Emily Chen",
      role: "Senior Developer at CodeHub"
    }
  ];

  return (
    <PageTemplate title="Testimonials">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">What Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 p-8 rounded-lg shadow-lg backdrop-blur-md"
            >
              <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
              <div className="text-right">
                <p className="font-semibold text-gray-400">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}
