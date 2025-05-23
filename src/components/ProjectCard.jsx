import { motion } from "framer-motion";

export default function ProjectCard({ title, description, link }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white rounded-2xl shadow-md p-6 hover:scale-105 transition-transform duration-300"
    >
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline hover:text-blue-800"
        aria-label={`View project ${title}`}
      >
        View Project →
      </a>
    </motion.div>
  );
}
